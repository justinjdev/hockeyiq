import type { PlayCategory } from './types';

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

export const CATEGORIES = Object.keys(CATEGORY_LABELS) as PlayCategory[];
