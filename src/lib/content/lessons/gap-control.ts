import type { Lesson } from '../types';

const lesson: Lesson = {
	id: 'gap-control',
	title: 'Gap control',
	summary:
		'The [[gap]] is the space between you and the player coming at you with the puck. Keep it small enough that he has no time, but not so small that he can skate around you.',
	sections: [
		{
			heading: 'What the gap is',
			body: 'When the other team rushes up the ice, the [[gap]] is the distance between the defender and the puck carrier. A big gap gives him time to look up, pick a pass, or walk in and shoot. A gap that is too tight lets a fast forward chip it past you and blow by. Gap control means managing that distance on purpose as the play comes at you, instead of just backing up until you run into your own goalie.'
		},
		{
			heading: 'A rule of thumb in stick lengths',
			body: 'A common coaching guideline: about three stick lengths when the rush starts near their blue line, about two at the red line, and one stick length (close enough to reach his stick or the puck) by the time he reaches your blue line. The numbers are a guide, not a law; a faster skater needs a little more room. The trend is what matters: the gap should be shrinking as the play comes toward your net, not growing.',
			diagram: {
				players: [
					{ id: 'rd', team: 'us', label: 'RD', pos: { x: 90, y: 60 }, highlight: true },
					{ id: 'ld', team: 'us', label: 'LD', pos: { x: 88, y: 28 } },
					{ id: 'c', team: 'us', label: 'C', pos: { x: 114, y: 46 } },
					{ id: 'x1', team: 'them', label: 'F', pos: { x: 102, y: 60 } },
					{ id: 'x2', team: 'them', label: 'F', pos: { x: 104, y: 26 } }
				],
				puck: { x: 100, y: 61 },
				arrows: [
					{ kind: 'skate', from: 'x1', to: { x: 78, y: 64 } },
					{ kind: 'skate', from: 'rd', to: { x: 74, y: 62 } },
					{ kind: 'skate', from: 'c', to: { x: 92, y: 46 } }
				],
				reads: [{ at: 'x1', label: 'His chest, not the puck' }],
				caption:
					'Rush at the red line. RD is about two stick lengths off the puck carrier, skating backward at his speed, with C coming back through the middle to help.'
			}
		},
		{
			heading: 'Match his speed',
			body: 'Start skating backward early, before he has built up speed, and match his pace. If you are slowing down at your blue line while he is speeding up, the gap disappears in a stride and he is past you. Watch his chest (the logo on his jersey), not the puck: the puck moves with his hands, but his chest tells you where his body is actually going.'
		},
		{
			heading: 'Inside-out: give him the boards, not the middle',
			body: 'Line yourself up a little toward the middle of the ice from the puck carrier, so the straight line from him to your net goes through you. That leaves him only the outside lane along the boards, which is the worst place to shoot from. Keep your stick on the ice out in front of you to take away the pass into the middle. When he commits wide, close the gap and keep angling him toward the boards: stick on the puck, your body between him and the net.',
			diagram: {
				players: [
					{ id: 'rd', team: 'us', label: 'RD', pos: { x: 64, y: 62 }, highlight: true },
					{ id: 'ld', team: 'us', label: 'LD', pos: { x: 58, y: 34 } },
					{ id: 'c', team: 'us', label: 'C', pos: { x: 80, y: 44 } },
					{ id: 'x1', team: 'them', label: 'F', pos: { x: 69, y: 67 } },
					{ id: 'x2', team: 'them', label: 'F', pos: { x: 78, y: 30 } }
				],
				puck: { x: 68, y: 69 },
				arrows: [
					{ kind: 'skate', from: 'x1', to: { x: 40, y: 80 } },
					{ kind: 'skate', from: 'rd', to: { x: 42, y: 72 } }
				],
				reads: [{ at: 'x1', label: 'Forced wide' }],
				caption:
					'At our blue line RD is about one stick length away and on the inside. The carrier only has the boards, and RD angles him toward the corner.'
			}
		},
		{
			heading: 'When to step up, when to hold',
			body: 'Close the gap hard when the puck carrier looks down at the puck, fumbles it, turns his back, or when a teammate is [[backcheck|backchecking]] right behind him. Hold your gap and protect the middle when you are outnumbered (an [[odd-man-rush|odd-man rush]]): stepping up and missing there leaves a shooter alone on your goalie. If you do get beaten, turn and skate to the net front; a teammate covering for you is better than chasing from behind.'
		}
	],
	examplePlays: ['dz-man-to-man', 'nz-1-2-2', 'pk-forecheck-1-3', 'pk-nz-2-2']
};

export default lesson;
