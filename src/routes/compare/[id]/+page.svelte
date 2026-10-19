<script lang="ts">
	import { untrack } from 'svelte';
	import PlayCanvas from '#lib/play/PlayCanvas.svelte';
	import Scrubber from '#lib/play/Scrubber.svelte';
	import RichText from '#lib/text/RichText.svelte';
	import { sharedPhases, slotForHome, stepForPhase } from '#lib/play/phases.ts';
	import type { HomePosition } from '#lib/content/types.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const { a, b, comparison } = $derived(data);

	const phases = $derived(sharedPhases(a, b));
	let phaseIndex = $state(0);
	let home = $state<HomePosition>(untrack(() => data.a.slots[0].home));

	$effect(() => {
		// A different comparison reuses this component; start it from the beginning.
		void data.comparison.id;
		untrack(() => {
			phaseIndex = 0;
			home = data.a.slots[0].home;
		});
	});

	const phase = $derived(phases[phaseIndex]);
	const sides = $derived([
		{ play: a, key: 'a' as const },
		{ play: b, key: 'b' as const }
	]);
</script>

<svelte:head>
	<title>{a.title} vs {b.title} · Hockey IQ</title>
</svelte:head>

<main>
	<h1>{a.title} <span>vs</span> {b.title}</h1>
	<p class="summary"><RichText text={comparison.summary} /></p>

	<div class="pair">
		{#each sides as { play, key } (key)}
			{@const slot = slotForHome(play, home)}
			{@const step = Math.max(0, phase ? stepForPhase(play, phase) : 0)}
			<section>
				<h2>{play.title}</h2>
				<PlayCanvas
					{play}
					{step}
					selected={slot.id}
					onSelect={(id) => (home = play.slots.find((s) => s.id === id)?.home ?? home)}
				/>
				<p class="caption"><RichText text={play.steps[step].caption} /></p>
			</section>
		{/each}
	</div>

	{#if phases.length}
		<div class="scrub">
			<p class="phase">{phase}</p>
			<Scrubber step={phaseIndex} total={phases.length} onStep={(i) => (phaseIndex = i)} />
		</div>
	{:else}
		<p class="note">These plays share no common phases to line up.</p>
	{/if}

	<div class="when">
		<section>
			<h3>Use {a.title} when</h3>
			<p><RichText text={comparison.whenToUse.a} /></p>
		</section>
		<section>
			<h3>Use {b.title} when</h3>
			<p><RichText text={comparison.whenToUse.b} /></p>
		</section>
	</div>
</main>

<style>
	main {
		max-width: 1300px;
		margin: 0 auto;
		padding: 1.5rem 16px 4rem;
	}
	h1 {
		font-size: clamp(2.2rem, 6vw, 3.4rem);
		text-transform: uppercase;
	}
	h1 span {
		color: var(--goal-light);
	}
	.summary {
		margin: 0.5rem 0 1.2rem;
		font-size: 1.1rem;
		max-width: 52rem;
	}
	.pair {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 1.2rem;
	}
	@media (min-width: 900px) {
		.pair {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	h2 {
		font-size: 1.8rem;
		margin-bottom: 0.4rem;
	}
	.caption {
		margin: 0.5rem 0 0;
		min-height: 3em;
	}
	.scrub {
		max-width: 40rem;
		margin: 1rem auto 0;
	}
	.phase {
		margin: 0;
		text-align: center;
		font-family: var(--font-display);
		font-size: 1.6rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--goal-light);
	}
	.note {
		color: var(--muted);
	}
	.when {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 0.9rem;
		margin-top: 2rem;
	}
	@media (min-width: 900px) {
		.when {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	.when section {
		padding: 1rem 1.1rem;
		background: var(--panel);
		border-radius: 12px;
		border-top: 3px solid var(--goal-light);
	}
	h3 {
		font-size: 1.5rem;
		margin-bottom: 0.3rem;
	}
	.when p {
		margin: 0;
	}
</style>
