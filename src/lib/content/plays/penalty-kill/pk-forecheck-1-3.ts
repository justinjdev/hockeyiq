import type { Play } from '../../types';

const play: Play = {
	id: 'pk-forecheck-1-3',
	title: 'PK forecheck: 1-3',
	category: 'penalty-kill',
	system: '1-3 (one forechecker, three across)',
	strength: '4v5',
	summary:
		'How a [[penalty-kill]] slows the power play down before it reaches your zone. One forward pressures in their end and steers the puck to one side. The other three line up across the ice near your blue line, so the puck carrier hits a wall and has to dump it in. Every second they spend getting back into your zone comes off the penalty.',
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
	keyConcepts: [],
	variations:
		'Coaches use different numbers for similar ideas. The 1-3 here (one forechecker, three across the line) is the most common passive shape in the NHL. A 2-2 (see the PK 2-2 play) uses two forecheckers and two D back. Some teams play a 1-1-2, with one forward pressuring deep and the second forward in a middle layer, which looks like a 5-on-5 [[forecheck]] with one player missing. Others play a retreating diamond whose back player is ready to chase down dump-ins. How far up the three-across line sits (your blue line or closer to the red line) also varies; the line in this play sits just outside your blue line. Be warned that a 1-3 can leave a lot of open ice if the forechecker is beaten or the line backs off too early.',
	sources: [
		{
			title: 'How the Bruins Penalty Killing Forecheck Works',
			publisher: 'Low Cycle (Shawn Ferris)',
			url: 'https://lowcycle.substack.com/p/how-the-bruins-penalty-killing-forecheck'
		},
		{
			title: 'Penalty Kill: Retreating Diamond Neutral Zone Forecheck',
			publisher: 'Hockey IQ Newsletter (Greg Revak)',
			url: 'https://hockeysarsenal.substack.com/p/penalty-kill-nz-retreating-diamond'
		},
		{
			title: "Film breakdown: Michigan's 2019-20 penalty kill",
			publisher: 'Fresh Ice (Bailey Johnson)',
			url: 'https://freshice.substack.com/p/film-breakdown-michigans-2019-20'
		}
	],
	steps: [
		{
			caption:
				'Their D has the puck behind their own net to start the power play [[breakout]]. LW is our one forechecker. RW, LD and RD line up across the ice just outside our blue line.',
			positions: {
				lw: { x: 162, y: 42 },
				rw: { x: 86, y: 44 },
				ld: { x: 84, y: 24 },
				rd: { x: 84, y: 62 },
				o1: { x: 194, y: 46 },
				o2: { x: 182, y: 22 },
				o3: { x: 168, y: 70 },
				o4: { x: 160, y: 14 },
				o5: { x: 150, y: 46 }
			},
			puck: { x: 194, y: 48 },
			puckCarrier: 'o1',
			arrows: [{ kind: 'skate', from: 'lw', to: { x: 176, y: 52 } }],
			roles: { lw: 'Forechecker', rw: 'Middle', ld: 'Left lane', rd: 'Right lane' },
			notes: {
				lw: {
					where: 'Skating into their zone through the middle, toward the front of their net.',
					read: 'Watch the D behind the net. Which way are his feet and eyes pointing? Curve your route so you come at him from the middle.',
					why: 'Coming from the middle lets you pick the side you push him to. Skating straight behind the net lets him go either way.'
				},
				rw: {
					where: 'In the middle of the ice just outside our blue line, level with LD and RD.',
					read: 'Watch the puck and their center swinging through the middle. Keep your stick on the ice in the middle lane.',
					why: 'The three-across line takes away the middle of the ice, so the only way through is wide along the boards.'
				},
				ld: {
					where: 'Left lane, just outside our blue line, halfway between the middle and the left boards.',
					read: 'Watch the puck and their forward on your side. Hold your line; do not drift back into our zone.',
					why: 'If the line holds at the blue line, they cannot carry the puck in cleanly and have to give it up with a dump.'
				},
				rd: {
					where: 'Right lane, just outside our blue line, halfway between the middle and the right boards.',
					read: 'Watch the puck and their forward on your side. Know your partner is beside you.',
					why: 'Same job as LD on your side. Three across with good spacing leaves no hole to skate through.'
				}
			},
			reads: {
				lw: [{ at: 'o1', label: 'Puck' }],
				rw: [{ at: 'o5', label: 'Swinging center' }],
				ld: [{ at: 'o4' }],
				rd: [{ at: 'o3' }]
			},
			quiz: {
				lw: {
					decision: {
						prompt:
							'You are the lone forechecker. Their D has the puck behind his own net. How do you go in?',
						options: [
							{
								text: 'Come through the middle and curl to push him up one side',
								correct: true,
								why: 'You choose where he goes. The three-across line then knows which side the puck is coming up.'
							},
							{
								text: 'Skate straight behind the net to steal it',
								correct: false,
								why: 'He just goes the other way around the net, and you are out of the play deep in their zone.'
							},
							{
								text: 'Stop at the red line and wait with the others',
								correct: false,
								why: 'Then nobody slows down their breakout, and they skate at your line with speed and options.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'LW comes from the middle and angles the D up the boards on our right side. The three across shift toward the puck while his forward sets up on the wall.',
			positions: {
				lw: { x: 172, y: 58 },
				rw: { x: 90, y: 50 },
				ld: { x: 88, y: 32 },
				rd: { x: 88, y: 64 },
				o1: { x: 176, y: 68 },
				o2: { x: 180, y: 32 },
				o3: { x: 152, y: 81 },
				o4: { x: 150, y: 20 },
				o5: { x: 140, y: 46 }
			},
			puck: { x: 175, y: 69.5 },
			puckCarrier: 'o1',
			arrows: [
				{ kind: 'pass', from: 'o1', to: { x: 153, y: 79.5 } },
				{ kind: 'skate', from: 'lw', to: { x: 165, y: 66 } }
			],
			roles: { lw: 'Forechecker', rw: 'Middle', ld: 'Left lane', rd: 'Right lane' },
			notes: {
				lw: {
					where: 'On the D\'s inside, between him and the middle of the ice, a stick length away.',
					read: 'Keep your stick in the lane to the middle. Let him have the pass up the wall; do not let him cut back.',
					why: 'You will not win the puck alone. Your job is to make their breakout predictable: one side, along the wall.'
				},
				rw: {
					where: 'Middle of the ice, sliding a few feet toward the puck side.',
					read: 'Watch the puck and their center. Stay between him and our zone.',
					why: 'Shifting with the puck keeps the middle closed and puts you closer to the side where the puck is coming.'
				},
				ld: {
					where: 'Left lane, sliding toward the middle as the puck goes to the other side.',
					read: 'Watch the puck and their forward on the far side. You are the [[weak-side]] lane now.',
					why: 'With the puck on the far side, you tighten toward the middle so there is no hole between you and RW.'
				},
				rd: {
					where: 'Right lane outside our blue line, on the puck side.',
					read: 'Watch the puck going up the wall to their forward. He is the player you will meet.',
					why: 'The puck is coming up your side. Get your feet set early so you can step up instead of backing in.'
				}
			},
			reads: {
				lw: [{ at: 'o1', label: 'Puck' }],
				rd: [{ at: 'o3', label: 'Wall forward' }],
				rw: [{ at: 'o5' }],
				ld: [{ at: 'o4' }]
			},
			quiz: {
				lw: {
					drag: {
						target: { kind: 'ellipse', cx: 171, cy: 58, rx: 6, ry: 5 },
						correct:
							'Yes. On his inside, between him and the middle, so his only way out is up the boards.',
						incorrect:
							'The forechecker stays on the puck carrier\'s inside, between him and the middle. Behind him or on the boards side, he can cut back through the middle.'
					}
				}
			}
		},
		{
			caption:
				'A few seconds later their forward has carried up the right boards to just outside our blue line. RD steps up to meet him with a tight [[gap]], RW covers the middle, LD drops back behind RD, and LW [[backcheck|backchecks]] on the inside.',
			positions: {
				lw: { x: 110, y: 62 },
				rw: { x: 84, y: 52 },
				ld: { x: 72, y: 44 },
				rd: { x: 81, y: 76 },
				o1: { x: 118, y: 64 },
				o2: { x: 135, y: 36 },
				o3: { x: 84, y: 81 },
				o4: { x: 92, y: 18 },
				o5: { x: 96, y: 46 }
			},
			puck: { x: 82.5, y: 80.5 },
			puckCarrier: 'o3',
			arrows: [
				{ kind: 'skate', from: 'rd', to: { x: 82, y: 78 } },
				{ kind: 'pass', from: 'o3', to: { x: 14, y: 74 }, via: { x: 50, y: 85 } }
			],
			roles: { lw: 'Backchecker', rw: 'Middle', ld: 'Cover', rd: 'Stand up' },
			notes: {
				lw: {
					where: 'Skating back hard through the neutral zone, on the inside of the puck carrier.',
					read: 'Watch the puck and their D trailing the play. Stay between them and the middle.',
					why: 'Coming back on the inside closes the space behind RD and takes away a drop pass to the trailer.'
				},
				rw: {
					where: 'Middle of the ice outside our blue line, between their center and our zone.',
					read: 'Watch their center. If the puck carrier tries to pass to the middle, your stick is in the lane.',
					why: 'With the middle closed and RD on the wall, the carrier has no clean way in. Dumping it in from the neutral zone, before he reaches our blue line, is his best choice.'
				},
				ld: {
					where: 'Dropping back to just inside our blue line, behind RD and toward the middle.',
					read: 'Watch RD and the puck. If RD steps up, you cover the ice behind him.',
					why: 'When one D steps up, the other covers behind. That way a chip past RD does not become a breakaway.'
				},
				rd: {
					where: 'Stepping up to the puck carrier on the right boards, just outside our blue line, a stick length away.',
					read: 'Watch his chest and the puck, not his head fakes. Stick on the puck, and angle him toward the boards.',
					why: 'Standing up at the line forces him to give up the puck with a dump. Backing in lets the power play walk into its setup.'
				}
			},
			reads: {
				rd: [{ at: 'o3', label: 'Puck carrier' }],
				rw: [{ at: 'o5', label: 'Center' }],
				ld: [{ at: 'rd' }],
				lw: [{ at: 'o1', label: 'Trailer' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'Their forward is carrying up your side toward our blue line. RW has the middle and LD is behind you. You...',
						options: [
							{
								text: 'Step up with a tight gap, stick on the puck, and angle him to the boards',
								correct: true,
								why: 'With support behind you and the middle closed, standing up forces a dump-in. That is the whole point of the 1-3.'
							},
							{
								text: 'Back into our zone and let him enter',
								correct: false,
								why: 'He walks in with control and the power play sets up. That throws away the time you were trying to take off the penalty.'
							},
							{
								text: 'Leave your lane and chase him toward the red line',
								correct: false,
								why: 'Chasing too far opens the ice behind you. You step up at the line, not halfway down the ice.'
							}
						]
					}
				},
				rw: {
					drag: {
						start: { x: 104, y: 38 },
						target: { kind: 'ellipse', cx: 84, cy: 51, rx: 8, ry: 6 },
						correct:
							'Yes. In the middle just outside the blue line, between their center and our zone, stick in the middle lane.',
						incorrect:
							'The middle player holds the middle of the line just outside the blue line. If you go to the wall to help RD, the middle opens for their center.'
					}
				}
			}
		},
		{
			caption:
				'He has to dump it in. A few seconds later LD, who was already back, gets to it first in our right corner and [[clear|clears]] it hard up the right boards before their forecheckers arrive.',
			positions: {
				lw: { x: 88, y: 58 },
				rw: { x: 50, y: 52 },
				ld: { x: 16, y: 70 },
				rd: { x: 20, y: 46 },
				o1: { x: 96, y: 64 },
				o2: { x: 102, y: 36 },
				o3: { x: 34, y: 66 },
				o4: { x: 70, y: 20 },
				o5: { x: 42, y: 46 }
			},
			puck: { x: 14.5, y: 72 },
			puckCarrier: 'ld',
			arrows: [{ kind: 'pass', from: 'ld', to: { x: 110, y: 82 }, via: { x: 55, y: 85 } }],
			roles: { lw: 'Backchecker', rw: 'Middle', ld: 'Retriever', rd: 'Net-front' },
			notes: {
				lw: {
					where: 'Near our blue line on the right side, coming back.',
					read: 'Watch the clear. If it gets out, look to change or go back on the [[forecheck]].',
					why: 'After a clear the cycle starts over: they have to go back and break out again.'
				},
				rw: {
					where: 'Back in the [[slot]], between their forecheckers and the net.',
					read: 'Watch the puck and their center chasing. If the clear gets stopped, you are the help.',
					why: 'Until the puck is out, a forward stays in the middle of our zone.'
				},
				ld: {
					where: 'In our right corner with the puck.',
					read: '[[shoulder-check|Shoulder check]] on the way in: their forward is a few strides behind. Do not stop to look for a pass; fire it up the boards.',
					why: 'On the [[penalty-kill]], a hard clear 200 feet down the ice is a win. A pretty pass that gets picked off is a goal against.'
				},
				rd: {
					where: 'In front of our net.',
					read: 'Watch the puck and their forwards arriving. Hold the front of the net until it is out.',
					why: 'If LD\'s clear is blocked, someone has to be in front of the goalie.'
				}
			},
			reads: {
				ld: [{ at: 'o3', label: 'Chasing' }],
				rd: [{ at: 'o5' }],
				rw: [{ at: 'o5' }],
				lw: [{ at: 'ld' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt:
							'You get to the dump-in first in the corner. Their forward is a few strides behind you. You...',
						options: [
							{
								text: 'Fire it hard up the boards and out of the zone',
								correct: true,
								why: 'A clear makes them go back 200 feet and start over. That is time off the penalty.'
							},
							{
								text: 'Stop behind the net and set up a breakout',
								correct: false,
								why: 'You are a player short with a forechecker right on you. Holding it is how penalty kills give up goals.'
							},
							{
								text: 'Pass it up the middle to RW',
								correct: false,
								why: 'Their center is in the middle. A turnover there is a shot from the [[slot]].'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
