import type { Comparison, Lesson, Play } from '../../src/lib/content/types';
import type { Ctx } from '../../src/lib/content/validate';
import { glossary } from '../../src/lib/content/glossary';

const note = (where: string) => ({
	where,
	read: 'Read the [[gap]] of the nearest defender.',
	why: 'Keeps [[support]] close to the puck.'
});

export function validPlay(): Play {
	const decision = (prompt: string) => ({
		decision: {
			prompt,
			options: [
				{ text: 'Support low', correct: true, why: 'Gives the carrier an outlet.' },
				{ text: 'Stay high', correct: false, why: 'Leaves the carrier alone.' }
			]
		}
	});
	return {
		id: 'bo-standard',
		title: 'Standard Breakout',
		category: 'breakout',
		system: 'Standard',
		strength: '5v5',
		summary: 'A simple [[breakout]] up the boards.',
		slots: [
			{ id: 'lw', home: 'LW' },
			{ id: 'c', home: 'C' },
			{ id: 'rw', home: 'RW' },
			{ id: 'ld', home: 'LD' },
			{ id: 'rd', home: 'RD' }
		],
		opponents: ['o1', 'o2', 'o3', 'o4', 'o5'].map((id) => ({ id })),
		keyConcepts: ['support'],
		variations: 'Against a hard [[forecheck]], use a [[reverse]].',
		sources: [{ title: 'Hockey Canada Skills Manual', publisher: 'Hockey Canada' }],
		steps: [0, 1].map((i) => ({
			id: i === 0 ? 'setup' : 'move',
			caption: `Step ${i + 1}: [[support]] the puck carrier.`,
			phase: i === 0 ? 'setup' : 'move',
			positions: {
				lw: { x: 20 + i, y: 10 },
				c: { x: 25, y: 40 },
				rw: { x: 20, y: 70 },
				ld: { x: 15, y: 30 },
				rd: { x: 15, y: 55 },
				o1: { x: 60, y: 10 },
				o2: { x: 60, y: 30 },
				o3: { x: 60, y: 45 },
				o4: { x: 60, y: 60 },
				o5: { x: 60, y: 75 }
			},
			puck: { x: 15, y: 55 },
			puckCarrier: 'rd',
			arrows: [{ kind: 'pass' as const, from: 'rd', to: { x: 25, y: 40 } }],
			notes: {
				lw: note('Along the left wall'),
				c: note('Low in the middle'),
				rw: note('Along the right wall'),
				ld: note('Behind the net on the left'),
				rd: note('With the puck')
			},
			quiz:
				i === 0
					? undefined
					: {
							rw: {
								drag: {
									target: { kind: 'ellipse' as const, cx: 20, cy: 70, rx: 6, ry: 6 },
									correct: 'Yes, the wall is open.',
									incorrect: 'Look for the open wall.'
								}
							},
							lw: decision('Where should the left winger go?'),
							c: decision('Where should the center go?'),
							ld: decision('Where should the left D go?'),
							rd: decision('What should the right D do?')
						}
		}))
	};
}

export function makeCtx(plays: Play[] = [validPlay()]): Ctx {
	return {
		playIds: new Set(plays.map((p) => p.id)),
		lessonIds: new Set(['support']),
		termIds: new Set(glossary.map((t) => t.id)),
		plays: new Map(plays.map((p) => [p.id, p]))
	};
}

export function validLesson(): Lesson {
	return {
		id: 'support',
		title: 'Support',
		summary: 'Be an outlet.',
		sections: [{ heading: 'Why', body: 'Good [[support]] wins races.' }],
		examplePlays: ['bo-standard']
	};
}

export function validComparison(): Comparison {
	return { id: 'a-vs-b', a: 'bo-standard', b: 'bo-other', summary: 'Compare.', whenToUse: { a: 'Usually.', b: 'Sometimes.' } };
}
