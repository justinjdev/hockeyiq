<script lang="ts">
	import type { Arrow, Diagram, Vec } from '../content/types';
	import Rink from '../rink/Rink.svelte';

	let { diagram, label }: { diagram: Diagram; label: string } = $props();

	const uid = $props.id();
	const headId = `${uid}-head`;
	const PLAYER_R = 3.4;

	const posOf = (ref: Vec | string): Vec =>
		typeof ref === 'string'
			? (diagram.players.find((p) => p.id === ref)?.pos ?? { x: 0, y: 0 })
			: ref;

	/** Pulls the tip back when an arrow lands on a player, so the head stays visible. */
	function tipOf(a: Arrow): Vec {
		const hit = diagram.players.some(
			(p) => Math.hypot(p.pos.x - a.to.x, p.pos.y - a.to.y) < PLAYER_R
		);
		if (!hit) return a.to;
		const back = a.via ?? posOf(a.from);
		const len = Math.hypot(a.to.x - back.x, a.to.y - back.y);
		if (len <= PLAYER_R + 1) return a.to;
		const k = (PLAYER_R + 1) / len;
		return { x: a.to.x - (a.to.x - back.x) * k, y: a.to.y - (a.to.y - back.y) * k };
	}

	function arrowPath(a: Arrow): string {
		const f = posOf(a.from);
		const t = tipOf(a);
		return a.via ? `M ${f.x} ${f.y} Q ${a.via.x} ${a.via.y} ${t.x} ${t.y}` : `M ${f.x} ${f.y} L ${t.x} ${t.y}`;
	}

	// Reads radiate from the highlighted player, or the first of our players.
	const viewer = $derived(
		diagram.players.find((p) => p.highlight) ?? diagram.players.find((p) => p.team === 'us')
	);
</script>

<svg class="canvas" viewBox="0 0 200 85" role="img" aria-label={label}>
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

	<Rink />

	<g>
		{#each diagram.arrows as a, i (i)}
			<path class="arrow {a.kind}" d={arrowPath(a)} marker-end={`url(#${headId})`} />
		{/each}
	</g>

	{#if viewer}
		<g>
			{#each diagram.reads ?? [] as r, i (i)}
				{@const t = posOf(r.at)}
				<line class="read-line" x1={viewer.pos.x} y1={viewer.pos.y} x2={t.x} y2={t.y} />
				<circle class="read-ring" cx={t.x} cy={t.y} r="5" />
				{#if r.label}
					<text class="read-label" x={t.x} y={t.y - 6}>{r.label}</text>
				{/if}
			{/each}
		</g>
	{/if}

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
	text {
		font-family: var(--font-display);
		pointer-events: none;
	}
	.read-label {
		text-anchor: middle;
		font-size: 3px;
		font-weight: 600;
		fill: var(--arena);
		stroke: var(--ice);
		stroke-width: 0.8;
		paint-order: stroke;
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
