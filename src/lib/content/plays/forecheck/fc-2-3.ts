import type { Play } from '../../types';

const roles = { c: 'F1', rw: 'F2', lw: 'F3 (third D)' };

const play: Play = {
	id: 'fc-2-3',
	title: '2-3 forecheck (left wing lock)',
	category: 'forecheck',
	system: '2-3 / left wing lock',
	strength: '5v5',
	summary:
		'Two forwards (C and RW) pressure hard and push the puck to the left boards, while LW drops back to the blue line and plays like a third defenseman. Three players across the line means the two forecheckers can go all out without giving up [[odd-man-rush|odd-man rushes]].',
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
		'The best-known version is the Detroit Red Wings\' [[left-wing-lock|left wing lock]] from the late 1990s: C and RW forecheck, LW locks the left lane, LD takes the middle, RD the right lane. Some teams let either winger be the third D, whichever is on the weak side, and teams differ on whether RD may [[pinch]] on the right wall. In another version the third forward plays the middle and lets the puck-side D pinch instead. When the two low forwards stagger, one deep and one higher, the shape looks like a 1-1-3 even though the jobs stay the same.',
	sources: [
		{
			title: 'The Left Wing Lock',
			publisher: 'Hockey Player Magazine',
			url: 'https://hockeyplayer.com/?p=491'
		},
		{
			title: 'Forecheck',
			publisher: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Forecheck'
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
				'C [[dump-in|dumps it in]] to the left corner. C and RW go in to forecheck. LW does not chase: he drops back to the left side of the blue line, next to the two D.',
			phase: 'dump-in',
			positions: {
				lw: { x: 120, y: 14 },
				c: { x: 128, y: 36 },
				rw: { x: 126, y: 64 },
				ld: { x: 110, y: 32 },
				rd: { x: 110, y: 56 },
				o1: { x: 152, y: 36 },
				o2: { x: 152, y: 58 },
				o3: { x: 112, y: 6 },
				o4: { x: 106, y: 44 },
				o5: { x: 114, y: 76 }
			},
			puck: { x: 130, y: 34 },
			puckCarrier: 'c',
			arrows: [
				{ kind: 'pass', from: 'c', to: { x: 184, y: 13 } },
				{ kind: 'skate', from: 'c', to: { x: 168, y: 30 } },
				{ kind: 'skate', from: 'rw', to: { x: 170, y: 52 } },
				{ kind: 'skate', from: 'lw', to: { x: 130, y: 14 } },
				{ kind: 'skate', from: 'ld', to: { x: 130, y: 42 } },
				{ kind: 'skate', from: 'rd', to: { x: 130, y: 68 } }
			],
			roles,
			notes: {
				lw: {
					where: 'On the left side at their blue line, about 15 feet off the boards.',
					read: 'Watch C dump it in and RW head in. Two forecheckers are going, so you lock the left lane at the blue line.',
					why: 'In a [[left-wing-lock|left wing lock]] you are the third D. Your spot is what lets C and RW be aggressive.'
				},
				c: {
					where: 'Just inside their blue line, left of the middle, dumping into the left corner.',
					read: 'Their D are backing up. Put the puck in the left corner and go after it: you are [[f1|F1]].',
					why: 'The system pushes their [[breakout]] up the left boards, where LW is waiting. Dumping it to the left starts that.'
				},
				rw: {
					where: 'Right of the middle at their blue line, at speed.',
					read: 'Watch the puck go to the left corner and their other D on your side. You are [[f2|F2]]: head for the net and the back of it.',
					why: 'F2 cuts off the pass across or behind the net so their D has to go up the left wall.'
				},
				ld: {
					where: 'In the neutral zone left of the middle.',
					read: 'LW is taking the left lane. Move to the middle of the blue line.',
					why: 'With LW on the left, you cover the middle lane. Three across the line means no gaps.'
				},
				rd: {
					where: 'In the neutral zone right of the middle.',
					read: 'Watch their winger on the right side. Take the right lane at the blue line.',
					why: 'You are the right third of the wall. Their weak-side winger is yours.'
				}
			},
			reads: {
				c: [{ at: 'o1', label: 'Their D' }],
				rw: [{ at: 'o2', label: 'Other D' }],
				lw: [{ at: 'o3', label: 'Wall winger' }],
				ld: [{ at: 'o4' }],
				rd: [{ at: 'o5' }]
			},
			quiz: {
				lw: {
					decision: {
						prompt:
							'Your team plays a [[left-wing-lock|left wing lock]]. C dumps it into the left corner and RW heads in too. You...',
						options: [
							{
								text: 'Drop back to the left side of the blue line, next to the D',
								correct: true,
								why: 'You are the third D. Holding the left lane lets C and RW forecheck hard without risk.'
							},
							{
								text: 'Chase into the left corner, it is your side',
								correct: false,
								why: 'Three forwards deep breaks the lock. The two forecheckers count on you being at the line.'
							},
							{
								text: 'Go to the front of their net',
								correct: false,
								why: 'That leaves the left lane open. Their first pass up the left boards goes right past you.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'A couple of seconds later, their D gets the puck in the left corner. C ([[f1|F1]]) comes from the inside and pushes him up the left boards. RW ([[f2|F2]]) takes away the pass behind the net. LW, LD and RD form a wall across the blue line.',
			phase: 'd-retrieves',
			positions: {
				lw: { x: 130, y: 14 },
				c: { x: 172, y: 28 },
				rw: { x: 180, y: 50 },
				ld: { x: 130, y: 42 },
				rd: { x: 130, y: 68 },
				o1: { x: 181, y: 16 },
				o2: { x: 192, y: 60 },
				o3: { x: 156, y: 6 },
				o4: { x: 164, y: 44 },
				o5: { x: 156, y: 78 }
			},
			puck: { x: 184, y: 13 },
			puckCarrier: 'o1',
			arrows: [
				{ kind: 'skate', from: 'c', to: { x: 178, y: 20 } },
				{ kind: 'skate', from: 'rw', to: { x: 194, y: 42 }, via: { x: 195, y: 52 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Inside the blue line on the left side, about 14 feet off the boards.',
					read: 'Watch their winger on the left wall and the puck. If the puck comes up the boards to him, he is yours.',
					why: 'C is forcing the puck your way. You are in position to [[pinch]] on that winger.'
				},
				c: {
					where: 'Coming in from the inside at their D, below the left dot.',
					read: 'Look at their D and the open ice behind the net. Come in on an angle so he cannot turn back.',
					why: '[[angling|Angling]] him toward the left boards pushes the play right where LW is waiting.'
				},
				rw: {
					where: 'In front of the net, heading behind it.',
					read: 'Watch their other D on the right side. Skate into the lane behind the net so the [[d-to-d|D-to-D]] is gone.',
					why: 'With the pass behind the net taken away, the puck can only go up the left wall.'
				},
				ld: {
					where: 'In the middle of the blue line.',
					read: 'Watch their center in the middle. Keep your feet moving.',
					why: 'You hold the middle lane of the wall. A pass through the middle is the one play that beats this system.'
				},
				rd: {
					where: 'On the right side of the blue line.',
					read: 'Watch their winger on the right wall. Stay level with LD and LW.',
					why: 'Keeping the three of you in a line means there is no gap for a long pass to get through.'
				}
			},
			reads: {
				c: [{ at: 'o1', label: 'Puck carrier' }],
				rw: [{ at: 'o2', label: 'D-to-D' }],
				lw: [{ at: 'o3' }],
				ld: [{ at: 'o4' }],
				rd: [{ at: 'o5' }]
			},
			quiz: {
				lw: {
					drag: {
						target: { kind: 'ellipse', cx: 130, cy: 15, rx: 8, ry: 6 },
						correct:
							'Yes. Inside the blue line on the left, between the boards and the middle: the left third of the wall.',
						incorrect:
							'In the [[left-wing-lock|left wing lock]] you hold the left lane at the blue line, a few feet inside it and off the boards, level with the two D.'
					}
				},
				ld: {
					drag: {
						target: { kind: 'ellipse', cx: 130, cy: 42, rx: 8, ry: 7 },
						correct: 'Yes. With LW in the left lane, you take the middle of the blue line.',
						incorrect:
							'LW is covering the left lane, so you slide to the middle of the blue line. Staying on the left leaves two players in one lane and the middle empty.'
					}
				},
				rw: {
					decision: {
						prompt:
							'C is pressuring their D in the left corner. Their other D is on the right side, calling for the puck. You are [[f2|F2]]. You...',
						options: [
							{
								text: 'Skate into the lane behind the net to cut off the pass',
								correct: true,
								why: 'Taking away the [[d-to-d|D-to-D]] leaves him only the left boards, where LW is waiting.'
							},
							{
								text: 'Join C on the puck carrier',
								correct: false,
								why: 'Two on the puck with the back of the net open means one pass across beats you both.'
							},
							{
								text: 'Drop back to the blue line',
								correct: false,
								why: 'LW is already the third D. You are one of the two forecheckers.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'Their D [[rim|rims]] it up the left wall. LW [[pinch|pinches]] down on the winger, LD slides over to the left, and RD moves to the middle. C turns up the wall behind the winger.',
			phase: 'first-pass',
			positions: {
				lw: { x: 142, y: 9 },
				c: { x: 174, y: 22 },
				rw: { x: 180, y: 36 },
				ld: { x: 130, y: 28 },
				rd: { x: 130, y: 50 },
				o1: { x: 181, y: 14 },
				o2: { x: 193, y: 58 },
				o3: { x: 152, y: 6 },
				o4: { x: 164, y: 32 },
				o5: { x: 152, y: 74 }
			},
			puck: { x: 154, y: 3 },
			puckCarrier: 'o3',
			arrows: [
				{ kind: 'skate', from: 'lw', to: { x: 148, y: 6 } },
				{ kind: 'skate', from: 'c', to: { x: 160, y: 10 } },
				{ kind: 'skate', from: 'ld', to: { x: 130, y: 22 } },
				{ kind: 'skate', from: 'rd', to: { x: 130, y: 44 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Jumping down the left boards from the blue line.',
					read: 'The puck is going up your wall to their winger. Close on him fast, angle him into the boards and get your stick on the puck.',
					why: 'This is the moment the lock is built for. C is behind him and LD covers your spot.'
				},
				c: {
					where: 'Below the left dot, turning back up the left wall.',
					read: 'Watch the winger and LW closing. Come up behind him so he is trapped.',
					why: 'With LW in front and you behind, the winger has nowhere to go.'
				},
				rw: {
					where: 'In the [[low-slot|low slot]], in front of the net.',
					read: 'Watch their center. Stay between him and the net.',
					why: 'If the winger chips it to the middle, you are the first one there.'
				},
				ld: {
					where: 'Sliding left along the blue line.',
					read: 'Watch LW pinch. Fill the left lane behind him.',
					why: 'When a lane player leaves, the next one shifts over so the wall stays whole.'
				},
				rd: {
					where: 'Sliding to the middle of the blue line.',
					read: 'Watch their center and the right-side winger. You now cover the middle.',
					why: 'The middle is the most dangerous lane. With LD on the left, it is yours.'
				}
			},
			reads: {
				lw: [{ at: 'o3', label: 'Wall winger' }],
				c: [{ at: 'o3' }],
				rw: [{ at: 'o4' }],
				ld: [{ at: 'lw' }],
				rd: [{ at: 'o4' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt: 'LW pinches down the left wall and LD slides over to the left. What do you do?',
						options: [
							{
								text: 'Slide to the middle of the blue line',
								correct: true,
								why: 'The wall shifts toward the puck. With LD on the left, the middle is yours.'
							},
							{
								text: 'Stay wide on the right boards',
								correct: false,
								why: 'That leaves the middle lane empty. A chip to their center would go straight through.'
							},
							{
								text: 'Pinch down the right wall',
								correct: false,
								why: 'The puck is on the far side. Pinching now leaves only LD back.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'LW pins the winger on the boards and C picks up the loose puck. RW is open in the [[slot]]. LD and RD are still across the blue line if anything goes wrong.',
			phase: 'outcome',
			positions: {
				lw: { x: 149, y: 7 },
				c: { x: 158, y: 12 },
				rw: { x: 174, y: 40 },
				ld: { x: 130, y: 24 },
				rd: { x: 130, y: 46 },
				o1: { x: 176, y: 14 },
				o2: { x: 186, y: 56 },
				o3: { x: 152, y: 3 },
				o4: { x: 172, y: 20 },
				o5: { x: 154, y: 70 }
			},
			puck: { x: 159, y: 14 },
			puckCarrier: 'c',
			arrows: [{ kind: 'pass', from: 'c', to: { x: 173, y: 39 } }],
			roles,
			notes: {
				lw: {
					where: 'On the left boards, pinning their winger.',
					read: 'Keep him on the wall until C is clear, then get back to your lane.',
					why: 'You won the battle. Hustling back keeps the wall of three ready for the next play.'
				},
				c: {
					where: 'Coming off the left boards with the puck, near the top of the left circle.',
					read: 'Head up: RW is open in the [[slot]]. Their center is chasing you.',
					why: 'A turnover high on the wall is the payoff of the lock. Move it to the middle before they recover.'
				},
				rw: {
					where: 'In the [[slot]], stick on the ice.',
					read: 'Watch C and get open between their players.',
					why: 'You stayed in the middle while the play was on the wall, so now you are the shooter.'
				},
				ld: {
					where: 'On the left side of the blue line.',
					read: 'Watch the puck and LW. Hold until he gets back.',
					why: 'You cover the left lane while LW returns.'
				},
				rd: {
					where: 'In the middle of the blue line.',
					read: 'Watch for a clearing attempt up the middle.',
					why: 'You are the safety. Keep pucks in or get back.'
				}
			},
			reads: {
				c: [{ at: 'rw' }],
				rw: [{ at: 'c' }],
				lw: [{ at: 'o3' }],
				ld: [{ at: 'lw' }],
				rd: [{ at: 'o4' }]
			},
			quiz: {
				c: {
					decision: {
						prompt: 'LW pins their winger on the left boards and the puck squirts loose near you. You...',
						options: [
							{
								text: 'Pick it up and move it to RW in the [[slot]]',
								correct: true,
								why: 'Their team is still spread out for a [[breakout]]. A quick pass to the middle is a scoring chance.'
							},
							{
								text: 'Shoot it from the boards right away',
								correct: false,
								why: 'A shot from the wall at a bad angle rarely scores. RW is open in a much better spot.'
							},
							{
								text: 'Skate it back out to the blue line',
								correct: false,
								why: 'That gives them time to recover. Use the turnover while they are out of position.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
