import type { Comparison, Lesson, Play } from './types';
import { listQuizItems, quizKey } from '../quiz/quizItems';

/** What list pages need from a play, without its steps. */
export type PlayMeta = Pick<
	Play,
	'id' | 'title' | 'category' | 'system' | 'strength' | 'summary' | 'slots' | 'keyConcepts'
> & {
	phases: string[];
	/** Progress keys per slot, for mastery counts. */
	quizKeys: Record<string, string[]>;
};

export type LessonMeta = Pick<Lesson, 'id' | 'title' | 'summary'>;

export type ComparisonMeta = Pick<Comparison, 'id' | 'summary'> & { aTitle: string; bTitle: string };

export function playMeta(p: Play): PlayMeta {
	const phases = [...new Set(p.steps.flatMap((s) => (s.phase ? [s.phase] : [])))];
	const quizKeys = Object.fromEntries(
		p.slots.map((s) => [s.id, listQuizItems(p, s.id).map(quizKey)])
	);
	const { id, title, category, system, strength, summary, slots, keyConcepts } = p;
	return { id, title, category, system, strength, summary, slots, keyConcepts, phases, quizKeys };
}

export const lessonMeta = ({ id, title, summary }: Lesson): LessonMeta => ({ id, title, summary });
