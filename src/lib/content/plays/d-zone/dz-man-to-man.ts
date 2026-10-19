import type { Play } from '../../types';

const roles = {
	rd: 'Covers their puck-side F',
	ld: 'Covers their net-front F',
	c: 'Covers their third F',
	rw: 'Covers their right-point D',
	lw: 'Covers their left-point D'
};

const play: Play = {
	id: 'dz-man-to-man',
	title: 'Man-to-man D-zone coverage',
	category: 'd-zone',
	system: 'Man-to-man',
	strength: '5v5',
	summary:
		'In [[man-to-man]] coverage each of us picks up one of them and stays with him anywhere in our zone until we win the puck. The D and the center take their three forwards; the wingers take their two D at the [[point|points]].',
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
	keyConcepts: [],
	variations:
		'Pure man-to-man is rare at high levels now; most teams play a hybrid. A common one is man-to-man when the puck is high (at the points) and [[zone-coverage|zone]] with a tight [[collapse]] when the puck is low. Some teams have the three low players (both D and the center) mark men while the wingers play the [[slot]] instead of the points, or the reverse. Who takes whom also varies: some coaches let the first forward back take the nearest forward, not the center specifically. If you lose your man, the usual rule is to get to the slot first, then find him.',
	sources: [
		{
			title: 'Explained: Man-to-Man Defensive Zone Coverage',
			publisher: 'The Coaches Site',
			url: 'https://members.thecoachessite.com/article/what-is-man-to-man-defensive-zone-coverage-in-hockey'
		},
		{
			title: 'Hockey Systems 101: Defensive Zone Strategies',
			publisher: 'Blue Seat Blogs',
			url: 'https://blueseatblogs.com/2013/02/19/hockey-systems-101-defensive-zone-strategies/'
		},
		{
			title: 'What Is Man-to-Man Coverage in Hockey?',
			publisher: 'Ice Hockey Man',
			url: 'https://icehockeyman.com/2026/06/07/what-is-man-to-man-coverage-in-hockey-ihm/'
		}
	],
	steps: [
		{
			caption:
				'They carry the puck into our zone down our right side. Each of us picks up a man: the D and C take their three forwards, the wingers take their two D.',
			phase: 'entry',
			positions: {
				lw: { x: 98, y: 18 },
				c: { x: 86, y: 32 },
				rw: { x: 98, y: 60 },
				ld: { x: 58, y: 40 },
				rd: { x: 58, y: 68 },
				o1: { x: 72, y: 74 },
				o2: { x: 80, y: 46 },
				o3: { x: 92, y: 24 },
				o4: { x: 112, y: 22 },
				o5: { x: 110, y: 64 }
			},
			puck: { x: 70, y: 75 },
			puckCarrier: 'o1',
			arrows: [
				{ kind: 'skate', from: 'o1', to: { x: 30, y: 74 } },
				{ kind: 'skate', from: 'rd', to: { x: 34, y: 68 } },
				{ kind: 'skate', from: 'ld', to: { x: 30, y: 46 } },
				{ kind: 'skate', from: 'c', to: { x: 46, y: 30 } },
				{ kind: 'skate', from: 'rw', to: { x: 76, y: 68 } },
				{ kind: 'skate', from: 'lw', to: { x: 76, y: 18 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Skating back on the left side, a few strides inside their left D.',
					read: 'Find your man: their D on the left side. Watch whether he comes in to the [[point]] or stays back.',
					why: 'In man-to-man the wingers usually take their D. If you skate past him to the slot, he is wide open at the point.'
				},
				c: {
					where: 'Backchecking through the middle, on the inside of their trailing forward.',
					read: 'Find the third forward, the one not carrying the puck and not driving the net. Get between him and our net.',
					why: 'D take the two forwards who arrive first. The trailer is yours, and trailers score a lot of goals because nobody picks them up.'
				},
				rw: {
					where: 'Coming back on the right side toward our blue line, inside their right D.',
					read: 'Your man is their D on the right. Note where he is, but stay level with the puck until it is in our zone.',
					why: 'You need to be close enough to reach the [[point]] when the puck goes there, which is usually the next pass.'
				},
				ld: {
					where: 'Backing in through the middle, between their middle driver and our net.',
					read: 'Watch their forward driving the middle without the puck. He is heading for the [[net-front]], and he is yours.',
					why: 'The player driving the net is the most dangerous one without the puck. Be on his inside before he gets there.'
				},
				rd: {
					where: 'Backing up on the right side, holding a tight [[gap]] on the puck carrier.',
					read: 'Watch the carrier\'s chest, not the puck. He is going wide down your wall toward the corner.',
					why: 'Steering him wide keeps him out of the [[slot]]. Once he is in the corner you can angle him into the boards and stay on his net side.'
				}
			},
			reads: {
				rd: [{ at: 'o1' }],
				ld: [{ at: 'o2' }],
				c: [{ at: 'o3' }],
				rw: [{ at: 'o5' }],
				lw: [{ at: 'o4' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'Their forward carries the puck down your side of the ice into our zone. You are the right D in man-to-man. You...',
						options: [
							{
								text: 'Hold a tight [[gap]], stay inside him, and steer him wide toward the corner',
								correct: true,
								why: 'He is your man. Staying between him and the net forces him to the outside, where his shot is weak.'
							},
							{
								text: 'Drop back to the front of our net',
								correct: false,
								why: 'That gives your man free ice to walk into the [[slot]]. LD has the net-front forward; your job is the carrier.'
							},
							{
								text: 'Go after the forward driving the middle',
								correct: false,
								why: 'That is LD\'s man. If you both take him, the puck carrier is uncovered with a clear lane.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'A few seconds later the puck is in our right corner. Everyone is stuck to his man: RD on the carrier, LD on the [[net-front]] forward, C on the third forward, the wingers on the [[point|points]].',
			phase: 'puck-low',
			positions: {
				lw: { x: 66, y: 18 },
				c: { x: 31, y: 26 },
				rw: { x: 66, y: 68 },
				ld: { x: 15.5, y: 46 },
				rd: { x: 20, y: 66 },
				o1: { x: 16, y: 70 },
				o2: { x: 19.5, y: 49 },
				o3: { x: 34, y: 22 },
				o4: { x: 72, y: 14 },
				o5: { x: 72, y: 72 }
			},
			puck: { x: 14, y: 72 },
			puckCarrier: 'o1',
			arrows: [{ kind: 'pass', from: 'o1', to: { x: 70, y: 74 }, via: { x: 40, y: 82 } }],
			roles,
			notes: {
				lw: {
					where: 'Between their left D and our net, about 6 feet inside the [[point]].',
					read: 'Watch your man and the puck. If he sneaks down toward the net, go with him.',
					why: 'He is your responsibility the whole time. Inside position means a pass to him becomes a shot from far out, not a walk-in.'
				},
				c: {
					where: 'On the left side near the dot, goal-side of their third forward.',
					read: 'Keep your stick in the lane between your man and the puck, and glance at the puck every second or two.',
					why: 'He is lurking on the [[weak-side]]. A pass out of the corner to him is a back-door goal unless you are on him.'
				},
				rw: {
					where: 'Between their right D and our net, a few strides inside the [[point]].',
					read: 'Watch the puck carrier in the corner. When he looks up the wall, your man is the target.',
					why: 'The pass up the wall to the point is the easiest play they have. Being close lets you close him down before he can shoot.'
				},
				ld: {
					where: 'Right in front of the crease, between the [[net-front]] forward and our goalie.',
					read: 'Feel your man with your body and stick. Look past him to the puck, but never lose contact.',
					why: 'He is there for [[screen|screens]], [[tip|tips]] and rebounds. Your stick on his stick takes all three away.'
				},
				rd: {
					where: 'In the right corner, pinning the puck carrier against the boards from the net side.',
					read: 'Watch his chest and hands. Is he trying to turn up the wall, go behind the net, or pass?',
					why: 'No hitting needed: angle him in, stick on the puck, body on his net side. That takes away his time. Even if you do not win the puck, he cannot make a clean play.'
				}
			},
			reads: {
				rd: [{ at: 'o1' }],
				ld: [{ at: 'o2' }],
				c: [{ at: 'o3' }],
				rw: [{ at: 'o5' }],
				lw: [{ at: 'o4' }]
			},
			quiz: {
				c: {
					drag: {
						target: { kind: 'ellipse', cx: 30, cy: 27, rx: 7, ry: 5 },
						correct:
							'Yes. Right on your man, on his net side, with your stick in the lane between him and the puck.',
						incorrect:
							'In man-to-man the third forward is yours. He is lurking near the left dot, so you belong right there on his net side, not helping in the corner or parked in the middle.'
					},
					decision: {
						prompt:
							'Your man is drifting to the left side by the dot. The puck is in the right corner and RD is battling for it. You...',
						options: [
							{
								text: 'Stay on your man, goal-side, with your stick in the passing lane',
								correct: true,
								why: 'That is the whole system: you stay with him. A pass across to him becomes a contested puck, not an open back-door shot.'
							},
							{
								text: 'Go into the corner to help RD win the puck',
								correct: false,
								why: 'Helping feels right, but in man-to-man nobody else has your man. One pass and he is alone at the back door.'
							},
							{
								text: 'Park in the middle of the [[slot]] and watch the puck',
								correct: false,
								why: 'That is a zone habit. In man-to-man your teammates expect you to be on him, so nobody will cover for you.'
							}
						]
					}
				},
				ld: {
					decision: {
						prompt:
							'Their forward parks at the [[net-front]]. The puck is in the right corner. You are LD. You...',
						options: [
							{
								text: 'Get between him and the goalie and tie up his stick',
								correct: true,
								why: 'He wants [[tip|tips]], [[screen|screens]] and rebounds. Inside position and stick control take away all three.'
							},
							{
								text: 'Stand beside him and watch the puck in the corner',
								correct: false,
								why: 'Standing next to him is not covering him. When the pass comes, he gets his stick free first.'
							},
							{
								text: 'Go to the corner to double the puck carrier',
								correct: false,
								why: 'That leaves their best scoring threat alone in front of our goalie.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'They move the puck up the wall to their right D at the [[point]]. RW jumps out to his man as he winds up to shoot; everyone else stays glued to theirs.',
			phase: 'puck-to-point',
			positions: {
				lw: { x: 66, y: 18 },
				c: { x: 32, y: 28 },
				rw: { x: 64, y: 68 },
				ld: { x: 15.5, y: 46 },
				rd: { x: 24, y: 70 },
				o1: { x: 28, y: 75 },
				o2: { x: 19.5, y: 49 },
				o3: { x: 36, y: 25 },
				o4: { x: 72, y: 14 },
				o5: { x: 71, y: 72 }
			},
			puck: { x: 70, y: 73 },
			puckCarrier: 'o5',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 68, y: 70 } },
				{ kind: 'shot', from: 'o5', to: { x: 12, y: 44 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Still between their left D and our net, inside the [[point]].',
					read: 'Watch the puck at the other point. A [[d-to-d|D-to-D]] pass to your man is their next option.',
					why: 'If you drift to the middle to watch the puck, the D-to-D pass gives him a free shot with a [[screen]] in front.'
				},
				c: {
					where: 'On the left side, goal-side of your man, a stick-length away.',
					read: 'Watch for your man sliding into the [[slot]] for a pass or a rebound.',
					why: 'Point shots create rebounds. If he is free when the shot comes, he gets the second chance.'
				},
				rw: {
					where: 'Closing hard on their right D at the [[point]], stick out in his [[shooting-lane]].',
					read: 'Watch his stick blade and hips. Is he winding up to shoot, or looking to pass across to his partner?',
					why: 'He is your man and he has the puck. Arriving fast takes his time away; arriving slow gives him a clean shot through traffic.'
				},
				ld: {
					where: 'In front of the crease, between the [[net-front]] forward and the goalie.',
					read: 'Feel your man and find his stick. Keep your eyes on the point between looks at him.',
					why: 'A point shot is only dangerous with a [[screen]] or a [[tip]]. If you own his stick, the goalie sees the puck.'
				},
				rd: {
					where: 'Low on the right wall, on the inside of the forward who passed the puck up.',
					read: 'Your man passed and is now looking to slip toward the net. Stay between him and the crease.',
					why: 'Forwards who pass and go to the net are hard to track. Staying inside means he arrives behind you, not in front of the goalie.'
				}
			},
			reads: {
				rw: [{ at: 'o5' }],
				lw: [{ at: 'o4' }],
				ld: [{ at: 'o2' }],
				rd: [{ at: 'o1' }],
				c: [{ at: 'o3' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt: 'The puck goes up the wall to your man at the [[point]]. You are RW in man-to-man. You...',
						options: [
							{
								text: 'Close on him fast with your stick in his [[shooting-lane]]',
								correct: true,
								why: 'He is your man and he has the puck. Pressure makes him rush the shot or pass, and your stick blocks the lane.'
							},
							{
								text: 'Drop into the [[slot]] to protect the net',
								correct: false,
								why: 'In man-to-man nobody else covers him. Dropping off gives a free point shot with traffic in front.'
							},
							{
								text: 'Skate to the other point to stop the [[d-to-d|D-to-D]] pass',
								correct: false,
								why: 'That is LW\'s man. You would leave yours with the puck and nobody on him.'
							}
						]
					}
				},
				lw: {
					decision: {
						prompt:
							'The puck is at the far [[point]]. Your man, their other D, is open on your side. You are LW in man-to-man. You...',
						options: [
							{
								text: 'Stay between him and the net, close enough to reach him if the puck comes across',
								correct: true,
								why: 'The [[d-to-d|D-to-D]] pass is their next play. Being close and inside means you can block his shot or force a bad one.'
							},
							{
								text: 'Collapse into the [[slot]] to help in front',
								correct: false,
								why: 'That is the zone answer. In man-to-man your teammates are counting on you to take him; dropping off gives him a free shot.'
							},
							{
								text: 'Go help RW pressure the puck',
								correct: false,
								why: 'Two of us on one leaves your man alone, and a quick pass across beats you both.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'Their point shot hits traffic and the rebound squirts into our right corner. RD wins it, and everyone releases his man to get into [[breakout]] spots.',
			phase: 'recover',
			positions: {
				lw: { x: 60, y: 10 },
				c: { x: 30, y: 38 },
				rw: { x: 54, y: 77 },
				ld: { x: 13, y: 34 },
				rd: { x: 14, y: 61 },
				o1: { x: 24, y: 71 },
				o2: { x: 21, y: 50 },
				o3: { x: 38, y: 27 },
				o4: { x: 70, y: 16 },
				o5: { x: 64, y: 70 }
			},
			puck: { x: 12, y: 62 },
			puckCarrier: 'rd',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 40, y: 79 } },
				{ kind: 'skate', from: 'c', to: { x: 26, y: 54 } },
				{ kind: 'skate', from: 'lw', to: { x: 42, y: 7 } }
			],
			roles: { rd: 'Puck carrier', ld: 'D-to-D option', c: 'Low support', rw: 'Strong wing', lw: 'Weak wing' },
			notes: {
				lw: {
					where: 'Still up near the left [[point]], starting to come back down the left wall.',
					read: 'Check where the puck is and how fast their D is moving. Get back down to the wall, back to the boards and open to the puck, so LD has an outlet.',
					why: 'Man-to-man often leaves the wingers high. You have farther to go to reach your [[breakout]] spot than a zone winger would.'
				},
				c: {
					where: 'Leaving your man on the left side and swinging toward the middle, low.',
					read: 'Read whether RD has control. Once he does, your man is no longer your job: get under the puck for [[support]].',
					why: 'The center is RD\'s short option. Staying stuck to your man after we win the puck leaves RD with nobody close.'
				},
				rw: {
					where: 'Coming back down from the [[point]] to the right wall, around the top of the circle.',
					read: '[[shoulder-check|Shoulder check]] where their D is, then get on the wall with your back to the boards, open to the puck, stick on the ice.',
					why: 'RD needs a winger on the wall. You were out at the point with your man, so hustle back; the [[breakout]] waits for you.'
				},
				ld: {
					where: 'Sliding off the net-front to the left post area.',
					read: 'Watch RD and their forwards. Talk to RD: "time" or "man on".',
					why: 'Your man is still in front, but we have the puck now. You are RD\'s [[d-to-d|D-to-D]] option and the safety if it goes wrong.'
				},
				rd: {
					where: 'In the right corner with the puck, near the goal line.',
					read: 'Your man is right behind you. [[shoulder-check|Shoulder check]], then find RW on the wall or C swinging low.',
					why: 'Winning the puck is only half the job. The first pass decides whether we get out or defend again.'
				}
			},
			reads: {
				rd: [{ at: 'o1' }, { at: 'c' }],
				ld: [{ at: 'rd' }],
				c: [{ at: 'rd' }],
				rw: [{ at: 'o5' }],
				lw: [{ at: 'o4' }]
			}
		}
	]
};

export default play;
