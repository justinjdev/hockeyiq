<script lang="ts">
	import { untrack } from 'svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import DragQuiz from '#lib/quiz/DragQuiz.svelte';
	import DecisionQuiz from '#lib/quiz/DecisionQuiz.svelte';
	import { listQuizItems, type QuizItem } from '#lib/quiz/quizItems.ts';
	import { framePlayForItem } from '#lib/quiz/frame.ts';
	import { isMastered, loadProgress, recordResult, type Progress } from '#lib/quiz/progress.ts';
	import { parseStudyParams } from '#lib/play/params.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const play = $derived(data.play);

	const ALL = 'all';
	let picked = $state(ALL);
	let index = $state(0);
	let results = $state<boolean[]>([]);
	let attempt = $state(0);
	let progress = $state<Progress>({});
	let ready = false;

	const pickable = $derived(play.slots.filter((s) => listQuizItems(play, s.id).length > 0));
	const items = $derived(listQuizItems(play, picked === ALL ? undefined : picked));
	const item = $derived<QuizItem | undefined>(items[index]);
	// Slots with a drag question still to come at this step can't be shown at their answer.
	const framed = $derived(framePlayForItem(play, items, index));
	const done = $derived(items.length > 0 && index >= items.length);
	const score = $derived(results.filter(Boolean).length);
	const homeOf = (id: string) => play.slots.find((s) => s.id === id)?.home ?? id;
	const masteredSlots = $derived(
		[...new Set(items.map((i) => i.slot))].filter((s) => isMastered(play, s, progress))
	);

	function reset(slot: string) {
		picked = slot;
		index = 0;
		results = [];
		attempt += 1;
	}

	// Query params are only readable in the browser (this page is prerendered). Re-runs, and
	// so resets the run, when the component is reused for a different play.
	$effect(() => {
		const p = play;
		untrack(() => {
			const params = new URLSearchParams(page.url.search);
			const slot = params.has('as') && params.get('as') !== ALL ? parseStudyParams(p, params).slot : ALL;
			reset(listQuizItems(p, slot).length > 0 ? slot : ALL);
			ready = true;
		});
	});

	$effect(() => {
		const params = new URLSearchParams({ as: picked });
		if (!ready) return;
		void goto(`?${params}`, { replace: true, shallow: true, state: {} });
	});

	function onResult(correct: boolean) {
		if (!item) return;
		recordResult(item, correct);
		results.push(correct);
	}

	function next() {
		index += 1;
		if (index >= items.length) progress = loadProgress();
	}

	const studySlot = $derived(picked === ALL ? play.slots[0].id : picked);
</script>

<svelte:head>
	<title>Quiz: {play.title} · Hockey IQ</title>
</svelte:head>

<main>
	<nav class="crumbs" aria-label="Breadcrumb">
		<a href="{resolve('/play/[id]', { id: play.id })}?as={studySlot}">{play.title}</a>
		<span aria-hidden="true">/</span>
		<span>Quiz</span>
	</nav>
	<h1>Quiz: {play.title}</h1>

	<div class="chips" role="group" aria-label="Quiz position">
		<button type="button" class="chip" class:on={picked === ALL} aria-pressed={picked === ALL} onclick={() => reset(ALL)}>
			All positions
		</button>
		{#each pickable as s (s.id)}
			<button type="button" class="chip" class:on={picked === s.id} aria-pressed={picked === s.id} onclick={() => reset(s.id)}>
				{s.home}
			</button>
		{/each}
	</div>

	{#if items.length === 0}
		<p class="empty">No quiz questions for this play yet.</p>
	{:else if done}
		<section class="end" aria-live="polite">
			<p class="label">Final score</p>
			<p class="score">{score}/{items.length}</p>
			{#if masteredSlots.length}
				<p class="mastered">
					{#each masteredSlots as s (s)}<span class="badge">&#10003; {homeOf(s)} mastered</span>{/each}
				</p>
			{/if}
			<div class="actions">
				<a class="btn primary" href="{resolve('/play/[id]', { id: play.id })}?as={studySlot}">Study this play</a>
				<button type="button" class="btn" onclick={() => reset(picked)}>Retry</button>
			</div>
		</section>
	{:else if item}
		<p class="progress">
			Question {index + 1} of {items.length} &middot; {homeOf(item.slot)}, step {item.step + 1}
		</p>
		{#key `${attempt}/${index}`}
			{@const def = play.steps[item.step].quiz?.[item.slot]}
			{#if item.kind === 'drag' && def?.drag}
				<DragQuiz
					play={framed}
					step={item.step}
					slot={item.slot}
					def={def.drag}
					last={index === items.length - 1}
					{onResult}
					onNext={next}
				/>
			{:else if item.kind === 'decision' && def?.decision}
				<DecisionQuiz
					play={framed}
					step={item.step}
					slot={item.slot}
					def={def.decision}
					last={index === items.length - 1}
					{onResult}
					onNext={next}
				/>
			{/if}
		{/key}
	{/if}
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
	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-bottom: 1rem;
	}
	.chip {
		min-height: 2.5rem;
		padding: 0 0.9rem;
		border: 0;
		border-radius: 999px;
		background: var(--panel-2);
		color: var(--text);
		font: inherit;
		font-weight: 700;
		cursor: pointer;
	}
	.chip.on {
		background: var(--goal-light);
		color: #111;
	}
	.progress {
		margin: 0 0 0.6rem;
		color: var(--muted);
	}
	.empty {
		color: var(--muted);
	}
	.end {
		max-width: 30rem;
		padding: 1.2rem;
		border-radius: 12px;
		background: var(--panel);
	}
	.label {
		margin: 0;
		color: var(--muted);
	}
	.score {
		margin: 0;
		font-family: var(--font-display);
		font-size: 4.5rem;
		line-height: 1;
		color: var(--goal-light);
	}
	.mastered {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin: 0.8rem 0 0;
	}
	.badge {
		padding: 0.2rem 0.7rem;
		border-radius: 999px;
		background: var(--us);
		color: #fff;
		font-weight: 700;
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
	.chip:focus-visible,
	.btn:focus-visible,
	a:focus-visible {
		outline: 2px solid var(--text);
		outline-offset: 2px;
	}
</style>
