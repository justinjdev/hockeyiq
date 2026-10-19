import type { Play } from '../../types';

const before = {
	rw: 'F1 (puck carrier)',
	c: 'F2 (low support)',
	lw: 'F3 (net front)',
	rd: 'Strong-side point',
	ld: 'Weak-side point'
};
const after = {
	c: 'F1 (puck carrier)',
	lw: 'F2 (low support)',
	rw: 'F3 (net front)',
	rd: 'Strong-side point',
	ld: 'Weak-side point'
};

const play: Play = {
	id: 'oz-cycle-low',
	title: 'Low cycle',
	category: 'o-zone',
	system: 'Three-forward cycle',
	strength: '5v5',
	summary:
		'The [[cycle]]: three forwards keep the puck deep by rotating through three spots: puck carrier on the wall, low [[support]] behind him, and the [[net-front]]. When the carrier is pressured he leaves the puck back down the boards for the support man, then cuts to the net, and the net-front player drops low. Every rotation forces the defenders to switch who they cover, and a switch is where coverage breaks.',
	slots: [
		{ id: 'lw', home: 'LW' },
		{ id: 'c', home: 'C' },
		{ id: 'rw', home: 'RW' },
		{ id: 'ld', home: 'LD' },
		{ id: 'rd', home: 'RD' }
	],
	opponents: [
		{ id: 'o1', label: 'D' },
		{ id: 'o2', label: 'D' },
		{ id: 'o3', label: 'C' },
		{ id: 'o4', label: 'W' },
		{ id: 'o5', label: 'W' }
	],
	keyConcepts: [],
	variations:
		'This is the version where the three spots are carrier, low support and net front, and the net-front player drops low to replace the support man. Many coaches keep the third forward high in the slot instead (one forward below the puck, one level with it, one above it), so there is always a safety between the puck and your blue line; the rotation works the same way. The carrier can also start the rotation behind the net instead of up the wall, and the other two read his choice and follow. A "low switch" has the two low forwards cross paths below the dots to drag a defender with them while the third forward pops into open ice on the [[weak-side|weak side]]. Some teams use a five-man rotation where a D comes down the wall and a forward covers his spot at the [[point]]. Whatever the version, the cycle is a setup, not the goal: it should end in a shot from the slot, a pass to the middle, a [[low-to-high|low-to-high]] play, or a drive to the net.',
	sources: [
		{
			title: 'Tactics 101: Owning possession through the cycle',
			publisher: 'Sound Of Hockey (James Ngai)',
			url: 'https://soundofhockey.com/2026/03/31/tactics-101-owning-possession-through-the-cycle'
		},
		{
			title: 'Offensive Zone Play',
			publisher: 'Learn Ice Hockey',
			url: 'https://learn-ice-hockey.com/systems/offensive_zone_play/'
		},
		{
			title: 'Cycle Introduction (drill)',
			publisher: 'HockeyShare',
			url: 'https://www.hockeyshare.com/drills/print/68278'
		},
		{
			title: 'IHM Academy Lesson #10: Offensive Zone Cycle, Low Switch and Pop Support',
			publisher: 'IceHockeyMan (Coach Mark Lehtonen)',
			url: 'https://icehockeyman.com/tag/low-switch/'
		}
	],
	steps: [
		{
			caption:
				'RW wins the puck in the right corner. Our three forwards form a [[triangle]]: RW with the puck, C low behind him, LW at the [[net-front|net front]]. Their D is on RW from the inside and their C guards the low slot.',
			positions: {
				lw: { x: 181, y: 41 },
				c: { x: 189, y: 66 },
				rw: { x: 180, y: 80 },
				ld: { x: 131, y: 34 },
				rd: { x: 130, y: 72 },
				o1: { x: 172, y: 71 },
				o2: { x: 185, y: 46 },
				o3: { x: 176, y: 56 },
				o4: { x: 141, y: 68 },
				o5: { x: 146, y: 34 }
			},
			puck: { x: 178.5, y: 81.5 },
			puckCarrier: 'rw',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 163, y: 81 } },
				{ kind: 'skate', from: 'c', to: { x: 181, y: 79.5 } }
			],
			roles: before,
			notes: {
				lw: {
					where: 'At the net front, a stride outside the crease, between their D and the goalie.',
					read: 'Watch the puck on RW\'s stick and keep a feel for their D beside you. Stick on the ice, ready for a pass to the front.',
					why: 'One forward always has to threaten the net. A cycle where nobody is in front is just three players skating in a corner.'
				},
				c: {
					where: 'Low on the right side, near the goal line, about 10 to 15 feet behind RW.',
					read: 'Watch RW and the D on his inside hip. If RW gets squeezed, the puck is coming back down the boards to you.',
					why: 'You are RW\'s outlet. Close enough for a short pass back, far enough that one defender cannot cover both of you.'
				},
				rw: {
					where: 'In the right corner with the puck, starting up the wall.',
					read: '[[shoulder-check|Shoulder check]] for their D. He is coming from the inside, so keep your body between him and the puck and the puck on your outside, near the boards.',
					why: 'Protecting the puck on the wall buys time for C and LW to get to their spots. Nobody has to make a pass yet.'
				},
				ld: {
					where: 'Inside the blue line, slid in from the left boards toward the middle.',
					read: 'Watch the puck and their weak-side winger in the high slot. If the puck comes back up the right side, you are RD\'s partner on the line.',
					why: 'The puck is on the far side. Sliding toward the middle keeps you an easy pass for RD and puts you in front of any puck that squirts out high.'
				},
				rd: {
					where: 'Just inside the blue line on the right side, near the boards.',
					read: 'Watch RW on the wall below you and their winger in front of you. Be ready to stop a puck that is rimmed up the boards.',
					why: 'You keep the puck in the zone. If the cycle goes up the wall and nobody is on the line, the puck leaves the zone and the cycle is over.'
				}
			},
			reads: {
				rw: [{ at: 'o1', label: 'Their D' }],
				c: [{ at: 'rw' }],
				lw: [{ at: 'rw' }],
				rd: [{ at: 'o4', label: 'Their W' }],
				ld: [{ at: 'o5', label: 'Their W' }]
			}
		},
		{
			caption:
				'RW carries up the wall with their D on his inside hip. Instead of forcing it, he leaves the puck back down the boards for C. Then the rotation starts: RW cuts to the net and LW drops low to become the new support.',
			positions: {
				lw: { x: 181, y: 41 },
				c: { x: 181, y: 79.5 },
				rw: { x: 162, y: 81 },
				ld: { x: 132, y: 36 },
				rd: { x: 130, y: 73 },
				o1: { x: 164, y: 73 },
				o2: { x: 185, y: 46 },
				o3: { x: 176, y: 62 },
				o4: { x: 143, y: 70 },
				o5: { x: 147, y: 36 }
			},
			puck: { x: 163.5, y: 82.5 },
			puckCarrier: 'rw',
			arrows: [
				{ kind: 'pass', from: 'rw', to: { x: 180, y: 80.5 } },
				{ kind: 'skate', from: 'rw', to: { x: 180, y: 46 }, via: { x: 168, y: 62 } },
				{ kind: 'skate', from: 'lw', to: { x: 186, y: 70 }, via: { x: 190, y: 56 } }
			],
			roles: before,
			notes: {
				lw: {
					where: 'Leaving the net front, sliding down past the right post toward the goal line.',
					read: 'Watch RW. The moment he leaves the puck and turns toward the net, you drop low. Do not leave the front until you see him coming.',
					why: 'RW is taking your spot in front, so the low support spot is now empty. You fill it so the next carrier has an outlet behind him.'
				},
				c: {
					where: 'On the right boards, 10 to 15 feet below RW, stick on the ice and facing up the wall.',
					read: 'Watch RW and the puck. When their D squeezes him, expect the puck along the boards to you and check where their C is before it arrives.',
					why: 'Taking the pass while moving up the wall makes you the new carrier. Their D is still stuck on RW, so you get the puck with time.'
				},
				rw: {
					where: 'On the right wall near the bottom of the circle, puck on your outside, their D on your inside hip.',
					read: 'Their D is on you and you cannot turn up ice. C is behind you down the wall with nobody on him. Leave it for C, then curl inside to the net.',
					why: 'Forcing the puck up the wall into a defender loses it. Leaving it back to the open man keeps possession, and your cut to the net replaces LW in front.'
				},
				ld: {
					where: 'Inside the blue line, left of the middle.',
					read: 'Watch their weak-side winger. If he cheats down low to help, the high slot is yours to step into for a pass.',
					why: 'You and RD are the only two players above the puck. Stay between it and your own net in case it squirts out high.'
				},
				rd: {
					where: 'Just inside the blue line on the right side.',
					read: 'Watch the puck going back down the wall. It is moving away from you, so hold your spot; do not follow it down.',
					why: 'The puck is going deeper, not coming to you. Holding the line keeps you in position for the next time the cycle comes up the wall.'
				}
			},
			reads: {
				rw: [
					{ at: 'o1', label: 'Their D' },
					{ at: 'c' }
				],
				c: [{ at: 'o3', label: 'Their C' }],
				lw: [{ at: 'rw' }],
				rd: [{ at: 'o4', label: 'Their W' }],
				ld: [{ at: 'o5', label: 'Their W' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt:
							'You are carrying up the right wall. Their D is on your inside hip and you cannot turn up ice. C is 12 feet behind you down the boards with nobody on him. You...',
						options: [
							{
								text: 'Leave the puck back down the boards for C, then cut to the net',
								correct: true,
								why: 'That is the [[cycle]]. C is open and moving up the wall, and your cut to the net replaces LW in front, so the [[triangle]] stays whole.'
							},
							{
								text: 'Keep driving up the wall to the blue line',
								correct: false,
								why: 'Their D is right on you and their winger is waiting up high. Forcing it into two defenders usually ends with the puck out of the zone.'
							},
							{
								text: 'Throw it to the front of the net',
								correct: false,
								why: 'Their D and C are both between you and the net. A blind pass into the middle is the easiest turnover they get all shift.'
							}
						]
					}
				},
				c: {
					decision: {
						prompt: 'RW is carrying up the right wall with their D on him. Where should you be?',
						options: [
							{
								text: 'On the boards 10 to 15 feet below him, ready for the puck to come back',
								correct: true,
								why: 'You give RW a safe pass away from pressure, and you take it already skating up the wall as the next carrier.'
							},
							{
								text: 'Right beside him on the wall to help win it',
								correct: false,
								why: 'Two of you in one spot means one defender covers both. Spread out so his pass back actually gets past the D.'
							},
							{
								text: 'In the slot, waiting for a pass',
								correct: false,
								why: 'LW already holds the front. With you in the slot, RW has nobody behind him and has to force the puck into their D.'
							}
						]
					}
				},
				lw: {
					decision: {
						prompt:
							'You are at the net front. RW just left the puck back for C and is cutting toward you. You...',
						options: [
							{
								text: 'Drop low to the goal line on the right side to become the support',
								correct: true,
								why: 'RW is taking the net front, so the low spot behind C is empty. Filling it gives C an outlet and keeps the rotation going.'
							},
							{
								text: 'Stay at the net front',
								correct: false,
								why: 'Now two of you share one spot and C has nobody behind him. The [[triangle]] is broken.'
							},
							{
								text: 'Head up to the blue line',
								correct: false,
								why: 'That leaves the play two-on-four down low. The D already cover the line.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'A couple of seconds later, the [[triangle]] has rotated one spot. C is now the carrier (F1) going up the wall, LW is the low support (F2) behind him, and RW is the net-front man (F3). Same shape, new players, and the defenders had to switch who they cover.',
			positions: {
				lw: { x: 182, y: 79 },
				c: { x: 167, y: 81 },
				rw: { x: 180, y: 45 },
				ld: { x: 134, y: 40 },
				rd: { x: 130, y: 74 },
				o1: { x: 171, y: 72 },
				o2: { x: 185, y: 47 },
				o3: { x: 176, y: 64 },
				o4: { x: 142, y: 70 },
				o5: { x: 148, y: 38 }
			},
			puck: { x: 166, y: 82.5 },
			puckCarrier: 'c',
			arrows: [
				{ kind: 'skate', from: 'c', to: { x: 157, y: 81 } },
				{ kind: 'skate', from: 'lw', to: { x: 171, y: 81 } }
			],
			roles: after,
			notes: {
				lw: {
					where: 'Low on the right boards, 10 to 15 feet behind C.',
					read: 'Watch C and their D chasing him. If their D squeezes C, the puck comes back to you and you become the carrier.',
					why: 'You are now the support man. If C has to cycle again, you take it and the rotation repeats: C goes to the net, RW drops low.'
				},
				c: {
					where: 'On the right wall with the puck, moving up toward the top of the circle.',
					read: 'Look at their D. He had to turn and chase you after the switch. Is he square to you, or is he late and reaching?',
					why: 'A late, reaching defender is the moment to attack. A square one means you leave it for LW and keep cycling.'
				},
				rw: {
					where: 'At the net front, a stride outside the crease, stick on the ice.',
					read: 'Find the line between C and the goalie\'s eyes and stand on it. Keep a feel for their D next to you.',
					why: 'You finished your rotation in front. Now you are the [[screen]] and the [[tip]] if C shoots, and the target if he finds a lane to the front.'
				},
				ld: {
					where: 'Inside the blue line, a little left of the middle.',
					read: 'Watch their weak-side winger and the high slot. If C looks up for you, you are his [[low-to-high]] option.',
					why: 'From the middle of the line you are a pass option for C and the first defender back if the puck comes out.'
				},
				rd: {
					where: 'Just inside the blue line on the right side, stick on the ice.',
					read: 'Watch C coming up the wall toward you and their winger in front of you. Be ready to take a pass or stop a rim.',
					why: 'The cycle is coming up your side. Holding the line gives C a high option and keeps the puck in.'
				}
			},
			reads: {
				c: [{ at: 'o1', label: 'Their D' }],
				lw: [{ at: 'c' }],
				rw: [{ at: 'c' }],
				rd: [{ at: 'o4', label: 'Their W' }],
				ld: [{ at: 'o5', label: 'Their W' }]
			},
			quiz: {
				rw: {
					drag: {
						target: { kind: 'ellipse', cx: 180, cy: 45, rx: 5, ry: 4.5 },
						correct:
							'Yes. You came off the wall to the net front, a stride outside the crease. That is the spot LW left when he dropped low.',
						incorrect:
							'After you leave the puck for C, your rotation ends at the net front: just outside the crease, between their D and the goalie.'
					}
				},
				ld: {
					drag: {
						target: { kind: 'ellipse', cx: 134, cy: 39, rx: 6, ry: 7 },
						correct:
							'Yes. Inside the line and a little left of the middle: a pass option for C and the safety if the puck comes out.',
						incorrect:
							'With the puck on the far side, the [[weak-side-d|weak-side D]] slides from the boards toward the middle of the blue line, staying just inside it.'
					}
				},
				rd: {
					decision: {
						prompt:
							'C is carrying up the right wall toward you with their D chasing him. Their winger is in front of you. You...',
						options: [
							{
								text: 'Hold your spot just inside the blue line, ready for a pass or a rim',
								correct: true,
								why: 'C may need a high option, and if their D knocks the puck loose up the wall you are there to keep it in.'
							},
							{
								text: '[[pinch|Pinch]] down the wall to help C',
								correct: false,
								why: 'C still has the puck and LW behind him. If you dive down and it comes loose past you, it is a two-on-one the other way.'
							},
							{
								text: 'Back out over the blue line to be safe',
								correct: false,
								why: 'Then nobody holds the line. Any puck that comes up the wall leaves the zone and the cycle is over.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'Their D lunges at C on the wall and overskates. C cuts back off the wall toward the middle and shoots from the top of the right circle, with RW [[screen|screening]]. LW steps to the right post for a rebound, and both D hold the line.',
			positions: {
				lw: { x: 185, y: 54 },
				c: { x: 157, y: 64 },
				rw: { x: 181, y: 47 },
				ld: { x: 136, y: 40 },
				rd: { x: 131, y: 72 },
				o1: { x: 156, y: 75 },
				o2: { x: 186, y: 43 },
				o3: { x: 175, y: 61 },
				o4: { x: 141, y: 67 },
				o5: { x: 149, y: 40 }
			},
			puck: { x: 158.5, y: 63 },
			puckCarrier: 'c',
			arrows: [{ kind: 'shot', from: 'c', to: { x: 189, y: 43 } }],
			roles: after,
			notes: {
				lw: {
					where: 'Low, just off the right post, stick on the ice.',
					read: 'Watch the puck off C\'s stick and the goalie\'s pads. A save that kicks out to your side is yours.',
					why: 'Shots from the right side often leave rebounds and pucks along the goal line. Being at the post turns a save into a second chance.'
				},
				c: {
					where: 'Off the wall at the top of the right circle, with the puck, heading toward the middle.',
					read: 'Their D lunged and is behind you. Look at the net: RW is in front, so shoot low through him.',
					why: 'The cycle made their D chase. Once he is beaten, stop cycling and attack; a cycle is a setup, not the goal.'
				},
				rw: {
					where: 'At the net front, on the line between C and the goalie\'s eyes.',
					read: 'Watch the puck coming. Keep your stick on the ice for a [[tip]] and be ready to whack at a rebound.',
					why: 'A goalie who cannot see the shot cannot set for it. Your [[screen]] is what makes a shot from out here dangerous.'
				},
				ld: {
					where: 'Inside the blue line, left of the middle.',
					read: 'Watch for a rebound that comes out high and for their weak-side winger leaving the zone early.',
					why: 'If the puck comes out, you are the first one there to keep it in or to get back. Three forwards are already low.'
				},
				rd: {
					where: 'Just inside the blue line on the right side.',
					read: 'Watch the shot and their winger in front of you. If the puck comes up your wall, stop it at the line.',
					why: 'You stay high so a blocked shot or long rebound is not an odd-man rush against you.'
				}
			},
			reads: {
				c: [
					{ at: 'o1', label: 'Beaten D' },
					{ at: 'rw' }
				],
				rw: [{ at: 'c' }],
				lw: [{ at: { x: 187, y: 49 }, label: 'Rebound' }],
				ld: [{ at: 'o5', label: 'Their W' }],
				rd: [{ at: 'o4', label: 'Their W' }]
			},
			quiz: {
				c: {
					decision: {
						prompt:
							'You have the puck on the right wall. Their D lunges at you with his stick and overskates you. RW is at the net front. You...',
						options: [
							{
								text: 'Cut back off the wall toward the middle and shoot low through RW',
								correct: true,
								why: 'The defender is beaten and behind you. A shot with a [[screen]] from the top of the circle is what the cycle was built to create.'
							},
							{
								text: 'Leave it back down the wall for LW and keep cycling',
								correct: false,
								why: 'That is the right play when the defender is square to you. Here he is beaten; cycling again lets him recover and wastes the chance.'
							},
							{
								text: 'Rim it up the boards to RD at the point',
								correct: false,
								why: 'Safe, but you just got past your checker in a scoring area. Use the point when the middle is closed.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
