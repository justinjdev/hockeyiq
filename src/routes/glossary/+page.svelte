<script lang="ts">
	import { glossary } from '#lib/content/glossary.ts';

	const terms = [...glossary].sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }));
</script>

<svelte:head>
	<title>Glossary · Hockey IQ</title>
</svelte:head>

<main>
	<h1>Glossary</h1>
	<dl>
		{#each terms as t (t.id)}
			<div class="entry" id={t.id}>
				<dt><a href={`#${t.id}`}>{t.term}</a></dt>
				<dd>{t.definition}</dd>
			</div>
		{/each}
	</dl>
</main>

<style>
	main {
		max-width: 52rem;
		margin: 0 auto;
		padding: 1.5rem 16px 4rem;
	}
	h1 {
		font-size: 3.2rem;
		text-transform: uppercase;
		margin-bottom: 1rem;
	}
	dl {
		margin: 0;
	}
	.entry {
		padding: 0.8rem 0;
		border-top: 1px solid var(--panel-2);
		/* Clear the sticky top bar when jumped to by anchor. */
		scroll-margin-top: 4.5rem;
	}
	.entry:target {
		background: color-mix(in srgb, var(--goal-light) 10%, transparent);
		border-left: 3px solid var(--goal-light);
		padding-left: 0.8rem;
	}
	dt {
		font-family: var(--font-display);
		font-size: 1.7rem;
		font-weight: 600;
		line-height: 1.1;
	}
	dt a {
		color: var(--text);
		text-decoration: none;
	}
	dt a:hover {
		color: var(--goal-light);
	}
	dd {
		margin: 0.15rem 0 0;
		max-width: 42rem;
	}
	a:focus-visible {
		outline: 2px solid var(--goal-light);
		outline-offset: 2px;
	}
</style>
