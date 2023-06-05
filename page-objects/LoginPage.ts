import { expect, Locator, Page } from '@playwright/test'

export {expect, Locator, Page} from '@playwright/test'

const url: string = 'https://admin.forlong.ponedev.net/login'
const LogInButtonLocator : string = '#login-submit'
const userNameFieldLocator : string = '#username'
const passwordFieldLocator : string = '#password'
const loginPageTitle : string = 'partneringONE® - Admin'
const errorMessageLocator : string = '.alert__title'
const errorMessageText : string = 'Incorrect username or password.'

export class LoginPage{

    readonly page: Page
    readonly userNameField: Locator
    readonly password: Locator
    readonly logInButton: Locator
    readonly errorMessage: Locator
    //readonly PageTitle:Locator

    constructor(page: Page){
        this.page = page
        this.userNameField = page.locator(userNameFieldLocator)
        this.password = page.locator(passwordFieldLocator)
        this.logInButton = page.locator(LogInButtonLocator)
        this.errorMessage = page.locator(errorMessageLocator)
        //this.PageTitle = page.locator()
    }

    async GoToLoginPage(){
       await this.page.goto(url)
       await expect(this.page).toHaveTitle(loginPageTitle)
    }

    async Login(userName : string, userPassword: string){
        await this.userNameField.type(userName)
        await this.password.type(userPassword)
        await this.logInButton.click()
    }

    async CheckErrorMessage(){
        await expect(this.errorMessage).toContainText(errorMessageText)
    }


}