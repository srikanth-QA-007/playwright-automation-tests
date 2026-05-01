import { test, expect } from '@playwright/test';

test('Conduit - Create and Delete Article', async ({ page }) => {

  // Step 1: Navigate to Conduit App
  await page.goto('https://conduit.bondaracademy.com/');

  // Step 2: Sign in
  await page.getByText('Sign in').click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@06gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.locator('app-layout-header').getByRole('link', { name: 'srikanth' })).toBeVisible();

  // Step 3: Create a new article
  const articleTitle = 'Los Angeles';
  const articleAbout = 'Los Angeles is the second largest city in the United States';
  const articleBody = 'Los Angeles is a city in California, USA. It is known for Hollywood and beautiful beaches.';

  await page.getByText('New Article').click();
  await page.getByPlaceholder('Article Title').fill(articleTitle);
  await page.getByPlaceholder("What's this article about?").fill(articleAbout);
  await page.getByPlaceholder('Write your article (in markdown)').fill(articleBody);

  // Step 4: Publish the article
  await page.getByRole('button', { name: 'Publish Article' }).click();
  await page.waitForURL(/\/article\//);
  await expect(page.locator('h1')).toHaveText(articleTitle);

  // Step 5: Validate article on home page
  await page.getByText('Home').click();
  await page.getByText('Global Feed').click();
  await expect(page.getByRole('heading', { name: articleTitle })).toBeVisible();

  // Step 6: Delete the article from profile
  await page.locator('app-layout-header').getByRole('link', { name: 'srikanth' }).click();
  await page.getByText('My Posts').click();
  await page.getByRole('heading', { name: articleTitle }).click();
  await page.waitForURL(/\/article\//);
  await page.getByRole('button', { name: 'Delete Article' }).first().click();
  await page.waitForURL('/');

  // Step 7: Validate article is deleted
  await page.getByText('Global Feed').click();
  await expect(page.getByRole('heading', { name: articleTitle })).not.toBeVisible();

});