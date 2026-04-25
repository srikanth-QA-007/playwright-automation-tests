import { test, expect } from '@playwright/test';
 
 
test('Conduit - Create and Delete Article', async ({ page }) => {
 
  // STEP 1: Open the Conduit App
 
  await page.goto('https://conduit.bondaracademy.com/');
  await page.waitForLoadState('networkidle');
  console.log(' Step 1: Opened Conduit App');
 
 
  // STEP 2: Sign In with credentials

  await page.getByText('Sign in').click();
  await page.waitForLoadState('networkidle');
 
  await page.getByRole('textbox', { name: 'Email' }).fill('test@06gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Welcome@123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.waitForLoadState('networkidle');
 
  await expect(page.locator('app-layout-header').getByRole('link', { name: 'srikanth' })).toBeVisible();
  console.log(' Step 2: Signed in successfully');
 
 
 // STEP 3: Fill the New Article Form
 
  const articleTitle = 'Los Angeles';
  const articleAbout = 'Los Angeles is the second largest city in the United States';
  const articleBody  = 'Los Angeles is a city in California, USA. It is known for Hollywood and beautiful beaches.';
 
  await page.getByText('New Article').click();
  await page.waitForLoadState('networkidle');
 
  await page.getByPlaceholder('Article Title').fill(articleTitle);
  await page.getByPlaceholder("What's this article about?").fill(articleAbout);
  await page.getByPlaceholder('Write your article (in markdown)').fill(articleBody);
 
  console.log(`  Article Title: ${articleTitle}`);
  console.log(' Step 3: Article form filled successfully');
 
  // STEP 4: Publish the Article and Validate

 
  await page.getByRole('button', { name: 'Publish Article' }).click();
 
  //  Wait for URL to change to article page
  await page.waitForURL(/\/article\//);
  await page.waitForLoadState('networkidle');
 
  // Validate h1 heading on article page
  await expect(page.locator('h1')).toHaveText(articleTitle);
  console.log(' Step 4: Article published and validated successfully');
 
 
  // STEP 5: Go to Home Page and Validate Article

 
  await page.getByText('Home').click();
  await page.waitForURL('/');
  await page.waitForLoadState('networkidle');
 
  await page.getByText('Global Feed').click();
  await page.waitForLoadState('networkidle');
 
  await expect(page.getByRole('heading', { name: articleTitle })).toBeVisible();
  console.log(' Step 5: Article is visible on Home page - Validated!');
 
 
  // STEP 6: Go to Profile and Delete the Article
 
  //  Target nav header link only to avoid strict mode violation
  await page.locator('app-layout-header').getByRole('link', { name: 'srikanth' }).click();
  await page.waitForURL(/\/profile\//);
  await page.waitForLoadState('networkidle');
 
  await page.getByText('My Posts').click();
  await page.waitForLoadState('networkidle');
 
  await page.getByRole('heading', { name: articleTitle }).click();
  await page.waitForURL(/\/article\//);
  await page.waitForLoadState('networkidle');
 
 await page.getByRole('button', { name: 'Delete Article' }).first().click();
 
  //  Wait for redirect back to home after deletion
  await page.waitForURL('/');
  await page.waitForLoadState('networkidle');
  console.log(' Step 6: Article deleted successfully');
 
 
  // STEP 7: Validate Article is Deleted on Home
 
  await page.getByText('Global Feed').click();
  await page.waitForLoadState('networkidle');
 
  //  Validate article is NO longer visible
  await expect(page.getByRole('heading', { name: articleTitle })).not.toBeVisible();
  console.log(' Step 7: Article deletion validated on Home page!');
  console.log(' All steps completed successfully!');
 
});