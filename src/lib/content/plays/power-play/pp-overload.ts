import type { Play } from '../../types';

const roles = {
	rw: 'Half-wall',
	rd: 'Strong-side point',
	ld: 'Weak-side point',
	c: 'Low (goal line)',
	lw: 'Net-front'
};

const play: Play = {
	id: 'pp-overload',
	title: 'Overload power play',
	category: 'power-play',
	system: 'Overload (1-2-2)',
	strength: '5v4',
	summary:
		'The simplest [[power-play]] setup. Three players work a [[triangle]] on one side of the zone (the [[half-wall]], the [[point]] above it and a low player near the goal line), one player stands at the [[net-front]], and the other D waits on the far point. Moving the puck around the triangle drags their [[box]] to the puck side, and the pass across to the far D is the payoff.',
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
		{ id: 'o3', label: 'D' },
		{ id: 'o4', label: 'D' }
	],
	keyConcepts: ['triangles-support', 'strong-weak-side', 'net-front'],
	variations:
		'This is the classic version with two D on the points. Some coaches run the overload with one D: the second D spot becomes a forward in the high [[slot]] or on the far side, which turns it into something close to a 1-3-1. Players in the triangle can switch spots as they move the puck, as long as every spot stays filled; the job belongs to the spot, not the player. Many coaches want the half-wall player on his off-hand side (a left shot on the right wall) so he can face the middle with the puck on his forehand. The overload works on either side; teams usually set it up on the side of their best passer.',
	sources: [
		{
			title: 'Explained: Overload Power Play Formation',
			publisher: 'The Coaches Site',
			url: 'https://members.thecoachessite.com/article/explained-overload-power-play-formation'
		},
		{
			title: "Complete Idiot's Guide to Hockey Systems: Special Teams",
			publisher: 'Blue Seat Blogs',
			url: 'https://blueseatblogs.com/2011/10/11/complete-idiots-guide-to-hockey-systems-special-teams/'
		}
	],
	steps: [
		{
			caption:
				'RW has the puck on the right [[half-wall]]. RD, RW and C make a [[triangle]] on the right side, LW is at the net, and LD waits on the far point. Their [[box]] has shifted toward the puck.',
			phase: 'setup',
			positions: {
				lw: { x: 182, y: 44 },
				c: { x: 184, y: 70 },
				rw: { x: 160, y: 81.5 },
				ld: { x: 131, y: 26 },
				rd: { x: 130, y: 72 },
				o1: { x: 154, y: 68 },
				o2: { x: 148, y: 46 },
				o3: { x: 179, y: 63 },
				o4: { x: 177, y: 44 }
			},
			puck: { x: 160, y: 79.5 },
			puckCarrier: 'rw',
			arrows: [{ kind: 'pass', from: 'rw', to: { x: 131, y: 71 } }],
			roles,
			notes: {
				lw: {
					where: 'In front of the net, just outside the crease, facing the play.',
					read: 'Watch the puck on the wall and their D beside you. Keep your stick on the ice.',
					why: 'You are the [[screen]] for every shot and the target for a quick pass from C below the goal line.'
				},
				c: {
					where: 'Low on the right side, near the goal line, about 10 feet off the corner boards.',
					read: 'Watch RW and their D who is guarding you. If he steps toward the wall, you are open for a pass.',
					why: 'You are the bottom of the triangle. Being low pulls one of their D out of the front of the net.'
				},
				rw: {
					where: 'On the right half-wall, back to the boards, puck on your stick, facing the middle.',
					read: 'Their forward is on you from above and their D is tight on C below. Look up at RD on the point.',
					why: 'You run the overload from here. With your back to the boards you can see all three passing options and the net.'
				},
				ld: {
					where: 'On the far (left) point, a stride inside the blue line toward the middle.',
					read: 'Watch the puck and their forward in the middle. The more he cheats toward the puck, the more open you are.',
					why: 'You are the release valve. When their box leans to the right side, the pass across to you is the best shot on the play.'
				},
				rd: {
					where: 'On the right point, a stride inside the blue line, stick on the ice.',
					read: 'Watch RW. Their forward on that side is closer to RW than to you, so you are the open option.',
					why: 'You are the top of the triangle. The puck comes up to you to change the angle and make their box move.'
				}
			},
			reads: {
				rw: [{ at: 'o3', label: 'C covered' }, { at: 'rd', label: 'Open' }],
				c: [{ at: 'o3' }],
				rd: [{ at: 'o1' }],
				ld: [{ at: 'o2', label: 'Middle F' }],
				lw: [{ at: 'o4' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt: 'You have the puck on the half-wall. Their D is tight on C below you, and their forward is coming at you from above. RD is open on the point. You...',
						options: [
							{
								text: 'Move it up to RD on the point',
								correct: true,
								why: 'C is covered and you are under pressure. RD is the open side of the triangle, and the pass up forces their box to move again.'
							},
							{
								text: 'Force it down low to C',
								correct: false,
								why: 'Their D is right on him. A pass into a covered player along the wall gets pinned or cleared.'
							},
							{
								text: 'Hold it on the wall and wait for something better',
								correct: false,
								why: 'Holding lets their forward close on you and pin you to the boards. Move it while you still have the lane.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'RW moves it up to RD. Their forward jumps out at RD, and their other forward slides over to help. Nobody is near LD now.',
			phase: 'move-puck',
			positions: {
				lw: { x: 182, y: 45 },
				c: { x: 184, y: 69 },
				rw: { x: 160, y: 81.5 },
				ld: { x: 132, y: 27 },
				rd: { x: 131, y: 70 },
				o1: { x: 140, y: 65 },
				o2: { x: 147, y: 53 },
				o3: { x: 179, y: 62 },
				o4: { x: 177, y: 46 }
			},
			puck: { x: 132, y: 68.5 },
			puckCarrier: 'rd',
			arrows: [{ kind: 'pass', from: 'rd', to: { x: 132, y: 28 } }],
			roles,
			notes: {
				lw: {
					where: 'In front of the net, turning to face the left side where the puck is going.',
					read: 'The puck is going across to LD. Find the line from LD to the net and move onto it.',
					why: 'The screen has to be in place before LD shoots. Move as the pass goes, not after.'
				},
				c: {
					where: 'Low on the right side, near the goal line.',
					read: 'Watch the puck go across. Their D is still on you; that keeps him away from the front of the net.',
					why: 'If you stay low, their D has to choose between you and the net. Either way, one of you is open.'
				},
				rw: {
					where: 'On the right half-wall, back to the boards.',
					read: 'The puck has gone up and is about to go across. Their forward who was on you has left.',
					why: 'Stay ready: if LD cannot shoot, the puck may come back around to you.'
				},
				ld: {
					where: 'Far point, sliding a step toward the middle, stick on the ice and ready to shoot.',
					read: 'Both their forwards are on the right side. Nobody is between you and the net.',
					why: 'This is the payoff of the overload: their box leaned to the puck, and the far side opened up.'
				},
				rd: {
					where: 'On the right point with the puck.',
					read: 'Their forward is coming straight at you and blocks your lane. Their other forward has slid toward you. LD is alone.',
					why: 'Two of them came to the right side, so the [[d-to-d|D-to-D]] pass across is open and fast.'
				}
			},
			reads: {
				rd: [{ at: 'o1', label: 'Pressure' }, { at: 'ld', label: 'Open' }],
				ld: [{ at: 'o2' }],
				lw: [{ at: 'o4' }],
				c: [{ at: 'o3' }],
				rw: [{ at: 'rd' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt: 'You have the puck on the right point. Their forward is jumping at you and the other forward has slid toward your side. You...',
						options: [
							{
								text: 'Pass it across to LD on the far point',
								correct: true,
								why: 'Both their forwards are on your side, so LD has time and a clear lane. That is the shot the overload is built to create.'
							},
							{
								text: 'Shoot through their forward',
								correct: false,
								why: 'He is in your lane. A blocked shot at the point can leave him with a breakaway.'
							},
							{
								text: 'Pass it back down to RW on the wall',
								correct: false,
								why: 'Not a disaster, but it keeps the puck on the crowded side. The open ice is across.'
							}
						]
					}
				},
				ld: {
					drag: {
						target: { kind: 'ellipse', cx: 134, cy: 28, rx: 8, ry: 6 },
						correct: 'Yes. On the far point, a step toward the middle, you have a clear lane to the net when the puck comes across.',
						incorrect: 'The weak-side point is a stride inside the blue line on the far side, a step toward the middle. Too close to the boards and the angle is bad; too close to the puck and their forwards cover both of you.'
					}
				}
			}
		},
		{
			caption:
				'LD shoots from the far point with LW in the goalie\'s eyes. C leaves the corner for the right post.',
			phase: 'shot-lane',
			positions: {
				lw: { x: 182, y: 41.5 },
				c: { x: 184, y: 57 },
				rw: { x: 163, y: 70 },
				ld: { x: 135, y: 29 },
				rd: { x: 131, y: 66 },
				o1: { x: 143, y: 58 },
				o2: { x: 148, y: 42 },
				o3: { x: 179, y: 59 },
				o4: { x: 176, y: 46 }
			},
			puck: { x: 136, y: 30.5 },
			puckCarrier: 'ld',
			arrows: [
				{ kind: 'shot', from: 'ld', to: { x: 188, y: 42 } },
				{ kind: 'skate', from: 'c', to: { x: 185, y: 51 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Right in front of the goalie, on the line from LD to the net.',
					read: 'Do not turn to watch. Feel the goalie, keep your stick on the ice and be ready to [[tip]] it.',
					why: 'LD is shooting from 55 feet. Without your [[screen]] the goalie sees it all the way.'
				},
				c: {
					where: 'Coming out from the corner to the right post.',
					read: 'Watch the puck off the goalie. Shots from the left often kick out to the right side.',
					why: 'The far post is where rebounds from this shot end up. Getting there as the shot arrives turns one shot into two.'
				},
				rw: {
					where: 'Sliding down off the wall toward the right side of the slot.',
					read: 'Watch the shot and the front of the net. If the puck comes out to the right, you are next.',
					why: 'From the slot you are a second-chance shooter, and you are still close enough to the wall to keep the puck in.'
				},
				ld: {
					where: 'Far point, a step toward the middle, shooting.',
					read: 'Their forward is recovering but is not in your lane. Pick a spot low, through LW\'s screen.',
					why: 'A low, hard shot can be [[tip|tipped]] and leaves a rebound. High and wide goes around the boards and out of the zone.'
				},
				rd: {
					where: 'Holding the right point.',
					read: 'Watch the shot and their forward near you. If the puck comes out to your side, keep it in.',
					why: 'One D holds the line on every shot so a clear does not become a breakaway.'
				}
			},
			reads: {
				ld: [{ at: 'lw', label: 'Screen' }],
				lw: [{ at: { x: 188, y: 42 }, label: 'Goalie' }],
				c: [{ at: { x: 186, y: 50 }, label: 'Rebound' }],
				rw: [{ at: { x: 180, y: 50 } }],
				rd: [{ at: 'o1' }]
			},
			quiz: {
				lw: {
					decision: {
						prompt: 'The puck goes across to LD on the far point and he is about to shoot. You are at the net with their D beside you. You...',
						options: [
							{
								text: 'Hold your spot on the shooting line, in the goalie\'s eyes, stick on the ice',
								correct: true,
								why: 'That is the [[screen]]. The goalie cannot stop what he cannot see, and your stick is ready for a [[tip]] or rebound.'
							},
							{
								text: 'Skate out to the slot for a pass',
								correct: false,
								why: 'LD is shooting, not passing. Leaving the front lets the goalie see the shot clean.'
							},
							{
								text: 'Battle their D away from the net',
								correct: false,
								why: 'Your job is the goalie\'s eyes, not their D. Fighting him pulls you off the shooting line.'
							}
						]
					}
				},
				c: {
					drag: {
						target: { kind: 'ellipse', cx: 185, cy: 54, rx: 8, ry: 5 },
						correct: 'Yes. When LD shoots from the far side, you leave the corner for the right post, where the rebound is going.',
						incorrect: 'On a shot from the far point, the low player leaves the corner and goes to the right post. Rebounds from that shot come out on your side of the crease.'
					}
				}
			}
		},
		{
			caption:
				'The rebound pops out to the right side of the crease. C arrives at the post, LW is still in front, and both D hold the line.',
			phase: 'rebound',
			positions: {
				lw: { x: 182, y: 42 },
				c: { x: 185, y: 52 },
				rw: { x: 164, y: 66 },
				ld: { x: 135, y: 30 },
				rd: { x: 132, y: 64 },
				o1: { x: 146, y: 56 },
				o2: { x: 152, y: 40 },
				o3: { x: 180, y: 56 },
				o4: { x: 178, y: 46 }
			},
			puck: { x: 185, y: 48 },
			arrows: [{ kind: 'skate', from: 'c', to: { x: 185.5, y: 48.5 } }],
			roles,
			notes: {
				lw: {
					where: 'Still in front of the crease.',
					read: 'The puck is just to your right. Stick on the ice, whack at it or tie up their D\'s stick.',
					why: 'Most power play goals are scored within a few feet of the crease. You were already there.'
				},
				c: {
					where: 'At the right post, right next to the loose puck.',
					read: 'Find the puck and the open side of the net. Shoot it quickly or pass it across to LW.',
					why: 'You came from the corner as the shot went, so you got there before their D could clear it.'
				},
				rw: {
					where: 'Right side of the slot.',
					read: 'If the puck comes out toward you, shoot it or put it back on net right away.',
					why: 'Second and third chances come from players who are already in shooting spots.'
				},
				ld: {
					where: 'Far point, holding the blue line.',
					read: 'Watch their forwards. If one of them gets the puck, stop it at the line or get back.',
					why: 'You and RD keep the puck in and stop shorthanded breaks.'
				},
				rd: {
					where: 'Right point, holding the blue line.',
					read: 'Their forward is near you. If the puck is cleared up your wall, keep it in.',
					why: 'Keeping the puck in the zone means you get to set up the overload again instead of chasing the puck back.'
				}
			},
			reads: {
				c: [{ at: { x: 185, y: 48 }, label: 'Loose puck' }],
				lw: [{ at: { x: 185, y: 48 }, label: 'Loose puck' }],
				rw: [{ at: 'o3' }],
				ld: [{ at: 'o2' }],
				rd: [{ at: 'o1' }]
			},
			quiz: {
				c: {
					decision: {
						prompt: 'The rebound pops out to the right side of the crease, a stick length from you. The goalie is still down from the first shot. You...',
						options: [
							{
								text: 'Shoot it right away at the open side, or slide it across to LW',
								correct: true,
								why: 'The goalie is out of position for a second or two. A quick shot or pass beats him before he gets back across.'
							},
							{
								text: 'Pull it back and settle it before you shoot',
								correct: false,
								why: 'By the time it is settled the goalie is set and their D has a stick on it. Rebounds are for shooting fast.'
							},
							{
								text: 'Pass it back out to LD at the point to set up again',
								correct: false,
								why: 'A loose puck beside the crease is the best chance this power play will get. Do not give it away.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
