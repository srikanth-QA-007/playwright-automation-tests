import { test, expect } from '@playwright/test';

test('IoT Dashboard - Forms and Smart Table Interaction', async ({ page }) => {

  // STEP 1: Open the IoT Dashboard URL
  await page.goto('/pages/iot-dashboard');
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/iot-dashboard/);
  console.log(' Step 1: Opened IoT Dashboard');

  // STEP 2: Click Forms > Form Layouts
  await page.getByText('Forms').click();
  await page.waitForTimeout(500);
  await page.getByText('Form Layouts').click();
  await page.waitForLoadState('networkidle');
  console.log(' Step 2: Navigated to Form Layouts');

  // STEP 3: Fill Email & Password in "Using the Grid" + select Option 2
  const randomEmail = `testuser${Math.floor(Math.random() * 10000)}@example.com`;
  const randomPassword = `Pass${Math.floor(Math.random() * 100000)}!`;

  const usingTheGrid = page.locator('nb-card', { hasText: 'Using the Grid' });
  await usingTheGrid.getByRole('textbox', { name: 'Email' }).fill(randomEmail);
  await usingTheGrid.getByRole('textbox', { name: 'Password' }).fill(randomPassword);
   await usingTheGrid.locator('nb-radio').filter({ hasText: 'Option 2' }).locator('span.text').click();
  await page.waitForTimeout(500);
  console.log('Step 3: Filled form and selected Option 2');

  // STEP 4: Go back to Home Page
  await page.getByText('IoT Dashboard').click();
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/iot-dashboard/);
  console.log(' Step 4: Back to Home Page');

  // STEP 5: Click Tables & Data > Smart Table
  await page.getByText('Tables & Data').click();
  await page.waitForTimeout(500);
  await page.getByText('Smart Table').click();
  await page.waitForLoadState('networkidle');
  console.log(' Step 5: Navigated to Smart Table');

  // STEP 6: Fill "Jcob" in First Name
  const firstNameInput = page.locator('input[placeholder="First Name"]');
  await firstNameInput.click();
  await firstNameInput.fill('Jacob');
  await firstNameInput.press('Enter');
  await page.waitForTimeout(1000);
  console.log(' Step 6: Entered Jacob in First Name');

  // STEP 7: Go back to Home Page
  await page.getByText('IoT Dashboard').click();
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(/iot-dashboard/);
  console.log(' Step 7: Back to Home Page');

});