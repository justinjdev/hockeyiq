<script lang="ts">
	import type { Diagram, Vec } from '../content/types';
	import Rink from '../rink/Rink.svelte';
	import Annotations from '../rink/Annotations.svelte';
	import { PLAYER_R } from '../rink/arrows';

	let { diagram, label }: { diagram: Diagram; label: string } = $props();

	const posOf = (ref: Vec | string): Vec =>
		typeof ref === 'string'
			? (diagram.players.find((p) => p.id === ref)?.pos ?? { x: 0, y: 0 })
			: ref;
	const obstacles = $derived(diagram.players.map((p) => p.pos));

	// Reads radiate from the highlighted player, or the first of our players.
	const viewer = $derived(
		diagram.players.find((p) => p.highlight) ?? diagram.players.find((p) => p.team === 'us')
	);
</script>

<svg class="canvas" viewBox="0 0 200 85" role="img" aria-label={label}>
	<Rink />

	<Annotations
		arrows={diagram.arrows}
		reads={diagram.reads}
		reader={viewer?.pos}
		resolve={posOf}
		{obstacles}
	/>

	{#each diagram.players as p (p.id)}
		<g transform={`translate(${p.pos.x} ${p.pos.y})`} class="player {p.team}">
			{#if p.highlight}
				<circle class="ring" r="4.9" />
			{/if}
			{#if p.team === 'us'}
				<circle class="body" r={PLAYER_R} />
				<text class="tag" dy="0.36em">{p.label}</text>
			{:else}
				<path class="x" d="M -1.8 -1.8 L 1.8 1.8 M -1.8 1.8 L 1.8 -1.8" />
				<text class="opp" x="2.4" y="-2">{p.label}</text>
			{/if}
		</g>
	{/each}

	{#if diagram.puck}
		<circle class="puck" cx={diagram.puck.x} cy={diagram.puck.y} r="1" />
	{/if}
</svg>

<style>
	.canvas {
		display: block;
		width: 100%;
		height: auto;
	}
	text {
		font-family: var(--font-display);
		pointer-events: none;
	}
	.body {
		fill: var(--us);
		stroke: var(--arena);
		stroke-width: 0.3;
	}
	.ring {
		fill: none;
		stroke: var(--goal-light);
		stroke-width: 1;
	}
	.tag {
		text-anchor: middle;
		font-size: 3px;
		font-weight: 600;
		fill: #fff;
	}
	.x {
		stroke: var(--them);
		stroke-width: 0.9;
		stroke-linecap: round;
	}
	.opp {
		font-size: 2.6px;
		fill: var(--them);
		stroke: var(--ice);
		stroke-width: 0.6;
		paint-order: stroke;
	}
	.puck {
		fill: #0a0a0a;
		stroke: var(--ice);
		stroke-width: 0.25;
	}
</style>
