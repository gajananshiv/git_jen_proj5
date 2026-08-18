import {test} from '@playwright/test'


test("TC NAME",async({page}) =>{

    await page.goto("https://www.google.com/")
    await page.waitForTimeout(3000)


})