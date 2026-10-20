<script lang="ts">
	import { resolve } from '$app/paths';
	import DiagramCanvas from '#lib/play/DiagramCanvas.svelte';
	import ReportLink from '#lib/ReportLink.svelte';
	import RichText from '#lib/text/RichText.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const lesson = $derived(data.lesson);
</script>

<svelte:head>
	<title>{lesson.title} · Hockey IQ</title>
</svelte:head>

<main>
	<p class="kicker">Fundamentals</p>
	<h1>{lesson.title}</h1>
	<p class="lede"><RichText text={lesson.summary} /></p>

	{#each lesson.sections as s, i (i)}
		<section>
			<h2>{s.heading}</h2>
			<p class="body"><RichText text={s.body} /></p>
			{#if s.diagram}
				<figure>
					<DiagramCanvas diagram={s.diagram} label={`Diagram: ${s.heading}`} />
					<figcaption><RichText text={s.diagram.caption} /></figcaption>
				</figure>
			{/if}
		</section>
	{/each}

	{#if data.examples.length}
		<section class="examples">
			<h2>See it in a play</h2>
			<ul>
				{#each data.examples as p (p.id)}
					<li><a href={resolve('/play/[id]', { id: p.id })}>{p.title}</a></li>
				{/each}
			</ul>
		</section>
	{/if}

	<ReportLink kind="lesson" id={lesson.id} title={lesson.title} />
</main>

<style>
	main {
		max-width: 52rem;
		margin: 0 auto;
		padding: 2rem 16px 4rem;
	}
	.kicker {
		margin: 0;
		font-family: var(--font-display);
		font-size: 1.2rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--goal-light);
	}
	h1 {
		font-size: clamp(2.8rem, 8vw, 4.6rem);
		text-transform: uppercase;
	}
	.lede {
		font-size: 1.2rem;
		color: var(--muted);
		margin: 0.6rem 0 0;
	}
	section {
		margin-top: 2.2rem;
	}
	h2 {
		font-size: 2rem;
		margin-bottom: 0.4rem;
	}
	.body {
		margin: 0;
		font-size: 1.1rem;
		max-width: 44rem;
	}
	figure {
		margin: 1rem 0 0;
		padding: 0.6rem;
		background: var(--panel);
		border-radius: 12px;
	}
	figcaption {
		padding: 0.7rem 0.4rem 0.3rem;
		font-size: 0.95rem;
		color: var(--muted);
	}
	.examples ul {
		margin: 0;
		padding-left: 1.2rem;
		font-size: 1.1rem;
	}
	a:focus-visible {
		outline: 2px solid var(--goal-light);
		outline-offset: 2px;
	}
</style>
