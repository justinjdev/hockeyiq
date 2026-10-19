import type { Play } from '../../types';

const play: Play = {
	id: 'nz-tag-up',
	title: 'Offside and tagging up',
	category: 'neutral-zone',
	system: 'Delayed offside, tag-up rules',
	strength: '5v5',
	summary:
		'You are [[offside]] when both of your skates are over their blue line before the puck completely crosses it. In leagues with [[delayed-offside|delayed offside]] play does not stop right away: every one of us in the zone has to get back to the blue line ([[tag-up|tag up]]; a skate touching the line counts) without touching the puck, and then we can go back in. Knowing this turns a would-be whistle into a [[dump-in]] we can still chase.',
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
	keyConcepts: ['offside-tag-up'],
	variations:
		'Not every league plays tag-up. USA Hockey uses delayed (tag-up) offside at Youth 15 Only and Girls 16U and older, but younger levels and some adult rec leagues still blow the whistle the moment anyone is offside; ask your league. Leagues also differ on what happens if the puck is shot at the net during a delayed offside, so do not shoot on goal until the arm is down. If the linesman thinks a team went offside on purpose, the faceoff can move all the way back to that team\'s own end. Remember it is the skates that count, not your stick: one skate touching the line keeps you onside, and a skate touching the line is also enough to tag up. Under NHL and IIHF rules every offside player has to be back at the line at the same instant; some referees in rec leagues are looser about this, but do not count on it.',
	sources: [
		{
			title: 'Playing Rules: Breaking Down the 2025-29 Rulebook Updates',
			publisher: 'USA Hockey',
			url: 'https://www.usahockey.com/news_article/show/1346217'
		},
		{
			title: 'Offside (ice hockey)',
			publisher: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Offside_(ice_hockey)'
		},
		{
			title: 'IIHF Official Rule Book, Rule 83: Off-side',
			publisher: 'International Ice Hockey Federation',
			url: 'https://test.rulebook.iihf.com/documents/rule-book-2026-27/83'
		},
		{
			title: 'Coyotes Ruled Onside After Kings Challenge Bunting\'s Hat Trick Goal (quotes NHL Rule 83.3)',
			publisher: 'Scouting the Refs',
			url: 'https://scoutingtherefs.com/2021/04/31364/coyotes-goal-stands-after-kings-challenge-offside/'
		},
		{
			title: 'Delayed Offside and Tag-Up: A Player\'s Practical Guide',
			publisher: 'Ice Hockey Man (IHM Knowledge Center)',
			url: 'https://icehockeyman.com/tag/delayed-offside/'
		}
	],
	steps: [
		{
			id: 'carry',
			caption:
				'LW carries up the left side. RW got too far ahead and is already over their blue line. Their D on LW\'s side is standing up at the line.',
			phase: 'carry',
			allowOffside: true,
			positions: {
				lw: { x: 112, y: 14 },
				c: { x: 116, y: 44 },
				rw: { x: 132, y: 72 },
				ld: { x: 94, y: 30 },
				rd: { x: 96, y: 56 },
				o1: { x: 104, y: 50 },
				o2: { x: 100, y: 24 },
				o3: { x: 90, y: 66 },
				o4: { x: 134, y: 20 },
				o5: { x: 146, y: 60 }
			},
			puck: { x: 113.5, y: 15.5 },
			puckCarrier: 'lw',
			arrows: [{ kind: 'skate', from: 'lw', to: { x: 120, y: 14 } }],
			roles: { lw: 'Puck carrier' },
			notes: {
				lw: {
					where: 'Carrying the puck up the left boards, just short of their blue line.',
					read: 'Look at their D on your side: he is standing up, not backing off. Then look across: RW is already inside the zone.',
					why: 'Their D will meet you at the line, and your best pass is to a teammate who is already offside. You need a third option.'
				},
				c: {
					where: 'In the middle, just short of their blue line.',
					read: 'Watch the puck and the line. Glide or curl so you do not cross before the puck.',
					why: 'One teammate already offside is a problem. Two is a bigger one.'
				},
				rw: {
					where: 'Over their blue line on the right side, ahead of the puck.',
					read: 'Look back at the puck and at the blue line. Both of your skates are over it and the puck is not: you are offside if it comes in.',
					why: 'Getting ahead of the puck happens all the time on a rush. Knowing you are there is what lets you fix it.'
				},
				ld: {
					where: 'Following up on the left side of the neutral zone.',
					read: 'Watch the puck and their forwards coming back.',
					why: 'You are the safety. If LW loses it at the line, you are first back.'
				},
				rd: {
					where: 'Following up on the right side of the neutral zone.',
					read: 'Watch the puck and their forward on your side.',
					why: 'Stay connected to the play but behind it, ready to defend.'
				}
			},
			reads: {
				lw: [{ at: 'o4', label: 'Standing up' }, { at: 'rw', label: 'Offside' }],
				rw: [{ at: { x: 125, y: 72 }, label: 'Blue line' }],
				c: [{ at: { x: 125, y: 44 }, label: 'Blue line' }],
				ld: [{ at: 'o2' }],
				rd: [{ at: 'o3' }]
			},
			quiz: {
				lw: {
					decision: {
						prompt:
							'Their D is standing you up at the blue line. RW is already inside the zone ahead of the puck. Your league plays tag-up offside. You...',
						options: [
							{
								text: '[[dump-in|Dump it in]] to the far corner and let RW tag up',
								correct: true,
								why: 'The puck goes deep, the arm goes up, and as long as RW clears the zone without touching it, we can chase it in.'
							},
							{
								text: 'Pass it to RW inside the zone',
								correct: false,
								why: 'RW is offside. The moment he touches it the whistle goes and the faceoff comes out to the neutral zone.'
							},
							{
								text: 'Try to beat their D one on one at the line',
								correct: false,
								why: 'He is set and standing up. Losing it at the blue line starts a rush the other way.'
							}
						]
					}
				}
			}
		},
		{
			id: 'dump',
			caption:
				'LW [[dump-in|dumps it]] into the far corner. The puck crosses the line with RW still inside, so the linesman raises his arm: [[delayed-offside|delayed offside]].',
			phase: 'dump',
			allowOffside: true,
			positions: {
				lw: { x: 120, y: 14 },
				c: { x: 120, y: 44 },
				rw: { x: 134, y: 70 },
				ld: { x: 100, y: 30 },
				rd: { x: 102, y: 56 },
				o1: { x: 110, y: 52 },
				o2: { x: 108, y: 22 },
				o3: { x: 96, y: 66 },
				o4: { x: 138, y: 22 },
				o5: { x: 154, y: 54 }
			},
			puck: { x: 121.5, y: 15.5 },
			puckCarrier: 'lw',
			arrows: [
				{ kind: 'pass', from: 'lw', to: { x: 178, y: 70 }, via: { x: 160, y: 82 } },
				{ kind: 'skate', from: 'rw', to: { x: 126, y: 70 } }
			],
			roles: { lw: 'Puck carrier', rw: 'Offside' },
			notes: {
				lw: {
					where: 'On the left boards just short of their blue line, finishing the dump.',
					read: 'Look up and send it to the far corner, away from their D and their goalie.',
					why: 'A dump to the far corner gives RW time to tag up and gives us a race for the puck.'
				},
				c: {
					where: 'In the middle just short of their blue line.',
					read: 'See the linesman\'s arm go up and see RW still inside. Stop at the line.',
					why: 'If you go in now you are one more player who has to get back out before we can play the puck.'
				},
				rw: {
					where: 'Inside their zone on the right side, ahead of the puck.',
					read: 'See the puck go in and the linesman\'s arm go up. Head straight for the blue line.',
					why: 'Play keeps going only if you clear the zone without touching the puck or playing an opponent.'
				},
				ld: {
					where: 'Moving up on the left side toward the red line.',
					read: 'Watch the dump and their forwards. Keep moving up behind our forwards.',
					why: 'Once we tag up and go back in, we want our D close enough to hold their blue line.'
				},
				rd: {
					where: 'Moving up on the right side toward the red line.',
					read: 'Watch their D going back for the puck and their forward on your side.',
					why: 'If their D gets it and makes a quick pass, you are the first one to stop it.'
				}
			},
			reads: {
				rw: [{ at: { x: 125, y: 70 }, label: 'Get out' }],
				c: [{ at: 'rw', label: 'Still offside' }],
				lw: [{ at: { x: 178, y: 70 }, label: 'Far corner' }],
				ld: [{ at: 'o2' }],
				rd: [{ at: 'o5' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt:
							'LW dumps it in while you are still inside the zone. The linesman raises his arm. You...',
						options: [
							{
								text: 'Skate straight back to the blue line without touching the puck, then come back in',
								correct: true,
								why: 'That is the [[tag-up]]. Once every one of us is out, the arm drops and we can chase the puck.'
							},
							{
								text: 'Race to the corner and get the puck first',
								correct: false,
								why: 'Touching the puck while you are offside stops play. The faceoff comes out to the neutral zone and the dump is wasted.'
							},
							{
								text: 'Stop and wait for the whistle',
								correct: false,
								why: 'There is no whistle coming if you clear the zone. Standing still just keeps the arm up and lets their D skate it out.'
							}
						]
					}
				},
				c: {
					decision: {
						prompt:
							'The puck is dumped in and the arm is up because RW is still inside. You are at the blue line. You...',
						options: [
							{
								text: 'Hold at the line until RW is out, then go in together',
								correct: true,
								why: 'The arm drops only when all of us have cleared. Staying out keeps it simple and lets you reach the line with speed.'
							},
							{
								text: 'Go straight in on the forecheck',
								correct: false,
								why: 'Now there are two of us to clear instead of one, and their D gets more time to skate it out.'
							},
							{
								text: 'Skate back to our blue line',
								correct: false,
								why: 'Too far. Once RW is out we want to go in right away, and you would be 50 feet behind.'
							}
						]
					}
				}
			}
		},
		{
			id: 'tag-up',
			caption:
				'RW skates back to the blue line and gets a skate on it. C and LW hold just outside. Their D goes back for the puck in the corner.',
			phase: 'tag-up',
			positions: {
				lw: { x: 120, y: 16 },
				c: { x: 121, y: 44 },
				rw: { x: 128, y: 70 },
				ld: { x: 106, y: 30 },
				rd: { x: 108, y: 54 },
				o1: { x: 114, y: 54 },
				o2: { x: 110, y: 24 },
				o3: { x: 104, y: 66 },
				o4: { x: 162, y: 36 },
				o5: { x: 168, y: 64 }
			},
			puck: { x: 176, y: 70 },
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 119, y: 70 } },
				{ kind: 'skate', from: 'o5', to: { x: 173, y: 68 } }
			],
			roles: { rw: 'Tagging up' },
			notes: {
				lw: {
					where: 'Just outside their blue line on the left side.',
					read: 'Watch RW and the linesman. When RW is out and the arm drops, go.',
					why: 'You are onside and ready. Going too early can keep the arm up.'
				},
				c: {
					where: 'Just outside their blue line in the middle.',
					read: 'Watch RW clear the line and watch which way their D turns with the puck.',
					why: 'Reading their D now tells you which side to forecheck the moment the arm drops.'
				},
				rw: {
					where: 'Skating back to their blue line on the right side.',
					read: 'Look down at the line. You have tagged up once a skate is touching the blue line (or you are past it into the neutral zone).',
					why: 'If both skates are still inside the line, you have not cleared. Get a skate on the line, then turn and go.'
				},
				ld: {
					where: 'Near the red line on the left side.',
					read: 'Watch the arm and our forwards. Get ready to follow them in.',
					why: 'When the forwards go back in, you want to be at their blue line to hold it.'
				},
				rd: {
					where: 'Near the red line on the right side.',
					read: 'Watch their D in the corner and the wall on your side. A quick [[rim]] up your wall is likely.',
					why: 'Being ready to step up on the wall is how you keep the puck in once play is on.'
				}
			},
			reads: {
				rw: [{ at: { x: 125, y: 70 }, label: 'Blue line' }],
				c: [{ at: 'o5' }],
				lw: [{ at: 'rw' }],
				ld: [{ at: 'lw' }],
				rd: [{ at: 'o5' }]
			},
			quiz: {
				rw: {
					drag: {
						target: { kind: 'ellipse', cx: 118, cy: 70, rx: 8, ry: 7 },
						correct:
							'Yes. A skate touching the blue line (or back in the neutral zone) means you have tagged up and can go back in.',
						incorrect:
							'To tag up, get back to their blue line: a skate touching the line counts. With both skates still inside the zone, you are still offside.'
					}
				},
				ld: {
					decision: {
						prompt:
							'The arm is up and RW is tagging up. You are LD near the red line. You...',
						options: [
							{
								text: 'Move up toward their blue line, ready to follow the forwards in and hold the line',
								correct: true,
								why: 'Once play is on, a D at the blue line can keep a clearing attempt in the zone.'
							},
							{
								text: 'Skate deep into the zone to get the puck',
								correct: false,
								why: 'That is the forwards\' job. A D going deep leaves nobody back if their D skates it out.'
							},
							{
								text: 'Head back to our blue line',
								correct: false,
								why: 'Too far back. We are about to forecheck and you need to be close enough to hold their line.'
							}
						]
					}
				}
			}
		},
		{
			id: 're-enter',
			caption:
				'Everyone is out, the arm comes down, and we go back in on the [[forecheck]]. RW and C go in with speed while the D move up to hold their blue line.',
			phase: 're-enter',
			positions: {
				lw: { x: 134, y: 20 },
				c: { x: 138, y: 46 },
				rw: { x: 140, y: 68 },
				ld: { x: 122, y: 30 },
				rd: { x: 124, y: 72 },
				o1: { x: 128, y: 54 },
				o2: { x: 126, y: 24 },
				o3: { x: 116, y: 66 },
				o4: { x: 166, y: 38 },
				o5: { x: 180, y: 70 }
			},
			puck: { x: 178.5, y: 68.5 },
			puckCarrier: 'o5',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 164, y: 66 } },
				{ kind: 'skate', from: 'c', to: { x: 156, y: 50 } },
				{ kind: 'skate', from: 'rd', to: { x: 128, y: 76 } }
			],
			roles: { rw: 'F1', c: 'F2', lw: 'F3' },
			notes: {
				lw: {
					where: 'Just inside their blue line on the left side, staying high.',
					read: 'Watch their D with the puck and their other D. Read where the pass will go.',
					why: 'With RW and C going deep, you are the high forward covering the middle.'
				},
				c: {
					where: 'Inside their blue line in the middle, heading toward the net.',
					read: 'Watch their D with the puck. Take away his pass to his partner in front of the net.',
					why: 'RW pressures the puck, you take the easy outlet. Two of us working together makes him rush.'
				},
				rw: {
					where: 'Back in the zone on the right side with speed, heading for their D.',
					read: 'Watch the puck and his stick. Come at him on an angle so he has to go one way.',
					why: 'Tagging up quickly means you arrive with speed, which turns a dump-in into real pressure.'
				},
				ld: {
					where: 'At their blue line on the left side.',
					read: 'Watch the puck and their forward on your side.',
					why: 'You are the left [[point]]. Holding the line keeps the forecheck alive.'
				},
				rd: {
					where: 'At their blue line on the right side, near the boards.',
					read: 'Watch their D. If he rims it up your wall, step down and keep it in.',
					why: 'The wall on the puck side is where their breakout will try to go. You are the last line of the forecheck.'
				}
			},
			reads: {
				rw: [{ at: 'o5' }],
				c: [{ at: 'o4' }],
				lw: [{ at: 'o2' }],
				ld: [{ at: 'o2' }],
				rd: [{ at: { x: 126, y: 80 }, label: 'Wall' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'The arm is down and our forwards are back in on the forecheck. Their D has the puck in the right corner. You...',
						options: [
							{
								text: 'Move up to their blue line on the right side, ready to keep a rim in',
								correct: true,
								why: 'A rim up your wall is their easiest way out. A D at the line can stop it and keep the pressure on.'
							},
							{
								text: 'Stay back at the red line',
								correct: false,
								why: 'From there you cannot reach a rim at their blue line. The puck gets out and the forecheck is over.'
							},
							{
								text: 'Join the forwards deep in the corner',
								correct: false,
								why: 'Four of us deep leaves nobody back. One quick pass and it is an [[odd-man-rush|odd-man rush]] the other way.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
