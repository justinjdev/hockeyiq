import type { Region, Vec } from '../content/types';

export function pointInRegion(p: Vec, r: Region): boolean {
	if (r.kind === 'ellipse') {
		const dx = (p.x - r.cx) / r.rx;
		const dy = (p.y - r.cy) / r.ry;
		return dx * dx + dy * dy <= 1;
	}
	const pts = r.points;
	let inside = false;
	for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
		const a = pts[i];
		const b = pts[j];
		if (a.y > p.y !== b.y > p.y && p.x < ((b.x - a.x) * (p.y - a.y)) / (b.y - a.y) + a.x) {
			inside = !inside;
		}
	}
	return inside;
}

export function regionCenter(r: Region): Vec {
	if (r.kind === 'ellipse') return { x: r.cx, y: r.cy };
	const n = r.points.length;
	return {
		x: r.points.reduce((s, q) => s + q.x, 0) / n,
		y: r.points.reduce((s, q) => s + q.y, 0) / n
	};
}
