<script lang="ts">
	import { tick } from 'svelte';
	import type { DecisionQuizDef, Play } from '#lib/content/types.ts';
	import PlayCanvas from '#lib/play/PlayCanvas.svelte';
	import { parseRichText } from '#lib/text/richText.ts';
	import RichText from '#lib/text/RichText.svelte';

	type Props = {
		play: Play;
		step: number;
		slot: string;
		def: DecisionQuizDef;
		last: boolean;
		onResult: (correct: boolean) => void;
		onNext: () => void;
	};

	let { play, step, slot, def, last, onResult, onNext }: Props = $props();

	let chosen = $state<number | null>(null);
	let nextButton: HTMLButtonElement | undefined = $state();

	// Option buttons can't contain Term buttons, so jargon is plain until the answer is revealed.
	const plain = (s: string) =>
		parseRichText(s)
			.map((seg) => seg.text)
			.join('');

	function choose(i: number) {
		if (chosen !== null) return;
		chosen = i;
		onResult(def.options[i].correct);
		// The clicked option button is replaced, so focus would fall to <body>; park it on Next.
		void tick().then(() => nextButton?.focus());
	}
</script>

<div class="layout">
	<section class="stage">
		<PlayCanvas {play} {step} selected={slot} hideHints={chosen === null} />
	</section>

	<aside class="panel">
		<h2><RichText text={def.prompt} /></h2>

		<ul class="options" aria-live="polite">
			{#each def.options as opt, i (i)}
				<li>
					{#if chosen === null}
						<button type="button" class="opt" onclick={() => choose(i)}>{plain(opt.text)}</button>
					{:else}
						<div class="opt done" class:good={opt.correct} class:bad={!opt.correct} class:picked={i === chosen}>
							<p class="mark">
								<span aria-hidden="true">{opt.correct ? '✓' : '✗'}</span>
								{opt.correct ? 'Right' : 'Wrong'}{i === chosen ? ' (your pick)' : ''}
							</p>
							<p class="text"><RichText text={opt.text} /></p>
							<p class="why"><RichText text={opt.why} /></p>
						</div>
					{/if}
				</li>
			{/each}
		</ul>

		{#if chosen !== null}
			<button type="button" class="btn primary" bind:this={nextButton} onclick={onNext}>{last ? 'See score' : 'Next'}</button>
		{/if}
	</aside>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 1.25rem;
	}
	@media (min-width: 900px) {
		.layout {
			grid-template-columns: 2.2fr 1fr;
			align-items: start;
		}
	}
	.stage,
	.panel {
		min-width: 0;
	}
	.panel {
		background: var(--panel);
		border-radius: 12px;
		padding: 1rem;
	}
	h2 {
		font-size: 1.5rem;
		font-weight: 500;
		line-height: 1.2;
		color: var(--goal-light);
		margin-bottom: 0.8rem;
	}
	.options {
		list-style: none;
		margin: 0 0 1rem;
		padding: 0;
		display: grid;
		gap: 0.5rem;
	}
	.opt {
		display: block;
		width: 100%;
		padding: 0.65rem 0.8rem;
		border: 0;
		border-radius: 8px;
		background: var(--panel-2);
		color: var(--text);
		font: inherit;
		text-align: left;
	}
	button.opt {
		cursor: pointer;
		min-height: 2.75rem;
	}
	button.opt:hover {
		outline: 1px solid var(--goal-light);
	}
	.opt.good {
		background: color-mix(in srgb, #2e9d58 24%, var(--panel-2));
		border-left: 4px solid #2e9d58;
	}
	.opt.bad {
		background: color-mix(in srgb, var(--them) 22%, var(--panel-2));
		border-left: 4px solid var(--them);
	}
	.opt.picked {
		outline: 2px solid var(--text);
	}
	.opt p {
		margin: 0;
	}
	.mark {
		font-size: 0.8rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}
	.text {
		font-weight: 700;
		margin-top: 0.15rem !important;
	}
	.why {
		margin-top: 0.3rem !important;
		line-height: 1.45;
		font-size: 0.95rem;
	}
	.btn {
		min-height: 2.75rem;
		padding: 0 1.4rem;
		border: 0;
		border-radius: 8px;
		background: var(--goal-light);
		color: #111;
		font: inherit;
		font-weight: 700;
		cursor: pointer;
	}
	.opt:focus-visible,
	.btn:focus-visible {
		outline: 2px solid var(--text);
		outline-offset: 2px;
	}
</style>
