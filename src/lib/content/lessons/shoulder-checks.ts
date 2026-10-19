import type { Lesson } from '../types';

const lesson: Lesson = {
	id: 'shoulder-checks',
	title: 'Shoulder checks',
	summary:
		'The habit that makes every other read possible: a quick look over each shoulder before the puck gets to you, so you already know where the pressure is and who is open.',
	sections: [
		{
			heading: 'Look before the puck gets there',
			body: 'A [[shoulder-check|shoulder check]] is a half-second turn of the head, away from the puck, to see what is behind or beside you. The point is simple: the moment the puck touches your stick you should already know what you are doing with it. Players who only watch the puck find out where the pressure is when it arrives. Players who look first get to choose.'
		},
		{
			heading: 'On a puck retrieval',
			body: 'The most important time to look is skating back for a puck the other team shot into your end (a [[dump-in]]). Look over one shoulder on the way, then the other, before you reach the puck. You are answering two questions: where is their [[f1|F1]] coming from, and who can I pass to (my partner, my strong-side winger, my center)? If F1 is coming from your left, take the puck away to the right, and vice versa.',
			diagram: {
				players: [
					{ id: 'rd', team: 'us', label: 'RD', pos: { x: 24, y: 52 }, highlight: true },
					{ id: 'ld', team: 'us', label: 'LD', pos: { x: 18, y: 32 } },
					{ id: 'c', team: 'us', label: 'C', pos: { x: 40, y: 44 } },
					{ id: 'rw', team: 'us', label: 'RW', pos: { x: 42, y: 77 } },
					{ id: 'f1', team: 'them', label: 'F1', pos: { x: 38, y: 66 } },
					{ id: 'f2', team: 'them', label: 'F2', pos: { x: 58, y: 30 } }
				],
				puck: { x: 8, y: 66 },
				arrows: [
					{ kind: 'skate', from: 'rd', to: { x: 11, y: 60 } },
					{ kind: 'skate', from: 'f1', to: { x: 18, y: 68 } }
				],
				reads: [
					{ at: 'f1', label: 'Where is F1?' },
					{ at: 'ld', label: 'Partner open?' }
				],
				caption:
					'RD races back for a [[dump-in]]. Two looks on the way: one at F1 chasing, one at LD. F1 is coming from the outside, so RD already knows the safer play is toward LD.'
			}
		},
		{
			heading: 'On the wall, waiting for a pass',
			body: 'Wingers on the [[breakout]] stand on the boards with their back to the boards, facing the D who has the puck. Their D can come down the wall from behind your shoulder to pressure you or pin you against the boards (a [[pinch]]), and you cannot see him unless you look. Before the pass is made, glance up the wall. If nobody is there, you have time to turn and skate. If their D is coming, you already know to [[chip]] it past him or bump it to your center on the first touch.',
			diagram: {
				players: [
					{ id: 'rw', team: 'us', label: 'RW', pos: { x: 34, y: 80 }, highlight: true },
					{ id: 'rd', team: 'us', label: 'RD', pos: { x: 6, y: 47 } },
					{ id: 'c', team: 'us', label: 'C', pos: { x: 30, y: 54 } },
					{ id: 'ld', team: 'us', label: 'LD', pos: { x: 10, y: 32 } },
					{ id: 'xd', team: 'them', label: 'D', pos: { x: 62, y: 78 } },
					{ id: 'x1', team: 'them', label: 'F1', pos: { x: 20, y: 46 } }
				],
				puck: { x: 7, y: 48 },
				arrows: [
					{ kind: 'pass', from: 'rd', to: { x: 33, y: 79 } },
					{ kind: 'skate', from: 'xd', to: { x: 42, y: 80 } }
				],
				reads: [{ at: 'xd', label: 'Pinching D' }],
				caption:
					'RW checks up the wall before the pass arrives and sees their D pinching down. The plan is set before the puck lands: chip it past him or bump it to C.'
			}
		},
		{
			heading: 'What you are looking for',
			body: 'Keep it to two things: where is the pressure coming from, and where are my teammates? You do not need a full picture of all ten players. One look for the nearest opponent and one look for your best pass is enough. Look early, then look again if you have time; the picture changes fast.'
		},
		{
			heading: 'Making it a habit',
			body: 'In rec hockey most players never look, which is why the same mistakes happen every shift. Start small: every time you skate back for a puck, turn your head both ways before you touch it. Every time you are on the wall in your own end, glance up the boards before the pass. Help your teammates too: call "time" when they are free and "man on" when someone is coming. After a few weeks the look happens without thinking.'
		}
	],
	examplePlays: ['bo-standard', 'bo-d-to-d', 'bo-reverse', 'bo-wheel']
};

export default lesson;
