<script lang="ts">
	let { step, total, onStep }: { step: number; total: number; onStep: (step: number) => void } =
		$props();

	const go = (to: number) => onStep(Math.max(0, Math.min(total - 1, to)));
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
		const t = e.target;
		if (t instanceof HTMLElement && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
		if (e.key === 'ArrowLeft') go(step - 1);
		else if (e.key === 'ArrowRight') go(step + 1);
	}}
/>

<div class="scrub">
	<button type="button" aria-label="Previous step" disabled={step <= 0} onclick={() => go(step - 1)}>
		&#9664;
	</button>
	<div class="dots">
		{#each { length: total } as _, i}
			<button
				type="button"
				class="dot"
				class:on={i <= step}
				class:current={i === step}
				aria-label="Go to step {i + 1}"
				aria-current={i === step ? 'step' : undefined}
				onclick={() => go(i)}
			></button>
		{/each}
	</div>
	<button type="button" aria-label="Next step" disabled={step >= total - 1} onclick={() => go(step + 1)}>
		&#9654;
	</button>
	<span class="label" data-testid="step-label">{step + 1}/{total}</span>
</div>

<style>
	.scrub {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.6rem;
	}
	.dots {
		flex: 1;
		display: flex;
		gap: 0.3rem;
	}
	.dot {
		flex: 1;
		height: 0.4rem;
		min-width: 0.5rem;
		padding: 0;
		border: 0;
		border-radius: 0.2rem;
		background: var(--panel-2);
		cursor: pointer;
		position: relative;
	}
	/* Enlarge the tap target without changing the visual size. */
	.dot::after {
		content: '';
		position: absolute;
		inset: -0.6rem 0;
	}
	.dot.on {
		background: var(--goal-light);
	}
	.dot.current {
		box-shadow: 0 0 0 2px var(--arena), 0 0 0 3px var(--goal-light);
	}
	button:not(.dot) {
		min-width: 2.75rem;
		min-height: 2.75rem;
		border: 0;
		border-radius: 8px;
		background: var(--panel-2);
		color: var(--text);
		font-size: 0.9rem;
		cursor: pointer;
	}
	button:disabled {
		opacity: 0.35;
		cursor: default;
	}
	button:focus-visible {
		outline: 2px solid var(--goal-light);
		outline-offset: 2px;
	}
	.label {
		font-family: var(--font-display);
		font-size: 1.3rem;
		min-width: 3rem;
		text-align: right;
		color: var(--muted);
	}
</style>
