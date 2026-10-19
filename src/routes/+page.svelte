<script lang="ts">
	import PlayCanvas from '#lib/play/PlayCanvas.svelte';
	import { getPlay } from '#lib/content/registry.ts';

	// Temporary: Task 7 replaces this page.
	const play = getPlay('bo-standard')!;
	let step = $state(0);
	let selected = $state('rw');
</script>

<main style="max-width: 1100px; margin: 0 auto; padding: 24px 16px">
	<h1 style="font-size: 2.5rem">Hockey IQ</h1>
	<PlayCanvas {play} {step} {selected} onSelect={(id) => (selected = id)} />
	<p>
		<button onclick={() => (step = Math.max(0, step - 1))}>Prev</button>
		<span data-testid="step-label">{step + 1}/{play.steps.length}</span>
		<button onclick={() => (step = Math.min(play.steps.length - 1, step + 1))}>Next</button>
	</p>
	<p>{play.steps[step].caption}</p>
</main>
