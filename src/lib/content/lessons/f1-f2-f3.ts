import type { Lesson } from '../types';

const lesson: Lesson = {
	id: 'f1-f2-f3',
	title: 'F1, F2 and F3',
	summary:
		'On a [[forecheck]] the three forwards take jobs by order of arrival, not by position: first in is [[f1|F1]], second is [[f2|F2]], third is [[f3|F3]]. Any forward can be any of them on a given shift.',
	sections: [
		{
			heading: 'Roles, not positions',
			body: 'F1, F2 and F3 describe what a forward is doing right now, not where he lines up. Whoever is closest to the puck when it goes in deep is [[f1|F1]]. The next forward is [[f2|F2]]. The last one is [[f3|F3]]. Your center might be F1 on one [[dump-in]] and F3 on the next. Do not wait for "the center\'s job"; look at who is closest and fill whatever role is left.'
		},
		{
			heading: 'F1: pressure the puck',
			body: 'F1 goes straight at the puck carrier to take away time. The key is the angle: come at him on a curve that takes away one option, so he can only go where you want him to. On the wall or in the corner, that means coming from the inside (the middle of the ice) so he can only go up the boards. When he is behind the net, as in the picture, it means swinging around the side of the net his partner is on, which takes away the [[reverse]] and leaves him only the boards. You are not trying to win a race to the puck at full speed and miss; you are steering him. Keep your stick on the ice in the lane he wants to pass through.',
			diagram: {
				players: [
					{ id: 'c', team: 'us', label: 'F1', pos: { x: 178, y: 40 }, highlight: true },
					{ id: 'rw', team: 'us', label: 'F2', pos: { x: 166, y: 68 } },
					{ id: 'lw', team: 'us', label: 'F3', pos: { x: 150, y: 42 } },
					{ id: 'ld', team: 'us', label: 'LD', pos: { x: 128, y: 22 } },
					{ id: 'rd', team: 'us', label: 'RD', pos: { x: 128, y: 64 } },
					{ id: 'xd1', team: 'them', label: 'D', pos: { x: 194, y: 47 } },
					{ id: 'xd2', team: 'them', label: 'D', pos: { x: 190, y: 30 } },
					{ id: 'xc', team: 'them', label: 'C', pos: { x: 170, y: 54 } },
					{ id: 'xw1', team: 'them', label: 'W', pos: { x: 160, y: 80 } },
					{ id: 'xw2', team: 'them', label: 'W', pos: { x: 162, y: 10 } }
				],
				puck: { x: 195, y: 49 },
				arrows: [
					{ kind: 'skate', from: 'c', to: { x: 194, y: 38 }, via: { x: 184, y: 33 } },
					{ kind: 'skate', from: 'rw', to: { x: 170, y: 74 } }
				],
				reads: [{ at: 'xd1', label: 'Puck carrier' }],
				caption:
					'Their D picks up the puck behind the net. F1 comes around the far side of the net, taking away the [[reverse]] to the other D, so the puck carrier can only go toward the right boards, where F2 is already heading.'
			}
		},
		{
			heading: 'F2: go where the puck is going',
			body: 'F2 reads what F1 forces. If F1 is pushing the carrier up the right boards, F2 gets to the right boards first: on the winger receiving the pass, or in the lane up the wall. If F1 wins the puck, F2 is the closest [[support]]. If the puck squirts loose, F2 is next on it. F2 should not chase the same player F1 is chasing.'
		},
		{
			heading: 'F3: stay high, guard the middle',
			body: 'F3 stays above the puck, roughly at the top of the circles in the middle of the ice. From there he can cut off a pass up the middle, pounce on a puck that comes out, or back up a D who [[pinch|pinches]]. If F3 drifts below the puck to join the battle, one pass beats all three forwards and the other team comes back with an [[odd-man-rush|odd-man rush]]. If you are the third forward in, you are F3. Stay high.',
			diagram: {
				players: [
					{ id: 'c', team: 'us', label: 'F1', pos: { x: 178, y: 62 } },
					{ id: 'rw', team: 'us', label: 'F2', pos: { x: 166, y: 76 } },
					{ id: 'lw', team: 'us', label: 'F3', pos: { x: 154, y: 50 }, highlight: true },
					{ id: 'ld', team: 'us', label: 'LD', pos: { x: 128, y: 26 } },
					{ id: 'rd', team: 'us', label: 'RD', pos: { x: 130, y: 66 } },
					{ id: 'xd1', team: 'them', label: 'D', pos: { x: 184, y: 68 } },
					{ id: 'xd2', team: 'them', label: 'D', pos: { x: 192, y: 34 } },
					{ id: 'xc', team: 'them', label: 'C', pos: { x: 166, y: 46 } },
					{ id: 'xw1', team: 'them', label: 'W', pos: { x: 156, y: 81 } },
					{ id: 'xw2', team: 'them', label: 'W', pos: { x: 160, y: 12 } }
				],
				puck: { x: 186, y: 70 },
				arrows: [{ kind: 'skate', from: 'lw', to: { x: 160, y: 48 } }],
				reads: [
					{ at: 'xc', label: 'Middle pass' },
					{ at: 'xd2', label: 'Reverse option' }
				],
				caption:
					'F1 and F2 pin the puck in the corner. F3 stays above it in the middle, between their center and the open ice, so the pass up the middle is not there.'
			}
		},
		{
			heading: 'Rotating roles',
			body: 'Roles change as the puck moves. If their D [[reverse|reverses]] the puck to the other corner, the forward closest to it becomes the new F1, the old F1 recovers as support, and someone still has to be high. The rule that never changes: two forwards can go in, but the third stays above the puck. Talk: "I\'m high" tells your linemates the middle is covered and they can go.'
		}
	],
	examplePlays: ['bo-standard']
};

export default lesson;
