<script lang="ts">
	import { untrack } from 'svelte';
	import { Tween, prefersReducedMotion } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import type { Arrow, Play, Region, Vec } from '../content/types';
	import Rink from '../rink/Rink.svelte';
	import { regionCenter } from '#lib/quiz/regions.ts';
	import { clampToRink, flipY } from '../rink/geometry';
	import { frameAt, lerpFrame, type Frame } from './interpolate';

	type Props = {
		play: Play;
		step: number;
		selected: string;
		flip?: boolean;
		/** Quiz only: this slot can be dragged (pointer or arrow keys). */
		dragSlot?: string;
		onSelect?: (slot: string) => void;
		/** Receives the dropped point, clamped to the ice, in unflipped rink coords. */
		onDrop?: (p: Vec) => void;
		reveal?: { region: Region; ok: boolean };
	};

	let {
		play,
		step,
		selected,
		flip = false,
		dragSlot,
		onSelect,
		onDrop,
		reveal
	}: Props = $props();

	const DURATION = 600;
	const uid = $props.id();
	const headId = `${uid}-head`;

	// Tweening whole frames means a step change mid-tween starts from the in-between
	// frame on screen (Tween interpolates from its current value), so motion never jumps.
	const target = $derived(frameAt(play, step));
	const motion = new Tween(
		untrack(() => target),
		{
			duration: () => (prefersReducedMotion.current ? 0 : DURATION),
			easing: cubicOut,
			interpolate: (a: Frame, b: Frame) => (t: number) => lerpFrame(a, b, t)
		}
	);
	$effect.pre(() => {
		const t = target;
		if (t !== untrack(() => motion.target)) motion.set(t);
	});
	const frame = $derived(motion.current);
	const settled = $derived(motion.current === motion.target);

	// Drag (quiz): where the user put `dragSlot`, in unflipped rink coords. Keyed so a
	// new step, play or drag slot starts from the frame position again.
	let svg: SVGSVGElement | undefined = $state();
	let drag = $state<{ key: string; pos: Vec } | null>(null);
	let dragging = false;
	const dragKey = $derived(`${play.id}/${step}/${dragSlot ?? ''}`);
	const dragPos = $derived(drag && drag.key === dragKey ? drag.pos : null);
	const setDragPos = (pos: Vec) => (drag = { key: dragKey, pos });

	const view = (p: Vec): Vec => (flip ? flipY(p) : p);
	const posOf = (id: string): Vec =>
		id === dragSlot && dragPos ? dragPos : (frame.positions[id] ?? { x: 0, y: 0 });
	const at = (ref: Vec | string): Vec => (typeof ref === 'string' ? posOf(ref) : ref);

	const puck = $derived(view(frame.puck));
	const current = $derived(play.steps[step]);
	const roles = $derived(current.roles ?? {});
	const showArrows = $derived(settled && !dragSlot);
	const selectedReads = $derived(settled ? (current.reads?.[selected] ?? []) : []);

	const PLAYER_R = 3.4;

	/** Pulls an arrow's tip back when it lands on one of our players, so the head stays visible. */
	function tipOf(a: Arrow): Vec {
		const hit = play.slots.some((s) => Math.hypot(posOf(s.id).x - a.to.x, posOf(s.id).y - a.to.y) < PLAYER_R);
		if (!hit) return a.to;
		const back = a.via ?? at(a.from);
		const len = Math.hypot(a.to.x - back.x, a.to.y - back.y);
		if (len <= PLAYER_R + 1) return a.to;
		const k = (PLAYER_R + 1) / len;
		return { x: a.to.x - (a.to.x - back.x) * k, y: a.to.y - (a.to.y - back.y) * k };
	}

	function arrowPath(a: Arrow): string {
		const f = view(at(a.from));
		const t = view(tipOf(a));
		if (!a.via) return `M ${f.x} ${f.y} L ${t.x} ${t.y}`;
		const v = view(a.via);
		return `M ${f.x} ${f.y} Q ${v.x} ${v.y} ${t.x} ${t.y}`;
	}

	function toRink(e: PointerEvent): Vec | null {
		const m = svg?.getScreenCTM();
		if (!m) return null;
		const pt = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse());
		return clampToRink(view({ x: pt.x, y: pt.y }));
	}

	function onPointerDown(e: PointerEvent, id: string) {
		if (id !== dragSlot) return;
		dragging = true;
		(e.currentTarget as Element).setPointerCapture(e.pointerId);
		const p = toRink(e);
		if (p) setDragPos(p);
	}

	function onPointerMove(e: PointerEvent) {
		if (!dragging) return;
		const p = toRink(e);
		if (p) setDragPos(p);
	}

	function onPointerUp() {
		if (!dragging) return;
		dragging = false;
		if (dragPos) onDrop?.(dragPos);
	}

	const KEY_STEP: Record<string, Vec> = {
		ArrowLeft: { x: -1, y: 0 },
		ArrowRight: { x: 1, y: 0 },
		ArrowUp: { x: 0, y: -1 },
		ArrowDown: { x: 0, y: 1 }
	};

	function onKeyDown(e: KeyboardEvent, id: string) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			onSelect?.(id);
			return;
		}
		const d = KEY_STEP[e.key];
		if (!d || id !== dragSlot) return;
		e.preventDefault();
		const p = posOf(id);
		// Arrow keys move on screen, so up/down invert when the rink is flipped.
		const dy = flip ? -d.y : d.y;
		const next = clampToRink({ x: p.x + d.x, y: p.y + dy });
		setDragPos(next);
		onDrop?.(next);
	}

	const tagWidth = (text: string) => text.length * 1.25 + 2.4;
</script>

<svg
	bind:this={svg}
	class="canvas"
	viewBox="0 0 200 85"
	role="group"
	aria-label={`${play.title}, step ${step + 1} of ${play.steps.length}`}
>
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

	{#if reveal}
		{@const r = reveal.region}
		{@const c = view(regionCenter(r))}
		<g class="reveal" class:ok={reveal.ok}>
			{#if r.kind === 'ellipse'}
				<ellipse class="region" cx={c.x} cy={c.y} rx={r.rx} ry={r.ry} />
			{:else}
				<polygon
					class="region"
					points={r.points.map((p) => `${view(p).x},${view(p).y}`).join(' ')}
				/>
			{/if}
			{#if dragSlot}
				{@const d = view(posOf(dragSlot))}
				<line class="drop-line" x1={d.x} y1={d.y} x2={c.x} y2={c.y} />
			{/if}
		</g>
	{/if}

	{#if showArrows}
		<g class="arrows">
			{#each current.arrows as a, i (i)}
				<path class="arrow {a.kind}" d={arrowPath(a)} marker-end={`url(#${headId})`} />
			{/each}
		</g>
	{/if}

	{#if selectedReads.length}
		{@const me = view(posOf(selected))}
		<g class="reads">
			{#each selectedReads as r, i (i)}
				{@const t = view(at(r.at))}
				<line class="read-line" x1={me.x} y1={me.y} x2={t.x} y2={t.y} />
				<circle class="read-ring" cx={t.x} cy={t.y} r="5" />
				{#if r.label}
					<text class="read-label" x={t.x} y={t.y - 6}>{r.label}</text>
				{/if}
			{/each}
		</g>
	{/if}

	<g class="opponents">
		{#each play.opponents as o (o.id)}
			{@const p = view(frame.positions[o.id] ?? { x: 0, y: 0 })}
			<g class="opponent" transform={`translate(${p.x} ${p.y})`} data-opponent={o.id}>
				<path d="M -1.8 -1.8 L 1.8 1.8 M -1.8 1.8 L 1.8 -1.8" />
				{#if o.label}
					<text x="2.4" y="-2">{o.label}</text>
				{/if}
			</g>
		{/each}
	</g>

	<g class="players">
		{#each play.slots as s (s.id)}
			{@const p = view(posOf(s.id))}
			{@const isSel = s.id === selected}
			{@const role = roles[s.id]}
			<g
				class="player"
				class:selected={isSel}
				class:draggable={s.id === dragSlot}
				transform={`translate(${p.x} ${p.y})`}
				role="button"
				tabindex="0"
				aria-label={role ? `${s.home}, ${role}` : s.home}
				aria-pressed={isSel}
				data-slot={s.id}
				onclick={() => onSelect?.(s.id)}
				onkeydown={(e) => onKeyDown(e, s.id)}
				onpointerdown={(e) => onPointerDown(e, s.id)}
				onpointermove={onPointerMove}
				onpointerup={onPointerUp}
				onpointercancel={onPointerUp}
			>
				{#if isSel}
					<circle class="ring" r="4.9" />
				{/if}
				<circle class="body" r={PLAYER_R} />
				<text class="home" dy="0.36em">{s.home}</text>
				{#if isSel && role}
					<g class="role" transform={`translate(0 ${p.y < 10 ? 7.6 : -7.6})`}>
						<rect x={-tagWidth(role) / 2} y="-1.8" width={tagWidth(role)} height="3.6" rx="1" />
						<text dy="0.36em">{role}</text>
					</g>
				{/if}
			</g>
		{/each}
	</g>

	<circle class="puck" cx={puck.x} cy={puck.y} r="1" />
</svg>

<style>
	.canvas {
		display: block;
		width: 100%;
		height: auto;
		user-select: none;
		-webkit-user-select: none;
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
	.read-label,
	.opponent text,
	.home,
	.role text {
		font-family: var(--font-display);
		text-anchor: middle;
		pointer-events: none;
	}
	.read-label {
		font-size: 3px;
		font-weight: 600;
		fill: var(--arena);
		stroke: var(--ice);
		stroke-width: 0.8;
		paint-order: stroke;
	}
	.opponent path {
		stroke: var(--them);
		stroke-width: 0.9;
		stroke-linecap: round;
	}
	.opponent text {
		font-size: 2.6px;
		text-anchor: start;
		fill: var(--them);
		stroke: var(--ice);
		stroke-width: 0.6;
		paint-order: stroke;
	}
	.player {
		cursor: pointer;
		outline: none;
	}
	.player.draggable {
		cursor: grab;
		touch-action: none;
	}
	.body {
		fill: var(--us);
		stroke: var(--arena);
		stroke-width: 0.3;
	}
	.player:focus-visible .body {
		stroke: var(--goal-light);
		stroke-width: 0.8;
	}
	.ring {
		fill: none;
		stroke: var(--goal-light);
		stroke-width: 1;
	}
	.home {
		font-size: 3px;
		font-weight: 600;
		fill: #fff;
	}
	.role rect {
		fill: var(--arena);
		stroke: var(--goal-light);
		stroke-width: 0.25;
	}
	.role text {
		font-size: 2.6px;
		fill: var(--goal-light);
	}
	.puck {
		fill: #0a0a0a;
		stroke: var(--ice);
		stroke-width: 0.25;
		pointer-events: none;
	}
	.region {
		fill: #2e9d58;
		fill-opacity: 0.35;
		stroke: #2e9d58;
		stroke-width: 0.4;
	}
	.drop-line {
		stroke: var(--them);
		stroke-width: 0.5;
		stroke-dasharray: 1.2 0.8;
	}
	.reveal.ok .drop-line {
		stroke: #2e9d58;
	}
</style>
