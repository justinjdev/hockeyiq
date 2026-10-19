import type { Play } from '../content/types';

export type StudyParams = { step: number; slot: string; flip: boolean };

/** `?step=` is 1-based in the URL; the result is 0-based and clamped to the play. */
export function parseStudyParams(play: Play, search: URLSearchParams): StudyParams {
	const raw = Number.parseInt(search.get('step') ?? '', 10);
	const step = Number.isFinite(raw) && raw >= 1 ? Math.min(raw, play.steps.length) - 1 : 0;
	const as = search.get('as');
	const slot = play.slots.some((s) => s.id === as) ? (as as string) : play.slots[0].id;
	return { step, slot, flip: search.get('flip') === '1' };
}
