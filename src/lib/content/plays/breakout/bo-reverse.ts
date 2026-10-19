import type { Play } from '../../types';

const roles = { rd: 'D1', ld: 'D2', rw: 'Strong wing', lw: 'Weak wing' };

const play: Play = {
	id: 'bo-reverse',
	title: 'Reverse breakout',
	category: 'breakout',
	system: 'Reverse (back against the forecheck)',
	strength: '5v5',
	summary:
		'When [[f1|F1]] chases the puck carrier hard behind the net, the D sends the puck back the way he came, off the end boards to his partner. F1 has all his speed going the wrong way, and the puck comes out the side he just left.',
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
	keyConcepts: ['shoulder-checks', 'triangles-support', 'f1-f2-f3'],
	variations:
		'The reverse is the backup plan when a [[wheel]] gets chased: the D has to sell the [[wheel]] so F1 commits, then send it back. Some teams reverse to the low center instead of the partner D, which works well against a hard 2-1-2 [[forecheck]]. The call usually comes from the D without the puck ("reverse!"), because the puck carrier is facing the wrong way and cannot see the space behind him. Coaches disagree on exactly where the wall winger sets up: this app uses the spot from the standard breakout, between the faceoff dot and the top of the circle, while some coaches teach a lower spot between the [[hash-marks|hash marks]] and the goal line. A [[forecheck|forechecker]] who stays on the D\'s inside shoulder and steers instead of chasing takes the reverse away; then the D should look up the wall or [[rim]] it.',
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
			caption:
				'They dump it into our right corner. RD gets there first, but their [[f1|F1]] is coming hard down the right wall right behind him, and [[f2|F2]] is sitting on the left side.',
			phase: 'retrieve',
			positions: {
				lw: { x: 40, y: 3.5 },
				c: { x: 28, y: 46 },
				rw: { x: 40, y: 81.5 },
				ld: { x: 16, y: 38 },
				rd: { x: 12, y: 59 },
				o1: { x: 22, y: 70 },
				o2: { x: 32, y: 24 },
				o3: { x: 56, y: 44 },
				o4: { x: 82, y: 24 },
				o5: { x: 80, y: 62 }
			},
			puck: { x: 9, y: 63 },
			arrows: [
				{ kind: 'skate', from: 'rd', to: { x: 4, y: 36 }, via: { x: 3, y: 54 } },
				{ kind: 'skate', from: 'ld', to: { x: 14, y: 50 } }
			],
			roles,
			notes: {
				lw: {
					where: 'On the left boards near the top of the left circle, back to the boards, facing the play.',
					read: 'Watch RD. If he turns behind the net toward your side, he may bring it to you, so be ready on your wall.',
					why: 'You give RD a target on the side he is skating toward. Without you there, a [[wheel]] has nowhere to go.'
				},
				c: {
					where: 'Low in the middle, just above the crease.',
					read: 'Watch RD and where [[f1|F1]] is chasing from. Stay below the puck so you can swing to whichever side it comes out.',
					why: 'The center is the low [[support]]. If you leave early, a reverse has nobody to go to after the first pass.'
				},
				rw: {
					where: 'On the right boards between the faceoff dot and the top of the circle, back to the boards, stick on the ice.',
					read: 'Look past RD to [[f1|F1]]. He is coming straight down your wall, right in the lane between you and RD.',
					why: 'With F1 in that lane, the direct pass up your wall is not on yet. Hold your spot: if RD reverses it, the puck comes back to your side.'
				},
				ld: {
					where: 'In front of the net, starting to slide toward the right post.',
					read: 'Watch [[f1|F1]]. If he chases RD behind the net, the corner RD just left will be empty. That is where you go.',
					why: 'You are RD\'s eyes. He is facing the boards and cannot see F1 chasing him, so you make the call.'
				},
				rd: {
					where: 'Picking up the puck in the right corner with F1 right behind you.',
					read: '[[shoulder-check|Shoulder check]] before you touch it: F1 is coming down the wall behind you, so the wall is closed. The open way is behind the net.',
					why: 'Taking the puck behind the net puts the net between you and F1 and makes him chase you, which sets up the reverse.'
				}
			},
			reads: {
				rd: [{ at: 'o1', label: 'F1' }],
				ld: [{ at: 'o1', label: 'F1' }],
				rw: [{ at: 'o1', label: 'F1' }],
				c: [{ at: 'rd' }],
				lw: [{ at: 'o2', label: 'F2' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'You reach the puck in the right corner. [[f1|F1]] is coming down the right wall right behind you, between you and RW. You...',
						options: [
							{
								text: 'Take it behind the net, away from F1',
								correct: true,
								why: 'The net screens you from F1 and he has to chase. That buys time and sets up a [[wheel]] or a reverse.'
							},
							{
								text: '[[rim|Rim]] it up the right wall to RW',
								correct: false,
								why: 'F1 is standing in that lane. The rim runs into him or his stick and he has the puck deep in your end.'
							},
							{
								text: 'Stop in the corner and protect the puck',
								correct: false,
								why: 'You let F1 pin you on the boards and the rest of their forwards arrive. Keep the puck moving.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'RD carries it behind the net toward the left side, selling the [[wheel]]. F1 chases right on his tail. LD slides into the corner RD just left and calls "Reverse!"',
			phase: 'support',
			positions: {
				lw: { x: 38, y: 3.5 },
				c: { x: 22, y: 36 },
				rw: { x: 38, y: 81.5 },
				ld: { x: 13, y: 53 },
				rd: { x: 4, y: 30.5 },
				o1: { x: 9.5, y: 37.5 },
				o2: { x: 22, y: 17 },
				o3: { x: 50, y: 42 },
				o4: { x: 82, y: 24 },
				o5: { x: 78, y: 64 }
			},
			puck: { x: 5.5, y: 29.5 },
			puckCarrier: 'rd',
			arrows: [
				{ kind: 'pass', from: 'rd', to: { x: 9, y: 58 }, via: { x: -4, y: 46 } },
				{ kind: 'skate', from: 'c', to: { x: 26, y: 52 } }
			],
			roles,
			notes: {
				lw: {
					where: 'On the left boards near the top of the left circle, back to the boards, stick on the ice.',
					read: 'Watch RD coming around the net and [[f2|F2]] waiting on your side. If F2 is sitting there, a [[wheel]] to you runs right into him.',
					why: 'Staying on the wall keeps F2 honest and keeps you an option if RD does come all the way around.'
				},
				c: {
					where: 'Low on the left side of the [[slot]], moving with RD.',
					read: 'Watch RD\'s hands and listen for LD\'s call. The moment the puck goes back the other way, cut back across the [[low-slot|low slot]] to the right side.',
					why: 'Moving with RD keeps you close if he keeps the [[wheel]]. Cutting back puts you under the puck again for LD.'
				},
				rw: {
					where: 'Holding on the right boards between the dot and the top of the circle, back to the boards, open to the ice.',
					read: 'Watch RD and LD. RD is skating away from you, but if LD calls "reverse", the puck is coming back to your side.',
					why: 'If you leave the wall now, LD has nobody to pass to when he gets the reverse.'
				},
				ld: {
					where: 'Low in the right corner, just off the right post, near the goal line.',
					read: 'Watch [[f1|F1]]. He is chasing RD around the net with all his speed going to the left. Call "Reverse!" loud and early, stick on the ice.',
					why: 'F1 cannot stop and turn fast enough to get back. The puck lands in the space he just left, with you already there.'
				},
				rd: {
					where: 'Behind the net heading for the left side, with F1 on your hip.',
					read: 'F1 is right on your tail and [[f2|F2]] is waiting on the left side. LD is calling "reverse". Bank it hard off the end boards back toward the right corner, behind F1.',
					why: 'Going the other way beats a [[forecheck|forechecker]] with momentum. Keep [[wheel|wheeling]] and you skate into F2 with F1 still on you.'
				}
			},
			reads: {
				rd: [
					{ at: 'o1', label: 'F1' },
					{ at: 'ld' }
				],
				ld: [{ at: 'o1', label: 'F1' }],
				lw: [{ at: 'o2', label: 'F2' }],
				rw: [{ at: 'ld' }],
				c: [{ at: 'rd' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'You are carrying it behind the net toward the left. [[f1|F1]] is on your tail, [[f2|F2]] is waiting on the left side, and LD yells "Reverse!" You...',
						options: [
							{
								text: 'Bank it hard off the end boards back toward the right corner',
								correct: true,
								why: 'F1 is going the wrong way and cannot turn in time. The puck goes behind him to LD in open ice.'
							},
							{
								text: 'Keep [[wheel|wheeling]] up the left side',
								correct: false,
								why: 'F2 is waiting there and F1 is still on you. You get squeezed between two [[forecheck|forecheckers]] below the circle.'
							},
							{
								text: 'Pass up the left wall to LW',
								correct: false,
								why: 'F2 is sitting in that lane. A pick-off there is a scoring chance against.'
							}
						]
					}
				},
				ld: {
					drag: {
						target: { kind: 'ellipse', cx: 12, cy: 55, rx: 7, ry: 6 },
						correct:
							'Yes. Low in the right corner, just off the post. RD can bank it back to you there, and F1 has just skated out of that space.',
						incorrect:
							'For a reverse, the partner D slides into the corner the puck carrier just left: low, just off the right post. Stay out of the [[slot]] and away from the far side where F2 is.'
					}
				},
				rw: {
					decision: {
						prompt: 'RD is carrying it behind the net away from you, toward the left side. You...',
						options: [
							{
								text: 'Hold your spot on the right wall, ready for the reverse',
								correct: true,
								why: 'If RD reverses it, the puck comes back to your side and LD needs you on the wall for the next pass.'
							},
							{
								text: 'Leave the wall and cut across the middle to the left',
								correct: false,
								why: 'Too early. If the reverse comes, LD has no outlet on the right side, and you are skating into traffic.'
							},
							{
								text: 'Skate up to the red line',
								correct: false,
								why: 'The puck is still behind your net. Leaving the zone now takes away the short pass the breakout needs.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'LD picks up the reverse in the right corner. F1 is stranded on the far side of the net. LD moves it right away up the right wall to RW.',
			phase: 'first-pass',
			positions: {
				lw: { x: 50, y: 5 },
				c: { x: 26, y: 52 },
				rw: { x: 38, y: 81.5 },
				ld: { x: 10, y: 57 },
				rd: { x: 6, y: 34 },
				o1: { x: 10, y: 28 },
				o2: { x: 26, y: 20 },
				o3: { x: 46, y: 46 },
				o4: { x: 82, y: 26 },
				o5: { x: 74, y: 70 }
			},
			puck: { x: 11.5, y: 59 },
			puckCarrier: 'ld',
			arrows: [
				{ kind: 'pass', from: 'ld', to: { x: 38, y: 81.5 }, via: { x: 22, y: 76 } },
				{ kind: 'skate', from: 'c', to: { x: 40, y: 62 } },
				{ kind: 'skate', from: 'rd', to: { x: 14, y: 40 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Pushing up the left boards toward your blue line, staying wide.',
					read: 'Watch the puck. It went back to the right side, so you are now the [[weak-side]] winger.',
					why: 'Getting up ice on your side gives the play width and pushes their D back, which opens the middle for C.'
				},
				c: {
					where: 'Cutting back across the [[low-slot|low slot]] toward the right side, under the puck.',
					read: 'Watch LD with the puck and RW on the wall. Curl so you arrive inside RW, about 25 feet off the boards, moving up ice.',
					why: 'LD, RW and you form the [[triangle]] on the right side. RW needs someone to bump it to.'
				},
				rw: {
					where: 'On the right boards between the dot and the top of the circle, back to the boards, stick on the ice as a target.',
					read: 'Watch the pass coming from LD, then [[shoulder-check|shoulder check]] up ice for their D on your side and for C swinging in.',
					why: 'Knowing where their D and C are before the puck arrives lets you move it on your first touch.'
				},
				ld: {
					where: 'Low in the right corner with the puck, just off the post.',
					read: '[[f1|F1]] is stuck on the far side and [[f2|F2]] is over on the left. RW is open on the wall. Move it now.',
					why: 'The reverse only buys a second or two. Hold the puck and F1 gets back on you.'
				},
				rd: {
					where: 'Coming out from behind the net on the left side, heading to the front of the net.',
					read: 'Watch F1 and F2. You are now the D without the puck, so you take the front of the net.',
					why: 'Until the puck is out, one D stays home. You are closest to the net, so it is you.'
				}
			},
			reads: {
				ld: [
					{ at: 'rw' },
					{ at: 'o1', label: 'F1' }
				],
				rw: [
					{ at: 'ld' },
					{ at: 'o5', label: 'Their D' }
				],
				c: [{ at: 'rw' }],
				lw: [{ at: 'o4', label: 'Their D' }],
				rd: [{ at: 'o2', label: 'F2' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt:
							'You picked up the reverse in the right corner. [[f1|F1]] is stuck on the far side of the net and [[f2|F2]] is on the left. RW is on the right wall. You...',
						options: [
							{
								text: 'Pass it up the right wall to RW right away',
								correct: true,
								why: 'The reverse bought you a second or two. Using it right now gets the puck to the wall before F1 recovers.'
							},
							{
								text: 'Pass it back behind the net to RD',
								correct: false,
								why: 'That sends it back toward F1 and F2. You just beat them; do not give them a second chance.'
							},
							{
								text: 'Carry it out through the [[slot]]',
								correct: false,
								why: 'The [[slot]] is where a turnover hurts most. With RW open on the wall, there is no reason to skate through the middle.'
							}
						]
					}
				},
				c: {
					drag: {
						target: { kind: 'ellipse', cx: 38, cy: 62, rx: 9, ry: 6 },
						correct:
							'Yes. Low on the right side, inside RW and below the top of the circle. RW can bump it to you and you are already moving up ice.',
						incorrect:
							'After the reverse, C swings back to the puck side: low on the right, inside RW, about 25 feet off the boards. Not up high, and not on the far side.'
					}
				},
				lw: {
					decision: {
						prompt:
							'You were set up for the [[wheel]] on the left, but RD reversed the puck back to the right corner. You...',
						options: [
							{
								text: 'Push up the left side, staying wide, as the weak-side winger',
								correct: true,
								why: 'The puck is on the other side now. Width up ice gives C and RW a second option and stretches their D.'
							},
							{
								text: 'Stay low on the left wall in case it comes back',
								correct: false,
								why: 'The puck is going up the right side. Staying low leaves the play with no width going up ice.'
							},
							{
								text: 'Cut across to the right corner to help',
								correct: false,
								why: 'That puts a fourth player on the puck side and leaves the whole left side empty.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'A couple of seconds later: their D on the right side stayed back, so RW bumped it to C swinging through, and the unit exits up the right side. F1 and F2 are caught on the wrong side.',
			phase: 'exit',
			positions: {
				lw: { x: 100, y: 12 },
				c: { x: 80, y: 60 },
				rw: { x: 58, y: 79 },
				ld: { x: 40, y: 56 },
				rd: { x: 36, y: 36 },
				o1: { x: 22, y: 40 },
				o2: { x: 36, y: 22 },
				o3: { x: 64, y: 46 },
				o4: { x: 100, y: 28 },
				o5: { x: 94, y: 68 }
			},
			puck: { x: 82, y: 61.5 },
			puckCarrier: 'c',
			arrows: [
				{ kind: 'skate', from: 'c', to: { x: 118, y: 56 } },
				{ kind: 'skate', from: 'lw', to: { x: 122, y: 14 } },
				{ kind: 'skate', from: 'rw', to: { x: 96, y: 79 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Wide on the left side at the red line, skating with speed.',
					read: 'Look across at C with the puck and at their D on your side. Stay level with or behind the puck at their blue line so you are not [[offside]].',
					why: 'A wide LW gives C a second option and keeps their D from sliding over onto him.'
				},
				c: {
					where: 'Carrying the puck over your blue line on the right side of the middle, at full speed.',
					read: 'Head up: their D on your side is backing off. Find LW wide on the far side and RW coming up behind you.',
					why: 'A forward with the puck and speed through the [[neutral-zone|neutral zone]] is what the breakout is for.'
				},
				rw: {
					where: 'Off the wall after the bump, skating up the right side.',
					read: 'Watch C and their D on your side. Stay wide so C has you as a drop or a give-and-go.',
					why: 'Once the puck is out, all three forwards attack together.'
				},
				ld: {
					where: 'Following the play up toward the top of the right circle.',
					read: 'Watch C and [[f3|F3]]. Stay close enough to take a pass back if the forwards need to [[regroup]].',
					why: 'D who stay deep leave a big gap between them and the forwards. Following up keeps the five of you connected.'
				},
				rd: {
					where: 'Following up on the left side, a little behind LD.',
					read: 'Watch F1 and F2, who are now behind the play. If the puck turns over, you are the last one back.',
					why: 'One D joins, the other stays the deepest player, ready to defend if it comes back.'
				}
			},
			reads: {
				c: [
					{ at: 'o5', label: 'Their D' },
					{ at: 'lw' }
				],
				lw: [{ at: 'o4', label: 'Their D' }],
				rw: [{ at: 'c' }],
				ld: [{ at: 'o3', label: 'F3' }],
				rd: [{ at: 'o2', label: 'F2' }]
			}
		}
	]
};

export default play;
