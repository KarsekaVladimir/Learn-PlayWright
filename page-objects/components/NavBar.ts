import { expect, Locator, Page } from '@playwright/test'

export class NavBar {
  readonly page: Page
  readonly searchtLink: Locator
  readonly shortlistLink: Locator

  constructor(page: Page) {
    this.page = page
    this.searchtLink = page.locator('aria-label="Shortlist"')
    this.shortlistLink = page.locator('aria-label="Shortlist"')
  }

  async menuClick(menuName: string) {
    switch (menuName) {
      case 'Search': {
        await this.searchtLink.click()
        break
      }
      case 'Shortlist': {
        await this.shortlistLink.click()
        break
      }
    }
  }
}
