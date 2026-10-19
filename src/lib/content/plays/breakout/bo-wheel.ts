import type { Play } from '../../types';

const roles = { rd: 'D1', ld: 'D2', lw: 'Strong wing', rw: 'Weak wing' };

const play: Play = {
	id: 'bo-wheel',
	title: 'Wheel breakout',
	category: 'breakout',
	system: 'Wheel (D carries it around the net)',
	strength: '5v5',
	summary:
		'When the D gets to the puck with a step on [[f1|F1]] and nobody is waiting on the far side, he skates it around the back of the net and up the other side. The net screens F1, and the D comes out with speed and his head up.',
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
	keyConcepts: ['shoulder-checks', 'f1-f2-f3'],
	variations:
		'The partner D usually calls it ("[[wheel]]!"). Some coaches teach him to stand at the front of the net so F1 cannot cut across; standing still there is allowed under NHL rules, but USA Hockey penalizes it as a protective screen, Hockey Canada and CARHA rules give no right to stand there and penalize impeding a player without the puck, and stepping into the [[forecheck|forechecker]]\'s path is interference everywhere. In rec hockey, get to the net front early as the safety, but do not park in the [[forecheck|forechecker]]\'s lane on purpose. The [[wheel]] is risky against a 2-1-2 [[forecheck]] that keeps a second [[forecheck|forechecker]] on the far side: if he is there, call a [[reverse]] instead. Coaches disagree on exactly where the wall winger sets up: this app uses the spot between the faceoff dot and the top of the circle, while some teach a lower spot between the [[hash-marks|hash marks]] and the goal line. Off a won faceoff in your own end, teams also run a set [[wheel]]: the center draws it back to the D, who [[wheel|wheels]] while the far winger releases up the wall.',
	sources: [
		{
			title: 'Breakouts',
			publisher: 'Learn Ice Hockey (James Bloom)',
			url: 'https://learn-ice-hockey.com/systems/breakouts/'
		},
		{
			title: 'Five breakout plays every hockey player should know',
			publisher: 'How To Hockey',
			url: 'https://howtohockey.com/five-breakout-plays-every-hockey-player-should-know/'
		}
	],
	steps: [
		{
			caption:
				'They [[rim]] it around and it stops behind our net, a little to the right. RD will get there well before their [[f1|F1]], who is coming from the right side. Their other forwards are hanging back.',
			phase: 'retrieve',
			positions: {
				lw: { x: 44, y: 12 },
				c: { x: 34, y: 44 },
				rw: { x: 44, y: 74 },
				ld: { x: 20, y: 36 },
				rd: { x: 18, y: 56 },
				o1: { x: 40, y: 64 },
				o2: { x: 58, y: 38 },
				o3: { x: 72, y: 54 },
				o4: { x: 84, y: 24 },
				o5: { x: 84, y: 62 }
			},
			puck: { x: 5, y: 49 },
			arrows: [
				{ kind: 'skate', from: 'rd', to: { x: 5, y: 46 }, via: { x: 8, y: 56 } },
				{ kind: 'skate', from: 'ld', to: { x: 16, y: 44 } },
				{ kind: 'skate', from: 'lw', to: { x: 38, y: 3.5 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Heading to the left boards near the top of the left circle.',
					read: 'Watch RD and [[f1|F1]]. If RD gets there clean with F1 coming from the right, he will likely bring it to your side.',
					why: 'A [[wheel]] needs a target on the far wall. Get there early and be ready.'
				},
				c: {
					where: 'Low in the middle, just above the crease.',
					read: 'Watch RD and which way he turns. Stay below the puck.',
					why: 'The center is the low [[support]]. Whichever side RD comes out, you can be there for a short pass.'
				},
				rw: {
					where: 'Coming back on the right side toward the top of the right circle.',
					read: 'Watch RD. If he turns away from your side, you become the [[weak-side]] winger.',
					why: 'Reading the D\'s first move early tells you whether to post up on the wall or push up ice.'
				},
				ld: {
					where: 'Heading to the front of the net.',
					read: 'Watch [[f1|F1]] and [[f2|F2]]. F1 is coming from the right and F2 is hanging back in the middle. Nobody is on the left side. Call "[[wheel|Wheel]]!"',
					why: 'You can see the whole [[forecheck]]; RD is facing the boards. Your call tells him which way is open.'
				},
				rd: {
					where: 'Racing back to the puck behind the net.',
					read: '[[shoulder-check|Shoulder check]] on the way: F1 is coming from the right side, and the left side is empty.',
					why: 'If you know where F1 is before you get there, you can pick it up in stride and keep going.'
				}
			},
			reads: {
				rd: [{ at: 'o1', label: 'F1' }],
				ld: [
					{ at: 'o1', label: 'F1' },
					{ at: 'o2', label: 'F2' }
				],
				lw: [{ at: 'rd' }],
				c: [{ at: 'rd' }],
				rw: [{ at: 'rd' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'You will get to the puck behind the net well before [[f1|F1]], who is coming from the right. Their other forwards are hanging back. LD calls "[[wheel|Wheel]]!" You...',
						options: [
							{
								text: 'Pick it up in stride and skate it around the net to the left side',
								correct: true,
								why: 'You have a step on F1 and the left side is empty. Keep your speed and let the net screen F1.'
							},
							{
								text: 'Stop behind the net and wait for help',
								correct: false,
								why: 'Stopping throws away the step you had. F1 arrives and the [[forecheck]] sets up.'
							},
							{
								text: '[[rim|Rim]] it hard up the right wall',
								correct: false,
								why: 'F1 is coming from the right side, so the rim heads straight at him. You had time to make a real play.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'RD picks it up and [[wheel|wheels]] around the net to the left side, staying tight to it. F1 has to go around the net to chase. LD holds the front of the net, LW waits on the left wall, and C curls low on the left.',
			phase: 'wheel',
			positions: {
				lw: { x: 38, y: 3.5 },
				c: { x: 26, y: 32 },
				rw: { x: 50, y: 64 },
				ld: { x: 16, y: 44 },
				rd: { x: 5, y: 35 },
				o1: { x: 10, y: 55 },
				o2: { x: 52, y: 34 },
				o3: { x: 68, y: 52 },
				o4: { x: 84, y: 24 },
				o5: { x: 84, y: 62 }
			},
			puck: { x: 6.5, y: 33.5 },
			puckCarrier: 'rd',
			arrows: [
				{ kind: 'skate', from: 'rd', to: { x: 24, y: 17 }, via: { x: 10, y: 22 } },
				{ kind: 'skate', from: 'c', to: { x: 34, y: 26 } },
				{ kind: 'skate', from: 'rw', to: { x: 66, y: 60 } }
			],
			roles,
			notes: {
				lw: {
					where: 'On the left boards between the faceoff dot and the top of the circle, back to the boards, stick on the ice.',
					read: 'Watch RD coming around the net toward you, then [[shoulder-check|shoulder check]] up ice for their D on your side.',
					why: 'You are RD\'s main target. Being set on the wall before he comes out lets him move it without slowing down.'
				},
				c: {
					where: 'Low on the left side of the [[slot]], curling toward the left.',
					read: 'Watch RD. Stay below him and inside LW so you are a short pass if [[f2|F2]] steps up.',
					why: 'RD, LW and you make the [[triangle]] on the left side. Without you, RD only has one option.'
				},
				rw: {
					where: 'Leaving the right wall and pushing up through the right side of the middle.',
					read: 'Watch RD and [[f3|F3]]. The puck is going away from you, so get up ice as the weak-side option.',
					why: 'You stretch their D and give the play a second option on the far side.'
				},
				ld: {
					where: 'Holding the front of the net, a little to the right.',
					read: 'Watch [[f1|F1]] and the puck. Be in front of the net as the safety, but stay out of F1\'s skating lane: do not step into his path or park there to screen him.',
					why: 'You are the safety if the [[wheel]] goes wrong. Screening or stepping into a player without the puck is a penalty in most rec rulebooks.'
				},
				rd: {
					where: 'Coming around the left side of the net with the puck, tight to the net.',
					read: 'Head up as you come out: where is [[f2|F2]]? Is LW open on the wall? Is C underneath?',
					why: 'Staying tight to the net keeps F1 behind it. Coming out with your head up lets you pick the open option at speed.'
				}
			},
			reads: {
				rd: [
					{ at: 'o2', label: 'F2' },
					{ at: 'lw' }
				],
				ld: [{ at: 'o1', label: 'F1' }],
				lw: [
					{ at: 'rd' },
					{ at: 'o4', label: 'Their D' }
				],
				c: [{ at: 'rd' }],
				rw: [{ at: 'o3', label: 'F3' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt: 'RD is [[wheel|wheeling]] around the net to the left side. [[f1|F1]] is chasing from the right. You...',
						options: [
							{
								text: 'Be in front of the net as the safety, staying out of F1\'s path',
								correct: true,
								why: 'You are the safety if the [[wheel]] goes wrong. Staying out of F1\'s lane keeps you from taking an interference or screening penalty.'
							},
							{
								text: 'Follow RD up the left side',
								correct: false,
								why: 'Both D on the left side leaves the front of your net empty if RD loses it.'
							},
							{
								text: 'Skate into F1 to slow him down',
								correct: false,
								why: 'Stepping into a player without the puck is interference. Stay out of his lane instead.'
							}
						]
					}
				},
				lw: {
					drag: {
						target: { kind: 'ellipse', cx: 38, cy: 5, rx: 9, ry: 5 },
						correct:
							'Yes. On the left boards between the dot and the top of the circle, back to the boards. RD comes out of the [[wheel]] right into your passing range.',
						incorrect:
							'When the D [[wheel|wheels]] to your side, set up on the boards between the faceoff dot and the top of the circle. Too low and you are in his way; too high and the pass is long.'
					}
				},
				rw: {
					decision: {
						prompt: 'RD picks up the puck and [[wheel|wheels]] around the net to the left side, away from you. You...',
						options: [
							{
								text: 'Push up ice on the right side as the weak-side option',
								correct: true,
								why: 'The puck is going the other way. Getting up ice gives the play width and pushes their D back.'
							},
							{
								text: 'Stay low on the right wall',
								correct: false,
								why: 'The puck is not coming to your wall now. Staying low takes you out of the play.'
							},
							{
								text: 'Skate across to the left corner to help',
								correct: false,
								why: 'That puts four players on one side and leaves nobody wide on the right.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'RD comes out the left side with speed. Their [[f2|F2]] steps up toward him, so RD moves it up the wall to LW before F2 can close.',
			phase: 'outlet',
			positions: {
				lw: { x: 44, y: 3.5 },
				c: { x: 34, y: 26 },
				rw: { x: 66, y: 60 },
				ld: { x: 18, y: 40 },
				rd: { x: 24, y: 17 },
				o1: { x: 10, y: 34 },
				o2: { x: 42, y: 24 },
				o3: { x: 66, y: 48 },
				o4: { x: 84, y: 22 },
				o5: { x: 84, y: 62 }
			},
			puck: { x: 25.5, y: 15.5 },
			puckCarrier: 'rd',
			arrows: [
				{ kind: 'pass', from: 'rd', to: { x: 44, y: 4 } },
				{ kind: 'skate', from: 'c', to: { x: 56, y: 22 } }
			],
			roles,
			notes: {
				lw: {
					where: 'On the left boards near the top of the circle, back to the boards, open to the puck.',
					read: 'Watch the pass from RD, then glance up ice: their D on your side is holding the blue line, so you have room.',
					why: 'Knowing you have room means you can take it with speed instead of just protecting it.'
				},
				c: {
					where: 'Inside LW, between the dot and the middle, about 25 feet off the boards.',
					read: 'Watch F2 stepping up toward RD. When he does, the middle behind him opens. Get into it with speed.',
					why: 'If LW gets pressured, you are the bump option already moving up ice.'
				},
				rw: {
					where: 'Pushing up the right side of the middle toward your blue line.',
					read: 'Watch the puck and their D on your side.',
					why: 'You are the wide option on the far side once the puck clears the zone.'
				},
				ld: {
					where: 'In front of the net, sliding a little to the left.',
					read: 'Watch [[f1|F1]], who is coming back around the net. Keep the puck side of the net covered.',
					why: 'Until the puck is out of the zone, one D stays home.'
				},
				rd: {
					where: 'Coming out the left side near the [[hash-marks|hash marks]] with the puck.',
					read: 'F2 is stepping up at you. LW is open on the wall above you and C is inside him.',
					why: 'Moving the puck before F2 arrives beats him with a pass instead of a one-on-one battle you might lose.'
				}
			},
			reads: {
				rd: [
					{ at: 'o2', label: 'F2' },
					{ at: 'lw' }
				],
				lw: [{ at: 'o4', label: 'Their D' }],
				c: [{ at: 'o2', label: 'F2' }],
				ld: [{ at: 'o1', label: 'F1' }],
				rw: [{ at: 'o5', label: 'Their D' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'You come out of the [[wheel]] on the left side. [[f2|F2]] is stepping up toward you. LW is open on the wall and C is inside him. You...',
						options: [
							{
								text: 'Pass it up the wall to LW before F2 gets to you',
								correct: true,
								why: 'The pass beats F2. LW has room because their D is holding the blue line.'
							},
							{
								text: 'Try to beat F2 one-on-one',
								correct: false,
								why: 'Lose that battle near the [[hash-marks|hash marks]] and it is a chance against. You have an open teammate; use him.'
							},
							{
								text: 'Pass across the middle of the zone to RW',
								correct: false,
								why: 'That pass crosses your own zone past F3. A pick-off there is a scoring chance against.'
							}
						]
					}
				},
				c: {
					decision: {
						prompt: 'RD is coming out of the [[wheel]] on the left side and F2 is stepping up at him. Where do you go?',
						options: [
							{
								text: 'Stay inside LW and move into the space behind F2',
								correct: true,
								why: 'F2 left the middle to pressure RD. You give LW a bump option in the space he left.'
							},
							{
								text: 'Fly up the middle to the red line',
								correct: false,
								why: 'Too far too early. If LW gets pressured, he has nobody to bump it to.'
							},
							{
								text: 'Go to the right side to help RW',
								correct: false,
								why: 'The puck is on the left. Leaving takes away the support RD and LW need.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'A couple of seconds later: their D held the blue line, so LW skated it out himself with C beside him in the middle and RW wide on the right. RD follows up the play.',
			phase: 'exit',
			positions: {
				lw: { x: 76, y: 8 },
				c: { x: 72, y: 28 },
				rw: { x: 90, y: 62 },
				ld: { x: 36, y: 40 },
				rd: { x: 46, y: 20 },
				o1: { x: 26, y: 40 },
				o2: { x: 52, y: 26 },
				o3: { x: 74, y: 48 },
				o4: { x: 96, y: 18 },
				o5: { x: 100, y: 56 }
			},
			puck: { x: 78, y: 9.5 },
			puckCarrier: 'lw',
			arrows: [
				{ kind: 'skate', from: 'lw', to: { x: 112, y: 10 } },
				{ kind: 'skate', from: 'c', to: { x: 110, y: 32 } },
				{ kind: 'skate', from: 'rw', to: { x: 122, y: 62 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Carrying the puck up the left wall over your blue line.',
					read: 'Head up: their D on your side is backing up. Find C in the middle and RW wide on the right.',
					why: 'You have speed and room. Carrying it forces their D to deal with you, which opens a pass to C.'
				},
				c: {
					where: 'In the middle lane, level with LW, skating hard.',
					read: 'Watch LW with the puck and their D. Stay level with or behind the puck at their blue line so you are not [[offside]].',
					why: 'Being level with LW gives him a pass option without either of you going offside.'
				},
				rw: {
					where: 'Wide on the right side near the red line.',
					read: 'Watch the puck and their D on your side.',
					why: 'Width on the far side stops their D from both sliding to the puck.'
				},
				ld: {
					where: 'Following the play up through the middle, a little behind RD.',
					read: 'Watch [[f1|F1]] and [[f3|F3]] behind and around the play. You are the last one back.',
					why: 'One D stays the deepest player in case the puck comes back the other way.'
				},
				rd: {
					where: 'Following up the left side after the pass.',
					read: 'Watch LW and F2. Stay close enough to take a pass back if the forwards need to [[regroup]].',
					why: 'Following up keeps the five of you connected.'
				}
			},
			reads: {
				lw: [
					{ at: 'c' },
					{ at: 'o4', label: 'Their D' }
				],
				c: [{ at: 'lw' }],
				rw: [{ at: 'o5', label: 'Their D' }],
				ld: [{ at: 'o1', label: 'F1' }],
				rd: [{ at: 'o2', label: 'F2' }]
			}
		}
	]
};

export default play;
