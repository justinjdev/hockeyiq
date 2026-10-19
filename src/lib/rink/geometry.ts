import type { Vec } from '../content/types';

export const RINK = {
	length: 200,
	height: 85,
	cornerRadius: 28,
	goalLineX: [11, 189],
	blueLineX: [75, 125],
	redLineX: 100,
	faceoffDots: [
		{ x: 31, y: 20.5 },
		{ x: 31, y: 64.5 },
		{ x: 169, y: 20.5 },
		{ x: 169, y: 64.5 },
		{ x: 80, y: 20.5 },
		{ x: 80, y: 64.5 },
		{ x: 120, y: 20.5 },
		{ x: 120, y: 64.5 }
	] satisfies Vec[]
} as const;

const R = RINK.cornerRadius;
const EPSILON = 1e-9;

/** Center of the corner arc that governs `p`, or null when `p` is outside every corner square. */
function cornerCenter(p: Vec): Vec | null {
	const cx = p.x < R ? R : p.x > RINK.length - R ? RINK.length - R : null;
	const cy = p.y < R ? R : p.y > RINK.height - R ? RINK.height - R : null;
	return cx !== null && cy !== null ? { x: cx, y: cy } : null;
}

export function isOnIce(p: Vec): boolean {
	if (p.x < 0 || p.x > RINK.length || p.y < 0 || p.y > RINK.height) return false;
	const c = cornerCenter(p);
	return c === null || Math.hypot(p.x - c.x, p.y - c.y) <= R + EPSILON;
}

export function clampToRink(p: Vec): Vec {
	const q = {
		x: Math.min(Math.max(p.x, 0), RINK.length),
		y: Math.min(Math.max(p.y, 0), RINK.height)
	};
	const c = cornerCenter(q);
	if (!c) return q;
	const d = Math.hypot(q.x - c.x, q.y - c.y);
	if (d <= R) return q;
	const k = R / d;
	return { x: c.x + (q.x - c.x) * k, y: c.y + (q.y - c.y) * k };
}

export function flipY(p: Vec): Vec {
	return { x: p.x, y: RINK.height - p.y };
}

/** Points along the quadratic Bezier from `a` to `b` with control point `via` (a straight line without one). */
export function sampleCurve(a: Vec, b: Vec, via?: Vec, n = 50): Vec[] {
	const c = via ?? { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
	const pts: Vec[] = [];
	for (let i = 0; i <= n; i++) {
		const t = i / n;
		const u = 1 - t;
		pts.push({
			x: u * u * a.x + 2 * t * u * c.x + t * t * b.x,
			y: u * u * a.y + 2 * t * u * c.y + t * t * b.y
		});
	}
	return pts;
}
