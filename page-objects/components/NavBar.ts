import { expect, Locator, Page } from '@playwright/test'

const searchtLinkLocator: string = '.data-testid="SearchIcon"'
const shortlistLinkLocator: string = '.aria-label="Shortlist"'

export class NavBar {
  readonly page: Page
  readonly searchtLink: Locator
  readonly shortlistLink: Locator

  constructor(page: Page) {
    this.page = page
    this.searchtLink = page.locator(searchtLinkLocator)
    this.shortlistLink = page.locator(shortlistLinkLocator)
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
