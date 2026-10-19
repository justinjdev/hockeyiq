import type { Lesson } from '../types';

const lesson: Lesson = {
	id: 'triangles-support',
	title: 'Triangles and support',
	summary:
		'The puck carrier should always have two teammates to pass to, at different angles. Those three players make a [[triangle]], and keeping that shape is what [[support]] means.',
	sections: [
		{
			heading: 'What a support triangle is',
			body: 'A [[triangle]] is the puck carrier plus two teammates placed so the carrier has two different passes available. With one option, a single defender can take it away and the carrier is stuck. With two options at different angles, the defender has to pick one, and the carrier uses the other. On a [[breakout]] it is the D with the puck, the winger on the wall, and the center swinging low.',
			diagram: {
				players: [
					{ id: 'rd', team: 'us', label: 'RD', pos: { x: 6, y: 47 }, highlight: true },
					{ id: 'rw', team: 'us', label: 'RW', pos: { x: 32, y: 80 }, highlight: true },
					{ id: 'c', team: 'us', label: 'C', pos: { x: 30, y: 48 }, highlight: true },
					{ id: 'ld', team: 'us', label: 'LD', pos: { x: 10, y: 32 } },
					{ id: 'lw', team: 'us', label: 'LW', pos: { x: 52, y: 10 } },
					{ id: 'f1', team: 'them', label: 'F1', pos: { x: 24, y: 60 } },
					{ id: 'f2', team: 'them', label: 'F2', pos: { x: 46, y: 62 } },
					{ id: 'f3', team: 'them', label: 'F3', pos: { x: 70, y: 40 } }
				],
				puck: { x: 7, y: 48 },
				arrows: [
					{ kind: 'pass', from: 'rd', to: { x: 31, y: 79 } },
					{ kind: 'pass', from: 'rd', to: { x: 29, y: 49 } }
				],
				caption:
					'RD has the puck behind the net. RW on the wall and C low in the middle give him two passes at different angles. F1 is caught between the two lanes and cannot take away both.'
			}
		},
		{
			heading: 'Two options, never in a straight line',
			body: 'The most common support mistake is standing in line with the puck carrier and another teammate. If the carrier, you, and your teammate are lined up, one defender standing in that line blocks both [[passing-lane|passing lanes]]. Move a few strides so that the three of you make a real triangle with some width and some depth: one option a little ahead and wide, one a little behind or toward the middle.'
		},
		{
			heading: 'How far away to be',
			body: 'Close enough for a short, hard pass you would trust under pressure; far enough that one opponent cannot cover two of you. When you are too far apart, passes get long and slow and get picked off. When you are too close, you bring your defender with you and crowd the carrier. A good test: if the carrier had to pass to you right now, could he do it without lifting his head for long?'
		},
		{
			heading: 'Triangles in the offensive zone',
			body: 'Down low in their end, the classic triangle is one forward on the puck along the boards, one forward lower (near or below the goal line) and one forward higher (the [[high-slot|high slot]] or up the wall). The low player supports a pass back down or around; the high player gives a pass toward the net or up to the [[point]]. This is the shape the [[cycle]] keeps rebuilding.',
			diagram: {
				players: [
					{ id: 'rw', team: 'us', label: 'RW', pos: { x: 178, y: 74 }, highlight: true },
					{ id: 'c', team: 'us', label: 'C', pos: { x: 192, y: 56 }, highlight: true },
					{ id: 'lw', team: 'us', label: 'LW', pos: { x: 160, y: 50 }, highlight: true },
					{ id: 'rd', team: 'us', label: 'RD', pos: { x: 128, y: 68 } },
					{ id: 'ld', team: 'us', label: 'LD', pos: { x: 128, y: 24 } },
					{ id: 'x1', team: 'them', label: 'D', pos: { x: 188, y: 70 } },
					{ id: 'x2', team: 'them', label: 'D', pos: { x: 181, y: 45 } },
					{ id: 'x3', team: 'them', label: 'F', pos: { x: 172, y: 56 } },
					{ id: 'x4', team: 'them', label: 'F', pos: { x: 148, y: 30 } },
					{ id: 'x5', team: 'them', label: 'F', pos: { x: 145, y: 60 } }
				],
				puck: { x: 179, y: 76 },
				arrows: [
					{ kind: 'pass', from: 'rw', to: { x: 191, y: 57 } },
					{ kind: 'pass', from: 'rw', to: { x: 161, y: 51 } }
				],
				caption:
					'RW has the puck in the corner. C supports low near the goal line, LW supports high in the slot. Two options, two different directions.'
			}
		},
		{
			heading: 'Rebuild it every time the puck moves',
			body: 'A triangle is not a set of spots. When the puck is passed, the new carrier needs two new options, so everyone shifts. The player who just passed is usually one of them: pass, then move to a new open spot instead of standing and watching. If you are the third player and both other spots are taken, find the open point of the triangle rather than joining the crowd at the puck.'
		}
	],
	examplePlays: ['bo-standard', 'oz-cycle-low', 'pp-overload', 'bo-reverse']
};

export default lesson;
