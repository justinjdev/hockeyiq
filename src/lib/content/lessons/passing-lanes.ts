import type { Lesson } from '../types';

const lesson: Lesson = {
	id: 'passing-lanes',
	title: 'Passing lanes',
	summary:
		'A pass only works if the straight line from the puck to the receiver is clear. Without the puck, your job is to open that line for yourself on offense and close it on defense.',
	sections: [
		{
			heading: 'A lane is a straight line',
			body: 'A [[passing-lane|passing lane]] is the straight path from the puck carrier\'s stick to yours. If a defender\'s stick, skate or body is anywhere on that line, the pass is not there, no matter how open you feel. Before you ask for the puck, look at the line between you and the puck, not just at the space around you.'
		},
		{
			heading: 'Getting open: move off the defender\'s line',
			body: 'You usually do not need to skate far to get open. A few strides sideways or up and down moves you off the defender\'s line and opens a new lane. Move before the carrier is ready to pass, not after, and show a target: stick on the ice, blade facing the passer. If the lane closes again, move again.',
			diagram: {
				players: [
					{ id: 'rw', team: 'us', label: 'RW', pos: { x: 156, y: 74 } },
					{ id: 'c', team: 'us', label: 'C', pos: { x: 165, y: 50 }, highlight: true },
					{ id: 'rd', team: 'us', label: 'RD', pos: { x: 128, y: 64 } },
					{ id: 'ld', team: 'us', label: 'LD', pos: { x: 128, y: 22 } },
					{ id: 'lw', team: 'us', label: 'LW', pos: { x: 181, y: 30 } },
					{ id: 'x1', team: 'them', label: 'F', pos: { x: 162, y: 76 } },
					{ id: 'x2', team: 'them', label: 'D', pos: { x: 181, y: 44 } },
					{ id: 'x3', team: 'them', label: 'D', pos: { x: 160, y: 63 } },
					{ id: 'x4', team: 'them', label: 'F', pos: { x: 152, y: 30 } },
					{ id: 'x5', team: 'them', label: 'F', pos: { x: 140, y: 58 } }
				],
				puck: { x: 155, y: 76 },
				arrows: [
					{ kind: 'skate', from: 'c', to: { x: 148, y: 52 } },
					{ kind: 'pass', from: 'rw', to: { x: 148, y: 53 } }
				],
				reads: [{ at: 'x3', label: 'Blocking the lane' }],
				caption:
					'C is open in the slot, but their D is standing right on the line from RW to C. A few strides back toward the blue line, higher in the slot, puts C off that line and opens the pass.'
			}
		},
		{
			heading: 'Seams: the gap between two defenders',
			body: 'When defenders are spread out, the open ice between two of them is a [[seam]]. A pass through a seam beats both of them at once, because each one thinks the other has it. Look for seams most when the other team is in a set shape, like a box in front of their net: the spaces between the defenders are where the lanes are.'
		},
		{
			heading: 'Defending: stick in the lane',
			body: 'Without the puck in your own end, put yourself between the puck and the most dangerous option, which is usually a player in the [[slot]]. Keep your stick on the ice in that lane, one hand on it if you need more reach. An active stick can take away more than one lane by moving quickly between them. When you are right on top of the carrier, your stick goes on the puck instead.',
			diagram: {
				players: [
					{ id: 'rd', team: 'us', label: 'RD', pos: { x: 20, y: 66 } },
					{ id: 'c', team: 'us', label: 'C', pos: { x: 28, y: 56 }, highlight: true },
					{ id: 'ld', team: 'us', label: 'LD', pos: { x: 15, y: 46 } },
					{ id: 'rw', team: 'us', label: 'RW', pos: { x: 52, y: 66 } },
					{ id: 'lw', team: 'us', label: 'LW', pos: { x: 44, y: 32 } },
					{ id: 'x1', team: 'them', label: 'F', pos: { x: 15, y: 72 } },
					{ id: 'x2', team: 'them', label: 'F', pos: { x: 36, y: 46 } },
					{ id: 'x3', team: 'them', label: 'F', pos: { x: 20, y: 39 } },
					{ id: 'x4', team: 'them', label: 'D', pos: { x: 70, y: 66 } },
					{ id: 'x5', team: 'them', label: 'D', pos: { x: 70, y: 22 } }
				],
				puck: { x: 14, y: 74 },
				reads: [{ at: 'x2', label: 'Most dangerous pass' }],
				arrows: [],
				caption:
					'Their forward has the puck in our corner. C sits on the line between him and the slot, stick on the ice in that lane, so the pass to the slot is not there.'
			}
		},
		{
			heading: 'If there is no lane, do not force it',
			body: 'A pass into a closed lane is a turnover in the worst spot. If nothing is open, protect the puck, carry it to buy a second, [[chip]] it to space, or [[rim]] it to an area your teammates can reach. Then reset so your [[triangle]] has a lane again.'
		}
	],
	examplePlays: ['fc-2-3', 'oz-low-to-high', 'nz-regroup', 'dz-low-zone-collapse']
};

export default lesson;
