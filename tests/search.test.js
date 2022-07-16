import { expect, test } from '@playwright/test';

test('main page has basic structure', async ({ page }) => {
	await page.goto('/');
	expect(await page.locator('.query').fill('john'))
});