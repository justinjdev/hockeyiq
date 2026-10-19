<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { CATEGORIES, CATEGORY_LABELS } from '#lib/content/categories.ts';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	// Lets e2e tests wait until event handlers are attached.
	onMount(() => {
		document.documentElement.dataset.hydrated = '';
	});

	const section = $derived(page.route.id?.split('/')[1] ?? '');
	const onPlayPage = $derived(section === 'play' || section === 'plays');
	const activeCategory = $derived(page.params.category);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="bar">
	<div class="inner">
		<a class="brand" href={resolve('/')}>Hockey <span>IQ</span></a>
		<nav aria-label="Main">
			<a href={resolve('/')} aria-current={section === 'plays' || section === 'play' ? 'page' : undefined}>Plays</a>
			<a href={`${resolve('/')}#learn`} aria-current={section === 'learn' ? 'page' : undefined}>Learn</a>
			<a href={resolve('/glossary')} aria-current={section === 'glossary' ? 'page' : undefined}>Glossary</a>
		</nav>
	</div>
	{#if onPlayPage}
		<nav class="chips" aria-label="Play categories">
			{#each CATEGORIES as c (c)}
				<a
					href={resolve('/plays/[category]', { category: c })}
					aria-current={activeCategory === c ? 'page' : undefined}>{CATEGORY_LABELS[c]}</a
				>
			{/each}
		</nav>
	{/if}
</header>

{@render children()}

<style>
	.bar {
		position: sticky;
		top: 0;
		z-index: 30;
		background: color-mix(in srgb, var(--arena) 92%, transparent);
		backdrop-filter: blur(8px);
		border-bottom: 1px solid var(--panel-2);
	}
	.inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0.4rem 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	.brand {
		font-family: var(--font-display);
		font-size: 2rem;
		font-weight: 700;
		line-height: 1;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--text);
		text-decoration: none;
	}
	.brand span {
		color: var(--goal-light);
	}
	nav a {
		color: var(--muted);
		text-decoration: none;
	}
	.inner nav {
		display: flex;
		gap: 0.25rem;
	}
	.inner nav a {
		display: inline-flex;
		align-items: center;
		min-height: 2.75rem;
		padding: 0 0.7rem;
		font-family: var(--font-display);
		font-size: 1.3rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		border-bottom: 2px solid transparent;
	}
	nav a:hover {
		color: var(--text);
	}
	nav a[aria-current='page'] {
		color: var(--goal-light);
		border-bottom-color: var(--goal-light);
	}
	.chips {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 16px 0.5rem;
		display: flex;
		gap: 0.4rem;
		overflow-x: auto;
		scrollbar-width: none;
	}
	.chips a {
		flex: none;
		display: inline-flex;
		align-items: center;
		min-height: 2.25rem;
		padding: 0 0.85rem;
		border-radius: 999px;
		background: var(--panel);
		font-size: 0.9rem;
	}
	.chips a[aria-current='page'] {
		background: var(--goal-light);
		color: #111;
		font-weight: 700;
	}
	a:focus-visible {
		outline: 2px solid var(--goal-light);
		outline-offset: 2px;
	}
	@media (max-width: 420px) {
		.inner nav a {
			padding: 0 0.45rem;
			font-size: 1.15rem;
		}
		.brand {
			font-size: 1.7rem;
		}
	}
</style>
