import type { Page } from '@playwright/test';

/** Navigates and waits until the app has hydrated, so clicks and keys reach live handlers. */
export async function open(page: Page, path: string) {
	await page.goto(path);
	await page.locator('html[data-hydrated]').waitFor({ state: 'attached' });
}
