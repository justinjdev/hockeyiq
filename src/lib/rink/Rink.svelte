<script lang="ts">
	import { RINK } from './geometry';

	const endZoneDots = RINK.faceoffDots.slice(0, 4);
	const neutralDots = RINK.faceoffDots.slice(4);
	const midY = RINK.height / 2;
	const [ourGoalX, theirGoalX] = RINK.goalLineX;
	const creaseR = 6;
	const uid = $props.id();
	const clipId = `rink-clip-${uid}`;
	const boardInset = 0.5; // half the boards stroke, so the stroke is not clipped at the viewBox edge
</script>

<!-- Markings in rink units; the parent supplies <svg viewBox="0 0 200 85">. -->
<g class="rink" aria-hidden="true">
	<defs>
		<clipPath id={clipId}>
			<rect width={RINK.length} height={RINK.height} rx={RINK.cornerRadius} />
		</clipPath>
	</defs>

	<rect class="ice" width={RINK.length} height={RINK.height} rx={RINK.cornerRadius} />

	<g clip-path={`url(#${clipId})`}>
		<line class="red" x1={RINK.redLineX} x2={RINK.redLineX} y1="0" y2={RINK.height} stroke-width="1" />
		{#each RINK.blueLineX as x}
			<line class="blue" x1={x} x2={x} y1="0" y2={RINK.height} stroke-width="1" />
		{/each}
		{#each RINK.goalLineX as x}
			<line class="red thin" x1={x} x2={x} y1="0" y2={RINK.height} stroke-width="0.2" />
		{/each}
	</g>

	<circle class="blue ring" cx={RINK.redLineX} cy={midY} r="15" />
	<circle class="blue dot" cx={RINK.redLineX} cy={midY} r="0.6" />

	{#each endZoneDots as d}
		<circle class="red ring" cx={d.x} cy={d.y} r="15" />
		<circle class="red dot" cx={d.x} cy={d.y} r="1" />
	{/each}
	{#each neutralDots as d}
		<circle class="red dot" cx={d.x} cy={d.y} r="1" />
	{/each}

	<!-- Creases: half circles opening toward center ice. -->
	<path class="crease" d={`M ${ourGoalX} ${midY - creaseR} A ${creaseR} ${creaseR} 0 0 1 ${ourGoalX} ${midY + creaseR} Z`} />
	<path class="crease" d={`M ${theirGoalX} ${midY - creaseR} A ${creaseR} ${creaseR} 0 0 0 ${theirGoalX} ${midY + creaseR} Z`} />

	<!-- Nets sit behind the goal lines. -->
	<rect class="net" x={ourGoalX - 4} y={midY - 3} width="4" height="6" />
	<rect class="net" x={theirGoalX} y={midY - 3} width="4" height="6" />

	<circle class="goalie us" cx="13" cy={midY} r="1.6" />
	<circle class="goalie them" cx="187" cy={midY} r="1.6" />

	<rect
		class="boards"
		x={boardInset}
		y={boardInset}
		width={RINK.length - 2 * boardInset}
		height={RINK.height - 2 * boardInset}
		rx={RINK.cornerRadius - boardInset}
	/>
</g>

<style>
	.ice {
		fill: var(--ice);
	}
	.boards {
		fill: none;
		stroke: var(--boards, #5b6b7b);
		stroke-width: 1;
	}
	.red {
		stroke: var(--line-red);
	}
	.blue {
		stroke: var(--line-blue);
	}
	.ring {
		fill: none;
		stroke-width: 0.35;
	}
	.dot.red {
		fill: var(--line-red);
		stroke: none;
	}
	.dot.blue {
		fill: var(--line-blue);
		stroke: none;
	}
	.thin {
		opacity: 0.9;
	}
	.crease {
		fill: color-mix(in srgb, var(--line-blue) 22%, transparent);
		stroke: var(--line-red);
		stroke-width: 0.3;
	}
	.net {
		fill: color-mix(in srgb, var(--panel-2) 12%, var(--ice));
		stroke: var(--muted);
		stroke-width: 0.3;
	}
	.goalie {
		stroke: var(--arena);
		stroke-width: 0.3;
	}
	.goalie.us {
		fill: var(--us);
	}
	.goalie.them {
		fill: var(--them);
	}
</style>
