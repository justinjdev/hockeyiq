<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import { parseRichText } from '#lib/text/richText.ts';
	import { isMastered, loadProgress, type Progress } from '#lib/quiz/progress.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	// Terms are buttons, which cannot nest inside the card link.
	const plain = (text: string) => parseRichText(text).map((s) => s.text).join('');

	let progress = $state<Progress>({});
	onMount(() => {
		progress = loadProgress();
	});
</script>

<svelte:head>
	<title>{data.label} · Hockey IQ</title>
</svelte:head>

<main>
	<h1>{data.label}</h1>

	{#if data.plays.length === 0}
		<p class="empty">No plays here yet.</p>
	{:else}
		<ul>
			{#each data.plays as p, i (p.id)}
				{@const done = p.slots.filter((s) => isMastered(p, s.id, progress)).length}
				<li style:--i={i}>
					<a href={resolve('/play/[id]', { id: p.id })}>
						<span class="head">
							<span class="title">{p.title}</span>
							<span class="badge">{p.strength}</span>
						</span>
						<span class="system">{p.system}</span>
						<span class="summary">{plain(p.summary)}</span>
						<span class="done" class:some={done > 0}>{done} / {p.slots.length} positions mastered</span>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</main>

<style>
	main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1.5rem 16px 4rem;
	}
	h1 {
		font-size: 3.2rem;
		text-transform: uppercase;
		margin-bottom: 1rem;
	}
	.empty {
		color: var(--muted);
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
		gap: 0.9rem;
	}
	a {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		height: 100%;
		padding: 1rem 1.1rem;
		background: var(--panel);
		border: 1px solid var(--panel-2);
		border-radius: 12px;
		color: var(--text);
		text-decoration: none;
		transition: border-color 0.15s;
	}
	a:hover,
	a:focus-visible {
		border-color: var(--goal-light);
	}
	a:focus-visible {
		outline: 2px solid var(--goal-light);
		outline-offset: 2px;
	}
	.head {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 0.6rem;
	}
	.title {
		font-family: var(--font-display);
		font-size: 1.9rem;
		font-weight: 600;
		line-height: 1.05;
	}
	.badge {
		flex: none;
		padding: 0.05rem 0.55rem;
		border: 1px solid var(--goal-light);
		border-radius: 999px;
		color: var(--goal-light);
		font-family: var(--font-display);
		font-size: 1.1rem;
		letter-spacing: 0.04em;
	}
	.system {
		font-size: 0.85rem;
		color: var(--muted);
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}
	.summary {
		font-size: 0.95rem;
	}
	.done {
		margin-top: auto;
		padding-top: 0.4rem;
		font-size: 0.85rem;
		color: var(--muted);
	}
	.done.some {
		color: var(--goal-light);
	}
	@media (prefers-reduced-motion: no-preference) {
		li {
			animation: rise 0.45s cubic-bezier(0.2, 0.7, 0.2, 1) both;
			animation-delay: calc(var(--i, 0) * 60ms);
		}
		@keyframes rise {
			from {
				opacity: 0;
				transform: translateY(10px);
			}
		}
	}
</style>
