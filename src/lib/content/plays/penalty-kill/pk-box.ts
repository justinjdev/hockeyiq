import type { Play } from '../../types';

const roles = {
	lw: 'High box (left)',
	rw: 'High box (right)',
	ld: 'Low box (left)',
	rd: 'Low box (right)'
};

const play: Play = {
	id: 'pk-box',
	title: 'Box penalty kill',
	category: 'penalty-kill',
	system: 'Box (2 high, 2 low)',
	strength: '4v5',
	summary:
		'The standard [[penalty-kill]]: four players in a tight square, two forwards high and two D low. Each player owns a corner of the [[box]]. You keep the shots outside, keep the [[slot]] closed, and only leave your spot when the puck gives you a reason.',
	slots: [
		{ id: 'lw', home: 'LW' },
		{ id: 'rw', home: 'RW' },
		{ id: 'ld', home: 'LD' },
		{ id: 'rd', home: 'RD' }
	],
	opponents: [
		{ id: 'o1', label: 'Point' },
		{ id: 'o2', label: 'Point' },
		{ id: 'o3', label: 'Half-wall' },
		{ id: 'o4', label: 'Goal line' },
		{ id: 'o5', label: 'Net-front' }
	],
	keyConcepts: [],
	variations:
		'Teams differ on how hard the box pushes. A passive box sits in its shape and only attacks on a bobble, a bad pass or a puck on the wall. An aggressive box sends the closest player at the puck more often and accepts more open ice behind him. A common rule of thumb, used here, is "above the [[hash-marks|hash marks]] it is a forward\'s puck, below them it is a D\'s puck"; some teams let the strong-side D step up to the [[half-wall]] instead. Against a 1-3-1 power play with a player in the middle of the box, many teams switch to a [[diamond]] or tilt the box. In USA Hockey 14U and younger a team on the penalty kill can no longer ice the puck; most adult leagues still allow it, but check yours.',
	sources: [
		{
			title: 'Tactical Formations: Penalty Kill',
			publisher: 'Silver Seven Sens (Michaela Schreiter)',
			url: 'https://silversevensens.com/tactical-formations-penalty-kill'
		},
		{
			title: 'Vancouver Canucks Tactics: Analysing the Penalty Kill',
			publisher: 'The Canuck Way (Janik Beichler)',
			url: 'https://thecanuckway.com/2016/10/17/vancouver-canucks-tactics-penalty-kill/'
		},
		{
			title: 'An inside look at how the Seattle Kraken turned around their penalty kill',
			publisher: 'Sound Of Hockey (Darren Brown)',
			url: 'https://soundofhockey.com/2023/04/10/an-inside-look-at-how-the-seattle-kraken-turned-around-their-penalty-kill/amp/'
		},
		{
			title: 'USA Hockey Playing Rule Changes Summary (shorthanded icing)',
			publisher: 'USA Hockey',
			url: 'https://usahockey.com/news_article/show/804355'
		}
	],
	steps: [
		{
			caption:
				'They set up in our end with five against our four. The puck is at their right [[point]]. We sit in a tight [[box]]: LW and RW high, LD and RD low.',
			phase: 'setup',
			positions: {
				lw: { x: 50, y: 30 },
				rw: { x: 50, y: 54 },
				ld: { x: 24, y: 34 },
				rd: { x: 24, y: 52 },
				o1: { x: 70, y: 24 },
				o2: { x: 70, y: 60 },
				o3: { x: 50, y: 81 },
				o4: { x: 16, y: 68 },
				o5: { x: 17, y: 42 }
			},
			puck: { x: 68.5, y: 61 },
			puckCarrier: 'o2',
			arrows: [{ kind: 'pass', from: 'o2', to: { x: 49, y: 79.5 } }],
			roles,
			notes: {
				lw: {
					where: 'Top-left corner of the box, level with the tops of the circles, about halfway between the middle of the ice and the left boards.',
					read: 'Watch the puck at the right point, then glance at the left point. Keep your stick on the ice in the lane between the two points and the middle.',
					why: 'You are the [[weak-side]] high forward. Your job is to keep passes out of the middle and be ready if they go [[d-to-d|D-to-D]], not to chase.'
				},
				rw: {
					where: 'Top-right corner of the box, a few strides below the right point, between him and the net.',
					read: 'Watch the point man\'s stick and eyes. Is he looking at the net, or at the [[half-wall]]? Stay in his [[shooting-lane|shooting lane]].',
					why: 'Four cannot cover five. If you charge him at the blue line, he passes around you and the box is three players against five.'
				},
				ld: {
					where: 'Bottom-left corner of the box, at the left side of the crease and a step out, beside their net-front player.',
					read: 'Keep their [[net-front]] player in front of you and feel where his stick is. Glance at the puck so you know when a shot is coming.',
					why: 'Shots from the point are not the danger. Rebounds and [[tip|tips]] in front are. You own the front of the net.'
				},
				rd: {
					where: 'Bottom-right corner of the box, at the right side of the [[slot]], between their goal-line player and the net.',
					read: 'Watch the puck and their player on the goal line. Stay where you can reach a pass to him or a pass across the crease.',
					why: 'You are the low player on the puck side. A pass down low or across the crease is the most dangerous pass they have.'
				}
			},
			reads: {
				lw: [{ at: 'o1', label: 'Weak point' }],
				rw: [{ at: 'o2', label: 'Puck' }],
				ld: [{ at: 'o5', label: 'Net-front' }],
				rd: [{ at: 'o4', label: 'Goal line' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt:
							'The puck is at their right point. He has it under control and is looking around. You are the top-right corner of the box. You...',
						options: [
							{
								text: 'Hold your spot in his [[shooting-lane|shooting lane]], stick on the ice, and attack only if he bobbles it',
								correct: true,
								why: 'He has control and options, so you contain. A bobble or a bad pass is your trigger to go.'
							},
							{
								text: 'Charge him at the blue line',
								correct: false,
								why: 'He has the puck under control, so he simply passes around you. Now three of you cover five, with a hole where you were.'
							},
							{
								text: 'Drop down in front of the net to help LD',
								correct: false,
								why: 'That leaves him a free shot from the point with nobody in the lane, and opens the [[half-wall]] pass.'
							}
						]
					}
				},
				lw: {
					drag: {
						start: { x: 62, y: 14 },
						target: { kind: 'ellipse', cx: 50, cy: 30, rx: 8, ry: 6 },
						correct:
							'Yes. Top-left corner of the box, between the left point and the middle, close enough to your partners that nothing gets through the middle.',
						incorrect:
							'In a [[box]] the weak-side high forward sits level with the tops of the circles, halfway between the middle and the left boards. Out by the point you leave the middle open; down low you crowd the D.'
					}
				}
			}
		},
		{
			caption:
				'The point passes down to the [[half-wall]]. The puck is above the [[hash-marks|hash marks]], so RW pressures from the inside. The rest of the box shifts toward the puck.',
			phase: 'puck-on-half-wall',
			positions: {
				lw: { x: 46, y: 42 },
				rw: { x: 45, y: 75 },
				ld: { x: 21, y: 39 },
				rd: { x: 21, y: 57 },
				o1: { x: 68, y: 30 },
				o2: { x: 70, y: 60 },
				o3: { x: 48, y: 81 },
				o4: { x: 15, y: 68 },
				o5: { x: 17, y: 44 }
			},
			puck: { x: 47, y: 79.5 },
			puckCarrier: 'o3',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 46, y: 77 } },
				{ kind: 'pass', from: 'o3', to: { x: 69, y: 59.5 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Sliding down and across into the [[high-slot|high slot]], the middle of the ice just above the tops of the circles.',
					read: 'Watch the puck on the half-wall and the open man in the middle. Keep the left point in the corner of your eye in case it swings across.',
					why: 'When RW leaves to pressure, the middle is empty. You fill it so a pass to the [[slot]] never gets there.'
				},
				rw: {
					where: 'On the half-wall player, on his inside (the net side), a stick length away.',
					read: 'Watch his stick and the puck, not his eyes. Your stick goes in the lane to the middle so his only easy pass is back up the boards.',
					why: 'Pressure from the inside pushes him to the boards and takes away the pass to the [[slot]]. A pass back to the point is far less dangerous.'
				},
				ld: {
					where: 'In front of the net, on the inside of their net-front player, between him and the goalie\'s left side.',
					read: 'Find his stick and keep yours on it or under it. Glance at the half-wall so you know when the puck can come to the net.',
					why: 'A pass from the half-wall to the front of the net is a [[tip]] or a tap-in. Taking away his stick takes away the chance.'
				},
				rd: {
					where: 'Low on the right side of the [[slot]], between the goal-line player and the net.',
					read: 'Watch the puck and the goal-line player. If the puck goes down to him, it is your puck: below the hash marks belongs to the D.',
					why: 'Staying between him and the net keeps the low pass from becoming a shot from the side of the crease.'
				}
			},
			reads: {
				rw: [{ at: 'o3', label: 'Puck' }],
				lw: [{ at: 'o1', label: 'Weak point' }],
				ld: [{ at: 'o5', label: 'Net-front stick' }],
				rd: [{ at: 'o4', label: 'Goal line' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt:
							'The puck goes from the point down to the half-wall, near the top of the right circle, above the hash marks. Who goes at him?',
						options: [
							{
								text: 'You do, from the inside, stick in the lane to the middle',
								correct: true,
								why: 'Above the hash marks it is a forward\'s puck. You are closest, and coming from the inside forces him toward the boards and away from the [[slot]].'
							},
							{
								text: 'RD steps up from the [[slot]] to take him',
								correct: false,
								why: 'That pulls a D away from the net and leaves their goal-line player alone beside the crease. The D only goes when the puck is below the hash marks.'
							},
							{
								text: 'Nobody. Everyone holds the box',
								correct: false,
								why: 'A free player on the half-wall has all day to find the seam. The box holds its shape, but the closest player still pressures.'
							}
						]
					}
				},
				ld: {
					drag: {
						target: { kind: 'ellipse', cx: 21, cy: 40, rx: 6, ry: 5 },
						correct:
							'Yes. In front of the net, net side of their [[net-front]] player, where you can work on his stick.',
						incorrect:
							'With the puck on the half-wall, the low D on the weak side owns the front of the net: right in front of the crease, between their net-front player and the goalie.'
					}
				}
			}
		},
		{
			caption:
				'The half-wall passes back up to the point. RW gets back up into the [[shooting-lane|shooting lane]], LW returns to cover the other point, and the point man shoots into RW.',
			phase: 'puck-at-point',
			positions: {
				lw: { x: 50, y: 33 },
				rw: { x: 58, y: 56.5 },
				ld: { x: 21, y: 40 },
				rd: { x: 22, y: 55 },
				o1: { x: 70, y: 26 },
				o2: { x: 70, y: 60 },
				o3: { x: 48, y: 80 },
				o4: { x: 15, y: 66 },
				o5: { x: 17, y: 44 }
			},
			puck: { x: 68.5, y: 60.5 },
			puckCarrier: 'o2',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 59, y: 57 } },
				{ kind: 'shot', from: 'o2', to: { x: 12, y: 44 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Back up in the top-left corner of the box, between the left point and the middle.',
					read: 'Watch the right point\'s stick. If he passes across, close on the left point as the puck travels, stick in his shooting lane.',
					why: 'The [[d-to-d|D-to-D]] pass is how they move your box around. Being ready to close while the puck travels keeps the second point from getting a free [[one-timer]].'
				},
				rw: {
					where: 'Square to the right point in his shooting lane, about four strides in front of him, stick on the ice.',
					read: 'Watch the puck on his stick. Stay square to him and between him and the net, and keep your stick down in the lane.',
					why: 'You cannot reach him before he shoots, but you can be in the way. A shot that hits you or your stick never reaches the net.'
				},
				ld: {
					where: 'In front of the net, still net side of their net-front player.',
					read: 'Do not turn to watch the shot. Keep his stick tied up and look for the rebound after.',
					why: 'A point shot is low danger unless someone [[screen|screens]] or tips it. Taking his stick away removes both.'
				},
				rd: {
					where: 'Low on the right side, between the goal-line player and the right post.',
					read: 'Watch for the rebound off the shot and for the goal-line player sneaking to the post.',
					why: 'Rebounds kick out to the side of the net. You are the one closest to them on this side.'
				}
			},
			reads: {
				rw: [{ at: 'o2', label: 'Shooter' }],
				lw: [{ at: 'o1', label: 'Weak point' }],
				ld: [{ at: 'o5', label: 'Net-front stick' }],
				rd: [{ at: 'o4', label: 'Goal line' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt:
							'The puck comes back up to the right point and he winds up to shoot. You are about 15 feet from him. You...',
						options: [
							{
								text: 'Get square in his shooting lane with your stick on the ice',
								correct: true,
								why: 'You cannot reach him in time, but you can be between the puck and the net. Blocking the lane beats chasing.'
							},
							{
								text: 'Race out to the blue line to stop him',
								correct: false,
								why: 'You will not get there before he shoots, and if he fakes and passes, you have left the box open behind you.'
							},
							{
								text: 'Turn and skate to the front of the net for the rebound',
								correct: false,
								why: 'That gives him a clear shooting lane. The D own the rebounds; you own the lane.'
							}
						]
					}
				},
				lw: {
					decision: {
						prompt:
							'The puck goes back to the right point. Their left point is open across from you. Where do you go?',
						options: [
							{
								text: 'Back to the top-left of the box, ready to close on the left point if they go [[d-to-d|D-to-D]]',
								correct: true,
								why: 'You keep the middle closed and you can reach the left point while the pass is travelling.'
							},
							{
								text: 'Stay in the [[high-slot|high slot]] in the middle',
								correct: false,
								why: 'That was right when the puck was on the half-wall. With the puck back up top, the left point gets a free one-timer.'
							},
							{
								text: 'Go out and stand right on the left point',
								correct: false,
								why: 'Now he is covered, but the middle is wide open behind you. Sit between him and the middle and close as the pass travels.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'The shot hits RW and bounces into the right corner. RD gets there first and [[clear|clears]] it hard along the boards and out of the zone.',
			phase: 'clear',
			positions: {
				lw: { x: 50, y: 40 },
				rw: { x: 46, y: 64 },
				ld: { x: 20, y: 42 },
				rd: { x: 11, y: 72 },
				o1: { x: 68, y: 30 },
				o2: { x: 66, y: 58 },
				o3: { x: 40, y: 70 },
				o4: { x: 16, y: 68 },
				o5: { x: 17, y: 46 }
			},
			puck: { x: 10, y: 74.5 },
			puckCarrier: 'rd',
			arrows: [{ kind: 'pass', from: 'rd', to: { x: 110, y: 82 }, via: { x: 60, y: 84 } }],
			roles,
			notes: {
				lw: {
					where: 'Middle of the ice near the top of the [[slot]], turning to follow the puck up ice.',
					read: 'Watch the clear. If it gets out, look at the bench: a long clear is often the time to change.',
					why: 'Killing a penalty is tiring. A clean clear plus a fresh unit is worth more than chasing the puck down the ice.'
				},
				rw: {
					where: 'At the top of the right circle, inside the half-wall player.',
					read: 'Watch the puck on RD\'s stick and the half-wall player. If the clear gets blocked, be the next one on the loose puck.',
					why: 'Clears along the wall often get stopped at the half-wall. A second player there turns a blocked clear into a second chance to get it out.'
				},
				ld: {
					where: 'In front of the net, holding the front until the puck is gone.',
					read: 'Watch the net-front player and the puck. Do not leave the front until the puck is out of the zone.',
					why: 'If the clear fails and you have already left, they have an empty [[slot]] in front of an open net.'
				},
				rd: {
					where: 'In the right corner with the puck, near the boards.',
					read: 'You have two players coming at you. Do not look for a pretty pass. Look up the boards and fire it hard along them, or off the glass, past the point man.',
					why: 'On a [[penalty-kill]] a clear down the ice makes them go back and start over, and that time comes off the penalty. Most adult leagues let a team that is down a player ice the puck; check your league.'
				}
			},
			reads: {
				rd: [
					{ at: 'o3', label: 'Pressure' },
					{ at: 'o2', label: 'Point man' }
				],
				rw: [{ at: 'o3' }],
				ld: [{ at: 'o5' }],
				lw: [{ at: 'rd' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'You win the loose puck in the right corner. The half-wall player and the goal-line player are both coming at you. You...',
						options: [
							{
								text: 'Fire it hard along the boards or off the glass and out of the zone',
								correct: true,
								why: 'Under pressure on the [[penalty-kill]], getting it 200 feet away is the win. The point man has to beat a hard puck along the wall to stop it.'
							},
							{
								text: 'Pass it up the middle to LW',
								correct: false,
								why: 'A pass through the middle with five of theirs around is the turnover that ends up in your net.'
							},
							{
								text: 'Carry it behind the net and set up a breakout',
								correct: false,
								why: 'You are a player short with two on you. Holding the puck invites a turnover right beside your goal.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
