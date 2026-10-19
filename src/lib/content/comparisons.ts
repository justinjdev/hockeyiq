import type { Comparison } from './types';

export const comparisons: Comparison[] = [
	{
		id: 'pk-box-vs-pk-diamond',
		a: 'pk-box',
		b: 'pk-diamond',
		summary:
			'Both are four-player [[penalty-kill]] shapes in your own zone. The [[box]] puts two forwards high and two D low: it is simple, keeps two players in front of the net, and pushes shots to the outside, but it creates few turnovers and the high forwards are a long way from the [[point]]. The [[diamond]] puts one player on top, one on each side and one low: the top player can pressure the quarterback right away, but only one player is low, often against two attackers, and a pass across to the far side can beat it.',
		whenToUse: {
			a: 'Your default, especially against an [[overload]] or when your unit is still learning to kill penalties. Use it when you want two players in front of your goalie and fewer reads to make.',
			b: 'Against an [[umbrella]] power play that runs everything through one player at the top, or when your killers are quick and talk well enough to rotate as the puck moves.'
		}
	}
];
