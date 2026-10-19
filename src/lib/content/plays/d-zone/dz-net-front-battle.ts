import type { Play } from '../../types';

const roles = {
	rd: 'Net-front D',
	ld: 'Strong-side D',
	c: 'Low support',
	lw: 'Strong-side wing',
	rw: 'Weak-side wing'
};

const play: Play = {
	id: 'dz-net-front-battle',
	title: 'Net-front battle',
	category: 'd-zone',
	system: 'Net-front defense',
	strength: '5v5',
	summary:
		'How the [[net-front]] D wins the area in front of our goalie: meet the forward early before he sets up, get between him and the goalie, control his stick before his body, and get the rebound out to the boards, never through the middle.',
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
	keyConcepts: ['net-front'],
	variations:
		'There are two ways to defend the net front. Boxing out (shown here) means getting between the forward and the goalie and controlling his stick; it is common in [[man-to-man]] and for bigger D. Fronting means standing between the forward and the puck to block the pass or shot; smaller D and penalty killers use it more because it avoids a wrestling match. If the forward already owns the spot and you cannot move him, coaches usually say front him rather than push him into your own goalie. Which D takes the net front also varies: usually the D away from the puck, but partners should call it.',
	sources: [
		{
			title: 'Defending The Net Front: Fronting vs Box-Out',
			publisher: "Hockey's Arsenal (Greg Revak)",
			url: 'https://hockeysarsenal.substack.com/p/defending-the-net-front'
		},
		{
			title: 'IHM Academy: Defensive Zone Coverage, Lesson 4 (Net-Front Defense & Slot Protection)',
			publisher: 'Ice Hockey Man',
			url: 'https://icehockeyman.com/2025/11/27/ihm-academy-defensive-zone-coverage-lesson-4/'
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
				'The puck is in our left corner and LD is on it. Their forward is skating from the slot toward our crease to set up. RD goes to meet him before he gets there.',
			positions: {
				lw: { x: 46, y: 22 },
				c: { x: 19, y: 19 },
				rw: { x: 32, y: 52 },
				ld: { x: 13.5, y: 13.5 },
				rd: { x: 17, y: 46 },
				o1: { x: 10.5, y: 10.5 },
				o2: { x: 27, y: 45 },
				o3: { x: 38, y: 59 },
				o4: { x: 70, y: 14 },
				o5: { x: 70, y: 70 }
			},
			puck: { x: 9, y: 8.5 },
			puckCarrier: 'o1',
			arrows: [
				{ kind: 'skate', from: 'o2', to: { x: 19, y: 44 } },
				{ kind: 'skate', from: 'rd', to: { x: 20, y: 44 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Between their left D at the [[point]] and the slot, near the top of the left circle.',
					read: 'Watch the puck carrier\'s eyes. If he looks up the wall, their D at your point is the target.',
					why: 'You cover the [[strong-side]] point. Too far out and you leave the slot; too far in and the point shot is free.'
				},
				c: {
					where: 'Low on the left side, just off LD, ready to take the loose puck.',
					read: 'Watch the battle on the wall. If the puck squirts loose, get it and get it out.',
					why: 'You make it 2-on-1 in the corner. RD can only focus on the net front because you are helping LD.'
				},
				rw: {
					where: 'Inside the right circle, on the [[weak-side|weak side]].',
					read: 'Watch their forward floating on the right side. He is the back-door threat.',
					why: 'RD is busy at the net. You guard the far side of the slot so nobody gets a free tap-in.'
				},
				ld: {
					where: 'In the left corner, pinning the carrier on the boards from the net side.',
					read: 'Watch his hands. Tell RD what you see: "man in front!"',
					why: 'Pressure on the puck makes their passes to the net front rushed. RD can win his battle only if the pass is not perfect.'
				},
				rd: {
					where: 'A few feet above the crease, stepping into the forward before he reaches the blue paint.',
					read: 'Watch his chest and stick as he comes in. Get to his inside (net side) first.',
					why: 'It is much easier to keep a forward from getting to the net than to move him once he is planted there.'
				}
			},
			reads: {
				rd: [{ at: 'o2' }],
				ld: [{ at: 'o1' }],
				c: [{ at: 'o1' }],
				lw: [{ at: 'o4' }],
				rw: [{ at: 'o3' }]
			},
			quiz: {
				rd: {
					drag: {
						start: { x: 30, y: 40 },
						target: { kind: 'ellipse', cx: 19, cy: 45, rx: 5, ry: 4 },
						correct:
							'Yes. Just above the crease, on his net side, meeting him before he plants himself in front of the goalie.',
						incorrect:
							'Meet him early, just above the crease, on his net side. Too high and he slips behind you; on the goal line and he has already won the spot.'
					}
				},
				ld: {
					decision: {
						prompt:
							'You are pinning the puck carrier in the left corner and you see their forward heading to the front of our net. You...',
						options: [
							{
								text: 'Keep him pinned and call "man in front!" so RD knows',
								correct: true,
								why: 'You keep the pressure on the puck and give RD the information he cannot see behind him.'
							},
							{
								text: 'Leave the corner and rush to the net front',
								correct: false,
								why: 'RD has the net. Leaving gives the carrier all the time he needs to find the open man.'
							},
							{
								text: 'Stay quiet and focus on your battle',
								correct: false,
								why: 'Silence is how two D both think the other has the net front. Talk every time.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'The puck goes up the wall to their D at the left [[point]]. Their forward parks in front to [[screen]] our goalie. RD boxes him out: body between him and the goalie, stick on his stick.',
			positions: {
				lw: { x: 62, y: 20 },
				c: { x: 24, y: 36 },
				rw: { x: 34, y: 52 },
				ld: { x: 20, y: 25 },
				rd: { x: 16, y: 44 },
				o1: { x: 22, y: 19 },
				o2: { x: 20, y: 46 },
				o3: { x: 38, y: 58 },
				o4: { x: 70, y: 14 },
				o5: { x: 72, y: 70 }
			},
			puck: { x: 69, y: 15 },
			puckCarrier: 'o4',
			arrows: [
				{ kind: 'skate', from: 'lw', to: { x: 66, y: 18 } },
				{ kind: 'shot', from: 'o4', to: { x: 12, y: 42 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Closing on their D at the left [[point]], stick in his [[shooting-lane]].',
					read: 'Watch his stick blade. Shot or pass?',
					why: 'Every bit of pressure on the shooter makes RD\'s job easier. A rushed shot misses the net or hits you.'
				},
				c: {
					where: 'In the [[low-slot|low slot]] on the left side.',
					read: 'Watch the shooter and the space around the crease where rebounds land.',
					why: 'The rebound is the second chance. You and RD make sure it is ours.'
				},
				rw: {
					where: 'Inside the right circle, on the [[weak-side|weak side]].',
					read: 'Watch the forward on the right side. If the shot comes, he crashes the back door.',
					why: 'Rebounds off the goalie often kick to the far side. Be there before their forward is.'
				},
				ld: {
					where: 'Low on the left side, inside the forward who passed up the wall.',
					read: 'Watch him; he may slip to the net after passing.',
					why: 'If he joins the net front, RD has two to handle. Stay between him and the crease.'
				},
				rd: {
					where: 'Between the forward and the goalie, just outside the crease, a little to the side so the goalie can see past you.',
					read: 'Find his stick first. Put yours on top of it or lift it as the shot arrives. Keep your eyes moving between the shooter and him.',
					why: 'Control sticks first, then bodies, then rebounds. A forward with no free stick cannot [[tip]] the shot or bang in a rebound.'
				}
			},
			reads: {
				rd: [{ at: 'o2' }, { at: 'o4' }],
				lw: [{ at: 'o4' }],
				c: [{ at: 'o2' }],
				rw: [{ at: 'o3' }],
				ld: [{ at: 'o1' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt:
							'Their forward is parked in front of our goalie and the point man is about to shoot. You are the [[net-front]] D. You...',
						options: [
							{
								text: 'Get between him and the goalie, a little to the side, and tie up his stick as the shot comes',
								correct: true,
								why: 'Stick control kills the [[tip]] and the rebound, and staying off-center keeps you from screening your own goalie.'
							},
							{
								text: 'Push him toward the goalie to knock him off his spot',
								correct: false,
								why: 'Now you have created a double [[screen]] and maybe a penalty. Move him away from the crease, not into it.'
							},
							{
								text: 'Turn and watch the shot so you can block it',
								correct: false,
								why: 'The moment you turn your back on him, his stick is free for a tip or a rebound.'
							}
						]
					}
				},
				lw: {
					decision: {
						prompt: 'The puck goes up the wall to their D at your [[point]]. You...',
						options: [
							{
								text: 'Close on him with your stick in his [[shooting-lane]]',
								correct: true,
								why: 'Pressure makes the shot rushed or blocked. A clean point shot through a screen is what RD is fighting to prevent.'
							},
							{
								text: 'Drop to the net front to help RD',
								correct: false,
								why: 'RD has the forward in front. Leaving the point gives their D all day to pick his shot.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'The goalie stops the shot and the rebound pops out to the side of the crease. RD keeps the forward\'s stick tied up, C wins the loose puck and moves it to the boards, not the middle.',
			positions: {
				lw: { x: 54, y: 16 },
				c: { x: 26, y: 38 },
				rw: { x: 30, y: 50 },
				ld: { x: 18, y: 27 },
				rd: { x: 16, y: 45 },
				o1: { x: 23, y: 20 },
				o2: { x: 19.5, y: 47.5 },
				o3: { x: 34, y: 56 },
				o4: { x: 70, y: 16 },
				o5: { x: 72, y: 70 }
			},
			puck: { x: 24, y: 39 },
			puckCarrier: 'c',
			arrows: [{ kind: 'pass', from: 'c', to: { x: 44, y: 5 } }],
			roles,
			notes: {
				lw: {
					where: 'Coming off the [[point]] toward the left boards, near the top of the circle.',
					read: 'Watch C with the puck. Get to the wall with your back to the boards, open to the puck, stick on the ice so he has a target.',
					why: 'C wants to move the puck up the boards to you. You are the first outlet on the [[breakout]].'
				},
				c: {
					where: 'On the left side of the [[slot]], just above the crease, with the loose puck.',
					read: 'Glance at the boards and LW. Their forwards are in the middle.',
					why: 'A rebound moved to the boards is safe. A rebound moved through the middle is a second shot against.'
				},
				rw: {
					where: 'In the right side of the slot, between their crashing forward and the net.',
					read: 'Watch their forward on your side and the puck. If C loses it, you are the next stick.',
					why: 'Until the puck is out, the back door is still dangerous. Stay inside your man.'
				},
				ld: {
					where: 'Low on the left side near the post.',
					read: 'Watch C. If he gets the puck out, follow up; if he loses it, be the safety on the post.',
					why: 'One D stays close to the net until the puck is clearly out of the zone.'
				},
				rd: {
					where: 'In front of the crease, still between the forward and the goalie.',
					read: 'Keep his stick tied up until the puck is gone. Then release him; do not hold on after we have it.',
					why: 'His stick is the rebound threat. Holding him after we win the puck is how you take a penalty.'
				}
			},
			reads: {
				c: [{ at: 'lw' }],
				rd: [{ at: 'o2' }],
				rw: [{ at: 'o3' }],
				lw: [{ at: 'c' }],
				ld: [{ at: 'c' }]
			},
			quiz: {
				c: {
					decision: {
						prompt: 'You win the rebound beside the crease. Their forwards are in the middle. You...',
						options: [
							{
								text: 'Move it to the boards, to LW on the wall',
								correct: true,
								why: 'The boards are away from their sticks. The puck is out of danger and we can start the [[breakout]].'
							},
							{
								text: 'Pass it across the [[slot]] to RW',
								correct: false,
								why: 'That pass goes through their forwards in front of our net. A pick-off there is a goal against.'
							},
							{
								text: 'Hold it and look for the perfect play',
								correct: false,
								why: 'With forwards around the crease, every second you hold it is a chance for them to take it back.'
							}
						]
					}
				},
				rw: {
					decision: {
						prompt: 'C has the rebound beside the crease. Their forward on your side is crashing toward the back door. You...',
						options: [
							{
								text: 'Stay inside him until the puck is out',
								correct: true,
								why: 'If C loses the puck, the back door is the next chance. Leave only once the puck is clear.'
							},
							{
								text: 'Bolt for the right boards to get open for a pass',
								correct: false,
								why: 'Too early. The puck is not out yet and you just left their forward alone at the back door.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
