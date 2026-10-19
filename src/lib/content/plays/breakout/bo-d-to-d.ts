import type { Play } from '../../types';

const rolesBefore = { rd: 'D1', ld: 'D2', rw: 'Strong wing', lw: 'Weak wing' };
const rolesAfter = { rd: 'D1', ld: 'D2', lw: 'Strong wing', rw: 'Weak wing' };

const play: Play = {
	id: 'bo-d-to-d',
	title: 'D-to-D breakout',
	category: 'breakout',
	system: 'D-to-D (over)',
	strength: '5v5',
	summary:
		'When their [[forecheck]] floods the puck side, the D with the puck passes behind the net to his partner, who calls "Over!" from the far post. The puck switches sides faster than the [[forecheck]] can, and the breakout goes up the other wall.',
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
	keyConcepts: ['shoulder-checks', 'strong-weak-side', 'f1-f2-f3'],
	variations:
		'The pass goes behind your own net, either direct or banked off the end boards. It never goes through the [[slot]]. Some teams switch sides higher, D to D above the circles, once the puck is already out of the corner. Teams use different words for the call ("over", "D to D", "partner"); agree on one before the game. Note that this play switches which winger is the [[strong-side]] one: RW starts on the puck side but the puck leaves up LW\'s wall. Coaches disagree on exactly where the wall winger sets up: this app uses the spot between the faceoff dot and the top of the circle, while some teach a lower spot between the [[hash-marks|hash marks]] and the goal line. The [[d-to-d|D-to-D]] has become less common in the NHL because two-man [[forecheck|forechecks]] send a second player at the partner, so read [[f2|F2]] before you call it.',
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
		},
		{
			title: 'What Is a Breakout in Hockey?',
			publisher: 'IceHockeyMan (IHM Knowledge Center)',
			url: 'https://icehockeyman.com/2025/12/13/what-is-a-breakout-in-hockey/'
		}
	],
	steps: [
		{
			id: 'retrieve',
			caption:
				'They dump it into our right corner. RD goes back for it. Their [[f1|F1]] chases him, and [[f2|F2]] follows down the same side instead of staying in the middle.',
			phase: 'retrieve',
			positions: {
				lw: { x: 50, y: 14 },
				c: { x: 40, y: 46 },
				rw: { x: 46, y: 72 },
				ld: { x: 18, y: 38 },
				rd: { x: 20, y: 54 },
				o1: { x: 30, y: 68 },
				o2: { x: 38, y: 58 },
				o3: { x: 60, y: 44 },
				o4: { x: 82, y: 26 },
				o5: { x: 80, y: 62 }
			},
			puck: { x: 8, y: 64 },
			arrows: [
				{ kind: 'skate', from: 'rd', to: { x: 9, y: 62 } },
				{ kind: 'skate', from: 'c', to: { x: 24, y: 46 } },
				{ kind: 'skate', from: 'rw', to: { x: 38, y: 81.5 } },
				{ kind: 'skate', from: 'lw', to: { x: 40, y: 3.5 } }
			],
			roles: rolesBefore,
			notes: {
				lw: {
					where: 'Coming back down the left side toward the left boards near the top of the circle.',
					read: 'Watch the puck and the [[forecheck|forecheckers]]. If two of them go to the right side, the puck may come around to you.',
					why: 'The D-to-D only works if somebody is waiting on the far wall to take the next pass.'
				},
				c: {
					where: 'Skating back through the middle toward the front of your net.',
					read: 'Watch where [[f1|F1]] and [[f2|F2]] go. Arrive low in the middle, below the puck.',
					why: 'From low in the middle you can swing to either side, whichever way the puck comes out.'
				},
				rw: {
					where: 'Coming back down the right boards toward the top of the right circle.',
					read: '[[shoulder-check|Shoulder check]]: F2 is coming down your wall behind you.',
					why: 'If F2 parks on your wall, the up pass to you is closed. Knowing that early helps you read where the puck will go.'
				},
				ld: {
					where: 'In front of the net, a little to the left.',
					read: 'Watch F1 and F2. If both of them go to RD\'s side, the left side behind the net is empty. That is your spot.',
					why: 'You see the whole [[forecheck]] and RD does not. You decide whether the puck should come over.'
				},
				rd: {
					where: 'Skating back to the puck in the right corner.',
					read: '[[shoulder-check|Shoulder check]] both ways before you touch it. Where are F1 and F2, and where is LD?',
					why: 'If you know your side is crowded before you get the puck, you can move it on your first touch.'
				}
			},
			reads: {
				ld: [
					{ at: 'o1', label: 'F1' },
					{ at: 'o2', label: 'F2' }
				],
				rd: [{ at: 'o1', label: 'F1' }],
				rw: [{ at: 'o2', label: 'F2' }],
				c: [{ at: 'rd' }],
				lw: [{ at: 'rd' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt:
							'RD is going back for the puck in the right corner. Both [[f1|F1]] and [[f2|F2]] are heading to his side. You...',
						options: [
							{
								text: 'Hold the front of the net, read F1 and F2, and get ready to slide behind the left post and call "Over!"',
								correct: true,
								why: 'Two [[forecheck|forecheckers]] on one side leaves your side empty. You are the D who sees it, so you get open there and make the call.'
							},
							{
								text: 'Follow RD into the corner to help him',
								correct: false,
								why: 'Two D in one corner leaves the net empty and takes away the D-to-D option.'
							},
							{
								text: 'Skate up to the blue line for a long pass',
								correct: false,
								why: 'Way too far. RD needs a short pass behind the net, and you are the safety if it goes wrong.'
							}
						]
					}
				}
			}
		},
		{
			id: 'over',
			caption:
				'RD picks it up behind the net. F1 is on him and F2 is parked on the right wall next to RW, so the up pass is closed. LD slides behind the left post and calls "Over!"',
			phase: 'over',
			positions: {
				lw: { x: 40, y: 3.5 },
				c: { x: 24, y: 46 },
				rw: { x: 38, y: 81.5 },
				ld: { x: 6, y: 31 },
				rd: { x: 5, y: 55 },
				o1: { x: 15, y: 63 },
				o2: { x: 32, y: 77 },
				o3: { x: 50, y: 46 },
				o4: { x: 82, y: 26 },
				o5: { x: 80, y: 64 }
			},
			puck: { x: 6, y: 53 },
			puckCarrier: 'rd',
			arrows: [
				{ kind: 'pass', from: 'rd', to: { x: 6, y: 33 } },
				{ kind: 'skate', from: 'c', to: { x: 24, y: 30 } }
			],
			roles: rolesBefore,
			notes: {
				lw: {
					where: 'On the left boards near the top of the left circle, back to the boards, open to the ice.',
					read: 'Watch LD. When he calls "over", the puck is coming to your side and you are now the [[strong-side]] winger.',
					why: 'LD needs a target the moment he gets the puck, before F1 and F2 can swing over.'
				},
				c: {
					where: 'Low in the middle in front of the net, starting to drift left.',
					read: 'Watch RD\'s pass. As soon as the puck goes over, swing to the left side under LW.',
					why: 'C follows the puck low. Staying on the right side leaves LD and LW without a third option.'
				},
				rw: {
					where: 'On the right boards near the top of the circle, with F2 standing next to you.',
					read: 'Watch RD and F2. With F2 sitting in your lane, the puck is not coming to you. When it goes over, you are now the [[weak-side]] winger.',
					why: 'You still matter: staying on the wall keeps F2 busy on the wrong side of the ice.'
				},
				ld: {
					where: 'Behind the net just off the left post, in the open space.',
					read: 'Both [[forecheck|forecheckers]] are on RD\'s side and nobody is near you. Call "Over!" loud, stick on the ice.',
					why: 'RD is facing the boards with F1 on him. He needs your voice to know the far side is open.'
				},
				rd: {
					where: 'Behind the net on the right side with the puck and F1 closing.',
					read: 'F1 is on you, F2 is parked next to RW, and LD is open behind the left post. Pass it over right away, behind the net.',
					why: 'A quick pass switches sides faster than the [[forecheck]] can. Do not carry it toward LD; that brings F1 with it.'
				}
			},
			reads: {
				rd: [
					{ at: 'o1', label: 'F1' },
					{ at: 'o2', label: 'F2' },
					{ at: 'ld' }
				],
				ld: [{ at: 'o1', label: 'F1' }],
				rw: [{ at: 'o2', label: 'F2' }],
				lw: [{ at: 'ld' }],
				c: [{ at: 'rd' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'You have the puck behind the net on the right side. [[f1|F1]] is on you, [[f2|F2]] is parked next to RW on the wall, and LD calls "Over!" You...',
						options: [
							{
								text: 'Pass it right away behind the net to LD',
								correct: true,
								why: 'Both [[forecheck|forecheckers]] are on your side. A quick pass switches the play to the open side before they can follow.'
							},
							{
								text: 'Force it up the right wall to RW',
								correct: false,
								why: 'F2 is standing right there. The pass gets picked off on the wall in your own zone.'
							},
							{
								text: 'Skate it toward LD, then pass',
								correct: false,
								why: 'Carrying it across drags F1 with you, so LD gets the puck with F1 already on him. Pass first.'
							}
						]
					}
				},
				rw: {
					decision: {
						prompt:
							'[[f2|F2]] is parked next to you on the right wall and LD calls "Over!" The puck is about to go to the left side. You...',
						options: [
							{
								text: 'Stay wide on the right side and get ready to push up ice as the weak-side winger',
								correct: true,
								why: 'The puck is leaving your side. Width on the far side gives the play a second option going up ice.'
							},
							{
								text: 'Drop down to the corner to help RD',
								correct: false,
								why: 'The puck is leaving the corner. That puts a fourth player deep on the wrong side.'
							},
							{
								text: 'Keep calling for the puck on the wall',
								correct: false,
								why: 'F2 is in your lane. Asking for that pass invites a turnover; let the puck go to the open side.'
							}
						]
					}
				}
			}
		},
		{
			id: 'up-the-wall',
			caption:
				'LD takes the pass behind the left post. F1 and F2 have to cross behind the net to follow, so LD has time. He passes up the left wall to LW while C swings underneath.',
			phase: 'up-the-wall',
			positions: {
				lw: { x: 38, y: 3.5 },
				c: { x: 24, y: 30 },
				rw: { x: 46, y: 72 },
				ld: { x: 6, y: 33 },
				rd: { x: 14, y: 52 },
				o1: { x: 6, y: 50 },
				o2: { x: 28, y: 62 },
				o3: { x: 46, y: 40 },
				o4: { x: 80, y: 22 },
				o5: { x: 80, y: 62 }
			},
			puck: { x: 7.5, y: 31.5 },
			puckCarrier: 'ld',
			arrows: [
				{ kind: 'pass', from: 'ld', to: { x: 38, y: 4 }, via: { x: 18, y: 14 } },
				{ kind: 'skate', from: 'c', to: { x: 42, y: 22 } },
				{ kind: 'skate', from: 'rd', to: { x: 16, y: 44 } }
			],
			roles: rolesAfter,
			notes: {
				lw: {
					where: 'On the left boards between the faceoff dot and the top of the circle, back to the boards, stick on the ice.',
					read: 'Watch the pass coming from LD, then [[shoulder-check|shoulder check]] up ice: is their D on your side holding the blue line or jumping down?',
					why: 'Knowing what their D is doing before the puck arrives lets you make the play on your first touch.'
				},
				c: {
					where: 'Curling to the left side, inside LW, about 25 feet off the boards.',
					read: 'Watch LD and LW. Arrive inside LW with speed so he can bump it to you.',
					why: 'LD, LW and you form the [[triangle]] on the new strong side.'
				},
				rw: {
					where: 'Pushing up the right side, staying wide.',
					read: 'Watch the puck on the left wall and their D on your side.',
					why: 'Getting up ice on your side gives C a wide option and pushes their D back.'
				},
				ld: {
					where: 'Behind the left post with the puck.',
					read: 'F1 is coming back around the net after you. LW is open on the wall. Move it now.',
					why: 'The D-to-D buys a second or two. Use it to make the next pass, not to stickhandle.'
				},
				rd: {
					where: 'Coming out from behind the net to the front of it.',
					read: 'Watch F1 and F2 as they swing over. You are now the D without the puck, so you take the net front.',
					why: 'One D stays home until the puck is out of the zone.'
				}
			},
			reads: {
				ld: [
					{ at: 'lw' },
					{ at: 'o1', label: 'F1' }
				],
				lw: [
					{ at: 'ld' },
					{ at: 'o4', label: 'Their D' }
				],
				c: [{ at: 'lw' }],
				rw: [{ at: 'o5', label: 'Their D' }],
				rd: [{ at: 'o2', label: 'F2' }]
			},
			quiz: {
				lw: {
					drag: {
						target: { kind: 'ellipse', cx: 38, cy: 5, rx: 9, ry: 5 },
						correct:
							'Yes. On the left boards between the dot and the top of the circle, back to the boards. LD can reach you and you have room to move it.',
						incorrect:
							'The wall winger sets up on the boards between the faceoff dot and the top of the circle. Too low and you are in the corner traffic; too high and the pass from behind the net is too long.'
					}
				},
				c: {
					decision: {
						prompt: 'The puck just went D to D to LD behind the left post. Where do you go?',
						options: [
							{
								text: 'Swing low to the left side, inside LW',
								correct: true,
								why: 'You follow the puck and give LW someone to bump it to. You arrive already moving up ice.'
							},
							{
								text: 'Stay on the right side where the puck was',
								correct: false,
								why: 'The puck has switched sides. Staying right leaves LD and LW with no third option.'
							},
							{
								text: 'Head straight up the middle to the red line',
								correct: false,
								why: 'Too early. A long pass through the middle is easy to pick off. Stay low, below the puck, until it is out.'
							}
						]
					}
				}
			}
		},
		{
			id: 'exit',
			caption:
				'A couple of seconds later: their D on the left side stayed back, so LW bumped it to C swinging inside him, and C carries it out with speed. F1 and F2 are still on the wrong side.',
			phase: 'exit',
			positions: {
				lw: { x: 58, y: 7 },
				c: { x: 78, y: 26 },
				rw: { x: 84, y: 70 },
				ld: { x: 36, y: 30 },
				rd: { x: 32, y: 48 },
				o1: { x: 22, y: 44 },
				o2: { x: 40, y: 60 },
				o3: { x: 58, y: 36 },
				o4: { x: 96, y: 22 },
				o5: { x: 100, y: 58 }
			},
			puck: { x: 80, y: 27.5 },
			puckCarrier: 'c',
			arrows: [
				{ kind: 'skate', from: 'c', to: { x: 116, y: 30 } },
				{ kind: 'skate', from: 'lw', to: { x: 96, y: 8 } },
				{ kind: 'skate', from: 'rw', to: { x: 120, y: 68 } }
			],
			roles: rolesAfter,
			notes: {
				lw: {
					where: 'Off the wall after the bump, skating up the left side.',
					read: 'Watch C and their D on your side. Stay wide and level with C so you are a drop or give-and-go option.',
					why: 'Once the puck is out, all three forwards attack together. Stopping to watch leaves C alone.'
				},
				c: {
					where: 'Carrying the puck over your blue line on the left side of the middle, at full speed.',
					read: 'Head up: how many of theirs are between you and their net? Find RW wide on the far side.',
					why: 'A forward with the puck and speed through the [[neutral-zone|neutral zone]] is the point of the breakout.'
				},
				rw: {
					where: 'Wide on the right side near the red line, skating with speed.',
					read: 'Watch C and their D on your side. Stay level with or behind the puck at their blue line so you are not [[offside]].',
					why: 'Width on the far side keeps their D from sliding over onto C.'
				},
				ld: {
					where: 'Following the play up the left side toward the top of the circle.',
					read: 'Watch C and [[f3|F3]]. Stay close enough for a pass back if the forwards need to [[regroup]].',
					why: 'Following up keeps the five of you connected instead of leaving a big gap.'
				},
				rd: {
					where: 'Following up on the right side, a little behind LD.',
					read: 'Watch F1 and F2 behind the play. If the puck turns over, you are the last one back.',
					why: 'One D joins, the other stays the deepest player in case the puck comes back.'
				}
			},
			reads: {
				c: [{ at: 'rw' }],
				lw: [{ at: 'o4', label: 'Their D' }],
				rw: [{ at: 'o5', label: 'Their D' }],
				ld: [{ at: 'o3', label: 'F3' }],
				rd: [{ at: 'o1', label: 'F1' }]
			}
		}
	]
};

export default play;
