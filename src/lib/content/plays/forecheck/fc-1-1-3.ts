import type { Play } from '../../types';

const roles = { rw: 'F1', c: 'F2', lw: 'F3' };

const play: Play = {
	id: 'fc-1-1-3',
	title: '1-1-3 forecheck',
	category: 'forecheck',
	system: '1-1-3',
	strength: '5v5',
	summary:
		'A conservative [[forecheck]]: [[f1|F1]] steers the puck carrier instead of diving at him, [[f2|F2]] sits in the [[high-slot|high slot]] to read and pick off passes, and [[f3|F3]] lines up with both D across the blue line. It protects the middle and gives up very few [[odd-man-rush|odd-man rushes]].',
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
		'Teams use it most when protecting a lead or against teams that break out fast. Some coaches have the three across the line stand still and wait; others let the D [[pinch]] on wall plays because there are three players back. In some versions the F3 and both D sit back at the red line, which makes it closer to a neutral-zone trap. A [[left-wing-lock|left wing lock]] with staggered forecheckers looks almost the same, but there the third player back is always the left winger.',
	sources: [
		{
			title: 'Explained: 1-1-3 Offensive Zone Forecheck',
			publisher: 'The Coaches Site',
			url: 'https://members.thecoachessite.com/article/ozfc-1-1-3'
		},
		{
			title: 'Hockey Forechecking Systems',
			publisher: 'Blue Seat Blogs',
			url: 'https://blueseatblogs.com/2011/09/26/complete-idiots-guide-to-hockey-systems-pt-1/'
		}
	],
	steps: [
		{
			caption:
				'C [[dump-in|dumps it in]] to the right corner. RW chases as [[f1|F1]], C stops in the [[high-slot|high slot]] as [[f2|F2]], and LW drops back to line up with the two D.',
			phase: 'dump-in',
			positions: {
				lw: { x: 116, y: 22 },
				c: { x: 128, y: 58 },
				rw: { x: 128, y: 76 },
				ld: { x: 110, y: 34 },
				rd: { x: 112, y: 58 },
				o1: { x: 150, y: 60 },
				o2: { x: 152, y: 28 },
				o3: { x: 116, y: 70 },
				o4: { x: 106, y: 46 },
				o5: { x: 110, y: 12 }
			},
			puck: { x: 130, y: 60 },
			puckCarrier: 'c',
			arrows: [
				{ kind: 'pass', from: 'c', to: { x: 185, y: 76 } },
				{ kind: 'skate', from: 'rw', to: { x: 166, y: 70 } },
				{ kind: 'skate', from: 'c', to: { x: 152, y: 48 } },
				{ kind: 'skate', from: 'lw', to: { x: 128, y: 18 } },
				{ kind: 'skate', from: 'ld', to: { x: 128, y: 42 } },
				{ kind: 'skate', from: 'rd', to: { x: 128, y: 66 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Near their blue line on the left side.',
					read: 'The puck is going to the far corner. You are [[f3|F3]]: stop at the blue line on the left, level with the D.',
					why: 'In a 1-1-3 the third forward joins the D across the line. That wall of three is what makes the system safe.'
				},
				c: {
					where: 'Just inside their blue line on the right, dumping into the right corner.',
					read: 'Dump it to RW\'s side, then skate to the [[high-slot|high slot]], not the corner.',
					why: 'As [[f2|F2]] you are the link: close enough to help F1, high enough to stop passes up the middle.'
				},
				rw: {
					where: 'Wide on the right side at the blue line, at speed.',
					read: 'The puck is going into your corner. Pick out the D who will go back for it.',
					why: 'You are the only forechecker deep. Your job is to steer him, not to win the puck alone.'
				},
				ld: {
					where: 'In the neutral zone, left of the middle.',
					read: 'LW is taking the left lane. Head for the middle of the blue line.',
					why: 'Three across the line: LW left, you in the middle, RD right.'
				},
				rd: {
					where: 'In the neutral zone, right of the middle.',
					read: 'Take the right lane at the blue line. Watch their winger on the right wall.',
					why: 'The puck is on your side, so their first pass may come up your wall.'
				}
			},
			reads: {
				rw: [{ at: 'o1', label: 'Their D' }],
				c: [{ at: { x: 156, y: 46 }, label: 'High slot' }],
				lw: [{ at: 'o5' }],
				rd: [{ at: 'o3' }]
			},
			quiz: {
				c: {
					decision: {
						prompt:
							'Your team plays a 1-1-3. You dump the puck into the right corner and RW is chasing it. Where do you go?',
						options: [
							{
								text: 'To the [[high-slot|high slot]], above RW',
								correct: true,
								why: 'You are F2: you read RW\'s pressure and take away passes through the middle.'
							},
							{
								text: 'Into the corner with RW',
								correct: false,
								why: 'That is a 2-1-2. In a 1-1-3 only one forward goes deep.'
							},
							{
								text: 'Back to the blue line with the D',
								correct: false,
								why: 'LW is the one who joins the D. If you go too, nobody covers the middle of the zone.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'A couple of seconds later, their D gets the puck. RW ([[f1|F1]]) comes at him from the inside but does not dive in. C ([[f2|F2]]) reads from the [[high-slot|high slot]]. LW, LD and RD hold a line of three at the blue line.',
			phase: 'd-retrieves',
			positions: {
				lw: { x: 130, y: 18 },
				c: { x: 156, y: 46 },
				rw: { x: 172, y: 62 },
				ld: { x: 130, y: 42 },
				rd: { x: 130, y: 66 },
				o1: { x: 182, y: 71 },
				o2: { x: 186, y: 30 },
				o3: { x: 158, y: 80 },
				o4: { x: 172, y: 46 },
				o5: { x: 152, y: 10 }
			},
			puck: { x: 184, y: 73 },
			puckCarrier: 'o1',
			arrows: [{ kind: 'skate', from: 'rw', to: { x: 178, y: 66 } }],
			roles,
			notes: {
				lw: {
					where: 'Inside the blue line on the left side.',
					read: 'Watch their weak-side winger and the puck. Stay level with LD.',
					why: 'You are part of the wall of three. A long pass to their winger has to get past you.'
				},
				c: {
					where: 'In the [[high-slot|high slot]], between the circles.',
					read: 'Watch their D with the puck and their center curling low. Be ready to step into any pass through the middle.',
					why: '[[f2|F2]] is both the second forechecker and the first defender. From here you can do either.'
				},
				rw: {
					where: 'Closing on their D from the inside, below the right dot.',
					read: 'Watch his shoulders. Take away the middle and make him go where you want.',
					why: 'You have no one right behind you, so do not dive in and get beaten. Steer him so F2 and the line can read the pass.'
				},
				ld: {
					where: 'In the middle of the blue line.',
					read: 'Watch their center. Keep your feet moving.',
					why: 'You hold the middle lane. Stretch passes through the middle are what the 1-1-3 is built to stop.'
				},
				rd: {
					where: 'On the right side of the blue line.',
					read: 'Watch their winger on your wall.',
					why: 'With three back, you can step up on him if the puck comes up the boards.'
				}
			},
			reads: {
				rw: [{ at: 'o1', label: 'Puck carrier' }],
				c: [
					{ at: 'o1' },
					{ at: 'o4', label: 'Their C' }
				],
				lw: [{ at: 'o5' }],
				ld: [{ at: 'o4' }],
				rd: [{ at: 'o3' }]
			},
			quiz: {
				lw: {
					drag: {
						target: { kind: 'ellipse', cx: 130, cy: 19, rx: 8, ry: 6 },
						correct: 'Yes. Inside the blue line on the left, level with the two D: the left end of the line of three.',
						incorrect:
							'As [[f3|F3]] in a 1-1-3 you line up with the D across the blue line, on the left side. Deeper than that and the line of three has a hole.'
					}
				},
				rd: {
					drag: {
						target: { kind: 'ellipse', cx: 130, cy: 66, rx: 8, ry: 6 },
						correct: 'Yes. The right lane of the blue line, level with LD and LW.',
						incorrect:
							'With LW on the left and LD in the middle, you hold the right lane, just inside the blue line and level with them.'
					}
				},
				rw: {
					decision: {
						prompt:
							'You are the only forechecker deep. Their D has the puck in the corner. You...',
						options: [
							{
								text: 'Come in on an angle from the inside, under control, and steer him',
								correct: true,
								why: 'In a 1-1-3 F1 directs the play. Under control you cannot be beaten, and F2 and the line read where he goes.'
							},
							{
								text: 'Go in full speed and lunge at the puck',
								correct: false,
								why: 'With nobody right behind you, one sidestep and you are out of the play.'
							},
							{
								text: 'Stay out at the blue line',
								correct: false,
								why: 'With no pressure at all, their D can make any pass he wants.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'The D goes behind the net and tries to pass to his center curling through the middle. C ([[f2|F2]]) reads it and steps into the [[passing-lane|passing lane]].',
			phase: 'first-pass',
			positions: {
				lw: { x: 130, y: 18 },
				c: { x: 164, y: 42 },
				rw: { x: 184, y: 66 },
				ld: { x: 130, y: 42 },
				rd: { x: 132, y: 66 },
				o1: { x: 194, y: 50 },
				o2: { x: 186, y: 26 },
				o3: { x: 156, y: 80 },
				o4: { x: 160, y: 54 },
				o5: { x: 150, y: 12 }
			},
			puck: { x: 192, y: 51 },
			arrows: [
				{ kind: 'pass', from: 'o1', to: { x: 164, y: 50 } },
				{ kind: 'skate', from: 'c', to: { x: 170, y: 48 } },
				{ kind: 'skate', from: 'rw', to: { x: 192, y: 60 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Inside the blue line on the left side.',
					read: 'Watch the pass. If it gets through, their center will come your way.',
					why: 'Holding the line means even a good pass only gets them to a wall of three.'
				},
				c: {
					where: 'Stepping down from the [[high-slot|high slot]] toward the right circle.',
					read: 'Watch the D\'s eyes and stick. He is looking at his center, so jump the lane.',
					why: 'This is what F2 waits for: a pass through the middle you can pick off.'
				},
				rw: {
					where: 'Following the D behind the net.',
					read: 'Stay on his hip so he has to move the puck now.',
					why: 'Your pressure forces the quick pass that C is waiting for.'
				},
				ld: {
					where: 'In the middle of the blue line.',
					read: 'Watch their center. If he gets the puck, meet him at the line.',
					why: 'You are the backup if C misses the pass.'
				},
				rd: {
					where: 'On the right side of the blue line.',
					read: 'Watch their winger on the wall.',
					why: 'If the puck goes up your wall instead, you can step up.'
				}
			},
			reads: {
				c: [
					{ at: 'o1', label: 'Passer' },
					{ at: 'o4', label: 'Their C' }
				],
				rw: [{ at: 'o1' }],
				ld: [{ at: 'o4' }],
				lw: [{ at: 'o5' }],
				rd: [{ at: 'o3' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt:
							'Their D is behind the net looking for his center in the middle. C is in the [[high-slot|high slot]]. You are on the middle of the blue line. You...',
						options: [
							{
								text: 'Hold the middle of the line and watch their center',
								correct: true,
								why: 'C has the first try at the pass. You are the backup if it gets through.'
							},
							{
								text: 'Jump down into the [[slot]] to help C',
								correct: false,
								why: 'That opens the middle of the line. If the pass beats you both, nobody is back.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'C picks off the pass in the [[slot]] and shoots. RW heads for the net. The line of three never had to move.',
			phase: 'outcome',
			positions: {
				lw: { x: 132, y: 18 },
				c: { x: 170, y: 48 },
				rw: { x: 182, y: 56 },
				ld: { x: 134, y: 42 },
				rd: { x: 132, y: 64 },
				o1: { x: 192, y: 58 },
				o2: { x: 184, y: 30 },
				o3: { x: 156, y: 76 },
				o4: { x: 164, y: 56 },
				o5: { x: 152, y: 16 }
			},
			puck: { x: 172, y: 47 },
			puckCarrier: 'c',
			arrows: [
				{ kind: 'shot', from: 'c', to: { x: 189, y: 42 } },
				{ kind: 'skate', from: 'rw', to: { x: 184, y: 48 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Inside the blue line on the left side.',
					read: 'Watch the shot and the rebound.',
					why: 'If the puck comes out, you keep it in or get back.'
				},
				c: {
					where: 'In the [[slot]] with the puck.',
					read: 'Their players are still set up for a [[breakout]], facing the wrong way. Shoot quickly.',
					why: 'A turnover in the middle is the best chance the 1-1-3 creates.'
				},
				rw: {
					where: 'Driving to the front of the net.',
					read: 'Watch for the rebound.',
					why: 'F1 follows the play to the [[net-front|net]].'
				},
				ld: {
					where: 'Middle of the blue line, stepping in slightly.',
					read: 'Watch for a clearing attempt.',
					why: 'You keep the puck in the zone.'
				},
				rd: {
					where: 'On the right side of the blue line.',
					read: 'Watch their winger on the wall.',
					why: 'If the shot is blocked and they break out, you are ready.'
				}
			},
			reads: {
				c: [{ at: { x: 189, y: 42 }, label: 'Net' }],
				rw: [{ at: { x: 186, y: 46 }, label: 'Rebound' }],
				ld: [{ at: 'o4' }],
				lw: [{ at: 'o5' }],
				rd: [{ at: 'o3' }]
			}
		}
	]
};

export default play;
