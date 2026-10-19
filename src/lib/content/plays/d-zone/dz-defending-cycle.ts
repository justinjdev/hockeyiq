import type { Play } from '../../types';

const play: Play = {
	id: 'dz-defending-cycle',
	title: 'Defending the cycle',
	category: 'd-zone',
	system: 'Low-zone switches',
	strength: '5v5',
	summary:
		'When they [[cycle]] the puck along our boards, the D stays low and takes whoever has the puck down there, a forward picks up the player who cycled up the wall, and when the puck goes behind the net the D on the other side takes it. Nobody chases; we hand players off and call out every switch.',
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
	keyConcepts: ['strong-weak-side', 'net-front'],
	variations:
		'Teams handle the cycle two ways. In the more common one, shown here, the D stays low and the forwards handle anyone who cycles up high, so the D are never pulled up the wall. In stricter [[man-to-man]] systems the D follows his man up the wall and the center fills in down low. Coaches also differ on behind-the-net plays: some want the D who started the battle to follow the puck all the way around, while most want the other D to take it from his post. Whatever the rule, the switch is called out loud ("switch," "yours," "I got him"), and the player taking over gets there before the other one leaves.',
	sources: [
		{
			title: 'IHM Academy: Defensive Zone Coverage, Lesson 2 (Low-Zone Rotation & Switch Coverage)',
			publisher: 'Ice Hockey Man',
			url: 'https://icehockeyman.com/2025/11/10/ihm-academy-defensive-zone-coverage-lesson-2/'
		},
		{
			title: 'IHM Academy: Defensive Zone Coverage, Lesson 3 (Strong-Side Press & Weak-Side Collapse)',
			publisher: 'Ice Hockey Man',
			url: 'https://icehockeyman.com/2025/11/10/ihm-academy-defensive-zone-coverage-lesson-3/'
		},
		{
			title: 'Defensive Zone Coverage',
			publisher: 'Hockey Player Magazine (Gianni Raimondo)',
			url: 'https://hockeyplayer.com/?p=344'
		}
	],
	steps: [
		{
			caption:
				'Their forward has the puck low on our right wall. RD pressures him, C supports, and their second forward is coming down the wall behind him to start a [[cycle]].',
			positions: {
				lw: { x: 40, y: 36 },
				c: { x: 28, y: 61 },
				rw: { x: 48, y: 62 },
				ld: { x: 15.5, y: 46 },
				rd: { x: 12, y: 74.5 },
				o1: { x: 14, y: 78 },
				o2: { x: 42, y: 77 },
				o3: { x: 19, y: 49 },
				o4: { x: 72, y: 14 },
				o5: { x: 72, y: 72 }
			},
			puck: { x: 12.5, y: 79.5 },
			puckCarrier: 'o1',
			arrows: [
				{ kind: 'skate', from: 'o1', to: { x: 33, y: 77 } },
				{ kind: 'skate', from: 'o2', to: { x: 18, y: 74 } }
			],
			roles: { rd: 'Strong-side D', ld: 'Net-front D', c: 'Low support', rw: 'Strong-side wing', lw: 'Weak-side wing' },
			notes: {
				lw: {
					where: 'In the middle between the faceoff dots, on the left side.',
					read: 'Watch the puck on the far wall and their D at your [[point]].',
					why: 'You guard the middle and the back door while the strong side handles the cycle.'
				},
				c: {
					where: 'Low on the right side, a few strides inside RD.',
					read: 'Watch their second forward coming down the wall. When the cycle starts, one of these two is yours.',
					why: 'The cycle is built to make defenders chase. You are the extra player who keeps it a fair fight down low.'
				},
				rw: {
					where: 'Between their D at the right [[point]] and the slot, near the top of the right circle.',
					read: 'Watch the forward coming down the wall and the D behind you. Do not follow him into the corner.',
					why: 'Your job is the point and the [[half-wall]]. If you go low, the puck goes up to the point for a free shot.'
				},
				ld: {
					where: 'In front of the crease, on the net side of their [[net-front]] forward.',
					read: 'Feel the forward in front and watch the puck in the corner.',
					why: 'The front of the net stays covered no matter how the cycle moves.'
				},
				rd: {
					where: 'On the low right wall, on the net side of the puck carrier.',
					read: 'Watch his chest and the forward coming down behind him. A cycle pass back down the wall is coming.',
					why: 'Seeing the second forward early is what lets you stay low and take the next puck carrier instead of chasing this one.'
				}
			},
			reads: {
				rd: [{ at: 'o1' }, { at: 'o2' }],
				c: [{ at: 'o2' }],
				rw: [{ at: 'o2' }, { at: 'o5' }],
				ld: [{ at: 'o3' }],
				lw: [{ at: 'o4' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt:
							'The puck is low on your wall and their second forward skates past you down the boards toward the corner. You...',
						options: [
							{
								text: 'Hold your spot between their D at the [[point]] and the slot',
								correct: true,
								why: 'RD and C handle the low cycle. If you go down, the puck goes up to the point and their D has a free shot.'
							},
							{
								text: 'Follow him down into the corner',
								correct: false,
								why: 'Now there are three of us in the corner and nobody on the point or the [[half-wall]].'
							},
							{
								text: 'Go to the front of the net',
								correct: false,
								why: 'LD has the front. You would leave the whole [[strong-side]] high area open.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'The cycle: their carrier skates up the wall and leaves the puck behind for the forward coming down. RD stays low and takes the new carrier; C picks up the one going up the wall.',
			positions: {
				lw: { x: 40, y: 36 },
				c: { x: 36, y: 70 },
				rw: { x: 50, y: 64 },
				ld: { x: 15.5, y: 46 },
				rd: { x: 22, y: 68 },
				o1: { x: 34, y: 77 },
				o2: { x: 18, y: 74 },
				o3: { x: 19, y: 49 },
				o4: { x: 72, y: 14 },
				o5: { x: 72, y: 72 }
			},
			puck: { x: 16, y: 77 },
			puckCarrier: 'o2',
			arrows: [{ kind: 'skate', from: 'o2', to: { x: 5, y: 40 }, via: { x: 4, y: 68 } }],
			roles: { rd: 'Takes the low carrier', ld: 'Net-front D', c: 'Takes the high cycler', rw: 'Strong-side wing', lw: 'Weak-side wing' },
			notes: {
				lw: {
					where: 'Still in the middle between the faceoff dots.',
					read: 'Watch the new carrier. He is turning toward the back of the net, which could bring the puck to your side.',
					why: 'If the puck comes around, you become the [[strong-side]] winger. Know it before it happens.'
				},
				c: {
					where: 'On the [[half-wall]], on the inside of the forward who just cycled up.',
					read: 'Watch him and the puck. He wants to get open in the slot for a return pass.',
					why: 'RD stays low, so the player who cycled up is yours. Inside position keeps him on the wall instead of in the slot.'
				},
				rw: {
					where: 'Between their D at the right [[point]] and the [[half-wall]].',
					read: 'Watch the high forward on the wall and the D at the point. C has the forward, you have the point.',
					why: 'With C on the wall, you can stay ready to take away the low-to-high pass to the point.'
				},
				ld: {
					where: 'In front of the crease, net side of their [[net-front]] forward.',
					read: 'Watch the new carrier heading for the back of the net. Get ready to slide to your post.',
					why: 'If he goes behind the net to your side, you take him. RD should not have to chase him all the way around.'
				},
				rd: {
					where: 'Low in the right corner, on the net side of the new puck carrier.',
					read: 'Call "switch!" so C knows the forward going up the wall is his. Watch your new man\'s hips.',
					why: 'The cycle only works if you chase the first forward up the wall and leave the corner. Stay low and take whoever has the puck.'
				}
			},
			reads: {
				rd: [{ at: 'o2' }],
				c: [{ at: 'o1' }],
				rw: [{ at: 'o5' }],
				ld: [{ at: 'o2' }],
				lw: [{ at: 'o2' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'The forward you were pressuring skates up the wall and leaves the puck for his teammate coming down into your corner. You...',
						options: [
							{
								text: 'Stay low, take the new puck carrier, and call "switch!"',
								correct: true,
								why: 'The D owns the low area. C picks up the forward going up the wall, and you stay between the puck and the net.'
							},
							{
								text: 'Follow your original man up the wall',
								correct: false,
								why: 'That is exactly what the cycle wants. You get pulled out of the corner and the new carrier walks to the net.'
							},
							{
								text: 'Go back to the front of the net',
								correct: false,
								why: 'LD has the front. Leaving the corner gives the new carrier a free path out.'
							}
						]
					}
				},
				c: {
					drag: {
						target: { kind: 'ellipse', cx: 36, cy: 70, rx: 7, ry: 5 },
						correct:
							'Yes. On the [[half-wall]], inside the forward who cycled up, keeping him on the boards and out of the slot.',
						incorrect:
							'When RD stays low, the forward cycling up the wall is yours. Get to the [[half-wall]] on his inside so he cannot cut into the slot.'
					}
				}
			}
		},
		{
			caption:
				'The new carrier takes the puck behind our net toward the left side. LD slides to his post to meet him, RD peels off to the front of the net, and C drops back into the slot.',
			positions: {
				lw: { x: 46, y: 24 },
				c: { x: 25, y: 52 },
				rw: { x: 38, y: 58 },
				ld: { x: 13, y: 33 },
				rd: { x: 15.5, y: 46 },
				o1: { x: 32, y: 61 },
				o2: { x: 6, y: 37 },
				o3: { x: 19.5, y: 49 },
				o4: { x: 72, y: 14 },
				o5: { x: 72, y: 72 }
			},
			puck: { x: 4.5, y: 35 },
			puckCarrier: 'o2',
			arrows: [
				{ kind: 'skate', from: 'o2', to: { x: 14, y: 24 } },
				{ kind: 'skate', from: 'ld', to: { x: 16, y: 26 } }
			],
			roles: { rd: 'Net-front D', ld: 'Takes the carrier', c: 'Low slot', rw: 'Weak-side wing', lw: 'Strong-side wing' },
			notes: {
				lw: {
					where: 'Moving up to the area between their D at the left [[point]] and the slot.',
					read: 'The puck is coming to your side. Watch the carrier and their D at your point.',
					why: 'You are now the [[strong-side]] winger. The wall pass up to the point is the next threat on your side.'
				},
				c: {
					where: 'Back in the [[slot]] on the right side, inside the forward you were covering.',
					read: 'Watch the puck behind the net and the forward near you drifting toward the slot.',
					why: 'With the puck behind the net, the pass to the slot is the danger. Your spot is in the middle, not on the wall.'
				},
				rw: {
					where: 'Inside the right circle, now on the [[weak-side|weak side]].',
					read: 'Watch the forward near the right circle and the far [[point]].',
					why: 'The puck left your side. Sag inside to protect the back door.'
				},
				ld: {
					where: 'At the left post, stepping out to meet the carrier as he comes around.',
					read: 'Watch his hips. Call "I got him!" and make him go up the wall.',
					why: 'Meeting him at your post is shorter and safer than RD chasing him around the net. One arrives before the other leaves.'
				},
				rd: {
					where: 'In front of the crease, net side of their [[net-front]] forward.',
					read: 'Hear LD\'s call, then let the carrier go and pick up the forward in front.',
					why: 'Chasing behind the net from behind rarely wins the puck and leaves the front empty. The switch keeps everyone covered.'
				}
			},
			reads: {
				ld: [{ at: 'o2' }],
				rd: [{ at: 'o3' }],
				c: [{ at: 'o1' }],
				lw: [{ at: 'o4' }],
				rw: [{ at: 'o5' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt:
							'Their forward carries the puck behind our net toward your side, with RD a step behind him. You are in front of the net. You...',
						options: [
							{
								text: 'Slide to your post, call "I got him!", and meet him as he comes out',
								correct: true,
								why: 'You get there first and face him. RD then takes the front of the net, so nobody is left uncovered.'
							},
							{
								text: 'Stay in front and let RD keep chasing him',
								correct: false,
								why: 'RD is behind him and will not catch him. The carrier comes out on your side with nobody in his way.'
							},
							{
								text: 'Leave the net and chase behind the net too',
								correct: false,
								why: 'Two D behind the net means nobody in front. One pass out front and it is in.'
							}
						]
					}
				},
				lw: {
					decision: {
						prompt: 'The puck is coming around the back of our net to your side. You...',
						options: [
							{
								text: 'Move up between their D at your [[point]] and the slot',
								correct: true,
								why: 'You just became the [[strong-side]] winger. The next pass is likely up your wall to the point.'
							},
							{
								text: 'Go into the corner to help LD',
								correct: false,
								why: 'LD has him, and C is close. Going low leaves the point open.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'LD pins the carrier on the boards at the goal line. The puck squirts loose, C swings over and grabs it, and LW gets to the wall as the outlet.',
			positions: {
				lw: { x: 44, y: 8 },
				c: { x: 19, y: 22 },
				rw: { x: 34, y: 52 },
				ld: { x: 14, y: 13 },
				rd: { x: 15.5, y: 46 },
				o1: { x: 30, y: 58 },
				o2: { x: 11, y: 9 },
				o3: { x: 19.5, y: 49 },
				o4: { x: 70, y: 16 },
				o5: { x: 72, y: 72 }
			},
			puck: { x: 17, y: 19 },
			puckCarrier: 'c',
			arrows: [{ kind: 'pass', from: 'c', to: { x: 42, y: 6 } }],
			roles: { rd: 'Net-front D', ld: 'Pins the carrier', c: 'Low support', rw: 'Weak-side wing', lw: 'Strong-side wing' },
			notes: {
				lw: {
					where: 'On the left boards near the top of the circle, back to the boards, open to the puck, stick on the ice.',
					read: '[[shoulder-check|Shoulder check]] for their D at the [[point]], then give C a target.',
					why: 'The cycle is broken and we have the puck. The first pass up the wall starts the [[breakout]].'
				},
				c: {
					where: 'Low on the left side, just off LD, with the loose puck.',
					read: 'Find LW on the wall. Their forwards are in the middle.',
					why: 'Getting it to the boards quickly beats their forecheckers before they reset.'
				},
				rw: {
					where: 'In the right side of the slot, still inside their forward.',
					read: 'Watch the puck. Once it is on LW\'s stick, push up ice on the right side.',
					why: 'Stay home until the puck is out. A turnover now would find their forward alone on your side.'
				},
				ld: {
					where: 'On the left boards at the goal line, pinning the carrier.',
					read: 'Hold him long enough for C to clear the puck, then release.',
					why: 'You tied him up on the wall; C wins the puck. That is the 2-on-1 the low switch is meant to create.'
				},
				rd: {
					where: 'In front of the crease, net side of their [[net-front]] forward.',
					read: 'Watch the puck. Stay until it is clear of the zone, then follow the play.',
					why: 'One D stays in front until the puck is safely out.'
				}
			},
			reads: {
				c: [{ at: 'lw' }],
				lw: [{ at: 'o4' }],
				ld: [{ at: 'o2' }],
				rd: [{ at: 'o3' }],
				rw: [{ at: 'o1' }]
			}
		}
	]
};

export default play;
