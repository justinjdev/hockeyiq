import { describe, expect, it } from 'vitest';
import { plays } from '../../src/lib/content/registry';
import { lintPlay } from '../../src/lib/content/lint';
import type { Play } from '../../src/lib/content/types';
import { validPlay } from './fixtures';

const messages = (p: Play) => lintPlay(p).map((i) => `${i.where} ${i.message}`);
const has = (p: Play, text: string) => messages(p).some((m) => m.includes(text));

describe('lintPlay', () => {
	it('accepts the clean fixture', () => {
		expect(messages(validPlay())).toEqual([]);
	});

	describe('pass lanes', () => {
		it('flags an opponent within 3 ft of a pass', () => {
			const p = validPlay();
			p.steps[0].positions.o1 = { x: 20, y: 48 };
			expect(has(p, 'pass lane: o1')).toBe(true);
		});

		it('accepts the same pass when marked contested', () => {
			const p = validPlay();
			p.steps[0].positions.o1 = { x: 20, y: 48 };
			p.steps[0].arrows[0].contested = true;
			expect(has(p, 'pass lane')).toBe(false);
		});

		it('samples the curve, not the chord', () => {
			const p = validPlay();
			// Straight lane is clear; the curve bows through o1.
			p.steps[0].positions.o1 = { x: 26, y: 52 };
			expect(has(p, 'pass lane')).toBe(false);
			p.steps[0].arrows[0].via = { x: 35, y: 60 };
			expect(has(p, 'pass lane: o1')).toBe(true);
		});

		it('takes the receiver only from the passer\'s team', () => {
			const p = validPlay();
			// A pass ending on an opponent is an interception, not a reception.
			p.steps[0].arrows[0].to = { x: 60, y: 30 };
			expect(has(p, 'pass lane: o2')).toBe(true);
		});

		it('resolves a pass from the puck via the puck carrier', () => {
			const p = validPlay();
			p.steps[0].puckCarrier = 'o2';
			p.steps[0].puck = { x: 60, y: 30 };
			p.steps[0].arrows = [{ kind: 'pass', from: 'puck', to: { x: 60, y: 60 } }];
			p.steps[0].positions.c = { x: 61, y: 45 };
			expect(has(p, 'pass lane: c')).toBe(true);
			expect(has(p, 'pass lane: o3')).toBe(false);
		});

		it('checks our players for an opponent pass', () => {
			const p = validPlay();
			p.steps[0].arrows = [{ kind: 'pass', from: 'o2', to: { x: 60, y: 60 } }];
			p.steps[0].positions.c = { x: 61, y: 45 };
			expect(has(p, 'pass lane: c')).toBe(true);
			expect(has(p, 'pass lane: o3')).toBe(false);
		});
	});

	describe('nets', () => {
		it('flags a player or puck inside a net', () => {
			const p = validPlay();
			p.steps[0].positions.ld = { x: 9, y: 42 };
			p.steps[1].puck = { x: 191, y: 42 };
			expect(has(p, 'net: ld is inside a net')).toBe(true);
			expect(has(p, 'net: puck is inside a net')).toBe(true);
		});

		it('flags a skate route that brushes the net inside the margin', () => {
			const p = validPlay();
			p.steps[0].positions.ld = { x: 4, y: 37 };
			p.steps[0].arrows = [{ kind: 'skate', from: 'ld', to: { x: 16, y: 38.5 } }];
			expect(has(p, 'skate route passes through or too close')).toBe(true);
		});

		it('flags a pass through a net', () => {
			const p = validPlay();
			p.steps[0].arrows = [{ kind: 'pass', from: 'ld', to: { x: 5, y: 55 }, contested: true }];
			p.steps[0].positions.ld = { x: 12, y: 30 };
			expect(has(p, 'net: pass passes through a net')).toBe(true);
		});

		it('allows a shot ending at the net mouth but not one through the net', () => {
			const p = validPlay();
			p.steps[0].positions.lw = { x: 160, y: 42 };
			p.steps[0].arrows = [{ kind: 'shot', from: 'lw', to: { x: 189, y: 43 } }];
			expect(has(p, 'net:')).toBe(false);
			p.steps[0].arrows = [{ kind: 'shot', from: 'lw', to: { x: 196, y: 43 } }];
			expect(has(p, 'net: shot passes through a net')).toBe(true);
		});

		it('flags a skate route through a net but not one around it', () => {
			const p = validPlay();
			p.steps[0].positions.ld = { x: 4, y: 30 };
			p.steps[0].arrows = [{ kind: 'skate', from: 'ld', to: { x: 14, y: 55 } }];
			expect(has(p, 'skate route passes through')).toBe(true);
			p.steps[0].arrows[0].via = { x: -3, y: 50 };
			expect(has(p, 'skate route passes through')).toBe(false);
		});
	});

	describe('offside', () => {
		it('flags our skater past their blue line before the puck', () => {
			const p = validPlay();
			p.steps[0].puck = { x: 120, y: 40 };
			p.steps[0].positions.lw = { x: 130, y: 10 };
			expect(has(p, 'offside: lw')).toBe(true);
		});

		it('flags a non-carrier skate route ending past the blue line before the puck', () => {
			const p = validPlay();
			p.steps[0].puck = { x: 110, y: 40 };
			p.steps[0].positions.lw = { x: 115, y: 10 };
			p.steps[0].arrows = [{ kind: 'skate', from: 'lw', to: { x: 135, y: 10 } }];
			expect(has(p, 'offside: lw skates to')).toBe(true);
			p.steps[0].arrows[0].to = { x: 123, y: 10 };
			expect(has(p, 'offside')).toBe(false);
		});

		it('does not flag the carrier skating the puck over the line', () => {
			const p = validPlay();
			p.steps[0].puck = { x: 116, y: 10 };
			p.steps[0].puckCarrier = 'lw';
			p.steps[0].positions.lw = { x: 115, y: 10 };
			p.steps[0].arrows = [{ kind: 'skate', from: 'lw', to: { x: 135, y: 10 } }];
			expect(has(p, 'offside')).toBe(false);
		});

		it('honours allowOffside', () => {
			const p = validPlay();
			p.steps[0].puck = { x: 120, y: 40 };
			p.steps[0].positions.lw = { x: 130, y: 10 };
			p.steps[0].allowOffside = true;
			expect(has(p, 'offside')).toBe(false);
		});

		it('checks opponents only when they carry the puck', () => {
			const p = validPlay();
			p.steps[0].puck = { x: 80, y: 30 };
			p.steps[0].positions.o2 = { x: 80, y: 30 };
			p.steps[0].positions.o1 = { x: 70, y: 10 };
			p.steps[0].puckCarrier = 'o5';
			p.steps[0].arrows = [];
			expect(has(p, 'offside: opponent o1')).toBe(true);
			p.steps[0].puckCarrier = 'rd';
			expect(has(p, 'offside: opponent')).toBe(false);
		});

		it('does not flag our skaters while the opponents carry', () => {
			const p = validPlay();
			p.steps[0].puck = { x: 120, y: 40 };
			p.steps[0].puckCarrier = 'o3';
			p.steps[0].arrows = [];
			p.steps[0].positions.lw = { x: 130, y: 10 };
			expect(has(p, 'offside: lw')).toBe(false);
		});
	});

	describe('step jumps', () => {
		it('flags a 45+ ft move without a time cue', () => {
			const p = validPlay();
			p.steps[1].positions.c = { x: 75, y: 40 };
			expect(has(p, 'step jump: c')).toBe(true);
		});

		it('does not treat incidental phrases as time cues', () => {
			for (const caption of ['RD has the puck behind the net.', 'LD acts as the outlet.', 'Read the play and react.']) {
				const p = validPlay();
				p.steps[1].positions.c = { x: 75, y: 40 };
				p.steps[1].caption = caption;
				expect(has(p, 'step jump: c'), caption).toBe(true);
			}
		});

		it('accepts the move when the caption has a time cue', () => {
			const p = validPlay();
			p.steps[1].positions.c = { x: 75, y: 40 };
			p.steps[1].caption = 'A few seconds later the center is at the red line.';
			expect(has(p, 'step jump')).toBe(false);
		});
	});

	describe('spacing', () => {
		it('flags two skaters closer than 2.5 ft', () => {
			const p = validPlay();
			p.steps[0].positions.o1 = { x: 21, y: 11 };
			expect(has(p, 'spacing: lw and o1')).toBe(true);
		});

		it('ignores goalies', () => {
			const p = validPlay();
			p.opponents[0].label = 'G';
			p.steps[0].positions.o1 = { x: 21, y: 11 };
			expect(has(p, 'spacing')).toBe(false);
		});
	});
});

describe('content library lint', () => {
	it.each(plays.map((p) => [p.id, p] as const))('%s passes lint', (_id, p) => {
		expect(messages(p)).toEqual([]);
	});
});
