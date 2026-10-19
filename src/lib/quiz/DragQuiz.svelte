<script lang="ts">
	import type { DragQuizDef, Play, Vec } from '#lib/content/types.ts';
	import PlayCanvas from '#lib/play/PlayCanvas.svelte';
	import RichText from '#lib/text/RichText.svelte';
	import { pointInRegion } from './regions.ts';

	type Props = {
		/** The play with `slot` already placed at its starting point for this question. */
		play: Play;
		step: number;
		slot: string;
		def: DragQuizDef;
		last: boolean;
		onResult: (correct: boolean) => void;
		onNext: () => void;
	};

	let { play, step, slot, def, last, onResult, onNext }: Props = $props();

	const home = $derived(play.slots.find((s) => s.id === slot)?.home ?? slot);

	// onDrop fires on every nudge, so only remember the latest point; grading waits for Check.
	let dropped = $state<Vec | null>(null);
	let ok = $state<boolean | null>(null);
	const checked = $derived(ok !== null);

	function check() {
		if (!dropped || checked) return;
		ok = pointInRegion(dropped, def.target);
		onResult(ok);
	}
</script>

<div class="layout">
	<section class="stage">
		<PlayCanvas
			{play}
			{step}
			selected={slot}
			dragSlot={slot}
			onDrop={(p) => {
				if (!checked) dropped = p;
			}}
			reveal={ok === null ? undefined : { region: def.target, ok }}
		/>
	</section>

	<aside class="panel">
		<h2>Drag your {home} to where you should be.</h2>
		<p class="hint">Drag with a finger or mouse, or focus the player and use the arrow keys.</p>

		{#if ok === null}
			<button type="button" class="btn primary" disabled={!dropped} onclick={check}>Check</button>
		{:else}
			<div class="verdict" class:ok role="status">
				<h3>{ok ? 'In position' : 'Not quite'}</h3>
				<p><RichText text={ok ? def.correct : def.incorrect} /></p>
				<p class="key">Green zone: where you should be.</p>
			</div>
			<button type="button" class="btn primary" onclick={onNext}>{last ? 'See score' : 'Next'}</button>
		{/if}
	</aside>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 1.25rem;
	}
	@media (min-width: 900px) {
		.layout {
			grid-template-columns: 2.2fr 1fr;
			align-items: start;
		}
	}
	.stage,
	.panel {
		min-width: 0;
	}
	.panel {
		background: var(--panel);
		border-radius: 12px;
		padding: 1rem;
	}
	h2 {
		font-size: 1.7rem;
		color: var(--goal-light);
	}
	.hint,
	.key {
		color: var(--muted);
		font-size: 0.9rem;
		margin: 0.3rem 0 0.9rem;
	}
	.verdict {
		margin-bottom: 1rem;
		padding: 0.7rem 0.9rem;
		border-radius: 8px;
		background: color-mix(in srgb, var(--them) 22%, var(--panel-2));
		border-left: 4px solid var(--them);
	}
	.verdict.ok {
		background: color-mix(in srgb, #2e9d58 24%, var(--panel-2));
		border-left-color: #2e9d58;
	}
	.verdict h3 {
		font-size: 1.4rem;
	}
	.verdict p {
		margin: 0.3rem 0 0;
		line-height: 1.5;
	}
	.verdict .key {
		margin: 0.5rem 0 0;
	}
	.btn {
		min-height: 2.75rem;
		padding: 0 1.4rem;
		border: 0;
		border-radius: 8px;
		background: var(--panel-2);
		color: var(--text);
		font: inherit;
		font-weight: 700;
		cursor: pointer;
	}
	.btn.primary {
		background: var(--goal-light);
		color: #111;
	}
	.btn:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}
	.btn:focus-visible {
		outline: 2px solid var(--text);
		outline-offset: 2px;
	}
</style>
