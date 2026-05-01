import { test, expect } from "@playwright/test";
import { NavigationPage } from "../page-objects/navigationPage";

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
});

test('navigate to form page', async ({ page }) => {
  const navigateTo = new NavigationPage(page)

  // Step 1: Navigate to Form Layouts
  await navigateTo.formLayoutsPage()

  // Step 2: Navigate to Datepicker
  await navigateTo.datePickerPage()

  // Step 3: Navigate to Smart Table
  await navigateTo.smartTablePage()

  // Step 4: Navigate to Toast
  await navigateTo.toastPage()

  // Step 5: Navigate to Tooltip
  await navigateTo.tooltipPage()
})