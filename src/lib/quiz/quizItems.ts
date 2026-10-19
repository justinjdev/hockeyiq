import type { Play } from '../content/types';

export type QuizItem = { playId: string; step: number; slot: string; kind: 'drag' | 'decision' };

const KINDS = ['drag', 'decision'] as const;

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
	return items;
}

export function quizKey(i: QuizItem): string {
	return `${i.playId}/${i.step}/${i.slot}/${i.kind}`;
}
