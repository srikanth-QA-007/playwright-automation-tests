import { Locator, Page } from "@playwright/test";

export class NavigationPage {

  readonly page: Page
  readonly formLayoutsMenuItem: Locator
  readonly datePickerMenuItem: Locator
  readonly smartTableMenuItem: Locator
  readonly toastMenuItem: Locator
  readonly tooltipMenuItem: Locator

  constructor(page: Page) {
    this.page = page
    this.formLayoutsMenuItem = page.getByText('Form Layouts', { exact: true })
    this.datePickerMenuItem = page.getByText('Datepicker', { exact: true })
    this.smartTableMenuItem = page.getByText('Smart Table', { exact: true })
    this.toastMenuItem = page.getByText('Toastr', { exact: true })
    this.tooltipMenuItem = page.getByText('Tooltip', { exact: true })
  }

  async formLayoutsPage() {
    console.log('Navigating to Form Layouts')
    await this.page.getByTitle('Forms').click()
    await this.formLayoutsMenuItem.click()
    console.log('Form Layouts done')
  }

  async datePickerPage() {
    console.log('Navigating to Datepicker')
    await this.datePickerMenuItem.click()
    console.log('Datepicker done')
  }

  async smartTablePage() {
    console.log('Navigating to Smart Table')
    await this.page.getByTitle('Tables & Data').click()
    await this.smartTableMenuItem.click()
    await this.page.waitForTimeout(500)
    console.log('Smart Table done')
  }

  async toastPage() {
    console.log('Navigating to Toast')
    await this.page.getByTitle('Modal & Overlays').click()
    await this.page.waitForTimeout(500)
    await this.toastMenuItem.click()
    console.log('Toast done')
  }

  async tooltipPage() {
    console.log('Navigating to Tooltip')
    await this.page.waitForTimeout(500)
    await this.tooltipMenuItem.click()
    console.log('Tooltip done')
  }
}