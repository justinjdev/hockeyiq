<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import {
		CATEGORY_LABELS,
		comparisons,
		getPlay,
		lessons,
		plays,
		playsByCategory
	} from '#lib/content/registry.ts';
	import { isMastered, loadProgress, type Progress } from '#lib/quiz/progress.ts';
	import { parseRichText } from '#lib/text/richText.ts';
	import type { PlayCategory } from '#lib/content/types.ts';

	// Terms are buttons, which cannot nest inside a link.
	const plain = (text: string) => parseRichText(text).map((s) => s.text).join('');

	let progress = $state<Progress>({});
	onMount(() => {
		progress = loadProgress();
	});

	const categories = (Object.keys(CATEGORY_LABELS) as PlayCategory[]).map((id) => {
		const list = playsByCategory(id);
		return { id, label: CATEGORY_LABELS[id], count: list.length, plays: list };
	});
	const masteredCount = (list: typeof plays) =>
		list.reduce((n, p) => n + p.slots.filter((s) => isMastered(p, s.id, progress)).length, 0);
	const slotCount = (list: typeof plays) => list.reduce((n, p) => n + p.slots.length, 0);
</script>

<svelte:head>
	<title>Hockey IQ</title>
</svelte:head>

<main>
	<section class="hero">
		<p class="kicker">Rec hockey sense, one position at a time</p>
		<h1>Know where to be <em>before</em> the puck gets there.</h1>
		<p class="lede">
			Step through real systems, play every position, then quiz yourself on where to stand and what to read.
		</p>
	</section>

	<section aria-labelledby="cats">
		<h2 id="cats">Plays by situation</h2>
		<ul class="cards">
			{#each categories as c, i (c.id)}
				{@const total = slotCount(c.plays)}
				<li style:--i={i}>
					<a class="card" href={resolve('/plays/[category]', { category: c.id })}>
						<span class="name">{c.label}</span>
						<span class="meta">{c.count} {c.count === 1 ? 'play' : 'plays'}</span>
						{#if total}
							<span class="mastered" class:some={masteredCount(c.plays) > 0}>
								{masteredCount(c.plays)} / {total} positions mastered
							</span>
						{:else}
							<span class="mastered">Coming soon</span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</section>

	<section id="learn" aria-labelledby="fund" style:--i={categories.length}>
		<h2 id="fund">Fundamentals</h2>
		<ul class="rows">
			{#each lessons as l (l.id)}
				<li>
					<a href={resolve('/learn/[id]', { id: l.id })}>
						<span class="t">{l.title}</span>
						<span class="s">{plain(l.summary)}</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>

	{#if comparisons.length}
		<section aria-labelledby="cmp" style:--i={categories.length + 1}>
			<h2 id="cmp">Side by side</h2>
			<ul class="rows">
				{#each comparisons as c (c.id)}
					<li>
						<a href={resolve('/compare/[id]', { id: c.id })}>
							<span class="t">{getPlay(c.a)?.title ?? c.a} vs {getPlay(c.b)?.title ?? c.b}</span>
							<span class="s">{plain(c.summary)}</span>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</main>

<style>
	main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem 16px 4rem;
	}
	.hero {
		margin-bottom: 2.5rem;
		max-width: 46rem;
	}
	.kicker {
		margin: 0 0 0.5rem;
		font-family: var(--font-display);
		font-size: 1.25rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--goal-light);
	}
	h1 {
		font-size: clamp(2.8rem, 8vw, 5.2rem);
		font-weight: 700;
		line-height: 0.95;
		text-transform: uppercase;
	}
	h1 em {
		font-style: normal;
		color: var(--goal-light);
	}
	.lede {
		margin: 1rem 0 0;
		font-size: 1.15rem;
		color: var(--muted);
	}
	h2 {
		font-size: 1.9rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin: 0 0 0.9rem;
		padding-left: 0.7rem;
		border-left: 4px solid var(--goal-light);
	}
	section {
		margin-bottom: 2.5rem;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 16rem), 1fr));
		gap: 0.8rem;
	}
	.card {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		height: 100%;
		padding: 1rem 1.1rem;
		background: var(--panel);
		border: 1px solid var(--panel-2);
		border-radius: 12px;
		color: var(--text);
		text-decoration: none;
		transition:
			border-color 0.15s,
			transform 0.15s;
	}
	.card:hover,
	.card:focus-visible {
		border-color: var(--goal-light);
		transform: translateY(-2px);
	}
	.name {
		font-family: var(--font-display);
		font-size: 2rem;
		font-weight: 600;
		line-height: 1;
	}
	.meta {
		color: var(--muted);
	}
	.mastered {
		margin-top: 0.5rem;
		font-size: 0.85rem;
		color: var(--muted);
	}
	.mastered.some {
		color: var(--goal-light);
	}
	.rows {
		display: grid;
		gap: 0.5rem;
	}
	.rows a {
		display: block;
		padding: 0.8rem 1rem;
		background: var(--panel);
		border-left: 3px solid var(--panel-2);
		border-radius: 0 10px 10px 0;
		color: var(--text);
		text-decoration: none;
	}
	.rows a:hover,
	.rows a:focus-visible {
		border-left-color: var(--goal-light);
	}
	.t {
		display: block;
		font-family: var(--font-display);
		font-size: 1.5rem;
		font-weight: 600;
		line-height: 1.1;
	}
	.s {
		display: block;
		margin-top: 0.15rem;
		font-size: 0.92rem;
		color: var(--muted);
	}
	a:focus-visible {
		outline: 2px solid var(--goal-light);
		outline-offset: 2px;
	}
	@media (prefers-reduced-motion: no-preference) {
		.hero,
		.cards li,
		section[style] {
			animation: rise 0.55s cubic-bezier(0.2, 0.7, 0.2, 1) both;
			animation-delay: calc(var(--i, 0) * 70ms + 80ms);
		}
		.hero {
			animation-delay: 0ms;
		}
		@keyframes rise {
			from {
				opacity: 0;
				transform: translateY(14px);
			}
		}
	}
</style>
