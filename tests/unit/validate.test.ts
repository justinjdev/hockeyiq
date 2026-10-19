import { describe, expect, it } from 'vitest';
import { validateComparison, validateLesson, validateLibrary, validatePlay } from '../../src/lib/content/validate';
import type { Diagram } from '../../src/lib/content/types';
import { makeCtx, validLesson, validPlay } from './fixtures';

const ctx = () => makeCtx();

describe('validatePlay', () => {
	it('accepts a valid play', () => {
		expect(validatePlay(validPlay(), ctx())).toEqual([]);
	});

	it('requires a kebab-case step id', () => {
		const p = validPlay();
		p.steps[0].id = '';
		p.steps[1].id = 'Bad Id';
		const issues = validatePlay(p, ctx()).filter((i) => i.message.includes('step id'));
		expect(issues.map((i) => i.where)).toEqual(['play:bo-standard/step:0', 'play:bo-standard/step:1']);
	});

	it('flags duplicate step ids within a play', () => {
		const p = validPlay();
		p.steps[1].id = p.steps[0].id;
		expect(validatePlay(p, ctx()).map((i) => i.message)).toContain('duplicate step id setup');
	});

	it('flags reads keyed by a non-slot id', () => {
		const p = validPlay();
		p.steps[0].reads = { lW: [{ at: 'o1' }], o2: [{ at: 'o1' }], lw: [{ at: 'o1' }] };
		const msgs = validatePlay(p, ctx()).map((i) => i.message);
		expect(msgs).toEqual(['reads key lW is not a slot id', 'reads key o2 is not a slot id']);
	});

	it('flags roles keyed by a non-slot id, and empty roles', () => {
		const p = validPlay();
		p.steps[0].roles = { o2: 'F1', lw: ' ', c: 'F2' };
		const msgs = validatePlay(p, ctx()).map((i) => i.message);
		expect(msgs).toEqual(['roles key o2 is not a slot id', 'role for lw is empty']);
	});

	it("accepts arrows from the reserved 'puck' id", () => {
		const p = validPlay();
		p.steps[0].arrows = [{ kind: 'shot', from: 'puck', to: { x: 25, y: 40 } }];
		expect(validatePlay(p, ctx())).toEqual([]);
	});

	it("rejects 'puck' as a slot or opponent id", () => {
		const p = validPlay();
		p.opponents[0].id = 'puck';
		for (const s of p.steps) {
			s.positions.puck = s.positions.o1;
			delete s.positions.o1;
		}
		expect(validatePlay(p, ctx()).map((i) => i.message)).toEqual([
			"'puck' is reserved and cannot be a slot or opponent id"
		]);
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
	});

	it('flags a drag target ellipse that reaches off the ice', () => {
		const p = validPlay();
		// Centered on the ice near the bottom boards, but ry pokes past y = 85.
		p.steps[1].quiz!.rw.drag!.target = { kind: 'ellipse', cx: 100, cy: 82, rx: 6, ry: 5 };
		const issues = validatePlay(p, ctx());
		expect(issues.map((i) => i.message)).toContain('drag quiz target is off the ice');
	});

	it('flags a drag target ellipse that crosses a rounded corner', () => {
		const p = validPlay();
		// Inside the bounding box but past the corner arc.
		p.steps[1].quiz!.rw.drag!.target = { kind: 'ellipse', cx: 9, cy: 76, rx: 5, ry: 5 };
		const issues = validatePlay(p, ctx());
		expect(issues.map((i) => i.message)).toContain('drag quiz target is off the ice');
	});

	it('flags a drag target polygon with a vertex off the ice', () => {
		const p = validPlay();
		p.steps[1].quiz!.rw.drag!.target = {
			kind: 'polygon',
			points: [
				{ x: 90, y: 70 },
				{ x: 110, y: 70 },
				{ x: 110, y: 90 }
			]
		};
		const issues = validatePlay(p, ctx());
		expect(issues.map((i) => i.message)).toContain('drag quiz target is off the ice');
	});

	it('accepts a drag target that touches nothing off the ice', () => {
		const p = validPlay();
		p.steps[1].quiz!.rw.drag!.target = { kind: 'ellipse', cx: 100, cy: 78, rx: 6, ry: 6 };
		expect(validatePlay(p, ctx())).toEqual([]);
	});

	it('flags duplicate home labels', () => {
		const p = validPlay();
		p.slots[1].home = 'LW';
		const issues = validatePlay(p, ctx());
		expect(issues.map((i) => i.message)).toContain('duplicate home label LW');
	});
});

describe('rich text refs', () => {
	it.each([
		'A [[gap|tight [[gap]]]] here.',
		'A [[gap]]] here.',
		'A [[[gap]] here.',
		'A [[gap [[support]] lane]] x',
		'A [[x|]] here.',
		'A [[foo] bar]] here.',
		'A [[foo here.',
		'A [[gap]]b]] here.'
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

describe('validateLesson diagram reads and ids', () => {
	const base = (): Diagram => ({
		players: [
			{ id: 'a', team: 'us', label: 'D', pos: { x: 15, y: 55 } },
			{ id: 'b', team: 'us', label: 'W', pos: { x: 15, y: 70 } }
		],
		arrows: [],
		caption: 'Read.'
	});
	const messages = (d: Diagram) => {
		const l = validLesson();
		l.sections[0].diagram = d;
		return validateLesson(l, ctx()).map((i) => i.message);
	};

	it('flags a read that points at an unknown player id', () => {
		const d = base();
		d.reads = [{ at: 'x33' }];
		expect(messages(d)).toContain('diagram read at unknown id x33');
		d.reads = [{ at: 'a' }];
		expect(messages(d)).toEqual([]);
	});

	it('flags duplicate player ids', () => {
		const d = base();
		d.players[1].id = 'a';
		expect(messages(d)).toContain('duplicate diagram player id a');
	});
});

describe('validateLibrary glossary', () => {
	it('rejects term markup in definitions, which render as plain text', () => {
		const lib = { plays: [], lessons: [], comparisons: [], glossary: [{ id: 'x', term: 'X', definition: 'See [[x]].' }] };
		const issues = validateLibrary(lib as unknown as Parameters<typeof validateLibrary>[0]);
		expect(issues.map((i) => i.message)).toContain('glossary definitions must be plain text (no [[term]] markup)');
	});
});

describe('validateComparison', () => {
	const cmp = (a: string, b: string) => ({ id: 'cmp', a, b, summary: 's', whenToUse: { a: 'x', b: 'y' } });

	it('flags plays with different strengths', () => {
		const a = validPlay();
		const b = { ...validPlay(), id: 'bo-other', strength: '5v4' as const };
		const msgs = validateComparison(cmp(a.id, b.id), makeCtx([a, b])).map((i) => i.message);
		expect(msgs).toEqual(['plays have different strengths (5v5 vs 5v4)']);
	});

	it('flags plays with different slot homes', () => {
		const a = validPlay();
		const b = validPlay();
		b.id = 'bo-other';
		b.slots = b.slots.map((s) => (s.home === 'LW' ? { ...s, home: 'C' } : s));
		const msgs = validateComparison(cmp(a.id, b.id), makeCtx([a, b])).map((i) => i.message);
		expect(msgs).toEqual(['plays have different slot homes ([C, LD, LW, RD, RW] vs [C, C, LD, RD, RW])']);
	});

	it('accepts the same homes listed in a different order', () => {
		const a = validPlay();
		const b = { ...validPlay(), id: 'bo-other' };
		b.slots = [...b.slots].reverse();
		expect(validateComparison(cmp(a.id, b.id), makeCtx([a, b]))).toEqual([]);
	});

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
