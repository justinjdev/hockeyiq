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
	}
];
