import type { Lesson } from '../types';

const lesson: Lesson = {
	id: 'net-front',
	title: 'Net-front play',
	summary:
		'Most goals in rec hockey come from right in front of the net. On offense you go there to [[screen]] the goalie and score [[tip|tips]] and rebounds; on defense you go there to keep the other team from doing the same.',
	sections: [
		{
			heading: 'Why the net-front matters',
			body: 'The [[net-front]] is the small area right in front of the [[crease]]. Goalies stop most shots they can see cleanly from far out. What beats them is a shot they never saw, a [[tip]] that changes direction, or a rebound before they can recover. All three happen in front of the net, so both teams fight for that ice.'
		},
		{
			heading: 'Offense: get in the goalie\'s eyes',
			body: 'When the puck goes to the [[point]], the net-front player sets up on top of the goalie\'s line of sight to the shooter, heels near the top of the [[crease]]. Standing beside the goalie does nothing; you have to be in the line between him and the puck. Stick on the ice, blade ready for a [[tip]]. Get there early, before the defender takes the spot, because it is much easier to hold position than to win it back.',
			diagram: {
				players: [
					{ id: 'ld', team: 'us', label: 'LD', pos: { x: 130, y: 28 } },
					{ id: 'rd', team: 'us', label: 'RD', pos: { x: 128, y: 62 } },
					{ id: 'c', team: 'us', label: 'C', pos: { x: 181, y: 41 }, highlight: true },
					{ id: 'rw', team: 'us', label: 'RW', pos: { x: 160, y: 74 } },
					{ id: 'lw', team: 'us', label: 'LW', pos: { x: 170, y: 18 } },
					{ id: 'x1', team: 'them', label: 'F', pos: { x: 142, y: 32 } },
					{ id: 'x2', team: 'them', label: 'D', pos: { x: 180, y: 48 } },
					{ id: 'x3', team: 'them', label: 'D', pos: { x: 166, y: 66 } },
					{ id: 'x4', team: 'them', label: 'F', pos: { x: 166, y: 26 } },
					{ id: 'x5', team: 'them', label: 'F', pos: { x: 150, y: 56 } }
				],
				puck: { x: 131, y: 30 },
				arrows: [{ kind: 'shot', from: 'ld', to: { x: 189, y: 42 } }],
				reads: [{ at: 'ld', label: 'Shooter' }],
				caption:
					'LD shoots from the left point. C stands at the top of the [[crease]] right in the goalie\'s line to the puck, stick down to tip it or bang in the rebound.'
			}
		},
		{
			heading: 'Rebounds: stick down, eyes on the puck',
			body: 'After the shot, do not watch the goalie, watch the puck. Rebounds come off the pads fast and low, and the player with his stick already on the ice gets there first. If the puck goes behind the net, the net-front player is often the closest one to it and can win it back for a [[cycle]].'
		},
		{
			heading: 'Defense: box out, and do not screen your own goalie',
			body: 'In your own end the job flips. Get between the attacker and your goalie (a [[box-out]]), and get there before he settles. Stand a little off to the side of the goalie\'s line to the shooter so you are not screening him yourself. Control the attacker\'s stick, not just his body: lift it or lean on it as the shot comes, so he cannot [[tip]] it. Standing next to him is not covering him.',
			diagram: {
				players: [
					{ id: 'ld', team: 'us', label: 'LD', pos: { x: 17, y: 40 }, highlight: true },
					{ id: 'rd', team: 'us', label: 'RD', pos: { x: 22, y: 64 } },
					{ id: 'c', team: 'us', label: 'C', pos: { x: 32, y: 50 } },
					{ id: 'rw', team: 'us', label: 'RW', pos: { x: 60, y: 62 } },
					{ id: 'lw', team: 'us', label: 'LW', pos: { x: 46, y: 28 } },
					{ id: 'x1', team: 'them', label: 'F', pos: { x: 22, y: 71 } },
					{ id: 'x2', team: 'them', label: 'F', pos: { x: 38, y: 40 } },
					{ id: 'x3', team: 'them', label: 'F', pos: { x: 21, y: 46 } },
					{ id: 'x4', team: 'them', label: 'D', pos: { x: 70, y: 65 } },
					{ id: 'x5', team: 'them', label: 'D', pos: { x: 70, y: 22 } }
				],
				puck: { x: 69, y: 67 },
				arrows: [{ kind: 'shot', from: 'x4', to: { x: 11, y: 43 } }],
				reads: [{ at: 'x3', label: 'His stick' }],
				caption:
					'Their D shoots from the point on our right side. LD has inside position on the net-front forward, between him and the goalie but off the goalie\'s line to the puck, with his stick on the attacker\'s stick.'
			}
		},
		{
			heading: 'Fronting instead of boxing out',
			body: 'Some coaches, especially on the penalty kill, have the defender stand in front of the attacker (between him and the shooter) instead of behind him. That blocks the shot before it gets to the net-front. The trade-off: you lose sight of him, so he is free behind you to tip the shot or grab the rebound. Whichever your team uses, the same habit applies: be in position before the shot, not after.'
		}
	],
	examplePlays: []
};

export default lesson;
