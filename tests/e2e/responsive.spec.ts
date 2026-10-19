import { expect, test } from '@playwright/test';
import { comparisons } from '../../src/lib/content/comparisons';

test.use({ viewport: { width: 360, height: 740 } });

const pages: { path: string; stacked?: string }[] = [
	{ path: '/' },
	{ path: '/play/bo-standard', stacked: '.panel' },
	{ path: '/play/bo-standard/quiz', stacked: '.panel' },
	{ path: '/learn/shoulder-checks' },
	{ path: '/glossary' }
];
if (comparisons.length) pages.push({ path: `/compare/${comparisons[0].id}` });

for (const { path, stacked } of pages) {
	test(`no horizontal scroll at 360px: ${path}`, async ({ page }) => {
		await page.goto(path);
		await expect(page.locator('h1')).toBeVisible();
		const width = await page.evaluate(() => document.documentElement.scrollWidth);
		expect(width).toBeLessThanOrEqual(360);

		if (stacked) {
			const rink = await page.locator('svg.canvas').first().boundingBox();
			const panel = await page.locator(stacked).first().boundingBox();
			expect(rink && panel && panel.y).toBeGreaterThanOrEqual(rink!.y + rink!.height - 0.5);
		}
	});
}

test('term popover stays inside the viewport and links to the glossary', async ({ page }) => {
	await page.goto('/play/bo-standard');
	const term = page.locator('.term button').first();
	await term.click();
	const pop = page.getByRole('tooltip');
	await expect(pop).toBeVisible();
	const box = await pop.boundingBox();
	expect(box!.x).toBeGreaterThanOrEqual(0);
	expect(box!.x + box!.width).toBeLessThanOrEqual(360);
	await expect(pop.getByRole('link')).toHaveAttribute('href', /\/glossary#[\w-]+$/);
});
