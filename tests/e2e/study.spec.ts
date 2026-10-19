import { open } from './helpers';
import { expect, test } from '@playwright/test';
import bo from '../../src/lib/content/plays/breakout/bo-standard';

const translate = (s: string | null) => {
	const m = /translate\(\s*([-\d.]+)[ ,]+([-\d.]+)\s*\)/.exec(s ?? '');
	return m ? { x: Number(m[1]), y: Number(m[2]) } : null;
};

test('next button advances the step and changes the notes', async ({ page }) => {
	await open(page, '/play/bo-standard?as=rw&step=1');
	const where = page.locator('.notes h3', { hasText: 'Where to be' }).locator('+ p');
	const before = await where.innerText();
	await expect(page.getByTestId('step-label')).toHaveText(`1/${bo.steps.length}`);

	await page.getByRole('button', { name: 'Next step' }).click();

	await expect(page).toHaveURL(/step=2/);
	await expect(where).not.toHaveText(before);
});

test('tapping a rink player selects that position', async ({ page }) => {
	await open(page, '/play/bo-standard?as=rw&step=1');
	await expect(page.getByRole('button', { name: 'RW', exact: true })).toHaveAttribute('aria-pressed', 'true');

	await page.locator('[data-slot="lw"]').click();

	await expect(page.getByRole('button', { name: 'LW', exact: true })).toHaveAttribute('aria-pressed', 'true');
	await expect(page).toHaveURL(/as=lw/);
});

test('rapid arrow keys settle on the last step with matching positions', async ({ page }) => {
	await open(page, '/play/bo-standard?as=rw&step=1');
	await expect(page.getByTestId('step-label')).toHaveText(`1/${bo.steps.length}`);

	for (let i = 0; i < bo.steps.length + 1; i++) await page.keyboard.press('ArrowRight');

	await expect(page.getByTestId('step-label')).toHaveText(`${bo.steps.length}/${bo.steps.length}`);
	const want = bo.steps[bo.steps.length - 1].positions.rw;
	const rw = page.locator('[data-slot="rw"]');
	await expect.poll(async () => translate(await rw.getAttribute('transform'))?.x).toBeCloseTo(want.x, 1);
	await expect.poll(async () => translate(await rw.getAttribute('transform'))?.y).toBeCloseTo(want.y, 1);
});

test('client-side navigation to a play with fewer steps does not crash', async ({ page }) => {
	const errors: string[] = [];
	page.on('pageerror', (e) => errors.push(e.message));
	await open(page, `/play/bo-standard?as=rw&step=${bo.steps.length}`);
	await expect(page.getByTestId('step-label')).toHaveText(`${bo.steps.length}/${bo.steps.length}`);

	// A same-route link reuses the page component, so the old step briefly meets the new play.
	await page.evaluate(() => {
		const a = document.createElement('a');
		a.href = 'dz-net-front-battle';
		a.textContent = 'next play';
		a.id = 'reuse-link';
		document.body.append(a);
	});
	await page.locator('#reuse-link').click();

	await expect(page).toHaveURL(/dz-net-front-battle/);
	await expect(page.getByTestId('step-label')).toHaveText(/^1\/3$/);
	expect(errors).toEqual([]);
});

test('Back after leaving restores the study step and position', async ({ page }) => {
	await open(page, '/play/bo-standard?as=rw&step=1');
	await page.getByRole('button', { name: 'Next step' }).click();
	await page.getByRole('button', { name: 'Next step' }).click();
	await expect(page).toHaveURL(/step=3/);

	await page.getByRole('link', { name: 'Quiz me' }).click();
	await expect(page).toHaveURL(/\/quiz/);
	await page.goBack();

	await expect(page.getByTestId('step-label')).toHaveText(`3/${bo.steps.length}`);
	await expect(page.getByRole('button', { name: 'RW', exact: true })).toHaveAttribute('aria-pressed', 'true');
	await expect(page).toHaveURL(/as=rw&step=3/);
});
