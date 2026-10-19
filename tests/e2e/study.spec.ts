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
	await page.waitForTimeout(700);

	await expect(page.getByTestId('step-label')).toHaveText(`${bo.steps.length}/${bo.steps.length}`);
	const want = bo.steps[bo.steps.length - 1].positions.rw;
	const got = translate(await page.locator('[data-slot="rw"]').getAttribute('transform'));
	expect(got?.x).toBeCloseTo(want.x, 1);
	expect(got?.y).toBeCloseTo(want.y, 1);
});
