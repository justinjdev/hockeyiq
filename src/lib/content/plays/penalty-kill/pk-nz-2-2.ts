import type { Play } from '../../types';

const play: Play = {
	id: 'pk-nz-2-2',
	title: 'PK neutral zone: 2-2',
	category: 'penalty-kill',
	system: '2-2 (retreating box)',
	strength: '4v5',
	summary:
		'A passive [[penalty-kill]] in the [[neutral-zone|neutral zone]]. The two forwards skate side by side in front of the puck and take away the middle; the two D wait near our blue line. The power play is pushed to the boards, where a D stands up at the line and forces a dump-in or a turnover.',
	slots: [
		{ id: 'lw', home: 'LW' },
		{ id: 'rw', home: 'RW' },
		{ id: 'ld', home: 'LD' },
		{ id: 'rd', home: 'RD' }
	],
	opponents: [
		{ id: 'o1', label: 'D' },
		{ id: 'o2', label: 'D' },
		{ id: 'o3', label: 'F' },
		{ id: 'o4', label: 'F' },
		{ id: 'o5', label: 'F' }
	],
	keyConcepts: ['gap-control'],
	variations:
		'The 2-2 is sometimes called a retreating box. Its main weakness is the [[gap]]: with only two players up front and two back, there is a big space between the pairs, and it is harder for the D to stand up at the blue line than in a 1-3 (three across the line). That is why many teams now prefer the 1-3. Some coaches let the forwards push higher and pressure the D in his own end before falling back into the 2-2; others keep both forwards near the red line the whole time.',
	sources: [
		{
			title: 'How the Bruins Penalty Killing Forecheck Works',
			publisher: 'Low Cycle (Shawn Ferris)',
			url: 'https://lowcycle.substack.com/p/how-the-bruins-penalty-killing-forecheck'
		},
		{
			title: "USA Hockey's New Icing Rule, and How it Affects your Penalty Kill",
			publisher: 'Weiss Tech Hockey (Jeremy Weiss)',
			url: 'https://weisstechhockey.com/?p=4778'
		}
	],
	steps: [
		{
			caption:
				'Their D carries the puck up from his end to start the power play rush. LW and RW skate side by side between the red line and their blue line. LD and RD wait near our blue line.',
			positions: {
				lw: { x: 114, y: 32 },
				rw: { x: 114, y: 54 },
				ld: { x: 84, y: 26 },
				rd: { x: 84, y: 60 },
				o1: { x: 150, y: 44 },
				o2: { x: 158, y: 24 },
				o3: { x: 124, y: 12 },
				o4: { x: 126, y: 74 },
				o5: { x: 130, y: 50 }
			},
			puck: { x: 148.5, y: 44.5 },
			puckCarrier: 'o1',
			arrows: [
				{ kind: 'skate', from: 'o1', to: { x: 138, y: 46 } },
				{ kind: 'skate', from: 'lw', to: { x: 120, y: 38 } },
				{ kind: 'skate', from: 'rw', to: { x: 120, y: 54 } }
			],
			roles: { lw: 'Front pair', rw: 'Front pair', ld: 'Back pair', rd: 'Back pair' },
			notes: {
				lw: {
					where: 'Left half of the middle, between the red line and their blue line, level with RW.',
					read: 'Watch the puck carrier and their center in the middle. Keep about two stick lengths between you and RW.',
					why: 'Side by side, you two take away the middle of the ice. The carrier has to go wide, toward the boards.'
				},
				rw: {
					where: 'Right half of the middle, level with LW.',
					read: 'Watch the puck carrier and their forward on the right wall. Know where LW is without looking for long.',
					why: 'If one of you gets ahead of the other, a gap opens between you and the puck goes right through it.'
				},
				ld: {
					where: 'Just outside our blue line on the left side.',
					read: 'Watch the puck and their forward on the left wall. Keep your feet moving so you can go either way.',
					why: 'The back pair meets whatever gets past the front pair. You decide at the blue line whether they get in cleanly.'
				},
				rd: {
					where: 'Just outside our blue line on the right side.',
					read: 'Watch the puck and their forward on the right wall. That side is where the forwards are pushing play.',
					why: 'The front pair pushes the puck to the outside. Whoever is on that side has to be ready to step up.'
				}
			},
			reads: {
				lw: [{ at: 'o1', label: 'Puck' }],
				rw: [{ at: 'o4' }],
				ld: [{ at: 'o3' }],
				rd: [{ at: 'o4' }]
			},
			quiz: {
				lw: {
					decision: {
						prompt:
							'You and RW are the front pair. Their D is carrying the puck up from his end. What do you do?',
						options: [
							{
								text: 'Stay side by side with RW in front of him and take away the middle',
								correct: true,
								why: 'Two of you across the middle leave him only the boards. That is the whole job of the front pair.'
							},
							{
								text: 'Go at him hard and try to steal it',
								correct: false,
								why: 'If you miss, he is past you and RW alone, and the middle is open. The 2-2 is a passive forecheck.'
							},
							{
								text: 'Drop back to our blue line with the D',
								correct: false,
								why: 'Then four of you are at the line and he skates through the neutral zone with nobody slowing him down.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'He has nothing through the middle, so he passes wide to his forward on the right boards. LW and RW keep the middle closed.',
			positions: {
				lw: { x: 122, y: 38 },
				rw: { x: 122, y: 54 },
				ld: { x: 86, y: 28 },
				rd: { x: 86, y: 62 },
				o1: { x: 138, y: 46 },
				o2: { x: 152, y: 26 },
				o3: { x: 114, y: 6 },
				o4: { x: 112, y: 81 },
				o5: { x: 118, y: 46 }
			},
			puck: { x: 136.5, y: 46.5 },
			puckCarrier: 'o1',
			arrows: [{ kind: 'pass', from: 'o1', to: { x: 113, y: 80 } }],
			roles: { lw: 'Front pair', rw: 'Front pair', ld: 'Back pair', rd: 'Back pair' },
			notes: {
				lw: {
					where: 'Left of the middle, level with RW, facing the puck.',
					read: 'Watch the pass go wide and their center sneaking through the middle behind you.',
					why: 'Once the puck goes wide, your next job is the center in the middle lane.'
				},
				rw: {
					where: 'Right of the middle, on the puck side.',
					read: 'Watch the pass to the right wall. Get ready to turn and come back on the inside of that forward.',
					why: 'The puck is on your side now. You are the one who can come back and squeeze him from behind.'
				},
				ld: {
					where: 'Left lane just outside our blue line.',
					read: 'Watch the puck go to the far side. Start sliding toward the middle.',
					why: 'With the puck on the right, you are the weak-side D. The middle behind RD is your space.'
				},
				rd: {
					where: 'Right lane just outside our blue line.',
					read: 'Watch the pass come to their forward on your wall. Read his speed and get your feet ready.',
					why: 'He is coming at you. If you set up early, you can step up instead of backing in.'
				}
			},
			reads: {
				rw: [{ at: 'o4', label: 'Pass target' }],
				lw: [{ at: 'o5', label: 'Center' }],
				rd: [{ at: 'o4' }],
				ld: [{ at: 'o5' }]
			}
		},
		{
			caption:
				'Their forward carries up the right boards toward our blue line. RD steps up to meet him, RW comes back on his inside, LW takes their center in the middle, and LD slides over behind RD.',
			positions: {
				lw: { x: 100, y: 50 },
				rw: { x: 106, y: 72 },
				ld: { x: 84, y: 42 },
				rd: { x: 90, y: 76 },
				o1: { x: 124, y: 52 },
				o2: { x: 140, y: 28 },
				o3: { x: 100, y: 8 },
				o4: { x: 98, y: 81 },
				o5: { x: 104, y: 44 }
			},
			puck: { x: 96.5, y: 80.5 },
			puckCarrier: 'o4',
			arrows: [
				{ kind: 'skate', from: 'rd', to: { x: 94, y: 79 } },
				{ kind: 'skate', from: 'rw', to: { x: 100, y: 77 } }
			],
			roles: { lw: 'Middle', rw: 'Backchecker', ld: 'Cover', rd: 'Stand up' },
			notes: {
				lw: {
					where: 'Back in the middle of the neutral zone, beside their center.',
					read: 'Watch their center and the puck. Keep your stick in the lane between them.',
					why: 'A pass to the middle is their only way out of RD and RW\'s squeeze. You take it away.'
				},
				rw: {
					where: 'Coming back hard on the inside of the puck carrier, a couple of strides behind him.',
					read: 'Watch the puck. You are squeezing him toward the boards from behind while RD meets him from the front.',
					why: 'Two players on him, one in front and one on the inside, leave him no room to turn back to the middle.'
				},
				ld: {
					where: 'Sliding across to the middle, a few strides behind RD.',
					read: 'Watch RD and the puck. If the puck gets chipped past RD, you are first to it.',
					why: 'When one D steps up, the other covers the ice behind him.'
				},
				rd: {
					where: 'Stepping up to the puck carrier on the right boards just outside our blue line.',
					read: 'Watch the puck and his hips, not his head. Stick on the puck, and use your body position to angle him into the boards.',
					why: 'If you stand up at the line, he cannot carry it in. He either dumps it or loses it to you or RW.'
				}
			},
			reads: {
				rd: [{ at: 'o4', label: 'Puck carrier' }],
				rw: [{ at: 'o4' }],
				lw: [{ at: 'o5', label: 'Center' }],
				ld: [{ at: 'rd' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'Their forward is carrying up your boards. RW is coming back on his inside and LD is behind you. You...',
						options: [
							{
								text: 'Step up, stick on the puck, and angle him into the boards',
								correct: true,
								why: 'RW and LD have you covered. Standing up forces a dump-in or a turnover right at the line.'
							},
							{
								text: 'Back up into our zone to stay safe',
								correct: false,
								why: 'He carries it in with control and the power play sets up. The squeeze from RW is wasted.'
							},
							{
								text: 'Leave him and cover their center in the middle',
								correct: false,
								why: 'LW already has the center. Leaving the puck carrier gives him a free walk into our zone.'
							}
						]
					}
				},
				ld: {
					drag: {
						target: { kind: 'ellipse', cx: 84, cy: 42, rx: 8, ry: 6 },
						correct:
							'Yes. In the middle a few strides behind RD, ready for a chip past him or a pass to the middle.',
						incorrect:
							'When RD steps up, the weak-side D slides to the middle, behind him. Staying wide on the left leaves the ice behind RD wide open.'
					}
				},
				rw: {
					decision: {
						prompt:
							'The puck went wide to their forward on your side. RD is stepping up at the blue line. You...',
						options: [
							{
								text: 'Turn and come back hard on his inside',
								correct: true,
								why: 'You squeeze him from behind while RD meets him from the front. He cannot turn back to the middle.'
							},
							{
								text: 'Stay high and watch',
								correct: false,
								why: 'RD is then alone with him, and if he beats RD there is nobody behind.'
							},
							{
								text: 'Skate to the middle to help LW with the center',
								correct: false,
								why: 'LW has the center. The puck is on your side, and the player who needs help is RD.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'RD gets his stick on the puck and pins the carrier on the boards. RW picks up the loose puck and [[clear|clears]] it hard down the ice into their end.',
			positions: {
				lw: { x: 98, y: 50 },
				rw: { x: 94, y: 74 },
				ld: { x: 84, y: 44 },
				rd: { x: 92, y: 80 },
				o1: { x: 118, y: 56 },
				o2: { x: 136, y: 32 },
				o3: { x: 96, y: 12 },
				o4: { x: 95, y: 83 },
				o5: { x: 102, y: 46 }
			},
			puck: { x: 95.5, y: 74 },
			puckCarrier: 'rw',
			arrows: [{ kind: 'pass', from: 'rw', to: { x: 180, y: 72 } }],
			roles: { lw: 'Middle', rw: 'Backchecker', ld: 'Cover', rd: 'Stand up' },
			notes: {
				lw: {
					where: 'In the middle of the neutral zone, still with their center.',
					read: 'Watch the clear. If it goes deep, head for the bench or start back up on the [[forecheck]].',
					why: 'After a clear the power play has to go all the way back and start over.'
				},
				rw: {
					where: 'Just inside the boards on the right side with the loose puck, short of the red line.',
					read: 'Glance up: their D is between you and their end, and their forward is still pinned. Fire it deep now.',
					why: 'Sending it deep makes them retrieve it and break out again, and all that time comes off the penalty. Most adult leagues let a team that is down a player ice it; check your league.'
				},
				ld: {
					where: 'In the middle just outside our blue line.',
					read: 'Watch the puck. Stay between it and our zone until it is gone.',
					why: 'If the clear is blocked, you are the last player back.'
				},
				rd: {
					where: 'On the right boards with the carrier pinned against them.',
					read: 'Keep him pinned until RW has the puck clear of him, then let go and get back.',
					why: 'Pinning him with your body position keeps him out of the play long enough for RW to clear it.'
				}
			},
			reads: {
				rw: [{ at: 'o1', label: 'Their D' }],
				rd: [{ at: 'o4' }],
				lw: [{ at: 'o5' }],
				ld: [{ at: 'rw' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt:
							'You pick up the loose puck near the right boards in the neutral zone. Their D is between you and their end. You...',
						options: [
							{
								text: 'Fire it hard down the ice into their end',
								correct: true,
								why: 'On a penalty kill, a long clear is the safe win. They go back and start the whole rush again.'
							},
							{
								text: 'Try to beat their D one-on-one',
								correct: false,
								why: 'You are a player short. Losing it at their D sends the power play right back at your net.'
							},
							{
								text: 'Pass it across the middle to LW',
								correct: false,
								why: 'Their center is right there. A cross-ice pass in the neutral zone is the easiest turnover to give up.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
