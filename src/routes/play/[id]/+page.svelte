<script lang="ts">
	import { untrack } from 'svelte';
	import { page } from '$app/state';
	import { replaceState } from '$app/navigation';
	import { resolve } from '$app/paths';
	import PlayCanvas from '#lib/play/PlayCanvas.svelte';
	import Scrubber from '#lib/play/Scrubber.svelte';
	import SlotChips from '#lib/play/SlotChips.svelte';
	import NotesPanel from '#lib/play/NotesPanel.svelte';
	import RichText from '#lib/text/RichText.svelte';
	import { parseStudyParams } from '#lib/play/params.ts';
	import { CATEGORY_LABELS, getLesson } from '#lib/content/registry.ts';
	import { isMastered, loadProgress, type Progress } from '#lib/quiz/progress.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const play = $derived(data.play);

	// Query params are only readable in the browser (this page is prerendered).
	let step = $state(0);
	let slot = $state(untrack(() => data.play.slots[0].id));
	let flip = $state(false);
	let progress = $state<Progress>({});
	let ready = false;

	const current = $derived(play.steps[step]);
	const mastered = $derived(new Set(play.slots.filter((s) => isMastered(play, s.id, progress)).map((s) => s.id)));

	// Re-runs when the component is reused for a different play, so the previous play's
	// step and slot never leak into it.
	$effect(() => {
		const p = play;
		untrack(() => {
			({ step, slot, flip } = parseStudyParams(p, new URLSearchParams(page.url.search)));
			progress = loadProgress();
			ready = true;
		});
	});

	$effect(() => {
		const params = new URLSearchParams({ as: slot, step: String(step + 1) });
		if (flip) params.set('flip', '1');
		if (!ready) return;
		replaceState(`?${params}`, {});
	});
</script>

<svelte:head>
	<title>{play.title} · Hockey IQ</title>
</svelte:head>

<main>
	<nav class="crumbs" aria-label="Breadcrumb">
		<a href={resolve('/')}>Hockey IQ</a>
		<span aria-hidden="true">/</span>
		<span>{CATEGORY_LABELS[play.category]}</span>
		<span aria-hidden="true">/</span>
		<span>{play.system}</span>
	</nav>
	<h1>{play.title}</h1>

	<div class="layout">
		<section class="stage">
			<PlayCanvas {play} {step} selected={slot} {flip} onSelect={(id) => (slot = id)} />
			<Scrubber {step} total={play.steps.length} onStep={(s) => (step = s)} />
			<p class="caption"><RichText text={current.caption} /></p>
			<p class="legend">Tap any of your players to switch perspective. Arrow keys step through the play.</p>
		</section>

		<aside class="panel">
			<SlotChips slots={play.slots} selected={slot} {mastered} onSelect={(s) => (slot = s)} />
			<NotesPanel {play} step={current} {slot} />

			<div class="foot">
				<h3>Summary</h3>
				<p><RichText text={play.summary} /></p>

				{#if play.variations}
					<h3>Variations</h3>
					<p><RichText text={play.variations} /></p>
				{/if}

				{#if play.sources.length}
					<h3>Sources</h3>
					<ul>
						{#each play.sources as src}
							<li>
								{#if src.url}
									<a href={src.url} target="_blank" rel="noopener noreferrer">{src.title}</a>
								{:else}
									{src.title}
								{/if}
								<span class="pub">{src.publisher}</span>
							</li>
						{/each}
					</ul>
				{/if}

				{#if play.keyConcepts.length}
					<h3>Key concepts</h3>
					<ul class="concepts">
						{#each play.keyConcepts as id}
							<li><a href={`/learn/${id}`}>{getLesson(id)?.title ?? id}</a></li>
						{/each}
					</ul>
				{/if}

				<div class="actions">
					<a class="btn primary" href={`/play/${play.id}/quiz?as=${slot}`}>Quiz me</a>
					<button type="button" class="btn" aria-pressed={flip} onclick={() => (flip = !flip)}>
						Flip rink
					</button>
				</div>
			</div>
		</aside>
	</div>
</main>

<style>
	main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem 16px 3rem;
	}
	.crumbs {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		color: var(--muted);
		font-size: 0.9rem;
	}
	h1 {
		font-size: 2.6rem;
		margin: 0.2rem 0 0.8rem;
	}
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
	.caption {
		margin: 0.8rem 0 0;
		font-size: 1.1rem;
	}
	.legend {
		margin: 0.3rem 0 0;
		font-size: 0.85rem;
		color: var(--muted);
	}
	.foot {
		margin-top: 1.2rem;
		padding-top: 0.4rem;
		border-top: 1px solid var(--panel-2);
	}
	.foot h3 {
		margin: 0.9rem 0 0.2rem;
		font-size: 1.25rem;
		color: var(--muted);
	}
	.foot p,
	.foot ul {
		margin: 0;
		font-size: 0.95rem;
	}
	.foot ul {
		padding-left: 1.1rem;
	}
	.pub {
		color: var(--muted);
		margin-left: 0.3rem;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		margin-top: 1.2rem;
	}
	.btn {
		display: inline-flex;
		align-items: center;
		min-height: 2.75rem;
		padding: 0 1.1rem;
		border: 0;
		border-radius: 8px;
		background: var(--panel-2);
		color: var(--text);
		font: inherit;
		font-weight: 700;
		text-decoration: none;
		cursor: pointer;
	}
	.btn.primary {
		background: var(--goal-light);
		color: #111;
	}
	.btn[aria-pressed='true'] {
		outline: 2px solid var(--goal-light);
	}
	.btn:focus-visible,
	a:focus-visible {
		outline: 2px solid var(--text);
		outline-offset: 2px;
	}
</style>
