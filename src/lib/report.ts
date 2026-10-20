export type ReportContext = {
	kind: 'play' | 'lesson';
	id: string;
	title: string;
	stepId?: string;
	stepNumber?: number;
	slot?: string;
	pageUrl: string;
};

const NEW_ISSUE = 'https://github.com/justinjdev/hockeyiq/issues/new';

/** Pre-filled GitHub issue for flagging wrong content. Only carries what is already on the page. */
export function reportIssueUrl(ctx: ReportContext): string {
	const position = ctx.slot?.toUpperCase();
	const title = [
		`Content: ${ctx.title}`,
		ctx.stepNumber !== undefined ? `step ${ctx.stepNumber}` : undefined,
		position
	]
		.filter(Boolean)
		.join(', ');

	const lines = [
		`${ctx.kind === 'play' ? 'Play' : 'Lesson'}: ${ctx.id}`,
		ctx.stepId !== undefined || ctx.stepNumber !== undefined
			? `Step: ${[ctx.stepId, ctx.stepNumber !== undefined ? `(#${ctx.stepNumber})` : undefined].filter(Boolean).join(' ')}`
			: undefined,
		position ? `Position: ${position}` : undefined,
		`Page: ${ctx.pageUrl}`,
		'',
		'**What looks wrong?**',
		'',
		'',
		'**What should it be (and source, if you have one)?**',
		''
	].filter((l) => l !== undefined);

	return `${NEW_ISSUE}?title=${encodeURIComponent(title)}&body=${encodeURIComponent(lines.join('\n'))}&labels=content`;
}
