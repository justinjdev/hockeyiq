import type { Arrow, Vec } from '../content/types';

/** Radius of a player token in rink feet. */
export const PLAYER_R = 3.4;

/** Turns an arrow's `from` (a point or an id) into a point. */
export type Resolve = (ref: Vec | string) => Vec;

/**
 * Where an arrow's head is drawn. When the arrow ends on a player token (ours or theirs: every
 * token is an obstacle), the tip is pulled back along the arrow so the head stays visible.
 */
export function tipOf(a: Arrow, resolve: Resolve, obstacles: Vec[]): Vec {
	const hit = obstacles.some((p) => Math.hypot(p.x - a.to.x, p.y - a.to.y) < PLAYER_R);
	if (!hit) return a.to;
	const back = a.via ?? resolve(a.from);
	const len = Math.hypot(a.to.x - back.x, a.to.y - back.y);
	if (len <= PLAYER_R + 1) return a.to;
	const k = (PLAYER_R + 1) / len;
	return { x: a.to.x - (a.to.x - back.x) * k, y: a.to.y - (a.to.y - back.y) * k };
}

/** SVG path for an arrow: a line, or a quadratic curve through `via`. `view` maps rink to screen. */
export function arrowPath(
	a: Arrow,
	resolve: Resolve,
	obstacles: Vec[],
	view: (p: Vec) => Vec = (p) => p
): string {
	const f = view(resolve(a.from));
	const t = view(tipOf(a, resolve, obstacles));
	if (!a.via) return `M ${f.x} ${f.y} L ${t.x} ${t.y}`;
	const v = view(a.via);
	return `M ${f.x} ${f.y} Q ${v.x} ${v.y} ${t.x} ${t.y}`;
}
