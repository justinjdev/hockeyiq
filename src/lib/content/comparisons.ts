import type { Comparison } from './types';

export const comparisons: Comparison[] = [
	{
		id: 'pp-umbrella-vs-pp-overload',
		a: 'pp-umbrella',
		b: 'pp-overload',
		summary:
			'Both are [[power-play]] setups against a four-player [[box]], but they look for the shot in different places. The [[umbrella]] keeps three players high and spread across the top of the zone, moves the puck side to side until one of their forwards gets pulled out, and shoots from distance with two forwards at the net to [[screen]] and [[tip]]. The [[overload]] works a [[triangle]] of half-wall, point and low player on one side, with a fourth player at the net front, to drag their box toward the puck, then swings it across to the far D, who has the lane.',
		whenToUse: {
			a: 'Use the umbrella when you have good shooters up top and two forwards willing to stand at the net. It is safer, since three players are always high, but every shot comes from far out, so it lives on screens, tips and rebounds.',
			b: 'Use the overload when you have a patient passer for the half-wall and want a simple setup everyone can learn fast. It creates short passes and quick reads close to the net, but the low player is too deep to shoot himself, and if the puck stops moving it turns into passing around the outside.'
		}
	}
];
