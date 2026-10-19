import { describe, expect, it } from 'vitest';
import { parseRichText, plainText, termRefs } from '../../src/lib/text/richText';

describe('parseRichText', () => {
	it('splits text and term references', () => {
		expect(parseRichText('a [[gap]] b [[f1|the F1]]')).toEqual([
			{ kind: 'text', text: 'a ' },
			{ kind: 'term', id: 'gap', text: 'gap' },
			{ kind: 'text', text: ' b ' },
			{ kind: 'term', id: 'f1', text: 'the F1' }
		]);
	});

	it('treats an unclosed reference as plain text', () => {
		expect(parseRichText('see [[gap')).toEqual([{ kind: 'text', text: 'see [[gap' }]);
	});

	it('returns no segments for an empty string', () => {
		expect(parseRichText('')).toEqual([]);
	});
});

describe('termRefs', () => {
	it('lists referenced term ids in order', () => {
		expect(termRefs('a [[gap]] b [[f1|the F1]]')).toEqual(['gap', 'f1']);
	});
});

describe('plainText', () => {
	it('strips term markup, keeping display text', () => {
		expect(plainText('a [[gap]] b [[f1|the F1]]')).toBe('a gap b the F1');
	});
});
