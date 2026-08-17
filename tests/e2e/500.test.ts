import { expect, test } from '@playwright/test';

test.describe('500 page', () => {
    test('returns 500 and displays the error heading', async ({ page }) => {
        const response = await page.goto('/500');

        expect(response?.status()).toBe(500);

        await expect(page).toHaveTitle('Server Error \u2014 Astro');
        await expect(page.locator('h1')).toContainText('500');
    });
});
