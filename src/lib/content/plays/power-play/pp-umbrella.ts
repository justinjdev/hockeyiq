import type { Play } from '../../types';

const roles = { ld: 'Point (top)', lw: 'Left flank', rd: 'Right flank', c: 'Net-front', rw: 'Low forward' };

const play: Play = {
	id: 'pp-umbrella',
	title: 'Umbrella power play',
	category: 'power-play',
	system: 'Umbrella (3 high, 2 low)',
	strength: '5v4',
	summary:
		'A [[power-play]] setup with three players high and two low. One player runs it from the middle of the blue line, two [[flank|flanks]] sit wide near the tops of the circles, and two forwards live in front of the net. The puck moves side to side up top until a shooter gets a clear [[shooting-lane]], and the two low forwards [[screen]], [[tip]] and clean up rebounds.',
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
	keyConcepts: [],
	variations:
		'Naming is loose. Many coaches and broadcasters call any setup with one player at the top and two shooters on the sides "the umbrella", including the 1-3-1. In the classic umbrella shown here there are three high and two low, with both low forwards at the net and nobody in the middle of the zone. The 1-3-1 pulls the two flanks lower, toward the faceoff dots, and puts a [[bumper]] in the [[slot]], leaving one player at the net. Units differ in who plays where: most NHL units use one D at the top and four forwards, so a forward plays the flank; rec teams often put both D high, as here, so your RD plays the right flank. Some coaches stack the two low forwards (one in front, one a step behind) instead of side by side, and coaches disagree on handedness: some want each flank on his strong side (a left shot on the left) so passes arrive on his forehand, others want the off-hand side (a right shot on the left) so he can take a [[one-timer]].',
	sources: [
		{
			title: 'Explained: Umbrella Power Play Formation',
			publisher: 'The Coaches Site',
			url: 'https://members.thecoachessite.com/article/explained-umbrella-power-play-formation'
		},
		{
			title: "Complete Idiot's Guide to Hockey Systems: Special Teams",
			publisher: 'Blue Seat Blogs',
			url: 'https://blueseatblogs.com/2011/10/11/complete-idiots-guide-to-hockey-systems-special-teams/'
		},
		{
			title: 'Power Play: Umbrella',
			publisher: 'Weiss Tech Hockey',
			url: 'https://weisstechhockey.com/power-play-umbrella/'
		},
		{
			title: 'Tactics: Organized Chaos on the Power Play',
			publisher: 'Mikael Nahabedian (Substack)',
			url: 'https://mnahabedian.substack.com/p/tactics-organized-chaos-on-the-power'
		}
	],
	steps: [
		{
			caption:
				'We have the puck set up in their zone. LD runs it from the middle of the blue line, LW and RD are wide on the [[flank|flanks]], and C and RW are in front. Their four set up in a [[box]].',
			phase: 'setup',
			positions: {
				lw: { x: 138, y: 12 },
				c: { x: 182, y: 37 },
				rw: { x: 179, y: 52 },
				ld: { x: 130, y: 42.5 },
				rd: { x: 138, y: 73 },
				o1: { x: 150, y: 30 },
				o2: { x: 150, y: 55 },
				o3: { x: 175, y: 33 },
				o4: { x: 173, y: 50 }
			},
			puck: { x: 132, y: 44 },
			puckCarrier: 'ld',
			arrows: [{ kind: 'pass', from: 'ld', to: { x: 139, y: 14 } }],
			roles,
			notes: {
				lw: {
					where: 'Wide on the left side, a few strides inside the blue line, about 12 feet off the boards.',
					read: 'Watch LD and the high penalty killer on your side. Stick on the ice, open to LD, ready to take the pass and shoot or move it.',
					why: 'Standing wide stretches the top of their box. The farther apart our three high players are, the bigger the holes between their two forwards.'
				},
				c: {
					where: 'In front of the net, just off the left post, in the goalie\'s eyes.',
					read: 'Find the goalie and their D on your side. Stay between the goalie and the puck so he has to look around you.',
					why: 'The umbrella shoots from far out. Those shots only score if the goalie cannot see them or they get [[tip|tipped]].'
				},
				rw: {
					where: 'Low on the right side of the [[slot]], beside the right post, a step off the crease.',
					read: 'Watch the puck up top and their D in front of you. Keep your stick on the ice for a [[tip]] or a loose puck.',
					why: 'Two forwards at the net means two chances at every rebound. You also keep their D busy so he cannot step out to block shots.'
				},
				ld: {
					where: 'In the middle of the blue line with the puck, facing the net.',
					read: 'Look at their two high forwards. Which one is cheating toward you, and which flank is open?',
					why: 'You are the quarterback. Their forwards cannot cover you and both flanks, so one of the three of you is always open.'
				},
				rd: {
					where: 'Wide on the right side, a few strides inside the blue line, about 12 feet off the boards.',
					read: 'Your home spot is RD, but on this unit you play the right [[flank]]. Watch LD and the high penalty killer on your side. Stick down, ready to shoot.',
					why: 'You are the other end of the umbrella. If LW gets the puck and their box slides left, the puck can come back across to you with time to shoot.'
				}
			},
			reads: {
				ld: [
					{ at: 'o1', label: 'High F' },
					{ at: 'o2', label: 'High F' }
				],
				c: [{ at: { x: 188, y: 42.5 }, label: 'Goalie' }],
				lw: [{ at: 'o1' }],
				rd: [{ at: 'o2' }],
				rw: [{ at: 'o4' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt: 'You have the puck at the top of the umbrella. Their two high forwards are sitting back in the [[box]]. You...',
						options: [
							{
								text: 'Move it to a [[flank]] and make their box shift',
								correct: true,
								why: 'A shot from 60 feet through a set box rarely scores. Moving the puck forces a penalty killer to come out, and that opens a lane somewhere else.'
							},
							{
								text: 'Shoot right away from the blue line',
								correct: false,
								why: 'Their box has not moved yet, so the lane is full of bodies and sticks. The shot gets blocked and can turn into a breakaway against.'
							},
							{
								text: 'Carry it down the middle into the slot',
								correct: false,
								why: 'You walk into all four of them. A turnover there leaves nobody back.'
							}
						]
					}
				},
				rw: {
					drag: {
						start: { x: 162, y: 62 },
						target: { kind: 'ellipse', cx: 179, cy: 51, rx: 8, ry: 6 },
						correct: 'Yes. Low beside the right post you can [[tip]] shots and get to rebounds, and you tie up their D.',
						incorrect: 'In the umbrella both low forwards live at the net. Set up just off the right post, a step outside the crease.'
					}
				}
			}
		},
		{
			caption:
				'LD moves it to LW. Their high forward on that side comes out at LW, and the box slides left.',
			phase: 'move-puck',
			positions: {
				lw: { x: 140, y: 14 },
				c: { x: 182, y: 38 },
				rw: { x: 179, y: 53 },
				ld: { x: 130, y: 41 },
				rd: { x: 138, y: 71 },
				o1: { x: 147, y: 21 },
				o2: { x: 149, y: 40 },
				o3: { x: 174, y: 32 },
				o4: { x: 174, y: 47 }
			},
			puck: { x: 141, y: 16 },
			puckCarrier: 'lw',
			arrows: [{ kind: 'pass', from: 'lw', to: { x: 131, y: 40 } }],
			roles,
			notes: {
				lw: {
					where: 'On the left flank with the puck, stepping down a little toward the net.',
					read: 'Their high forward is coming straight at you and sits in your shooting lane. LD is open up top.',
					why: 'You pulled one of them out. Now give it back up top and let the next pass find the hole you just made.'
				},
				c: {
					where: 'In front of the net, sliding a half step left to stay in the goalie\'s eyes as he follows the puck.',
					read: 'The goalie moves with the puck. Move with him so you stay between him and the shooter.',
					why: 'A [[screen]] only works if it is in the shooting line. When the puck moves, the line moves.'
				},
				rw: {
					where: 'Low on the right side, beside the post.',
					read: 'Their D on your side is drifting toward the middle. Keep your stick down and watch the puck.',
					why: 'If the puck comes back to RD on your side, you are the one in front for the [[tip]].'
				},
				ld: {
					where: 'Middle of the blue line, stick on the ice, open to LW.',
					read: 'Watch their other high forward. He has slid to the middle to cover you. Where will he go when the puck comes back?',
					why: 'Your job is to be the outlet when LW gets pressured, and to keep the puck in the zone.'
				},
				rd: {
					where: 'Wide on the right side, holding your spot.',
					read: 'The whole box has moved away from you. Stay wide and patient: the puck will come back.',
					why: 'If you drift toward the puck you shrink the umbrella and make their job easy. Wide is where your shot comes from.'
				}
			},
			reads: {
				lw: [{ at: 'o1', label: 'Pressure' }, { at: 'ld' }],
				ld: [{ at: 'o2', label: 'Middle F' }],
				rd: [{ at: 'o2' }],
				c: [{ at: { x: 188, y: 41 }, label: 'Goalie' }],
				rw: [{ at: 'o4' }]
			},
			quiz: {
				lw: {
					decision: {
						prompt: 'You take the pass on the left flank. Their high forward is coming hard at you and is right in your shooting lane. You...',
						options: [
							{
								text: 'Move it back up to LD at the top',
								correct: true,
								why: 'You pulled him out of the box. Giving it back up top gets the puck away from pressure and lets LD look for the hole you just opened.'
							},
							{
								text: 'Shoot anyway',
								correct: false,
								why: 'He is in your lane. The shot hits him and the puck goes the other way with him already skating.'
							},
							{
								text: 'Force a pass across through the middle of the box to RD',
								correct: false,
								why: 'That pass goes through all four of them. If it gets picked off in the middle, it is a breakaway the other way.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'The puck is back with LD. Their middle forward jumps out at him, and now nobody is near RD on the right flank.',
			phase: 'move-puck',
			positions: {
				lw: { x: 142, y: 15 },
				c: { x: 182, y: 39 },
				rw: { x: 179, y: 54 },
				ld: { x: 131, y: 42 },
				rd: { x: 139, y: 70 },
				o1: { x: 150, y: 24 },
				o2: { x: 141, y: 40 },
				o3: { x: 175, y: 34 },
				o4: { x: 174, y: 49 }
			},
			puck: { x: 132, y: 43.5 },
			puckCarrier: 'ld',
			arrows: [{ kind: 'pass', from: 'ld', to: { x: 140, y: 69 } }],
			roles,
			notes: {
				lw: {
					where: 'Back on the left flank, wide, about 12 feet off the boards.',
					read: 'Watch the puck go across. Their forward who came at you is backing off to the box.',
					why: 'Staying wide keeps him honest. If he cheats toward the middle, the puck can come back to you.'
				},
				c: {
					where: 'In front of the net, moving toward the middle of the crease as the puck heads right.',
					read: 'Picture the line from RD\'s stick to the net. Get your body on that line, in the goalie\'s eyes.',
					why: 'RD will shoot from the right side, so the screen has to move before the shot, not after it.'
				},
				rw: {
					where: 'Low on the right side, near the post.',
					read: 'The puck is coming to your side. Watch their D in front of you and get your stick ready.',
					why: 'A point shot from your side often comes off the goalie toward you. Be ready for the rebound.'
				},
				ld: {
					where: 'Middle of the blue line with the puck.',
					read: 'Their middle forward is jumping at you. Nobody is between you and RD on the right flank.',
					why: 'Two of them cannot cover three of you up top. When one comes at you, someone is open: find him.'
				},
				rd: {
					where: 'Wide on the right flank, stick down, open to LD.',
					read: 'Nobody is near you. Their high forward on your side jumped at LD. Get ready to shoot as soon as it arrives.',
					why: 'This is what the umbrella is built for: two passes moved their box, and now you have time and a lane.'
				}
			},
			reads: {
				ld: [{ at: 'o2', label: 'Jumping out' }, { at: 'rd', label: 'Open' }],
				rd: [{ at: 'o2' }],
				c: [{ at: { x: 188, y: 43 }, label: 'Goalie' }],
				rw: [{ at: 'o4' }],
				lw: [{ at: 'o1' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt: 'Their middle forward is jumping out at you at the top. RD is alone on the right flank. You...',
						options: [
							{
								text: 'Pass to RD on the right flank right away',
								correct: true,
								why: 'The forward who came at you was the one covering RD. Get it there before he can recover.'
							},
							{
								text: 'Shoot from the top',
								correct: false,
								why: 'He is right in front of you. A blocked shot at the blue line is how shorthanded breakaways start.'
							},
							{
								text: 'Hold it and wait for him to back off',
								correct: false,
								why: 'Waiting lets him close on you and lets the box reset. The hole is open now, not later.'
							}
						]
					}
				},
				rd: {
					drag: {
						target: { kind: 'ellipse', cx: 140, cy: 70, rx: 9, ry: 6 },
						correct: 'Yes. Wide on the right flank, a few strides inside the blue line, you are far from their forwards and have a clear lane to the net.',
						incorrect: 'The right flank is wide on the right side, a few strides inside the blue line, about 12 feet off the boards. Drifting toward the middle puts you back inside their box.'
					}
				}
			}
		},
		{
			caption:
				'RD steps toward the net and shoots. C is in the goalie\'s eyes, RW heads for the right post, and their forward is too late to block it.',
			phase: 'shot-lane',
			positions: {
				lw: { x: 146, y: 15 },
				c: { x: 182, y: 46 },
				rw: { x: 179, y: 59 },
				ld: { x: 131, y: 44 },
				rd: { x: 145, y: 64 },
				o1: { x: 151, y: 28 },
				o2: { x: 146, y: 48 },
				o3: { x: 176, y: 35 },
				o4: { x: 172, y: 57 }
			},
			puck: { x: 146, y: 62.5 },
			puckCarrier: 'rd',
			arrows: [
				{ kind: 'shot', from: 'rd', to: { x: 188, y: 44 } },
				{ kind: 'skate', from: 'rw', to: { x: 183, y: 53 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Left flank, a little lower, near the top of the left circle.',
					read: 'Watch the shot. If it rebounds wide to the left, it is yours.',
					why: 'A shot from the right often bounces out to the far side. A flank ready for it gets a second shot.'
				},
				c: {
					where: 'Right in front of the goalie, on the line from RD\'s stick to the net.',
					read: 'Do not watch RD. Feel where the goalie is, keep your stick on the ice, and be ready to [[tip]] it.',
					why: 'A goalie who cannot see a shot from 45 feet cannot stop it. You are the reason this shot is dangerous.'
				},
				rw: {
					where: 'Moving from the right post toward the front of the crease.',
					read: 'Watch the puck off the goalie. Get your stick to the ice before the rebound comes.',
					why: 'Most power play goals off point shots are tips and rebounds. Arrive as the puck arrives.'
				},
				ld: {
					where: 'Top of the zone in the middle.',
					read: 'Watch the shot and their forwards. If the puck comes out high, keep it in.',
					why: 'You are the last player back. A cleared puck that gets past you is a breakaway the other way.'
				},
				rd: {
					where: 'A stride down from the right flank, shooting.',
					read: 'Their forward is coming back at you, but he is late. Pick a spot low, through C\'s screen.',
					why: 'A low, hard shot is easy for C and RW to [[tip]] and leaves a rebound in front. A high shot misses the net and goes around the boards and out.'
				}
			},
			reads: {
				rd: [{ at: 'c', label: 'Screen' }, { at: 'o2', label: 'Late' }],
				c: [{ at: { x: 188, y: 44 }, label: 'Goalie' }],
				rw: [{ at: { x: 186, y: 48 }, label: 'Rebound' }],
				ld: [{ at: 'o1' }],
				lw: [{ at: { x: 184, y: 34 }, label: 'Far side' }]
			},
			quiz: {
				c: {
					decision: {
						prompt: 'RD is winding up on the right flank. You are in front of the net. You...',
						options: [
							{
								text: 'Stay on the line from his stick to the net, stick down, in the goalie\'s eyes',
								correct: true,
								why: 'That is a [[screen]]: the goalie cannot see the shot, and your stick is ready for a [[tip]].'
							},
							{
								text: 'Skate out to the slot to give RD a pass option',
								correct: false,
								why: 'RD has a clear shot. Leaving the net front means the goalie sees it all the way.'
							},
							{
								text: 'Turn around to watch RD shoot',
								correct: false,
								why: 'You lose track of the goalie and your stick comes off the ice. Feel the goalie and let the puck come to you.'
							}
						]
					}
				},
				rd: {
					decision: {
						prompt: 'You take the pass on the right flank. Their forward is coming back at you but is a stride late. C is in front of the goalie. You...',
						options: [
							{
								text: 'Shoot low and hard right away, through C\'s screen',
								correct: true,
								why: 'You have the lane now. A low shot can be [[tip|tipped]] and leaves a rebound for C and RW.'
							},
							{
								text: 'Wind up for the hardest slap shot you can',
								correct: false,
								why: 'The big wind-up gives their forward time to get into the lane and block it.'
							},
							{
								text: 'Pass it back to LD to move it again',
								correct: false,
								why: 'The whole point of the last two passes was to get you this lane. Use it.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'The goalie stops it and the rebound sits in front. C and RW go for it; LD, LW and RD hold the top so the puck stays in.',
			phase: 'rebound',
			positions: {
				lw: { x: 150, y: 18 },
				c: { x: 183, y: 45 },
				rw: { x: 181, y: 56 },
				ld: { x: 132, y: 42 },
				rd: { x: 147, y: 61 },
				o1: { x: 155, y: 30 },
				o2: { x: 152, y: 50 },
				o3: { x: 178, y: 39 },
				o4: { x: 175, y: 53 }
			},
			puck: { x: 184, y: 50 },
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 184, y: 51.5 } },
				{ kind: 'skate', from: 'rd', to: { x: 152, y: 60 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Left flank, down near the top of the left circle.',
					read: 'Watch the scramble. If the puck squirts out to your side, jump on it; if it is cleared, get back.',
					why: 'You are the second wave on loose pucks and the help for LD if they get it out.'
				},
				c: {
					where: 'In the crease area, right on top of the loose puck.',
					read: 'Find the puck, not the goalie. Stick on the ice and jab at it before their D clears it.',
					why: 'Rebounds are won by whoever has a stick on the ice first. You were already there.'
				},
				rw: {
					where: 'Driving to the right side of the crease toward the puck.',
					read: 'The puck is between you and C. Get your stick on it and push it toward the open side.',
					why: 'Two sticks on a rebound beat one. This is why the umbrella keeps two forwards low.'
				},
				ld: {
					where: 'Top of the zone in the middle, holding the blue line.',
					read: 'Watch their forwards. If one of them gets the puck, stop it at the line or get back.',
					why: 'Four penalty killers want to fire it out. You keep it in, and you are the only one back if they break out.'
				},
				rd: {
					where: 'Right flank, stepping down a little to be ready for a puck that squirts out.',
					read: 'Watch the scramble and their forward near you. If the puck comes out, take it or move it back up top.',
					why: 'Your spot catches pucks that come out to the right half-wall and keeps them in the zone.'
				}
			},
			reads: {
				c: [{ at: { x: 184, y: 50 }, label: 'Loose puck' }],
				rw: [{ at: { x: 184, y: 50 }, label: 'Loose puck' }],
				ld: [{ at: 'o1' }, { at: 'o2' }],
				rd: [{ at: 'o2' }],
				lw: [{ at: 'o3' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt: 'The rebound is loose in front of their net and C and RW are on it. You are at the top. You...',
						options: [
							{
								text: 'Hold the blue line and be ready to keep it in or get back',
								correct: true,
								why: 'Two of ours are already on the rebound. If their D clears it, you keep it in; if they get it, you are the one back.'
							},
							{
								text: 'Skate in to join the scramble',
								correct: false,
								why: 'A third stick in the crease rarely helps, and if they clear it, nobody is back for their breakaway.'
							},
							{
								text: 'Change lines now',
								correct: false,
								why: 'The puck is loose in their end. Changing now gives them an easy clear with nobody at the line.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
