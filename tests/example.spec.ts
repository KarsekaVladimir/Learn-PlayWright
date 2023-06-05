import {test, expect}from "@playwright/test"

const url = 'https://admin.forlong.ponedev.net/login'
const LogInButtonLocator  = '#login-submit'
const userNameFieldLocator = '#username'
const passwordLocator = '#password'
const userName = 'uladzimir.karseka@kruschecompany.com'
const password = 'Amsterdam64'
const wrongPassword = 'akjsdhkmkajhshdk'

test.describe('Login Page test suite', ()=>{
    test.beforeEach( async ({page}) => {
        await page.goto(url)
        //await page.pause()
    })

    test('Check title loginPage',async ({page}) => {

        const userNameField = page.locator(userNameFieldLocator)
        await expect(userNameField).toBeEmpty()
        await expect(page).toHaveTitle('partneringONE® - Admin')
        await page.keyboard.press('Enter')
        
    })
    
    test('Login @loginTag',async ({page}) => {
       
        await page.type(userNameFieldLocator, userName)
        await page.type(passwordLocator, password)
        await page.click(LogInButtonLocator)
    
    })
    
    test.skip('check error login message',async ({page}) => {

        await page.type(userNameFieldLocator, userName)
        await page.type(passwordLocator, wrongPassword)
        await page.click(LogInButtonLocator)
    
        const errorMessage = page.locator('.alert__title')
        await expect(errorMessage).toContainText('Incorrect username or password')
        await expect(errorMessage).toHaveCount(1)//Count elements
        
    })
    
})

