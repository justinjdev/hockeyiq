import { describe, expect, it } from 'vitest';
import { lerp, positionsAt } from '../../src/lib/play/interpolate';
import { validPlay } from './fixtures';

function play() {
	const p = validPlay();
	p.steps[1].positions.rw = { x: 40, y: 80 };
	p.steps[1].puck = { x: 35, y: 45 };
	return p;
}

describe('lerp', () => {
	it('interpolates both axes', () => {
		expect(lerp({ x: 0, y: 10 }, { x: 10, y: 20 }, 0.25)).toEqual({ x: 2.5, y: 12.5 });
	});
});

describe('positionsAt', () => {
	it('t=0 equals the from step', () => {
		const p = play();
		const r = positionsAt(p, 0, 1, 0);
		expect(r.positions).toEqual(p.steps[0].positions);
		expect(r.puck).toEqual(p.steps[0].puck);
	});

	it('t=1 equals the to step', () => {
		const p = play();
		const r = positionsAt(p, 0, 1, 1);
		expect(r.positions).toEqual(p.steps[1].positions);
		expect(r.puck).toEqual(p.steps[1].puck);
	});

	it('t=0.5 is the midpoint', () => {
		const r = positionsAt(play(), 0, 1, 0.5);
		expect(r.positions.rw).toEqual({ x: 30, y: 75 });
		expect(r.puck).toEqual({ x: 25, y: 50 });
	});

	it('clamps t above 1 and below 0', () => {
		const p = play();
		expect(positionsAt(p, 0, 1, 1.7)).toEqual(positionsAt(p, 0, 1, 1));
		expect(positionsAt(p, 0, 1, -0.4)).toEqual(positionsAt(p, 0, 1, 0));
	});

	it('from === to returns that step', () => {
		const p = play();
		const r = positionsAt(p, 1, 1, 0.3);
		expect(r.positions).toEqual(p.steps[1].positions);
		expect(r.puck).toEqual(p.steps[1].puck);
	});
});
