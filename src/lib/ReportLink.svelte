<script lang="ts">
	import { page } from '$app/state';
	import { reportIssueUrl, type ReportContext } from '#lib/report.ts';

	let ctx: Omit<ReportContext, 'pageUrl'> = $props();

	// The page is prerendered, so its URL is only known once hydrated.
	let mounted = $state(false);
	$effect(() => {
		mounted = true;
	});
	const href = $derived(mounted ? reportIssueUrl({ ...ctx, pageUrl: page.url.href }) : undefined);
</script>

<p class="report">
	<a {href} target="_blank" rel="noopener noreferrer">Report a problem</a>
</p>

<style>
	.report {
		margin: 0.8rem 0 0;
		font-size: 0.85rem;
		color: var(--muted);
	}
	.report a {
		color: inherit;
		text-decoration: underline;
	}
	.report a:focus-visible {
		outline: 2px solid var(--text);
		outline-offset: 2px;
	}
</style>
