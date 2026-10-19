import type { Play } from '../../types';

const roles = { ld: 'Carrier', c: 'Drop man', lw: 'Left wide', rw: 'Right wide', rd: 'Trailer' };

const play: Play = {
	id: 'pp-breakout-drop-pass',
	title: 'Power play breakout: drop pass',
	category: 'power-play',
	system: 'Drop pass breakout',
	strength: '5v4',
	summary:
		'How a [[power-play]] unit gets the puck out of its own end and into theirs with speed. LD carries the puck up the middle, C follows a few strides behind, and just before their first [[forecheck|forechecker]] closes, LD leaves the puck for C with a [[drop-pass]]. C picks it up at full speed while LD keeps driving, LW and RW stretch wide, and the unit attacks their blue line with numbers.',
	slots: [
		{ id: 'lw', home: 'LW' },
		{ id: 'c', home: 'C' },
		{ id: 'rw', home: 'RW' },
		{ id: 'ld', home: 'LD' },
		{ id: 'rd', home: 'RD' }
	],
	opponents: [
		{ id: 'o1', label: 'F1' },
		{ id: 'o2', label: 'F' },
		{ id: 'o3', label: 'D' },
		{ id: 'o4', label: 'D' }
	],
	keyConcepts: ['triangles-support'],
	variations:
		'The penalty kill here sends one [[forecheck|forechecker]] and waits with three across near their own blue line (a 1-3). Teams run many versions of the drop: a "two-man drop" where two forwards curl behind the carrier and he picks one; a drop to a forward who then passes ahead instead of carrying; or a swing where the carrier shows the drop but passes ahead into a forward\'s stride instead. Coaches agree on the timing: drop it late, once the forechecker has committed to the carrier, and keep the play inside the faceoff dots as long as possible. Drop too early and the forechecker just turns onto the new carrier or picks off the pass. If their pressure is early and hard, drop early; if they wait at their blue line, carry it farther before dropping.',
	sources: [
		{
			title: "Watching Rocky Thompson's PP Breakouts with an NHL Coach",
			publisher: 'San Jose Hockey Now',
			url: 'https://sanjosehockeynow.com/rocky-thompson-chicago-wolves-san-jose-sharks-power-play-breakout/'
		},
		{
			title: 'Power Play Drop Pass Breakout',
			publisher: 'The Coaches Site',
			url: 'https://members.thecoachessite.com/video/power-play-drop-pass-breakout-1'
		},
		{
			title: 'Power Play: Breakout',
			publisher: 'Weiss Tech Hockey',
			url: 'https://weisstechhockey.com/power-play-breakout/'
		}
	],
	steps: [
		{
			caption:
				'The penalty killers fired the puck down. LD has it stopped behind our net. Their [[forecheck|forechecker]] waits near our blue line and the other three wait near theirs.',
			phase: 'set',
			positions: {
				lw: { x: 66, y: 4 },
				c: { x: 22, y: 56 },
				rw: { x: 68, y: 81 },
				ld: { x: 3, y: 40 },
				rd: { x: 14, y: 49 },
				o1: { x: 56, y: 42 },
				o2: { x: 106, y: 16 },
				o3: { x: 104, y: 42 },
				o4: { x: 106, y: 68 }
			},
			puck: { x: 4.5, y: 42 },
			puckCarrier: 'ld',
			arrows: [
				{ kind: 'skate', from: 'ld', to: { x: 36, y: 36 }, via: { x: 4, y: 28 } },
				{ kind: 'skate', from: 'c', to: { x: 28, y: 46 } }
			],
			roles,
			notes: {
				lw: {
					where: 'On the left boards near our blue line, back to the boards, open to the puck.',
					read: 'Watch LD behind the net and their [[forecheck|forechecker]]. Wait until LD starts up ice before you push forward.',
					why: 'Going early puts you too far ahead. You want to hit their blue line at speed at the same time as the puck.'
				},
				c: {
					where: 'Low on the right side, between our net and the right circle, feet moving, ready to curl in behind LD.',
					read: 'Watch LD. When he goes, you go, a few strides behind him on his right.',
					why: 'You are the drop man. You need to be behind the puck so you can take the [[drop-pass]] with speed.'
				},
				rw: {
					where: 'On the right boards near our blue line, back to the boards, open to the puck.',
					read: 'Watch LD and the three penalty killers waiting near their blue line.',
					why: 'Your width stretches their three across. If you stay wide, the middle opens for C.'
				},
				ld: {
					where: 'Behind our net with the puck, standing still.',
					read: 'Look up ice: where is their [[forecheck|forechecker]], and is everyone set? Go when all four teammates are in place.',
					why: 'On the [[power-play]] you have time. A calm start lets all five go up together instead of one at a time.'
				},
				rd: {
					where: 'Beside the right post, a step out from the net.',
					read: 'Watch LD and their [[forecheck|forechecker]]. Tell LD if the forechecker comes in on him.',
					why: 'You are the safety. If anything goes wrong in our end, you are the one in front of our net.'
				}
			},
			reads: {
				ld: [{ at: 'o1', label: 'F1' }],
				rd: [{ at: 'o1', label: 'F1' }],
				c: [{ at: 'ld' }],
				lw: [{ at: 'ld' }],
				rw: [{ at: 'o4' }]
			},
			quiz: {
				rd: {
					decision: {
						prompt: 'LD has the puck stopped behind our net to start the power play [[breakout]]. Their [[forecheck|forechecker]] waits near our blue line. You...',
						options: [
							{
								text: 'Stay beside the net as his safety, and call out where the [[forecheck|forechecker]] is',
								correct: true,
								why: 'Until the puck is moving up ice, one D stays home. Your voice also tells LD what he cannot see.'
							},
							{
								text: 'Race up ice to give him a long pass option',
								correct: false,
								why: 'You leave our net empty, and a long pass from behind the net goes right past their [[forecheck|forechecker]].'
							},
							{
								text: 'Go behind the net with him',
								correct: false,
								why: 'Two players behind one net gives him no outlet in front and leaves the slot empty.'
							}
						]
					}
				},
				rw: {
					drag: {
						start: { x: 52, y: 66 },
						target: { kind: 'ellipse', cx: 68, cy: 80, rx: 9, ry: 5 },
						correct: 'Yes. Wide on the right boards near our blue line, you are ready to stretch their three penalty killers.',
						incorrect: 'On the drop pass [[breakout]] the wingers start wide on the boards near our blue line, back to the boards, so they can push up ice as LD starts.'
					}
				}
			}
		},
		{
			caption:
				'LD carries it up the middle with C a few strides behind him. Their [[forecheck|forechecker]] starts to close on LD. LW and RW push up the boards.',
			phase: 'carry',
			positions: {
				lw: { x: 84, y: 5 },
				c: { x: 28, y: 46 },
				rw: { x: 84, y: 80 },
				ld: { x: 40, y: 36 },
				rd: { x: 30, y: 62 },
				o1: { x: 52, y: 40 },
				o2: { x: 110, y: 16 },
				o3: { x: 106, y: 42 },
				o4: { x: 110, y: 68 }
			},
			puck: { x: 42, y: 37.5 },
			puckCarrier: 'ld',
			arrows: [
				{ kind: 'skate', from: 'ld', to: { x: 54, y: 36 } },
				{ kind: 'skate', from: 'c', to: { x: 42, y: 44 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Pushing up the left boards, just past our blue line.',
					read: 'Watch the puck and their three penalty killers near their blue line. Do not get ahead of the puck at their line.',
					why: 'You force their D on your side to stay wide. That keeps the middle open for whoever has the puck.'
				},
				c: {
					where: 'A few strides behind LD and to his right, picking up speed.',
					read: 'Watch LD\'s back and the [[forecheck|forechecker]] coming at him. Get to full speed before the drop.',
					why: 'The drop only works if you are flying when you get it. Coasting behind LD gives the [[forecheck|forechecker]] time to turn on you.'
				},
				rw: {
					where: 'Pushing up the right boards, just past our blue line.',
					read: 'Watch the puck and their D on your side. Stay wide.',
					why: 'Width pulls their three apart. The farther apart they are, the bigger the hole for C.'
				},
				ld: {
					where: 'Carrying the puck up the middle, inside the faceoff dots.',
					read: 'Watch their [[forecheck|forechecker]]. Keep coming at him: the closer he gets before you drop it, the more ice C gets.',
					why: 'Carrying it at him makes him commit to you. Once he commits, he cannot also stop C.'
				},
				rd: {
					where: 'Following up the right side, behind the play.',
					read: 'Watch the puck. If the drop goes wrong, you are the first one back.',
					why: 'One D always stays below the puck until it is out of our end.'
				}
			},
			reads: {
				ld: [{ at: 'o1', label: 'F1' }],
				c: [{ at: 'ld' }],
				lw: [{ at: 'o2' }],
				rw: [{ at: 'o4' }],
				rd: [{ at: 'o1' }]
			},
			quiz: {
				c: {
					drag: {
						target: { kind: 'ellipse', cx: 28, cy: 46, rx: 8, ry: 6 },
						correct: 'Yes. A few strides behind LD and a little to his side, you can build speed and take the drop without running into him.',
						incorrect: 'The drop man trails the carrier by a few strides, a little to one side, so the puck can be left right in his path.'
					}
				}
			}
		},
		{
			caption:
				'Their [[forecheck|forechecker]] commits to LD between the top of our circles and our blue line. LD leaves the puck for C and keeps skating, taking the forechecker\'s attention with him.',
			phase: 'drop',
			positions: {
				lw: { x: 96, y: 5 },
				c: { x: 44, y: 44 },
				rw: { x: 96, y: 80 },
				ld: { x: 56, y: 36 },
				rd: { x: 40, y: 62 },
				o1: { x: 64, y: 38 },
				o2: { x: 114, y: 18 },
				o3: { x: 110, y: 42 },
				o4: { x: 114, y: 66 }
			},
			puck: { x: 57.5, y: 37.5 },
			puckCarrier: 'ld',
			arrows: [
				{ kind: 'pass', from: 'ld', to: { x: 46, y: 43 } },
				{ kind: 'skate', from: 'ld', to: { x: 74, y: 32 } },
				{ kind: 'skate', from: 'c', to: { x: 70, y: 46 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Wide on the left boards, approaching the red line.',
					read: 'Watch C pick up the drop. Time your speed so you reach their blue line just after the puck.',
					why: 'Getting to their line too early is [[offside]]. Too late and C has nobody to pass to.'
				},
				c: {
					where: 'Right behind LD, at full speed, the puck coming back to you.',
					read: 'Their [[forecheck|forechecker]] is facing LD, not you. Look up at their three across their blue line as you take the puck.',
					why: 'You get the puck with speed and the [[forecheck|forechecker]] already beaten. You are now the one attacking their blue line.'
				},
				rw: {
					where: 'Wide on the right boards, approaching the red line.',
					read: 'Watch C and their D on your side. Stay wide and onside.',
					why: 'If their D on your side moves into the middle to stop C, you are open wide.'
				},
				ld: {
					where: 'Up the middle, about 20 feet short of our blue line, leaving the puck behind you.',
					read: 'Their [[forecheck|forechecker]] is coming straight at you. Leave the puck for C and keep skating forward past the forechecker.',
					why: 'The [[forecheck|forechecker]] committed to you. Dropping it now gets the puck to a player he is not facing.'
				},
				rd: {
					where: 'Trailing on the right side, near the top of our right circle.',
					read: 'Watch the drop. If C misses it, the puck is in your area.',
					why: 'You are the last player back and the backup if the drop goes wrong.'
				}
			},
			reads: {
				ld: [{ at: 'o1', label: 'Committed' }, { at: 'c' }],
				c: [{ at: 'o3' }],
				lw: [{ at: 'o2' }],
				rw: [{ at: 'o4' }],
				rd: [{ at: 'c' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt: 'You are carrying the puck up the middle and C is right behind you at full speed. Their [[forecheck|forechecker]] is now coming straight at you. You...',
						options: [
							{
								text: 'Drop it for C now and keep skating',
								correct: true,
								why: 'He committed to you, so C gets the puck with speed in ice the [[forecheck|forechecker]] has left. Late is right: he cannot turn back in time.'
							},
							{
								text: 'Try to beat him one on one',
								correct: false,
								why: 'You might, but losing it here gives them a short-handed rush with your D caught up ice.'
							},
							{
								text: 'Drop it as soon as you come out from behind the net, well before he gets close',
								correct: false,
								why: 'Too early. The [[forecheck|forechecker]] just turns onto C or picks off the pass. Make him commit to you first.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'A couple of seconds later C carries it through the [[neutral-zone|neutral zone]] with speed. LW and RW are wide, LD has driven up the left side, and their [[forecheck|forechecker]] is behind the play.',
			phase: 'attack',
			positions: {
				lw: { x: 116, y: 5 },
				c: { x: 82, y: 48 },
				rw: { x: 116, y: 80 },
				ld: { x: 80, y: 30 },
				rd: { x: 64, y: 60 },
				o1: { x: 66, y: 38 },
				o2: { x: 124, y: 20 },
				o3: { x: 120, y: 42 },
				o4: { x: 124, y: 66 }
			},
			puck: { x: 84, y: 49 },
			puckCarrier: 'c',
			arrows: [
				{ kind: 'skate', from: 'c', to: { x: 118, y: 58 } },
				{ kind: 'skate', from: 'lw', to: { x: 122, y: 6 } },
				{ kind: 'skate', from: 'rw', to: { x: 122, y: 79 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Wide on the left boards, just short of their blue line.',
					read: 'The puck is still behind you. Slow your feet or curl so you do not cross their line before it.',
					why: 'An [[offside]] here kills the whole [[breakout]]. Hit the line at speed right after the puck.'
				},
				c: {
					where: 'In the middle of the [[neutral-zone|neutral zone]] with the puck, at full speed.',
					read: 'Look at their three: where is the gap? Their D on the right is wide on RW, so attack the space between him and the middle D.',
					why: 'With speed and two wingers wide, their D have to back up. That is how you get in with the puck instead of dumping it.'
				},
				rw: {
					where: 'Wide on the right boards, just short of their blue line.',
					read: 'Watch C and their D on your side. Stay onside and ready to take a pass or chase a puck chipped into the corner.',
					why: 'If their D squeezes C, the pass to you is open. If C chips it in, you are first to it.'
				},
				ld: {
					where: 'Up the left side behind LW, coming in as a late option.',
					read: 'Watch the puck. Be a pass option behind C, but stay above the puck.',
					why: 'You started the play. Now you are the support on the left and the first one back if they clear it.'
				},
				rd: {
					where: 'Trailing in the middle, the deepest player.',
					read: 'Watch the puck and their [[forecheck|forechecker]] skating back.',
					why: 'One D stays the last player back in case the puck turns over at their blue line.'
				}
			},
			reads: {
				c: [{ at: { x: 122, y: 54 }, label: 'Gap' }],
				lw: [{ at: { x: 125, y: 8 }, label: 'Blue line' }],
				rw: [{ at: 'o4' }],
				ld: [{ at: 'c' }],
				rd: [{ at: 'o1' }]
			},
			quiz: {
				c: {
					decision: {
						prompt: 'You took the drop and are flying through the [[neutral-zone|neutral zone]]. LW and RW are wide, and their three wait at their blue line. You...',
						options: [
							{
								text: 'Attack the gap between their middle D and the D on the right, with speed',
								correct: true,
								why: 'Your speed and the two wide wingers make their D back up. Attack the gap and you either carry it in or open a pass to RW.'
							},
							{
								text: 'Slow down at the red line and wait for everyone to set up',
								correct: false,
								why: 'The whole point of the drop was to give you speed. Slowing down lets all four of them set up.'
							},
							{
								text: 'Pass it back to RD to start again',
								correct: false,
								why: 'The [[breakout]] worked. Going back now wastes it and lets their [[forecheck|forechecker]] recover.'
							}
						]
					}
				},
				lw: {
					decision: {
						prompt: 'You are wide on the left, almost at their blue line, and the puck is still behind you with C. You...',
						options: [
							{
								text: 'Slow up or curl so the puck crosses the line first, then go',
								correct: true,
								why: 'You cannot cross their blue line before the puck. Staying onside keeps the attack alive.'
							},
							{
								text: 'Keep skating full speed into their zone',
								correct: false,
								why: 'You cross the line before the puck: [[offside]], whistle, faceoff in the [[neutral-zone|neutral zone]].'
							},
							{
								text: 'Cut into the middle to help C',
								correct: false,
								why: 'You bring your D into C\'s lane. Staying wide is what gives C room.'
							}
						]
					}
				}
			}
		}
	]
};

export default play;
