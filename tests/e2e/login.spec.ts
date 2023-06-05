import {test, expect, Page}from "@playwright/test"
import { LoginPage } from "../../page-objects/LoginPage"

const userName : string = 'uladzimir.karseka@kruschecompany.com'
const userPassword :string = 'Amsterdam64'
const wrongPassword : string = 'akjsdhkmkajhshdk'

test.describe('LogIn/LogOut flow', () => {
    let loginPage : LoginPage
    

    test.beforeEach(async ({page}) => {
        loginPage = new LoginPage(page)
        await loginPage.GoToLoginPage()
    })

    test('Check Login',async () => {
        await loginPage.Login(userName,userPassword)  
    })

    test('Check wrong password/login error message',async () => {
        await loginPage.Login(userName,wrongPassword)  
        await loginPage.CheckErrorMessage()
    })
    
})