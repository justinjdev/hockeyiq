import type { Lesson } from '../types';

const lesson: Lesson = {
	id: 'strong-weak-side',
	title: 'Strong side and weak side',
	summary:
		'Split the ice in half down the middle, lengthwise. The half with the puck is the [[strong-side|strong side]]; the other half is the [[weak-side|weak side]]. Knowing which half you are on tells you most of your job.',
	sections: [
		{
			heading: 'Which side am I on?',
			body: 'Picture a line from one net to the other. Whichever half the puck is in is the [[strong-side|strong side]] (also called the [[puck-side|puck side]]). The other half is the [[weak-side|weak side]]. Your side is not your position: a left winger is on the strong side whenever the puck is on the left, and on the weak side as soon as it goes right. Check where the puck is, then check which half you are in.'
		},
		{
			heading: 'Strong side: be close and useful',
			body: 'Players on the strong side are near the puck, so their job is to win it or [[support]] it. In your own end that means the D on the puck, the center helping low, and the strong-side winger on the [[half-wall]] covering the [[point]]. On offense it means being a short pass away from the carrier. Close does not mean on top of each other: two of you chasing the same puck leaves someone open.'
		},
		{
			heading: 'Weak side in your own end: guard the middle',
			body: 'When the puck is in the far corner, the weak side is where goals come from: the pass across, the [[back-door]] tap-in, the shot from the weak-side point. The [[weak-side-d|weak-side D]] goes to the front of the net and takes the player there. The weak-side winger does not drift to the boards; he sinks toward the middle, high in the [[slot]], where he can see both the puck and the weak-side point. If the puck goes up to that point, he is close enough to get out to it.',
			diagram: {
				players: [
					{ id: 'rd', team: 'us', label: 'RD', pos: { x: 20, y: 67 } },
					{ id: 'c', team: 'us', label: 'C', pos: { x: 26, y: 56 } },
					{ id: 'rw', team: 'us', label: 'RW', pos: { x: 46, y: 70 } },
					{ id: 'ld', team: 'us', label: 'LD', pos: { x: 15, y: 40 }, highlight: true },
					{ id: 'lw', team: 'us', label: 'LW', pos: { x: 42, y: 34 }, highlight: true },
					{ id: 'x1', team: 'them', label: 'F', pos: { x: 14, y: 73 } },
					{ id: 'x2', team: 'them', label: 'F', pos: { x: 40, y: 78 } },
					{ id: 'x3', team: 'them', label: 'F', pos: { x: 21, y: 45 } },
					{ id: 'x4', team: 'them', label: 'D', pos: { x: 70, y: 66 } },
					{ id: 'x5', team: 'them', label: 'D', pos: { x: 70, y: 20 } }
				],
				puck: { x: 13, y: 75 },
				arrows: [{ kind: 'skate', from: 'lw', to: { x: 38, y: 40 } }],
				reads: [
					{ at: 'x5', label: 'Weak-side point' },
					{ at: 'x3', label: 'Net-front' }
				],
				caption:
					'Puck in our right corner. Strong side: RD on the puck, C helping low, RW on the half-wall. Weak side: LD takes the net-front, LW sinks into the high slot where he can see the puck and the weak-side point.'
			}
		},
		{
			heading: 'Weak side on offense: be the surprise',
			body: 'When we have the puck in their end, defenders turn to watch it, and the weak side gets quiet. The weak-side forward heads for the far post (the [[back-door]]), stick on the ice, ready for a pass across or a rebound. The weak-side D slides toward the middle of the blue line so a pass back to him is open and so he can stop a rush if we lose it.',
			diagram: {
				players: [
					{ id: 'rw', team: 'us', label: 'RW', pos: { x: 160, y: 74 } },
					{ id: 'c', team: 'us', label: 'C', pos: { x: 175, y: 72 } },
					{ id: 'rd', team: 'us', label: 'RD', pos: { x: 128, y: 66 } },
					{ id: 'ld', team: 'us', label: 'LD', pos: { x: 128, y: 42 }, highlight: true },
					{ id: 'lw', team: 'us', label: 'LW', pos: { x: 182, y: 34 }, highlight: true },
					{ id: 'x1', team: 'them', label: 'F', pos: { x: 166, y: 80 } },
					{ id: 'x2', team: 'them', label: 'D', pos: { x: 182, y: 50 } },
					{ id: 'x3', team: 'them', label: 'D', pos: { x: 177, y: 63 } },
					{ id: 'x4', team: 'them', label: 'F', pos: { x: 166, y: 50 } },
					{ id: 'x5', team: 'them', label: 'F', pos: { x: 150, y: 36 } }
				],
				puck: { x: 161, y: 76 },
				arrows: [{ kind: 'pass', from: 'rw', to: { x: 181, y: 36 } }],
				reads: [{ at: 'rw', label: 'Puck' }],
				caption:
					'Every defender is looking at RW on the right side. LW is alone at the back door, and LD has slid to the middle of the blue line.'
			}
		},
		{
			heading: 'The sides switch all the time',
			body: 'Every time the puck crosses the middle (a [[d-to-d|D-to-D]] pass, a [[reverse]] behind the net, a carrier cutting across) the strong side and weak side swap, and so do the jobs. The winger who was guarding the high slot is suddenly the one who has to get out to the point. Watch the puck cross the middle and change jobs at that moment, not two seconds later.'
		}
	],
	examplePlays: ['bo-standard', 'dz-zone-coverage', 'nz-1-2-2', 'oz-cycle-low']
};

export default lesson;
