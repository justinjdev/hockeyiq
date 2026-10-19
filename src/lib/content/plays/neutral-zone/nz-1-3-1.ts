import type { Play } from '../../types';

const setupRoles = { c: 'F1', lw: 'Left wall', rd: 'Middle of the 3', rw: 'Right wall', ld: 'Last D' };
const roles = {
	c: 'F1',
	lw: 'Weak-side wall',
	rd: 'Middle of the 3',
	rw: 'Strong-side wall',
	ld: 'Last D'
};

const play: Play = {
	id: 'nz-1-3-1',
	title: '1-3-1 neutral zone forecheck',
	category: 'neutral-zone',
	system: '1-3-1 (neutral zone)',
	strength: '5v5',
	summary:
		'A [[neutral-zone|neutral zone]] [[forecheck]] with one forward up top, a line of three across the ice (both wingers and one D), and one D deep. F1 pushes the puck to a wall, the winger on that wall jumps the first pass, and the line shifts with him. It is built to create turnovers in the neutral zone, not just to slow the other team down.',
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
		{ id: 'o3', label: 'W' },
		{ id: 'o4', label: 'C' },
		{ id: 'o5', label: 'W' }
	],
	keyConcepts: [],
	variations:
		'Who stands where in the line of three differs by team. Here the wingers take the walls and RD plays the middle; some teams put the center in the middle and send a winger up as F1, and some use the left D instead of the right. Some coaches run a passive version that just clogs the middle and waits (often called the [[trap]]); others, as shown here, have the wall winger attack the first pass to force a turnover. The more aggressive it is, the more it relies on F1 not getting beaten: if F1 overcommits, the puck goes past him and the one deep D faces an odd-man rush.',
	sources: [
		{
			title: 'Explained: 1-3-1 Neutral Zone Forecheck',
			publisher: 'The Coaches Site',
			url: 'https://members.thecoachessite.com/article/nzfc-1-3-1'
		},
		{
			title: 'What Is a 1-3-1 Forecheck in Hockey?',
			publisher: 'Ice Hockey Man (IHM Knowledge Center)',
			url: 'https://icehockeyman.com/tag/1-3-1-forecheck/'
		},
		{
			title: 'Explained: Neutral Zone Forecheck',
			publisher: 'The Coaches Site',
			url: 'https://members.thecoachessite.com/article/explained-neutral-zone-forecheck'
		}
	],
	steps: [
		{
			caption:
				'Their D has the puck in their end. We set up a 1-3-1: C up top, LW, RD and RW in a line across the [[neutral-zone|neutral zone]], and LD deep near our blue line.',
			phase: 'setup',
			positions: {
				lw: { x: 110, y: 10 },
				c: { x: 136, y: 42 },
				rw: { x: 110, y: 75 },
				ld: { x: 82, y: 42 },
				rd: { x: 106, y: 42 },
				o1: { x: 164, y: 50 },
				o2: { x: 162, y: 28 },
				o3: { x: 140, y: 8 },
				o4: { x: 152, y: 36 },
				o5: { x: 140, y: 77 }
			},
			puck: { x: 162, y: 51 },
			puckCarrier: 'o1',
			arrows: [{ kind: 'skate', from: 'c', to: { x: 142, y: 46 } }],
			roles: setupRoles,
			notes: {
				lw: {
					where: 'On the left boards just past the red line, back to the boards and open to the puck.',
					read: 'Watch C and the puck. Keep their winger on your wall in front of you.',
					why: 'In a 1-3-1 each winger owns a wall. If the puck comes up your side, you are the one who jumps it.'
				},
				c: {
					where: 'Near their blue line in the middle of the ice.',
					read: 'Watch the D with the puck and his partner. Set up so you can cut off the [[d-to-d|D-to-D]] pass.',
					why: 'F1 picks the side the puck goes. The other four shift based on where you send it.'
				},
				rw: {
					where: 'On the right boards just past the red line, back to the boards and open to the puck.',
					read: 'Watch C and the puck. Keep their winger on your wall in front of you.',
					why: 'You own the right wall. A winger already on the boards can attack a wall pass before it is settled.'
				},
				ld: {
					where: 'In the middle just outside our blue line, alone.',
					read: 'Watch the whole picture: the puck, their forwards, and any player sneaking behind the line of three.',
					why: 'You are the only D back. Your job is to never get beaten deep, and to get to any [[dump-in]] first.'
				},
				rd: {
					where: 'In the middle of the ice, level with the wingers, just past the red line.',
					read: 'Watch their C and the middle lane. Keep your stick on the ice in that lane.',
					why: 'You are the middle of the three. A D up here takes away the pass through the middle that beats most forechecks.'
				}
			},
			reads: {
				c: [
					{ at: 'o1', label: 'Puck D' },
					{ at: 'o2', label: 'Partner' }
				],
				lw: [{ at: 'o3' }],
				rw: [{ at: 'o5' }],
				rd: [{ at: 'o4', label: 'Their C' }],
				ld: [{ at: 'o4' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'Your team is in a 1-3-1. You are the D in the line of three. Where do you play?',
						options: [
							{
								text: 'In the middle of the ice, level with the wingers, stick in the middle lane',
								correct: true,
								why: 'The line of three covers the width of the ice. You hold the middle so the wingers can attack the walls.'
							},
							{
								text: 'Back beside LD at our blue line',
								correct: false,
								why: 'That turns it into a 1-2-2 with a hole in the middle. In a 1-3-1 only one D stays deep.'
							},
							{
								text: 'Up with C to pressure their D',
								correct: false,
								why: 'Two players up top leaves nobody in the middle and only LD behind. One forward pressures; the three hold the line.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'Their D carries up the right side. C angles from the inside and pushes him toward the right boards. The line of three shifts with the puck: RW holds the wall, RD slides over, LW drops into the middle.',
			phase: 'steer',
			positions: {
				lw: { x: 106, y: 26 },
				c: { x: 143, y: 50 },
				rw: { x: 114, y: 76 },
				ld: { x: 84, y: 50 },
				rd: { x: 106, y: 52 },
				o1: { x: 151, y: 58 },
				o2: { x: 158, y: 30 },
				o3: { x: 136, y: 10 },
				o4: { x: 140, y: 36 },
				o5: { x: 130, y: 78 }
			},
			puck: { x: 150, y: 60 },
			puckCarrier: 'o1',
			arrows: [
				{ kind: 'skate', from: 'c', to: { x: 147, y: 55 } },
				{ kind: 'skate', from: 'lw', to: { x: 104, y: 36 } },
				{ kind: 'skate', from: 'rd', to: { x: 106, y: 60 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Leaving the left boards and sliding toward the middle.',
					read: 'The puck went to the far side. Look for their C and the cross-ice lane.',
					why: 'The whole line shifts one spot toward the puck. With RD moving to the right, the middle is now yours.'
				},
				c: {
					where: 'Inside the puck carrier, between him and the middle.',
					read: 'Watch his hips and keep your stick in the lane to his partner.',
					why: 'From the inside you leave him only one way to go: up the right wall, right into RW.'
				},
				rw: {
					where: 'On the right boards just past the red line, back to the boards, open to the puck, knees bent and ready to jump.',
					read: 'Watch their D and their winger on your wall. Read the pass: his eyes and blade turn to the wall before he passes.',
					why: 'The puck is coming to your side. You want to arrive as the puck does, not after their winger has turned up ice.'
				},
				ld: {
					where: 'In the middle just outside our blue line, shading toward the right.',
					read: 'Watch for a long pass behind RW up the right side.',
					why: 'When RW jumps the wall pass, the ice behind him is open. You are the one covering it.'
				},
				rd: {
					where: 'Sliding from the middle toward the right side, inside RW.',
					read: 'Watch the wall and their C. Get to where a [[chip]] off the wall would land.',
					why: 'RW is about to leave his spot. You fill in behind him so a chip past him is still ours.'
				}
			},
			reads: {
				c: [{ at: 'o2', label: 'D-to-D lane' }],
				rw: [
					{ at: 'o1', label: 'Passer' },
					{ at: 'o5' }
				],
				lw: [{ at: 'o4', label: 'Their C' }],
				rd: [{ at: { x: 112, y: 66 }, label: 'Chip lands here' }],
				ld: [{ at: { x: 96, y: 76 }, label: 'Behind RW' }]
			},
			quiz: {
				lw: {
					drag: {
						target: { kind: 'ellipse', cx: 104, cy: 33, rx: 9, ry: 8 },
						correct:
							'Yes. The puck is on the far side, so you leave your wall and take the middle that RD just left.',
						incorrect:
							'In a 1-3-1 the line of three shifts toward the puck. The weak-side winger slides off the boards to the middle, just past the red line.'
					}
				},
				c: {
					decision: {
						prompt:
							'Their D starts to carry up the right side of his zone. You are F1 in a 1-3-1. You...',
						options: [
							{
								text: 'Angle from the inside, stick in the lane to his partner, and push him to the right wall',
								correct: true,
								why: 'That sends the pass to RW, who is waiting on that wall to jump it.'
							},
							{
								text: 'Dive at the puck to force a turnover yourself',
								correct: false,
								why: 'If he slips you, five of theirs are coming at four of ours with only one D deep. F1 steers, the wall winger attacks the puck.'
							},
							{
								text: 'Skate back to the red line and let him come',
								correct: false,
								why: 'With no pressure he can pick any pass, including the one through the middle.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'He passes up the right wall. RW attacks the puck as it reaches their winger, C chases from behind, RD fills in behind RW, LW holds the middle, and LD stays deep.',
			phase: 'pressure',
			positions: {
				lw: { x: 104, y: 40 },
				c: { x: 134, y: 66 },
				rw: { x: 117, y: 75 },
				ld: { x: 84, y: 46 },
				rd: { x: 106, y: 64 },
				o1: { x: 146, y: 64 },
				o2: { x: 154, y: 36 },
				o3: { x: 124, y: 12 },
				o4: { x: 126, y: 44 },
				o5: { x: 122, y: 79 }
			},
			puck: { x: 121, y: 80.5 },
			puckCarrier: 'o5',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 120, y: 78 } },
				{ kind: 'skate', from: 'c', to: { x: 126, y: 74 } }
			],
			roles,
			notes: {
				lw: {
					where: 'In the middle of the neutral zone, just past the red line.',
					read: 'Watch their C coming through the middle and keep your stick in his lane.',
					why: 'Their best escape is a quick pass off the wall to the middle. You are the one who takes it away.'
				},
				c: {
					where: 'Chasing back along the right side toward their winger.',
					read: 'Watch the puck. Come hard from behind and get your stick on it.',
					why: 'RW from the front and you from behind: their winger is trapped against the boards with no time.'
				},
				rw: {
					where: 'On the right boards, closing on their winger just as the puck reaches him.',
					read: 'Read the puck on its way to him. Arrive on an angle from the inside, stick on the puck, and pin him against the boards before he gets his head up.',
					why: 'Catching him before he settles the puck is how a 1-3-1 creates a turnover instead of just slowing them down.'
				},
				ld: {
					where: 'In the middle just outside our blue line.',
					read: 'Watch the puck and any of theirs getting behind RW or RD.',
					why: 'Everyone else is up. If the puck gets out of the squeeze, you are the only one left to stop it.'
				},
				rd: {
					where: 'A few strides behind RW, inside him, near the right side of the red line.',
					read: 'Watch the puck at RW\'s feet. Be ready for it to squirt loose or get chipped past him.',
					why: 'You are the second layer on the wall. Loose pucks from that battle should land on your stick, not theirs.'
				}
			},
			reads: {
				rw: [{ at: 'o5' }],
				rd: [{ at: { x: 112, y: 70 }, label: 'Loose puck' }],
				lw: [{ at: 'o4', label: 'Their C' }],
				ld: [{ at: 'o4' }],
				c: [{ at: 'o5' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt:
							'Their D is about to pass up your wall to their winger. You are the strong-side wall in a 1-3-1. You...',
						options: [
							{
								text: 'Step up and attack the puck as it arrives, stick first',
								correct: true,
								why: 'Arriving with the puck catches him before he can turn up ice. RD is behind you if it gets chipped by.'
							},
							{
								text: 'Back up and wait for him at our blue line',
								correct: false,
								why: 'That gives him time and speed. The 1-3-1 wall winger attacks the first pass; backing off is a 1-2-2 habit.'
							},
							{
								text: 'Leave the wall and cover the middle',
								correct: false,
								why: 'LW already has the middle. If you leave, their winger walks up an empty wall.'
							}
						]
					}
				},
				ld: {
					decision: {
						prompt:
							'Everyone has squeezed the right wall. You are the last D. Where do you play?',
						options: [
							{
								text: 'Stay in the middle just outside our blue line',
								correct: true,
								why: 'You are the safety. If the puck squirts through, you are between it and our net with room to defend.'
							},
							{
								text: 'Jump up to the wall to help win the puck',
								correct: false,
								why: 'There are already three of us there. If it squirts out, nobody is left back and it is a breakaway.'
							},
							{
								text: 'Drop deep to our net',
								correct: false,
								why: 'Too far back. It leaves a huge hole between you and the forwards and gives them free ice to the blue line.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'RW angles their winger into the boards, gets his stick on the puck, and it squirts loose to RD. We have it in the [[neutral-zone|neutral zone]] with their forwards caught going the wrong way, so we go right back at them.',
			phase: 'outcome',
			positions: {
				lw: { x: 108, y: 38 },
				c: { x: 122, y: 58 },
				rw: { x: 116, y: 76 },
				ld: { x: 88, y: 46 },
				rd: { x: 106, y: 68 },
				o1: { x: 140, y: 62 },
				o2: { x: 150, y: 40 },
				o3: { x: 118, y: 14 },
				o4: { x: 122, y: 50 },
				o5: { x: 112, y: 80 }
			},
			puck: { x: 104.5, y: 67 },
			puckCarrier: 'rd',
			arrows: [
				{ kind: 'pass', from: 'rd', to: { x: 116, y: 32 } },
				{ kind: 'skate', from: 'lw', to: { x: 118, y: 31 } },
				{ kind: 'skate', from: 'ld', to: { x: 100, y: 46 } }
			],
			roles,
			notes: {
				lw: {
					where: 'In the middle just past the red line, turning up ice.',
					read: 'Watch RD with the puck and find the gap between their C and their D.',
					why: 'Their forwards were all heading the other way. A quick pass to you in the middle catches them flat.'
				},
				c: {
					where: 'Just outside their blue line on the right side.',
					read: 'Watch the puck and the blue line. Stay onside until the puck crosses.',
					why: 'You are already deep. Turning back toward the puck gives RD a second target and keeps you [[offside|onside]].'
				},
				rw: {
					where: 'On the right boards, still tied up with their winger.',
					read: 'Watch the puck leave the battle. Once it is gone, get your stick free and join the rush.',
					why: 'Keeping their winger pinned for one more second keeps him out of the play.'
				},
				ld: {
					where: 'Moving up through the middle toward the red line.',
					read: 'Watch RD and the puck. Stay behind it as the safety but close enough to take a pass back.',
					why: 'We turned it over. You join the play so the five of us move together, but you stay the last one back.'
				},
				rd: {
					where: 'Just inside the right side of the red line with the puck.',
					read: 'Head up: LW is open in the middle and their forwards are behind you.',
					why: 'A turnover in the neutral zone is worth most in the first two seconds, before they can get back into shape.'
				}
			},
			reads: {
				rd: [{ at: 'lw' }, { at: 'o4', label: 'Their C' }],
				lw: [{ at: 'rd' }],
				c: [{ at: { x: 125, y: 58 }, label: 'Blue line' }],
				rw: [{ at: 'o5' }],
				ld: [{ at: 'rd' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'The puck squirts out of the wall battle to you just inside the red line. LW is open in the middle and their forwards are behind you. You...',
						options: [
							{
								text: 'Pass right away to LW in the middle',
								correct: true,
								why: 'Their forwards are out of position for about two seconds. Moving it now turns the turnover into a rush.'
							},
							{
								text: 'Skate it back to our zone and set up a breakout',
								correct: false,
								why: 'That gives them time to get back into shape and throws away the point of forcing the turnover.'
							},
							{
								text: '[[dump-in|Dump it in]] deep right away',
								correct: false,
								why: 'You have an open teammate with speed. Dumping gives the puck back to their D for free.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
