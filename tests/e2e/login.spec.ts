import { test, expect, Page } from '@playwright/test'
import { NavBar } from '../../page-objects/components/NavBar'
import { LoginPage } from '../../page-objects/LoginPage'

const userName: string = 'uladzimir.karseka@kruschecompany.com'
const userPassword: string = 'Amsterdam64'
const wrongPassword: string = 'akjsdhkmkajhshdk'

test.describe('LogIn/LogOut flow', () => {
  let loginPage: LoginPage
  let navBar: NavBar

  test.beforeEach(async ({ page }) => {
    navBar = new NavBar(page)
    loginPage = new LoginPage(page)
    await loginPage.GoToLoginPage()
  })

  test('Check Login', async () => {
    await loginPage.Login(userName, userPassword)
  })

  test('Check wrong password/login error message', async ({ page }) => {
    await page.pause()
    await loginPage.Login(userName, wrongPassword)
    await loginPage.CheckErrorMessage()
  })

  test('Go to Shortlist overwiew page', async ({ page }) => {
    await navBar.menuClick('Search')
  })
})
