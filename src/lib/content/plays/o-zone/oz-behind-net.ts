import type { Play } from '../../types';

const setup = {
	c: 'Carrier',
	lw: 'Net front',
	rw: 'Secondary option',
	ld: 'Weak-side point',
	rd: 'Strong-side point'
};
const attack = { ...setup, ld: 'Covering the line', rd: 'Activating D' };

const play: Play = {
	id: 'oz-behind-net',
	title: 'Behind-the-net play',
	category: 'o-zone',
	system: 'Working from behind the net',
	strength: '5v5',
	summary:
		'Behind the other team\'s net is the best seat in the zone: you can see everything, and defenders do not like chasing you there. The carrier uses the threat of a [[wraparound]] to pull the defenders to one side, comes out the other side, and passes into the [[slot]] to a teammate arriving late, here the RD stepping down from the [[point]].',
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
	keyConcepts: ['net-front'],
	variations:
		'The pass into the slot is the main option, but the carrier always has others: a [[wraparound]] if the goalie is slow to seal his post, carrying the puck out in front himself, or a [[reverse]] or [[rim]] back to the corner to restart the [[cycle]]. If the slot is covered, a common fallback is a quick pass to the winger on the side (RW here), who returns it to the carrier or finds the open D for a [[one-timer]]. Which player steps into the slot varies: some teams use a forward from the [[high-slot|high slot]] instead of a D, and many coaches only let the D step down when a partner or forward covers the line behind him.',
	sources: [
		{
			title: 'Working your offense from behind the net',
			publisher: 'Hockey Player Magazine (Greg Siller)',
			url: 'https://www.hockeyplayer.com/paid/publish/article_358.shtml'
		},
		{
			title: 'Offensive Zone Play',
			publisher: 'Learn Ice Hockey',
			url: 'https://learn-ice-hockey.com/systems/offensive_zone_play/'
		}
	],
	steps: [
		{
			caption:
				'C has the puck behind their net. From there he can see the whole zone, and their D does not want to chase him back there. LW is at the [[net-front|net front]], RW is low on the right side, and both D are on the line.',
			positions: {
				lw: { x: 180, y: 45 },
				c: { x: 196, y: 48 },
				rw: { x: 167, y: 64 },
				ld: { x: 131, y: 30 },
				rd: { x: 131, y: 64 },
				o1: { x: 187, y: 51 },
				o2: { x: 185, y: 41 },
				o3: { x: 172, y: 55 },
				o4: { x: 142, y: 30 },
				o5: { x: 142, y: 62 }
			},
			puck: { x: 196.5, y: 46.5 },
			puckCarrier: 'c',
			arrows: [{ kind: 'skate', from: 'c', to: { x: 196, y: 54 } }],
			roles: setup,
			notes: {
				lw: {
					where: 'At the net front, a stride outside the crease, stick on the ice.',
					read: 'Keep a feel for their D next to you and watch C behind the net. Do not drift away from the front.',
					why: 'You keep one defender busy in front. If he leaves you to help on C, you are open right at the goal.'
				},
				c: {
					where: 'Behind the net on the right side, with the puck.',
					read: 'Look out front before you move: where is each defender, and who is arriving late? Their D is at the right post but will not come behind the net.',
					why: 'The net protects you from behind, and every defender has to turn his head to find you. Patience here makes them commit first.'
				},
				rw: {
					where: 'Low on the right side, near the faceoff dot.',
					read: 'Watch C and their C beside you. Keep your stick on the ice as a target.',
					why: 'You are C\'s second option. If the slot pass is not there, the puck comes to you and you find the next open man.'
				},
				ld: {
					where: 'Just inside the blue line on the left side.',
					read: 'Watch the puck and RD. If RD steps down off the line, you slide over to cover the middle of it.',
					why: 'Someone always has to be on the line. If both D go down, a cleared puck becomes a breakaway against.'
				},
				rd: {
					where: 'Just inside the blue line on the right side.',
					read: 'Watch C and their winger in front of you. If he keeps his eyes on the puck behind the net, the ice in the slot is yours.',
					why: 'Defenders turn their heads to watch the puck behind the net. A D who steps down while they are looking away arrives unmarked.'
				}
			},
			reads: {
				c: [
					{ at: 'o1', label: 'Their D' },
					{ at: 'o3', label: 'Their C' }
				],
				lw: [{ at: 'o2', label: 'Their D' }],
				rw: [{ at: 'c' }],
				ld: [{ at: 'rd' }],
				rd: [{ at: 'o5', label: 'Their W' }]
			},
			quiz: {
				c: {
					decision: {
						prompt:
							'You get the puck behind their net. Their D is at the right post and will not come behind the net after you. You...',
						options: [
							{
								text: 'Take a second to read the zone, then fake one way to move the defenders',
								correct: true,
								why: 'Nobody is pressuring you. Using that time to see the ice and pull defenders to one side is what makes the slot pass work.'
							},
							{
								text: 'Go for a [[wraparound]] right away',
								correct: false,
								why: 'The goalie is set and their D is at that post. A wraparound works as a threat to move defenders; forced into a set goalie it is an easy stop.'
							},
							{
								text: 'Throw the puck out front right away',
								correct: false,
								why: 'Without a look, a pass into the slot often goes straight to their C or D. The whole point of being back there is that you have time to look.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'C fakes toward the right side as if coming out for a [[wraparound]]. Their D and C shift toward the right post. Then C cuts back behind the net to the left side. Their winger is watching the puck, so RD steps down off the line into the [[slot]], and LD slides over to cover the line.',
			positions: {
				lw: { x: 180, y: 45 },
				c: { x: 196, y: 54 },
				rw: { x: 167, y: 64 },
				ld: { x: 131, y: 32 },
				rd: { x: 133, y: 61 },
				o1: { x: 189, y: 57 },
				o2: { x: 185, y: 42 },
				o3: { x: 177, y: 58 },
				o4: { x: 142, y: 31 },
				o5: { x: 143, y: 63 }
			},
			puck: { x: 197, y: 52.5 },
			puckCarrier: 'c',
			arrows: [
				{ kind: 'skate', from: 'c', to: { x: 190, y: 33 }, via: { x: 197, y: 42 } },
				{ kind: 'skate', from: 'rd', to: { x: 157, y: 47 } },
				{ kind: 'skate', from: 'ld', to: { x: 133, y: 44 } }
			],
			roles: attack,
			notes: {
				lw: {
					where: 'At the net front, a stride outside the crease.',
					read: 'Watch C cutting back behind the net. Stay put and keep their D busy.',
					why: 'If you leave the front to chase the puck, you bring your defender into the slot where the pass is going.'
				},
				c: {
					where: 'Behind the net on the right side, cutting back to the left.',
					read: 'Their D and C both leaned right with your fake. Look for the left side of the net to be open as you come around.',
					why: 'Every defender who moved toward the right post is now on the wrong side of the play when you come out on the left.'
				},
				rw: {
					where: 'Low on the right side, near the faceoff dot.',
					read: 'Their C has sunk toward the right post, away from you. Stay ready with your stick down.',
					why: 'If the slot pass is taken away, you are open for C. Do not skate into the slot and crowd RD\'s lane.'
				},
				ld: {
					where: 'Sliding along the blue line from the left side toward the middle.',
					read: 'Watch RD step down and their two wingers up high. Get to the middle of the line.',
					why: 'RD left his spot to attack. You cover the whole line now, so a cleared puck has to get past you.'
				},
				rd: {
					where: 'Leaving the right point, stepping down toward the [[high-slot|high slot]].',
					read: 'Their winger is watching the puck behind the net, not you. Head for the open ice in the slot with your stick ready for a pass.',
					why: 'A defender arriving late into the slot is the hardest player to pick up, because everyone is looking at the puck.'
				}
			},
			reads: {
				c: [
					{ at: 'o1', label: 'Their D' },
					{ at: 'o3', label: 'Their C' }
				],
				rd: [{ at: 'o5', label: 'Puck-watching W' }],
				ld: [{ at: 'o4', label: 'Their W' }],
				lw: [{ at: 'c' }],
				rw: [{ at: 'o3', label: 'Their C' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'C is behind the net. Their winger in front of you has turned to watch the puck, and LD can slide over to cover the line. You...',
						options: [
							{
								text: 'Step down into the slot with your stick ready for a pass',
								correct: true,
								why: 'Nobody is watching you, and LD covers the line behind you. A D arriving late in the slot is an open [[one-timer]].'
							},
							{
								text: 'Stay on the point no matter what',
								correct: false,
								why: 'Safe, but you give up a free chance. With LD covering the line, stepping down is a good risk.'
							},
							{
								text: 'Skate all the way to the crease',
								correct: false,
								why: 'LW is already in front. Going that deep crowds him and leaves you too far from the line if the puck turns over.'
							}
						]
					}
				},
				ld: {
					decision: {
						prompt: 'RD has just stepped down off the right point into the slot. You...',
						options: [
							{
								text: 'Slide across to the middle of the blue line',
								correct: true,
								why: 'Someone has to cover the line. From the middle you can reach a puck on either side and you are the safety.'
							},
							{
								text: 'Stay on the left boards',
								correct: false,
								why: 'Then the whole right side of the line is empty. A clear up that wall leaves the zone, or worse, starts a rush.'
							},
							{
								text: 'Follow RD into the slot',
								correct: false,
								why: 'Both D below the line means nobody is back. One blocked pass and they have a breakaway.'
							}
						]
					}
				},
				rw: {
					decision: {
						prompt: 'C fakes toward your side behind the net, and their C sinks toward the right post. You...',
						options: [
							{
								text: 'Hold your spot near the dot with your stick down as a second option',
								correct: true,
								why: 'You are open, and if the slot pass is covered C can find you. Staying out of the slot keeps RD\'s lane clear.'
							},
							{
								text: 'Skate into the slot',
								correct: false,
								why: 'That is where RD is arriving. Two of you in the same spot means one defender covers both.'
							},
							{
								text: 'Go behind the net to help C',
								correct: false,
								why: 'C is not under pressure. Going behind the net just takes you out of the play.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'C comes out on the left side of the net. The defenders are still leaning right, so he passes out into the [[slot]] to RD. LW holds the net front, keeping their D busy.',
			positions: {
				lw: { x: 180, y: 45 },
				c: { x: 190, y: 33 },
				rw: { x: 167, y: 64 },
				ld: { x: 133, y: 44 },
				rd: { x: 157, y: 47 },
				o1: { x: 189, y: 54 },
				o2: { x: 185, y: 44 },
				o3: { x: 176, y: 56 },
				o4: { x: 142, y: 32 },
				o5: { x: 147, y: 58 }
			},
			puck: { x: 189, y: 34.5 },
			puckCarrier: 'c',
			arrows: [{ kind: 'pass', from: 'c', to: { x: 158, y: 47 } }],
			roles: attack,
			notes: {
				lw: {
					where: 'At the net front, a stride outside the crease, between their D and the goalie\'s view.',
					read: 'Watch the pass go to RD. Get your stick on the ice and get ready to [[screen]] his shot.',
					why: 'Holding your spot pins their D in front, so he cannot step out to block RD\'s shot.'
				},
				c: {
					where: 'Coming out on the left side of the net, at the goal line.',
					read: 'RD is in the slot with nobody near him. Make a firm, flat pass to his stick.',
					why: 'The defenders are on the far side of the net. The slot is the most dangerous spot on the ice, and nobody is covering it.'
				},
				rw: {
					where: 'Low on the right side near the dot.',
					read: 'Watch the pass and the goalie. As soon as RD shoots, get to the right post.',
					why: 'A shot from the slot often leaves a rebound on the right side. You are the closest player to it.'
				},
				ld: {
					where: 'In the middle of the blue line.',
					read: 'Watch the play and their two wingers. Be ready for a puck that comes out to the line.',
					why: 'You are the only one up high. Keeping the puck in or getting back are both on you.'
				},
				rd: {
					where: 'In the slot, a few strides above the faceoff dots, stick on the ice and facing C.',
					read: 'Watch the puck coming from C. Set your feet and your stick for a [[one-timer]].',
					why: 'The goalie is hugging the left post to stop C\'s [[wraparound]]. Shooting off the pass gives him no time to push out and square up to you.'
				}
			},
			reads: {
				c: [{ at: 'rd' }],
				rd: [{ at: 'c' }],
				lw: [{ at: 'o2', label: 'Their D' }],
				rw: [{ at: 'rd' }],
				ld: [{ at: 'o4', label: 'Their W' }]
			},
			quiz: {
				c: {
					decision: {
						prompt:
							'You come out on the left side of the net. The defenders leaned right on your fake. RD is alone in the slot. You...',
						options: [
							{
								text: 'Pass out to RD in the slot',
								correct: true,
								why: 'He is open in the most dangerous spot on the ice, and the goalie is hugging the left post to stop your wraparound, so he has to push out and across to face RD.'
							},
							{
								text: 'Try to tuck it in on the left side',
								correct: false,
								why: 'The goalie is already hugging that post to stop exactly this. A pass to an open man in the slot is a much better chance.'
							},
							{
								text: 'Reverse it back behind the net',
								correct: false,
								why: 'That gives the defenders time to recover. Use it when the slot is covered, not when it is open.'
							}
						]
					}
				},
				lw: {
					drag: {
						target: { kind: 'ellipse', cx: 180, cy: 44, rx: 5, ry: 5 },
						correct:
							'Yes. Hold the net front, a stride outside the crease. Your defender has to stay with you instead of blocking RD.',
						incorrect:
							'LW stays at the [[net-front|net front]], just outside the crease. Leaving it frees their D to block the shot or cover the slot.'
					}
				}
			}
		},
		{
			caption:
				'RD takes a [[one-timer]] from the slot through LW\'s [[screen]]. LW looks for a [[tip]], C comes out front from the left post, RW crashes the right post, and LD holds the line.',
			positions: {
				lw: { x: 180, y: 45 },
				c: { x: 186, y: 35 },
				rw: { x: 178, y: 57 },
				ld: { x: 133, y: 44 },
				rd: { x: 157, y: 47 },
				o1: { x: 186, y: 51 },
				o2: { x: 185, y: 46 },
				o3: { x: 172, y: 55 },
				o4: { x: 143, y: 34 },
				o5: { x: 150, y: 54 }
			},
			puck: { x: 158.5, y: 46 },
			puckCarrier: 'rd',
			arrows: [
				{ kind: 'shot', from: 'rd', to: { x: 189, y: 41 } },
				{ kind: 'skate', from: 'rw', to: { x: 184, y: 52 } }
			],
			roles: attack,
			notes: {
				lw: {
					where: 'At the net front, on the line between the puck and the goalie\'s eyes.',
					read: 'Watch the puck coming. Stick on the ice to [[tip]] it, then find the rebound.',
					why: 'The goalie cannot stop what he cannot see, and the tip or the rebound is often the goal.'
				},
				c: {
					where: 'Just off the left post, stick on the ice.',
					read: 'Watch the goalie\'s left pad. A save that kicks to that side is yours.',
					why: 'You were already at the left side of the net. Staying there covers the far-side rebound.'
				},
				rw: {
					where: 'Crashing toward the right post.',
					read: 'Watch the goalie\'s right pad and their D near the post.',
					why: 'With you on the right post and C on the left, rebounds to either side have one of you there.'
				},
				ld: {
					where: 'In the middle of the blue line.',
					read: 'Watch for a puck coming out high and for their wingers leaving early.',
					why: 'You are the safety while RD is down in the slot. Do not join the crash.'
				},
				rd: {
					where: 'In the slot, shooting off the pass.',
					read: 'Aim low, so LW can tip it and any rebound stays in front. After the shot, get back toward the line.',
					why: 'A low [[one-timer]] through a screen is the best shot in the play. Getting back after it covers for LD.'
				}
			},
			reads: {
				rd: [{ at: 'lw' }],
				lw: [{ at: 'rd' }],
				c: [{ at: { x: 187, y: 38 }, label: 'Rebound' }],
				rw: [{ at: { x: 187, y: 47 }, label: 'Rebound' }],
				ld: [{ at: 'o4', label: 'Their W' }]
			}
		}
	]
};

export default play;
