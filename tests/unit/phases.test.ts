import { describe, expect, it } from 'vitest';
import { sharedPhases, slotForHome, stepForPhase } from '../../src/lib/play/phases';
import type { Play, Step } from '../../src/lib/content/types';

const step = (phase?: string): Step => ({
	caption: '',
	phase,
	positions: {},
	puck: { x: 0, y: 0 },
	arrows: [],
	notes: {}
});

const play = (phases: (string | undefined)[], homes: Play['slots'] = []): Play => ({
	id: 'p',
	title: 'P',
	category: 'breakout',
	system: 's',
	strength: '5v5',
	summary: '',
	slots: homes,
	opponents: [],
	keyConcepts: [],
	variations: '',
	sources: [],
	steps: phases.map(step)
});

describe('phases', () => {
	it('finds the first step for a phase', () => {
		const p = play(['setup', 'move', 'move', 'exit']);
		expect(stepForPhase(p, 'move')).toBe(1);
		expect(stepForPhase(p, 'nope')).toBe(-1);
	});

	it('lists shared phases in the first play order without duplicates', () => {
		const a = play(['setup', 'move', 'move', 'exit']);
		const b = play(['exit', 'setup', 'extra']);
		expect(sharedPhases(a, b)).toEqual(['setup', 'exit']);
	});

	it('maps a home position to each play slot', () => {
		const p = play([], [
			{ id: 'a', home: 'LW' },
			{ id: 'b', home: 'RW' }
		]);
		expect(slotForHome(p, 'RW').id).toBe('b');
		expect(slotForHome(p, 'C').id).toBe('a');
	});
});
