<script lang="ts">
	import type { Arrow, Read, Vec } from '../content/types';
	import { arrowPath, type Resolve } from './arrows';

	type Props = {
		arrows?: Arrow[];
		reads?: Read[];
		/** Where reads radiate from, in rink coords. Reads are hidden without it. */
		reader?: Vec;
		resolve: Resolve;
		/** Player token positions, in rink coords (see tipOf). */
		obstacles: Vec[];
		/** Maps rink coords to screen coords (e.g. a flip). */
		view?: (p: Vec) => Vec;
	};

	let { arrows = [], reads = [], reader, resolve, obstacles, view = (p) => p }: Props = $props();

	const uid = $props.id();
	const headId = `${uid}-head`;
</script>

<defs>
	<marker
		id={headId}
		viewBox="0 0 10 10"
		refX="8"
		refY="5"
		markerUnits="userSpaceOnUse"
		markerWidth="3"
		markerHeight="3"
		orient="auto"
	>
		<path d="M 0 0 L 10 5 L 0 10 z" class="head" />
	</marker>
</defs>

{#if arrows.length}
	<g class="arrows">
		{#each arrows as a, i (i)}
			<path class="arrow {a.kind}" d={arrowPath(a, resolve, obstacles, view)} marker-end={`url(#${headId})`} />
		{/each}
	</g>
{/if}

{#if reader && reads.length}
	{@const me = view(reader)}
	<g class="reads">
		{#each reads as r, i (i)}
			{@const t = view(resolve(r.at))}
			<line class="read-line" x1={me.x} y1={me.y} x2={t.x} y2={t.y} />
			<circle class="read-ring" cx={t.x} cy={t.y} r="5" />
			{#if r.label}
				<text class="read-label" x={t.x} y={t.y - 6}>{r.label}</text>
			{/if}
		{/each}
	</g>
{/if}

<style>
	.head {
		fill: var(--panel);
	}
	.arrow {
		fill: none;
		stroke: var(--panel);
		stroke-width: 0.6;
		stroke-linecap: round;
	}
	.arrow.pass {
		stroke-dasharray: 1.6 1.2;
	}
	.arrow.shot {
		stroke-width: 1;
	}
	.read-line {
		stroke: var(--goal-light);
		stroke-width: 0.5;
		stroke-dasharray: 0.3 1;
		stroke-linecap: round;
	}
	.read-ring {
		fill: color-mix(in srgb, var(--goal-light) 12%, transparent);
		stroke: var(--goal-light);
		stroke-width: 0.6;
		stroke-dasharray: 0.3 1;
		stroke-linecap: round;
	}
	.read-label {
		font-family: var(--font-display);
		text-anchor: middle;
		pointer-events: none;
		font-size: 3px;
		font-weight: 600;
		fill: var(--arena);
		stroke: var(--ice);
		stroke-width: 0.8;
		paint-order: stroke;
	}
</style>
