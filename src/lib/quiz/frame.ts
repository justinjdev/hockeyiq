import type { Play, Vec } from '../content/types';
import { clampToRink } from '../rink/geometry';
import { pointInRegion } from './regions';
import type { QuizItem } from './quizItems';

/** Where a drag question starts the slot: `drag.start`, else its spot on the previous step. */
function dragStart(play: Play, step: number, slot: string): Vec {
	return (
		play.steps[step].quiz?.[slot]?.drag?.start ?? play.steps[Math.max(step - 1, 0)].positions[slot]
	);
}

/**
 * The play as `items[index]` should be shown. The quizzed slot of a drag question, and every
 * slot whose drag question at the same step is still to come, sit at their drag start instead
 * of their answer; their arrows (and any arrow ending in their target) are dropped, and the
 * puck moves with any of them that carries it.
 */
export function framePlayForItem(play: Play, items: QuizItem[], index: number): Play {
	const item = items[index];
	if (!item) return play;
	const step = play.steps[item.step];
	const pending = items
		.slice(index)
		.filter((i) => i.step === item.step && i.kind === 'drag')
		.map((i) => i.slot);
	if (pending.length === 0) return play;

	const positions = { ...step.positions };
	for (const slot of pending) positions[slot] = dragStart(play, item.step, slot);
	const targets = pending.map((slot) => step.quiz![slot].drag!.target);
	const arrows = step.arrows.filter(
		(a) =>
			!(typeof a.from === 'string' && pending.includes(a.from)) &&
			!targets.some((t) => pointInRegion(a.to, t))
	);
	let puck = step.puck;
	if (step.puckCarrier && pending.includes(step.puckCarrier)) {
		const from = step.positions[step.puckCarrier];
		const to = positions[step.puckCarrier];
		puck = clampToRink({ x: puck.x + to.x - from.x, y: puck.y + to.y - from.y });
	}
	return {
		...play,
		steps: play.steps.map((s, n) => (n === item.step ? { ...s, positions, arrows, puck } : s))
	};
}
