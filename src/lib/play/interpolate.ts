import type { Play, Vec } from '../content/types';

export type Frame = { positions: Record<string, Vec>; puck: Vec };

const clamp01 = (t: number) => Math.min(Math.max(t, 0), 1);

export function lerp(a: Vec, b: Vec, t: number): Vec {
	return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

/** Blends two frames; ids missing from `a` start at their `b` position. */
export function lerpFrame(a: Frame, b: Frame, t: number): Frame {
	const k = clamp01(t);
	const positions: Record<string, Vec> = {};
	for (const [id, to] of Object.entries(b.positions)) {
		positions[id] = lerp(a.positions[id] ?? to, to, k);
	}
	return { positions, puck: lerp(a.puck, b.puck, k) };
}

export function frameAt(play: Play, step: number): Frame {
	const s = play.steps[step];
	return { positions: s.positions, puck: s.puck };
}

export function positionsAt(play: Play, from: number, to: number, t: number): Frame {
	return lerpFrame(frameAt(play, from), frameAt(play, to), t);
}
