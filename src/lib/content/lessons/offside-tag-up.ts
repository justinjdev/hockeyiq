import type { Lesson } from '../types';

const lesson: Lesson = {
	id: 'offside-tag-up',
	title: 'Offside and tagging up',
	summary:
		'You are [[offside]] when both of your skates are over their blue line before the puck is. In leagues that play [[delayed-offside|delayed offside]], a mistake does not have to cost a whistle: leave the puck alone, [[tag-up|tag up]] at the line, and come back in.',
	sections: [
		{
			heading: 'What offside is',
			body: 'Only their blue line matters, and only your skates count, not your stick. You are offside when both skates are completely past the edge of the blue line closest to their net before the puck has completely crossed that same edge. One skate touching the line, or still on the neutral zone side, keeps you onside. The call is made at the instant the puck crosses: where you were a second before or after does not matter. The player carrying the puck is not offside even if their skates cross just ahead of it, as long as they are in control of it the whole way (IIHF Rule 83.1).',
			diagram: {
				players: [
					{ id: 'lw', team: 'us', label: 'LW', pos: { x: 118, y: 14 } },
					{ id: 'c', team: 'us', label: 'C', pos: { x: 125, y: 42 } },
					{ id: 'rw', team: 'us', label: 'RW', pos: { x: 132, y: 70 }, highlight: true },
					{ id: 'ld', team: 'us', label: 'LD', pos: { x: 96, y: 28 } },
					{ id: 'rd', team: 'us', label: 'RD', pos: { x: 98, y: 58 } },
					{ id: 'x1', team: 'them', label: 'D', pos: { x: 136, y: 22 } },
					{ id: 'x2', team: 'them', label: 'D', pos: { x: 144, y: 56 } },
					{ id: 'x3', team: 'them', label: 'F', pos: { x: 108, y: 48 } }
				],
				puck: { x: 119.5, y: 15.5 },
				arrows: [{ kind: 'skate', from: 'lw', to: { x: 126, y: 14 } }],
				reads: [
					{ at: 'lw', label: 'Puck not in yet' },
					{ at: { x: 125, y: 70 }, label: 'Blue line' }
				],
				caption:
					'LW has the puck just short of their blue line. C has a skate on the line, so C is onside. RW has both skates inside the zone: the moment the puck crosses, RW is offside. RW should look back at the puck and the line, not just ahead.'
			}
		},
		{
			heading: 'Staying onside on the rush',
			body: 'Most offsides are a winger arriving at the line a stride before the puck. As you get near their blue line, look at the puck, not just the ice ahead of you. If the puck is still behind you, slow your feet, glide, or curl along the line so you can turn and go the instant it crosses. Hitting the line at speed just after the puck is the goal: too early is a whistle, too late and the carrier has nobody to pass to.'
		},
		{
			heading: 'Delayed offside: the arm goes up',
			body: 'In leagues that play [[delayed-offside|delayed offside]], when the puck goes in with one of us already inside, the linesman raises an arm instead of blowing the whistle, and play goes on. The arm comes down (and the offside is wiped out) when every one of us has cleared the zone, or when their team moves the puck out into the [[neutral-zone|neutral zone]]. While the arm is up, any of us who was offside must not touch the puck, go after a loose puck, or pressure their player carrying it back up ice. Any of those stops play (IIHF Rule 83.3; NHL Rule 83.3 says the same).'
		},
		{
			heading: 'How to tag up',
			body: 'To [[tag-up|tag up]], skate straight back to their blue line and get a skate touching it (or go past it into the neutral zone). Stay out of the way of the puck and their players while you do it. Under NHL and IIHF rules every one of us who is offside has to be back at the line at the same instant, so the players already outside should wait at the line until the last one gets there. Once the arm drops, turn and go in. A [[dump-in]] to the far corner gives you the most time to do this, because their D has the farthest to skate to get the puck.',
			diagram: {
				players: [
					{ id: 'rw', team: 'us', label: 'RW', pos: { x: 133, y: 70 }, highlight: true },
					{ id: 'c', team: 'us', label: 'C', pos: { x: 121, y: 44 } },
					{ id: 'lw', team: 'us', label: 'LW', pos: { x: 120, y: 16 } },
					{ id: 'ld', team: 'us', label: 'LD', pos: { x: 104, y: 30 } },
					{ id: 'rd', team: 'us', label: 'RD', pos: { x: 106, y: 56 } },
					{ id: 'x1', team: 'them', label: 'D', pos: { x: 166, y: 66 } },
					{ id: 'x2', team: 'them', label: 'D', pos: { x: 160, y: 36 } },
					{ id: 'x3', team: 'them', label: 'F', pos: { x: 112, y: 52 } }
				],
				puck: { x: 178, y: 72 },
				arrows: [
					{ kind: 'skate', from: 'rw', to: { x: 124, y: 70 } },
					{ kind: 'skate', from: 'x1', to: { x: 175, y: 70 } }
				],
				reads: [{ at: { x: 125, y: 70 }, label: 'Tag the line' }],
				caption:
					'LW dumped the puck into the far corner with RW still inside, so the arm is up. RW skates straight back to the blue line without going near the puck. C and LW wait just outside. Once RW has a skate on the line, the arm drops and all three can go in.'
			}
		},
		{
			heading: 'Shots, faceoffs, and doing it on purpose',
			body: 'Do not shoot at the net while the arm is up. Under IIHF rules a goal from a shot taken during a delayed offside does not count, even if it deflects in off the goalie or one of their players (Rule 83.4), and USA Hockey has ruled the same way. If the whistle does go, where the faceoff happens depends on how the puck got in: carried in, the faceoff is just outside their blue line; shot or passed in, it is at the nearest spot in the zone the puck came from. If the linesman thinks an offside player touched the puck on purpose to stop play, that is intentional offside and the faceoff goes all the way back to our end (IIHF Rules 83.6 and 83.7).'
		},
		{
			heading: 'Check your league',
			body: 'Not every league plays tag-up. USA Hockey\'s current rulebook allows delayed (tag-up) offside at Youth 15 Only and Girls 16U and older; younger levels still get an immediate whistle. Plenty of adult rec leagues write their own house rules, and some still blow the whistle the moment anyone is offside, or are looser about everyone tagging up at the same instant. Before your first game, ask the league or a referee which version you play. Staying onside in the first place works everywhere.'
		}
	],
	examplePlays: ['nz-tag-up', 'pp-breakout-drop-pass']
};

export default lesson;
