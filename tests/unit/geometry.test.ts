import { describe, expect, it } from 'vitest';
import { clampToRink, flipY, isOnIce } from '../../src/lib/rink/geometry';

describe('isOnIce', () => {
	it('accepts center ice', () => {
		expect(isOnIce({ x: 100, y: 42.5 })).toBe(true);
	});
	it('rejects the square corner outside the arc', () => {
		expect(isOnIce({ x: 1, y: 1 })).toBe(false);
	});
	it('accepts a point along the straight board near a corner', () => {
		expect(isOnIce({ x: 28, y: 0.5 })).toBe(true);
	});
	it('rejects points beyond the boards', () => {
		expect(isOnIce({ x: -1, y: 42.5 })).toBe(false);
		expect(isOnIce({ x: 100, y: 86 })).toBe(false);
	});
});

describe('clampToRink', () => {
	it('pulls a point past the end boards back onto the boards', () => {
		const p = clampToRink({ x: -10, y: 42.5 });
		expect(p.x).toBeGreaterThanOrEqual(0);
		expect(p.x).toBeLessThanOrEqual(1);
		expect(isOnIce(p)).toBe(true);
	});
	it('lands a square-corner point on the corner arc', () => {
		const p = clampToRink({ x: 0, y: 0 });
		expect(isOnIce(p)).toBe(true);
		expect(Math.hypot(p.x - 28, p.y - 28)).toBeLessThanOrEqual(28.01);
	});
	it('leaves on-ice points unchanged', () => {
		expect(clampToRink({ x: 50, y: 20 })).toEqual({ x: 50, y: 20 });
	});
	it('handles the far corner', () => {
		const p = clampToRink({ x: 200, y: 85 });
		expect(isOnIce(p)).toBe(true);
	});
});

describe('flipY', () => {
	it('mirrors across the long axis', () => {
		expect(flipY({ x: 10, y: 80 })).toEqual({ x: 10, y: 5 });
	});
});
