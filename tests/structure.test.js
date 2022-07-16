import { expect, test } from '@playwright/test';

const testForBasicStructure = async(page) => {
	expect(await page.locator('header').count() === 1);
	expect(await page.locator('main').count() === 1);
	expect(await page.locator('footer').count() === 1);
}

test('main page has basic structure', async ({ page }) => {
	await page.goto('/');
	await testForBasicStructure(page);
});

test('explore has basic structure', async ({ page }) => {
	await page.goto('/explore');
	await testForBasicStructure(page);
});

test('reference has basic structure', async ({ page }) => {
	await page.goto('/reference');
	await testForBasicStructure(page);
});

test('learn has basic structure', async ({ page }) => {
	await page.goto('/learn');
	await testForBasicStructure(page);
});
