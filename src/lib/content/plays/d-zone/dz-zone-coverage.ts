import type { Play } from '../../types';

const roles = {
	rd: 'Strong-side D',
	ld: 'Net-front D',
	c: 'Low support',
	rw: 'Strong-side wing',
	lw: 'Weak-side wing'
};

const play: Play = {
	id: 'dz-zone-coverage',
	title: 'Zone D-zone coverage',
	category: 'd-zone',
	system: 'Zone',
	strength: '5v5',
	summary:
		'In [[zone-coverage]] each of us owns an area of the ice, not an opponent. The D own the corners and the front of the net, the center helps down low, and the wingers own the space between the [[point|points]] and the [[slot]]. When an attacker leaves your area, you hand him to the next teammate.',
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
	keyConcepts: ['strong-weak-side', 'passing-lanes'],
	variations:
		'Zone systems differ mostly in how far the wingers sag. In the most common version the wingers sit near the tops of the circles and the center is the extra player chasing the puck. In tighter versions the [[weak-side]] winger drops all the way to the [[low-slot|low slot]]. Some coaches send whichever forward is first back down low instead of always the center. Many teams play zone when the puck is low and switch to [[man-to-man]] on the points when it goes high. Every version depends on talking: call "switch" or "yours" every time an attacker moves from one area to the next.',
	sources: [
		{
			title: 'Explained: Zone Defensive Coverage',
			publisher: 'The Coaches Site',
			url: 'https://members.thecoachessite.com/article/what-is-zone-defensive-coverage-in-hockey'
		},
		{
			title: 'Defensive Zone Coverage',
			publisher: 'Hockey Player Magazine (Gianni Raimondo)',
			url: 'https://hockeyplayer.com/?p=344'
		},
		{
			title: 'Hockey Systems 101: Defensive Zone Strategies',
			publisher: 'Blue Seat Blogs',
			url: 'https://blueseatblogs.com/2013/02/19/hockey-systems-101-defensive-zone-strategies/'
		}
	],
	steps: [
		{
			id: 'entry',
			caption:
				'They carry the puck into our zone down our right side. Instead of picking up men, each of us skates to his area: RD to the puck, LD and C to the middle, the wingers to the inside of the [[point|points]].',
			phase: 'entry',
			positions: {
				lw: { x: 94, y: 30 },
				c: { x: 76, y: 50 },
				rw: { x: 90, y: 62 },
				ld: { x: 54, y: 42 },
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
				{ kind: 'skate', from: 'ld', to: { x: 22, y: 46 } },
				{ kind: 'skate', from: 'c', to: { x: 34, y: 54 } },
				{ kind: 'skate', from: 'rw', to: { x: 52, y: 62 } },
				{ kind: 'skate', from: 'lw', to: { x: 44, y: 34 } }
			],
			roles,
			notes: {
				lw: {
					where: '[[backcheck|Backchecking]] on the left side of the middle, aiming for the middle between the faceoff dots.',
					read: 'Watch the puck and their trailing forward on your side. You are heading for space, not chasing a player.',
					why: 'The [[weak-side]] winger protects the middle. Getting inside the dots first matters more than getting to the point.'
				},
				c: {
					where: '[[backcheck|Backchecking]] hard through the middle toward the strong-side circle.',
					read: 'Watch the puck carrier and RD. You are going low on the [[puck-side|puck side]] to help RD.',
					why: 'In zone the center is the extra player down low. Arriving early turns RD\'s 1-on-1 in the corner into a 2-on-1 for us.'
				},
				rw: {
					where: 'Coming back on the right side toward the top of the right circle.',
					read: 'Watch the puck going down your side, and note their D coming in behind you to the [[point]].',
					why: 'Your area is the [[strong-side]] wall up to the point. Being level with the puck lets you cover both the [[half-wall]] and the point.'
				},
				ld: {
					where: 'Backing into the middle toward the front of our net.',
					read: 'Watch the forward driving the middle. He is in your area now, but your real job is the front of the net.',
					why: 'One D always owns the front of the net. Get there before the puck goes low.'
				},
				rd: {
					where: 'Backing up on the right side, holding a tight [[gap]] on the puck carrier.',
					read: 'Watch the carrier\'s chest. He is going wide down your wall toward the corner.',
					why: 'The [[strong-side]] corner is your area. Steer him wide and meet him there, knowing C is coming to help.'
				}
			},
			reads: {
				rd: [{ at: 'o1' }],
				ld: [{ at: 'o2' }],
				c: [{ at: 'o1' }],
				rw: [{ at: 'o5' }],
				lw: [{ at: { x: 40, y: 36 }, label: 'Your area' }]
			},
			quiz: {
				c: {
					decision: {
						prompt:
							'Their forward carries the puck down the right side into our zone. You are C in zone coverage. Where do you go?',
						options: [
							{
								text: 'Low on the [[puck-side|puck side]], to help RD in the corner',
								correct: true,
								why: 'The center is the extra player down low. You and RD make it 2-on-1 on the puck while LD holds the net.'
							},
							{
								text: 'Find their trailing forward and stay with him wherever he goes',
								correct: false,
								why: 'That is [[man-to-man]]. In zone you cover an area; the trailer belongs to whoever\'s area he skates into.'
							},
							{
								text: 'Stay high at the blue line ready for a [[breakout]] pass',
								correct: false,
								why: 'We do not have the puck yet. Leaving early makes it 5-on-4 in our end.'
							}
						]
					}
				}
			}
		},
		{
			id: 'puck-low',
			caption:
				'A few seconds later the puck is in our right corner. RD and C squeeze the carrier, LD holds the [[net-front]], RW sits between the [[point]] and the slot, and LW sags into the middle.',
			phase: 'puck-low',
			positions: {
				lw: { x: 40, y: 36 },
				c: { x: 19, y: 67 },
				rw: { x: 48, y: 62 },
				ld: { x: 15.5, y: 46 },
				rd: { x: 14, y: 72 },
				o1: { x: 11, y: 75 },
				o2: { x: 19.5, y: 49 },
				o3: { x: 34, y: 22 },
				o4: { x: 72, y: 14 },
				o5: { x: 72, y: 72 }
			},
			puck: { x: 9.5, y: 77.5 },
			puckCarrier: 'o1',
			arrows: [{ kind: 'pass', from: 'o1', to: { x: 70, y: 74 }, via: { x: 40, y: 82 } }],
			roles,
			notes: {
				lw: {
					where: 'In the middle on the left side, between the faceoff dots, a little above the [[slot]].',
					read: 'Watch the puck and the forward lurking near the left dot. You are in the lane between them.',
					why: 'From here you guard the middle, can reach the back door, and are still a few strides from the [[point]]. The open man at the far point is allowed; the slot is not.'
				},
				c: {
					where: 'Low on the right side, a stride inside RD, between the puck and the [[slot]].',
					read: 'Watch RD\'s battle. If the puck squirts loose, it is yours; if the carrier spins off RD, you take him.',
					why: 'Two of us on one of them in the corner is the point of the system. RD takes away his space, you take the puck.'
				},
				rw: {
					where: 'Between their right D at the [[point]] and our [[slot]], around the top of the right circle.',
					read: 'Watch the puck carrier\'s eyes. If he looks up the wall, get ready to close the point.',
					why: 'You cover the [[strong-side]] high area. Too close to the point and you leave the slot; too low and the pass to the point is free.'
				},
				ld: {
					where: 'Right in front of the crease, between the [[net-front]] forward and our goalie.',
					read: 'Feel the forward in front with your body and stick, and look past him to the puck.',
					why: 'The front of the net is your area no matter who is in it. You are the last line before the goalie.'
				},
				rd: {
					where: 'In the right corner, pinning the carrier against the boards from the net side.',
					read: 'Watch his chest and hands. Is he trying to turn up the wall or go behind the net?',
					why: 'The corner is your area. Angle him toward the boards, keep your stick on the puck, and let C come in for the loose puck.'
				}
			},
			reads: {
				lw: [{ at: 'o3' }, { at: 'o1' }],
				c: [{ at: 'o1' }],
				rw: [{ at: 'o5' }],
				ld: [{ at: 'o2' }],
				rd: [{ at: 'o1' }]
			},
			quiz: {
				lw: {
					drag: {
						target: { kind: 'ellipse', cx: 40, cy: 36, rx: 8, ry: 6 },
						correct:
							'Yes. Inside the dots on the [[weak-side|weak side]], between the lurking forward and the middle, still close enough to step out.',
						incorrect:
							'The [[weak-side]] winger sags into the middle, between the faceoff dots. Out at the point leaves the slot open; down at the net crowds LD.'
					}
				},
				rd: {
					decision: {
						prompt:
							'You are pinning the puck carrier in the right corner and C is arriving right behind you. You...',
						options: [
							{
								text: 'Stay on his net side, stick on the puck, and pin him on the boards so C can pick it up',
								correct: true,
								why: 'That is the 2-on-1 the system is built for: you tie him up on the wall, C wins the puck.'
							},
							{
								text: 'Let him go and head back to the front of the net',
								correct: false,
								why: 'LD already owns the front. Leaving the corner gives the carrier a free walk to the slot.'
							},
							{
								text: 'Chase him wherever he goes, even up to the [[point]]',
								correct: false,
								why: 'That is [[man-to-man]] thinking. In zone, once he leaves your corner you hand him off and stay low.'
							}
						]
					}
				}
			}
		},
		{
			id: 'puck-to-point',
			caption:
				'They move the puck up the wall to their right D at the [[point]]. RW closes him out; LW stays inside the dots; C comes back up into the slot; RD holds the low wall.',
			phase: 'puck-to-point',
			positions: {
				lw: { x: 42, y: 34 },
				c: { x: 28, y: 50 },
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
				{ kind: 'skate', from: 'c', to: { x: 30, y: 48 } },
				{ kind: 'shot', from: 'o5', to: { x: 12, y: 44 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Still in the middle between the faceoff dots, facing the puck.',
					read: 'Watch the puck at the far point and the forward near the left dot. Their other D is open, and that is fine for now.',
					why: 'Jumping to the far point early opens the [[slot]]. You can still get a stick in the lane if the [[d-to-d|D-to-D]] pass comes.'
				},
				c: {
					where: 'Back up into the [[slot]] on the right side, in the line between the point and the net.',
					read: 'Watch the shooter and the forward who just passed up the wall. Get your body in the [[shooting-lane]].',
					why: 'The puck left the corner, so the low 2-on-1 is over. Your area is now the slot and the lane the shot travels through.'
				},
				rw: {
					where: 'Closing hard on their right D at the [[point]], stick out in his [[shooting-lane]].',
					read: 'Watch his stick and hips. Shot or pass across?',
					why: 'The [[strong-side]] point is in your area. Closing fast turns a clean shot into a rushed one or a block.'
				},
				ld: {
					where: 'In front of the crease, between the [[net-front]] forward and the goalie.',
					read: 'Find his stick and tie it up as the shot comes. Do not [[screen]] the goalie yourself.',
					why: 'A point shot is dangerous only with a screen or a [[tip]]. Controlling his stick takes both away.'
				},
				rd: {
					where: 'Low on the right wall, inside the forward who passed the puck up.',
					read: 'Watch him: if he goes to the net, stay inside him; if he stays on the wall, hold your spot.',
					why: 'The corner and low wall are still your area. You do not chase up the boards; RW has the point.'
				}
			},
			reads: {
				lw: [{ at: 'o4' }, { at: 'o3' }],
				c: [{ at: 'o5' }],
				rw: [{ at: 'o5' }],
				ld: [{ at: 'o2' }],
				rd: [{ at: 'o1' }]
			},
			quiz: {
				lw: {
					decision: {
						prompt:
							'The puck goes to their D at the far [[point]]. Their other D, on your side, is open. You are LW in zone coverage. You...',
						options: [
							{
								text: 'Stay inside the dots and only step out if the pass comes across',
								correct: true,
								why: 'The middle matters more than the far point. If the [[d-to-d|D-to-D]] comes, you close from inside, which still takes away a clean shot.'
							},
							{
								text: 'Skate out to cover their open D right away',
								correct: false,
								why: 'That is the [[man-to-man]] answer. In zone, leaving early opens the slot and the back door behind you.'
							},
							{
								text: 'Drop down to the front of the net to help LD',
								correct: false,
								why: 'LD owns the front. Going that low leaves nobody between the dots, and a pass to the [[high-slot|high slot]] is open.'
							}
						]
					}
				},
				rw: {
					drag: {
						target: { kind: 'ellipse', cx: 64, cy: 68, rx: 8, ry: 6 },
						correct:
							'Yes. A couple of strides off their D with your stick in his [[shooting-lane]], close enough to pressure, still on the net side.',
						incorrect:
							'With the puck at the [[strong-side]] point, the strong-side winger closes him out: a couple of strides off him on the net side, stick in the lane.'
					}
				}
			}
		},
		{
			id: 'recover',
			caption:
				'Their point shot hits traffic and the rebound squirts into our right corner. RD wins it, and because we were tight to the net, our support is already close.',
			phase: 'recover',
			positions: {
				lw: { x: 44, y: 9 },
				c: { x: 26, y: 54 },
				rw: { x: 42, y: 78 },
				ld: { x: 13, y: 34 },
				rd: { x: 14, y: 61 },
				o1: { x: 24, y: 71 },
				o2: { x: 21, y: 48 },
				o3: { x: 38, y: 27 },
				o4: { x: 70, y: 16 },
				o5: { x: 64, y: 70 }
			},
			puck: { x: 12, y: 62 },
			puckCarrier: 'rd',
			arrows: [
				{ kind: 'pass', from: 'rd', to: { x: 41, y: 80 }, via: { x: 18, y: 80 } },
				{ kind: 'skate', from: 'c', to: { x: 40, y: 62 } }
			],
			roles: { rd: 'Puck carrier', ld: 'D-to-D option', c: 'Low support', rw: 'Strong wing', lw: 'Weak wing' },
			notes: {
				lw: {
					where: 'Out from the middle to the left boards, near the top of the left circle.',
					read: 'Set up with your back to the boards so you can see the puck. Check where their D on your side is, and watch RD. If the puck comes around to LD, it comes up your wall.',
					why: 'You started inside the dots, so the left wall is only a few strides away. You are already in [[breakout]] position.'
				},
				c: {
					where: 'Low in the [[slot]] on the right side, starting to curl toward the wall.',
					read: 'Read RD\'s eyes. Swing underneath RW so you are a short option for either of them.',
					why: 'You were already in the slot, so you are close to the puck. Zone keeps the support tight when we win it.'
				},
				rw: {
					where: 'Back on the right boards near the top of the right circle, back to the boards, open to the puck, stick on the ice.',
					read: '[[shoulder-check|Shoulder check]] for their D at the [[point]], then look at RD.',
					why: 'You were only a few strides off the point, so you get to the wall in time to be RD\'s first outlet.'
				},
				ld: {
					where: 'Off the net-front to the left post area.',
					read: 'Watch RD and the forwards near the net. Talk: "time" or "man on".',
					why: 'You are the [[d-to-d|D-to-D]] option and the last player back if the first pass is picked off.'
				},
				rd: {
					where: 'In the right corner with the puck, near the goal line.',
					read: 'The forward who was on the wall is closing. [[shoulder-check|Shoulder check]], then move it to RW on the wall or C swinging low.',
					why: 'Everyone is close, so a short, quick pass is on. Do not hold it in the corner and let them reset.'
				}
			},
			reads: {
				rd: [{ at: 'o1' }, { at: 'rw' }],
				ld: [{ at: 'rd' }],
				c: [{ at: 'rd' }],
				rw: [{ at: 'o5' }],
				lw: [{ at: 'o4' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt: 'RD just won the rebound in the right corner. You were holding the front of the net. You...',
						options: [
							{
								text: 'Slide toward the left post and tell RD how much time he has',
								correct: true,
								why: 'You give RD a [[d-to-d|D-to-D]] option and stay the safety in front if the pass is picked off.'
							},
							{
								text: 'Race up ice to the blue line for a long pass',
								correct: false,
								why: 'Way too early. If RD loses it, nobody is in front of our net.'
							},
							{
								text: 'Go into the corner to help RD',
								correct: false,
								why: 'C is already there. Two D in one corner leaves the front of the net empty.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
