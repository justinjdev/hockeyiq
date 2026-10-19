import type { Play } from '../../types';

const roles = {
	rw: 'Wide carrier',
	c: 'Middle drive',
	lw: 'Far-post drive',
	rd: 'Strong-side D',
	ld: 'Weak-side D'
};

const play: Play = {
	id: 'oz-net-drive',
	title: 'Net drive',
	category: 'o-zone',
	system: 'Wide drive with middle and far-post support',
	strength: '5v5',
	summary:
		'Attack the net, not the perimeter. The puck carrier gets outside the defender with speed and drives toward the net, the middle forward drives straight at the crease to push their D back and screen, and the third forward goes to the [[far-post|far post]] for the rebound. Three players arriving at the net with speed are much harder to cover than three standing on the outside.',
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
	keyConcepts: [],
	variations:
		'The same idea works off the rush (shown here) or after winning a puck below the dots in the zone. If the carrier cannot get outside his defender, the common options are to pull up and pass to a trailing player in the [[high-slot|high slot]], or to take it to the corner and start a [[cycle]]. Some coaches want the middle driver to go to the near post and the weak-side winger to the far post; others send the middle driver to the far post. If the middle drive draws both D, the carrier can slide the puck across to him instead of shooting. A shot to the far pad is the common default because the rebound comes out to the far-post player.',
	sources: [
		{
			title: 'Speed Through the Neutral Zone',
			publisher: 'Ontario Minor Hockey Association (OMHA)',
			url: 'https://www.omha.net/news_article/show/282908'
		},
		{
			title: 'Wide Drive: Attacking Far Post',
			publisher: 'The Coaches Site (Kyle MacLennan)',
			url: 'https://members.thecoachessite.com/article/wide-drive-attacking-far-post'
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
				'RW carries the puck over the blue line wide on the right side with speed. C is a stride behind the puck in the middle lane, LW is on the left, and the D follow up the ice.',
			positions: {
				lw: { x: 122, y: 18 },
				c: { x: 124, y: 46 },
				rw: { x: 129, y: 74 },
				ld: { x: 100, y: 32 },
				rd: { x: 102, y: 56 },
				o1: { x: 146, y: 66 },
				o2: { x: 150, y: 38 },
				o3: { x: 114, y: 52 },
				o4: { x: 110, y: 26 },
				o5: { x: 108, y: 70 }
			},
			puck: { x: 130.5, y: 76.5 },
			puckCarrier: 'rw',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 160, y: 77 } },
				{ kind: 'skate', from: 'c', to: { x: 172, y: 46 } },
				{ kind: 'skate', from: 'lw', to: { x: 158, y: 24 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Crossing the blue line on the left side, just behind the puck.',
					read: 'Watch RW with the puck and their D on your side. Look at the far post: that is where you are going.',
					why: 'A wide-side shot leaves rebounds on the far side. Somebody has to be there, and you are the forward on that side.'
				},
				c: {
					where: 'In the middle lane at the blue line, a stride behind the puck so you stay onside.',
					read: 'Watch their D in the middle. Aim at the front of the net and keep your stick on the ice.',
					why: 'Driving the middle at speed pushes their D back toward the crease, which gives RW room on the outside and puts traffic in front of the goalie.'
				},
				rw: {
					where: 'On the right side, just over the blue line, with the puck and speed.',
					read: 'Look at their D on your side. Is he backing up and giving you the outside, or standing up at the line?',
					why: 'If he backs up, you have time to get wide of him. With speed and the puck on your outside, he has to turn to stay with you.'
				},
				ld: {
					where: 'Following up the ice in the left half of the [[neutral-zone|neutral zone]].',
					read: 'Watch the puck and their winger coming back on your side. Plan to arrive at the blue line as the play settles.',
					why: 'You are the late option and the safety. Too far back and the puck leaves the zone; too far in and nobody covers a turnover.'
				},
				rd: {
					where: 'Following up the ice in the right half of the [[neutral-zone|neutral zone]].',
					read: 'Watch RW and their winger chasing him. Get to the blue line on your side.',
					why: 'If RW has to dump it or the puck comes back up the wall, you need to be on the line to keep it in.'
				}
			},
			reads: {
				rw: [{ at: 'o1', label: 'Their D' }],
				c: [{ at: 'o2', label: 'Their D' }],
				lw: [{ at: { x: 186, y: 36 }, label: 'Far post' }],
				ld: [{ at: 'o4', label: 'Their W' }],
				rd: [{ at: 'o5', label: 'Their W' }]
			},
			quiz: {
				c: {
					decision: {
						prompt: 'RW has the puck wide on the right with speed, entering the zone. You are in the middle lane. You...',
						options: [
							{
								text: 'Drive straight at the net with your stick on the ice',
								correct: true,
								why: 'Your drive pushes their D back toward the crease, opens room for RW, and puts you in front for a rebound or a pass.'
							},
							{
								text: 'Curl up high and wait for a pass at the blue line',
								correct: false,
								why: 'Then their D can stand up on RW with nothing behind him to worry about. Nobody is going to the net.'
							},
							{
								text: 'Swing over to the right side to support RW',
								correct: false,
								why: 'Two forwards on one side lets one defender cover both. Stay in the middle lane.'
							}
						]
					}
				}
			}
		},
		{
			caption:
				'A couple of seconds later, RW gets outside their D, keeping his body between the defender and the puck. C\'s drive has pushed their other D back to the crease. LW heads for the far post, and the D arrive at the blue line.',
			positions: {
				lw: { x: 158, y: 24 },
				c: { x: 172, y: 46 },
				rw: { x: 160, y: 77 },
				ld: { x: 127, y: 34 },
				rd: { x: 128, y: 60 },
				o1: { x: 162, y: 71 },
				o2: { x: 180, y: 42 },
				o3: { x: 150, y: 50 },
				o4: { x: 150, y: 28 },
				o5: { x: 140, y: 72 }
			},
			puck: { x: 161, y: 79.5 },
			puckCarrier: 'rw',
			arrows: [
				{ kind: 'skate', from: 'rw', to: { x: 172, y: 62 } },
				{ kind: 'skate', from: 'c', to: { x: 180, y: 50 } },
				{ kind: 'skate', from: 'lw', to: { x: 183, y: 33 } }
			],
			roles,
			notes: {
				lw: {
					where: 'Above the left faceoff dot, driving down toward the far post.',
					read: 'Watch the puck on RW\'s stick and their winger chasing you. Get to the post before the shot, stick on the ice.',
					why: 'A shot to the far pad kicks the rebound to the far side. If you arrive late, the goalie or their D gets it first.'
				},
				c: {
					where: 'At the top of the crease area, a stride out, in front of their D.',
					read: 'Feel their D behind you and watch RW. Stop in front instead of skating through the crease.',
					why: 'You are the [[screen]] and the rebound in front. Skating into the crease can take away the goal, so stop just outside it.'
				},
				rw: {
					where: 'On the right side below the top of the circle, outside their D, puck on your outside.',
					read: 'Their D is on your inside hip and turning. You have a step on him: cut in toward the net.',
					why: 'Once you are past him, he is defending from behind you. The closer you get to the net, the better your shot.'
				},
				ld: {
					where: 'Just inside the blue line, left of the middle.',
					read: 'Watch for a long rebound or a clear coming up the middle. Keep it in if you can get there first.',
					why: 'Three forwards are going to the net. You keep the puck in the zone and stop any counterattack.'
				},
				rd: {
					where: 'Just inside the blue line on the right side.',
					read: 'Watch RW and their winger behind him. If the puck comes loose up the wall, stop it at the line.',
					why: 'The wall on your side is the first place a turnover goes. Holding the line keeps the attack alive.'
				}
			},
			reads: {
				rw: [{ at: 'o1', label: 'Their D' }],
				c: [{ at: 'o2', label: 'Their D' }],
				lw: [{ at: 'o4', label: 'Their W' }],
				ld: [{ at: 'o3', label: 'Their C' }],
				rd: [{ at: 'o5', label: 'Their W' }]
			},
			quiz: {
				ld: {
					decision: {
						prompt: 'All three forwards are driving the net. You are coming up the left side of the ice. Where do you go?',
						options: [
							{
								text: 'Just inside the blue line, left of the middle',
								correct: true,
								why: 'You keep any long rebound or clear in the zone and you are the first one back if it turns over.'
							},
							{
								text: 'Follow the forwards to the net',
								correct: false,
								why: 'Then nobody is above the puck. One long rebound and they have a breakaway.'
							},
							{
								text: 'Stay back at the red line',
								correct: false,
								why: 'Too far. Any puck that comes out goes past you and out of the zone, and the attack is over.'
							}
						]
					}
				},
				rd: {
					drag: {
						target: { kind: 'ellipse', cx: 129, cy: 62, rx: 5, ry: 8 },
						correct:
							'Yes. Just inside the blue line on the right side, where you can stop a puck coming up the wall.',
						incorrect:
							'The strong-side D gets to the blue line on the puck side, just inside it, ready to keep the puck in.'
					}
				}
			}
		},
		{
			caption:
				'RW cuts in to the faceoff dot and shoots low to the goalie\'s far pad. C is in front for a [[tip]] or a rebound, and LW arrives at the [[far-post|far post]] for anything kicked across.',
			positions: {
				lw: { x: 183, y: 33 },
				c: { x: 180, y: 50 },
				rw: { x: 172, y: 62 },
				ld: { x: 130, y: 36 },
				rd: { x: 130, y: 62 },
				o1: { x: 170, y: 69 },
				o2: { x: 184, y: 55 },
				o3: { x: 163, y: 50 },
				o4: { x: 175, y: 29 },
				o5: { x: 152, y: 72 }
			},
			puck: { x: 173.5, y: 60.5 },
			puckCarrier: 'rw',
			arrows: [{ kind: 'shot', from: 'rw', to: { x: 189, y: 40 } }],
			roles,
			notes: {
				lw: {
					where: 'At the far (left) post, a stride off the goal line, stick on the ice.',
					read: 'Watch the puck off RW\'s stick and the goalie\'s left pad. Be ready to shoot it the moment it comes to you.',
					why: 'The goalie has to push across to stop a far-side shot. A rebound off his pad comes to you with half the net open.'
				},
				c: {
					where: 'In front of the net, a stride outside the crease, in the goalie\'s line of sight to the puck.',
					read: 'Watch the puck coming. Stick on the ice for a [[tip]], then look for the rebound at the goalie\'s feet.',
					why: 'Your [[screen]] makes the shot harder to stop, and you are the closest stick to any puck that stays in front.'
				},
				rw: {
					where: 'At the right faceoff dot, cutting in toward the net with the puck.',
					read: 'Look at the goalie. He is covering the near post because you are coming from that side. Shoot low to his far pad.',
					why: 'A low far-side shot either goes in or leaves a rebound to LW at the far post. A high near-side shot is the easiest save he has.'
				},
				ld: {
					where: 'Just inside the blue line, left of the middle.',
					read: 'Watch for a rebound that comes out high, and for their winger leaving the zone early.',
					why: 'You are the safety. Keeping a long rebound in gives your forwards another shift of pressure.'
				},
				rd: {
					where: 'Just inside the blue line on the right side.',
					read: 'Watch the puck and their winger on your side. Hold the line.',
					why: 'If the goalie freezes it or their D clears it up your wall, you are the one who keeps it in.'
				}
			},
			reads: {
				rw: [{ at: { x: 188, y: 40 }, label: 'Far pad' }],
				c: [{ at: 'rw' }],
				lw: [{ at: 'rw' }],
				ld: [{ at: 'o3', label: 'Their C' }],
				rd: [{ at: 'o5', label: 'Their W' }]
			},
			quiz: {
				rw: {
					decision: {
						prompt:
							'You have beaten their D wide and cut in to the faceoff dot. C is in front, LW is arriving at the far post. You...',
						options: [
							{
								text: 'Shoot low to the goalie\'s far pad',
								correct: true,
								why: 'He has to push across to stop it, and any rebound comes out to LW at the far post.'
							},
							{
								text: 'Shoot high to the near side',
								correct: false,
								why: 'The goalie is already covering the near post. A high near-side shot is easy to see and leaves no rebound for your teammates.'
							},
							{
								text: 'Pass across the crease to LW',
								correct: false,
								why: 'Their D and C are both in that lane. A pass through the crease is usually blocked, and the shot does the same job with less risk.'
							}
						]
					}
				},
				lw: {
					drag: {
						target: { kind: 'ellipse', cx: 183, cy: 34, rx: 5, ry: 5 },
						correct:
							'Yes. At the far post, stick on the ice. A save off the goalie\'s far pad comes right to you.',
						incorrect:
							'When the shot comes from the right side, the weak-side forward drives to the [[far-post|far post]] (the left post) for the rebound.'
					}
				}
			}
		}
	]
};

export default play;
