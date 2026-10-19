import type { Play } from '../../types';

const roles = { ld: 'D1', rd: 'D2', lw: 'Strong wing', rw: 'Weak wing (stretch)' };

const play: Play = {
	id: 'bo-stretch',
	title: 'Stretch pass breakout',
	category: 'breakout',
	system: 'Stretch pass (flying winger)',
	strength: '5v5',
	summary:
		'When all three of their forwards dive deep and their D step up, the [[weak-side]] winger slips out early and the D leads him with a long [[stretch-pass|stretch pass]] in the space behind their [[forecheck]]. Completed, it is close to a breakaway. Picked off, it is a rush the other way, so it is a read, not a habit.',
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
	keyConcepts: ['passing-lanes', 'shoulder-checks'],
	variations:
		'This is not a good default in most amateur hockey: the pass is long, and a pick-off leaves your winger 60 to 80 feet out of the play. Use it when their forwards have all committed deep and a lane is open; against a team that sits back (a 1-3-1 or a passive 1-2-2), stay with the short breakouts. Some teams send the center up the middle early instead of a winger. Older rule sets had a two-line pass rule that made a pass from your own zone past the red line illegal; the NHL dropped it in 2005, but check your league. Offside still applies at their blue line: keep a skate on or behind the line until the puck crosses, and check your league\'s rule on where a skate counts.',
	sources: [
		{
			title: 'Breakouts',
			publisher: 'Learn Ice Hockey (James Bloom)',
			url: 'https://learn-ice-hockey.com/systems/breakouts/'
		},
		{
			title: 'What Is a Stretch Pass in Hockey?',
			publisher: 'IceHockeyMan (IHM Knowledge Center)',
			url: 'https://icehockeyman.com/2026/06/12/what-is-a-stretch-pass-in-hockey-ihm/'
		},
		{
			title: 'Pass (ice hockey)',
			publisher: 'Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Pass_(ice_hockey)'
		}
	],
	steps: [
		{
			id: 'retrieve',
			caption:
				'They dump it into our left corner and all three of their forwards dive in after it. LD will get there first. RW reads it and slips out early up the right side.',
			phase: 'retrieve',
			positions: {
				lw: { x: 46, y: 10 },
				c: { x: 36, y: 48 },
				rw: { x: 62, y: 68 },
				ld: { x: 20, y: 30 },
				rd: { x: 22, y: 48 },
				o1: { x: 32, y: 18 },
				o2: { x: 44, y: 26 },
				o3: { x: 50, y: 44 },
				o4: { x: 82, y: 22 },
				o5: { x: 84, y: 62 }
			},
			puck: { x: 8, y: 21 },
			arrows: [
				{ kind: 'skate', from: 'ld', to: { x: 10, y: 23 } },
				{ kind: 'skate', from: 'rw', to: { x: 98, y: 72 } },
				{ kind: 'skate', from: 'lw', to: { x: 38, y: 3.5 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Coming back toward the left boards near the top of the left circle.',
					read: 'Watch LD and their forwards. The puck is on your side, so you are the [[strong-side]] winger.',
					why: 'Even if the stretch is on, LD needs a short option on the wall in case it is not.'
				},
				c: {
					where: 'Coming back through the middle toward the front of your net.',
					read: 'Watch [[f3|F3]]. If he keeps diving in, the middle behind him opens up.',
					why: 'You are the low [[support]]. If the stretch pass goes, you are the first player to follow it up ice.'
				},
				rw: {
					where: 'Leaving your end up the right side, wide, heading for the red line.',
					read: 'Count their forwards: all three are below the tops of the circles. Then look at their D: they are stepping up toward your blue line.',
					why: 'With everyone committed deep, the ice behind their D is empty. Getting there early is what makes the stretch possible.'
				},
				ld: {
					where: 'Racing back to the puck in the left corner.',
					read: '[[shoulder-check|Shoulder check]]: where is [[f1|F1]], and where is RW? If you see RW leaving, look for him first.',
					why: 'The stretch pass has to come early, before their D recover. You need to know it is there before you touch the puck.'
				},
				rd: {
					where: 'Heading to the front of the net, sliding to the right side of it.',
					read: 'Watch [[f3|F3]] diving into the [[slot]]. Tell LD what is open: "time", "man on", or "stretch".',
					why: 'You see the whole ice. LD is facing the boards.'
				}
			},
			reads: {
				rw: [
					{ at: 'o3', label: 'F3' },
					{ at: 'o5', label: 'Their D' }
				],
				ld: [{ at: 'o1', label: 'F1' }],
				rd: [{ at: 'o3', label: 'F3' }],
				c: [{ at: 'o3', label: 'F3' }],
				lw: [{ at: 'ld' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt:
							'The puck is in the left corner and LD will get it clean. All three of their forwards are diving in after it, and their D are stepping up. You are on the far side. You...',
						options: [
							{
								text: 'Slip out early up the right side into the space behind their D',
								correct: true,
								why: 'With all three of their forwards deep, the ice behind their D is open. Getting there early gives LD a stretch target.'
							},
							{
								text: 'Come back low to help in the corner',
								correct: false,
								why: 'That makes four of you deep in your own end and takes away the long option their [[forecheck]] just gave you.'
							},
							{
								text: 'Stop at your own blue line and wait',
								correct: false,
								why: 'Standing flat at your blue line, their D can step up on you. Get moving into the space behind them.'
							}
						]
					}
				},
				rd: {
					decision: {
						prompt: 'LD is going back for the puck in the left corner. All three of their forwards are diving in. You...',
						options: [
							{
								text: 'Go to the front of the net, slide to the right side, and talk to LD',
								correct: true,
								why: 'You are the safety in front and an outlet behind the net, and your call tells LD what is open.'
							},
							{
								text: 'Follow LD into the corner',
								correct: false,
								why: 'Two D in one corner leaves the [[slot]] empty with three of their forwards diving in.'
							},
							{
								text: 'Join RW and leave the zone early',
								correct: false,
								why: 'Only one player leaves early. If both of you go, the puck is behind three [[forecheck|forecheckers]] with nobody back.'
							}
						]
					}
				}
			}
		},
		{
			id: 'look-up',
			caption:
				'A couple of seconds later, LD has picked it up and come out beside the left post. [[f1|F1]] is closing, [[f2|F2]] is sitting on LW on the wall, and [[f3|F3]] is in front of the net. RW is skating into open ice behind their D. LD looks up and leads him with a long pass.',
			phase: 'look-up',
			positions: {
				lw: { x: 38, y: 3.5 },
				c: { x: 30, y: 52 },
				rw: { x: 100, y: 72 },
				ld: { x: 9, y: 32 },
				rd: { x: 14, y: 54 },
				o1: { x: 20, y: 24 },
				o2: { x: 34, y: 8 },
				o3: { x: 22, y: 44 },
				o4: { x: 86, y: 20 },
				o5: { x: 88, y: 72 }
			},
			puck: { x: 10.5, y: 33.5 },
			puckCarrier: 'ld',
			arrows: [
				{ kind: 'pass', from: 'ld', to: { x: 116, y: 62 } },
				{ kind: 'skate', from: 'rw', to: { x: 116, y: 62 } }
			],
			roles,
			notes: {
				lw: {
					where: 'On the left boards between the faceoff dot and the top of the circle, back to the boards, open to the puck.',
					read: 'Watch LD and [[f2|F2]]. F2 is right on you, so the short pass is risky. Keep your stick down anyway.',
					why: 'Staying on the wall holds F2 there. If he leaves you, LD gets the short pass back.'
				},
				c: {
					where: 'Low on the right side of the [[slot]], below the puck.',
					read: 'Watch LD\'s eyes. If he looks long, get ready to sprint up ice behind the pass.',
					why: 'RW will be alone up ice. You are the first player who can get there to [[support]] him.'
				},
				rw: {
					where: 'Near the red line on the right side, behind their D, skating with speed.',
					read: 'Watch LD. Show your stick in the open ice ahead of you. Stay well short of their blue line so you do not go [[offside]].',
					why: 'A pass into space ahead of you is caught in stride. Standing still means LD has to put it exactly on your stick, which is much harder over 100 feet.'
				},
				ld: {
					where: 'Beside the left post with the puck, just behind the goal line.',
					read: 'Look up: F1 is closing, F2 is on LW, F3 is between you and RD. RW is in open ice behind their D on the far side.',
					why: 'Every short option is covered because their forwards all came in. The one player they left open is RW.'
				},
				rd: {
					where: 'On the right side of the net, a step above the goal line.',
					read: 'Watch [[f3|F3]] in front of the net. If the pass gets picked off, you are the first defender.',
					why: 'With RW gone up ice, you have to stay home. The pass across in front of the net to you is not on.'
				}
			},
			reads: {
				ld: [
					{ at: 'rw' },
					{ at: 'o1', label: 'F1' },
					{ at: 'o3', label: 'F3' }
				],
				rw: [
					{ at: 'ld' },
					{ at: 'o5', label: 'Their D' }
				],
				lw: [{ at: 'o2', label: 'F2' }],
				c: [{ at: 'ld' }],
				rd: [{ at: 'o3', label: 'F3' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt:
							'You have the puck beside the left post. [[f1|F1]] is closing, [[f2|F2]] is on LW, and [[f3|F3]] is in front of the net. RW is in open ice behind their D. You...',
						options: [
							{
								text: 'Lead RW with a long pass into the space ahead of him',
								correct: true,
								why: 'Their forwards covered every short option, so the open player is the one they left behind. Lead him so he takes it in stride.'
							},
							{
								text: 'Pass it across the front of the net to RD',
								correct: false,
								why: 'That pass goes through the [[slot]] right past F3. A pick-off there is a goal against.'
							},
							{
								text: 'Force it up the wall to LW',
								correct: false,
								why: 'F2 is sitting on LW. The pass gets picked off on the wall in your own zone.'
							}
						]
					}
				},
				lw: {
					drag: {
						target: { kind: 'ellipse', cx: 38, cy: 5, rx: 9, ry: 5 },
						correct:
							'Yes. On the left boards between the dot and the top of the circle, back to the boards. Even with F2 on you, being there holds him away from the middle.',
						incorrect:
							'The wall winger sets up on the boards between the faceoff dot and the top of the circle, back to the boards. That is LD\'s short option, and it keeps F2 busy.'
					}
				}
			}
		},
		{
			id: 'stretch',
			caption:
				'RW catches it in stride near the red line, behind their D. Their D turn to chase. C sprints up the middle to support, and LW pushes up the left side.',
			phase: 'stretch',
			positions: {
				lw: { x: 48, y: 10 },
				c: { x: 44, y: 52 },
				rw: { x: 118, y: 62 },
				ld: { x: 16, y: 34 },
				rd: { x: 24, y: 54 },
				o1: { x: 16, y: 26 },
				o2: { x: 36, y: 16 },
				o3: { x: 28, y: 44 },
				o4: { x: 100, y: 32 },
				o5: { x: 98, y: 72 }
			},
			puck: { x: 119.5, y: 63.5 },
			puckCarrier: 'rw',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 150, y: 54 } },
				{ kind: 'skate', from: 'c', to: { x: 84, y: 50 } },
				{ kind: 'skate', from: 'lw', to: { x: 88, y: 12 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Pushing up the left boards out of your zone.',
					read: 'Watch RW with the puck and their D on your side. Get up ice to give him a second option on the far side.',
					why: 'RW is outnumbered. The faster you arrive, the sooner it becomes a real rush.'
				},
				c: {
					where: 'Sprinting up the middle of the ice out of your zone.',
					read: 'Watch RW and their D. Aim for the middle lane behind RW as a trailer.',
					why: 'A completed stretch pass leaves RW alone against two D. You turn it into a 2-on-2 and give him a pass option.'
				},
				rw: {
					where: 'Near the red line on the right side, with the puck, skating with speed.',
					read: 'Head up: where are their two D? They are turning to chase, so take the ice in front of you.',
					why: 'Your speed is the whole advantage. Slow down and their D recover.'
				},
				ld: {
					where: 'Stepping out from beside the net toward the left faceoff dot.',
					read: 'Watch [[f1|F1]] and [[f2|F2]] turning to chase. Follow the play up once the puck is out.',
					why: 'D who stay deep leave a gap between them and the forwards.'
				},
				rd: {
					where: 'On the right side of the [[slot]].',
					read: 'Watch [[f3|F3]]. You are the last one back until the play is well up ice.',
					why: 'If RW loses it, their forwards come back the other way and you are the first defender.'
				}
			},
			reads: {
				rw: [
					{ at: 'o4', label: 'Their D' },
					{ at: 'o5', label: 'Their D' }
				],
				c: [{ at: 'rw' }],
				lw: [{ at: 'o4', label: 'Their D' }],
				ld: [{ at: 'o1', label: 'F1' }],
				rd: [{ at: 'o3', label: 'F3' }]
			},
			quiz: {
				c: {
					decision: {
						prompt: 'RW just caught the stretch pass at the red line, behind their D. You are low in your own zone. You...',
						options: [
							{
								text: 'Sprint up the middle to support RW as a trailer',
								correct: true,
								why: 'RW is outnumbered by their two D. You turn it into a 2-on-2 and give him someone to pass to.'
							},
							{
								text: 'Stay low in case the puck comes back',
								correct: false,
								why: 'The D are back for that. Staying low leaves RW alone against two defenders.'
							},
							{
								text: 'Skate to the left wall to help LW',
								correct: false,
								why: 'The puck is going up the right side at speed. The middle lane is where RW needs you.'
							}
						]
					}
				}
			}
		},
		{
			id: 'attack',
			caption:
				'A couple of seconds later: RW has carried it over their blue line ahead of both their D, who are chasing from behind and from the side. C and LW are sprinting up through the [[neutral-zone|neutral zone]] to join, and their [[forecheck]] is still in our end.',
			phase: 'attack',
			positions: {
				lw: { x: 96, y: 12 },
				c: { x: 102, y: 46 },
				rw: { x: 150, y: 56 },
				ld: { x: 70, y: 30 },
				rd: { x: 72, y: 52 },
				o1: { x: 46, y: 30 },
				o2: { x: 56, y: 14 },
				o3: { x: 54, y: 44 },
				o4: { x: 140, y: 40 },
				o5: { x: 138, y: 66 }
			},
			puck: { x: 151.5, y: 57.5 },
			puckCarrier: 'rw',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 172, y: 50 } },
				{ kind: 'skate', from: 'c', to: { x: 124, y: 46 } },
				{ kind: 'skate', from: 'lw', to: { x: 122, y: 14 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Crossing the red line on the left side, skating hard.',
					read: 'Watch RW and their D. The puck is already in their zone, so you can follow it in: drive hard to the far post.',
					why: 'If the goalie leaves a rebound, a second wave arriving at the net can score it.'
				},
				c: {
					where: 'Just past the red line in the middle, sprinting to catch up.',
					read: 'Watch RW and their two D. Get to their blue line as fast as you can and head for the middle of the ice.',
					why: 'RW is alone. If their D stop him, you are the trailer who can take a drop pass or a rebound.'
				},
				rw: {
					where: 'Inside their zone on the right side with the puck, both D behind you.',
					read: 'Their D are chasing, not in front of you. Look at the goalie and take the puck to a shooting spot in the [[slot]].',
					why: 'This is what the stretch pass was for: you are close to a breakaway. Do not slow down to wait for help.'
				},
				ld: {
					where: 'Following the play up to your blue line on the left side.',
					read: 'Watch [[f1|F1]] and [[f2|F2]] coming back up ice behind the play.',
					why: 'Following up keeps you connected to the forwards, and you stay between their forwards and your net.'
				},
				rd: {
					where: 'Following the play up to your blue line on the right side.',
					read: 'Watch [[f3|F3]]. You are the deepest player if the puck turns over.',
					why: 'One of you has to be the last one back.'
				}
			},
			reads: {
				rw: [
					{ at: { x: 189, y: 42.5 }, label: 'Goalie' },
					{ at: 'o4', label: 'Their D' }
				],
				c: [{ at: 'rw' }],
				lw: [{ at: 'o4', label: 'Their D' }],
				ld: [{ at: 'o1', label: 'F1' }],
				rd: [{ at: 'o3', label: 'F3' }]
			}
		}
	]
};

export default play;
