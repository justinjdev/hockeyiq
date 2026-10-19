import type { Play } from '../../types';

const roles = { rw: 'F1', c: 'F2', lw: 'F3' };

const play: Play = {
	id: 'fc-1-2-2',
	title: '1-2-2 forecheck',
	category: 'forecheck',
	system: '1-2-2',
	strength: '5v5',
	summary:
		'A balanced [[forecheck]]: one forward ([[f1|F1]]) pressures the puck and steers it to the boards, two forwards ([[f2|F2]] and [[f3|F3]]) wait around the tops of the circles to take the wall and the middle, and both D hold the blue line.',
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
		'F1 is whoever gets there first, not always the RW; the other two forwards fill F2 and F3 by side. Some coaches set F2 and F3 lower (near the faceoff dots) to pressure more, others push them back toward the blue line so the system works more like a neutral-zone trap. Some teams let the strong-side D [[pinch]] on every rim up the wall; more cautious teams only pinch when F3 is already covering the middle. A common variation has F1 take away the [[d-to-d|D-to-D]] pass behind the net instead of angling to the wall, which pushes the play to the other side.',
	sources: [
		{
			title: 'Explained: 1-2-2 Offensive Zone Forecheck',
			publisher: 'The Coaches Site',
			url: 'https://members.thecoachessite.com/article/ozfc-1-2-2'
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
				'C carries over their blue line with their D backing up, so he [[dump-in|dumps it in]] to the right corner. RW is the closest forward, so he becomes [[f1|F1]] and chases.',
			phase: 'dump-in',
			positions: {
				lw: { x: 118, y: 24 },
				c: { x: 122, y: 58 },
				rw: { x: 128, y: 76 },
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
				{ kind: 'skate', from: 'rw', to: { x: 166, y: 70 } },
				{ kind: 'skate', from: 'c', to: { x: 154, y: 62 } },
				{ kind: 'skate', from: 'lw', to: { x: 154, y: 26 } },
				{ kind: 'skate', from: 'ld', to: { x: 128, y: 28 } },
				{ kind: 'skate', from: 'rd', to: { x: 128, y: 62 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Crossing the blue line on the left side, about 20 feet off the boards.',
					read: 'Watch where the puck is dumped. It is going to the far corner, so you are the [[weak-side]] forward: you become [[f3|F3]].',
					why: 'In a 1-2-2 only one forward chases. You set up high on your side so their breakout has nowhere to go up the middle.'
				},
				c: {
					where: 'Just inside their blue line on the right side, dumping the puck into the right corner.',
					read: 'Look at their D: they are backing up and standing at the blue line would get the puck stripped. Dump it away from their goalie, into the corner on RW\'s side.',
					why: 'A dump to the side where your winger is already skating gives F1 a race he can win. After the dump, you are [[f2|F2]] on the [[strong-side]].'
				},
				rw: {
					where: 'Wide on the right side at the blue line, already at speed.',
					read: 'The puck is going into your corner and you are the closest forward. Pick out their D who will go back for it.',
					why: 'The first forward to the puck is [[f1|F1]]. A dump-in is only worth it if someone gets in quickly to pressure the D.'
				},
				ld: {
					where: 'In the neutral zone left of the middle, following the play.',
					read: 'Watch the dump and their weak-side winger. Skate up to the blue line on your side, a few feet inside it.',
					why: 'The D hold the line in a 1-2-2. Being inside the blue line keeps you in position to keep pucks in the zone.'
				},
				rd: {
					where: 'In the neutral zone right of the middle, behind C.',
					read: 'Watch the corner and their winger on your side. You are the [[strong-side]] D for this forecheck.',
					why: 'If they rim the puck up your wall, you are the one who might [[pinch]], so get to the line early.'
				}
			},
			reads: {
				c: [
					{ at: 'o1', label: 'Their D' },
					{ at: { x: 182, y: 74 }, label: 'Dump here' }
				],
				rw: [{ at: 'o1', label: 'Their D' }],
				lw: [{ at: 'o5' }],
				rd: [{ at: 'o3' }]
			},
			quiz: {
				c: {
					decision: {
						prompt:
							'You carry to their blue line. Both their D are backing up, standing up at the line with sticks out, and RW is flying up the right side. You...',
						options: [
							{
								text: '[[dump-in|Dump it]] into the right corner where RW is skating',
								correct: true,
								why: 'Your winger has speed toward that corner. A dump to his side turns into a race he can win, and the forecheck starts.'
							},
							{
								text: 'Try to beat both D one-on-one through the middle',
								correct: false,
								why: 'Two set D standing up at the line will take the puck, and their breakout starts with your forwards caught going the wrong way.'
							},
							{
								text: 'Dump it into the left corner, away from RW',
								correct: false,
								why: 'Nobody is going there with speed. Their D gets the puck with all the time he wants.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'Their D picks the puck up in the corner. RW ([[f1|F1]]) comes at him from the inside to push him toward the boards. C ([[f2|F2]]) and LW ([[f3|F3]]) sit at the tops of the circles. Both D hold the blue line.',
			phase: 'd-retrieves',
			positions: {
				lw: { x: 156, y: 26 },
				c: { x: 156, y: 62 },
				rw: { x: 170, y: 60 },
				ld: { x: 130, y: 30 },
				rd: { x: 130, y: 64 },
				o1: { x: 182, y: 71 },
				o2: { x: 186, y: 32 },
				o3: { x: 160, y: 80 },
				o4: { x: 168, y: 44 },
				o5: { x: 154, y: 8 }
			},
			puck: { x: 184, y: 73 },
			puckCarrier: 'o1',
			arrows: [{ kind: 'skate', from: 'rw', to: { x: 178, y: 67 } }],
			roles,
			notes: {
				lw: {
					where: 'Top of the left circle, about 25 feet off the left boards, facing the puck.',
					read: 'Watch their D with the puck and their center curling through the [[slot]]. If F1 forces the puck up the far wall, you slide to the middle.',
					why: 'As [[f3|F3]] you guard the middle. A pass up the middle beats the whole forecheck, so it has to go through you.'
				},
				c: {
					where: 'At the top of the right circle, level with the dot, stick on the ice.',
					read: 'Watch their D and their winger on the right wall. When F1 pushes the puck to the wall, the wall is yours.',
					why: 'As [[f2|F2]] on the [[strong-side]] you take away the first pass up the boards. Sitting here, you are close enough to jump the winger.'
				},
				rw: {
					where: 'Coming in from the inside, between their D and the net.',
					read: 'Look at their D and his partner behind the net. Come in on an angle from the middle so he cannot turn back behind the net.',
					why: '[[angling|Angling]] him toward the boards takes away the middle and the [[d-to-d|D-to-D]] pass, so the only option left is up the wall, where F2 is waiting.'
				},
				ld: {
					where: 'A couple of feet inside their blue line, left of the middle.',
					read: 'Watch their weak-side winger and the middle. You are the [[weak-side-d|weak-side D]]: stay home.',
					why: 'If RD pinches, you are the last player back. Holding the line stops a long pass to their weak-side winger.'
				},
				rd: {
					where: 'A couple of feet inside their blue line, on the right side.',
					read: 'Watch their winger on your wall. If the puck comes up the boards to him, you can step down on him.',
					why: 'A rim up the wall is their easiest way out. You are in position to stop it, and LD and F3 cover behind you.'
				}
			},
			reads: {
				rw: [
					{ at: 'o1', label: 'Puck carrier' },
					{ at: 'o2', label: 'D-to-D' }
				],
				c: [{ at: 'o3', label: 'Wall winger' }],
				lw: [{ at: 'o4', label: 'Their C' }],
				rd: [{ at: 'o3' }],
				ld: [{ at: 'o5' }]
			},
			quiz: {
				c: {
					drag: {
						target: { kind: 'ellipse', cx: 156, cy: 63, rx: 9, ry: 6 },
						correct:
							'Yes. Top of the right circle, between the dot and the boards: close enough to jump a pass up the wall, high enough to stay above the puck.',
						incorrect:
							'As [[f2|F2]] in a 1-2-2 you sit at the top of the [[strong-side]] circle, between the dot and the boards. Going into the corner with F1 leaves the wall open; sitting at the blue line is too far to stop the pass.'
					}
				},
				lw: {
					drag: {
						target: { kind: 'ellipse', cx: 156, cy: 27, rx: 9, ry: 6 },
						correct:
							'Yes. Top of the left circle: you cover the middle and your side, and you are above the puck if they get out.',
						incorrect:
							'As [[f3|F3]] you sit at the top of the far circle. Too deep and a pass up the middle beats you; too wide and the middle is open.'
					}
				},
				rw: {
					decision: {
						prompt:
							'Their D has the puck in the right corner and his partner is calling for it behind the net. You are [[f1|F1]]. How do you go at him?',
						options: [
							{
								text: 'Come in from the inside on an angle, pushing him toward the boards',
								correct: true,
								why: 'You take away the middle and the pass behind the net. His only play is up the wall, where F2 and RD are waiting.'
							},
							{
								text: 'Skate straight at the puck as fast as you can',
								correct: false,
								why: 'Straight in lets him cut back behind the net or pass to his partner. Chasing through the middle is how a 1-2-2 falls apart.'
							},
							{
								text: 'Stop at the top of the circle and wait for him',
								correct: false,
								why: 'That gives him all the time he wants. F1 has to put pressure on the puck or the forecheck does nothing.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'Squeezed by F1, their D [[rim|rims]] it up the right wall to his winger. C ([[f2|F2]]) closes from the inside and RD [[pinch|pinches]] down the wall. LW and LD slide to cover the middle.',
			phase: 'first-pass',
			positions: {
				lw: { x: 152, y: 40 },
				c: { x: 152, y: 70 },
				rw: { x: 177, y: 66 },
				ld: { x: 130, y: 44 },
				rd: { x: 138, y: 72 },
				o1: { x: 183, y: 75 },
				o2: { x: 188, y: 32 },
				o3: { x: 156, y: 79 },
				o4: { x: 164, y: 52 },
				o5: { x: 150, y: 12 }
			},
			puck: { x: 157, y: 82 },
			puckCarrier: 'o3',
			arrows: [
				{ kind: 'skate', from: 'c', to: { x: 156, y: 75 } },
				{ kind: 'skate', from: 'rd', to: { x: 150, y: 79 } },
				{ kind: 'skate', from: 'rw', to: { x: 170, y: 76 } },
				{ kind: 'skate', from: 'lw', to: { x: 156, y: 46 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Sliding from the left circle into the [[high-slot|high slot]].',
					read: 'Watch their center. He is swinging to [[support]] the winger, so get between him and the puck.',
					why: 'With C and RD on the wall, the bail-out pass is to their center in the middle. You take that away.'
				},
				c: {
					where: 'Closing on their winger from the inside, a few feet off the right boards.',
					read: 'Watch his hands and the puck. Get your stick in the lane to the middle and take his body toward the boards.',
					why: 'Coming from the inside means the only place he can go is along the boards, straight into RD.'
				},
				rw: {
					where: 'Near the bottom of the right circle, turning back up the wall after the rim.',
					read: 'Look at the puck on the wall and their D who just passed it. Follow the puck up the boards from below.',
					why: 'If the winger tries to chip it back down, you are there. F1 does not stop after the first contact.'
				},
				ld: {
					where: 'Inside the blue line, sliding toward the middle.',
					read: 'Watch RD pinching and their weak-side winger. Shift over so you are centered on the line.',
					why: 'When your partner pinches, you cover the middle of the blue line. If the pinch fails, you are the last player back.'
				},
				rd: {
					where: 'Jumping down the right boards from the blue line toward their winger.',
					read: 'The puck is going to their winger on your wall and C is closing from the inside. That is your cue to [[pinch]].',
					why: 'Two players squeezing one winger on the boards wins pucks. LD and LW have the middle covered behind you.'
				}
			},
			reads: {
				rd: [
					{ at: 'o3', label: 'Wall winger' },
					{ at: 'c' }
				],
				c: [{ at: 'o3' }],
				lw: [{ at: 'o4', label: 'Their C' }],
				ld: [{ at: 'rd' }, { at: 'o5' }],
				rw: [{ at: 'o1' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'Their D rims it up your wall to their winger. C is closing on him from the inside and LD is sliding to the middle. You...',
						options: [
							{
								text: '[[pinch|Pinch]] down the boards and squeeze the winger with C',
								correct: true,
								why: 'The puck is on your wall, C is helping from the inside, and LD is covering behind you. That is a safe pinch.'
							},
							{
								text: 'Back off into the neutral zone in case they get out',
								correct: false,
								why: 'Backing off hands their winger the boards. In a 1-2-2 the D hold the line and step up on wall plays.'
							},
							{
								text: 'Skate across to the middle of the blue line',
								correct: false,
								why: 'LD is already taking the middle. Two D in the middle leave the right wall wide open.'
							}
						]
					}
				},
				ld: {
					decision: {
						prompt: 'Your partner RD pinches down the right wall. What do you do?',
						options: [
							{
								text: 'Slide to the middle of the blue line and stay home',
								correct: true,
								why: 'One D pinches, the other covers. If the puck gets past RD, you are the last player back.'
							},
							{
								text: 'Pinch down the left wall too',
								correct: false,
								why: 'Two D pinching at once is how [[odd-man-rush|odd-man rushes]] start. Only one D goes.'
							},
							{
								text: 'Stay wide on the left boards',
								correct: false,
								why: 'The danger is a pass through the middle. Staying wide leaves the middle of the line empty.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'The winger is trapped between RD and C. C comes away with the puck and finds LW in the [[high-slot|high slot]]. RW heads to the net. If the puck had squeezed past, LD and LW were still back.',
			phase: 'outcome',
			positions: {
				lw: { x: 160, y: 40 },
				c: { x: 160, y: 74 },
				rw: { x: 180, y: 52 },
				ld: { x: 130, y: 48 },
				rd: { x: 151, y: 79 },
				o1: { x: 178, y: 72 },
				o2: { x: 184, y: 36 },
				o3: { x: 155, y: 82 },
				o4: { x: 172, y: 60 },
				o5: { x: 152, y: 18 }
			},
			puck: { x: 161, y: 72 },
			puckCarrier: 'c',
			arrows: [
				{ kind: 'pass', from: 'c', to: { x: 160, y: 42 } },
				{ kind: 'skate', from: 'rw', to: { x: 184, y: 46 } }
			],
			roles,
			notes: {
				lw: {
					where: 'In the [[high-slot|high slot]], stick on the ice, ready to shoot.',
					read: 'Watch C win the puck and check where their center is. Show C your stick as a target.',
					why: 'A turnover on the wall is dangerous only if someone is open in the middle. That is you.'
				},
				c: {
					where: 'Coming off the right boards with the puck, just above the bottom of the circle.',
					read: 'Head up: LW is open in the [[high-slot|high slot]], RW is driving the net.',
					why: 'Their team is spread out trying to break out. Moving the puck quickly to the middle catches them out of position.'
				},
				rw: {
					where: 'Driving to the front of the net.',
					read: 'Watch LW for the shot and their D nearest you. Get your stick down for a tip or rebound.',
					why: 'A shot from the slot needs a body at the [[net-front|net]]. F1 finishes by going to the net.'
				},
				ld: {
					where: 'Centered on the blue line, a couple of feet inside.',
					read: 'Watch the puck and their weak-side winger. Be ready to keep in any puck that comes up the middle.',
					why: 'You are still the safety. If the shot gets blocked and they come out, you meet them first.'
				},
				rd: {
					where: 'On the right boards, holding their winger off the puck.',
					read: 'Keep your body between the winger and the play. Once C is clear, get back to your point.',
					why: 'Pinning him stops him from chasing C. Then you return so you are not caught deep.'
				}
			},
			reads: {
				c: [{ at: 'lw' }, { at: 'rw' }],
				lw: [{ at: 'c' }],
				rw: [{ at: 'o2' }],
				ld: [{ at: 'o5' }],
				rd: [{ at: 'o3' }]
			},
			quiz: {
				lw: {
					decision: {
						prompt:
							'C has just stripped their winger on the right wall. You are [[f3|F3]] in the high slot. You...',
						options: [
							{
								text: 'Stay in the high slot, stick down, and call for the puck',
								correct: true,
								why: 'You are the open player in the middle. A quick pass to you is a shot before their team can recover.'
							},
							{
								text: 'Skate into the corner to help C',
								correct: false,
								why: 'C already has the puck. Going there adds a third player in one spot and takes away his best pass.'
							},
							{
								text: 'Head back to the neutral zone',
								correct: false,
								why: 'You won the puck. Now is the time to attack, and LD is still back as the safety.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
