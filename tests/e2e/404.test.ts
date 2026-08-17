import { expect, test } from '@playwright/test';

test.describe('404 page', () => {
    test('returns 404 and displays the error heading', async ({ page }) => {
        const response = await page.goto('/this-page-does-not-exist');

        expect(response?.status()).toBe(404);

        await expect(page).toHaveTitle('Page Not Found \u2014 Astro');
        await expect(page.locator('h1')).toContainText('404');
    });
});
