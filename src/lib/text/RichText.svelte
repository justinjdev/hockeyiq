<script lang="ts">
	import { parseRichText } from './richText.ts';
	import Term from './Term.svelte';

	let { text }: { text: string } = $props();
	const segments = $derived(parseRichText(text));
</script>

{#each segments as seg}{#if seg.kind === 'term'}<Term id={seg.id} text={seg.text} />{:else}{seg.text}{/if}{/each}
