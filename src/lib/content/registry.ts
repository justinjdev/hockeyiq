import type { Comparison, Lesson, Play, PlayCategory } from './types';
import { comparisons as allComparisons } from './comparisons';

const byId = <T extends { id: string }>(a: T, b: T) => a.id.localeCompare(b.id);

export const plays: Play[] = Object.values(
	import.meta.glob<Play>('./plays/**/*.ts', { eager: true, import: 'default' })
).sort(byId);

export const lessons: Lesson[] = Object.values(
	import.meta.glob<Lesson>('./lessons/**/*.ts', { eager: true, import: 'default' })
).sort(byId);

export const comparisons: Comparison[] = [...allComparisons].sort(byId);

export const getPlay = (id: string): Play | undefined => plays.find((p) => p.id === id);
export const getLesson = (id: string): Lesson | undefined => lessons.find((l) => l.id === id);
export const getComparison = (id: string): Comparison | undefined =>
	comparisons.find((c) => c.id === id);

export const playsByCategory = (c: PlayCategory): Play[] => plays.filter((p) => p.category === c);

export const CATEGORY_LABELS: Record<PlayCategory, string> = {
	'd-zone': 'D-zone',
	breakout: 'Breakouts',
	'neutral-zone': 'Neutral zone',
	forecheck: 'Forecheck',
	'o-zone': 'O-zone',
	'power-play': 'Power play',
	'penalty-kill': 'Penalty kill',
	faceoff: 'Faceoffs'
};
