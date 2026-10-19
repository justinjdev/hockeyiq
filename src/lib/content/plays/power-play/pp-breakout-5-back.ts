import type { Play } from '../../types';

const roles = { ld: 'Carrier', lw: 'Left swing', c: 'Middle swing', rw: 'Right swing', rd: 'Trailer' };

const play: Play = {
	id: 'pp-breakout-5-back',
	title: 'Power play breakout: 5 back',
	category: 'power-play',
	system: '5-back swing breakout',
	strength: '5v4',
	summary:
		'All five players come back into our end, then leave together. LD waits behind the net with the puck until the three forwards are curling up ice with speed, then skates out and passes to whoever their first [[forecheck|forechecker]] leaves open, in stride. Five players moving at once give one forechecker too many options to take away.',
	slots: [
		{ id: 'lw', home: 'LW' },
		{ id: 'c', home: 'C' },
		{ id: 'rw', home: 'RW' },
		{ id: 'ld', home: 'LD' },
		{ id: 'rd', home: 'RD' }
	],
	opponents: [
		{ id: 'o1', label: 'F1' },
		{ id: 'o2', label: 'F' },
		{ id: 'o3', label: 'D' },
		{ id: 'o4', label: 'D' }
	],
	keyConcepts: ['passing-lanes'],
	variations:
		'Some teams call this the five-man swing. The carrier is usually the unit\'s best puck-moving D, but it can be a forward. If their [[forecheck|forechecker]] takes away the wall, the pass goes to the middle forward; if he takes the middle, it goes up the wall; if he sits back, the carrier skates it up himself. Against a hard forecheck many teams switch to a [[drop-pass]] [[breakout]] instead, or use a [[d-to-d|D-to-D]] pass to change the angle. Now and then a lane opens straight up the middle for a [[stretch-pass]], but that works once or twice a game before the other team adjusts.',
	sources: [
		{
			title: "Watching Rocky Thompson's PP Breakouts with an NHL Coach",
			publisher: 'San Jose Hockey Now',
			url: 'https://sanjosehockeynow.com/rocky-thompson-chicago-wolves-san-jose-sharks-power-play-breakout/'
		},
		{
			title: 'Power Play: Breakout',
			publisher: 'Weiss Tech Hockey',
			url: 'https://weisstechhockey.com/power-play-breakout/'
		}
	],
	steps: [
		{
			id: 'set',
			caption:
				'LD has the puck behind our net. All three forwards and RD are back in our end. Their [[forecheck|forechecker]] waits at the top of our zone, and the other three wait near the red line.',
			phase: 'set',
			positions: {
				lw: { x: 24, y: 22 },
				c: { x: 28, y: 40 },
				rw: { x: 26, y: 64 },
				ld: { x: 3, y: 44 },
				rd: { x: 13, y: 50 },
				o1: { x: 58, y: 42 },
				o2: { x: 102, y: 16 },
				o3: { x: 98, y: 42 },
				o4: { x: 102, y: 68 }
			},
			puck: { x: 4.5, y: 43 },
			puckCarrier: 'ld',
			arrows: [
				{ kind: 'skate', from: 'lw', to: { x: 42, y: 7 } },
				{ kind: 'skate', from: 'c', to: { x: 42, y: 50 } },
				{ kind: 'skate', from: 'rw', to: { x: 44, y: 77 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Low in the left circle, stopped or gliding, facing up ice.',
					read: 'Watch LD. When he nods or calls "go", curl up the left boards.',
					why: 'Starting low means you get the puck already skating, not standing still at the blue line.'
				},
				c: {
					where: 'In the slot in front of our net.',
					read: 'Watch LD and their [[forecheck|forechecker]]. You will swing up through the middle, a little to the right.',
					why: 'The middle swing is the hardest one for the [[forecheck|forechecker]] to cover while he also watches LD.'
				},
				rw: {
					where: 'Low in the right circle.',
					read: 'Watch LD. When the group goes, curl up the right boards.',
					why: 'Three forwards curling at once means three lanes for LD to pass into.'
				},
				ld: {
					where: 'Behind our net with the puck, standing still.',
					read: 'Check that all four teammates are back and set. Look at their [[forecheck|forechecker]]: is he coming in, or waiting?',
					why: 'The swing works because everyone leaves together. If you go before they are ready, you are alone.'
				},
				rd: {
					where: 'Beside the right post.',
					read: 'Watch LD and their [[forecheck|forechecker]]. Call out if he comes in on LD.',
					why: 'You are LD\'s safety and the [[d-to-d|D-to-D]] option if the [[forecheck|forechecker]] comes hard.'
				}
			},
			reads: {
				ld: [{ at: 'o1', label: 'F1' }],
				rd: [{ at: 'o1', label: 'F1' }],
				c: [{ at: 'ld' }],
				lw: [{ at: 'ld' }],
				rw: [{ at: 'ld' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt: 'You have the puck behind our net to start the 5-back [[breakout]]. Your three forwards are still standing low in our end. You...',
						options: [
							{
								text: 'Wait until all three are curling up ice with speed, then go',
								correct: true,
								why: 'The whole idea is five players moving at once. Their [[forecheck|forechecker]] cannot cover three skating lanes and you.'
							},
							{
								text: 'Skate it out right away before the [[forecheck|forechecker]] comes',
								correct: false,
								why: 'You would be alone against their [[forecheck|forechecker]] with your forwards still standing still. On the power play you have time to wait.'
							},
							{
								text: 'Fire it up to the red line',
								correct: false,
								why: 'Nobody is there. You just give the puck back and the penalty killers use up more of the clock.'
							}
						]
					}
				}
			}
		},
		{
			id: 'swing',
			caption:
				'Everyone goes together. LD steps out on the left side, the three forwards curl up ice, and RD follows on the right. Their [[forecheck|forechecker]] comes at LD.',
			phase: 'swing',
			positions: {
				lw: { x: 44, y: 5 },
				c: { x: 42, y: 50 },
				rw: { x: 44, y: 78 },
				ld: { x: 18, y: 30 },
				rd: { x: 28, y: 62 },
				o1: { x: 42, y: 36 },
				o2: { x: 100, y: 16 },
				o3: { x: 96, y: 42 },
				o4: { x: 100, y: 68 }
			},
			puck: { x: 19.5, y: 31.5 },
			puckCarrier: 'ld',
			arrows: [
				{ kind: 'skate', from: 'ld', to: { x: 26, y: 24 } },
				{ kind: 'skate', from: 'lw', to: { x: 60, y: 5 } },
				{ kind: 'skate', from: 'c', to: { x: 56, y: 46 } },
				{ kind: 'skate', from: 'rw', to: { x: 60, y: 78 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Curling up the left boards, near the top of our left circle.',
					read: 'Look back at LD as you skate. Stick on the ice, ready for a pass in stride.',
					why: 'You are the closest option to LD. A pass up the wall is short and quick.'
				},
				c: {
					where: 'Swinging up through the middle, just right of center.',
					read: 'Watch LD and their [[forecheck|forechecker]]. If the forechecker stays wide, the middle is yours.',
					why: 'A pass to the middle forward with speed is the most dangerous [[breakout]], so the [[forecheck|forechecker]] has to respect it.'
				},
				rw: {
					where: 'Curling up the right boards.',
					read: 'Watch LD and their D on your side. Stay wide.',
					why: 'Even if you do not get the puck, your width spreads their three penalty killers apart.'
				},
				ld: {
					where: 'Stepping out from behind the net on the left side with the puck.',
					read: 'Their [[forecheck|forechecker]] is coming at you from the middle. Which lane is he taking away, and which is he leaving?',
					why: 'He can only take away one lane. Your job is to see which one he picks and use another.'
				},
				rd: {
					where: 'Moving up the right side behind RW.',
					read: 'Watch LD. If the [[forecheck|forechecker]] gets to him, you are the pass across.',
					why: 'A D-to-D option makes the [[forecheck|forechecker]] think twice about going all-in on LD.'
				}
			},
			reads: {
				ld: [{ at: 'o1', label: 'F1' }],
				c: [{ at: 'o1' }],
				lw: [{ at: 'ld' }],
				rw: [{ at: 'o4' }],
				rd: [{ at: 'ld' }]
			},
			quiz: {
				c: {
					drag: {
						target: { kind: 'ellipse', cx: 42, cy: 50, rx: 9, ry: 6 },
						correct: 'Yes. Swinging up through the middle, a little to the right, you are a passing lane the [[forecheck|forechecker]] cannot cover while he chases LD.',
						incorrect: 'The middle forward swings up through the center of our zone, a little to the far side of LD, with speed.'
					}
				},
				rd: {
					decision: {
						prompt: 'LD steps out on the left and the three forwards are curling up ice. You are RD. You...',
						options: [
							{
								text: 'Follow up the right side a few strides behind, ready for a pass across from LD',
								correct: true,
								why: 'You give LD a [[d-to-d|D-to-D]] option if the [[forecheck|forechecker]] gets close, and you stay behind the forwards as the safety.'
							},
							{
								text: 'Stay planted in front of our net',
								correct: false,
								why: 'The puck is leaving our end. Staying back leaves a big gap between you and the play.'
							},
							{
								text: 'Race ahead of the forwards to their blue line',
								correct: false,
								why: 'Then nobody is back, and you cannot be a pass option for LD from up there.'
							}
						]
					}
				}
			}
		},
		{
			id: 'pass',
			caption:
				'Their [[forecheck|forechecker]] cuts across from the middle at LD and takes away the pass to C. That leaves LW open up the left boards.',
			phase: 'pass',
			positions: {
				lw: { x: 60, y: 5 },
				c: { x: 56, y: 46 },
				rw: { x: 60, y: 78 },
				ld: { x: 26, y: 24 },
				rd: { x: 40, y: 62 },
				o1: { x: 34, y: 30 },
				o2: { x: 102, y: 16 },
				o3: { x: 96, y: 42 },
				o4: { x: 102, y: 68 }
			},
			puck: { x: 27.5, y: 23 },
			puckCarrier: 'ld',
			arrows: [{ kind: 'pass', from: 'ld', to: { x: 62, y: 6 } }],
			roles,
			notes: {
				lw: {
					where: 'On the left boards near our blue line, skating up ice, back to the boards and open to LD.',
					read: 'Nobody is near you. Show LD your stick and expect the pass.',
					why: 'Their [[forecheck|forechecker]] chose the middle, so the wall is the open lane.'
				},
				c: {
					where: 'In the middle near our blue line, with speed.',
					read: 'The [[forecheck|forechecker]] is in the lane between you and LD. Keep skating so you are ready for a pass from LW next.',
					why: 'Even when you do not get the first pass, your speed through the middle keeps their D backing up.'
				},
				rw: {
					where: 'On the right boards near our blue line.',
					read: 'Watch the puck go up the left side. Keep your width and your speed.',
					why: 'The attack needs a wide option on the far side when the puck reaches the [[neutral-zone|neutral zone]].'
				},
				ld: {
					where: 'In the left circle with the puck, skating up ice, with the [[forecheck|forechecker]] closing from the middle.',
					read: 'He is right in the lane to C. The lane up the wall to LW is clear. Pass it to LW in stride.',
					why: 'Hit the lane he left open. A pass into his stick here is a scoring chance against.'
				},
				rd: {
					where: 'Following up the right side.',
					read: 'Watch the pass. Once it is out, follow the play up ice as the trailer.',
					why: 'The five of you attack together, but one D has to trail the play. LD is carrying the puck, so once he moves it, that job is yours.'
				}
			},
			reads: {
				ld: [{ at: 'o1', label: 'Taking the middle' }, { at: 'lw', label: 'Open' }],
				lw: [{ at: 'ld' }],
				c: [{ at: 'o1' }],
				rw: [{ at: 'o4' }],
				rd: [{ at: 'ld' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt: 'Their [[forecheck|forechecker]] cuts across from the middle at you and sits in the lane to C. LW is open on the left boards. You...',
						options: [
							{
								text: 'Pass up the wall to LW in stride',
								correct: true,
								why: 'He took the middle, so the wall is open. LW gets it moving, already past the [[forecheck|forechecker]].'
							},
							{
								text: 'Force the pass to C in the middle',
								correct: false,
								why: 'The [[forecheck|forechecker]] is right in that lane. A turnover in the middle of our zone is a scoring chance against.'
							},
							{
								text: 'Go back behind the net and start again',
								correct: false,
								why: 'Sometimes right, but here a lane is open. Going back wastes your forwards\' speed.'
							}
						]
					}
				},
				lw: {
					drag: {
						target: { kind: 'ellipse', cx: 60, cy: 6, rx: 9, ry: 5 },
						correct: 'Yes. Up the left boards near our blue line, you are past the [[forecheck|forechecker]] and moving with speed when the pass arrives.',
						incorrect: 'The left forward curls up the left boards and takes the pass near our blue line, back to the boards and open to LD.'
					}
				}
			}
		},
		{
			id: 'attack',
			caption:
				'A couple of seconds later LW carries it into the [[neutral-zone|neutral zone]]. C and RW come with speed, LD and RD trail, and all five attack their blue line together.',
			phase: 'attack',
			positions: {
				lw: { x: 92, y: 5 },
				c: { x: 90, y: 40 },
				rw: { x: 92, y: 76 },
				ld: { x: 62, y: 26 },
				rd: { x: 56, y: 56 },
				o1: { x: 60, y: 32 },
				o2: { x: 116, y: 20 },
				o3: { x: 114, y: 42 },
				o4: { x: 118, y: 66 }
			},
			puck: { x: 94, y: 7 },
			puckCarrier: 'lw',
			arrows: [
				{ kind: 'skate', from: 'lw', to: { x: 120, y: 9 } },
				{ kind: 'skate', from: 'c', to: { x: 120, y: 44 } },
				{ kind: 'skate', from: 'rw', to: { x: 120, y: 74 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Carrying the puck up the left boards, approaching the red line.',
					read: 'Head up: their D on your side is waiting at the line. C is coming through the middle with speed.',
					why: 'You can carry it in, or pass to C if their D steps up at you. Either way you have support.'
				},
				c: {
					where: 'In the middle, just behind the puck, at full speed.',
					read: 'Watch LW and their middle D. Stay level with or behind the puck so you are onside.',
					why: 'If their D on the left steps up to LW, the pass to you in the middle is open.'
				},
				rw: {
					where: 'Wide on the right, a stride behind the puck.',
					read: 'Watch their D on your side. Drive wide and toward the net once the puck crosses the line.',
					why: 'A wide drive on the far side pushes their D back and opens the middle for C.'
				},
				ld: {
					where: 'Following up the left side, behind LW.',
					read: 'Watch the puck. Be a pass back option if LW gets stopped at the line.',
					why: 'A D following the play lets the forwards drop it back and [[regroup]] instead of forcing a bad entry.'
				},
				rd: {
					where: 'Trailing on the right side, the last player back.',
					read: 'Watch the puck and their [[forecheck|forechecker]] skating back.',
					why: 'If the puck turns over at their blue line, you are the one between them and our net.'
				}
			},
			reads: {
				lw: [{ at: 'o2' }, { at: 'c' }],
				c: [{ at: 'o3' }],
				rw: [{ at: 'o4' }],
				ld: [{ at: 'lw' }],
				rd: [{ at: 'o1' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt: 'LW is carrying it up the left side and you are wide on the right, about to reach their blue line. You...',
						options: [
							{
								text: 'Stay a stride behind the puck, then drive wide to the net once it crosses',
								correct: true,
								why: 'You stay onside and your drive pushes their D back, which opens the middle for C.'
							},
							{
								text: 'Skate full speed into their zone ahead of the puck',
								correct: false,
								why: 'You cross their blue line before the puck: [[offside]], and the [[breakout]] is wasted.'
							},
							{
								text: 'Cut across to the left to help LW',
								correct: false,
								why: 'That brings your D over to LW too. Your width is what keeps their D spread out.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
