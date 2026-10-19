<script lang="ts">
	import { glossary } from '#lib/content/glossary.ts';

	let { id, text }: { id: string; text: string } = $props();

	const uid = $props.id();
	const entry = $derived(glossary.find((t) => t.id === id));
	let pinned = $state(false);
	let hovered = $state(false);
	let focused = $state(false);
	const open = $derived(pinned || hovered || focused);

	function close() {
		pinned = false;
		hovered = false;
	}
</script>

<span
	class="term"
	role="presentation"
	onmouseenter={() => (hovered = true)}
	onmouseleave={() => (hovered = false)}
>
	<button
		type="button"
		aria-describedby={open && entry ? `${uid}-def` : undefined}
		aria-expanded={open}
		onclick={() => (pinned = !pinned)}
		onfocus={() => (focused = true)}
		onblur={() => {
			focused = false;
			pinned = false;
		}}
		onkeydown={(e) => {
			if (e.key === 'Escape' && open) {
				e.stopPropagation();
				close();
				focused = false;
			}
		}}>{text}</button
	>{#if open && entry}
		<span class="pop" id="{uid}-def" role="tooltip"><b>{entry.term}</b> {entry.definition}</span>{/if}</span>

<style>
	.term {
		position: relative;
		display: inline;
	}
	button {
		all: unset;
		cursor: help;
		border-bottom: 1px dotted var(--goal-light);
		color: inherit;
	}
	button:focus-visible {
		outline: 2px solid var(--goal-light);
		outline-offset: 2px;
		border-radius: 2px;
	}
	.pop {
		position: absolute;
		left: 0;
		top: calc(100% + 4px);
		z-index: 20;
		width: max-content;
		max-width: min(18rem, 80vw);
		padding: 0.5rem 0.65rem;
		background: var(--panel-2);
		border: 1px solid var(--goal-light);
		border-radius: 6px;
		color: var(--text);
		font-size: 0.85rem;
		line-height: 1.35;
		box-shadow: 0 6px 18px rgb(0 0 0 / 0.45);
	}
	.pop b {
		color: var(--goal-light);
	}
</style>
