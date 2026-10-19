import type { Comparison } from './types';

export const comparisons: Comparison[] = [
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
	}
];
