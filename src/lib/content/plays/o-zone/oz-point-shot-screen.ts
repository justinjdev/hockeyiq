import type { Play } from '../../types';

const roles = {
	rd: 'Shooter',
	lw: 'Screen',
	c: 'Rebound (left post)',
	rw: 'Rebound (right post)',
	ld: 'Weak-side point'
};

const play: Play = {
	id: 'oz-point-shot-screen',
	title: 'Point shot with a screen',
	category: 'o-zone',
	system: 'Point shot, screen and rebounds',
	strength: '5v5',
	summary:
		'A shot from the [[point]] rarely beats a goalie who can see it. It becomes dangerous when a forward [[screen|screens]] the goalie and two more forwards attack the rebounds. The D gets the puck at the line, [[walk-the-line|walks the line]] to open a lane, and shoots low; the screen slides to stay in the goalie\'s line of sight the whole time.',
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
	keyConcepts: ['net-front', 'passing-lanes'],
	variations:
		'Some teams put two forwards in front (one high screen near the top of the crease area, one low screen closer to the goalie) and keep the third forward high as a safety. Some coaches want a hard slapshot; most now prefer a quick, low wrist or snap shot that gets through and can be [[tip|tipped]], because a big windup is easy to block. If the lane never opens, the D can fake the shot and pass [[d-to-d|D-to-D]] or move the puck back down low. Screening rules differ slightly between rule books, but standing outside the crease without contacting the goalie is legal in USA Hockey, Hockey Canada and NHL play.',
	sources: [
		{
			title: 'Offensive Zone Play',
			publisher: 'Learn Ice Hockey',
			url: 'https://learn-ice-hockey.com/systems/offensive_zone_play/'
		},
		{
			title: '2 v 2 Net Presence',
			publisher: 'Minnesota Hockey / Coach Them',
			url: 'https://www.minnesotahockey.org/news_article/show/1329326'
		}
	],
	steps: [
		{
			caption:
				'Their D tries to clear the puck with a hard [[rim]] up the right boards. RD steps up to the wall and stops it at the blue line, keeping it in. LW is at the net front, C is low on the left side, and RW is low on the right.',
			positions: {
				lw: { x: 180, y: 43 },
				c: { x: 172, y: 26 },
				rw: { x: 171, y: 68 },
				ld: { x: 131, y: 36 },
				rd: { x: 129, y: 81 },
				o1: { x: 178, y: 21 },
				o2: { x: 185, y: 47 },
				o3: { x: 168, y: 52 },
				o4: { x: 140, y: 74 },
				o5: { x: 144, y: 34 }
			},
			puck: { x: 130.5, y: 82.5 },
			puckCarrier: 'rd',
			arrows: [{ kind: 'skate', from: 'rd', to: { x: 136, y: 62 } }],
			roles,
			notes: {
				lw: {
					where: 'At the net front, a stride outside the crease.',
					read: 'Watch the puck at the right point and keep a feel for their D beside you.',
					why: 'The moment the puck is held in at the point, a shot can come. You need to be in front before it does.'
				},
				c: {
					where: 'Low on the left side, below the left faceoff dot.',
					read: 'Watch RD with the puck and the goalie. Get ready to head for the left post.',
					why: 'A point shot from the right side often leaves rebounds on the far (left) side. That rebound is yours.'
				},
				rw: {
					where: 'Low on the right side, below the [[hash-marks|hash marks]].',
					read: 'Watch RD and their C in the slot. Get ready to head for the right post.',
					why: 'You cover the rebounds on the near side. Stay out of RD\'s shooting lane on the way.'
				},
				ld: {
					where: 'Inside the blue line, left of the middle.',
					read: 'Watch RD stop the rim and their weak-side winger in front of you.',
					why: 'If RD cannot control it, you are the next player to keep it in. If he can, you are his [[d-to-d|D-to-D]] option.'
				},
				rd: {
					where: 'On the right boards at the blue line, stopping the rim with your stick and skates.',
					read: 'Stop the puck first. Then look up: their winger is coming out at you from below, so plan to move toward the middle.',
					why: 'A puck that gets past you leaves the zone and the attack is over. Control it first, then make a play.'
				}
			},
			reads: {
				rd: [{ at: 'o4', label: 'Their W' }],
				lw: [{ at: 'rd' }],
				c: [{ at: 'rd' }],
				rw: [{ at: 'o3', label: 'Their C' }],
				ld: [{ at: 'o5', label: 'Their W' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'Their D rims the puck hard up your boards. You are at the blue line and their winger is coming at you. You...',
						options: [
							{
								text: 'Stop the puck at the line first, then move toward the middle',
								correct: true,
								why: 'Keeping it in comes first. Once it is stopped, moving away from the winger toward the middle opens a lane for a shot.'
							},
							{
								text: 'One-time the rim at the net as it arrives',
								correct: false,
								why: 'A rolling puck coming along the boards is very hard to hit cleanly. It usually misses the net or goes out of the zone.'
							},
							{
								text: 'Back off and let it go by to be safe',
								correct: false,
								why: 'Then the puck leaves the zone and your forwards have to come all the way back out. Holding the line is your job.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'RD [[walk-the-line|walks the line]] toward the middle to get away from their winger and open a [[shooting-lane|shooting lane]]. LW slides to stay in the goalie\'s line of sight. C and RW head for the posts, and LD widens out to the left.',
			positions: {
				lw: { x: 180, y: 44.5 },
				c: { x: 176, y: 30 },
				rw: { x: 177, y: 58 },
				ld: { x: 131, y: 22 },
				rd: { x: 136, y: 60 },
				o1: { x: 180, y: 25 },
				o2: { x: 185, y: 49 },
				o3: { x: 170, y: 57 },
				o4: { x: 139, y: 70 },
				o5: { x: 143, y: 30 }
			},
			puck: { x: 137.5, y: 59 },
			puckCarrier: 'rd',
			arrows: [{ kind: 'skate', from: 'rd', to: { x: 139, y: 53 } }],
			roles,
			notes: {
				lw: {
					where: 'A stride outside the crease, on the line between the puck and the goalie\'s eyes.',
					read: 'Watch the puck, not the goalie. As RD moves toward the middle, slide with him so you stay in the goalie\'s line of sight.',
					why: 'A [[screen]] is only a screen if you are between the puck and the goalie\'s eyes. If you stand still while the puck moves, he can see it again.'
				},
				c: {
					where: 'Moving from the left dot toward the left post.',
					read: 'Watch RD and the goalie. Their D is on your side; get inside him so you reach the post first.',
					why: 'The far-side rebound is the one the goalie has the most trouble controlling. You want to be there before the puck is.'
				},
				rw: {
					where: 'Moving toward the right post, below RD\'s shooting lane.',
					read: 'Watch the puck and their C. Go to the post around him, not through the lane in front of the shot.',
					why: 'Skating through the shooting lane blocks your own D\'s shot. Going below it gets you to the post without getting in the way.'
				},
				ld: {
					where: 'Inside the blue line, out toward the left side.',
					read: 'Watch RD coming toward the middle. Move out of his way and stay an easy pass away.',
					why: 'If you both end up in the middle, one winger covers you both. Widening out gives RD room and a [[d-to-d|D-to-D]] option.'
				},
				rd: {
					where: 'Inside the blue line, walking from the right side toward the middle with the puck.',
					read: 'Their winger is chasing from the boards side. Keep moving until you see the net past his stick, and check that LW is in front.',
					why: 'Walking the line moves you away from the shot blocker and changes the angle the goalie has to read.'
				}
			},
			reads: {
				lw: [{ at: 'rd' }],
				rd: [
					{ at: 'o4', label: 'Their W' },
					{ at: 'lw' }
				],
				c: [{ at: 'o1', label: 'Their D' }],
				rw: [{ at: 'o3', label: 'Their C' }],
				ld: [{ at: 'rd' }]
			},
			quiz: {
				lw: {
					drag: {
						target: { kind: 'ellipse', cx: 180, cy: 44.5, rx: 5, ry: 4.5 },
						correct:
							'Yes. A stride outside the crease, on the line from the puck to the goalie\'s eyes. As RD moves, you move.',
						incorrect:
							'The [[screen]] stands between the puck and the goalie\'s eyes, about 6 to 8 feet out, off the crease. With the puck at the right-middle of the line, that is just right of the middle of the net.'
					}
				},
				ld: {
					decision: {
						prompt: 'RD has the puck and is walking from the right side toward the middle of the line. You...',
						options: [
							{
								text: 'Widen out to the left, staying inside the line as a pass option',
								correct: true,
								why: 'You give him room to walk and a [[d-to-d|D-to-D]] pass if the lane closes, and you still cover the left side.'
							},
							{
								text: 'Move to the middle to be close to him',
								correct: false,
								why: 'Two D in the same spot lets one defender cover both of you and crowds RD\'s lane.'
							},
							{
								text: 'Go to the net for a rebound',
								correct: false,
								why: 'Three forwards are already going there. With you gone, nobody covers the left side of the line.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'RD shoots low and on net through LW\'s [[screen]]. LW gets his stick down for a [[tip]], C and RW get to the posts, and LD holds the line.',
			positions: {
				lw: { x: 180, y: 44 },
				c: { x: 181, y: 33 },
				rw: { x: 180, y: 54 },
				ld: { x: 131, y: 26 },
				rd: { x: 139, y: 53 },
				o1: { x: 177, y: 27 },
				o2: { x: 185, y: 48 },
				o3: { x: 174, y: 57 },
				o4: { x: 141, y: 62 },
				o5: { x: 143, y: 32 }
			},
			puck: { x: 140.5, y: 52 },
			puckCarrier: 'rd',
			arrows: [
				{ kind: 'shot', from: 'rd', to: { x: 189, y: 42 } },
				{ kind: 'skate', from: 'c', to: { x: 184, y: 37 } },
				{ kind: 'skate', from: 'rw', to: { x: 184, y: 51 } }
			],
			roles,
			notes: {
				lw: {
					where: 'A stride outside the crease, on the shooting line, stick on the ice.',
					read: 'Watch the puck coming at you. Turn your blade to redirect it, then find the rebound.',
					why: 'Most tippable shots come in low. A small change in angle is enough against a goalie who could not see the shot.'
				},
				c: {
					where: 'At the left post, a stride off the goal line, stick on the ice.',
					read: 'Watch the goalie\'s left pad. Be ready to shoot a rebound right away.',
					why: 'A rebound shot fired instantly beats a goalie who is still moving. Stopping the puck first gives him time.'
				},
				rw: {
					where: 'At the right post, a stride off the goal line, stick on the ice.',
					read: 'Watch the goalie\'s right pad and their D beside you.',
					why: 'With you and C on both posts, a rebound to either side has one of you there.'
				},
				ld: {
					where: 'Inside the blue line on the left side.',
					read: 'Watch for a puck coming out high on your side and their winger leaving early.',
					why: 'You are the safety. If the shot is blocked and the puck goes the other way, you are the first one back.'
				},
				rd: {
					where: 'Inside the blue line, right of the middle, shooting.',
					read: 'Aim low, at the goalie\'s pads or just inside the post, through LW. After the shot, get back toward the line.',
					why: 'A low shot can be tipped and leaves rebounds at the goalie\'s feet. A high one is easy to see and often misses and leaves the zone.'
				}
			},
			reads: {
				rd: [{ at: 'lw' }],
				lw: [{ at: 'rd' }],
				c: [{ at: { x: 187, y: 38 }, label: 'Rebound' }],
				rw: [{ at: { x: 187, y: 47 }, label: 'Rebound' }],
				ld: [{ at: 'o5', label: 'Their W' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'You have walked toward the middle of the line and the lane is open. LW is in front of the goalie, C and RW are heading to the posts. You...',
						options: [
							{
								text: 'Shoot low and on net, through LW',
								correct: true,
								why: 'Low and on net gives LW a chance to [[tip]] it and leaves rebounds at the goalie\'s feet for C and RW.'
							},
							{
								text: 'Wind up and shoot as hard as you can, wherever it goes',
								correct: false,
								why: 'A big windup gives their winger time to block it, and a shot that misses the net often goes around the boards and out.'
							},
							{
								text: 'Keep carrying it down into the slot',
								correct: false,
								why: 'Their C and winger close on you, and nobody is left on the right side of the line if you lose it.'
							}
						]
					}
				},
				c: {
					decision: {
						prompt: 'RD is about to shoot from the right-middle of the line. LW is screening. You are on the left side, low. You...',
						options: [
							{
								text: 'Get to the left post with your stick on the ice',
								correct: true,
								why: 'A shot from the right side often leaves the rebound on the far side. Being at the post first means you get it.'
							},
							{
								text: 'Join LW right in front of the goalie',
								correct: false,
								why: 'Two players in one spot cover one rebound area. The far post is left empty.'
							},
							{
								text: 'Skate up to the high slot',
								correct: false,
								why: 'You would cross RD\'s shooting lane, and you are no longer close enough for a rebound.'
							}
						]
					}
				},
				rw: {
					drag: {
						target: { kind: 'ellipse', cx: 182, cy: 52, rx: 5, ry: 5 },
						correct:
							'Yes. At the right post, stick on the ice, ready for a rebound off the goalie\'s right pad.',
						incorrect:
							'RW goes to the right post, a stride off the goal line, getting there below the shooting lane so he does not block the shot.'
					}
				}
			}
		},
		{
			caption:
				'A second later: the goalie makes the save, but he could not see the shot through LW and the rebound kicks out to the left post. C is there and shoots it right away. RD heads back to his spot on the line.',
			positions: {
				lw: { x: 181, y: 45 },
				c: { x: 183, y: 36 },
				rw: { x: 184, y: 51 },
				ld: { x: 131, y: 28 },
				rd: { x: 135, y: 57 },
				o1: { x: 178, y: 30 },
				o2: { x: 186, y: 47 },
				o3: { x: 176, y: 55 },
				o4: { x: 142, y: 63 },
				o5: { x: 144, y: 34 }
			},
			puck: { x: 184, y: 37.5 },
			puckCarrier: 'c',
			arrows: [
				{ kind: 'shot', from: 'c', to: { x: 189, y: 41 } },
				{ kind: 'skate', from: 'rd', to: { x: 131, y: 62 } }
			],
			roles,
			notes: {
				lw: {
					where: 'At the net front, staying put.',
					read: 'Watch the rebound go to C. Keep the goalie\'s view blocked and your stick ready for another rebound.',
					why: 'The goalie is scrambling to the left post. Staying in his way makes the second shot even harder for him.'
				},
				c: {
					where: 'At the left post with the rebound.',
					read: 'Do not stop the puck. Shoot it at the open side as soon as it reaches you.',
					why: 'The goalie is still recovering from the first save. Every extra touch gives him time to get across.'
				},
				rw: {
					where: 'At the right post.',
					read: 'Watch the puck. If C\'s shot is stopped, the next rebound may come across to you.',
					why: 'Staying at your post keeps both sides covered until the puck is in or frozen.'
				},
				ld: {
					where: 'Inside the blue line on the left side.',
					read: 'Watch the puck and their wingers. Hold the line.',
					why: 'If they win the rebound and clear it, you are the first one between the puck and your net.'
				},
				rd: {
					where: 'Moving back to the right side of the blue line.',
					read: 'Watch their winger on your side. Get back to your spot before he can leave the zone with speed.',
					why: 'After the shot, the shooter returns to his post on the line. Both D up high is what makes it safe for three forwards to be at the net.'
				}
			},
			reads: {
				c: [{ at: { x: 189, y: 40 }, label: 'Open side' }],
				lw: [{ at: 'c' }],
				rw: [{ at: 'c' }],
				ld: [{ at: 'o5', label: 'Their W' }],
				rd: [{ at: 'o4', label: 'Their W' }]
			}
		}
	]
};

export default play;
