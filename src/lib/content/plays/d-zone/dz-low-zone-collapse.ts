import type { Play } from '../../types';

const collapseRoles = {
	rd: 'Right post',
	ld: 'Left post',
	c: 'Low slot',
	rw: 'Right circle',
	lw: 'Left circle'
};

const play: Play = {
	id: 'dz-low-zone-collapse',
	title: 'Low-zone collapse',
	category: 'd-zone',
	system: 'Low-zone collapse (box plus one)',
	strength: '5v5',
	summary:
		'When the puck goes behind our net, all five of us [[collapse]] tight around the front: one D on each post, the center in the [[low-slot|low slot]], and both wingers just inside the faceoff circles. We give them the outside and the area behind the net, and take away the [[slot]].',
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
		{ id: 'o3', label: 'F' },
		{ id: 'o4', label: 'D' },
		{ id: 'o5', label: 'D' }
	],
	keyConcepts: [],
	variations:
		'Teams disagree on how tight to get. Some keep the wingers near the tops of the circles so they can reach the [[point|points]]; others drop them to the hash marks. Some teams send one D behind the net to pressure the carrier and let the center fill the post; others never chase behind the net. When the puck goes to the point, some teams stay collapsed and block shots, while others push the wingers out into the [[shooting-lane|shooting lanes]]. This play shows the common version: hold the posts, wingers step out to the point only on the puck side.',
	sources: [
		{
			title: 'Hockey Systems 101: Defensive Zone Strategies',
			publisher: 'Blue Seat Blogs',
			url: 'https://blueseatblogs.com/2013/02/19/hockey-systems-101-defensive-zone-strategies/'
		},
		{
			title: 'Defensive Zone Coverage',
			publisher: 'Hockey Player Magazine (Gianni Raimondo)',
			url: 'https://hockeyplayer.com/?p=344'
		},
		{
			title: 'IHM Academy: Defensive Zone Coverage, Lesson 4 (Net-Front Defense & Slot Protection)',
			publisher: 'Ice Hockey Man',
			url: 'https://icehockeyman.com/2025/11/27/ihm-academy-defensive-zone-coverage-lesson-4/'
		}
	],
	steps: [
		{
			caption:
				'Their forward has the puck in our right corner and starts to carry it behind our net. RD has been pressing him; now RD has to decide whether to chase.',
			positions: {
				lw: { x: 40, y: 36 },
				c: { x: 24, y: 60 },
				rw: { x: 48, y: 62 },
				ld: { x: 15.5, y: 46 },
				rd: { x: 18, y: 64 },
				o1: { x: 12, y: 66 },
				o2: { x: 19, y: 49 },
				o3: { x: 30, y: 28 },
				o4: { x: 70, y: 14 },
				o5: { x: 70, y: 72 }
			},
			puck: { x: 10, y: 66 },
			puckCarrier: 'o1',
			arrows: [
				{ kind: 'skate', from: 'o1', to: { x: 4, y: 42 } },
				{ kind: 'skate', from: 'rd', to: { x: 12, y: 49 } },
				{ kind: 'skate', from: 'c', to: { x: 21, y: 42 } },
				{ kind: 'skate', from: 'rw', to: { x: 34, y: 55 } },
				{ kind: 'skate', from: 'lw', to: { x: 33, y: 33 } }
			],
			roles: { rd: 'Strong-side D', ld: 'Net-front D', c: 'Low support', rw: 'Strong-side wing', lw: 'Weak-side wing' },
			notes: {
				lw: {
					where: 'Inside the left circle, between the dots.',
					read: 'Watch the puck heading behind the net. It may come out on your side.',
					why: 'When the puck goes behind the net, the whole unit tightens. You are already close to your collapse spot.'
				},
				c: {
					where: 'Low on the right side, just off RD, starting to slide toward the middle.',
					read: 'Watch the carrier go behind the net. Your spot is changing from the corner to the [[low-slot|low slot]].',
					why: 'Once the puck is behind the net, the most dangerous pass is out to the front. You protect that.'
				},
				rw: {
					where: 'Near the top of the right circle, between the [[point]] and the slot.',
					read: 'See the puck going behind the net, away from your [[point]]. Start sliding down and in.',
					why: 'A pass from behind the net to the point is hard, so your job moves toward the slot.'
				},
				ld: {
					where: 'In front of the crease, between the [[net-front]] forward and the goalie.',
					read: 'Watch the puck carrier. If he comes around to your side, you will meet him at the post.',
					why: 'The carrier behind the net is coming out one side or the other. Be ready to slide to your post.'
				},
				rd: {
					where: 'In the right corner, just behind the carrier as he turns toward the net.',
					read: 'Watch his body. He is going behind the net and you are a step behind.',
					why: 'Chasing a player behind the net from behind rarely wins the puck. Getting to the post first usually does more.'
				}
			},
			reads: {
				rd: [{ at: 'o1' }],
				c: [{ at: 'o2' }],
				ld: [{ at: 'o1' }],
				rw: [{ at: 'o1' }],
				lw: [{ at: 'o1' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'The carrier gets a step on you and goes behind our net. In a low-zone [[collapse]], you...',
						options: [
							{
								text: 'Peel off to your post and face the puck',
								correct: true,
								why: 'From the post you cut off his wraparound and the pass out front. Chasing from behind leaves the post open.'
							},
							{
								text: 'Chase him behind the net to keep pressure on',
								correct: false,
								why: 'You are a step behind, so you will not catch him, and your post is open for a wraparound.'
							},
							{
								text: 'Go to the [[slot]] to help C',
								correct: false,
								why: 'C has the slot. Two of you in the middle leaves your post open for a wrap.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'The puck is behind our net. We [[collapse]]: a D on each post facing the puck, C in the low slot, and the wingers just inside the circles.',
			positions: {
				lw: { x: 33, y: 33 },
				c: { x: 21, y: 42 },
				rw: { x: 34, y: 54 },
				ld: { x: 12, y: 36 },
				rd: { x: 12, y: 49 },
				o1: { x: 4, y: 44 },
				o2: { x: 20, y: 49 },
				o3: { x: 22, y: 28 },
				o4: { x: 72, y: 14 },
				o5: { x: 72, y: 72 }
			},
			puck: { x: 3, y: 42 },
			puckCarrier: 'o1',
			arrows: [{ kind: 'skate', from: 'o1', to: { x: 12, y: 26 } }],
			roles: collapseRoles,
			notes: {
				lw: {
					where: 'Just inside the left circle, below the dot, facing the net.',
					read: 'Watch the forward sneaking into the left side near the post, and the puck behind the net.',
					why: 'From here you can drop to the back door or step up to the [[point]]. You are the inside wall of the box.'
				},
				c: {
					where: 'In the [[low-slot|low slot]], a few feet out from the crease, square to the net.',
					read: 'Watch the carrier behind the net and the forward near you in front. Stick on the ice in the passing lane.',
					why: 'The pass from behind the net to the slot is the most dangerous play in hockey. You are there to kill it.'
				},
				rw: {
					where: 'Just inside the right circle, below the dot.',
					read: 'Watch the [[net-front]] forward and the puck. If anything pops into the slot, collapse on it.',
					why: 'Being inside the circle keeps the slot crowded. Their [[point]] on your side is open, but a pass there from behind the net is long and slow.'
				},
				ld: {
					where: 'On the left post, facing the puck behind the net.',
					read: 'Watch the carrier\'s hips. If he turns your way, be ready to meet him at the goal line.',
					why: 'Holding the post takes away the wraparound and lets you step out as soon as he comes to your side.'
				},
				rd: {
					where: 'On the right post, facing the puck, with the [[net-front]] forward on your hip.',
					read: 'Watch the puck and feel the forward in front. If the puck comes back to your side, you meet it.',
					why: 'One D on each post means he cannot wrap it in either way, and both of you can see the puck.'
				}
			},
			reads: {
				c: [{ at: 'o1' }, { at: 'o2' }],
				ld: [{ at: 'o1' }],
				rd: [{ at: 'o1' }, { at: 'o2' }],
				lw: [{ at: 'o3' }],
				rw: [{ at: 'o2' }]
			},
			quiz: {
				c: {
					drag: {
						target: { kind: 'ellipse', cx: 21, cy: 42.5, rx: 6, ry: 6 },
						correct:
							'Yes. In the [[low-slot|low slot]], just outside the crease, where you can kill the pass from behind the net.',
						incorrect:
							'With the puck behind the net, the center sits in the [[low-slot|low slot]], a few feet out from the crease. Higher and the pass out front is open; behind the net and you leave the middle.'
					}
				}
			}
		},
		{
			caption:
				'He comes out on our left side. LD steps up to meet him at the goal line, C slides toward that side, and RD takes over the front of the net.',
			positions: {
				lw: { x: 32, y: 32 },
				c: { x: 21, y: 38 },
				rw: { x: 36, y: 52 },
				ld: { x: 16, y: 28 },
				rd: { x: 15.5, y: 46 },
				o1: { x: 12, y: 24 },
				o2: { x: 19, y: 49 },
				o3: { x: 40, y: 43 },
				o4: { x: 72, y: 14 },
				o5: { x: 72, y: 72 }
			},
			puck: { x: 11, y: 22 },
			puckCarrier: 'o1',
			arrows: [{ kind: 'pass', from: 'o1', to: { x: 70, y: 15 }, via: { x: 40, y: 6 } }],
			roles: collapseRoles,
			notes: {
				lw: {
					where: 'Inside the left circle, between the puck and the [[slot]].',
					read: 'The puck is now on your side. Watch the carrier and their D at your [[point]]; the wall pass up to him is coming.',
					why: 'You are the next layer. If he passes to the point, you step out; if he cuts in, you collapse.'
				},
				c: {
					where: 'Sliding to the left side of the low slot.',
					read: 'Watch the carrier and the forward in the middle. Stay between the puck and the net.',
					why: 'The puck moved, so the low slot moved with it. You shade puck-side to support LD.'
				},
				rw: {
					where: 'Inside the right circle, now on the [[weak-side|weak side]].',
					read: 'Watch the forward in the high [[slot]]. He is the open man if the puck comes out front.',
					why: 'As the weak-side winger you guard the middle. Your [[point]] is far from the puck now.'
				},
				ld: {
					where: 'Just off the left post at the goal line, stepping into the carrier.',
					read: 'Watch his chest. Make him go up the wall, not toward the net.',
					why: 'Meeting him at the goal line keeps him on the outside. If he gets past you to the net, it is a point-blank chance.'
				},
				rd: {
					where: 'In front of the crease, between the [[net-front]] forward and the goalie.',
					read: 'Feel the forward in front and find his stick. Keep your head turned to the puck.',
					why: 'LD left the net front to meet the puck, so it is yours now. One D always stays in front.'
				}
			},
			reads: {
				ld: [{ at: 'o1' }],
				c: [{ at: 'o3' }],
				lw: [{ at: 'o4' }],
				rw: [{ at: 'o3' }],
				rd: [{ at: 'o2' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt:
							'The carrier comes out from behind the net on your side. You are on the left post. You...',
						options: [
							{
								text: 'Step up and meet him at the goal line, keeping him on the outside',
								correct: true,
								why: 'He is right on your post. Meeting him there forces him up the wall instead of to the net.'
							},
							{
								text: 'Stay glued to the post and let him come to you',
								correct: false,
								why: 'Waiting gives him time to pick a pass out front or cut toward the crease.'
							},
							{
								text: 'Go to the front of the net to pick up the forward there',
								correct: false,
								why: 'RD has the front. If you both go there, the carrier walks out from the corner alone.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'He moves the puck up the wall to their left D at the [[point]]. LW steps out into the [[shooting-lane]]; everyone else stays collapsed with sticks in the lanes.',
			positions: {
				lw: { x: 62, y: 20 },
				c: { x: 23, y: 40 },
				rw: { x: 36, y: 48 },
				ld: { x: 17, y: 30 },
				rd: { x: 15.5, y: 46 },
				o1: { x: 22, y: 22 },
				o2: { x: 19, y: 49 },
				o3: { x: 40, y: 41 },
				o4: { x: 70, y: 15 },
				o5: { x: 72, y: 70 }
			},
			puck: { x: 69, y: 16 },
			puckCarrier: 'o4',
			arrows: [{ kind: 'skate', from: 'lw', to: { x: 66, y: 18 } }],
			roles: collapseRoles,
			notes: {
				lw: {
					where: 'Closing on their D at the left [[point]], a couple of strides off him.',
					read: 'Watch his stick. Get your body and stick into his [[shooting-lane]].',
					why: 'From the point, a shot through traffic is their best chance. You step out because the puck is on your side; the rest of us stay home.'
				},
				c: {
					where: 'In the [[low-slot|low slot]], slightly to the left.',
					read: 'Watch the shooter and the forward in the middle. Be ready to block or tie up a stick.',
					why: 'Point shots create rebounds in the low slot. You are there to get the second puck first.'
				},
				rw: {
					where: 'Inside the right circle, between the forward in the high slot and the net.',
					read: 'Watch the forward in the middle and their other D. Do not leave the slot for the far point.',
					why: 'A [[weak-side]] winger who jumps to the point too early opens the middle. Stay in until the puck goes across.'
				},
				ld: {
					where: 'Low on the left side, inside the forward who made the pass.',
					read: 'Watch him: he passed and may slip toward the net.',
					why: 'Pass-and-go is how forwards get open after the puck leaves them. Stay between him and the crease.'
				},
				rd: {
					where: 'In front of the crease, between the [[net-front]] forward and the goalie.',
					read: 'Tie up his stick as the shot comes and do not [[screen]] the goalie.',
					why: 'The point shot is only dangerous with a screen or a [[tip]]. Stick control takes both away.'
				}
			},
			reads: {
				lw: [{ at: 'o4' }],
				c: [{ at: 'o3' }],
				rw: [{ at: 'o3' }, { at: 'o5' }],
				ld: [{ at: 'o1' }],
				rd: [{ at: 'o2' }]
			},
			quiz: {
				lw: {
					decision: {
						prompt: 'The puck goes up the wall to their D at the [[point]] on your side. You...',
						options: [
							{
								text: 'Step out and get your body and stick into his [[shooting-lane]]',
								correct: true,
								why: 'The puck is on your side and the slot is still full behind you. Pressure makes his shot rushed or blocked.'
							},
							{
								text: 'Stay collapsed inside the circle',
								correct: false,
								why: 'Nobody is closer to him than you. Staying in gives him time to walk in and pick his spot.'
							},
							{
								text: 'Skate to the far point to stop a cross-ice pass',
								correct: false,
								why: 'The puck is on your side. Leaving gives the shooter a free lane.'
							}
						]
					}
				},
				rw: {
					decision: {
						prompt:
							'The puck is at the far [[point]]. Their D on your side is open and a forward is floating in the high [[slot]]. You...',
						options: [
							{
								text: 'Stay inside, between the forward in the slot and the net',
								correct: true,
								why: 'The middle is what the collapse protects. If the puck goes across to your point, you step out then.'
							},
							{
								text: 'Skate out to cover their open D at your point',
								correct: false,
								why: 'That leaves the forward in the high slot alone for a pass and a shot from the best spot on the ice.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
