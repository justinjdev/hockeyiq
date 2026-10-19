import { describe, expect, it } from 'vitest';
import type { Arrow, Vec } from '../../src/lib/content/types';
import { PLAYER_R, arrowPath, tipOf } from '../../src/lib/rink/arrows';

const players: Record<string, Vec> = { a: { x: 10, y: 10 }, b: { x: 30, y: 10 } };
const resolve = (ref: Vec | string): Vec => (typeof ref === 'string' ? players[ref] : ref);

describe('tipOf', () => {
	it('leaves the tip alone when it lands on open ice', () => {
		const a: Arrow = { kind: 'pass', from: 'a', to: { x: 20, y: 20 } };
		expect(tipOf(a, resolve, Object.values(players))).toEqual({ x: 20, y: 20 });
	});

	it('pulls the tip back along the arrow when it lands on any player token', () => {
		const a: Arrow = { kind: 'pass', from: 'a', to: { x: 30, y: 10 } };
		expect(tipOf(a, resolve, Object.values(players))).toEqual({ x: 30 - (PLAYER_R + 1), y: 10 });
	});

	it('pulls back toward the control point on a curve', () => {
		const a: Arrow = { kind: 'skate', from: 'a', to: { x: 30, y: 10 }, via: { x: 30, y: 30 } };
		expect(tipOf(a, resolve, [players.b])).toEqual({ x: 30, y: 10 + (PLAYER_R + 1) });
	});

	it('keeps the tip on very short arrows', () => {
		const a: Arrow = { kind: 'pass', from: { x: 28, y: 10 }, to: { x: 30, y: 10 } };
		expect(tipOf(a, resolve, [players.b])).toEqual({ x: 30, y: 10 });
	});
});

describe('arrowPath', () => {
	it('draws a line or a quadratic curve', () => {
		expect(arrowPath({ kind: 'pass', from: 'a', to: { x: 20, y: 20 } }, resolve, [])).toBe('M 10 10 L 20 20');
		expect(
			arrowPath({ kind: 'skate', from: 'a', to: { x: 20, y: 20 }, via: { x: 10, y: 20 } }, resolve, [])
		).toBe('M 10 10 Q 10 20 20 20');
	});

	it('maps every point through view', () => {
		const view = (p: Vec) => ({ x: p.x, y: 85 - p.y });
		expect(
			arrowPath({ kind: 'skate', from: 'a', to: { x: 20, y: 20 }, via: { x: 10, y: 20 } }, resolve, [], view)
		).toBe('M 10 75 Q 10 65 20 65');
	});
});
