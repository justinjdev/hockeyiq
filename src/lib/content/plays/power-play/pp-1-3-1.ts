import type { Play } from '../../types';

const roles = { ld: 'Point', lw: 'Left flank', rd: 'Right flank', c: 'Bumper', rw: 'Net-front' };

const play: Play = {
	id: 'pp-1-3-1',
	title: '1-3-1 power play vs a box',
	category: 'power-play',
	system: '1-3-1',
	strength: '5v4',
	summary:
		'The most common modern [[power-play]] setup: one player at the [[point]], three across the middle (two [[flank|flanks]] out by the faceoff dots and a [[bumper]] in the middle of the [[slot]]), and one at the [[net-front]]. Against a [[box]] penalty kill the bumper stands in the hole in the middle of their box. Every time one of their four steps out to the puck, a [[seam]] opens to someone else, usually a [[one-timer]] from the far flank.',
	slots: [
		{ id: 'lw', home: 'LW' },
		{ id: 'c', home: 'C' },
		{ id: 'rw', home: 'RW' },
		{ id: 'ld', home: 'LD' },
		{ id: 'rd', home: 'RD' }
	],
	opponents: [
		{ id: 'o1', label: 'F' },
		{ id: 'o2', label: 'F' },
		{ id: 'o3', label: 'D' },
		{ id: 'o4', label: 'D' }
	],
	keyConcepts: [],
	variations:
		'Some people call this setup "the umbrella" because the point and the two flanks still make an umbrella shape. The difference is real: the classic umbrella has three players high near the blue line and two at the net, while the 1-3-1 brings the flanks down to the faceoff dots and puts a [[bumper]] in the middle. Most coaches put each flank on his off-hand side (a right shot on the left flank, a left shot on the right) so the [[one-timer]] is on his forehand. Most NHL units use one D at the point and four forwards; rec units often have a second D, who plays a flank as here. The unit does not have to be run from the point: some teams quarterback it from the [[half-wall]] or from below the goal line, and good units keep moving the puck low to high and back so the penalty killers never get set.',
	sources: [
		{
			title: 'Explained: 1-3-1 Power Play Formation',
			publisher: 'The Coaches Site',
			url: 'https://members.thecoachessite.com/article/explained-1-3-1-power-play-formation'
		},
		{
			title: 'How NHL Teams Make The Best Use Of The 1-3-1 Power Play',
			publisher: 'The Hockey News',
			url: 'https://thehockeynews.com/news/latest-news/how-nhl-teams-make-the-best-use-of-the-1-3-1-power-play'
		},
		{
			title: "Complete Idiot's Guide to Hockey Systems: Special Teams",
			publisher: 'Blue Seat Blogs',
			url: 'https://blueseatblogs.com/2011/10/11/complete-idiots-guide-to-hockey-systems-special-teams/'
		}
	],
	steps: [
		{
			caption:
				'LD has the puck at the point. LW and RD are the [[flank|flanks]] by the faceoff dots, C is the [[bumper]] in the middle of their [[box]], and RW is at the net.',
			phase: 'setup',
			positions: {
				lw: { x: 166, y: 12 },
				c: { x: 156, y: 42.5 },
				rw: { x: 182, y: 44 },
				ld: { x: 130, y: 46 },
				rd: { x: 165, y: 74 },
				o1: { x: 150, y: 30 },
				o2: { x: 148, y: 52 },
				o3: { x: 174, y: 35 },
				o4: { x: 174, y: 51 }
			},
			puck: { x: 131.5, y: 47.5 },
			puckCarrier: 'ld',
			arrows: [{ kind: 'pass', from: 'ld', to: { x: 164, y: 72 } }],
			roles,
			notes: {
				lw: {
					where: 'Left flank: out by the left faceoff dot, about halfway between the dot and the boards, facing the middle.',
					read: 'Watch the puck and the high penalty killer on your side. Stick on the ice, ready for a [[one-timer]].',
					why: 'From the dot you can shoot, pass to the bumper, or go down low. Out wide you also pull their box apart.'
				},
				c: {
					where: 'In the middle of their box, between the tops of the circles, in the [[high-slot|high slot]].',
					read: 'Keep your head moving: know where all four of them are. Find the gap between their two high forwards.',
					why: 'A box has a hole in the middle, and you stand in it. They cannot cover you without leaving someone else.'
				},
				rw: {
					where: 'In front of the net, just outside the crease.',
					read: 'Watch the puck and their two D beside you. Stay in the goalie\'s eyes.',
					why: 'You take away the goalie\'s view and you are the target for rebounds and quick passes from the flanks.'
				},
				ld: {
					where: 'At the point, a stride inside the blue line, just right of the middle.',
					read: 'Look at their two high forwards. They are sitting back, waiting for you to make the first move.',
					why: 'You are the reset button and the last player back. Your first job is to move it to a flank and make them react.'
				},
				rd: {
					where: 'Right flank: out by the right faceoff dot, about halfway to the boards. Your home spot is RD, but on this unit you play a flank.',
					read: 'Watch LD and the high penalty killer on your side. Open your stick to the pass.',
					why: 'The puck usually starts on a flank. Getting it there makes one of their forwards choose: come out at you or stay on C.'
				}
			},
			reads: {
				ld: [{ at: 'o1' }, { at: 'o2' }],
				c: [{ at: 'o1' }, { at: 'o2' }],
				rd: [{ at: 'o2' }],
				lw: [{ at: 'o1' }],
				rw: [{ at: 'o3' }, { at: 'o4' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt: 'You have the puck at the point. Their [[box]] is set and their two high forwards are waiting. Your first move is to...',
						options: [
							{
								text: 'Move it to a flank so one of their forwards has to come out',
								correct: true,
								why: 'Every time one of their four steps out, a hole opens somewhere else. The flank pass starts that chain.'
							},
							{
								text: 'Shoot from the point right away',
								correct: false,
								why: 'Their box is set and your lane is full of bodies. The shot gets blocked and can turn into a breakaway against.'
							},
							{
								text: 'Force it straight into C in the middle',
								correct: false,
								why: 'Their two high forwards are still set, right on both sides of that lane. Make them move first.'
							}
						]
					}
				},
				c: {
					drag: {
						start: { x: 142, y: 42 },
						target: { kind: 'ellipse', cx: 157, cy: 43, rx: 8, ry: 6 },
						correct: 'Yes. In the [[high-slot|high slot]], in the middle of their box, you stand in the hole they cannot cover without leaving someone else.',
						incorrect: 'The bumper sits in the middle of their box, between the tops of the circles. Too high and you are just another point; too low and you are in their D\'s lap.'
					}
				}
			}
		},
		{
			caption:
				'RD gets it on the right flank. Their high forward on that side steps out at him, which opens a [[seam]] behind him to C.',
			phase: 'flank',
			positions: {
				lw: { x: 166, y: 13 },
				c: { x: 157, y: 44 },
				rw: { x: 182, y: 44 },
				ld: { x: 131, y: 44 },
				rd: { x: 164, y: 72 },
				o1: { x: 152, y: 36 },
				o2: { x: 155, y: 66 },
				o3: { x: 175, y: 36 },
				o4: { x: 175, y: 52 }
			},
			puck: { x: 163, y: 70.5 },
			puckCarrier: 'rd',
			arrows: [{ kind: 'pass', from: 'rd', to: { x: 158, y: 45 } }],
			roles,
			notes: {
				lw: {
					where: 'Left flank by the dot.',
					read: 'The puck is on the far side. Their forward on your side has sagged toward C. Stay wide and get your stick ready.',
					why: 'The far flank is the most dangerous spot on the ice when the puck moves fast. Do not drift toward the puck.'
				},
				c: {
					where: 'In the middle of their box, sliding a step toward the puck to open up for the pass.',
					read: 'Their forward who covered you just left to go at RD. Show RD your stick in the open ice.',
					why: 'When their forward steps out, the space behind him is yours. Call for it.'
				},
				rw: {
					where: 'In front of the net.',
					read: 'Watch their D on the right side. If he steps out toward RD, the pass down to you at the post opens.',
					why: 'Their low D have to watch you and the flank. Staying in front keeps one of them pinned to the net.'
				},
				ld: {
					where: 'At the point, sliding a little toward the middle.',
					read: 'Watch their forward who stepped out at RD. If RD gets in trouble, be the pass back up.',
					why: 'You are the outlet for RD and the safety if the puck is lost.'
				},
				rd: {
					where: 'On the right flank with the puck.',
					read: 'Their forward is coming at you from above. Look past him: C is open behind him in the middle of the box.',
					why: 'He left C to come at you. The pass into the bumper goes through the hole he just made.'
				}
			},
			reads: {
				rd: [{ at: 'o2', label: 'Stepping out' }, { at: 'c', label: 'Open' }],
				c: [{ at: 'o2' }],
				lw: [{ at: 'o1' }],
				rw: [{ at: 'o4' }],
				ld: [{ at: 'o2' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt: 'You have the puck on the right flank. Their high forward on your side steps out at you. C is in the middle of their box. You...',
						options: [
							{
								text: 'Pass into C in the middle, through the hole the forward left',
								correct: true,
								why: 'He came out at you, so nobody is covering C. The bumper gets the puck in the middle of the ice with options everywhere.'
							},
							{
								text: 'Shoot from the flank through their forward',
								correct: false,
								why: 'He is in your lane. The shot gets blocked and he is already skating the other way.'
							},
							{
								text: 'Carry it down the wall below the goal line',
								correct: false,
								why: 'You skate away from the open man and into a corner where their D can pin you.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'C gets it in the middle. Their box collapses toward him, and nobody is near LW on the far flank.',
			phase: 'bumper',
			positions: {
				lw: { x: 166, y: 14 },
				c: { x: 158, y: 44 },
				rw: { x: 182, y: 43 },
				ld: { x: 131, y: 42 },
				rd: { x: 163, y: 71 },
				o1: { x: 153, y: 37 },
				o2: { x: 157, y: 58 },
				o3: { x: 170, y: 40 },
				o4: { x: 171, y: 50 }
			},
			puck: { x: 159.5, y: 43 },
			puckCarrier: 'c',
			arrows: [{ kind: 'pass', from: 'c', to: { x: 166, y: 15 } }],
			roles,
			notes: {
				lw: {
					where: 'Left flank by the dot, stick loaded for a one-timer.',
					read: 'All four of them are looking at C. Nobody is near you. Open your blade toward C.',
					why: 'When the box shrinks to stop the bumper, the far flank is wide open. This is the shot the 1-3-1 is built for.'
				},
				c: {
					where: 'In the middle of the slot with the puck.',
					read: 'Their forward and both D are closing in on you. LW is alone on the left flank.',
					why: 'You have pulled three of them to you. One quick pass makes them all wrong.'
				},
				rw: {
					where: 'In front of the net, sliding toward the left post.',
					read: 'The puck is about to go to LW on the left. Get onto the line from LW to the net.',
					why: 'LW\'s shot from the dot is close to the net. A [[screen]] plus a [[tip]] makes it almost impossible to stop.'
				},
				ld: {
					where: 'At the point in the middle.',
					read: 'Watch their forward nearest you. If the puck comes back up, keep it in.',
					why: 'The point never gets caught below their forwards. You are the last one back.'
				},
				rd: {
					where: 'On the right flank.',
					read: 'Their forward has left you to help on C. Stay ready: if LW cannot shoot, the puck can come across to you.',
					why: 'Two flanks mean the box can never cover both sides at once.'
				}
			},
			reads: {
				c: [
					{ at: 'o1', label: 'Closing' },
					{ at: 'o3', label: 'Closing' },
					{ at: 'lw', label: 'Open' }
				],
				lw: [{ at: 'c' }],
				rw: [{ at: 'o3' }],
				ld: [{ at: 'o1' }],
				rd: [{ at: 'o2' }]
			},
			quiz: {
				c: {
					decision: {
						prompt: 'You get the puck in the middle of their box. Their forward and both D close in on you. LW is alone on the left flank. You...',
						options: [
							{
								text: 'Pass right away to LW for a one-timer',
								correct: true,
								why: 'Three of them came to you, so the far flank is empty. A quick pass gives LW a one-timer before the box can shift back.'
							},
							{
								text: 'Turn and shoot through all three of them',
								correct: false,
								why: 'You are surrounded and your lane is full. A shot into bodies usually gets blocked or cleared.'
							},
							{
								text: 'Hold it and try to stickhandle through',
								correct: false,
								why: 'Three of them against one of you in the middle of the slot. You lose the puck and they clear it.'
							}
						]
					}
				},
				rw: {
					drag: {
						target: { kind: 'ellipse', cx: 182, cy: 41, rx: 8, ry: 6 },
						correct: 'Yes. In front of the crease, shading toward the left post, you are on the line from LW\'s stick to the net.',
						incorrect: 'The net-front player stays just outside the crease and shades toward the side the shot will come from, so he is on the shooting line.'
					}
				}
			}
		},
		{
			caption:
				'LW one-times it from the left dot with RW screening. Their box is still shifted to the right, and their forward is too late to block it.',
			phase: 'shot',
			positions: {
				lw: { x: 166, y: 15 },
				c: { x: 160, y: 45 },
				rw: { x: 183, y: 36 },
				ld: { x: 132, y: 40 },
				rd: { x: 167, y: 64 },
				o1: { x: 155, y: 30 },
				o2: { x: 158, y: 53 },
				o3: { x: 173, y: 32 },
				o4: { x: 175, y: 47 }
			},
			puck: { x: 167, y: 16.5 },
			puckCarrier: 'lw',
			arrows: [
				{ kind: 'shot', from: 'lw', to: { x: 188, y: 41 } },
				{ kind: 'skate', from: 'rd', to: { x: 172, y: 58 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Left flank by the dot, shooting.',
					read: 'Their forward and D are both late. Shoot it on your first touch, low and on the net.',
					why: 'Stopping the puck gives the box a second to recover. The one-timer beats the goalie moving across.'
				},
				c: {
					where: 'Staying in the slot.',
					read: 'Watch the shot. If it comes out to the middle, it is yours to shoot again.',
					why: 'The bumper is the second shooter on rebounds that pop into the slot.'
				},
				rw: {
					where: 'In front of the crease, on the line from LW\'s stick to the net.',
					read: 'Feel the goalie, stick on the ice, be ready to [[tip]] it or bang in a rebound.',
					why: 'A shot from the dot through a screen with a stick in front of it is the most dangerous shot on the power play.'
				},
				ld: {
					where: 'At the point.',
					read: 'Watch their forwards. If they get the puck, stop it at the line or get back.',
					why: 'You are the only one back. One clear past you is a breakaway.'
				},
				rd: {
					where: 'Sliding down from the right flank toward the far post.',
					read: 'Watch the puck off the goalie. Shots from the left often bounce out to the right side.',
					why: 'The [[back-door]] rebound is open because their whole box moved toward the puck.'
				}
			},
			reads: {
				lw: [{ at: 'rw', label: 'Screen' }],
				rw: [{ at: { x: 188, y: 41 }, label: 'Goalie' }],
				rd: [{ at: { x: 186, y: 50 }, label: 'Rebound' }],
				c: [{ at: { x: 178, y: 42 } }],
				ld: [{ at: 'o1' }]
			},
			quiz: {
				lw: {
					decision: {
						prompt: 'C passes it across to you on the left flank. Their box is still shifting back. You...',
						options: [
							{
								text: 'One-time it on your first touch',
								correct: true,
								why: 'The goalie and their box are still moving across. A first-touch shot beats them before they get set.'
							},
							{
								text: 'Stop it, settle it, then pick a spot',
								correct: false,
								why: 'That extra second lets their forward and D get into your lane and the goalie get set.'
							},
							{
								text: 'Pass it back up to LD to reset',
								correct: false,
								why: 'The whole sequence was built to give you this shot. Take it.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
