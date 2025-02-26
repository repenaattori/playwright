// @ts-check
import { test, expect } from '@playwright/test';

test('Button is working', async ({ page }) => {
  await page.goto(`file://${process.cwd()}/index.html`);

  // Expect a title "to contain" a substring.
  await expect(page.getByRole('button', {name: 'OK'})).toBeVisible();
  await page.getByRole('button', {name: 'OK'}).click();
  await expect(page.getByRole('heading')).toHaveText('HELLO');
});
