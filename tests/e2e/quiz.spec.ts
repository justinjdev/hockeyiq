import { expect, test, type Page } from '@playwright/test';
import bo from '../../src/lib/content/plays/breakout/bo-standard';
import { listQuizItems } from '../../src/lib/quiz/quizItems';
import { plainText } from '../../src/lib/text/richText';
import { regionCenter } from '../../src/lib/quiz/regions';

const rwItems = listQuizItems(bo, 'rw');

async function dragRwToTarget(page: Page, target: { x: number; y: number }) {
	const handle = page.locator('[data-slot="rw"]');
	const from = await handle.boundingBox();
	const svg = await page.locator('svg.canvas').first().boundingBox();
	if (!from || !svg) throw new Error('rink not rendered');
	// viewBox 200x85 scaled uniformly to fit the svg box and centered.
	const k = Math.min(svg.width / 200, svg.height / 85);
	const ox = svg.x + (svg.width - 200 * k) / 2;
	const oy = svg.y + (svg.height - 85 * k) / 2;
	await page.mouse.move(from.x + from.width / 2, from.y + from.height / 2);
	await page.mouse.down();
	await page.mouse.move(ox + target.x * k, oy + target.y * k, { steps: 8 });
	await page.mouse.up();
}

async function answerRw(page: Page, kind: 'drag' | 'decision', step: number) {
	if (kind === 'drag') {
		const def = bo.steps[step].quiz!.rw!.drag!;
		await dragRwToTarget(page, regionCenter(def.target));
		await page.getByRole('button', { name: 'Check' }).click();
		await expect(page.getByRole('status')).toContainText('In position');
	} else {
		const def = bo.steps[step].quiz!.rw!.decision!;
		const good = def.options.findIndex((o) => o.correct);
		await page.getByRole('button', { name: plainText(def.options[good].text) }).click();
		const done = page.locator('.opt.done');
		await expect(done).toHaveCount(def.options.length);
		await expect(done.filter({ hasText: 'Right' })).toHaveCount(1);
		for (const o of def.options) await expect(page.getByText(plainText(o.why).slice(0, 40))).toBeVisible();
	}
	await page.getByRole('button', { name: /Next|See score/ }).click();
}

test('RW quiz: decision shows explanations, drag grades correct, mastery persists', async ({ page }) => {
	expect(rwItems.some((i) => i.kind === 'drag')).toBe(true);
	expect(rwItems.some((i) => i.kind === 'decision')).toBe(true);
	await page.goto('/play/bo-standard/quiz?as=rw');

	for (const item of rwItems) await answerRw(page, item.kind, item.step);

	await expect(page.getByText(`${rwItems.length}/${rwItems.length}`)).toBeVisible();
	await expect(page.getByText('RW mastered')).toBeVisible();

	await page.goto('/play/bo-standard');
	const chip = (name: string) => page.locator('.chips .chip', { hasText: new RegExp(`^\\s*${name}\\s*(✓)?\\s*$`) });
	await expect(chip('RW').getByLabel('mastered')).toBeVisible();
	await expect(page.getByLabel('mastered')).toHaveCount(1);
});

test('a wrong answer does not master the slot', async ({ page }) => {
	await page.goto('/play/bo-standard/quiz?as=rw');
	for (const item of rwItems) {
		if (item.kind === 'decision') {
			const def = bo.steps[item.step].quiz!.rw!.decision!;
			const bad = def.options.find((o) => !o.correct)!;
			await page.getByRole('button', { name: plainText(bad.text) }).click();
			await page.getByRole('button', { name: /Next|See score/ }).click();
		} else {
			await answerRw(page, 'drag', item.step);
		}
	}
	await page.goto('/play/bo-standard');
	await expect(page.getByLabel('mastered')).toHaveCount(0);
});

test('quiz works with localStorage unavailable and logs no errors', async ({ page }) => {
	const errors: string[] = [];
	page.on('pageerror', (e) => errors.push(e.message));
	page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
	await page.addInitScript(() => {
		Object.defineProperty(window, 'localStorage', {
			get() {
				throw new DOMException('denied', 'SecurityError');
			}
		});
	});
	await page.goto('/play/bo-standard/quiz?as=rw');
	const first = rwItems[0];
	await answerRw(page, first.kind, first.step);

	await expect(page.getByText(/Question 2 of|Final score/)).toBeVisible();
	expect(errors).toEqual([]);
});
