import { describe, expect, it } from 'vitest';
import { playMetas, plays } from '../../src/lib/content/registry';
import { listQuizItems, quizKey } from '../../src/lib/quiz/quizItems';
import { allCorrect, isMastered, type Progress } from '../../src/lib/quiz/progress';

describe('play metadata', () => {
	it('carries the same quiz keys per slot as the full play', () => {
		for (const [i, p] of plays.entries()) {
			const meta = playMetas[i];
			expect(meta.id).toBe(p.id);
			for (const s of p.slots) {
				expect(meta.quizKeys[s.id], `${p.id}/${s.id}`).toEqual(listQuizItems(p, s.id).map(quizKey));
			}
		}
	});

	it('agrees with isMastered once every item is correct', () => {
		const p = plays.find((x) => listQuizItems(x).length > 0)!;
		const slot = listQuizItems(p)[0].slot;
		const progress: Progress = Object.fromEntries(
			listQuizItems(p, slot).map((i) => [quizKey(i), { correct: true, at: '' }])
		);
		const keys = playMetas.find((m) => m.id === p.id)!.quizKeys[slot];
		expect(allCorrect(keys, progress)).toBe(true);
		expect(isMastered(p, slot, progress)).toBe(true);
	});

	it('leaves steps out', () => {
		expect(playMetas.every((m) => !('steps' in m))).toBe(true);
	});
});
