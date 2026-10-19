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
	}
];
