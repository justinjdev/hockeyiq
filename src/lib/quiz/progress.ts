import type { Play } from '../content/types';
import { listQuizItems, quizKey, type QuizItem } from './quizItems';

export const STORAGE_KEY = 'hockeyiq:progress:v2';
/** v1 keyed results by step index (`playId/index/slot/kind`); migrated to step ids on load. */
export const STORAGE_KEY_V1 = 'hockeyiq:progress:v1';

export type Progress = Record<string, { correct: boolean; at: string }>;

/** Each play's step ids in step order, for mapping v1 step indices to ids. */
export type StepIdMap = Record<string, string[]>;

export const stepIdMap = (plays: Play[]): StepIdMap =>
	Object.fromEntries(plays.map((p) => [p.id, p.steps.map((s) => s.id)]));

function defaultStorage(): Storage | undefined {
	try {
		return globalThis.localStorage;
	} catch {
		return undefined;
	}
}

function readRecord(storage: Storage | undefined, key: string): Progress {
	try {
		const raw = storage?.getItem(key);
		if (!raw) return {};
		const parsed: unknown = JSON.parse(raw);
		return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)
			? (parsed as Progress)
			: {};
	} catch {
		return {};
	}
}

const isResult = (v: unknown): v is Progress[string] =>
	typeof v === 'object' &&
	v !== null &&
	typeof (v as Progress[string]).correct === 'boolean' &&
	typeof (v as Progress[string]).at === 'string';

/**
 * Rewrites v1 keys to step ids using the current content (step order has not changed since v1
 * was written). Entries for unknown plays or steps, malformed keys and malformed results are dropped.
 */
export function migrateV1(v1: Progress, stepIds: StepIdMap): Progress {
	const out: Progress = {};
	for (const [key, result] of Object.entries(v1)) {
		const parts = key.split('/');
		if (parts.length !== 4 || !isResult(result)) continue;
		const [playId, index, slot, kind] = parts;
		if (!/^\d+$/.test(index) || (kind !== 'drag' && kind !== 'decision')) continue;
		const ids = Object.hasOwn(stepIds, playId) ? stepIds[playId] : undefined;
		const stepId = ids?.[Number(index)];
		if (!stepId) continue;
		out[quizKey({ playId, stepId, slot, kind })] = { correct: result.correct, at: result.at };
	}
	return out;
}

/**
 * Loads v2 progress. When v1 progress is still stored and `stepIds` is given, it is merged in
 * (v2 results win), v2 is saved and v1 removed. Never throws.
 */
export function loadProgress(
	stepIds?: StepIdMap,
	storage: Storage | undefined = defaultStorage()
): Progress {
	const progress = readRecord(storage, STORAGE_KEY);
	if (!stepIds) return progress;
	try {
		if (storage?.getItem(STORAGE_KEY_V1) == null) return progress;
	} catch {
		return progress;
	}
	const merged = { ...migrateV1(readRecord(storage, STORAGE_KEY_V1), stepIds), ...progress };
	try {
		storage?.setItem(STORAGE_KEY, JSON.stringify(merged));
		storage?.removeItem(STORAGE_KEY_V1);
	} catch {
		// Storage full or denied: keep v1 so the migration can run again next time.
	}
	return merged;
}

export function recordResult(
	item: QuizItem,
	correct: boolean,
	storage: Storage | undefined = defaultStorage(),
	now: Date = new Date()
): void {
	try {
		const progress = loadProgress(undefined, storage);
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
