import type { Play } from '../../types';

const roles = { rw: 'F1', c: 'F2', lw: 'F3' };

const play: Play = {
	id: 'fc-2-1-2',
	title: '2-1-2 forecheck',
	category: 'forecheck',
	system: '2-1-2',
	strength: '5v5',
	summary:
		'An aggressive [[forecheck]]: two forwards go in deep, [[f1|F1]] to pressure the puck carrier hard and [[f2|F2]] to take away his first pass and grab the loose puck, while [[f3|F3]] stays high in the slot and both D hold the blue line.',
	slots: [
		{ id: 'lw', home: 'LW' },
		{ id: 'c', home: 'C' },
		{ id: 'rw', home: 'RW' },
		{ id: 'ld', home: 'LD' },
		{ id: 'rd', home: 'RD' }
	],
	opponents: [
		{ id: 'o1', label: 'D' },
		{ id: 'o2', label: 'D' },
		{ id: 'o3', label: 'W' },
		{ id: 'o4', label: 'C' },
		{ id: 'o5', label: 'W' }
	],
	keyConcepts: [],
	variations:
		'The roles go to whoever gets there first and second, not to fixed positions. In the "spread" version F1 and F2 come at the puck from opposite sides of the net; in the "stack" version F2 follows F1 down the same side and reads off his pressure. Some teams also let the D [[pinch]] hard on any rim up the wall, with F3 dropping back to cover the D\'s spot at the blue line. Coaches disagree on how high F3 should sit: around the tops of the circles is most common, but some put him at the hash marks to add pressure.',
	sources: [
		{
			title: 'Explained: 2-1-2 Offensive Zone Forecheck',
			publisher: 'The Coaches Site',
			url: 'https://members.thecoachessite.com/article/ozfc-2-1-2'
		},
		{
			title: '2-1-2 Stack: In Action',
			publisher: 'Weiss Tech Hockey',
			url: 'https://weisstechhockey.com/?p=4801'
		},
		{
			title: 'Forecheck',
			publisher: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Forecheck'
		}
	],
	steps: [
		{
			caption:
				'C [[dump-in|dumps it in]] to the right corner. RW has the most speed and goes first ([[f1|F1]]). C follows him in deep ([[f2|F2]]), and LW heads for the high slot ([[f3|F3]]).',
			phase: 'dump-in',
			positions: {
				lw: { x: 120, y: 26 },
				c: { x: 122, y: 58 },
				rw: { x: 130, y: 76 },
				ld: { x: 110, y: 30 },
				rd: { x: 112, y: 56 },
				o1: { x: 150, y: 60 },
				o2: { x: 152, y: 28 },
				o3: { x: 116, y: 70 },
				o4: { x: 106, y: 46 },
				o5: { x: 110, y: 14 }
			},
			puck: { x: 124, y: 60 },
			puckCarrier: 'c',
			arrows: [
				{ kind: 'pass', from: 'c', to: { x: 185, y: 76 } },
				{ kind: 'skate', from: 'rw', to: { x: 170, y: 70 } },
				{ kind: 'skate', from: 'c', to: { x: 176, y: 52 } },
				{ kind: 'skate', from: 'lw', to: { x: 156, y: 42 } },
				{ kind: 'skate', from: 'ld', to: { x: 128, y: 28 } },
				{ kind: 'skate', from: 'rd', to: { x: 128, y: 62 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Crossing the blue line on the left side, cutting toward the middle.',
					read: 'Watch RW and C both heading in deep. Two forwards are going, so you are [[f3|F3]]: head for the top of the circles, not the corner.',
					why: 'In a 2-1-2 one forward always stays high. If you go in too, their first pass out is a 3-on-2 the other way.'
				},
				c: {
					where: 'Just inside their blue line on the right side, dumping into the right corner.',
					read: 'Their D are backing up and RW is flying up the wall. Dump it to his corner, then follow the play in.',
					why: 'In a 2-1-2 the second forward goes deep too. You are [[f2|F2]]: you will support RW\'s pressure and pick up the loose puck.'
				},
				rw: {
					where: 'Wide on the right side at their blue line, at full speed.',
					read: 'The puck is going into your corner. Pick out their D who will go back for it and aim at him, not at the puck.',
					why: 'As [[f1|F1]] your job is to get there fast, stick on the puck, and take away his time. If F1 is slow, the whole 2-1-2 fails.'
				},
				ld: {
					where: 'In the neutral zone left of the middle, following up.',
					read: 'Watch the dump and their weak-side winger. Get to the blue line on your side.',
					why: 'With two forwards deep, the D hold the line. Only three of you are left above the puck.'
				},
				rd: {
					where: 'In the neutral zone right of the middle, behind C.',
					read: 'Watch their winger on the right side. He is the one their D will look for up the wall.',
					why: 'Getting to the line early lets you step up on a wall pass. Arriving late means he is already gone.'
				}
			},
			reads: {
				rw: [{ at: 'o1', label: 'Their D' }],
				c: [{ at: 'rw' }],
				lw: [{ at: { x: 156, y: 42 }, label: 'High slot' }],
				rd: [{ at: 'o3' }]
			},
			quiz: {
				lw: {
					decision: {
						prompt:
							'C dumps it into the right corner. RW goes first and C follows him in. You are LW. Where do you go?',
						options: [
							{
								text: 'Toward the top of the circles in the middle, as [[f3|F3]]',
								correct: true,
								why: 'Two forwards are already deep. You are the high forward who covers the middle and gets back if they break out.'
							},
							{
								text: 'Into the right corner to help win the puck',
								correct: false,
								why: 'Three forwards in one corner means nobody covers the middle. One good pass and they have an [[odd-man-rush|odd-man rush]].'
							},
							{
								text: 'Stay at the blue line with the D',
								correct: false,
								why: 'Too far back for a 2-1-2. F3 plays around the tops of the circles so he can step on passes up the middle.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'Their D gets to the puck in the corner. RW ([[f1|F1]]) closes on him fast with his stick on the puck. C ([[f2|F2]]) comes in low on the net side to cut off the pass behind the net. LW ([[f3|F3]]) sits in the high slot.',
			phase: 'd-retrieves',
			positions: {
				lw: { x: 158, y: 44 },
				c: { x: 180, y: 52 },
				rw: { x: 174, y: 64 },
				ld: { x: 130, y: 28 },
				rd: { x: 130, y: 62 },
				o1: { x: 182, y: 71 },
				o2: { x: 190, y: 28 },
				o3: { x: 160, y: 80 },
				o4: { x: 166, y: 32 },
				o5: { x: 154, y: 8 }
			},
			puck: { x: 184, y: 73 },
			puckCarrier: 'o1',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 181, y: 69 } },
				{ kind: 'skate', from: 'c', to: { x: 190, y: 58 } }
			],
			roles,
			notes: {
				lw: {
					where: 'In the [[high-slot|high slot]], around the tops of the circles, facing the corner.',
					read: 'Watch the puck and their center. Read RW\'s and C\'s angles: if they win it, find an open lane; if the puck squirts out, go get it.',
					why: '[[f3|F3]] is the link between the two deep forwards and the D. Too low and the middle opens; too high and you are no help.'
				},
				c: {
					where: 'Below the right faceoff dot, heading for the goal line beside the net.',
					read: 'Watch their D and his partner behind the net. Skate into the lane between them so the [[reverse]] or [[d-to-d|D-to-D]] is gone.',
					why: 'As [[f2|F2]] you take away his first pass. With that gone, RW\'s stick pressure will knock the puck loose, and you are right there to pick it up.'
				},
				rw: {
					where: 'Coming hard at their D in the corner.',
					read: 'He is facing the boards with his back to you. Aim your stick at the puck and keep your body on his inside, toward the net.',
					why: 'Stick on puck and no room to turn means he has no time. Even if he gets rid of it, he has to rush the pass.'
				},
				ld: {
					where: 'Inside the blue line on the left side.',
					read: 'Watch their weak-side winger. Two forwards are deep, so stay on the line.',
					why: 'If their D gets the puck out, you and RD are what stands between them and your net.'
				},
				rd: {
					where: 'Inside the blue line on the right side.',
					read: 'Watch their winger on the right wall. If the puck comes up to him, you decide whether to step up.',
					why: 'In a 2-1-2 you [[pinch]] only when you are sure. Two forwards are already deep, so a missed pinch is a rush against.'
				}
			},
			reads: {
				c: [
					{ at: 'o2', label: 'D-to-D' },
					{ at: 'o1' }
				],
				rw: [{ at: 'o1', label: 'Pressure' }],
				lw: [{ at: 'o4', label: 'Their C' }],
				rd: [{ at: 'o3' }],
				ld: [{ at: 'o5' }]
			},
			quiz: {
				lw: {
					drag: {
						target: { kind: 'ellipse', cx: 158, cy: 44, rx: 9, ry: 7 },
						correct:
							'Yes. The high slot, around the tops of the circles: close enough to jump a loose puck, high enough to get back.',
						incorrect:
							'[[f3|F3]] in a 2-1-2 sits in the [[high-slot|high slot]], around the tops of the circles. Lower and the middle opens behind you; up at the blue line you cannot help the two deep forwards.'
					}
				},
				c: {
					drag: {
						target: { kind: 'ellipse', cx: 184, cy: 54, rx: 7, ry: 6 },
						correct:
							'Yes. Low on the net side, you are in the lane for the pass behind the net and close enough to grab the loose puck.',
						incorrect:
							'As [[f2|F2]] go low on the net side of the corner, between the puck and the back of the net. That takes away his first pass and puts you next to the loose puck.'
					}
				},
				rw: {
					decision: {
						prompt: 'You are [[f1|F1]] in a 2-1-2 and their D is picking up the puck in the corner. You...',
						options: [
							{
								text: 'Close fast, stick on the puck, and pin him on the boards',
								correct: true,
								why: 'C is covering the pass behind the net, so you can go all in on the puck. Your stick and body position knock it loose for C.'
							},
							{
								text: 'Stop at the top of the circle and wait',
								correct: false,
								why: 'That is a different system. In a 2-1-2 the two deep forwards have to pressure, or the D walks out with it.'
							},
							{
								text: 'Skate behind the net to take away the pass',
								correct: false,
								why: 'That is F2\'s job, and C is already there. If you both cover the pass, nobody pressures the puck.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'RW pins their D on the boards. The D tries to bank a [[reverse]] behind the net to his partner, but C is sitting in that lane. LW holds the high slot; RD is ready on the wall.',
			phase: 'first-pass',
			positions: {
				lw: { x: 160, y: 44 },
				c: { x: 191, y: 54 },
				rw: { x: 182, y: 69 },
				ld: { x: 130, y: 30 },
				rd: { x: 132, y: 64 },
				o1: { x: 186, y: 74 },
				o2: { x: 192, y: 28 },
				o3: { x: 160, y: 80 },
				o4: { x: 170, y: 34 },
				o5: { x: 152, y: 10 }
			},
			puck: { x: 191, y: 63 },
			arrows: [
				{ kind: 'pass', from: 'o1', to: { x: 195, y: 34 }, via: { x: 196, y: 52 } },
				{ kind: 'skate', from: 'c', to: { x: 194, y: 58 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Holding the [[high-slot|high slot]].',
					read: 'Watch C behind the net. If he wins it, get your stick on the ice in an open [[passing-lane|lane]] in front.',
					why: 'C will have the puck in a second and needs a target. Their center is chasing him, so the middle opens.'
				},
				c: {
					where: 'Low beside the net on the right side, in the lane behind the net.',
					read: 'The puck is coming right at you along the end boards. Get your stick down and stop it.',
					why: 'You took away the [[reverse]]. Now his pass lands on your stick instead of his partner\'s.'
				},
				rw: {
					where: 'On the boards in the corner, pinning their D.',
					read: 'Keep your body on him and your stick on his. Watch where the puck goes.',
					why: 'As long as you pin him, he cannot join the play and their breakout has one less player.'
				},
				ld: {
					where: 'Inside the blue line on the left side.',
					read: 'Watch their weak-side winger and their center. Stay on the line.',
					why: 'The puck is still loose. Hold your spot until your team has it.'
				},
				rd: {
					where: 'Inside the blue line on the right side.',
					read: 'Watch their winger on the wall. If the puck squirts up the boards to him, step up on him.',
					why: 'The wall is the other escape route. You are the one who closes it.'
				}
			},
			reads: {
				c: [{ at: { x: 191, y: 63 }, label: 'Reverse' }],
				rw: [{ at: 'o1' }],
				lw: [{ at: 'c' }],
				rd: [{ at: 'o3' }],
				ld: [{ at: 'o4' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'Two of your forwards are deep in the right corner and the puck is loose. Their winger is on your wall. You...',
						options: [
							{
								text: 'Hold the blue line and step up only if the puck goes to him',
								correct: true,
								why: 'With two forwards deep, you pinch only on a sure thing. Right now the puck is not on his stick.'
							},
							{
								text: 'Pinch down the wall now to join the battle',
								correct: false,
								why: 'That puts four players below the puck. One bounce up the wall and their winger is gone.'
							},
							{
								text: 'Back up to the red line in case they break out',
								correct: false,
								why: 'Backing off gives up the blue line and lets the puck out for free. In a 2-1-2 the D hold the line.'
							}
						]
					}
				},
				ld: {
					decision: {
						prompt: 'The puck is loose in the right corner and two of your forwards are battling for it. You...',
						options: [
							{
								text: 'Stay inside the blue line on your side, watching their weak-side winger',
								correct: true,
								why: 'You are part of the last line of three. Staying put keeps their weak-side winger from getting behind you.'
							},
							{
								text: 'Skate down to the right corner to help',
								correct: false,
								why: 'You would be the fourth player low. If they win the puck, nobody is back.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'C picks off the [[reverse]] and walks to the side of the net. LW steps into the slot for a pass, and RW leaves the pin to go to the net. Their D never got the puck out.',
			phase: 'outcome',
			positions: {
				lw: { x: 168, y: 42 },
				c: { x: 192, y: 56 },
				rw: { x: 181, y: 38 },
				ld: { x: 132, y: 38 },
				rd: { x: 134, y: 62 },
				o1: { x: 184, y: 72 },
				o2: { x: 190, y: 26 },
				o3: { x: 160, y: 76 },
				o4: { x: 176, y: 28 },
				o5: { x: 152, y: 14 }
			},
			puck: { x: 191, y: 57 },
			puckCarrier: 'c',
			arrows: [
				{ kind: 'pass', from: 'c', to: { x: 169, y: 43 } },
				{ kind: 'skate', from: 'rw', to: { x: 184, y: 44 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Stepping down into the [[slot]], stick on the ice.',
					read: 'Watch C and find the open ice between their players. Be ready for a quick shot.',
					why: 'As [[f3|F3]] you move into the open lane once your team wins the puck. Now it is a scoring chance.'
				},
				c: {
					where: 'At the side of the net with the puck, just off the goal line.',
					read: 'Head up: LW is open in the slot, RW is driving the net. Their D are both down low.',
					why: 'Their whole team is in breakout mode and facing the wrong way. A quick pass to the slot beats them.'
				},
				rw: {
					where: 'Leaving the corner, driving to the front of the net.',
					read: 'Watch the puck and get your stick down at the far post.',
					why: 'You were the first man in, now you are the [[net-front|net-front]] player for the rebound or tip.'
				},
				ld: {
					where: 'Inside the blue line, sliding toward the middle.',
					read: 'Watch the puck and their center. Be ready to keep in a clearing attempt.',
					why: 'You are still the safety. If the shot is blocked and comes out, you keep it in or get back.'
				},
				rd: {
					where: 'Inside the blue line on the right side.',
					read: 'Watch their winger on the wall. Stay above him.',
					why: 'If they win the puck back, he is their first outlet. You keep him in front of you.'
				}
			},
			reads: {
				c: [{ at: 'lw' }, { at: 'rw' }],
				lw: [{ at: 'c' }],
				rw: [{ at: { x: 189, y: 42 }, label: 'Net' }],
				ld: [{ at: 'o4' }],
				rd: [{ at: 'o3' }]
			},
			quiz: {
				c: {
					decision: {
						prompt:
							'You picked off the reverse beside their net. LW is in the slot and RW is driving to the net. You...',
						options: [
							{
								text: 'Pass it quickly to LW in the slot',
								correct: true,
								why: 'Their team is caught in breakout mode. A fast pass to the middle is a shot before they can turn around.'
							},
							{
								text: 'Skate it back up the boards to the blue line',
								correct: false,
								why: 'That gives them time to reset. The whole point of the 2-1-2 is to attack right after the turnover.'
							},
							{
								text: 'Hold it behind the net and wait',
								correct: false,
								why: 'Their D are right beside you. Waiting lets them take it back.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
