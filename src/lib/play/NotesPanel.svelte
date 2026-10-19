<script lang="ts">
	import type { Play, Step } from '#lib/content/types.ts';
	import RichText from '#lib/text/RichText.svelte';

	let { play, step, slot }: { play: Play; step: Step; slot: string } = $props();

	const notes = $derived(step.notes[slot]);
	const home = $derived(play.slots.find((s) => s.id === slot)?.home ?? slot);
	const role = $derived(step.roles?.[slot]);
</script>

<div class="notes">
	{#if role}
		<p class="role">{home}, acting as <b>{role}</b> this step</p>
	{/if}
	{#if notes}
		<h3>Where to be</h3>
		<p><RichText text={notes.where} /></p>
		<h3>What to read</h3>
		<p><RichText text={notes.read} /></p>
		<h3>Why</h3>
		<p><RichText text={notes.why} /></p>
	{/if}
</div>

<style>
	.notes h3 {
		margin: 0.9rem 0 0.2rem;
		color: var(--goal-light);
		font-size: 1.35rem;
	}
	.notes p {
		margin: 0;
		line-height: 1.5;
	}
	.notes .role {
		margin-top: 0.6rem;
		color: var(--muted);
		font-size: 0.9rem;
	}
	.notes .role b {
		color: var(--text);
	}
</style>
