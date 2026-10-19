import { describe, expect, it } from 'vitest';
import { comparisons, lessons, plays } from '../../src/lib/content/registry';
import { glossary } from '../../src/lib/content/glossary';
import { validateLibrary } from '../../src/lib/content/validate';

describe('content library', () => {
	it('has at least one play', () => {
		expect(plays.length).toBeGreaterThan(0);
	});

	it('passes validation', () => {
		expect(validateLibrary({ plays, lessons, comparisons, glossary })).toEqual([]);
	});
});
