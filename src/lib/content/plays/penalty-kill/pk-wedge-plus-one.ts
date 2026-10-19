import type { Play } from '../../types';

const play: Play = {
	id: 'pk-wedge-plus-one',
	title: 'Wedge +1 penalty kill',
	category: 'penalty-kill',
	system: 'Wedge +1 (3 in a triangle, 1 pressures)',
	strength: '4v5',
	summary:
		'An aggressive [[penalty-kill]]: three players hold a tight triangle (the [[wedge]]) in front of the net while the fourth, the "+1", goes after the puck carrier. As the puck moves, whoever is closest becomes the +1 and the others rotate into the wedge. Each player has to decide fast: force the puck carrier, or contain him.',
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
		'How hard the +1 goes is the big difference between teams. A more expanded version lets the [[weak-side]] forward cheat toward a [[d-to-d|D-to-D]] pass instead of sitting in the wedge, which creates more turnovers but leaves more room in front of the net. Some teams only send the +1 on set triggers (a bobble, a puck on the wall, a player facing the boards) and otherwise hold a [[box]]. The rotations take practice: NHL teams have described the system as needing many switches and reads, and a +1 who pushes too early or too late opens a [[seam]] behind him. If they put a second player in front of the net, you may need to switch formations.',
	sources: [
		{
			title: 'Penalty Kill: Wedge +1',
			publisher: 'Weiss Tech Hockey (Jeremy Weiss)',
			url: 'https://weisstechhockey.com/penalty-kill-wedge-1/'
		},
		{
			title: 'An inside look at how the Seattle Kraken turned around their penalty kill',
			publisher: 'Sound Of Hockey (Darren Brown)',
			url: 'https://soundofhockey.com/2023/04/10/an-inside-look-at-how-the-seattle-kraken-turned-around-their-penalty-kill/amp/'
		},
		{
			title: 'Penalty Kill Forecheck Explained (IHM Academy Lesson #3)',
			publisher: 'IceHockeyMan (Coach Mark Lehtonen)',
			url: 'https://icehockeyman.com/2025/10/27/ihm-academy-lesson-3-by-coach-mark-lehtonen/'
		}
	],
	steps: [
		{
			caption:
				'Their left point gets the puck. LW is closest, so he is the +1 and goes straight at him. RW, LD and RD hold the [[wedge]], a triangle in front of the net.',
			positions: {
				lw: { x: 62, y: 29 },
				rw: { x: 40, y: 44 },
				ld: { x: 22, y: 36 },
				rd: { x: 22, y: 50 },
				o1: { x: 70, y: 24 },
				o2: { x: 70, y: 60 },
				o3: { x: 50, y: 81 },
				o4: { x: 15, y: 68 },
				o5: { x: 17, y: 42 }
			},
			puck: { x: 68.5, y: 24.5 },
			puckCarrier: 'o1',
			arrows: [
				{ kind: 'skate', from: 'lw', to: { x: 66, y: 27 } },
				{ kind: 'pass', from: 'o1', to: { x: 69, y: 58.5 } }
			],
			roles: { lw: '+1 (pressure)', rw: 'Wedge top', ld: 'Wedge low', rd: 'Wedge low' },
			notes: {
				lw: {
					where: 'Closing on the left point in a straight line from the middle, a few strides away.',
					read: 'Is he set and looking up, or still handling the puck? Come from the middle so his easiest move is along the boards, not into the [[slot]].',
					why: 'Pressure from the inside takes away his shot and the pass to the middle. The best he can do is pass across, which costs them time.'
				},
				rw: {
					where: 'Top of the wedge, in the [[high-slot|high slot]] between the two points.',
					read: 'Watch the puck and the right point. If the puck goes across to him, you are now the closest player.',
					why: 'The top of the wedge protects the [[slot]] and is the next +1 when the puck moves to the other side.'
				},
				ld: {
					where: 'Left low corner of the wedge, just off the left post in front of the crease.',
					read: 'Keep their [[net-front]] player in front of you and know where his stick is.',
					why: 'Three players near the net is the point of the wedge. Your piece is the net-front player and the [[back-door|back door]].'
				},
				rd: {
					where: 'Right low corner of the wedge, a few feet off the right post.',
					read: 'Watch the puck and their goal-line player down low on your side.',
					why: 'You protect the right side of the crease and are the player who goes if the puck gets below the [[hash-marks|hash marks]] on your side.'
				}
			},
			reads: {
				lw: [{ at: 'o1', label: 'Puck' }],
				rw: [{ at: 'o2', label: 'Next +1' }],
				ld: [{ at: 'o5', label: 'Net-front' }],
				rd: [{ at: 'o4', label: 'Goal line' }]
			},
			quiz: {
				lw: {
					decision: {
						prompt:
							'The left point just took a pass and is still settling the puck. You are the closest of your four. You...',
						options: [
							{
								text: 'Force him: go straight at him from the middle, stick on the puck',
								correct: true,
								why: 'He is not set yet, so this is the time to force. Coming from the middle pushes him to the boards and takes away the shot.'
							},
							{
								text: 'Contain: stay in the [[high-slot|high [[slot]]]] and let him come to you',
								correct: false,
								why: 'Containing is right when he has control and options. Here he is still settling it, and in a wedge +1 the closest player is the pressure.'
							},
							{
								text: 'Go at him from the boards side',
								correct: false,
								why: 'That opens the middle. He steps inside you and has a clear look at the net or the [[slot]].'
							}
						]
					}
				},
				ld: {
					drag: {
						start: { x: 34, y: 22 },
						target: { kind: 'ellipse', cx: 22, cy: 37, rx: 6, ry: 5 },
						correct:
							'Yes. Low left corner of the wedge, just off the left post, with their net-front player in front of you.',
						incorrect:
							'The two D are the low corners of the [[wedge]], a few feet off each post in front of the crease. Out at the circle you leave the net-front player alone.'
					}
				}
			}
		},
		{
			caption:
				'He passes across to the right point. Now RW is closest, so RW becomes the +1 and goes. LW drops back into the top of the wedge.',
			positions: {
				lw: { x: 44, y: 40 },
				rw: { x: 60, y: 56 },
				ld: { x: 22, y: 38 },
				rd: { x: 22, y: 50 },
				o1: { x: 70, y: 26 },
				o2: { x: 70, y: 60 },
				o3: { x: 50, y: 81 },
				o4: { x: 15, y: 68 },
				o5: { x: 17, y: 43 }
			},
			puck: { x: 68.5, y: 60 },
			puckCarrier: 'o2',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 64, y: 58 } },
				{ kind: 'skate', from: 'lw', to: { x: 44, y: 44 } },
				{ kind: 'pass', from: 'o2', to: { x: 49.5, y: 79.5 } }
			],
			roles: { lw: 'Wedge top', rw: '+1 (pressure)', ld: 'Wedge low', rd: 'Wedge low' },
			notes: {
				lw: {
					where: 'Dropping from the left point back into the [[high-slot|high [[slot]]]], the top of the wedge.',
					read: 'Watch RW go and the puck. Fill the middle he just left.',
					why: 'The +1 job passes from player to player. When it leaves you, you go straight back to the wedge so the [[slot]] is never empty.'
				},
				rw: {
					where: 'Coming out of the [[high-slot|high [[slot]]]] at the right point, from the middle.',
					read: 'Watch his stick. Take away the shot and the pass to the middle; let him have the pass down the wall.',
					why: 'You were the top of the wedge and closest to the new puck. In a wedge +1, the closest player always becomes the pressure.'
				},
				ld: {
					where: 'Low left of the wedge, off the left post.',
					read: 'Watch the net-front player and the left point who just passed. Do not get pulled out toward him.',
					why: 'With the puck on the far side, you are the [[back-door|back door]] guard.'
				},
				rd: {
					where: 'Low right of the wedge, off the right post.',
					read: 'The puck is now on your side. Watch the half-wall and goal-line players.',
					why: 'A pass down your side is coming next, and the low players on your side are your problem.'
				}
			},
			reads: {
				rw: [{ at: 'o2', label: 'Puck' }],
				lw: [{ at: 'rw' }],
				ld: [{ at: 'o5' }],
				rd: [{ at: 'o3', label: 'Half-wall' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt:
							'LW pressured the left point, who passed across to the right point. You are the top of the wedge and closest to him. You...',
						options: [
							{
								text: 'Become the +1: go at him from the middle while LW drops into the wedge',
								correct: true,
								why: 'The closest player takes the puck. LW is far away now; you are not.'
							},
							{
								text: 'Stay in the [[high-slot|high [[slot]]]] and wait for LW to get across',
								correct: false,
								why: 'LW would need to skate the width of the zone. The point gets a free shot in the meantime.'
							},
							{
								text: 'Drop to the front of the net',
								correct: false,
								why: 'The two D already cover the net. Dropping leaves the [[high-slot|high [[slot]]]] and the point both open.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'Under pressure, the right point moves it down to the [[half-wall]]. RW follows it down from the inside. LW slides toward the puck in the [[high-slot|high [[slot]]]]; RD stays between the goal-line player and the net.',
			positions: {
				lw: { x: 46, y: 50 },
				rw: { x: 46, y: 75 },
				ld: { x: 21, y: 41 },
				rd: { x: 21, y: 57 },
				o1: { x: 68, y: 30 },
				o2: { x: 70, y: 60 },
				o3: { x: 50, y: 81 },
				o4: { x: 15, y: 68 },
				o5: { x: 17, y: 44 }
			},
			puck: { x: 48.5, y: 80 },
			puckCarrier: 'o3',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 48, y: 77 } },
				{ kind: 'pass', from: 'o3', to: { x: 16, y: 67 } }
			],
			roles: { lw: 'Wedge top', rw: '+1 (pressure)', ld: 'Wedge low', rd: 'Wedge low' },
			notes: {
				lw: {
					where: 'Top of the wedge, shifted toward the puck side of the [[high-slot|high [[slot]]]].',
					read: 'Watch the half-wall player and the right point. You shade the pass back up to the point.',
					why: 'RW is low on the wall now, so the pass back to the point is the one he cannot take away. You can.'
				},
				rw: {
					where: 'On the half-wall player, on his inside, a stick length away.',
					read: 'Keep your stick in the lane to the [[slot]]. His easy pass now is down to the goal line.',
					why: 'Following the puck from the point to the wall keeps him under pressure; he never gets to set up.'
				},
				ld: {
					where: 'In front of the crease, inside their net-front player.',
					read: 'Find his stick. The pass from the wall to the net front is the dangerous one.',
					why: 'The wedge exists to keep the area right in front of the goalie closed while the +1 hunts.'
				},
				rd: {
					where: 'Low right of the [[slot]], between the goal-line player and the net.',
					read: 'Watch the half-wall player\'s stick. If the puck goes down to the goal line, it is below the [[hash-marks|hash marks]]: your puck.',
					why: 'Being in position early lets you jump the goal-line player as the puck arrives.'
				}
			},
			reads: {
				rw: [{ at: 'o3', label: 'Puck' }],
				lw: [{ at: 'o2', label: 'Point' }],
				ld: [{ at: 'o5' }],
				rd: [{ at: 'o4', label: 'Goal line' }]
			}
		},
		{
			caption:
				'The pass goes down to the goal line and he has to turn to the boards to take it. RD forces him, gets his stick on the puck, and pushes it up the wall to RW.',
			positions: {
				lw: { x: 40, y: 50 },
				rw: { x: 34, y: 80 },
				ld: { x: 21, y: 42 },
				rd: { x: 13, y: 71 },
				o1: { x: 68, y: 32 },
				o2: { x: 68, y: 62 },
				o3: { x: 44, y: 77 },
				o4: { x: 9, y: 75 },
				o5: { x: 18, y: 46 }
			},
			puck: { x: 14, y: 72.5 },
			puckCarrier: 'rd',
			arrows: [{ kind: 'pass', from: 'rd', to: { x: 33, y: 80 } }],
			roles: { lw: 'Wedge top', rw: 'Wedge', ld: 'Wedge low', rd: '+1 (pressure)' },
			notes: {
				lw: {
					where: 'Top of the wedge in the [[high-slot|high [[slot]]]].',
					read: 'Watch the puck and both points. If RD loses the battle, you are the next layer.',
					why: 'One player stays high in the middle no matter who is pressuring.'
				},
				rw: {
					where: 'Down the right boards near the bottom of the circle, back to the boards, open to RD.',
					read: 'Watch RD\'s battle. Be the outlet up the wall if he wins it, and the next check on the half-wall player if he does not.',
					why: 'Dropping a little lower gives RD a short pass, and you still block the half-wall player\'s path back to the [[slot]].'
				},
				ld: {
					where: 'Alone in front of the net, inside their net-front player.',
					read: 'Watch the net-front player and the [[back-door|back door]]. RD is in the corner, so you are the whole wedge down low.',
					why: 'If RD loses it, the pass out front comes right to you.'
				},
				rd: {
					where: 'In the right corner on the goal-line player\'s inside, stick on the puck.',
					read: 'He turned his back to you to take the pass. That is your trigger: arrive with the puck, stick on it, body between him and the net.',
					why: 'A player facing the boards cannot pass to the [[slot]]. Forcing now wins the puck; waiting lets him turn and face the play.'
				}
			},
			reads: {
				rd: [{ at: 'o4', label: 'Back turned' }],
				rw: [{ at: 'rd' }],
				ld: [{ at: 'o5' }],
				lw: [{ at: 'o2' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'The puck goes down to their goal-line player, below the hash marks on your side. He has to turn to the boards to take it. You...',
						options: [
							{
								text: 'Force him: arrive with the puck, stick on it, and stay on his inside',
								correct: true,
								why: 'Below the hash marks it is a D\'s puck, and a player facing the boards is the trigger to force. He cannot see the [[slot]].'
							},
							{
								text: 'Contain: stay at the post and wait for him to make a move',
								correct: false,
								why: 'Containing gives him time to turn and face the play. In a wedge +1 you force when his back is turned.'
							},
							{
								text: 'Leave him and cover the net-front player with LD',
								correct: false,
								why: 'LD already has the net front. Two D on one player leaves the goal-line player free to walk out to the post.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'RW [[chip|chips]] it off the boards past their right point and out of the zone. The [[penalty-kill]] gets a [[clear]], and maybe a short-handed rush if RW beats the point to it.',
			positions: {
				lw: { x: 52, y: 56 },
				rw: { x: 40, y: 81 },
				ld: { x: 22, y: 44 },
				rd: { x: 18, y: 64 },
				o1: { x: 66, y: 36 },
				o2: { x: 64, y: 70 },
				o3: { x: 48, y: 76 },
				o4: { x: 13, y: 70 },
				o5: { x: 19, y: 48 }
			},
			puck: { x: 41.5, y: 81 },
			puckCarrier: 'rw',
			arrows: [
				{ kind: 'pass', from: 'rw', to: { x: 100, y: 80 }, via: { x: 70, y: 85 } },
				{ kind: 'skate', from: 'lw', to: { x: 76, y: 56 } }
			],
			roles: { lw: 'Wedge top', rw: '+1 (pressure)', ld: 'Wedge low', rd: 'Wedge low' },
			notes: {
				lw: {
					where: 'Leaving the [[high-slot|high [[slot]]]] and heading up ice through the middle.',
					read: 'Watch the chip. If RW gets to it past the point, you are his partner on a two-on-one going the other way.',
					why: 'The wedge +1 is built to create turnovers that turn into short-handed chances.'
				},
				rw: {
					where: 'On the right boards with the puck, back to the boards.',
					read: 'Their right point is coming down at you. Chip it off the boards past him, then race him to it.',
					why: 'A chip off the wall goes around him where he cannot reach it. Trying to beat him one-on-one invites a turnover at your blue line.'
				},
				ld: {
					where: 'Still in front of the net.',
					read: 'Watch the puck leave the zone before you move.',
					why: 'If the chip is stopped at the blue line, you are the one between the puck and your net.'
				},
				rd: {
					where: 'Coming out of the corner toward the right post.',
					read: 'Watch the chip and the goal-line player you just beat.',
					why: 'Get back in front of the net until the puck is out.'
				}
			},
			reads: {
				rw: [{ at: 'o2', label: 'Pinching point' }],
				lw: [{ at: 'rw' }],
				ld: [{ at: 'o5' }],
				rd: [{ at: 'o4' }]
			}
		}
	]
};

export default play;
