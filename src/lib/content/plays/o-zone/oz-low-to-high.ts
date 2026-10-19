import type { Play } from '../../types';

const roles = {
	lw: 'Low passer',
	c: 'High slot',
	rw: 'Net front',
	ld: 'Strong-side point',
	rd: 'Weak-side point'
};

const play: Play = {
	id: 'oz-low-to-high',
	title: 'Low-to-high',
	category: 'o-zone',
	system: 'Low-to-high to the point',
	strength: '5v5',
	summary:
		'When the defenders collapse low around the puck, move it [[low-to-high|low to high]]: from the wall below the dots up to the D at the [[point]]. The D [[walk-the-line|walks the line]] to open a [[shooting-lane|shooting lane]] and shoots low through a [[screen]], while the forwards go to the net for [[tip|tips]] and rebounds.',
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
	keyConcepts: ['passing-lanes', 'net-front'],
	variations:
		'The pass up can be direct, or banked off the boards when a defender is in the direct lane. Some teams have the D shoot right away; others want him to walk the line first, or fake the shot and pass [[d-to-d|D-to-D]] for a [[one-timer]] from the other point. Which forward goes to the net and which supports high depends on who is closest; the rule is that someone is always in front before the shot. If there is nobody in front, a point shot is usually just a giveaway: hold it, or move it back down low.',
	sources: [
		{
			title: 'What Is a Low-to-High Play in Hockey?',
			publisher: 'IceHockeyMan',
			url: 'https://icehockeyman.com/2026/06/17/what-is-a-low-to-high-play-in-hockey-ihm/'
		},
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
				'LW wins the puck on the left wall below the dots. Their D pressures him, their C and other D protect the net, and their winger on that side sags down off the [[point]] to help.',
			positions: {
				lw: { x: 176, y: 4.5 },
				c: { x: 184, y: 20 },
				rw: { x: 181, y: 42 },
				ld: { x: 131, y: 12 },
				rd: { x: 131, y: 48 },
				o1: { x: 176, y: 11 },
				o2: { x: 185, y: 46 },
				o3: { x: 174, y: 30 },
				o4: { x: 151, y: 19 },
				o5: { x: 147, y: 50 }
			},
			puck: { x: 175, y: 3 },
			puckCarrier: 'lw',
			arrows: [{ kind: 'skate', from: 'lw', to: { x: 168, y: 4 } }],
			roles,
			notes: {
				lw: {
					where: 'On the left boards below the faceoff dot, with the puck, back to the boards.',
					read: 'Their D is on your inside. Look up the wall: their winger has come down off the [[point]], so LD is open at the blue line.',
					why: 'When three or four defenders crowd the puck down low, the open player is usually up high. That is where the pass goes.'
				},
				c: {
					where: 'Low on the left side near the goal line, supporting LW.',
					read: 'Watch LW and the defenders around him. If he gets the puck up to LD, you are leaving this spot for the [[high-slot|high slot]].',
					why: 'Right now you are LW\'s short support in case he gets squeezed. Once the puck goes high, staying low leaves you out of the play.'
				},
				rw: {
					where: 'At the net front, a stride outside the crease.',
					read: 'Keep a feel for their D beside you and watch the puck. Stick on the ice.',
					why: 'A point shot is only dangerous if someone is in front. You are the reason the low-to-high is worth doing.'
				},
				ld: {
					where: 'Just inside the blue line on the left side, stick on the ice, facing the puck.',
					read: 'Watch their winger. He has dropped down toward the wall, so you are open. Show LW your stick as a target.',
					why: 'Being ready before the pass comes means you can shoot or move on your first touch instead of fumbling it at the line.'
				},
				rd: {
					where: 'Inside the blue line, right of the middle.',
					read: 'Watch the puck and their weak-side winger in front of you.',
					why: 'With the puck on the left, you are the [[weak-side-d|weak-side D]]: the [[d-to-d|D-to-D]] option and the safety up top.'
				}
			},
			reads: {
				lw: [
					{ at: 'o4', label: 'Sagging W' },
					{ at: 'ld' }
				],
				ld: [{ at: 'o4', label: 'Their W' }],
				c: [{ at: 'lw' }],
				rw: [{ at: 'lw' }],
				rd: [{ at: 'o5', label: 'Their W' }]
			},
			quiz: {
				lw: {
					decision: {
						prompt:
							'You have the puck low on the left wall with their D on your inside. Their winger has dropped off the point to help down low. You...',
						options: [
							{
								text: 'Move it up the wall to LD at the point',
								correct: true,
								why: 'Their winger left LD to help low, so LD is open. Moving the puck [[low-to-high|low to high]] turns their crowd around you into an open shot.'
							},
							{
								text: 'Try to beat their D to the front of the net',
								correct: false,
								why: 'Their C and other D are waiting in the slot. Taking the puck into three defenders is a turnover in a bad spot.'
							},
							{
								text: 'Shoot from the wall',
								correct: false,
								why: 'From below the dot on the boards, there is almost no angle. The goalie stops it easily and their D clears it.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'LW moves the puck [[low-to-high|low to high]], up to LD at the [[point]]. RW stays at the net. As the pass goes up, C pops out to the [[high-slot|high slot]], and RD slides toward the middle of the line.',
			positions: {
				lw: { x: 168, y: 4 },
				c: { x: 157, y: 46 },
				rw: { x: 181, y: 42 },
				ld: { x: 131, y: 13 },
				rd: { x: 131, y: 47 },
				o1: { x: 172, y: 10 },
				o2: { x: 185, y: 46 },
				o3: { x: 175, y: 31 },
				o4: { x: 152, y: 20 },
				o5: { x: 146, y: 52 }
			},
			puck: { x: 167, y: 2.5 },
			puckCarrier: 'lw',
			arrows: [
				{ kind: 'pass', from: 'lw', to: { x: 132, y: 12 } },
				{ kind: 'skate', from: 'rd', to: { x: 132, y: 44 } },
				{ kind: 'skate', from: 'lw', to: { x: 168, y: 20 } }
			],
			roles,
			notes: {
				lw: {
					where: 'On the left wall, level with the faceoff dot, passing up the boards.',
					read: 'Make sure the lane up the wall is clear of their winger\'s stick. Then follow your pass toward the [[hash-marks|hash marks]].',
					why: 'After the pass, you are the low support and a rebound threat on the left side. Standing on the wall watching takes you out of it.'
				},
				c: {
					where: 'In the [[high-slot|high slot]], right of the middle, out of LD\'s shooting lane.',
					read: 'Watch LD with the puck and their C below you. Keep your stick on the ice as a pass option.',
					why: 'From here you are a passing option for LD, a second wave on rebounds, and the first forward back if the puck turns over.'
				},
				rw: {
					where: 'At the net front, a stride outside the crease.',
					read: 'Watch the puck go up to LD and get ready to slide so you stay in the goalie\'s line of sight.',
					why: 'The shot is coming from the left point now. Your [[screen]] has to move with the puck.'
				},
				ld: {
					where: 'Just inside the blue line on the left side, receiving the pass.',
					read: 'Stop the puck at the line first. Then look at their winger: is he rushing out at you, or staying in the lane?',
					why: 'Keeping the puck in the zone comes first. Then the winger\'s choice tells you where to move to find a lane.'
				},
				rd: {
					where: 'Sliding along the line toward the middle-right.',
					read: 'Watch LD and their weak-side winger. Stay an easy pass away from LD.',
					why: 'If their winger takes away LD\'s shot, a pass [[d-to-d|D-to-D]] to you is the next option. You are also the safety.'
				}
			},
			reads: {
				lw: [{ at: 'o4', label: 'Their W' }],
				ld: [{ at: 'o4', label: 'Their W' }],
				c: [{ at: 'ld' }],
				rw: [{ at: 'ld' }],
				rd: [{ at: 'ld' }]
			},
			quiz: {
				c: {
					drag: {
						target: { kind: 'ellipse', cx: 157, cy: 46, rx: 7, ry: 6 },
						correct:
							'Yes. In the high slot, out of LD\'s shooting lane: a pass option, a rebound threat and the first forward back.',
						incorrect:
							'When the puck goes up to the point, the support forward pops out to the [[high-slot|high slot]]. Stay off the line between LD and the net so you do not block his shot.'
					}
				},
				rd: {
					decision: {
						prompt: 'The puck is going up to LD at the left point. You are on the right side of the line. You...',
						options: [
							{
								text: 'Slide toward the middle-right of the line, an easy pass away from LD',
								correct: true,
								why: 'You give LD a [[d-to-d|D-to-D]] option if his lane is taken, and you are in the middle to stop a puck that comes out.'
							},
							{
								text: 'Stay out wide on the right boards',
								correct: false,
								why: 'Too far away. A [[d-to-d|D-to-D]] pass across the whole line is slow and easy to pick off.'
							},
							{
								text: 'Sneak down the right side toward the net',
								correct: false,
								why: 'Then there is nobody above the puck on the right side. A blocked shot becomes a breakaway against.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'The pass reaches LD. Their winger rushes out at him, so LD [[walk-the-line|walks the line]] toward the middle, away from him, to open a [[shooting-lane|shooting lane]]. RW slides to stay between the puck and the goalie\'s eyes.',
			positions: {
				lw: { x: 168, y: 20 },
				c: { x: 157, y: 46 },
				rw: { x: 180, y: 41 },
				ld: { x: 137, y: 30 },
				rd: { x: 131, y: 54 },
				o1: { x: 177, y: 17 },
				o2: { x: 185, y: 46 },
				o3: { x: 173, y: 32 },
				o4: { x: 140, y: 21 },
				o5: { x: 146, y: 52 }
			},
			puck: { x: 138, y: 31.5 },
			puckCarrier: 'ld',
			arrows: [{ kind: 'skate', from: 'ld', to: { x: 140, y: 34 } }],
			roles,
			notes: {
				lw: {
					where: 'Near the left faceoff dot, below the [[hash-marks|hash marks]].',
					read: 'Watch the puck on LD\'s stick and the goalie. A save off the left pad comes out to your side.',
					why: 'You are the rebound threat on the left. The goalie can control a point shot; the second chance is harder for him.'
				},
				c: {
					where: 'In the [[high-slot|high slot]], right of the middle.',
					read: 'Watch LD. If their winger takes away the shot, you are an option; if LD shoots, get ready to go to the net.',
					why: 'A pass to you in the middle is a better shot than LD forcing one into a shin pad.'
				},
				rw: {
					where: 'A stride outside the crease, on the line between the puck and the goalie\'s eyes.',
					read: 'Watch the puck, not the goalie. As LD moves toward the middle, slide with him so you stay in the goalie\'s line of sight. Stick on the ice.',
					why: 'A [[screen]] only works if you are between the puck and the goalie\'s eyes. Stand still while the puck moves and the goalie sees it again.'
				},
				ld: {
					where: 'Inside the blue line, walking toward the middle with the puck.',
					read: 'Their winger is coming at you from the boards side. Move away from him toward the middle until you see the net past his stick, then check that RW is in front.',
					why: 'Shooting right into the winger\'s shin pads gives him a block and a breakaway. A few strides to the middle open the lane.'
				},
				rd: {
					where: 'Inside the blue line on the right side.',
					read: 'Watch the puck and their weak-side winger. If LD shoots, hold your spot for a rebound that comes out high.',
					why: 'With LD walking to the middle, you widen out so you are not both in the same spot and you still cover the right side.'
				}
			},
			reads: {
				ld: [
					{ at: 'o4', label: 'Their W' },
					{ at: 'rw' }
				],
				rw: [{ at: 'ld' }],
				lw: [{ at: { x: 186, y: 38 }, label: 'Goalie' }],
				c: [{ at: 'ld' }],
				rd: [{ at: 'o5', label: 'Their W' }]
			},
			quiz: {
				rw: {
					drag: {
						target: { kind: 'ellipse', cx: 180, cy: 41, rx: 5, ry: 4.5 },
						correct:
							'Yes. A stride outside the crease, on the line from the puck to the goalie\'s eyes. The goalie has to look around you.',
						incorrect:
							'The [[screen]] stands on the line between the puck and the goalie\'s eyes, about 6 to 8 feet out, off the crease.'
					}
				},
				ld: {
					decision: {
						prompt:
							'You got the puck at the left point. Their winger is rushing out at you from the boards side. RW is at the net. You...',
						options: [
							{
								text: 'Walk the line toward the middle, then shoot low and on net',
								correct: true,
								why: 'Moving away from the winger opens a lane. A low shot through RW\'s [[screen]] is the one that gets [[tip|tipped]] or leaves a rebound.'
							},
							{
								text: 'Wind up a slapshot right away',
								correct: false,
								why: 'The winger is closing and in your lane. A big windup gives him time to block it and go the other way.'
							},
							{
								text: 'Shoot high and hard over everyone',
								correct: false,
								why: 'High shots are easy for the goalie to see over a screen, cannot be tipped, and often miss the net and leave the zone.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'LD shoots low and on net through RW\'s [[screen]]. RW looks for a [[tip]], LW and C close on the net for rebounds, and RD holds the line as the safety.',
			positions: {
				lw: { x: 178, y: 30 },
				c: { x: 170, y: 52 },
				rw: { x: 180, y: 41 },
				ld: { x: 139, y: 33 },
				rd: { x: 131, y: 55 },
				o1: { x: 175, y: 23 },
				o2: { x: 185, y: 46 },
				o3: { x: 175, y: 48 },
				o4: { x: 141, y: 26 },
				o5: { x: 145, y: 53 }
			},
			puck: { x: 140.5, y: 34.5 },
			puckCarrier: 'ld',
			arrows: [
				{ kind: 'shot', from: 'ld', to: { x: 189, y: 42 } },
				{ kind: 'skate', from: 'lw', to: { x: 183, y: 36 } },
				{ kind: 'skate', from: 'c', to: { x: 180, y: 50 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Closing on the left side of the net from the dot.',
					read: 'Watch the puck off the goalie. Stop at the left post with your stick on the ice.',
					why: 'Low shots leave rebounds at the goalie\'s feet. The first stick there scores.'
				},
				c: {
					where: 'Coming down from the high slot to the right side of the net.',
					read: 'Watch the shot and their C. Get your stick to the right post area for anything that kicks out that way.',
					why: 'With you and LW on both sides, a rebound has nowhere safe to go for them.'
				},
				rw: {
					where: 'A stride outside the crease, on the shooting line, stick on the ice.',
					read: 'Watch the puck coming. Turn your blade to [[tip]] it, then look for the rebound.',
					why: 'Most tippable shots arrive low. A small change of angle is enough to beat a goalie who could not see it.'
				},
				ld: {
					where: 'Inside the blue line, left of the middle, after the shot.',
					read: 'Watch where the rebound goes and where their winger is. Hold the line if the puck comes out your way.',
					why: 'After a point shot, the shooter keeps the puck in or gets back. Following the shot to the net leaves the line open.'
				},
				rd: {
					where: 'Inside the blue line on the right side.',
					read: 'Watch for a puck that comes out high on your side and for their weak-side winger leaving the zone early.',
					why: 'You are the safety. If the shot is blocked and the puck goes out, you are the one between it and your net.'
				}
			},
			reads: {
				rw: [{ at: 'ld' }],
				lw: [{ at: { x: 186, y: 38 }, label: 'Rebound' }],
				c: [{ at: { x: 186, y: 47 }, label: 'Rebound' }],
				ld: [{ at: 'o4', label: 'Their W' }],
				rd: [{ at: 'o5', label: 'Their W' }]
			}
		}
	]
};

export default play;
