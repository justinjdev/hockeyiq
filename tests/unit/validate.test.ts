import { describe, expect, it } from 'vitest';
import { validateComparison, validatePlay } from '../../src/lib/content/validate';
import { makeCtx, validPlay } from './fixtures';

const ctx = () => makeCtx();

describe('validatePlay', () => {
	it('accepts a valid play', () => {
		expect(validatePlay(validPlay(), ctx())).toEqual([]);
	});

	it('flags a missing position', () => {
		const p = validPlay();
		delete p.steps[0].positions.lw;
		const issues = validatePlay(p, ctx());
		expect(issues).toHaveLength(1);
		expect(issues[0].where).toContain('step:0');
		expect(issues[0].message).toContain('lw');
	});

	it('flags a decision quiz with two correct options', () => {
		const p = validPlay();
		p.steps[1].quiz!.c.decision!.options[1].correct = true;
		const issues = validatePlay(p, ctx());
		expect(issues.map((i) => i.message).join('\n')).toContain('exactly one correct');
	});

	it('requires start on a drag quiz on step 0', () => {
		const p = validPlay();
		p.steps[0].quiz = { rw: p.steps[1].quiz!.rw };
		delete p.steps[1].quiz!.rw;
		const issues = validatePlay(p, ctx());
		expect(issues.map((i) => i.message).join('\n')).toContain('start');
	});

	it('flags a slot with no quiz', () => {
		const p = validPlay();
		delete p.steps[1].quiz!.c;
		const issues = validatePlay(p, ctx());
		expect(issues.map((i) => i.message).join('\n')).toContain('no quiz');
	});

	it('requires at least one source', () => {
		const p = validPlay();
		p.sources = [];
		expect(validatePlay(p, ctx()).map((i) => i.message).join('\n')).toContain('source');
	});

	it('flags unknown glossary terms', () => {
		const p = validPlay();
		p.steps[0].notes.lw.where = 'watch the [[nope]]';
		expect(validatePlay(p, ctx()).map((i) => i.message).join('\n')).toContain('nope');
	});

	it('flags slot count that mismatches strength', () => {
		const p = validPlay();
		p.strength = '4v5';
		expect(validatePlay(p, ctx()).map((i) => i.message).join('\n')).toContain('slot count');
	});

	it('flags out-of-bounds positions', () => {
		const p = validPlay();
		p.steps[0].puck = { x: 250, y: 10 };
		expect(validatePlay(p, ctx()).map((i) => i.message).join('\n')).toContain('puck');
	});

	it('flags non-https source urls and unknown key concepts', () => {
		const p = validPlay();
		p.sources[0].url = 'http://example.com';
		p.keyConcepts = ['missing'];
		const msgs = validatePlay(p, ctx()).map((i) => i.message).join('\n');
		expect(msgs).toContain('https');
		expect(msgs).toContain('missing');
	});
});

describe('validateComparison', () => {
	it('flags mismatched phase lists', () => {
		const a = validPlay();
		const b = { ...validPlay(), id: 'bo-other' };
		b.steps = b.steps.map((s) => ({ ...s, phase: 'other' }));
		const c = makeCtx([a, b]);
		const issues = validateComparison(
			{ id: 'cmp', a: a.id, b: b.id, summary: 's', whenToUse: { a: 'x', b: 'y' } },
			c
		);
		expect(issues.map((i) => i.message).join('\n')).toContain('phase');
	});

	it('accepts matching phase lists', () => {
		const a = validPlay();
		const b = { ...validPlay(), id: 'bo-other' };
		const c = makeCtx([a, b]);
		expect(
			validateComparison({ id: 'cmp', a: a.id, b: b.id, summary: 's', whenToUse: { a: 'x', b: 'y' } }, c)
		).toEqual([]);
	});
});
