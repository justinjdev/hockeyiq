import type { Play } from '../content/types';

export type QuizItem = { playId: string; step: number; slot: string; kind: 'drag' | 'decision' };

const KINDS = ['drag', 'decision'] as const;

/**
 * Quiz items in asking order: by step, then every drag before every decision, then slot.
 * Decisions therefore run after all drags at their step are answered, so the canvas shows
 * every teammate at his true position.
 */
export function listQuizItems(play: Play, slot?: string): QuizItem[] {
	const items: QuizItem[] = [];
	play.steps.forEach((s, step) => {
		for (const [slotId, quiz] of Object.entries(s.quiz ?? {})) {
			if (slot !== undefined && slotId !== slot) continue;
			for (const kind of KINDS) {
				if (quiz[kind]) items.push({ playId: play.id, step, slot: slotId, kind });
			}
		}
	});
	return items.sort(
		(a, b) =>
			a.step - b.step ||
			KINDS.indexOf(a.kind) - KINDS.indexOf(b.kind) ||
			(a.slot < b.slot ? -1 : a.slot > b.slot ? 1 : 0)
	);
}

export function quizKey(i: QuizItem): string {
	return `${i.playId}/${i.step}/${i.slot}/${i.kind}`;
}
