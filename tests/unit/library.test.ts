import { describe, expect, it } from 'vitest';
import { comparisons, lessons, plays } from '../../src/lib/content/registry';
import { glossary } from '../../src/lib/content/glossary';
import { validateLibrary } from '../../src/lib/content/validate';

describe('content library', () => {
	it('has the full library: 35 plays, 7 lessons, 6 comparisons', () => {
		expect(plays.length).toBe(35);
		expect(lessons.length).toBe(7);
		expect(comparisons.length).toBe(6);
	});

	it('passes validation', () => {
		expect(validateLibrary({ plays, lessons, comparisons, glossary })).toEqual([]);
	});

	it('links every lesson from at least two plays', () => {
		for (const l of lessons) {
			const linked = plays.filter((p) => p.keyConcepts.includes(l.id)).map((p) => p.id);
			expect(linked.length, l.id).toBeGreaterThanOrEqual(2);
		}
	});

	it('gives every lesson at least two example plays that link back to it', () => {
		for (const l of lessons) {
			expect(l.examplePlays.length, l.id).toBeGreaterThanOrEqual(2);
			for (const id of l.examplePlays) {
				expect(plays.find((p) => p.id === id)?.keyConcepts, `${l.id} -> ${id}`).toContain(l.id);
			}
		}
	});
});
