import type { HomePosition, Play, Slot } from '../content/types';

/** Index of the first step tagged with `phase`, or -1 when the play has none. */
export function stepForPhase(play: Play, phase: string): number {
	return play.steps.findIndex((s) => s.phase === phase);
}

/** Phases both plays go through, in the order `a` plays them. */
export function sharedPhases(a: Play, b: Play): string[] {
	const inB = new Set(b.steps.map((s) => s.phase));
	const seen = new Set<string>();
	const out: string[] = [];
	for (const s of a.steps) {
		if (s.phase && inB.has(s.phase) && !seen.has(s.phase)) {
			seen.add(s.phase);
			out.push(s.phase);
		}
	}
	return out;
}

/** The slot a play assigns to a home position, falling back to its first slot. */
export function slotForHome(play: Play, home: HomePosition): Slot {
	return play.slots.find((s) => s.home === home) ?? play.slots[0];
}
