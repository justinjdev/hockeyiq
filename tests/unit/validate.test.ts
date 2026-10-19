import { describe, expect, it } from 'vitest';
import { validateComparison, validateLesson, validatePlay } from '../../src/lib/content/validate';
import type { Diagram } from '../../src/lib/content/types';
import { makeCtx, validLesson, validPlay } from './fixtures';

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

	it('flags an arrow target off the ice', () => {
		const p = validPlay();
		p.steps[0].arrows = [{ kind: 'pass', from: 'rd', to: { x: 1, y: 1 } }];
		const issues = validatePlay(p, ctx());
		expect(issues.some((i) => i.where.includes('arrow:0') && i.message.includes('off the ice'))).toBe(true);
	});

	it('accepts an off-ice via when the drawn curve stays on the ice', () => {
		const p = validPlay();
		// rd at (15, 55); control point past the end boards, curve min x stays > 0.
		p.steps[0].arrows = [{ kind: 'pass', from: 'rd', to: { x: 15, y: 70 }, via: { x: -5, y: 62 } }];
		expect(validatePlay(p, ctx()).filter((i) => i.where.includes('arrow:0'))).toEqual([]);
	});

	it('flags a curve that bulges off the ice', () => {
		const p = validPlay();
		p.steps[0].arrows = [{ kind: 'pass', from: 'rd', to: { x: 15, y: 70 }, via: { x: -40, y: 62 } }];
		const issues = validatePlay(p, ctx());
		expect(issues.some((i) => i.where.includes('arrow:0') && i.message.includes('curve leaves the ice'))).toBe(true);
	});});

describe('rich text refs', () => {
	it.each([
		'A [[gap|tight [[gap]]]] here.',
		'A [[gap]]] here.',
		'A [[[gap]] here.'
	])('flags nested or malformed term refs: %s', (text) => {
		const p = validPlay();
		p.summary = text;
		expect(validatePlay(p, ctx()).map((i) => i.message)).toContain('nested or malformed [[term]] reference');
	});

	it('accepts adjacent refs', () => {
		const p = validPlay();
		p.summary = 'Hold the [[gap]] and [[support|support]] the [[breakout]].';
		expect(validatePlay(p, ctx())).toEqual([]);
	});
});

describe('validateLesson diagrams', () => {
	const diagram = (from: string, via: { x: number; y: number }): Diagram => ({
		players: [
			{ id: 'a', team: 'us', label: 'D', pos: { x: 15, y: 55 } },
			{ id: 'b', team: 'us', label: 'W', pos: { x: 15, y: 70 } }
		],
		arrows: [{ kind: 'pass', from, to: { x: 15, y: 70 }, via }],
		caption: 'Pass.'
	});
	const withDiagram = (d: Diagram) => {
		const l = validLesson();
		l.sections[0].diagram = d;
		return validateLesson(l, ctx());
	};

	it('resolves a player id in from and samples the curve from that player', () => {
		expect(withDiagram(diagram('a', { x: -5, y: 62 }))).toEqual([]);
		const bulging = withDiagram(diagram('a', { x: -40, y: 62 })).map((i) => i.message);
		expect(bulging).toContain('arrow curve leaves the ice');
	});

	it('flags an unknown player id in from', () => {
		expect(withDiagram(diagram('zz', { x: -5, y: 62 })).map((i) => i.message).join('\n')).toContain('unknown id zz');
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
