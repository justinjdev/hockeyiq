import type { Play } from '../../types';

const play: Play = {
	id: 'nz-regroup',
	title: 'Neutral zone regroup',
	category: 'neutral-zone',
	system: 'D-to-D regroup with swinging forwards',
	strength: '5v5',
	summary:
		'When the other team is set up and waiting in the [[neutral-zone|neutral zone]], we do not force the puck into them. The puck goes back to the D, moves [[d-to-d|D-to-D]] while the forwards curl back for speed, and then goes up to a forward who is already skating. It is a [[regroup]]: give up ten feet to come back with speed.',
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
	keyConcepts: ['passing-lanes'],
	variations:
		'Teams regroup in different shapes. Some just go back to one D and straight up again ("one-touch regroup"); others always move it D-to-D to switch sides. Some coaches want the forwards to swing in a set pattern (wingers stretch, center curls low), others let all three curl and read. If the D-to-D pass is covered, the D can skate it himself (a "D carry") or bump it to the center swinging low. When nothing is open after the regroup, a good [[dump-in]] to the far corner is still better than a turnover at their blue line.',
	sources: [
		{
			title: '14U+: 5v3 Neutral Zone Regroup',
			publisher: 'USA Hockey (American Development Model)',
			url: 'https://www.admkids.com/news_article/show/879133'
		}
	],
	steps: [
		{
			caption:
				'C carries through the [[neutral-zone|neutral zone]], but their D are standing up at the blue line and their forwards are back in the lanes. Nothing is open ahead, so C turns and passes it back to LD.',
			phase: 'turn-back',
			positions: {
				lw: { x: 112, y: 14 },
				c: { x: 102, y: 44 },
				rw: { x: 114, y: 72 },
				ld: { x: 77, y: 30 },
				rd: { x: 79, y: 56 },
				o1: { x: 108, y: 56 },
				o2: { x: 120, y: 28 },
				o3: { x: 122, y: 62 },
				o4: { x: 129, y: 32 },
				o5: { x: 129, y: 56 }
			},
			puck: { x: 100.5, y: 43 },
			puckCarrier: 'c',
			arrows: [
				{ kind: 'pass', from: 'c', to: { x: 78, y: 31 } },
				{ kind: 'skate', from: 'lw', to: { x: 108, y: 14 } }
			],
			roles: { c: 'Puck carrier', ld: 'D (gets the puck)', rd: 'D partner' },
			notes: {
				lw: {
					where: 'On the left side just short of their blue line, slowing down.',
					read: 'Watch C. When he turns back, you turn back too. Do not cross their blue line ahead of the puck.',
					why: 'If you keep going you end up [[offside]] and standing still. The regroup needs you coming back for speed.'
				},
				c: {
					where: 'With the puck just past the red line in the middle.',
					read: 'Count the bodies between you and their net: two D standing up and three forwards in the lanes. There is no lane.',
					why: 'Carrying into four players is a turnover. Going back to the D keeps the puck and resets the attack.'
				},
				rw: {
					where: 'On the right side just short of their blue line, slowing down.',
					read: 'Watch C and stay onside. Look at their D on your side: he is standing up, not backing off.',
					why: 'When their D stands up, there is no room behind him. You need to come back and get speed first.'
				},
				ld: {
					where: 'On the left near our blue line, stick on the ice, facing C.',
					read: 'Watch C. When his head comes up and he turns, he is looking for you. Give him a target.',
					why: 'The D are the reset button. You have to be available, not drifting into the play.'
				},
				rd: {
					where: 'On the right near our blue line, level with LD.',
					read: 'Watch the puck go to LD and check where their forwards are. Be ready for the D-to-D.',
					why: 'Staying level with LD keeps the [[d-to-d|D-to-D]] pass short and flat.'
				}
			},
			reads: {
				c: [
					{ at: 'o4', label: 'D stands up' },
					{ at: 'o5', label: 'D stands up' },
					{ at: 'ld' }
				],
				lw: [{ at: 'c' }],
				rw: [{ at: 'o5' }],
				ld: [{ at: 'c' }],
				rd: [{ at: 'o1' }]
			},
			quiz: {
				c: {
					decision: {
						prompt:
							'You carry through the neutral zone. Their two D are standing up at their blue line and their three forwards are in the lanes. You...',
						options: [
							{
								text: 'Turn back and pass it to your D to [[regroup]]',
								correct: true,
								why: 'There is no lane. Going back keeps the puck and lets your forwards come again with speed.'
							},
							{
								text: 'Try to beat their D one on one at the blue line',
								correct: false,
								why: 'You are skating into two D with three forwards closing. That turnover goes the other way with your D flat-footed.'
							},
							{
								text: 'Pass across the middle to RW',
								correct: false,
								why: 'Their forward is sitting right in that lane. A pick-off there is a rush against.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'One of their forwards chases LD. LD moves it [[d-to-d|D-to-D]] to RD. All three of our forwards curl back toward the red line to build speed.',
			phase: 'd-to-d',
			positions: {
				lw: { x: 102, y: 16 },
				c: { x: 94, y: 42 },
				rw: { x: 104, y: 70 },
				ld: { x: 75, y: 31 },
				rd: { x: 77, y: 57 },
				o1: { x: 88, y: 36 },
				o2: { x: 112, y: 26 },
				o3: { x: 112, y: 60 },
				o4: { x: 134, y: 32 },
				o5: { x: 134, y: 56 }
			},
			puck: { x: 76.5, y: 32 },
			puckCarrier: 'ld',
			arrows: [
				{ kind: 'pass', from: 'ld', to: { x: 77, y: 56 } },
				{ kind: 'skate', from: 'rw', to: { x: 94, y: 68 }, via: { x: 100, y: 62 } },
				{ kind: 'skate', from: 'c', to: { x: 88, y: 50 } },
				{ kind: 'skate', from: 'lw', to: { x: 94, y: 20 } }
			],
			roles: { ld: 'D (puck)', rd: 'D partner' },
			notes: {
				lw: {
					where: 'Curling back on the left side toward the red line.',
					read: 'Watch the puck move from LD to RD. As it goes away from you, you become the wide, far option.',
					why: 'Coming back to the red line gives you room to turn and skate forward again with speed.'
				},
				c: {
					where: 'Swinging back through the middle, just past the red line.',
					read: 'Watch RD. Be ready to come up the middle as a short option if the wall is covered.',
					why: 'A center swinging through the middle pulls their forwards in and opens the wall.'
				},
				rw: {
					where: 'Curling back on the right side toward the red line.',
					read: '[[shoulder-check|Shoulder check]] to see the D-to-D. The puck is coming to your side, so you will be the first option.',
					why: 'You want to turn up ice just as RD is ready to pass, so you take the pass at full speed.'
				},
				ld: {
					where: 'On the left just inside our blue line with their forward coming at you.',
					read: 'See the forechecker angle in on you. The ice on RD\'s side is empty.',
					why: 'Moving it D-to-D switches the puck away from pressure. Their forwards now have to skate all the way across.'
				},
				rd: {
					where: 'On the right just inside our blue line, stick on the ice as a target.',
					read: 'Look at where your forwards are before the puck gets to you. Where is RW, and is the middle open?',
					why: 'If you know your pass before you receive it, you can move it in one touch while their forwards are still shifting.'
				}
			},
			reads: {
				ld: [{ at: 'o1', label: 'Forechecker' }, { at: 'rd' }],
				rd: [{ at: 'rw' }],
				rw: [{ at: 'rd' }],
				c: [{ at: 'rd' }],
				lw: [{ at: 'o2' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt:
							'C dropped the puck back to you. Their forward is angling in on you and RD is open on the other side. You...',
						options: [
							{
								text: 'Pass it [[d-to-d|D-to-D]] to RD',
								correct: true,
								why: 'It moves the puck away from pressure and makes their forwards shift across the ice while ours curl for speed.'
							},
							{
								text: 'Fire it up the left wall to LW',
								correct: false,
								why: 'LW is still curling and has no speed, and their forward is in that lane. That pass gets picked off.'
							},
							{
								text: 'Hold it and wait for the forechecker to commit',
								correct: false,
								why: 'Waiting lets their whole team reset. A regroup only works if the puck moves quickly.'
							}
						]
					}
				},
				rw: {
					drag: {
						target: { kind: 'ellipse', cx: 94, cy: 67, rx: 9, ry: 6 },
						correct:
							'Yes. Curl back just inside the red line on your wall so you can turn and take RD\'s pass with speed.',
						incorrect:
							'On a regroup the strong-side winger curls back toward the red line on his own side. Staying at their blue line means taking the pass standing still.'
					}
				}
			}
		},
		{
			caption:
				'RD has it with time. RW turns up ice at full speed on the right side. RD passes to him in stride while C comes through the middle and LW stretches wide on the left.',
			phase: 'pass-with-speed',
			positions: {
				lw: { x: 98, y: 16 },
				c: { x: 92, y: 42 },
				rw: { x: 96, y: 70 },
				ld: { x: 78, y: 32 },
				rd: { x: 82, y: 58 },
				o1: { x: 82, y: 44 },
				o2: { x: 104, y: 32 },
				o3: { x: 108, y: 54 },
				o4: { x: 128, y: 34 },
				o5: { x: 128, y: 58 }
			},
			puck: { x: 83.5, y: 59 },
			puckCarrier: 'rd',
			arrows: [
				{ kind: 'pass', from: 'rd', to: { x: 104, y: 72 } },
				{ kind: 'skate', from: 'rw', to: { x: 114, y: 74 } },
				{ kind: 'skate', from: 'c', to: { x: 110, y: 44 } },
				{ kind: 'skate', from: 'lw', to: { x: 114, y: 16 } }
			],
			roles: { rd: 'D (puck)', ld: 'D partner', rw: 'Strong-side wing' },
			notes: {
				lw: {
					where: 'Wide on the left boards, just short of the red line, skating forward.',
					read: 'Watch the puck and their D on your side. Stay wide and stay level with or behind the puck.',
					why: 'Width stretches their D apart. If you drift in, you bring your defender right into C\'s lane.'
				},
				c: {
					where: 'Coming up the middle from behind the red line, building speed.',
					read: 'Watch RD and the gap between their two forwards in the middle.',
					why: 'You are the second option and the middle driver. Even without the puck, you pull a defender off RW.'
				},
				rw: {
					where: 'Turning up the right side just inside the red line, at full speed.',
					read: 'Look at RD for the pass and glance up at their D on your side. Stick on the ice, blade open.',
					why: 'Taking the pass in stride is the whole point of the regroup. Now their D has to back up against you.'
				},
				ld: {
					where: 'Moving up on the left just outside our blue line.',
					read: 'Watch the puck and the forechecker who chased you. Stay behind the play.',
					why: 'You are the safety. If the pass gets picked off, you are the first one back.'
				},
				rd: {
					where: 'On the right just past our blue line, with the puck.',
					read: 'RW is skating up your wall with speed. Their forward in the middle is in C\'s lane, and LW is far across.',
					why: 'The wall pass to a winger with speed is the safe, fast option. The cross-ice pass goes through two of theirs.'
				}
			},
			reads: {
				rd: [{ at: 'rw' }, { at: 'o3', label: 'Middle covered' }],
				rw: [{ at: 'rd' }, { at: 'o5' }],
				c: [{ at: 'rd' }],
				lw: [{ at: 'o4' }],
				ld: [{ at: 'o1' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'You got the D-to-D. RW is skating up your wall with speed, their forward sits in the middle, and LW is wide on the far side. You...',
						options: [
							{
								text: 'Pass to RW in stride up the right side',
								correct: true,
								why: 'He is open, close, and already moving forward. That pass beats their forwards and makes their D back up.'
							},
							{
								text: 'Pass across the ice to LW',
								correct: false,
								why: 'The pass goes through their forwards in the middle. Cross-ice passes in the neutral zone are the ones that get picked off.'
							},
							{
								text: 'Pass it back to LD again',
								correct: false,
								why: 'Your forwards have already curled and are moving. Another D-to-D wastes their speed.'
							}
						]
					}
				},
				lw: {
					drag: {
						target: { kind: 'ellipse', cx: 102, cy: 15, rx: 10, ry: 7 },
						correct:
							'Yes. Wide on the left near the red line you stretch their D and stay onside.',
						incorrect:
							'The weak-side winger stays wide on the far boards, around the red line. Too far ahead and you are offside; too far in and you clog C\'s lane.'
					}
				}
			}
		},
		{
			caption:
				'RW carries over the red line with speed. C drives the middle, LW stays wide, and their D now have to back up. The regroup turned a dead end into a rush.',
			phase: 'attack',
			positions: {
				lw: { x: 116, y: 16 },
				c: { x: 112, y: 46 },
				rw: { x: 116, y: 74 },
				ld: { x: 90, y: 34 },
				rd: { x: 94, y: 58 },
				o1: { x: 86, y: 46 },
				o2: { x: 102, y: 30 },
				o3: { x: 102, y: 56 },
				o4: { x: 130, y: 36 },
				o5: { x: 132, y: 64 }
			},
			puck: { x: 117.5, y: 75.5 },
			puckCarrier: 'rw',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 140, y: 72 } },
				{ kind: 'skate', from: 'c', to: { x: 123, y: 48 } },
				{ kind: 'skate', from: 'lw', to: { x: 123, y: 18 } }
			],
			roles: { rw: 'Puck carrier' },
			notes: {
				lw: {
					where: 'Wide on the left, just short of their blue line.',
					read: 'Watch the puck. Do not cross their blue line before RW does.',
					why: 'An [[offside]] here kills the rush you just built. Time your speed so you reach the line with or just after the puck.'
				},
				c: {
					where: 'Driving through the middle just short of their blue line.',
					read: 'Watch their D. Drive toward the net to push them back and open room for RW.',
					why: 'A middle driver with speed makes their D choose between you and the puck.'
				},
				rw: {
					where: 'Carrying the puck up the right side at full speed.',
					read: 'Head up: is their D backing up or standing up? Count our players against theirs.',
					why: 'With speed, their D has to respect you. Get the puck over the blue line and keep the attack going.'
				},
				ld: {
					where: 'Following up on the left side of the neutral zone.',
					read: 'Watch the puck and their forwards coming back. Stay behind the play.',
					why: 'Join close enough to [[support]] but stay the last one back on your side.'
				},
				rd: {
					where: 'Following up on the right side behind RW.',
					read: 'Watch RW and the blue line. Get ready to hold the line once the puck is in.',
					why: 'Your pass started the rush. Following up keeps the five of us connected.'
				}
			},
			reads: {
				rw: [{ at: 'o5' }],
				c: [{ at: 'o4' }],
				lw: [{ at: { x: 125, y: 16 }, label: 'Blue line' }],
				ld: [{ at: 'o2' }],
				rd: [{ at: 'rw' }]
			}
		}
	]
};

export default play;
