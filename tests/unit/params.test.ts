import { describe, expect, it } from 'vitest';
import { parseStudyParams } from '../../src/lib/play/params';
import { validPlay } from './fixtures';

const play = () => {
	const p = validPlay();
	p.steps = [...p.steps, ...p.steps]; // 4 steps
	return p;
};
const q = (s: string) => new URLSearchParams(s);

describe('parseStudyParams', () => {
	it('defaults to step 0, first slot, unflipped', () => {
		expect(parseStudyParams(play(), q(''))).toEqual({ step: 0, slot: 'lw', flip: false });
	});
	it('converts 1-based step to 0-based', () => {
		expect(parseStudyParams(play(), q('step=2')).step).toBe(1);
	});
	it('clamps a too-large step to the last', () => {
		expect(parseStudyParams(play(), q('step=99')).step).toBe(3);
	});
	it('falls back to 0 for step=0, negatives and non-numbers', () => {
		for (const v of ['0', '-3', 'abc', '']) {
			expect(parseStudyParams(play(), q(`step=${v}`)).step).toBe(0);
		}
	});
	it('accepts a known slot and rejects an unknown one', () => {
		expect(parseStudyParams(play(), q('as=rw')).slot).toBe('rw');
		expect(parseStudyParams(play(), q('as=nope')).slot).toBe('lw');
	});
	it('flips only on flip=1', () => {
		expect(parseStudyParams(play(), q('flip=1')).flip).toBe(true);
		expect(parseStudyParams(play(), q('flip=0')).flip).toBe(false);
	});
});
