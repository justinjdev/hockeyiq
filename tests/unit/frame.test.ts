import { describe, expect, it } from 'vitest';
import type { Play } from '../../src/lib/content/types';
import { framePlayForItem } from '../../src/lib/quiz/frame';
import { listQuizItems } from '../../src/lib/quiz/quizItems';
import { validPlay } from './fixtures';

const target = (cx: number, cy: number) => ({ kind: 'ellipse' as const, cx, cy, rx: 4, ry: 4 });

/**
 * Step 1 asks, in order: LW decision, RW drag (target around RW's spot), C drag (no start,
 * so it starts from step 0). RW skates into its target and RD passes into it.
 */
function play(): Play {
	const p = validPlay();
	const s = p.steps[1];
	s.positions.rw = { x: 40, y: 70 };
	s.positions.c = { x: 45, y: 40 };
	s.arrows = [
		{ kind: 'skate', from: 'rw', to: { x: 40, y: 70 } },
		{ kind: 'pass', from: 'rd', to: { x: 41, y: 71 } },
		{ kind: 'skate', from: 'c', to: { x: 45, y: 40 } },
		{ kind: 'skate', from: 'lw', to: { x: 30, y: 10 } }
	];
	const drag = (t: ReturnType<typeof target>, start?: { x: number; y: number }) => ({
		drag: { start, target: t, correct: 'Yes.', incorrect: 'No.' }
	});
	s.quiz = {
		lw: { decision: validPlay().steps[1].quiz!.lw.decision },
		rw: drag(target(40, 70), { x: 20, y: 75 }),
		c: drag(target(45, 40))
	};
	return p;
}

const step1 = (p: Play) => p.steps[1];

describe('framePlayForItem', () => {
	it('decision then drag: hides every later drag slot at the step', () => {
		const p = play();
		const items = listQuizItems(p);
		expect(items.map((i) => `${i.slot}/${i.kind}`)).toEqual(['lw/decision', 'rw/drag', 'c/drag']);
		const s = step1(framePlayForItem(p, items, 0));
		expect(s.positions.rw).toEqual({ x: 20, y: 75 });
		expect(s.positions.c).toEqual(p.steps[0].positions.c);
		expect(s.positions.lw).toEqual(p.steps[1].positions.lw);
		expect(s.arrows).toEqual([{ kind: 'skate', from: 'lw', to: { x: 30, y: 10 } }]);
	});

	it('drag then drag: the current and the later drag slot start away from their answers', () => {
		const p = play();
		const items = listQuizItems(p);
		const s = step1(framePlayForItem(p, items, 1));
		expect(s.positions.rw).toEqual({ x: 20, y: 75 });
		expect(s.positions.c).toEqual(p.steps[0].positions.c);
		expect(s.arrows.map((a) => a.from)).toEqual(['lw']);
	});

	it('shows answered drag slots at their real spot', () => {
		const p = play();
		const items = listQuizItems(p);
		const s = step1(framePlayForItem(p, items, 2));
		expect(s.positions.rw).toEqual({ x: 40, y: 70 });
		expect(s.positions.c).toEqual(p.steps[0].positions.c);
		expect(s.arrows.map((a) => a.from)).toEqual(['rw', 'rd', 'lw']);
	});

	it('only touches slots in the item list (single-position quiz)', () => {
		const p = play();
		const items = listQuizItems(p, 'lw');
		expect(framePlayForItem(p, items, 0)).toBe(p);
	});

	it('moves the puck with a hidden carrier', () => {
		const p = play();
		p.steps[1].puckCarrier = 'rw';
		p.steps[1].puck = { x: 41, y: 70 };
		const s = step1(framePlayForItem(p, listQuizItems(p), 0));
		expect(s.puck).toEqual({ x: 21, y: 75 });
	});

	it('leaves other steps and the input untouched', () => {
		const p = play();
		const before = structuredClone(p);
		const framed = framePlayForItem(p, listQuizItems(p), 1);
		expect(p).toEqual(before);
		expect(framed.steps[0]).toBe(p.steps[0]);
	});
});
