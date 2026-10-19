import type { Play } from '../../types';

const alignment = {
	lw: { x: 166, y: 5.5 },
	c: { x: 166, y: 20.5 },
	rw: { x: 166, y: 35.5 },
	ld: { x: 150, y: 20 },
	rd: { x: 130, y: 48 },
	o1: { x: 172, y: 20.5 },
	o2: { x: 172, y: 5.5 },
	o3: { x: 172, y: 35.5 },
	o4: { x: 183, y: 14 },
	o5: { x: 182, y: 40 }
};

const roles = {
	lw: 'Boards-side wing',
	c: 'Center',
	rw: 'Net-side wing',
	ld: 'Shooter',
	rd: 'Safety'
};

const play: Play = {
	id: 'fo-offensive-zone',
	title: 'Offensive zone faceoff',
	category: 'faceoff',
	system: 'O-zone draw: win back to the point, shoot through traffic',
	strength: '5v5',
	summary:
		'A faceoff at the left dot in their zone. The most common plan is simple: C wins it straight back to LD at the top of the circle, LD shoots low through traffic, and RW is already at the net for the [[screen]] and rebound. If we lose it, the closest winger pressures their D right away and the rest of us hold the zone.',
	slots: [
		{ id: 'lw', home: 'LW' },
		{ id: 'c', home: 'C' },
		{ id: 'rw', home: 'RW' },
		{ id: 'ld', home: 'LD' },
		{ id: 'rd', home: 'RD' }
	],
	opponents: [
		{ id: 'o1', label: 'C' },
		{ id: 'o2', label: 'W' },
		{ id: 'o3', label: 'W' },
		{ id: 'o4', label: 'D' },
		{ id: 'o5', label: 'D' }
	],
	keyConcepts: ['net-front'],
	variations:
		'Teams run many set plays from this dot. Common ones: win it to the D on the wall, who passes to a winger sliding into the middle for a [[one-timer]]; win it back to the boards-side winger, who loops around the top of the circle with speed; or push it forward past their center for a winger to skate onto. Who takes the shot is usually the best-shooting D, but teams switch it up so the other side cannot read it. Some coaches line the wingers up the other way around (shooter on the boards side). On a loss, some teams send the boards-side winger after their D and others send the center, depending on where the puck went.',
	sources: [
		{
			title: 'How to Win Faceoffs',
			publisher: 'Hockey Player Magazine (Bill Ferguson)',
			url: 'https://hockeyplayer.com/?p=1216'
		},
		{
			title: 'Capitals faceoff set plays and why they work',
			publisher: 'Russian Machine Never Breaks (Spenser Smallwood)',
			url: 'https://russianmachineneverbreaks.com/2017/02/13/capitals-faceoff-set-plays-and-why-they-work/'
		}
	],
	steps: [
		{
			id: 'alignment',
			caption:
				'Faceoff at the left dot in their zone. C takes the draw. LW is on the boards-side [[hash-marks|hash marks]], RW on the inside hash, LD at the top of the circle behind C, and RD high in the middle as the safety. Plan: win it back to LD for a shot.',
			phase: 'alignment',
			positions: { ...alignment },
			puck: { x: 169, y: 20.5 },
			arrows: [{ kind: 'pass', from: 'c', to: { x: 151.5, y: 20.5 } }],
			roles,
			notes: {
				lw: {
					where: 'On the boards-side hash marks, across from their winger.',
					read: 'Watch the drop and their winger. On a win he will try to get out to LD at the point.',
					why: 'Your job on a win is to make that trip slow for him so LD gets the shot off.'
				},
				c: {
					where: 'On the dot, facing their center, back to the blue line.',
					read: 'Watch the linesman\'s hand. Plan to pull it straight back to LD.',
					why: 'A clean win back gives LD a shot before their wingers can get out to him.'
				},
				rw: {
					where: 'On the inside hash marks, the side closest to their net.',
					read: 'Watch the drop. On a win, go straight to the front of their net.',
					why: 'You are the screen and the rebound. Getting there first is the whole job.'
				},
				ld: {
					where: 'At the top of the circle, straight behind C, stick ready to shoot.',
					read: 'Watch the puck at the drop and the lane to the net. Who can get out to you?',
					why: 'Lining up right behind the draw is where a won puck goes. You shoot before anyone reaches you.'
				},
				rd: {
					where: 'High in the middle, just inside their blue line.',
					read: 'Watch the puck and their wingers. You are the last player back.',
					why: 'If the draw is lost and they get it out fast, you are the one stopping a rush the other way.'
				}
			},
			reads: {
				c: [{ at: 'o1', label: 'Their C' }],
				lw: [{ at: 'o2', label: 'Their W' }],
				rw: [{ at: 'o5', label: 'Net-front D' }],
				ld: [{ at: 'o2' }],
				rd: [{ at: 'o3' }]
			},
			quiz: {
				c: {
					decision: {
						prompt: 'The plan is a shot from LD. Where do you try to win the draw?',
						options: [
							{
								text: 'Straight back to LD at the top of the circle',
								correct: true,
								why: 'That is the set play. LD gets a shot before their winger can get out to him.'
							},
							{
								text: 'Forward past their center, toward their net',
								correct: false,
								why: 'That can be a set play too, but not this one. Here it just sends the puck to their D.'
							},
							{
								text: 'Over to RW on the inside hash',
								correct: false,
								why: 'RW is heading to the net for the screen. The puck should go to the shooter.'
							}
						]
					}
				},
				lw: {
					decision: {
						prompt:
							'We win the draw back to LD. Their boards-side winger turns to get out to LD. You...',
						options: [
							{
								text: 'Hold your ground in his path to LD without pushing, hooking or moving into him, then head for the net',
								correct: true,
								why: 'Standing your ground in his way is legal as long as you got there first and do not move into him, and it buys LD the half-second he needs. Pushing, hooking or stepping into him is interference.'
							},
							{
								text: 'Skate to the net right away',
								correct: false,
								why: 'RW is already there, and their winger gets a clean path to block LD\'s shot.'
							},
							{
								text: 'Go get the puck yourself',
								correct: false,
								why: 'LD has it. Two of you on the puck leaves their winger free to block the shot.'
							}
						]
					}
				}
			}
		},
		{
			id: 'win',
			caption:
				'C wins it back to LD. LW stays in their winger\'s path, RW goes to the front of the net, and LD shoots low through the traffic.',
			phase: 'win',
			positions: {
				lw: { x: 160, y: 10 },
				c: { x: 168, y: 24 },
				rw: { x: 180, y: 34 },
				ld: { x: 150, y: 20 },
				rd: { x: 130, y: 46 },
				o1: { x: 172, y: 26 },
				o2: { x: 164, y: 6 },
				o3: { x: 172, y: 40 },
				o4: { x: 182, y: 18 },
				o5: { x: 184, y: 40 }
			},
			puck: { x: 151.5, y: 20.5 },
			puckCarrier: 'ld',
			arrows: [
				{ kind: 'shot', from: 'ld', to: { x: 188, y: 42 } },
				{ kind: 'skate', from: 'rw', to: { x: 181, y: 37 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Between their boards winger and LD, a stride off the hash marks, where you got to first.',
					read: 'Watch their winger. Stay square where you are; do not reach, push or step into him. If he goes around you, let him.',
					why: 'Every step he has to take around you is time LD has to shoot.'
				},
				c: {
					where: 'Beside their center, on his net side.',
					read: 'Keep him from getting out to the shot. Once the puck is shot, go to the net.',
					why: 'Their center is the closest player to LD. Holding your ground keeps him from blocking the shot.'
				},
				rw: {
					where: 'In front of their goalie, at the top of the crease, stick on the ice.',
					read: 'Find the goalie\'s eyes and stand in them. Keep your stick down for a [[tip]].',
					why: 'A low shot through a screen is hard to stop and leaves rebounds. You are the reason the shot is dangerous.'
				},
				ld: {
					where: 'Top of the circle with the puck.',
					read: 'Look at the net, not at the players in front. Shoot low, at or just beside RW.',
					why: 'A low, quick shot through traffic gets tipped or makes a rebound. A big wind-up gives their winger time to block it.'
				},
				rd: {
					where: 'High in the middle, ready for a [[d-to-d|D-to-D]] pass.',
					read: 'Watch LD. If he is blocked, he moves it to you for the shot.',
					why: 'A second shooter makes their wingers choose which of you to cover.'
				}
			},
			reads: {
				ld: [{ at: 'rw', label: 'Screen' }],
				rw: [{ at: 'o5' }],
				lw: [{ at: 'o2', label: 'Their W' }],
				c: [{ at: 'o1' }],
				rd: [{ at: 'ld' }]
			},
			quiz: {
				rw: {
					drag: {
						target: { kind: 'ellipse', cx: 181, cy: 38, rx: 6, ry: 5 },
						correct: 'Yes. Top of the crease in the goalie\'s eyes, stick on the ice for a tip.',
						incorrect:
							'On a won draw back to the shooter, the inside winger goes straight to the front of the net, right in the goalie\'s line of sight.'
					}
				},
				ld: {
					decision: {
						prompt: 'The draw comes back to you at the top of the circle. RW is in front of the net. You...',
						options: [
							{
								text: 'Shoot quickly and low, toward RW\'s stick',
								correct: true,
								why: 'Quick and low beats their winger to the block and gives RW a tip or a rebound.'
							},
							{
								text: 'Wind up for a big slapshot',
								correct: false,
								why: 'The wind-up gives their winger time to get into your lane. A blocked shot can turn into a breakaway against.'
							},
							{
								text: 'Hold it and look for a pass',
								correct: false,
								why: 'The set play only works if the shot is quick. Waiting lets their whole team set up.'
							}
						]
					}
				}
			}
		},
		{
			id: 'win-2',
			caption:
				'The shot gets through and the rebound kicks out to the side of the net. RW and C are there first; LW comes to the net once the puck is clear. LD backs up to the blue line and RD stays high in the middle.',
			phase: 'win',
			positions: {
				lw: { x: 170, y: 18 },
				c: { x: 176, y: 32 },
				rw: { x: 181, y: 40 },
				ld: { x: 132, y: 18 },
				rd: { x: 132, y: 42 },
				o1: { x: 174, y: 26 },
				o2: { x: 164, y: 12 },
				o3: { x: 174, y: 46 },
				o4: { x: 183, y: 22 },
				o5: { x: 185, y: 45 }
			},
			puck: { x: 184, y: 50 },
			arrows: [
				{ kind: 'skate', from: 'c', to: { x: 180, y: 46 } },
				{ kind: 'skate', from: 'lw', to: { x: 176, y: 28 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Coming off their winger toward the net.',
					read: 'Watch the rebound. Head for the far side of the crease.',
					why: 'Once the puck is shot, your work on their winger is done. Another body at the net means more rebounds for us.'
				},
				c: {
					where: 'Driving to the rebound beside the net.',
					read: 'Watch the loose puck and their D. Stick on the ice.',
					why: 'Rebounds go to whoever arrives first with his stick down.'
				},
				rw: {
					where: 'At the side of the crease.',
					read: 'Find the loose puck. If you cannot shoot, keep it alive.',
					why: 'You were already at the net, so you are closest to the rebound.'
				},
				ld: {
					where: 'Holding the blue line on the left side.',
					read: 'Watch the puck. If it squirts up the wall, keep it in.',
					why: 'A D who follows his shot to the net leaves nobody back for their counter.'
				},
				rd: {
					where: 'High in the middle.',
					read: 'Watch the puck and their wingers.',
					why: 'You are still the safety. One loose puck out the middle is a rush against.'
				}
			},
			reads: {
				rw: [{ at: { x: 184, y: 50 }, label: 'Rebound' }],
				c: [{ at: { x: 184, y: 50 }, label: 'Rebound' }],
				lw: [{ at: { x: 184, y: 50 } }],
				ld: [{ at: 'o2' }],
				rd: [{ at: 'o3' }]
			}
		},
		{
			id: 'alignment-loss',
			caption:
				'Same faceoff again. This time watch the jobs if we LOSE the draw.',
			phase: 'alignment-loss',
			positions: { ...alignment },
			puck: { x: 169, y: 20.5 },
			arrows: [],
			roles,
			notes: {
				lw: {
					where: 'On the boards-side hash marks.',
					read: 'Watch the drop. If it goes back to their D behind their center, you are closest: go.',
					why: 'Fast pressure on their D before he can look up turns a lost draw into a [[forecheck]].'
				},
				c: {
					where: 'On the dot, facing their center.',
					read: 'Win or lose, stay with their center.',
					why: 'If you chase the puck, their center is free in the middle for an easy pass out.'
				},
				rw: {
					where: 'On the inside hash marks.',
					read: 'On a loss, watch their other D near the net. Take away the pass to him.',
					why: 'If LW pressures their first D, his easy pass is across to his partner. You make it a bad option.'
				},
				ld: {
					where: 'At the top of the circle behind C.',
					read: 'On a loss, watch the boards. A [[rim]] up the wall is their way out.',
					why: 'You are the first player who can keep a [[rim]] in the zone.'
				},
				rd: {
					where: 'High in the middle, just inside their blue line.',
					read: 'On a loss, stay high. Watch for a pass up the middle.',
					why: 'One of you has to stay back. If they get out, you are the first defender.'
				}
			},
			reads: {
				lw: [{ at: 'o4', label: 'Their D' }],
				rw: [{ at: 'o5' }],
				c: [{ at: 'o1' }],
				ld: [{ at: 'o2' }],
				rd: [{ at: 'o3' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt: 'You are the high D in the middle. We lose the draw. You...',
						options: [
							{
								text: 'Stay high in the middle as the safety',
								correct: true,
								why: 'Someone has to be between the puck and our net. That is you.'
							},
							{
								text: 'Jump down to help win the puck back',
								correct: false,
								why: 'If they get it out past you, it is an odd-man rush against with no D back.'
							},
							{
								text: 'Skate to the left wall to help LD',
								correct: false,
								why: 'That leaves the middle and the whole right side open. Stay in the middle.'
							}
						]
					}
				}
			}
		},
		{
			id: 'loss',
			caption:
				'Their center wins it back to their D. LW goes straight at him, C stays with their center, and RW takes away the pass across. Under pressure, their D [[rim|rims]] it hard up the boards.',
			phase: 'loss',
			positions: {
				lw: { x: 178, y: 20 },
				c: { x: 168, y: 22 },
				rw: { x: 178, y: 34 },
				ld: { x: 150, y: 18 },
				rd: { x: 132, y: 40 },
				o1: { x: 172, y: 25 },
				o2: { x: 166, y: 11 },
				o3: { x: 162, y: 32 },
				o4: { x: 183, y: 14 },
				o5: { x: 184, y: 40 }
			},
			puck: { x: 182, y: 15.5 },
			puckCarrier: 'o4',
			arrows: [
				{ kind: 'skate', from: 'lw', to: { x: 180, y: 17 } },
				{ kind: 'pass', from: 'o4', to: { x: 146, y: 4 }, via: { x: 178, y: 1 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Closing on their D in the corner, from the middle side.',
					read: 'Watch the puck on his stick. Get your stick on the puck and take away the middle.',
					why: 'He has to move it fast and blind. A rushed [[rim]] is far easier for LD to keep in than a clean pass.'
				},
				c: {
					where: 'Beside their center, on his inside.',
					read: 'Stay with him. If he swings for a pass, your stick is in the lane.',
					why: 'Their center is their best outlet. Taking him away leaves only the boards.'
				},
				rw: {
					where: 'Between their two D, in front of their net.',
					read: 'Watch their D with the puck and his partner. Stick in the lane between them.',
					why: 'With the pass across taken away, his only choice is up the boards.'
				},
				ld: {
					where: 'Near the top of the circle on the left side, a few strides off the boards.',
					read: 'Watch their D. If he [[rim|rims]] it up your wall, read how hard it is coming and whether you can get there first.',
					why: 'The [[rim]] is coming your way. Seeing it early is what lets you keep it in.'
				},
				rd: {
					where: 'High in the middle.',
					read: 'Watch the [[rim]] and LD. If LD goes to the wall, slide over behind him.',
					why: 'When one D steps down, the other covers the point behind him.'
				}
			},
			reads: {
				lw: [{ at: 'o4', label: 'Puck' }],
				rw: [{ at: 'o5' }],
				c: [{ at: 'o1' }],
				ld: [{ at: 'o4' }],
				rd: [{ at: 'ld' }]
			},
			quiz: {
				lw: {
					decision: {
						prompt:
							'We lose the draw and the puck goes back to their D in the corner. You are the closest of us. You...',
						options: [
							{
								text: 'Go at him from the middle side with your stick on the puck',
								correct: true,
								why: 'Quick pressure forces a rushed play. Coming from the middle pushes him to the boards, where LD is waiting.'
							},
							{
								text: 'Stay on the hash marks with their winger',
								correct: false,
								why: 'Their D gets all the time he wants to make a clean pass out of the zone.'
							},
							{
								text: 'Go to the front of the net',
								correct: false,
								why: 'The puck is in the corner. Nobody pressures it, so they break out cleanly.'
							}
						]
					}
				}
			}
		},
		{
			id: 'loss-2',
			caption:
				'LD reads the [[rim]], steps down to the boards and stops it before their winger gets there. RD slides over to cover the left point behind him. We keep the puck in the zone.',
			phase: 'loss',
			positions: {
				lw: { x: 178, y: 18 },
				c: { x: 166, y: 24 },
				rw: { x: 178, y: 36 },
				ld: { x: 146, y: 6 },
				rd: { x: 134, y: 24 },
				o1: { x: 170, y: 28 },
				o2: { x: 156, y: 10 },
				o3: { x: 160, y: 34 },
				o4: { x: 183, y: 16 },
				o5: { x: 184, y: 40 }
			},
			puck: { x: 146, y: 3.5 },
			puckCarrier: 'ld',
			arrows: [{ kind: 'pass', from: 'ld', to: { x: 134, y: 24 } }],
			roles,
			notes: {
				lw: {
					where: 'Near their D in the corner.',
					read: 'Watch LD keep it in. Get back on the [[forecheck]] as the puck comes back down.',
					why: 'The draw was lost, but we still have the zone.'
				},
				c: {
					where: 'With their center near the top of the circle.',
					read: 'Watch the puck and their center. Get open for LD or RD in the [[slot]].',
					why: 'Once we have it back, you go from checker to option.'
				},
				rw: {
					where: 'In front of their net.',
					read: 'Watch for the shot from the point. Get to the goalie\'s eyes.',
					why: 'The puck is back with our D. Shots from the point need a screen.'
				},
				ld: {
					where: 'On the left boards inside the blue line, with the puck.',
					read: 'Their winger is a stride away. Move it to RD at the point before he arrives.',
					why: 'You only stepped down because you knew you would get there first and RD would cover behind you. Now move it before the pressure arrives.'
				},
				rd: {
					where: 'Covering the left point, inside the blue line.',
					read: 'Watch LD and the puck. Be ready to take his pass and shoot or move it.',
					why: 'Sliding over behind LD made the step-down safe. If LD had missed, you were the safety.'
				}
			},
			reads: {
				ld: [{ at: 'o2', label: 'Pressure' }, { at: 'rd' }],
				rd: [{ at: 'ld' }],
				rw: [{ at: 'o5' }],
				c: [{ at: 'o1' }],
				lw: [{ at: 'o4' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt:
							'Their D [[rim|rims]] it hard up your boards. You can get to the wall a stride before their winger, and RD is sliding over behind you. You...',
						options: [
							{
								text: 'Step down to the boards and stop it to keep it in the zone',
								correct: true,
								why: 'You will get there first and RD covers behind you. That is exactly when to step down.'
							},
							{
								text: 'Back out of the zone and let it go',
								correct: false,
								why: 'With a step on their winger and RD covering, backing off gives up the zone for nothing.'
							},
							{
								text: 'Step down even if you are not sure you will get there first',
								correct: false,
								why: 'If their winger gets there first, he chips it past you and it is a rush against. Only step down when you know you win the race.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
