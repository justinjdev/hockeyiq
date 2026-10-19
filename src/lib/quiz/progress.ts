import type { Play } from '../content/types';
import { listQuizItems, quizKey, type QuizItem } from './quizItems';

export const STORAGE_KEY = 'hockeyiq:progress:v1';

export type Progress = Record<string, { correct: boolean; at: string }>;

function defaultStorage(): Storage | undefined {
	try {
		return globalThis.localStorage;
	} catch {
		return undefined;
	}
}

export function loadProgress(storage: Storage | undefined = defaultStorage()): Progress {
	try {
		const raw = storage?.getItem(STORAGE_KEY);
		if (!raw) return {};
		const parsed: unknown = JSON.parse(raw);
		return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)
			? (parsed as Progress)
			: {};
	} catch {
		return {};
	}
}

export function recordResult(
	item: QuizItem,
	correct: boolean,
	storage: Storage | undefined = defaultStorage(),
	now: Date = new Date()
): void {
	try {
		const progress = loadProgress(storage);
		progress[quizKey(item)] = { correct, at: now.toISOString() };
		storage?.setItem(STORAGE_KEY, JSON.stringify(progress));
	} catch {
		// Storage unavailable or full: progress just isn't saved.
	}
}

/** True when every key is answered correctly (and there is at least one). */
export function allCorrect(keys: string[], progress: Progress): boolean {
	return keys.length > 0 && keys.every((k) => progress[k]?.correct === true);
}

export function isMastered(play: Play, slot: string, progress: Progress): boolean {
	return allCorrect(listQuizItems(play, slot).map(quizKey), progress);
}
