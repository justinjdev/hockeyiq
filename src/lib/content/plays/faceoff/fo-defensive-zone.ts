import type { Play } from '../../types';

const alignment = {
	lw: { x: 44, y: 51 },
	c: { x: 28, y: 64.5 },
	rw: { x: 28, y: 79.5 },
	ld: { x: 28, y: 49.5 },
	rd: { x: 15, y: 70 },
	o1: { x: 34, y: 64.5 },
	o2: { x: 34, y: 79.5 },
	o3: { x: 34, y: 49.5 },
	o4: { x: 68, y: 74 },
	o5: { x: 68, y: 30 }
};

const roles = {
	lw: 'Weak-side wing',
	c: 'Center',
	rw: 'Strong-side wing',
	ld: 'Net-side D',
	rd: 'Strong-side D'
};

const play: Play = {
	id: 'fo-defensive-zone',
	title: 'Defensive zone faceoff',
	category: 'faceoff',
	system: 'D-zone draw: center on center, D on wingers, wingers on points',
	strength: '5v5',
	summary:
		'A faceoff at the dot to the right of our goalie. Everyone has a job twice: once if we win the draw (get it back, get it up the wall, get out) and once if we lose it (find your player before the puck finds him). The common split: center takes their center, our D take their wingers, our wingers take their [[point|points]].',
	slots: [
		{ id: 'lw', home: 'LW' },
		{ id: 'c', home: 'C' },
		{ id: 'rw', home: 'RW' },
		{ id: 'ld', home: 'LD' },
		{ id: 'rd', home: 'RD' }
	],
	opponents: [
		{ id: 'o1', label: 'C' },
		{ id: 'o2', label: 'W' },
		{ id: 'o3', label: 'W' },
		{ id: 'o4', label: 'D' },
		{ id: 'o5', label: 'D' }
	],
	keyConcepts: ['strong-weak-side', 'shoulder-checks'],
	variations:
		'Alignments change with the center\'s plan and with how they line up. Some teams put the boards-side D on the hash mark and the winger behind the center instead; some line both D up beside the circle and keep both wingers high. If their winger lines up higher on the circle, a quick draw back to him for a shot is a threat, and our winger has a harder trip out to the point. Talk before the drop: the center usually calls where he is going with it ("win back", "[[tie-up|tie up]]") and the D call switches ("Switch!") if they swap players in a scramble. On the [[penalty-kill]] the plan changes: the center\'s first job is to win it or tie up their center.',
	sources: [
		{
			title: 'IHM Academy, Defensive Zone Coverage Lesson #5: D-Zone Faceoff Coverage & Responsibilities',
			publisher: 'IceHockeyMan (Coach Mark Lehtonen)',
			url: 'https://icehockeyman.com/2025/11/27/ihm-academy-defensive-zone-coverage-lesson-5/'
		},
		{
			title: 'Countering San Jose at the dot and how to recover from lost draws',
			publisher: 'LA Kings Insider',
			url: 'https://lakingsinsider.com/?p=81007'
		},
		{
			title: 'How to Win Faceoffs',
			publisher: 'Hockey Player Magazine (Bill Ferguson)',
			url: 'https://hockeyplayer.com/?p=1216'
		},
		{
			title: 'Defense zone face-offs',
			publisher: 'Hockey Player Magazine (Quint Randle)',
			url: 'https://hockeyplayer.com/?p=478'
		}
	],
	steps: [
		{
			caption:
				'Faceoff at the right dot in our zone. C takes the draw. RW lines up on the boards-side [[hash-marks|hash marks]], LD on the inside hash, RD behind C toward the corner, and LW high in the [[slot]]. Plan: win it back to RD.',
			phase: 'alignment',
			positions: { ...alignment },
			puck: { x: 31, y: 64.5 },
			arrows: [{ kind: 'pass', from: 'c', to: { x: 17, y: 71 } }],
			roles,
			notes: {
				lw: {
					where: 'High in the [[slot]], near the top of the circle on the inside, outside the circle line.',
					read: 'Watch the puck at the drop and their D at the far point. On a win, you are the weak-side outlet.',
					why: 'From here you are close to the middle if we lose it and only a few strides from getting open up the left side if we win it.'
				},
				c: {
					where: 'On the dot, facing their center, your back to our net.',
					read: 'Watch the linesman\'s hand and the puck. Plan to pull it back toward RD in the corner.',
					why: 'A clean win back to RD starts the [[breakout]] with nobody on him. If you cannot win it clean, [[tie-up|tie up]] their center so a teammate can get it.'
				},
				rw: {
					where: 'On the boards-side hash marks, across from their winger, stick on the ice.',
					read: 'Watch the drop. On a win, get to the boards above RD, back to the boards, open to the puck.',
					why: 'RD will look up the wall for you first. You need to beat their winger to that spot.'
				},
				ld: {
					where: 'On the inside hash marks, the net side of their winger.',
					read: 'Watch their winger, not just the puck. On a win, get to the front of the net.',
					why: 'You are the safety. Whatever happens, their inside winger wants to get to the net, and you are already between him and it.'
				},
				rd: {
					where: 'Behind C, between him and the corner, outside the circle.',
					read: 'Watch the puck and their boards-side winger. On a win, the puck comes to you first.',
					why: 'Lining up behind the draw puts you right where a won puck lands, so you can move it before their winger gets to you.'
				}
			},
			reads: {
				c: [{ at: 'o1', label: 'Their C' }],
				rw: [{ at: 'o2', label: 'Their W' }],
				ld: [{ at: 'o3', label: 'Their W' }],
				rd: [{ at: 'o2' }],
				lw: [{ at: 'o5', label: 'Far point' }]
			},
			quiz: {
				c: {
					decision: {
						prompt: 'You are taking a D-zone draw. You cannot win it clean. What do you do?',
						options: [
							{
								text: '[[tie-up|Tie up]] their center\'s stick and body so a teammate can get to the puck',
								correct: true,
								why: 'A tie-up turns a lost draw into a loose puck, and your wingers and D are lined up to get it.'
							},
							{
								text: 'Chase the puck wherever it goes',
								correct: false,
								why: 'Their center is then free in front of your net for a [[tip]] or rebound. Win, lose or tie, you stay with him.'
							},
							{
								text: 'Swipe at it forward toward the blue line',
								correct: false,
								why: 'That sends the puck right toward their D at the point for a shot.'
							}
						]
					}
				},
				lw: {
					drag: {
						start: { x: 60, y: 40 },
						target: { kind: 'ellipse', cx: 44, cy: 51, rx: 7, ry: 6 },
						correct:
							'Yes. High in the [[slot]] just outside the circle: close to the middle if we lose, ready to get open if we win.',
						incorrect:
							'The weak-side winger lines up high in the [[slot]], near the top of the circle on the inside. Out at the far point you leave the [[slot]] empty if we lose the draw.'
					}
				}
			}
		},
		{
			caption:
				'C wins it back to RD. RW gets to the boards above him, LD goes to the front of the net, and LW starts to get open on the weak side. C stays with their center.',
			phase: 'win',
			positions: {
				lw: { x: 44, y: 40 },
				c: { x: 29, y: 61 },
				rw: { x: 38, y: 81 },
				ld: { x: 19, y: 40 },
				rd: { x: 14, y: 71 },
				o1: { x: 33, y: 60 },
				o2: { x: 33, y: 73 },
				o3: { x: 26, y: 53 },
				o4: { x: 66, y: 74 },
				o5: { x: 68, y: 32 }
			},
			puck: { x: 15.5, y: 71.5 },
			puckCarrier: 'rd',
			arrows: [{ kind: 'pass', from: 'rd', to: { x: 37, y: 80.5 } }],
			roles,
			notes: {
				lw: {
					where: 'Moving out of the [[slot]] toward the left side, above the left circle.',
					read: 'Watch RD and the puck, and know where their far D is.',
					why: 'If the wall gets jammed, RD or C needs a second option. You are it.'
				},
				c: {
					where: 'Still beside their center, on his net side.',
					read: 'Keep him from jumping to the puck. Once RD has moved it, release and swing to support.',
					why: 'A center who leaves early lets their center race RD for the puck. Your few seconds on him are what give RD time.'
				},
				rw: {
					where: 'On the right boards above the circle, back to the boards, open to RD.',
					read: 'Look over your inside shoulder at RD, then up ice for their D on your side.',
					why: 'Beating their winger to the wall gives RD an easy first pass and starts the breakout.'
				},
				ld: {
					where: 'In front of the net, slightly to the left of the crease.',
					read: 'Watch their inside winger and the puck. Talk to RD: "time" or "man on".',
					why: 'On a win you are the safety. If RD\'s pass is picked off, you are in front of the net.'
				},
				rd: {
					where: 'In the corner below the circle with the puck.',
					read: '[[shoulder-check|Shoulder check]]: where is their boards winger? RW is open on the wall above you.',
					why: 'The faceoff win only matters if you move it fast. Their winger is coming; get it up the wall before he arrives.'
				}
			},
			reads: {
				rd: [{ at: 'rw' }, { at: 'o2', label: 'Their W' }],
				rw: [{ at: 'rd' }, { at: 'o4', label: 'Their D' }],
				c: [{ at: 'o1' }],
				ld: [{ at: 'o3' }],
				lw: [{ at: 'o5' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'C wins the draw back to you in the corner. Their boards winger is a couple of strides away and RW is on the wall above you. You...',
						options: [
							{
								text: 'Move it right away up the wall to RW',
								correct: true,
								why: 'RW beat his man to the wall, so the pass is open now. In a second their winger will be on you.'
							},
							{
								text: 'Carry it behind the net to look for something better',
								correct: false,
								why: 'You give their winger time to catch you behind your own net. The quick pass is there now.'
							},
							{
								text: 'Fire it up the middle to LW',
								correct: false,
								why: 'A pass through the middle of your own zone with their center and winger there is the worst turnover you can make.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'Their D comes down the wall at RW, so RW bumps it to C, who has released from their center and is swinging into open ice. We are out.',
			phase: 'win',
			positions: {
				lw: { x: 56, y: 30 },
				c: { x: 48, y: 66 },
				rw: { x: 38, y: 81 },
				ld: { x: 20, y: 46 },
				rd: { x: 16, y: 60 },
				o1: { x: 36, y: 61 },
				o2: { x: 30, y: 74 },
				o3: { x: 24, y: 51 },
				o4: { x: 56, y: 78 },
				o5: { x: 68, y: 34 }
			},
			puck: { x: 39.5, y: 80.5 },
			puckCarrier: 'rw',
			arrows: [
				{ kind: 'pass', from: 'rw', to: { x: 48, y: 66 } },
				{ kind: 'skate', from: 'c', to: { x: 66, y: 60 } },
				{ kind: 'skate', from: 'lw', to: { x: 80, y: 24 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Up the left side near our blue line.',
					read: 'Watch C with the puck. Stay wide and onside as you go.',
					why: 'A wide option keeps their far D honest so C has room in the middle.'
				},
				c: {
					where: 'Swinging through the right side of the [[slot]], toward the top of the circle, with speed.',
					read: 'Watch RW and their D coming down the wall. The space he leaves behind him is yours.',
					why: 'You held their center long enough. Now you are the [[support]] that turns a win into a clean exit.'
				},
				rw: {
					where: 'On the right boards with the puck, back to the boards.',
					read: 'Their D is coming down at you. C is open inside you.',
					why: 'One quick bump beats his pressure. Holding it lets him pin you on the boards.'
				},
				ld: {
					where: 'In front of the net.',
					read: 'Watch their inside winger until the puck is out.',
					why: 'One D stays home until the zone is clear.'
				},
				rd: {
					where: 'Out from the corner to the right post.',
					read: 'Watch the play up the wall. If it turns over, you are close enough to help.',
					why: 'From the post you are safe and ready to follow the play up ice.'
				}
			},
			reads: {
				rw: [{ at: 'c' }, { at: 'o4', label: 'Their D' }],
				c: [{ at: 'rw' }],
				lw: [{ at: 'o5' }],
				ld: [{ at: 'o3' }],
				rd: [{ at: 'rw' }]
			}
		},
		{
			caption:
				'Same faceoff again. This time watch the jobs if we LOSE the draw: find your player before the puck finds him.',
			phase: 'alignment-loss',
			positions: { ...alignment },
			puck: { x: 31, y: 64.5 },
			arrows: [],
			roles,
			notes: {
				lw: {
					where: 'High in the [[slot]], near the top of the circle on the inside.',
					read: 'Watch the puck. On a loss, stay in the middle first, then go out to their far point once the [[slot]] is covered.',
					why: 'Collapse first, then go out. Jumping to the point early opens the [[slot]], the worst place to give up.'
				},
				c: {
					where: 'On the dot, facing their center.',
					read: 'Whatever happens to the puck, you stay with their center.',
					why: 'If you chase a lost puck, their center is free in front of our net.'
				},
				rw: {
					where: 'On the boards-side hash marks.',
					read: 'Watch the puck. If it goes back to their D at the point, you go out at him.',
					why: 'Our wingers take their point men. You are closest to the strong-side point.'
				},
				ld: {
					where: 'On the inside hash marks, the net side of their winger.',
					read: 'Watch their inside winger. On a loss, he goes to the net, and so do you, on his inside.',
					why: 'You take their inside winger. Staying on his net side keeps him from a [[screen]] or a tip.'
				},
				rd: {
					where: 'Behind C, toward the corner.',
					read: 'Watch their boards winger. On a loss, he is your player.',
					why: 'RW is heading out to the point, so their boards winger is yours. Our D take their wingers.'
				}
			},
			reads: {
				rw: [{ at: 'o4', label: 'Your point' }],
				lw: [{ at: 'o5', label: 'Far point' }],
				ld: [{ at: 'o3' }],
				rd: [{ at: 'o2' }],
				c: [{ at: 'o1' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt:
							'You are on the boards-side hash. We lose the draw and the puck goes back to their D at the point on your side. You...',
						options: [
							{
								text: 'Go straight out at him and get in his shooting lane',
								correct: true,
								why: 'Our wingers take their point men. You are closest, and a point shot with traffic in front is a real chance.'
							},
							{
								text: 'Stay with their winger on the boards',
								correct: false,
								why: 'RD picks up their boards winger on a loss. If you stay, their D gets a free shot.'
							},
							{
								text: 'Drop down to the front of the net',
								correct: false,
								why: 'The D already have the front. The point man shoots with nobody in his lane.'
							}
						]
					}
				},
				ld: {
					decision: {
						prompt: 'We lose the draw. Their winger on the inside hash heads for the net. You...',
						options: [
							{
								text: 'Go with him, staying on his inside between him and the goalie, and take his stick',
								correct: true,
								why: 'Our D take their wingers. Staying on his inside stops a screen, a tip or a rebound.'
							},
							{
								text: 'Go out to the point to block the shot',
								correct: false,
								why: 'That is the wingers\' job. If you leave, their winger is alone in front of our goalie.'
							},
							{
								text: 'Chase the puck to the point',
								correct: false,
								why: 'Chasing the puck leaves their most dangerous player, the one in front, completely free.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'Their center wins it back to their D at the right point. RW goes out into his shooting lane, C stays with their center, our D pick up their wingers, and LW holds the [[slot]].',
			phase: 'loss',
			positions: {
				lw: { x: 42, y: 48 },
				c: { x: 32, y: 57 },
				rw: { x: 54, y: 67.5 },
				ld: { x: 19, y: 45 },
				rd: { x: 24, y: 71 },
				o1: { x: 36, y: 59 },
				o2: { x: 30, y: 76 },
				o3: { x: 24, y: 48 },
				o4: { x: 62, y: 72 },
				o5: { x: 68, y: 30 }
			},
			puck: { x: 60.5, y: 72 },
			puckCarrier: 'o4',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 56, y: 68.5 } },
				{ kind: 'pass', from: 'o4', to: { x: 67, y: 33 } }
			],
			roles,
			notes: {
				lw: {
					where: 'In the [[high-slot|high slot]], between their far D and the net.',
					read: 'Watch the puck carrier and their far D. If they go [[d-to-d|D-to-D]], you go out as the puck travels.',
					why: 'Holding the [[slot]] first means a quick pass to the middle never gets through. Then you can go out.'
				},
				c: {
					where: 'Beside their center on his net side, in the [[slot]].',
					read: 'Keep your stick and body between him and the net. Do not turn to chase the puck.',
					why: 'Their center in the [[slot]] is more dangerous than the puck at the point.'
				},
				rw: {
					where: 'Closing on their right point, square to him, in his shooting lane.',
					read: 'Watch the puck on his stick and whether he looks across to his partner.',
					why: 'You take away his shot. A point shot with traffic in front is how D-zone faceoff losses become goals.'
				},
				ld: {
					where: 'In front of the net, on the inside of their winger.',
					read: 'Find his stick and keep yours on it.',
					why: 'He wants to [[screen]] and tip. You make sure he cannot do either.'
				},
				rd: {
					where: 'Below the circle near the boards, between their boards winger and the net.',
					read: 'Watch their winger and the puck. Do not chase behind the net.',
					why: 'Our D take their wingers. Staying on his net side keeps him from cutting to the post.'
				}
			},
			reads: {
				rw: [{ at: 'o4', label: 'Shooter' }],
				lw: [{ at: 'o5', label: 'Far D' }],
				c: [{ at: 'o1' }],
				ld: [{ at: 'o3' }],
				rd: [{ at: 'o2' }]
			}
		},
		{
			caption:
				'They pass across to the other point. With the [[slot]] covered, LW steps out into that shooter\'s lane. Everyone else keeps his player.',
			phase: 'loss',
			positions: {
				lw: { x: 58, y: 34 },
				c: { x: 30, y: 52 },
				rw: { x: 50, y: 64 },
				ld: { x: 19, y: 44 },
				rd: { x: 23, y: 67 },
				o1: { x: 35, y: 54 },
				o2: { x: 29, y: 72 },
				o3: { x: 23, y: 47 },
				o4: { x: 64, y: 70 },
				o5: { x: 68, y: 32 }
			},
			puck: { x: 66.5, y: 32.5 },
			puckCarrier: 'o5',
			arrows: [{ kind: 'skate', from: 'lw', to: { x: 61, y: 33.5 } }],
			roles,
			notes: {
				lw: {
					where: 'Out in front of their left point, square to him, in his shooting lane.',
					read: 'Watch the puck on his stick. Stick on the ice in the lane.',
					why: 'You held the middle until the pass was made, then closed on him as it travelled. That is "collapse, then go out".'
				},
				c: {
					where: 'Still with their center in the [[slot]], on his net side.',
					read: 'Keep him in front of you and know where the puck is.',
					why: 'You never left him, so the pass across did not open the [[slot]].'
				},
				rw: {
					where: 'Dropping back from their right point toward the top of the circle.',
					read: 'Watch the puck and your point man. If it comes back to him, you go out again.',
					why: 'Halfway between your point and the [[slot]] keeps you close to both.'
				},
				ld: {
					where: 'In front of the net, inside their winger.',
					read: 'Find his stick. A shot from the left point is coming.',
					why: 'Your job did not change: no screen, no tip.'
				},
				rd: {
					where: 'Low on the right side, between their boards winger and the net.',
					read: 'Watch their winger and the rebound.',
					why: 'Rebounds kick out to the side of the net; you are there.'
				}
			},
			reads: {
				lw: [{ at: 'o5', label: 'Shooter' }],
				rw: [{ at: 'o4' }],
				c: [{ at: 'o1' }],
				ld: [{ at: 'o3' }],
				rd: [{ at: 'o2' }]
			},
			quiz: {
				lw: {
					decision: {
						prompt:
							'We lost the draw. You held the [[slot]], and now they pass [[d-to-d|D-to-D]] to the point on your side. You...',
						options: [
							{
								text: 'Close on him as the pass travels and get in his shooting lane',
								correct: true,
								why: 'The [[slot]] is covered by C and the D, so now you go out. Closing while the puck travels takes his time away.'
							},
							{
								text: 'Stay in the [[slot]]',
								correct: false,
								why: 'Holding the [[slot]] was right first, but now he has a free shot with nobody in his lane.'
							},
							{
								text: 'Go cover their center',
								correct: false,
								why: 'C already has him. Two on one player leaves the shooter alone.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
