import type { Comparison } from './types';

export const comparisons: Comparison[] = [
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
	}
];
