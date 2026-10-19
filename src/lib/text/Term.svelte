<script lang="ts">
	import { resolve } from '$app/paths';
	import { glossary } from '#lib/content/glossary.ts';

	let { id, text }: { id: string; text: string } = $props();

	const uid = $props.id();
	const entry = $derived(glossary.find((t) => t.id === id));
	// Click toggles `pinned`, so a tap opens and a second tap closes (a click while only hovered pins it). Hover counts for mouse
	// pointers only (touch emulates it before the click) and focus for keyboard focus only.
	let pinned = $state(false);
	let hovered = $state(false);
	let focused = $state(false);
	const open = $derived(pinned || hovered || focused);

	let root: HTMLElement | undefined = $state();
	let pop: HTMLElement | undefined = $state();

	function close() {
		pinned = false;
		hovered = false;
		focused = false;
	}

	// Keep the popover inside the viewport (it opens at the term's left edge).
	$effect(() => {
		if (!pop) return;
		const margin = 8;
		pop.style.left = '0px';
		const r = pop.getBoundingClientRect();
		const vw = document.documentElement.clientWidth;
		let dx = 0;
		if (r.right > vw - margin) dx = vw - margin - r.right;
		if (r.left + dx < margin) dx = margin - r.left;
		pop.style.left = `${dx}px`;
	});
</script>

<svelte:window
	onpointerdown={(e) => {
		if (pinned && root && !root.contains(e.target as Node)) pinned = false;
	}}
/>

<span
	bind:this={root}
	class="term"
	role="presentation"
	onpointerenter={(e) => (hovered = e.pointerType === 'mouse')}
	onpointerleave={() => (hovered = false)}
>
	<button
		type="button"
		aria-describedby={open && entry ? `${uid}-def` : undefined}
		aria-expanded={open}
		onclick={() => (pinned ? close() : (pinned = true))}
		onfocus={(e) => (focused = e.currentTarget.matches(':focus-visible'))}
		onblur={(e) => {
			if (!root?.contains(e.relatedTarget as Node | null)) close();
		}}
		onkeydown={(e) => {
			if (e.key === 'Escape' && open) {
				e.stopPropagation();
				close();
			}
		}}>{text}</button
	>{#if open && entry}
		<span bind:this={pop} class="pop" id="{uid}-def" role="tooltip"><b>{entry.term}</b> {entry.definition}
			<a class="more" onblur={(e) => !root?.contains(e.relatedTarget as Node | null) && close()} onkeydown={(e) => e.key === 'Escape' && close()} href="{resolve('/glossary')}#{entry.id}">Glossary</a></span>{/if}</span>

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
	.more {
		display: block;
		margin-top: 0.3rem;
		color: var(--goal-light);
	}
	.pop b {
		color: var(--goal-light);
	}
</style>
