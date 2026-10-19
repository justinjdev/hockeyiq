import { open } from './helpers';
import { expect, test } from '@playwright/test';

test('unknown pages show the styled 404 with a link home', async ({ page }) => {
	await open(page, '/no-such-page');
	await expect(page.locator('.status')).toHaveText('404');
	await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
	await page.getByRole('link', { name: 'Back to the plays' }).click();
	await expect(page.locator('h1').first()).not.toHaveText('Page not found');
	expect(new URL(page.url()).pathname).toBe(`${process.env.BASE_PATH ?? ''}/`);
});
