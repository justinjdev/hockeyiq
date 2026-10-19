<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	const notFound = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{notFound ? 'Not found' : 'Error'} · Hockey IQ</title>
</svelte:head>

<main>
	<p class="status">{page.status}</p>
	<h1>{notFound ? 'Page not found' : 'Something went wrong'}</h1>
	<p class="message">{notFound ? 'That page is not on the ice.' : (page.error?.message ?? 'Unexpected error.')}</p>
	<a class="btn" href={resolve('/')}>Back to the plays</a>
</main>

<style>
	main {
		max-width: 40rem;
		margin: 0 auto;
		padding: 3rem 16px 4rem;
	}
	.status {
		margin: 0;
		font-family: var(--font-display);
		font-size: 6rem;
		line-height: 1;
		color: var(--goal-light);
	}
	h1 {
		font-size: 2.6rem;
		text-transform: uppercase;
		margin: 0.2rem 0 0.4rem;
	}
	.message {
		margin: 0 0 1.4rem;
		color: var(--muted);
	}
	.btn {
		display: inline-flex;
		align-items: center;
		min-height: 2.75rem;
		padding: 0 1.1rem;
		border-radius: 8px;
		background: var(--goal-light);
		color: #111;
		font-weight: 700;
		text-decoration: none;
	}
	.btn:focus-visible {
		outline: 2px solid var(--text);
		outline-offset: 2px;
	}
</style>
