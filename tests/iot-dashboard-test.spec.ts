import { test, expect } from '@playwright/test';

test('IoT Dashboard - Forms and Smart Table Interaction', async ({ page }) => {

  // Step 1: Navigate to IoT Dashboard
  await page.goto('/pages/iot-dashboard');
  await expect(page).toHaveURL(/iot-dashboard/);

  // Step 2: Navigate to Form Layouts
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();

  // Step 3: Fill in the Using the Grid form
  const randomEmail = `testuser${Math.floor(Math.random() * 10000)}@example.com`;
  const randomPassword = `Pass${Math.floor(Math.random() * 100000)}!`;

  const usingTheGrid = page.locator('nb-card', { hasText: 'Using the Grid' });
  await usingTheGrid.getByRole('textbox', { name: 'Email' }).fill(randomEmail);
  await usingTheGrid.getByRole('textbox', { name: 'Password' }).fill(randomPassword);
  await usingTheGrid.locator('nb-radio').filter({ hasText: 'Option 2' }).locator('span.text').click();

  // Step 4: Go back to IoT Dashboard
  await page.getByText('IoT Dashboard').click();
  await expect(page).toHaveURL(/iot-dashboard/);

  // Step 5: Navigate to Smart Table
  await page.getByText('Tables & Data').click();
  await page.getByText('Smart Table').click();

  // Step 6: Search by First Name
  const firstNameInput = page.locator('input[placeholder="First Name"]');
  await firstNameInput.fill('Jacob');
  await firstNameInput.press('Enter');

  // Step 7: Go back to IoT Dashboard
  await page.getByText('IoT Dashboard').click();
  await expect(page).toHaveURL(/iot-dashboard/);

});