import type {
	Comparison,
	Issue,
	Lesson,
	Play,
	Region,
	Step,
	StepQuiz,
	Strength,
	Term,
	Vec
} from './types';
import { termRefs } from '../text/richText';

export type Ctx = {
	playIds: Set<string>;
	lessonIds: Set<string>;
	termIds: Set<string>;
	plays: Map<string, Play>;
};

const SLOT_COUNT: Record<Strength, number> = { '5v5': 5, '5v4': 5, '4v5': 4 };
const OPPONENT_COUNT: Record<Strength, number> = { '5v5': 5, '5v4': 4, '4v5': 5 };

// Task 2 replaces this with isOnIce.
const inBounds = (v: Vec) => v.x >= 0 && v.x <= 200 && v.y >= 0 && v.y <= 85;

function duplicates(ids: string[]): string[] {
	const seen = new Set<string>();
	const dupes = new Set<string>();
	for (const id of ids) (seen.has(id) ? dupes : seen).add(id);
	return [...dupes];
}

function checkTerms(text: string | undefined, where: string, ctx: Ctx, issues: Issue[]) {
	if (!text) return;
	for (const id of termRefs(text)) {
		if (!ctx.termIds.has(id)) issues.push({ where, message: `unknown glossary term [[${id}]]` });
	}
}

function checkRegion(r: Region, where: string, issues: Issue[]) {
	if (r.kind === 'ellipse') {
		if (!(r.rx > 0 && r.ry > 0)) issues.push({ where, message: 'ellipse rx and ry must be > 0' });
	} else if (r.points.length < 3) {
		issues.push({ where, message: 'polygon needs at least 3 points' });
	}
}

function checkQuiz(
	quiz: StepQuiz,
	stepIndex: number,
	where: string,
	ctx: Ctx,
	issues: Issue[]
) {
	const { drag, decision } = quiz;
	if (drag) {
		if (stepIndex === 0 && !drag.start) {
			issues.push({ where, message: 'drag quiz on step 0 requires a start position' });
		}
		if (drag.start && !inBounds(drag.start)) {
			issues.push({ where, message: 'drag quiz start is off the ice' });
		}
		checkRegion(drag.target, where, issues);
		checkTerms(drag.correct, where, ctx, issues);
		checkTerms(drag.incorrect, where, ctx, issues);
	}
	if (decision) {
		const n = decision.options.length;
		if (n < 2 || n > 4) issues.push({ where, message: `decision quiz needs 2 to 4 options, has ${n}` });
		const correct = decision.options.filter((o) => o.correct).length;
		if (correct !== 1) {
			issues.push({ where, message: `decision quiz must have exactly one correct option, has ${correct}` });
		}
		checkTerms(decision.prompt, where, ctx, issues);
		for (const o of decision.options) {
			checkTerms(o.text, where, ctx, issues);
			checkTerms(o.why, where, ctx, issues);
		}
	}
}

function checkStep(p: Play, s: Step, i: number, ctx: Ctx, issues: Issue[]) {
	const base = `play:${p.id}/step:${i}`;
	const slotIds = p.slots.map((x) => x.id);
	const oppIds = p.opponents.map((x) => x.id);
	const known = new Set([...slotIds, ...oppIds]);

	for (const id of known) {
		if (!s.positions[id]) issues.push({ where: base, message: `missing position for ${id}` });
	}
	for (const [id, pos] of Object.entries(s.positions)) {
		if (!known.has(id)) issues.push({ where: `${base}/pos:${id}`, message: `position for unknown id ${id}` });
		else if (!inBounds(pos)) issues.push({ where: `${base}/pos:${id}`, message: `position of ${id} is off the ice` });
	}
	if (!inBounds(s.puck)) issues.push({ where: `${base}/puck`, message: 'puck is off the ice' });
	if (s.puckCarrier !== undefined && !known.has(s.puckCarrier)) {
		issues.push({ where: base, message: `puckCarrier ${s.puckCarrier} is not a known id` });
	}
	s.arrows.forEach((a, ai) => {
		if (typeof a.from === 'string' && !known.has(a.from)) {
			issues.push({ where: `${base}/arrow:${ai}`, message: `arrow from unknown id ${a.from}` });
		}
	});
	for (const [owner, reads] of Object.entries(s.reads ?? {})) {
		for (const r of reads) {
			if (typeof r.at === 'string' && !known.has(r.at)) {
				issues.push({ where: `${base}/reads:${owner}`, message: `read at unknown id ${r.at}` });
			}
		}
	}

	for (const id of slotIds) {
		const n = s.notes[id];
		const where = `${base}/slot:${id}`;
		if (!n) {
			issues.push({ where, message: `missing notes for ${id}` });
			continue;
		}
		for (const key of ['where', 'read', 'why'] as const) {
			if (!n[key]?.trim()) issues.push({ where, message: `notes.${key} is empty for ${id}` });
			checkTerms(n[key], where, ctx, issues);
		}
	}
	for (const id of Object.keys(s.notes)) {
		if (!slotIds.includes(id)) issues.push({ where: `${base}/slot:${id}`, message: `notes for non-slot id ${id}` });
	}

	for (const [id, quiz] of Object.entries(s.quiz ?? {})) {
		const where = `${base}/slot:${id}`;
		if (!slotIds.includes(id)) issues.push({ where, message: `quiz key ${id} is not a slot id` });
		checkQuiz(quiz, i, where, ctx, issues);
	}
	checkTerms(s.caption, base, ctx, issues);
}

export function validatePlay(p: Play, ctx: Ctx): Issue[] {
	const issues: Issue[] = [];
	const base = `play:${p.id}`;

	const slotIds = p.slots.map((s) => s.id);
	const oppIds = p.opponents.map((o) => o.id);
	for (const id of duplicates([...slotIds, ...oppIds])) {
		issues.push({ where: base, message: `duplicate slot/opponent id ${id}` });
	}

	if (p.slots.length !== SLOT_COUNT[p.strength]) {
		issues.push({ where: base, message: `slot count ${p.slots.length} does not match ${p.strength} (expected ${SLOT_COUNT[p.strength]})` });
	}
	if (p.opponents.length !== OPPONENT_COUNT[p.strength]) {
		issues.push({ where: base, message: `opponent count ${p.opponents.length} does not match ${p.strength} (expected ${OPPONENT_COUNT[p.strength]})` });
	}
	if (p.steps.length < 2 || p.steps.length > 8) {
		issues.push({ where: base, message: `step count must be 2 to 8, has ${p.steps.length}` });
	}

	p.steps.forEach((s, i) => checkStep(p, s, i, ctx, issues));

	let drags = 0;
	let decisions = 0;
	const quizzed = new Set<string>();
	for (const s of p.steps) {
		for (const [id, q] of Object.entries(s.quiz ?? {})) {
			if (q.drag) drags++;
			if (q.decision) decisions++;
			if (q.drag || q.decision) quizzed.add(id);
		}
	}
	if (drags < 1) issues.push({ where: base, message: 'play has no drag quiz' });
	if (decisions < 1) issues.push({ where: base, message: 'play has no decision quiz' });
	for (const id of slotIds) {
		if (!quizzed.has(id)) issues.push({ where: `${base}/slot:${id}`, message: `slot ${id} has no quiz` });
	}

	if (p.sources.length < 1) issues.push({ where: base, message: 'play needs at least one source' });
	p.sources.forEach((src, i) => {
		const where = `${base}/source:${i}`;
		if (!src.title?.trim()) issues.push({ where, message: 'source title is empty' });
		if (!src.publisher?.trim()) issues.push({ where, message: 'source publisher is empty' });
		if (src.url !== undefined && !src.url.startsWith('https://')) {
			issues.push({ where, message: 'source url must start with https://' });
		}
	});

	for (const k of p.keyConcepts) {
		if (!ctx.lessonIds.has(k)) issues.push({ where: base, message: `keyConcept ${k} is not an existing lesson` });
	}
	checkTerms(p.summary, base, ctx, issues);
	checkTerms(p.variations, base, ctx, issues);
	return issues;
}

export function validateLesson(l: Lesson, ctx: Ctx): Issue[] {
	const issues: Issue[] = [];
	const base = `lesson:${l.id}`;
	for (const id of l.examplePlays) {
		if (!ctx.playIds.has(id)) issues.push({ where: base, message: `examplePlay ${id} is not an existing play` });
	}
	checkTerms(l.summary, base, ctx, issues);
	l.sections.forEach((sec, i) => {
		const where = `${base}/section:${i}`;
		checkTerms(sec.body, where, ctx, issues);
		checkTerms(sec.diagram?.caption, where, ctx, issues);
	});
	return issues;
}

function phases(p: Play): string[] {
	return [...new Set(p.steps.map((s) => s.phase).filter((x): x is string => !!x))];
}

export function validateComparison(c: Comparison, ctx: Ctx): Issue[] {
	const issues: Issue[] = [];
	const base = `comparison:${c.id}`;
	const a = ctx.plays.get(c.a);
	const b = ctx.plays.get(c.b);
	if (!a) issues.push({ where: base, message: `play a (${c.a}) does not exist` });
	if (!b) issues.push({ where: base, message: `play b (${c.b}) does not exist` });
	checkTerms(c.summary, base, ctx, issues);
	checkTerms(c.whenToUse.a, base, ctx, issues);
	checkTerms(c.whenToUse.b, base, ctx, issues);
	if (!a || !b) return issues;

	if (a.category !== b.category) {
		issues.push({ where: base, message: `plays are in different categories (${a.category} vs ${b.category})` });
	}
	for (const p of [a, b]) {
		p.steps.forEach((s, i) => {
			if (!s.phase) issues.push({ where: `${base}/play:${p.id}/step:${i}`, message: 'step has no phase' });
		});
	}
	const pa = phases(a);
	const pb = phases(b);
	if (pa.length === 0 || pb.length === 0) {
		issues.push({ where: base, message: 'phase list is empty for one of the plays' });
	} else if (pa.join('|') !== pb.join('|')) {
		issues.push({ where: base, message: `phase lists differ: [${pa.join(', ')}] vs [${pb.join(', ')}]` });
	}
	return issues;
}

export function validateLibrary(lib: {
	plays: Play[];
	lessons: Lesson[];
	comparisons: Comparison[];
	glossary: Term[];
}): Issue[] {
	const issues: Issue[] = [];
	for (const [kind, ids] of [
		['play', lib.plays.map((x) => x.id)],
		['lesson', lib.lessons.map((x) => x.id)],
		['comparison', lib.comparisons.map((x) => x.id)],
		['term', lib.glossary.map((x) => x.id)]
	] as const) {
		for (const id of duplicates([...ids])) issues.push({ where: `${kind}:${id}`, message: `duplicate ${kind} id ${id}` });
	}
	const ctx: Ctx = {
		playIds: new Set(lib.plays.map((x) => x.id)),
		lessonIds: new Set(lib.lessons.map((x) => x.id)),
		termIds: new Set(lib.glossary.map((x) => x.id)),
		plays: new Map(lib.plays.map((x) => [x.id, x]))
	};
	for (const p of lib.plays) issues.push(...validatePlay(p, ctx));
	for (const l of lib.lessons) issues.push(...validateLesson(l, ctx));
	for (const c of lib.comparisons) issues.push(...validateComparison(c, ctx));
	for (const t of lib.glossary) checkTerms(t.definition, `term:${t.id}`, ctx, issues);
	return issues;
}
