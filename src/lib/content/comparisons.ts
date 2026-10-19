import type { Comparison } from './types';

export const comparisons: Comparison[] = [
	{
		id: 'fc-1-2-2-vs-fc-2-1-2',
		a: 'fc-1-2-2',
		b: 'fc-2-1-2',
		summary:
			'Both start with a [[dump-in]] and both keep the D on the blue line. The difference is the second forward. In the 1-2-2, [[f1|F1]] goes in alone and steers the puck to the boards while [[f2|F2]] and [[f3|F3]] wait at the tops of the circles to trap the first pass up the wall. In the 2-1-2, F2 follows F1 in deep to cut off the pass behind the net and grab the loose puck, and only F3 stays high. More pressure means more turnovers deep, but if their D beats the two deep forwards, only three of you are left above the puck.',
		whenToUse: {
			a: 'Use the 1-2-2 when you want pressure without risk: protecting a lead, late in a shift when legs are tired, or against D who move the puck well and would beat a hard forecheck with one pass. It is also the easier system for a rec team to learn.',
			b: 'Use the 2-1-2 when you need the puck back: chasing a goal, against D who panic under pressure, or when your forwards are fast and fresh. Your F3 must be disciplined about staying high, and the D must pinch only on sure things.'
		}
	},
	{
		id: 'nz-1-2-2-vs-nz-1-3-1',
		a: 'nz-1-2-2',
		b: 'nz-1-3-1',
		summary:
			'Both start the same way: one forward ([[f1|F1]]) angles their D to a wall. The difference is who meets the puck there and how many stay back. In the 1-2-2 two forwards wall off the middle and two D wait at the blue line, and the strong-side D steps up on the wall receiver. The usual result is a [[dump-in]] we can retrieve. In the 1-3-1 a line of three (both wingers and one D) sits across the [[neutral-zone|neutral zone]], the winger on the puck side jumps the first pass, and only one D stays deep. It creates more turnovers but leaves less behind it.',
		whenToUse: {
			a: 'Use the 1-2-2 when you want to be safe: against fast teams that like long [[stretch-pass|stretch passes]], when protecting a lead, or with a rec group that needs a simple system with few switches.',
			b: 'Use the 1-3-1 when you want to take the puck away in the neutral zone: against teams that make predictable passes up the wall, when you need a turnover, and when your [[f1|F1]] is disciplined enough not to get beaten.'
		}
	},
	{
		id: 'dz-man-to-man-vs-dz-zone-coverage',
		a: 'dz-man-to-man',
		b: 'dz-zone-coverage',
		summary:
			'Same attack, two answers. In [[man-to-man]] you stay with one opponent wherever he goes, so every attacker always has a body on him, but players get dragged out of position and are spread out when we win the puck. In [[zone-coverage]] you own an area and hand attackers off as they move, so the [[slot]] stays crowded and support is close on the [[breakout]], but it depends on talking and leaves the outside (often the far [[point]]) open on purpose.',
		whenToUse: {
			a: 'When your team skates well and is in shape, against opponents who do not move the puck or switch positions much. It is also the simpler rule to follow when a line has not practiced together: "find your man, stay on his net side."',
			b: 'When your team cannot win foot races against faster or more skilled opponents, or against teams that cycle and switch positions a lot. It saves legs and keeps shots to the outside, but only works if everyone calls out switches.'
		}
	},
	{
		id: 'bo-standard-vs-bo-reverse',
		a: 'bo-standard',
		b: 'bo-reverse',
		summary:
			'Both start the same way: a dump into the right corner and RD going back. The difference is where [[f1|F1]] comes from. In the standard [[breakout]], RD moves the puck up the same side he picked it up on. In the reverse, F1 chases him behind the net, so RD sends it back the way he came, and LD starts the breakout from the corner RD just left.',
		whenToUse: {
			a: 'Use the standard breakout when the D gets to the puck with a little time and the wall on his side is open, or when F1 is in the direct lane and a hard [[rim]] can go around him. It is the default: everyone knows where to be.',
			b: 'Use the reverse when F1 is chasing the puck carrier hard behind the net and [[f2|F2]] is waiting on the far side for a [[wheel]]. The D who does not have the puck calls it, because the carrier cannot see the space behind him.'
		}
	},
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
