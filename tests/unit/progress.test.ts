import { describe, expect, it } from 'vitest';
import {
	STORAGE_KEY,
	STORAGE_KEY_V1,
	isMastered,
	loadProgress,
	migrateV1,
	recordResult,
	stepIdMap
} from '../../src/lib/quiz/progress';
import { listQuizItems } from '../../src/lib/quiz/quizItems';
import { validPlay } from './fixtures';

function fakeStorage(initial: Record<string, string> = {}): Storage {
	const data = new Map(Object.entries(initial));
	return {
		get length() {
			return data.size;
		},
		clear: () => data.clear(),
		getItem: (k) => data.get(k) ?? null,
		key: (i) => [...data.keys()][i] ?? null,
		removeItem: (k) => void data.delete(k),
		setItem: (k, v) => void data.set(k, v)
	};
}

const throwing = (which: 'getItem' | 'setItem'): Storage => {
	const s = fakeStorage();
	s[which] = () => {
		throw new Error('denied');
	};
	return s;
};

describe('progress', () => {
	const play = validPlay();
	const [item] = listQuizItems(play, 'rw');

	it('round-trips a recorded result', () => {
		const s = fakeStorage();
		recordResult(item, true, s, new Date('2026-01-01T00:00:00Z'));
		expect(loadProgress(undefined, s)).toEqual({
			'bo-standard/move/rw/drag': { correct: true, at: '2026-01-01T00:00:00.000Z' }
		});
	});

	it('is mastered only once every item latest result is correct', () => {
		const s = fakeStorage();
		recordResult(item, false, s);
		expect(isMastered(play, 'rw', loadProgress(undefined, s))).toBe(false);
		recordResult(item, true, s);
		expect(isMastered(play, 'rw', loadProgress(undefined, s))).toBe(true);
	});

	it('is not mastered with no results, or for a slot without quiz items', () => {
		expect(isMastered(play, 'rw', {})).toBe(false);
		expect(isMastered(play, 'nope', {})).toBe(false);
	});

	it('returns {} when getItem throws', () => {
		expect(loadProgress(undefined, throwing('getItem'))).toEqual({});
	});

	it('does not throw when setItem throws', () => {
		expect(() => recordResult(item, true, throwing('setItem'))).not.toThrow();
	});

	it.each(['not json', '[1,2]', 'null', '"x"'])('returns {} for stored value %s', (v) => {
		expect(loadProgress(undefined, fakeStorage({ [STORAGE_KEY]: v }))).toEqual({});
	});

	it('returns {} when no storage is available', () => {
		expect(loadProgress()).toEqual({});
		expect(loadProgress(stepIdMap([play]))).toEqual({});
		expect(() => recordResult(item, true)).not.toThrow();
	});
});

describe('v1 progress migration', () => {
	const play = validPlay();
	const ids = stepIdMap([play]);
	const ok = (at = 't1') => ({ correct: true, at });

	it('maps each play to its step ids in order', () => {
		expect(ids).toEqual({ 'bo-standard': ['setup', 'move'] });
	});

	it('moves v1 results to v2 keys, saves v2 and removes v1', () => {
		const v1 = { 'bo-standard/1/rw/drag': ok(), 'bo-standard/0/lw/decision': { correct: false, at: 't0' } };
		const s = fakeStorage({ [STORAGE_KEY_V1]: JSON.stringify(v1) });
		const expected = {
			'bo-standard/move/rw/drag': ok(),
			'bo-standard/setup/lw/decision': { correct: false, at: 't0' }
		};
		expect(loadProgress(ids, s)).toEqual(expected);
		expect(JSON.parse(s.getItem(STORAGE_KEY)!)).toEqual(expected);
		expect(s.getItem(STORAGE_KEY_V1)).toBeNull();
		expect(isMastered(play, 'rw', loadProgress(ids, s))).toBe(true);
	});

	it('drops v1 keys for plays or steps that no longer exist, and malformed entries', () => {
		const v1 = {
			'gone-play/0/rw/drag': ok(),
			'bo-standard/7/rw/drag': ok(),
			'bo-standard/x/rw/drag': ok(),
			'bo-standard/1/rw/other': ok(),
			'bo-standard/1/rw': ok(),
			'bo-standard/1/c/decision': 'yes',
			'bo-standard/1/lw/decision': { correct: 'true', at: 't' },
			'constructor/0/rw/drag': ok(),
			'bo-standard/1/rw/drag': ok('kept')
		};
		expect(migrateV1(v1 as never, ids)).toEqual({ 'bo-standard/move/rw/drag': ok('kept') });
	});

	it.each(['not json', '[1,2]', 'null', '"x"', '{"bo-standard/1/rw/drag": 5}'])(
		'discards corrupt v1 value %s without losing v2',
		(v) => {
			const v2 = { 'bo-standard/move/c/decision': ok() };
			const s = fakeStorage({ [STORAGE_KEY_V1]: v, [STORAGE_KEY]: JSON.stringify(v2) });
			expect(loadProgress(ids, s)).toEqual(v2);
			expect(s.getItem(STORAGE_KEY_V1)).toBeNull();
		}
	);

	it('merges v1 into existing v2, with v2 results winning', () => {
		const s = fakeStorage({
			[STORAGE_KEY_V1]: JSON.stringify({ 'bo-standard/1/rw/drag': ok('old'), 'bo-standard/1/c/decision': ok() }),
			[STORAGE_KEY]: JSON.stringify({ 'bo-standard/move/rw/drag': { correct: false, at: 'new' } })
		});
		expect(loadProgress(ids, s)).toEqual({
			'bo-standard/move/rw/drag': { correct: false, at: 'new' },
			'bo-standard/move/c/decision': ok()
		});
	});

	it('leaves v1 alone when loaded without a step-id map', () => {
		const s = fakeStorage({ [STORAGE_KEY_V1]: JSON.stringify({ 'bo-standard/1/rw/drag': ok() }) });
		expect(loadProgress(undefined, s)).toEqual({});
		expect(s.getItem(STORAGE_KEY_V1)).not.toBeNull();
	});

	it('keeps v1 for a later retry when saving v2 fails, and still returns the migrated result', () => {
		const s = fakeStorage({ [STORAGE_KEY_V1]: JSON.stringify({ 'bo-standard/1/rw/drag': ok() }) });
		s.setItem = () => {
			throw new Error('full');
		};
		expect(loadProgress(ids, s)).toEqual({ 'bo-standard/move/rw/drag': ok() });
		expect(s.getItem(STORAGE_KEY_V1)).not.toBeNull();
	});

	it('maps v1 keys from the real content', async () => {
		const { plays } = await import('../../src/lib/content/registry');
		const bo = plays.find((p) => p.id === 'bo-standard')!;
		const s = fakeStorage({ [STORAGE_KEY_V1]: JSON.stringify({ 'bo-standard/2/rw/drag': ok() }) });
		expect(loadProgress(stepIdMap(plays), s)).toEqual({ [`bo-standard/${bo.steps[2].id}/rw/drag`]: ok() });
	});
});
