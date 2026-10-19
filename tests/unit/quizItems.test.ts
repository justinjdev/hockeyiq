import { describe, expect, it } from 'vitest';
import { listQuizItems, quizKey } from '../../src/lib/quiz/quizItems';
import { validPlay } from './fixtures';

describe('listQuizItems', () => {
	it('lists the single drag item for rw', () => {
		expect(listQuizItems(validPlay(), 'rw')).toEqual([
			{ playId: 'bo-standard', step: 1, slot: 'rw', kind: 'drag' }
		]);
	});
	it('lists every quiz entry when no slot is given', () => {
		const p = validPlay();
		const total = p.steps.reduce(
			(n, s) =>
				n + Object.values(s.quiz ?? {}).reduce((m, q) => m + (q.drag ? 1 : 0) + (q.decision ? 1 : 0), 0),
			0
		);
		expect(listQuizItems(p)).toHaveLength(total);
		expect(total).toBe(5);
	});
	it('orders by step, then drag before decision', () => {
		const p = validPlay();
		const decision = p.steps[1].quiz!.lw.decision;
		p.steps[1].quiz!.rw.decision = decision;
		p.steps[0].quiz = { rw: { decision } };
		expect(listQuizItems(p, 'rw').map((i) => `${i.step}/${i.kind}`)).toEqual([
			'0/decision',
			'1/drag',
			'1/decision'
		]);
	});
	it('orders all positions by step, then kind, then slot', () => {
		const p = validPlay();
		const decision = p.steps[1].quiz!.lw.decision;
		p.steps[1].quiz!.rw.decision = decision;
		p.steps[0].quiz = { rw: { decision } };
		const order = listQuizItems(p).map((i) => `${i.step}/${i.kind}/${i.slot}`);
		const rank = (k: string) => (k === 'drag' ? 0 : 1);
		const sorted = [...order].sort((a, b) => {
			const [sa, ka, la] = a.split('/');
			const [sb, kb, lb] = b.split('/');
			return +sa - +sb || rank(ka) - rank(kb) || la.localeCompare(lb);
		});
		expect(order).toEqual(sorted);
		const step1 = order.filter((o) => o.startsWith('1/')).map((o) => o.split('/')[1]);
		expect(step1).toEqual([...step1].sort((a, b) => rank(a) - rank(b)));
		expect(order[0]).toBe('0/decision/rw');
	});
});

describe('quizKey', () => {
	it('joins play, step, slot and kind', () => {
		expect(quizKey({ playId: 'p', step: 2, slot: 'c', kind: 'drag' })).toBe('p/2/c/drag');
	});
});
