import type { Play } from '../../types';

const roles = {
	lw: 'Diamond top',
	rw: 'Diamond side (right)',
	ld: 'Diamond side (left)',
	rd: 'Diamond bottom'
};

const play: Play = {
	id: 'pk-diamond',
	title: 'Diamond penalty kill',
	category: 'penalty-kill',
	system: 'Diamond (1 high, 2 sides, 1 low)',
	strength: '4v5',
	summary:
		'A [[penalty-kill]] shaped like a [[diamond]]: one forward on top facing the power play\'s quarterback, one player on each side at the tops of the circles, and one D low in front of the net. It puts quick pressure on the top of the zone and was built to stop the [[umbrella]] power play.',
	slots: [
		{ id: 'lw', home: 'LW' },
		{ id: 'rw', home: 'RW' },
		{ id: 'ld', home: 'LD' },
		{ id: 'rd', home: 'RD' }
	],
	opponents: [
		{ id: 'o1', label: 'Point' },
		{ id: 'o2', label: 'Flank' },
		{ id: 'o3', label: 'Flank' },
		{ id: 'o4', label: 'Net-front' },
		{ id: 'o5', label: 'Goal line' }
	],
	keyConcepts: ['passing-lanes', 'net-front'],
	variations:
		'Who plays which corner of the diamond varies. Many teams put a forward on top and a forward plus a D on the sides, as here; others put both forwards on the sides and a D on top. The diamond also rotates: as the puck moves, the corners slide so the player nearest the puck becomes the pressure and the shape can look like a tilted [[box]] (a common saying is that a diamond is just a box turned an eighth). Its known weakness is that only one player is low, often against two attackers, and a pass across to the far flank or the far post can beat it, so the weak-side player must sit in that [[seam]].',
	sources: [
		{
			title: 'Tactical Formations: Penalty Kill',
			publisher: 'Silver Seven Sens (Michaela Schreiter)',
			url: 'https://silversevensens.com/tactical-formations-penalty-kill'
		},
		{
			title: 'Vancouver Canucks Tactics: Analysing the Penalty Kill',
			publisher: 'The Canuck Way (Janik Beichler)',
			url: 'https://thecanuckway.com/2016/10/17/vancouver-canucks-tactics-penalty-kill/'
		},
		{
			title: "Film breakdown: Michigan's 2019-20 penalty kill",
			publisher: 'Fresh Ice (Bailey Johnson)',
			url: 'https://freshice.substack.com/p/film-breakdown-michigans-2019-20'
		}
	],
	steps: [
		{
			id: 'setup',
			caption:
				'They set up an [[umbrella]]: one player at the top, two flanks near the walls, two low. We set a [[diamond]]: LW on top, LD and RW on the sides, RD low.',
			phase: 'setup',
			positions: {
				lw: { x: 58, y: 42 },
				rw: { x: 40, y: 60 },
				ld: { x: 40, y: 25 },
				rd: { x: 22, y: 46 },
				o1: { x: 72, y: 42 },
				o2: { x: 54, y: 8 },
				o3: { x: 54, y: 78 },
				o4: { x: 17, y: 41 },
				o5: { x: 14, y: 64 }
			},
			puck: { x: 70.5, y: 42.5 },
			puckCarrier: 'o1',
			arrows: [{ kind: 'pass', from: 'o1', to: { x: 53, y: 77 } }],
			roles,
			notes: {
				lw: {
					where: 'Top of the diamond, in the middle of the ice about five strides in front of their top player.',
					read: 'Watch the top player\'s stick and his eyes. Keep your stick in the lane to the middle and your body in his shooting lane.',
					why: 'In the [[umbrella]] the top player runs everything. Being right in front of him makes every pass and shot from up there harder.'
				},
				rw: {
					where: 'Right side of the diamond, near the top of the right circle, between the right flank and the [[slot]].',
					read: 'Watch the puck at the top and the right flank. If the puck goes to him, you are the one who goes.',
					why: 'The side players take the flanks. Sitting inside them keeps the [[seam]] to the [[slot]] closed and lets you reach them fast.'
				},
				ld: {
					where: 'Left side of the diamond, near the top of the left circle, between the left flank and the [[slot]].',
					read: 'Watch the puck at the top and the left flank. Know where he is before the puck moves.',
					why: 'Same job as RW on your side. If the puck goes to your flank, you pressure; if it goes the other way, you become the weak side.'
				},
				rd: {
					where: 'Bottom of the diamond, in front of the crease beside their net-front player.',
					read: 'Keep their [[net-front]] player in front of you and know where the goal-line player is. Glance at the puck to time shots.',
					why: 'You are the only low player against two of theirs. Your first job is the front of the net; the goal-line player is second.'
				}
			},
			reads: {
				lw: [{ at: 'o1', label: 'Quarterback' }],
				rw: [{ at: 'o3', label: 'Flank' }],
				ld: [{ at: 'o2', label: 'Flank' }],
				rd: [
					{ at: 'o4', label: 'Net-front' },
					{ at: 'o5', label: 'Goal line' }
				]
			},
			quiz: {
				lw: {
					drag: {
						start: { x: 64, y: 28 },
						target: { kind: 'ellipse', cx: 59, cy: 42, rx: 7, ry: 6 },
						correct:
							'Yes. Top of the diamond: middle of the ice, in front of their top player and in his shooting lane.',
						incorrect:
							'The top of the [[diamond]] sits in the middle of the ice a few strides in front of their top player, between him and the net.'
					}
				},
				rd: {
					decision: {
						prompt:
							'You are the bottom of the diamond. They have a net-front player and a player on the goal line. Who do you look after first?',
						options: [
							{
								text: 'The net-front player: keep him in front of you and work on his stick',
								correct: true,
								why: 'Tips and rebounds in front are the most dangerous chances. The goal-line player has a bad angle until he passes.'
							},
							{
								text: 'The goal-line player: follow him wherever he goes',
								correct: false,
								why: 'Following him into the corner leaves the front of the net empty, and that is where goals are scored.'
							},
							{
								text: 'Neither: go up and help the side players',
								correct: false,
								why: 'You are the only low player. If you leave, they have two players alone in front of the goalie.'
							}
						]
					}
				}
			}
		},
		{
			id: 'puck-on-half-wall',
			caption:
				'The top passes to the right flank on the [[half-wall]]. RW goes at him. LW slides down toward the puck, and LD sags into the [[slot]] to guard the [[back-door|back door]].',
			phase: 'puck-on-half-wall',
			positions: {
				lw: { x: 58, y: 52 },
				rw: { x: 49, y: 75 },
				ld: { x: 32, y: 34 },
				rd: { x: 21, y: 47 },
				o1: { x: 72, y: 45 },
				o2: { x: 52, y: 8 },
				o3: { x: 52, y: 81 },
				o4: { x: 17, y: 41 },
				o5: { x: 14, y: 64 }
			},
			puck: { x: 51, y: 79.5 },
			puckCarrier: 'o3',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 50, y: 77 } },
				{ kind: 'pass', from: 'o3', to: { x: 71, y: 45 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Sliding from the top toward the puck side, between the half-wall and the top player.',
					read: 'Watch the puck on the half-wall. Shade the pass back to the top, and be ready to go back out if it goes there.',
					why: 'With RW pressuring, you take away his easiest pass. The diamond tilts toward the puck and looks almost like a [[box]].'
				},
				rw: {
					where: 'On the half-wall player, on his inside, a stick length away.',
					read: 'Watch his stick and the puck. Your stick goes in the lane to the [[slot]] so his only easy pass is back up.',
					why: 'Pressure from the side of the diamond is fast because you start close to him. Coming from the inside keeps him on the boards.'
				},
				ld: {
					where: 'Sagging from the left side into the [[slot]], a few strides off the left post.',
					read: 'Watch the far flank, not just the puck. Keep your stick in the lane across the ice to him.',
					why: 'The diamond\'s weak spot is the pass across to the far flank or the far post for a [[one-timer]]. You are the only one who can take it away.'
				},
				rd: {
					where: 'In front of the crease, on the net-front player\'s inside.',
					read: 'Keep his stick tied up and know where the goal-line player on the puck side is.',
					why: 'With the puck on the half-wall, a quick pass to the net-front player is the danger. Stay on him.'
				}
			},
			reads: {
				rw: [{ at: 'o3', label: 'Puck' }],
				lw: [{ at: 'o1', label: 'Top' }],
				ld: [{ at: 'o2', label: 'Far flank' }],
				rd: [{ at: 'o4', label: 'Net-front' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt:
							'The puck goes from the top to the right flank on the half-wall. You are the right side of the diamond. You...',
						options: [
							{
								text: 'Go at him from the inside with your stick in the lane to the [[slot]]',
								correct: true,
								why: 'You are closest and start almost on top of him. Inside pressure keeps him on the boards and away from the [[slot]].'
							},
							{
								text: 'Stay put and let LW come down from the top',
								correct: false,
								why: 'LW is much farther away. The flank gets time to pick out a pass.'
							},
							{
								text: 'Drop to the front of the net',
								correct: false,
								why: 'Then nobody pressures the puck and RD has company he does not need. The side player owns his flank.'
							}
						]
					}
				},
				ld: {
					decision: {
						prompt:
							'The puck is on the right half-wall, far from you. Their left flank is wide open across the ice. Where do you go?',
						options: [
							{
								text: 'Sag into the [[slot]], off the left post, stick in the lane to the far flank',
								correct: true,
								why: 'You protect the [[back-door|back door]] and the [[seam]] pass across. If the pass goes to him, you are close enough to block it.'
							},
							{
								text: 'Stay out on the left flank',
								correct: false,
								why: 'He is not the danger while the puck is on the far wall. The [[slot]] is, and you just left it empty.'
							},
							{
								text: 'Go across to help RW on the half-wall',
								correct: false,
								why: 'Two on the puck in a four-on-five leaves the far side wide open for the cross-ice [[one-timer]].'
							}
						]
					}
				},
				lw: {
					decision: {
						prompt:
							'RW is pressuring the half-wall. You are the top of the diamond. What do you take away?',
						options: [
							{
								text: 'The pass back to the top player, by sliding toward the puck side',
								correct: true,
								why: 'RW takes the middle; you take the easy release. That leaves the half-wall player with no good option.'
							},
							{
								text: 'Nothing. Stay right on the top player',
								correct: false,
								why: 'He is not the puck carrier. Staying there leaves a hole between you and RW.'
							},
							{
								text: 'Go down and double the half-wall with RW',
								correct: false,
								why: 'Doubling on a five-on-four leaves the top player wide open in the middle of the ice.'
							}
						]
					}
				}
			}
		},
		{
			id: 'puck-at-point',
			caption:
				'The flank passes back up top. LW, the top of the diamond, is already close and attacks him, staying in his [[shooting-lane|shooting lane]]. RW and LD get back to the sides.',
			phase: 'puck-at-point',
			positions: {
				lw: { x: 63, y: 45.5 },
				rw: { x: 42, y: 60 },
				ld: { x: 40, y: 27 },
				rd: { x: 21, y: 46 },
				o1: { x: 71, y: 46 },
				o2: { x: 54, y: 8 },
				o3: { x: 54, y: 79 },
				o4: { x: 17, y: 41 },
				o5: { x: 14, y: 63 }
			},
			puck: { x: 69.5, y: 46 },
			puckCarrier: 'o1',
			arrows: [
				{ kind: 'skate', from: 'lw', to: { x: 66, y: 46 } },
				{ kind: 'shot', from: 'o1', to: { x: 12, y: 43 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Closing on the top player, square to him, in his shooting lane.',
					read: 'Watch the puck on his stick. Get your stick on the ice in front of the puck and stay square so he cannot step around you.',
					why: 'This is what the diamond is built for: one player on top means the quarterback never has time. A shot that hits you never reaches the net.'
				},
				rw: {
					where: 'Back at the right side of the diamond, between the flank and the [[slot]].',
					read: 'Watch the top player and your flank. If he passes back down to the flank, you go again.',
					why: 'Resetting fast is how the diamond survives a power play that keeps moving the puck.'
				},
				ld: {
					where: 'Back at the left side of the diamond, near the top of the left circle.',
					read: 'Watch the top player and the left flank. If the top passes to your flank, you pressure.',
					why: 'With the puck up top, the flank on your side is one pass away again, so you return to your corner of the diamond.'
				},
				rd: {
					where: 'In front of the crease, net side of their net-front player.',
					read: 'Do not turn to watch the shot. Find his stick, then look for the rebound.',
					why: 'A point shot only becomes dangerous with a [[screen]] or a [[tip]] in front. Taking his stick takes both away.'
				}
			},
			reads: {
				lw: [{ at: 'o1', label: 'Shooter' }],
				rw: [{ at: 'o3' }],
				ld: [{ at: 'o2' }],
				rd: [{ at: 'o4', label: 'Net-front stick' }]
			},
			quiz: {
				lw: {
					decision: {
						prompt: 'The puck comes back up to their top player. You are the top of the diamond. You...',
						options: [
							{
								text: 'Close on him fast and get square in his shooting lane, stick on the ice',
								correct: true,
								why: 'You start close, so you can take his time away. Square in the lane means a shot hits you, not the net.'
							},
							{
								text: 'Hold your spot and let him shoot',
								correct: false,
								why: 'That gives up the one advantage of the diamond: fast pressure up top.'
							},
							{
								text: 'Reach in with a big poke check from the side',
								correct: false,
								why: 'If you lunge from the side and miss, he has a clear lane to the net. Stay square and in front.'
							}
						]
					}
				}
			}
		},
		{
			id: 'clear',
			caption:
				'The shot hits LW\'s stick and bounces past the top player. LW chases it out of the zone and [[clear|clears]] it down the ice. RD and LD hold the front until it is gone.',
			phase: 'clear',
			positions: {
				lw: { x: 76, y: 40 },
				rw: { x: 50, y: 58 },
				ld: { x: 44, y: 30 },
				rd: { x: 22, y: 44 },
				o1: { x: 70, y: 48 },
				o2: { x: 58, y: 10 },
				o3: { x: 58, y: 76 },
				o4: { x: 18, y: 41 },
				o5: { x: 16, y: 62 }
			},
			puck: { x: 79, y: 38 },
			puckCarrier: 'lw',
			arrows: [{ kind: 'skate', from: 'lw', to: { x: 100, y: 34 } }],
			roles,
			notes: {
				lw: {
					where: 'Just outside the blue line with the puck, ahead of their top player.',
					read: 'Glance back: is the top player catching you? If yes, fire it deep now. If not, carry it to the red line first and then shoot it in.',
					why: 'Every second the puck is in their end is a second off the penalty with no chance against you.'
				},
				rw: {
					where: 'Following up toward the top of the right circle.',
					read: 'Watch LW and the puck. If the top player gets it back, you are the next one in his lane.',
					why: 'Being in the middle of the ice behind LW stops them from turning it right back into your zone.'
				},
				ld: {
					where: 'Moving up from the left circle toward the left point area.',
					read: 'Watch the left flank and the puck. Do not leave the zone until you see the puck is out.',
					why: 'If they win it back at the blue line, you are their first check on the left.'
				},
				rd: {
					where: 'Still in front of the net.',
					read: 'Watch the puck leave the zone before you move up.',
					why: 'Low players leave last. A puck that comes back in finds you still in front of your goalie.'
				}
			},
			reads: {
				lw: [{ at: 'o1', label: 'Chasing' }],
				rw: [{ at: 'lw' }],
				ld: [{ at: 'o2' }],
				rd: [{ at: 'o4' }]
			},
			quiz: {
				rd: {
					drag: {
						start: { x: 34, y: 56 },
						target: { kind: 'ellipse', cx: 21, cy: 44, rx: 6, ry: 5 },
						correct: 'Yes. The low player stays in front of the net until the puck is out of the zone.',
						incorrect:
							'The bottom of the diamond stays in front of the crease until the clear is out. Leaving early is how a blocked clear becomes a goal.'
					}
				}
			}
		}
	]
};

export default play;
