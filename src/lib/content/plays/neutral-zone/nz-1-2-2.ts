import type { Play } from '../../types';

const setupRoles = { c: 'F1', lw: 'F2', rw: 'F3', ld: 'D', rd: 'D' };
const roles = {
	c: 'F1',
	lw: 'Strong-side wing',
	rw: 'Weak-side wing',
	ld: 'Strong-side D',
	rd: 'Weak-side D'
};

const play: Play = {
	id: 'nz-1-2-2',
	title: '1-2-2 neutral zone forecheck',
	category: 'neutral-zone',
	system: '1-2-2 (neutral zone)',
	strength: '5v5',
	summary:
		'A patient [[neutral-zone|neutral zone]] [[forecheck]] in three layers: one forward picks the side, two forwards wall off the middle, and two D hold near the blue line. The goal is not to win the puck in their end; it is to push their [[breakout]] to one wall and make them [[dump-in|dump it in]] or force a pass through traffic.',
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
	keyConcepts: ['strong-weak-side', 'gap-control'],
	variations:
		'There are several flavors. In a "retreating" 1-2-2 everybody backs up together and gives up the first pass, which keeps it simple for rec teams. In a more aggressive version the two wingers sit higher, near their blue line, and jump the first pass up the wall. Some coaches have the strong-side winger attack the wall receiver and the D stay home; others (as shown here) have the winger take the middle away and the strong-side D step up on the wall. Who plays [[f1|F1]] also varies: many teams use the center, others send whichever forward is first back. Some coaches call the 1-2-2 a [[trap]]; others save that word for a more passive setup.',
	sources: [
		{
			title: 'Explained: 1-2-2 Neutral Zone Forecheck',
			publisher: 'The Coaches Site',
			url: 'https://members.thecoachessite.com/article/explained-1-2-2-neutral-zone-forecheck'
		},
		{
			title: 'Explained: Neutral Zone Forecheck',
			publisher: 'The Coaches Site',
			url: 'https://members.thecoachessite.com/article/explained-neutral-zone-forecheck'
		}
	],
	steps: [
		{
			id: 'setup',
			caption:
				'Their D has the puck in their end. Instead of chasing, we set up in layers: C up top, the wingers across the [[neutral-zone|neutral zone]], both D near our blue line.',
			phase: 'setup',
			positions: {
				lw: { x: 112, y: 18 },
				c: { x: 134, y: 42 },
				rw: { x: 112, y: 67 },
				ld: { x: 84, y: 28 },
				rd: { x: 84, y: 57 },
				o1: { x: 162, y: 40 },
				o2: { x: 158, y: 64 },
				o3: { x: 140, y: 6 },
				o4: { x: 150, y: 52 },
				o5: { x: 140, y: 79 }
			},
			puck: { x: 160, y: 41 },
			puckCarrier: 'o1',
			arrows: [{ kind: 'skate', from: 'c', to: { x: 140, y: 40 } }],
			roles: setupRoles,
			notes: {
				lw: {
					where: 'Left side of the neutral zone, between the red line and their blue line, inside the faceoff dot.',
					read: 'Watch C and the puck. Which way is C going to push their D? Keep their winger on your side in view too.',
					why: 'You are the second layer. Standing inside the dot lets you shut the middle or slide to the wall, whichever side the puck goes.'
				},
				c: {
					where: 'Near their blue line in the middle of the ice, facing their D.',
					read: 'Watch the D with the puck and his partner. Get between them so you can take away the [[d-to-d|D-to-D]] pass.',
					why: '[[f1|F1]] decides which side of the ice the play goes. If you sit in the middle, their D can only go one way: the way you leave open.'
				},
				rw: {
					where: 'Right side of the neutral zone, between the red line and their blue line, inside the faceoff dot.',
					read: 'Watch C and the puck. Keep their right-side winger in view; he is the outlet if the puck comes your way.',
					why: 'Two wingers level across the ice make a wall. Their breakout has to go around it, not through it.'
				},
				ld: {
					where: 'Just outside our blue line on the left, skating backwards slowly.',
					read: 'Watch the puck and their winger on your side. Keep about a stick and a stride of [[gap]] behind your forwards.',
					why: 'The D are the last layer. Holding near the blue line lets you step up on a pass to the wall or turn and get a [[dump-in]].'
				},
				rd: {
					where: 'Just outside our blue line on the right, level with your partner.',
					read: 'Watch the puck and their winger on your side. Talk to LD so the two of you stay level.',
					why: 'Two D side by side means a long pass has nowhere to land behind you.'
				}
			},
			reads: {
				c: [
					{ at: 'o1', label: 'Puck D' },
					{ at: 'o2', label: 'Partner' }
				],
				lw: [{ at: 'c' }],
				rw: [{ at: 'c' }],
				ld: [{ at: 'o3' }],
				rd: [{ at: 'o5' }]
			},
			quiz: {
				c: {
					decision: {
						prompt:
							'You are [[f1|F1]] in a 1-2-2. Their D has the puck behind their blue line. What is your main job?',
						options: [
							{
								text: 'Take away the middle and the [[d-to-d|D-to-D]] pass so he has to go up one side',
								correct: true,
								why: '[[f1|F1]] picks the side. Once the puck can only go one way, your four teammates know exactly where to squeeze.'
							},
							{
								text: 'Charge straight at him and try to strip the puck',
								correct: false,
								why: 'A straight line lets him go either way, and a quick pass leaves you behind the play. You are steering, not hunting.'
							},
							{
								text: 'Hang back at the red line with the wingers',
								correct: false,
								why: 'With no first layer, their D can pick any pass he likes. Somebody has to make the decision for him.'
							}
						]
					}
				}
			}
		},
		{
			id: 'steer',
			caption:
				'Their D carries up. C angles from the inside, stick on the ice in the middle, and pushes him toward the left boards. Now the left side is the [[strong-side|strong side]].',
			phase: 'steer',
			positions: {
				lw: { x: 114, y: 14 },
				c: { x: 141, y: 37 },
				rw: { x: 110, y: 46 },
				ld: { x: 86, y: 20 },
				rd: { x: 84, y: 46 },
				o1: { x: 148, y: 28 },
				o2: { x: 156, y: 60 },
				o3: { x: 128, y: 6 },
				o4: { x: 138, y: 52 },
				o5: { x: 130, y: 76 }
			},
			puck: { x: 146.5, y: 27 },
			puckCarrier: 'o1',
			arrows: [
				{ kind: 'skate', from: 'c', to: { x: 146, y: 32 } },
				{ kind: 'skate', from: 'rw', to: { x: 108, y: 40 } }
			],
			roles,
			notes: {
				lw: {
					where: 'On the left side inside the dot, a little closer to the boards now.',
					read: 'The puck is coming up your side. Watch their winger on the wall and the puck carrier at the same time.',
					why: 'You are the strong-side winger. Your first job is to keep the pass from coming back into the middle.'
				},
				c: {
					where: 'Inside the puck carrier, between him and the middle of the ice.',
					read: 'Watch his hips, not the puck. Keep your stick on the ice in the lane to his partner.',
					why: 'Angling from the inside shrinks his options to one: up the left wall, which is exactly where we want it.'
				},
				rw: {
					where: 'Sliding from the right side toward the middle of the ice.',
					read: 'The puck went away from you. Check over your shoulder for their C swinging through the middle.',
					why: 'As the [[weak-side|weak-side]] winger you lock the middle. A pass into the middle is the one that beats a 1-2-2.'
				},
				ld: {
					where: 'Shading toward the left boards near our blue line.',
					read: 'Watch their winger on the left wall. He is the likely target of the next pass.',
					why: 'As the strong-side D you get ready to step up on that winger the moment he gets the puck.'
				},
				rd: {
					where: 'Moving toward the middle near our blue line.',
					read: 'Watch the middle and their far winger. You are the safety now.',
					why: 'With LD leaning to the wall, somebody has to cover the middle and any pass behind LD.'
				}
			},
			reads: {
				c: [{ at: 'o2', label: 'D-to-D lane' }],
				lw: [{ at: 'o3' }],
				rw: [{ at: 'o4', label: 'Their C' }],
				ld: [{ at: 'o3' }],
				rd: [{ at: 'o5' }]
			},
			quiz: {
				lw: {
					drag: {
						target: { kind: 'ellipse', cx: 114, cy: 15, rx: 9, ry: 6 },
						correct:
							'Yes. Inside the dot on the left side you take away the pass back to the middle and you are close enough to the wall to squeeze.',
						incorrect:
							'The strong-side winger sits inside the left faceoff dot between the red line and their blue line. Too wide and the middle opens; too deep and their winger gets the puck with speed.'
					}
				}
			}
		},
		{
			id: 'pressure',
			caption:
				'Their D passes up the left wall. LW takes away the middle, C chases from behind, and LD steps up on the wall. RW and RD hold the middle.',
			phase: 'pressure',
			positions: {
				lw: { x: 104, y: 14 },
				c: { x: 122, y: 12 },
				rw: { x: 102, y: 40 },
				ld: { x: 92, y: 10 },
				rd: { x: 80, y: 34 },
				o1: { x: 138, y: 24 },
				o2: { x: 148, y: 54 },
				o3: { x: 104, y: 5 },
				o4: { x: 116, y: 44 },
				o5: { x: 120, y: 74 }
			},
			puck: { x: 102.5, y: 6 },
			puckCarrier: 'o3',
			arrows: [
				{ kind: 'skate', from: 'ld', to: { x: 99, y: 7 } },
				{ kind: 'skate', from: 'c', to: { x: 110, y: 8 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Inside their winger, a stick length off the wall, skating with him.',
					read: 'Watch his chest and the middle of the ice. If he tries to cut inside, you are already there.',
					why: 'You are the inside wall of the squeeze. With you inside and LD in front, he has nowhere to go but the boards.'
				},
				c: {
					where: 'Chasing their winger from behind along the left boards.',
					read: 'Watch the puck on his stick. Close fast and get your stick into his.',
					why: 'Pressure from behind makes him rush. A rushed winger [[chip|chips]] or dumps it instead of making a play.'
				},
				rw: {
					where: 'In the middle of the neutral zone, level with LW.',
					read: 'Watch their C coming through the middle. Keep your stick in the lane between the wall and him.',
					why: 'Their only good escape is a pass off the wall into the middle. You are the one who shuts it.'
				},
				ld: {
					where: 'Stepping up along the left boards toward their winger, up to the red line.',
					read: 'Read his head and the puck. If his head is down and the puck is on the wall, close the gap: body between him and the middle, stick on the puck.',
					why: 'Stepping up while you still have the 1-2-2 behind you squeezes him against the boards before he can get speed.'
				},
				rd: {
					where: 'In the middle just outside our blue line, a few strides behind RW.',
					read: 'Watch for a chip past LD and for their far winger sneaking behind you.',
					why: 'LD left his spot. You are the last player back, so you cover the middle and the space behind LD.'
				}
			},
			reads: {
				ld: [{ at: 'o3' }],
				lw: [{ at: 'o3' }],
				rw: [{ at: 'o4', label: 'Their C' }],
				rd: [{ at: { x: 70, y: 14 }, label: 'Behind LD' }],
				c: [{ at: 'o3' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt:
							'The puck went up the left wall to their winger. LW is inside him and C is chasing from behind. You are the strong-side D. You...',
						options: [
							{
								text: 'Step up on him along the wall while RD covers the middle',
								correct: true,
								why: 'He is trapped between three of us. Stepping up now closes the last gap before he gets speed.'
							},
							{
								text: 'Back into our zone to protect the net',
								correct: false,
								why: 'Backing off gives him time and room to carry it in. The whole point of steering him to the wall is to meet him there.'
							},
							{
								text: 'Skate to the middle to cover their C',
								correct: false,
								why: 'RW and RD already have the middle. If you leave the wall, their winger walks right up it.'
							}
						]
					}
				},
				rw: {
					decision: {
						prompt:
							'The puck is on the far wall and LD has stepped up. You are the [[weak-side|weak-side]] winger. You...',
						options: [
							{
								text: 'Hold the middle and take away the pass to their C',
								correct: true,
								why: 'The pass off the wall into the middle is how a 1-2-2 gets beaten. Your stick in that lane keeps it shut.'
							},
							{
								text: 'Race across to help on the wall',
								correct: false,
								why: 'There are already three of us there. A fourth leaves their C wide open in the middle.'
							},
							{
								text: 'Go deep into their zone to get ahead for a counterattack',
								correct: false,
								why: 'Leaving early turns the squeeze into a 4 on 3 for them through the middle.'
							}
						]
					}
				},
				rd: {
					drag: {
						target: { kind: 'ellipse', cx: 84, cy: 38, rx: 9, ry: 6 },
						correct:
							'Yes. In the middle just outside our blue line you cover the space behind LD and any pass to the middle.',
						incorrect:
							'When LD steps up, the weak-side D slides to the middle, just outside our blue line. That is the hole a chip or pass would go to.'
					}
				}
			}
		},
		{
			id: 'outcome',
			caption:
				'Squeezed on the wall, their winger [[chip|chips]] the puck in deep. A couple of seconds later, RD is nearly there: he is first to it and our forwards turn back to [[support]] the [[breakout]].',
			phase: 'outcome',
			positions: {
				lw: { x: 104, y: 16 },
				c: { x: 100, y: 28 },
				rw: { x: 86, y: 46 },
				ld: { x: 92, y: 9 },
				rd: { x: 42, y: 22 },
				o1: { x: 124, y: 26 },
				o2: { x: 136, y: 52 },
				o3: { x: 96, y: 4 },
				o4: { x: 98, y: 42 },
				o5: { x: 104, y: 72 }
			},
			puck: { x: 32, y: 6 },
			arrows: [
				{ kind: 'skate', from: 'rd', to: { x: 24, y: 13 } },
				{ kind: 'skate', from: 'rw', to: { x: 56, y: 52 } },
				{ kind: 'skate', from: 'c', to: { x: 66, y: 34 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Near the left boards just over the red line, turning back.',
					read: 'Watch the puck going deep and their winger. Stay between him and our net as you come back.',
					why: 'The squeeze worked. Now you become the wall winger for our [[breakout]].'
				},
				c: {
					where: 'Above the left circle, turning back into the middle.',
					read: 'Look at RD going for the puck. Get low in the middle so he has a short pass.',
					why: '[[f1|F1]] becomes the low [[support]] once the puck is dumped in. That turns their dump-in into our breakout.'
				},
				rw: {
					where: 'Middle of the ice, heading back toward our zone on the right.',
					read: 'Watch RD and their forwards chasing the dump. Find the open ice on the far side.',
					why: 'A dump-in is only a win for us if we come out with the puck. You are the [[weak-side|weak-side]] option.'
				},
				ld: {
					where: 'Along the left boards near the red line, where you steered him to the boards.',
					read: 'Watch the puck and RD. Turn back quickly once the puck is past you.',
					why: 'You were the one who forced the chip. Get back to be RD\'s [[d-to-d|D-to-D]] option.'
				},
				rd: {
					where: 'Racing back across the top of our left circle toward the puck on the left boards.',
					read: '[[shoulder-check|Shoulder check]] before you get there: where are their forecheckers, and where are your outlets?',
					why: 'Because you were already the safety in the middle, you beat everyone to the dump-in with time to make a play.'
				}
			},
			reads: {
				rd: [{ at: 'o4', label: 'Forechecker' }],
				c: [{ at: 'rd' }],
				rw: [{ at: 'rd' }],
				lw: [{ at: 'o3' }],
				ld: [{ at: 'rd' }]
			}
		}
	]
};

export default play;
