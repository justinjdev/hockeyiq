import type { Play } from '../../types';

const roles = { rd: 'D1', ld: 'D2', rw: 'Strong wing', lw: 'Weak wing' };

const play: Play = {
	id: 'bo-standard',
	title: 'Standard breakout',
	category: 'breakout',
	system: 'Standard (up the wall)',
	strength: '5v5',
	summary:
		'The bread-and-butter [[breakout]]: a D gets the puck behind the net, the [[strong-side]] winger sets up on the wall, the center swings low for [[support]], and the puck goes up the boards and out.',
	slots: [
		{ id: 'lw', home: 'LW' },
		{ id: 'c', home: 'C' },
		{ id: 'rw', home: 'RW' },
		{ id: 'ld', home: 'LD' },
		{ id: 'rd', home: 'RD' }
	],
	opponents: [
		{ id: 'o1', label: 'F1' },
		{ id: 'o2', label: 'F2' },
		{ id: 'o3', label: 'F3' },
		{ id: 'o4', label: 'D' },
		{ id: 'o5', label: 'D' }
	],
	keyConcepts: [],
	variations:
		'Coaches run this differently. Some want the center to swing low on the strong side every time; others let whichever forward is closest take the low spot. Against a hard [[forecheck]] on the wall, the D often [[reverse|reverses]] the puck to his partner instead of going up the boards. Some teams send the weak-side winger across the middle (a "slash") instead of staying wide. If nothing is open when the puck reaches the winger, the fallback is to "eat it": pin the puck on the boards and wait for help rather than throw it into the middle.',
	sources: [
		{
			title: 'Breakouts',
			publisher: 'Learn Ice Hockey (James Bloom)',
			url: 'https://learn-ice-hockey.com/systems/breakouts/'
		},
		{
			title: "'You have to process so much': The job starts on the wall for NHL wingers",
			publisher: 'theScore',
			url: 'https://www.thescore.com/nhl/news/2912350'
		},
	],
	steps: [
		{
			caption:
				'They dump the puck into our right corner. RD races back to get it while their [[f1|F1]] chases.',
			phase: 'retrieve',
			positions: {
				lw: { x: 54, y: 14 },
				c: { x: 44, y: 46 },
				rw: { x: 48, y: 72 },
				ld: { x: 26, y: 34 },
				rd: { x: 22, y: 52 },
				o1: { x: 32, y: 66 },
				o2: { x: 60, y: 30 },
				o3: { x: 82, y: 46 },
				o4: { x: 82, y: 24 },
				o5: { x: 80, y: 64 }
			},
			puck: { x: 8, y: 64 },
			arrows: [
				{ kind: 'skate', from: 'rd', to: { x: 7, y: 57 } },
				{ kind: 'skate', from: 'rw', to: { x: 38, y: 79 } },
				{ kind: 'skate', from: 'c', to: { x: 26, y: 42 } },
				{ kind: 'skate', from: 'ld', to: { x: 16, y: 26 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Coming back hard on the left side, heading for the left boards near the top of the left circle.',
					read: 'Watch the puck and RD. Once you see your D will get there first, you are the [[weak-side]] winger: your job is width and an outlet, not chasing the puck.',
					why: 'If all three forwards collapse on the puck, nobody is left to pass to when RD gets it.'
				},
				c: {
					where: 'Skating back through the middle toward the front of your own net.',
					read: 'Watch where the puck is going and where their [[f2|F2]] is. Aim to arrive low, in the middle, below the puck.',
					why: 'The center is the low [[support]] on the breakout. A center hanging at the red line leaves the D with no short pass.'
				},
				rw: {
					where: 'Racing back down the right boards toward the bottom of the right circle.',
					read: '[[shoulder-check|Shoulder check]] to see RD going back. The puck is on your side, so you are the [[strong-side]] winger.',
					why: 'The first pass usually comes up your wall. You need to be on the boards before the puck is, not arriving after it.'
				},
				ld: {
					where: 'Heading to the front of your net, then sliding to the left side of it, a step above the goal line.',
					read: 'Watch RD and their [[f2|F2]]. Talk to RD: tell him how much time he has ("time" or "man on").',
					why: 'The D who does not get the puck is the outlet for a [[d-to-d|D-to-D]] pass and the safety in front of the net if it goes wrong.'
				},
				rd: {
					where: 'Skating back to the puck in the right corner, angling to pick it up behind the net.',
					read: 'Before you touch the puck, [[shoulder-check|shoulder check]] both ways: where is [[f1|F1]] coming from, and where are your wingers?',
					why: 'Knowing the pressure before you get there decides the play. If you only look at the puck, F1 decides it for you.'
				}
			},
			reads: {
				rd: [{ at: 'o1', label: 'F1' }],
				ld: [{ at: 'o2', label: 'F2' }],
				rw: [{ at: 'rd' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'You are racing back for a dumped puck with [[f1|F1]] chasing you. Before you reach it, you...',
						options: [
							{
								text: '[[shoulder-check|Shoulder check]] both ways to see F1 and your outlets',
								correct: true,
								why: 'Two quick looks tell you which side F1 is coming from and who is open, so you can move the puck on your first touch.'
							},
							{
								text: 'Keep your eyes on the puck so you do not miss it',
								correct: false,
								why: 'You will get the puck, but with no idea where F1 is or who is open. F1 then decides the play for you.'
							},
							{
								text: 'Fire it around the boards the moment you reach it',
								correct: false,
								why: 'A blind [[rim]] often goes straight to their D or to nobody. Look first, then move it.'
							}
						]
					}
				},
				ld: {
					decision: {
						prompt: 'RD is going back for a dumped puck in the right corner. What do you do?',
						options: [
							{
								text: 'Go to the front of the net, slide to the left side of it, and talk to RD',
								correct: true,
								why: 'You give RD a [[d-to-d|D-to-D]] option, tell him what pressure is coming, and you are still the safety in front.'
							},
							{
								text: 'Follow RD into the corner to help win the puck',
								correct: false,
								why: 'Two D in one corner leaves the front of your net empty. One D gets the puck, the other is the outlet and the safety.'
							},
							{
								text: 'Head up to the blue line to get ready for a pass',
								correct: false,
								why: 'Too far. The D-to-D option needs you close, and if RD loses the puck you are 60 feet from your net.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'RD gets the puck behind the net. RW sets up on the wall, C swings low, and LW holds the far side ready to go.',
			phase: 'support',
			positions: {
				lw: { x: 40, y: 6 },
				c: { x: 26, y: 42 },
				rw: { x: 38, y: 79 },
				ld: { x: 16, y: 26 },
				rd: { x: 6, y: 57 },
				o1: { x: 13.5, y: 63.5 },
				o2: { x: 35.5, y: 29.5 },
				o3: { x: 67.5, y: 47.5 },
				o4: { x: 82, y: 24 },
				o5: { x: 80, y: 64 }
			},
			puck: { x: 7.5, y: 59 },
			puckCarrier: 'rd',
			arrows: [
				{ kind: 'pass', from: 'rd', to: { x: 38, y: 80 }, via: { x: 14, y: 78 } },
				{ kind: 'skate', from: 'c', to: { x: 42, y: 60 } }
			],
			roles,
			notes: {
				lw: {
					where: 'On the left boards near the top of the left circle, feet moving, facing the play.',
					read: 'Watch the puck behind the net. If it goes up the right wall, get ready to push up ice on your side. If RD [[reverse|reverses]] it to LD, the puck is coming up your wall.',
					why: 'You are an option for both sides. Too low and you clog your own zone; too high and LD has nobody to pass to if the play switches.'
				},
				c: {
					where: 'Low in the middle in front of the net, starting a curl toward the right side.',
					read: 'Read where RD is looking. If he is going up the right wall, swing underneath RW so you arrive inside him, just inside the faceoff dot, about 25 feet off the boards.',
					why: 'A low swing gives RD a short pass and gives RW someone to bump to. RD, RW and you form the [[triangle]] on the strong side.'
				},
				rw: {
					where: 'On the right boards between the faceoff dot and the top of the right circle, back to the boards, stick on the ice.',
					read: 'Look over your inside shoulder at RD and the puck, then check up ice for their D holding the blue line on your side. Know who is coming at you before the puck arrives.',
					why: 'From here RD can reach you along the boards. Standing on the wall with your stick down gives him a clear target.'
				},
				ld: {
					where: 'On the left side of the net, a step above the goal line and about 15 feet out toward the left boards.',
					read: 'Watch their [[f2|F2]]. He is sitting just above you, ready to jump you the moment RD [[reverse|reverses]] the puck your way. With F2 that close the [[d-to-d|D-to-D]] is not on, so tell RD "up!" to send it up the wall.',
					why: 'RD has F1 coming at him and cannot see the whole ice. You can, so you make the call, and you are the last player back if the pass gets picked off.'
				},
				rd: {
					where: 'Behind the net on the right side, with the puck.',
					read: '[[f1|F1]] is coming at you from the corner side, right in the line between you and RW, so a flat pass would hit him. F2 is sitting just above LD, ready to jump him on a [[reverse]]. Go around F1: [[rim]] it hard along the boards to RW.',
					why: 'A puck rimmed hard along the boards travels faster than F1 can turn and chase it. Holding it to stickhandle just lets him close on you.'
				}
			},
			reads: {
				rd: [
					{ at: 'o1', label: 'F1' },
					{ at: 'o2', label: 'F2' }
				],
				ld: [{ at: 'o2', label: 'F2' }],
				rw: [{ at: 'rd' }, { at: 'o5', label: 'Their D' }],
				c: [{ at: 'rd' }],
				lw: [{ at: 'rd' }]
			},
			quiz: {
				rw: {
					drag: {
						target: { kind: 'ellipse', cx: 38, cy: 78.5, rx: 9, ry: 5 },
						correct:
							'Yes. On the right boards between the dot and the top of the circle, RD can reach you along the wall and you have room to make a play.',
						incorrect:
							'The [[strong-side]] winger sets up on the right boards between the faceoff dot and the top of the circle. Too low and you are in F1\'s lap; too high and the pass from RD is too long.'
					}
				},
				rd: {
					decision: {
						prompt:
							'You have the puck behind the net. [[f1|F1]] is coming from the corner side, right in your passing lane to RW, and [[f2|F2]] is sitting just above LD. You...',
						options: [
							{
								text: '[[rim|Rim]] it hard up the right boards to RW',
								correct: true,
								why: 'F1 is in the direct lane, so a flat pass hits him. A hard rim along the boards goes around him and reaches RW at the top of the circle.'
							},
							{
								text: 'Pass it [[d-to-d|D-to-D]] to LD',
								correct: false,
								why: 'F2 is sitting right above LD and jumps him the moment the puck arrives. A turnover there is right in front of your own net.'
							},
							{
								text: 'Carry it out in front of the net',
								correct: false,
								why: 'F1 is right there. Losing the puck in front of your own net is the worst turnover you can make.'
							}
						]
					}
				},
				c: {
					decision: {
						prompt: 'RD has the puck behind the net and is looking up the right wall. Where do you go?',
						options: [
							{
								text: 'Swing low and curl toward the right boards, inside RW',
								correct: true,
								why: 'You arrive close enough for a short pass from RD or a bump from RW, already moving up ice.'
							},
							{
								text: 'Skate up to the red line for a long pass',
								correct: false,
								why: 'Too far ahead. The pass is long and easy to pick off, and RW has nobody to bump to. Stay low, below the puck.'
							},
							{
								text: 'Stand still in front of the net',
								correct: false,
								why: 'Right area, but with no speed. You would take the puck flat-footed while F2 and F3 close on you.'
							}
						]
					}
				},
				lw: {
					decision: {
						prompt:
							'The puck is behind your net on the right side. You are the [[weak-side]] winger. Where should you be?',
						options: [
							{
								text: 'On the left boards near the top of the circle, ready to push up ice',
								correct: true,
								why: 'You are an outlet if the puck comes around to your side and you are ready to stretch up ice if it goes up the right wall.'
							},
							{
								text: 'Down low in the left corner to help RD',
								correct: false,
								why: 'The puck is on the other side. Going low puts a fourth player deep in your own end and leaves no outlet up ice.'
							},
							{
								text: 'At the red line waiting for a [[stretch-pass]]',
								correct: false,
								why: 'Too early. A pass from behind your net to the red line is long and crosses the middle, and if the puck goes to LD he has nobody.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'RD [[rim|rims]] it hard up the right boards to RW. Their D on that side leaves the blue line and jumps down the wall to [[pinch]] on RW.',
			phase: 'first-pass',
			positions: {
				lw: { x: 62, y: 9 },
				c: { x: 42, y: 60 },
				rw: { x: 39, y: 79.5 },
				ld: { x: 16, y: 36 },
				rd: { x: 12, y: 54 },
				o1: { x: 24, y: 72 },
				o2: { x: 42, y: 38 },
				o3: { x: 68, y: 44 },
				o4: { x: 86, y: 28 },
				o5: { x: 60, y: 76 }
			},
			puck: { x: 40, y: 81.5 },
			puckCarrier: 'rw',
			arrows: [
				{ kind: 'pass', from: 'rw', to: { x: 76, y: 80 }, via: { x: 58, y: 84 } },
				{ kind: 'skate', from: 'c', to: { x: 84, y: 70 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Pushing up the left boards toward your blue line, staying wide.',
					read: 'Watch RW and their D on your side. If RW gets it out, you are the wide option in the [[neutral-zone|neutral zone]].',
					why: 'Stretching up ice pushes their other D back and opens room in the middle for C.'
				},
				c: {
					where: 'Curling with speed toward the right side, inside RW and the faceoff dot, about 25 feet off the boards.',
					read: 'Watch the puck on RW\'s stick and their D jumping down the wall. When that D comes down, the ice behind him is yours: skate into it.',
					why: 'Arriving with speed means you take a [[chip]] or a bump in stride and go, instead of waiting for it standing still.'
				},
				rw: {
					where: 'On the right boards near the top of the circle, with the puck arriving on your stick.',
					read: 'Their D is jumping down your wall at you, [[f1|F1]] is chasing from behind, and C is swinging into the open ice behind their D.',
					why: 'With two players closing, you will not have time to settle the puck. Make the play on your first touch.'
				},
				ld: {
					where: 'In front of the net, slightly to the left, between their forwards and your goal.',
					read: 'Watch [[f2|F2]] and [[f3|F3]] in the middle. If the puck turns over on the wall, you are the first defender.',
					why: 'Until the puck is out, one D stays home. Both D leaving early is how breakout turnovers become goals against.'
				},
				rd: {
					where: 'Stepping out from behind the net to the right post.',
					read: 'Watch RW. If he gets hit and the puck squirts loose, you are close enough to [[support]] down low.',
					why: 'From the post you are a safe option back down the wall and you are ready to follow the play up ice.'
				}
			},
			reads: {
				rw: [
					{ at: 'o5', label: 'Pinching D' },
					{ at: 'c' }
				],
				c: [{ at: { x: 72, y: 76 }, label: 'Open ice' }],
				ld: [{ at: 'o2', label: 'F2' }],
				lw: [{ at: 'o4' }],
				rd: [{ at: 'rw' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt:
							'The rim is coming to you. Their D is jumping down the wall at you, [[f1|F1]] is chasing from behind, and C is swinging into the open ice behind their D. You...',
						options: [
							{
								text: '[[chip|Chip]] it off the boards past their D for C to skate onto',
								correct: true,
								why: 'Their D left his spot to [[pinch]], so the ice behind him is empty and C is arriving with speed. One soft chip past the D beats both checkers.'
							},
							{
								text: 'Fire a pass across the ice to LW',
								correct: false,
								why: 'That pass goes through the middle of your own zone past F2 and F3. A pick-off there is a scoring chance against.'
							},
							{
								text: '[[rim|Rim]] it back down the boards to RD',
								correct: false,
								why: 'That sends the puck back into F1\'s pressure and undoes the breakout. Use it only when nothing forward is open.'
							},
							{
								text: 'Stop it and pin it on the boards until help arrives',
								correct: false,
								why: 'Pinning the puck ("eating it") is the fallback when nothing is open. Here C is open behind the pinch, so holding it gives up a clean exit.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'RW [[chip|chips]] it past the pinching D, C picks it up in stride, and the unit exits. If their D had stayed back, RW would bump it to C instead.',
			phase: 'exit',
			positions: {
				lw: { x: 104, y: 12 },
				c: { x: 84, y: 70 },
				rw: { x: 58, y: 80 },
				ld: { x: 44, y: 36 },
				rd: { x: 40, y: 54 },
				o1: { x: 34, y: 72 },
				o2: { x: 56, y: 42 },
				o3: { x: 96, y: 50 },
				o4: { x: 106, y: 30 },
				o5: { x: 64, y: 74 }
			},
			puck: { x: 86.5, y: 71 },
			puckCarrier: 'c',
			arrows: [
				{ kind: 'skate', from: 'c', to: { x: 124, y: 62 } },
				{ kind: 'skate', from: 'lw', to: { x: 138, y: 14 } },
				{ kind: 'skate', from: 'rw', to: { x: 96, y: 80 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Wide on the left side past the red line, skating with speed.',
					read: 'Look across at C with the puck and at their D on your side. Keep your stick on the ice, and stay level with or behind the puck at their blue line so you are not [[offside]].',
					why: 'A wide, fast LW gives C a second option and stops their D from collapsing on him.'
				},
				c: {
					where: 'Carrying the puck over your blue line through the right-middle lane at full speed.',
					read: 'Head up: count how many of theirs are between you and their net. Find LW wide and RW coming up behind you.',
					why: 'Getting the puck to a forward with speed is the point of the whole [[breakout]]. Their [[forecheck]] is now behind you.'
				},
				rw: {
					where: 'Off the wall after the chip, skating up the right side.',
					read: 'Check where their pinching D ended up. He is now behind the play, so join the rush on your wing.',
					why: 'Once the puck is out, the unit attacks together. Stopping to watch the chip leaves C alone.'
				},
				ld: {
					where: 'Following the play up to around the tops of the circles, left of the middle.',
					read: 'Watch C and their [[f3|F3]] coming back. Stay close enough to take a pass back if the forwards need to [[regroup]].',
					why: 'D who stay back too long leave a big hole between them and the forwards. Following up keeps the five of you connected.'
				},
				rd: {
					where: 'Following up the right side toward the top of the right circle.',
					read: 'Watch their [[f1|F1]], who is still chasing, and the puck. If it turns over, you are the first one back on that side.',
					why: 'You join the play but stay the deepest player on the right, ready to defend if the puck comes back.'
				}
			},
			reads: {
				c: [{ at: 'lw' }],
				lw: [{ at: 'o4', label: 'Their D' }],
				rw: [{ at: 'o5' }],
				ld: [{ at: 'o3', label: 'F3' }],
				rd: [{ at: 'o1', label: 'F1' }]
			}
		}
	]
};

export default play;
