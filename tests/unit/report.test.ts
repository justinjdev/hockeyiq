import { describe, expect, it } from 'vitest';
import { reportIssueUrl } from '../../src/lib/report';

const params = (u: string) => new URL(u).searchParams;

describe('reportIssueUrl', () => {
	const ctx = {
		kind: 'play' as const,
		id: 'bo-standard',
		title: 'Breakout & "Standard"',
		stepId: 'regroup',
		stepNumber: 2,
		slot: 'rw',
		pageUrl: 'https://x.test/hockeyiq/play/bo-standard?as=rw&step=2'
	};

	it('targets the repo issue form with the content label', () => {
		const u = reportIssueUrl(ctx);
		expect(u.startsWith('https://github.com/justinjdev/hockeyiq/issues/new?')).toBe(true);
		expect(params(u).get('labels')).toBe('content');
	});

	it('encodes title and body so special characters round-trip', () => {
		const u = reportIssueUrl(ctx);
		expect(u).not.toMatch(/[ "]/);
		expect(params(u).get('title')).toBe('Content: Breakout & "Standard", step 2, RW');
		expect(params(u).getAll('body')).toHaveLength(1);
	});

	it('includes id, step id and number, position, page url and prompts', () => {
		const body = params(reportIssueUrl(ctx)).get('body')!;
		expect(body).toContain('bo-standard');
		expect(body).toContain('regroup');
		expect(body).toContain('#2');
		expect(body).toContain('RW');
		expect(body).toContain(ctx.pageUrl);
		expect(body).toContain('What looks wrong?');
		expect(body).toContain('What should it be (and source, if you have one)?');
	});

	it('omits step and position for lessons', () => {
		const u = reportIssueUrl({ kind: 'lesson', id: 'gap-control', title: 'Gap control', pageUrl: 'https://x.test/learn/gap-control' });
		expect(params(u).get('title')).toBe('Content: Gap control');
		const body = params(u).get('body')!;
		expect(body).toContain('Lesson: gap-control');
		expect(body).not.toMatch(/Step:|Position:/);
	});
});
