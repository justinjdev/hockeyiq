import type { Page } from '@playwright/test';

/** Navigates and waits until the app has hydrated, so clicks and keys reach live handlers. */
export async function open(page: Page, path: string) {
	// Relative to baseURL (which carries BASE_PATH), so strip the leading slash.
	await page.goto(path.replace(/^\//, ''));
	await page.locator('html[data-hydrated]').waitFor({ state: 'attached' });
}
