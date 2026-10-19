import type { Arrow, Issue, Play, Step, Vec } from './types';
import { RINK, sampleCurve } from '../rink/geometry';

/** Content-accuracy rules beyond structural validation. Pure: no registry access. */

export const PASS_LANE_FT = 3;
export const RECEIVER_FT = 4;
export const STEP_JUMP_FT = 45;
export const SPACING_FT = 2.5;
export const TIME_CUE = /seconds? later|a moment later|as the|while the|by the time/i;
export const NETS = [
	{ x0: 7, x1: 11, y0: 39.5, y1: 45.5 },
	{ x0: 189, x1: 193, y0: 39.5, y1: 45.5 }
] as const;
const [OUR_BLUE, THEIR_BLUE] = RINK.blueLineX;

const dist = (a: Vec, b: Vec) => Math.hypot(a.x - b.x, a.y - b.y);
const inNet = (p: Vec) => NETS.some((n) => p.x > n.x0 && p.x < n.x1 && p.y > n.y0 && p.y < n.y1);
const isGoalie = (label?: string) => !!label && /^g(oalie)?$/i.test(label);

function nearest(ids: string[], s: Step, p: Vec, within: number): string | undefined {
	let best: string | undefined;
	let bestD = within;
	for (const id of ids) {
		const d = dist(s.positions[id], p);
		if (d <= bestD) [best, bestD] = [id, d];
	}
	return best;
}

function checkPassLane(play: Play, s: Step, a: Arrow, from: Vec, where: string, issues: Issue[]) {
	const ours = play.slots.map((x) => x.id);
	const theirs = play.opponents.map((x) => x.id);
	const all = [...ours, ...theirs];
	const passer = typeof a.from === 'string' ? a.from : nearest(all, s, from, RECEIVER_FT);
	const defenders = passer && theirs.includes(passer) ? ours : theirs;
	const receiver = nearest(all, s, a.to, RECEIVER_FT);
	const curve = sampleCurve(from, a.to, a.via);
	for (const id of defenders) {
		if (id === passer || id === receiver) continue;
		const d = Math.min(...curve.map((p) => dist(p, s.positions[id])));
		if (d < PASS_LANE_FT) {
			issues.push({
				where,
				message: `pass lane: ${id} is ${d.toFixed(1)} ft from the pass (mark contested only if the text says the lane is blocked)`
			});
		}
	}
}

function checkStep(play: Play, s: Step, i: number, issues: Issue[]) {
	const base = `play:${play.id}/step:${i}`;
	const ours = play.slots.map((x) => x.id);
	const theirs = play.opponents.map((x) => x.id);
	const skaters = [...ours, ...play.opponents.filter((o) => !isGoalie(o.label)).map((o) => o.id)];

	for (const id of [...ours, ...theirs]) {
		if (inNet(s.positions[id])) issues.push({ where: `${base}/pos:${id}`, message: `net: ${id} is inside a net` });
	}
	if (inNet(s.puck)) issues.push({ where: `${base}/puck`, message: 'net: puck is inside a net' });

	s.arrows.forEach((a, ai) => {
		const where = `${base}/arrow:${ai}`;
		const from = typeof a.from === 'string' ? (a.from === 'puck' ? s.puck : s.positions[a.from]) : a.from;
		if (!from) return;
		if (a.kind === 'skate' && sampleCurve(from, a.to, a.via).some(inNet)) {
			issues.push({ where, message: 'net: skate route passes through a net' });
		}
		if (a.kind === 'pass' && !a.contested) checkPassLane(play, s, a, from, where, issues);
	});

	// Offside only binds the attacking team: opponents count as attacking on steps where one of
	// them carries the puck; otherwise we are.
	const theyAttack = s.puckCarrier !== undefined && theirs.includes(s.puckCarrier);
	if (!s.allowOffside) {
		if (!theyAttack && s.puck.x <= THEIR_BLUE) {
			for (const id of ours) {
				const p = s.positions[id];
				if (p.x > THEIR_BLUE) {
					issues.push({ where: `${base}/pos:${id}`, message: `offside: ${id} at x=${p.x} is past the blue line before the puck (x=${s.puck.x})` });
				}
			}
		}
		if (theyAttack && s.puck.x >= OUR_BLUE) {
			for (const id of theirs) {
				const p = s.positions[id];
				if (p.x < OUR_BLUE) {
					issues.push({ where: `${base}/pos:${id}`, message: `offside: opponent ${id} at x=${p.x} is in our zone before the puck (x=${s.puck.x})` });
				}
			}
		}
	}

	for (let a = 0; a < skaters.length; a++) {
		for (let b = a + 1; b < skaters.length; b++) {
			const d = dist(s.positions[skaters[a]], s.positions[skaters[b]]);
			if (d < SPACING_FT) {
				issues.push({ where: base, message: `spacing: ${skaters[a]} and ${skaters[b]} are ${d.toFixed(1)} ft apart` });
			}
		}
	}
}

export function lintPlay(play: Play): Issue[] {
	const issues: Issue[] = [];
	play.steps.forEach((s, i) => checkStep(play, s, i, issues));

	const skaters = [
		...play.slots.map((x) => x.id),
		...play.opponents.filter((o) => !isGoalie(o.label)).map((o) => o.id)
	];
	for (let i = 1; i < play.steps.length; i++) {
		const prev = play.steps[i - 1];
		const cur = play.steps[i];
		if (TIME_CUE.test(cur.caption)) continue;
		for (const id of skaters) {
			const d = dist(prev.positions[id], cur.positions[id]);
			if (d > STEP_JUMP_FT) {
				issues.push({
					where: `play:${play.id}/step:${i}/pos:${id}`,
					message: `step jump: ${id} moves ${d.toFixed(0)} ft; caption needs a time cue`
				});
			}
		}
	}
	return issues;
}
