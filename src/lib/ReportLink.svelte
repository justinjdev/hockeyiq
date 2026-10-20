<script lang="ts">
	import { reportIssueUrl, type ReportContext } from '#lib/report.ts';

	let ctx: Omit<ReportContext, 'pageUrl'> = $props();

	// The page is prerendered, so its URL is only known once hydrated.
	let mounted = $state(false);
	$effect(() => {
		mounted = true;
	});
	// Shallow goto does not update page.url, so rebuild the query from the current context.
	function pageUrl() {
		const url = `${location.origin}${location.pathname}`;
		if (ctx.slot === undefined || ctx.stepNumber === undefined) return url;
		return `${url}?${new URLSearchParams({ as: ctx.slot, step: String(ctx.stepNumber) })}`;
	}
	const href = $derived(mounted ? reportIssueUrl({ ...ctx, pageUrl: pageUrl() }) : undefined);
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
