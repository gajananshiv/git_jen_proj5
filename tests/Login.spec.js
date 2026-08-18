import {test} from '@playwright/test'


test("TC NAME",async({page}) =>{

    await page.goto("https://www.google.com/")
    await page.locator("//a[@aria-label='Gmail ']").click()
    console.log("line number8")
    
    await page.waitForTimeout(3000)



})