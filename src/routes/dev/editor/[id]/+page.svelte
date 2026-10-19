<script lang="ts">
	import { untrack } from 'svelte';
	import PlayCanvas from '#lib/play/PlayCanvas.svelte';
	import type { Play, Step, Vec } from '#lib/content/types.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	// In-memory draft only; nothing is saved. Replaced immutably so the canvas sees every change.
	let draft = $state.raw<Play>(untrack(() => data.play));
	let step = $state(0);
	let slot = $state(untrack(() => data.play.slots[0].id));
	let copied = $state('');

	const current = $derived(draft.steps[step]);

	function move(id: string, p: Vec) {
		const next = (s: Step): Step =>
			id === 'puck' ? { ...s, puck: p } : { ...s, positions: { ...s.positions, [id]: p } };
		draft = { ...draft, steps: draft.steps.map((s, i) => (i === step ? next(s) : s)) };
	}

	function select(id: string) {
		if (draft.slots.some((s) => s.id === id)) slot = id;
	}

	function duplicate() {
		const steps = [...draft.steps];
		// Step ids key saved progress, so the copy needs a fresh one.
		const ids = new Set(steps.map((s) => s.id));
		let id = `${current.id}-copy`;
		for (let n = 2; ids.has(id); n++) id = `${current.id}-copy-${n}`;
		steps.splice(step + 1, 0, { ...structuredClone(current), id });
		draft = { ...draft, steps };
		step += 1;
	}

	const round = (n: number) => Math.round(n * 2) / 2;
	const vec = (p: Vec) => `{ x: ${round(p.x)}, y: ${round(p.y)} }`;
	const key = (id: string) => (/^[A-Za-z_$][\w$]*$/.test(id) ? id : `'${id}'`);

	function stepLiteral(s: Step): string {
		const positions = Object.entries(s.positions)
			.map(([id, p]) => `\t\t${key(id)}: ${vec(p)}`)
			.join(',\n');
		return `{\n\tpositions: {\n${positions}\n\t},\n\tpuck: ${vec(s.puck)}\n}`;
	}

	async function copy() {
		try {
			await navigator.clipboard.writeText(stepLiteral(current));
			copied = `Copied step ${step + 1}`;
		} catch {
			copied = 'Clipboard unavailable';
		}
	}
</script>

<svelte:head>
	<title>Editor: {draft.title}</title>
</svelte:head>

<main>
	<h1>Editing: {draft.title}</h1>
	<p class="hint">
		Dev only, in memory. Drag any player, opponent or the puck (arrow keys nudge the focused one).
	</p>

	<PlayCanvas play={draft} {step} selected={slot} editable onMove={move} onSelect={select} />

	<div class="bar">
		<div class="steps" role="group" aria-label="Step">
			{#each draft.steps as _, i (i)}
				<button type="button" aria-pressed={i === step} onclick={() => (step = i)}>{i + 1}</button>
			{/each}
		</div>
		<button type="button" onclick={duplicate}>Duplicate step</button>
		<button type="button" class="primary" onclick={copy}>Copy step JSON</button>
		<span role="status">{copied}</span>
	</div>
	<p class="caption">{current.caption}</p>
</main>

<style>
	main {
		max-width: 1100px;
		margin: 0 auto;
		padding: 1rem 16px 3rem;
	}
	h1 {
		font-size: 2.2rem;
		margin: 0.2rem 0;
	}
	.hint,
	.caption {
		color: var(--muted);
		margin: 0.3rem 0 0.8rem;
	}
	.bar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.6rem;
		margin-top: 0.8rem;
	}
	.steps {
		display: flex;
		flex-wrap: wrap;
		gap: 0.3rem;
	}
	button {
		min-height: 2.5rem;
		min-width: 2.5rem;
		padding: 0 0.9rem;
		border: 0;
		border-radius: 8px;
		background: var(--panel-2);
		color: var(--text);
		font: inherit;
		font-weight: 700;
		cursor: pointer;
	}
	button[aria-pressed='true'] {
		outline: 2px solid var(--goal-light);
	}
	button.primary {
		background: var(--goal-light);
		color: #111;
	}
	button:focus-visible {
		outline: 2px solid var(--text);
		outline-offset: 2px;
	}
</style>
