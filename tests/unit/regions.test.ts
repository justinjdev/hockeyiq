import { describe, expect, it } from 'vitest';
import { pointInRegion, regionCenter } from '../../src/lib/quiz/regions';
import type { Region } from '../../src/lib/content/types';

const ellipse: Region = { kind: 'ellipse', cx: 20, cy: 70, rx: 6, ry: 4 };
const square: Region = {
	kind: 'polygon',
	points: [
		{ x: 0, y: 0 },
		{ x: 1, y: 0 },
		{ x: 1, y: 1 },
		{ x: 0, y: 1 }
	]
};

describe('pointInRegion', () => {
	it('contains the center of an ellipse', () => {
		expect(pointInRegion({ x: 20, y: 70 }, ellipse)).toBe(true);
	});
	it('excludes a point just past the x radius', () => {
		expect(pointInRegion({ x: 20 + 6 + 0.01, y: 70 }, ellipse)).toBe(false);
	});
	it('contains a point inside a polygon and excludes one outside', () => {
		expect(pointInRegion({ x: 0.5, y: 0.5 }, square)).toBe(true);
		expect(pointInRegion({ x: 1.5, y: 0.5 }, square)).toBe(false);
	});
});

describe('regionCenter', () => {
	it('returns the ellipse center', () => {
		expect(regionCenter(ellipse)).toEqual({ x: 20, y: 70 });
	});
	it('returns the polygon vertex average', () => {
		expect(regionCenter(square)).toEqual({ x: 0.5, y: 0.5 });
	});
});
