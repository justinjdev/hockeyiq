import { describe, expect, it } from 'vitest';
import { STORAGE_KEY, isMastered, loadProgress, recordResult } from '../../src/lib/quiz/progress';
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
		expect(loadProgress(s)).toEqual({
			'bo-standard/1/rw/drag': { correct: true, at: '2026-01-01T00:00:00.000Z' }
		});
	});

	it('is mastered only once every item latest result is correct', () => {
		const s = fakeStorage();
		recordResult(item, false, s);
		expect(isMastered(play, 'rw', loadProgress(s))).toBe(false);
		recordResult(item, true, s);
		expect(isMastered(play, 'rw', loadProgress(s))).toBe(true);
	});

	it('is not mastered with no results, or for a slot without quiz items', () => {
		expect(isMastered(play, 'rw', {})).toBe(false);
		expect(isMastered(play, 'nope', {})).toBe(false);
	});

	it('returns {} when getItem throws', () => {
		expect(loadProgress(throwing('getItem'))).toEqual({});
	});

	it('does not throw when setItem throws', () => {
		expect(() => recordResult(item, true, throwing('setItem'))).not.toThrow();
	});

	it.each(['not json', '[1,2]', 'null', '"x"'])('returns {} for stored value %s', (v) => {
		expect(loadProgress(fakeStorage({ [STORAGE_KEY]: v }))).toEqual({});
	});

	it('returns {} when no storage is available', () => {
		expect(loadProgress()).toEqual({});
		expect(() => recordResult(item, true)).not.toThrow();
	});
});
