<script lang="ts">
	import type { Slot } from '#lib/content/types.ts';

	let {
		slots,
		selected,
		mastered = new Set<string>(),
		onSelect
	}: {
		slots: Slot[];
		selected: string;
		mastered?: Set<string>;
		onSelect: (slot: string) => void;
	} = $props();
</script>

<div class="chips" role="group" aria-label="Position">
	{#each slots as s (s.id)}
		<button
			type="button"
			class="chip"
			class:on={s.id === selected}
			aria-pressed={s.id === selected}
			onclick={() => onSelect(s.id)}
		>
			{s.home}
			{#if mastered.has(s.id)}<span class="badge" title="Mastered" aria-label="mastered">&#10003;</span>{/if}
		</button>
	{/each}
</div>

<style>
	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}
	.chip {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
		min-height: 2.5rem;
		padding: 0 0.9rem;
		border: 0;
		border-radius: 999px;
		background: var(--panel-2);
		color: var(--text);
		font: inherit;
		font-weight: 700;
		cursor: pointer;
	}
	.chip.on {
		background: var(--goal-light);
		color: #111;
	}
	.chip:focus-visible {
		outline: 2px solid var(--text);
		outline-offset: 2px;
	}
	.badge {
		display: inline-grid;
		place-items: center;
		width: 1.1rem;
		height: 1.1rem;
		border-radius: 50%;
		background: var(--us);
		color: #fff;
		font-size: 0.7rem;
	}
	.on .badge {
		background: #111;
		color: var(--goal-light);
	}
</style>
