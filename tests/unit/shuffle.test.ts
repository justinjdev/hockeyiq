import { describe, expect, it } from 'vitest';
import { shuffledOrder } from '../../src/lib/quiz/shuffle';
import { listQuizItems, quizKey } from '../../src/lib/quiz/quizItems';
import { plays } from '../../src/lib/content/registry';

describe('shuffledOrder', () => {
	it('is a permutation of 0..n-1', () => {
		for (const n of [0, 1, 2, 3, 4, 7]) {
			for (const seed of ['a', 'bo-standard/1/rw/decision', 'x/y']) {
				expect([...shuffledOrder(n, seed)].sort((a, b) => a - b)).toEqual(
					Array.from({ length: n }, (_, i) => i)
				);
			}
		}
	});

	it('is deterministic per seed', () => {
		expect(shuffledOrder(4, 'seed-1')).toEqual(shuffledOrder(4, 'seed-1'));
	});

	it('varies with the seed', () => {
		const orders = new Set(Array.from({ length: 30 }, (_, i) => shuffledOrder(4, `s${i}`).join()));
		expect(orders.size).toBeGreaterThan(5);
	});

	it('moves the correct option around across the library', () => {
		const shown = new Map<number, number>();
		for (const p of plays) {
			for (const item of listQuizItems(p)) {
				if (item.kind !== 'decision') continue;
				const options = p.steps[item.step].quiz![item.slot].decision!.options;
				const order = shuffledOrder(options.length, quizKey(item));
				const at = order.findIndex((i) => options[i].correct);
				shown.set(at, (shown.get(at) ?? 0) + 1);
			}
		}
		expect(shown.size).toBeGreaterThanOrEqual(3);
		const total = [...shown.values()].reduce((a, b) => a + b, 0);
		for (const count of shown.values()) expect(count / total).toBeLessThan(0.5);
	});
});
