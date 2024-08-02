import { test, expect } from '@playwright/test';

// test.describe.serial('Sequential Tests', () => {
test('test1', async ({ page }) => {
// Open WebSite    
await page.goto('https://flexipill-ui-new-staging.vercel.app')
//click on login buttton
await page.click("//a[normalize-space()='Login']")
// For entering Number
await page.fill("//input[@placeholder='Enter your number']", "1111111111")
//Continue Button
await page.click("text='Continue'");
// another locator for Contnue Button
//await page.click("//p[@class='MuiTypography-root MuiTypography-body1 platinumrx-1bx7d16']")
// For Entering OTP
await page.getByRole('textbox').first().click();
await page.getByRole('textbox').first().fill('1');
await page.getByRole('textbox').nth(1).fill('1');
await page.getByRole('textbox').nth(2).fill('1');
await page.getByRole('textbox').nth(3).fill('1');
//Locator for manualy clicking Submit button.
//await page.click("//p[@class='login-modal_submitText__zQ9_t']")
// Search Bar for Seaching Medicine
await page.fill("//input[@placeholder='Search your Medicines']","dolo")
await page.waitForTimeout(2000);
//Click on Search button in Search Bar
await page.click("//button[@class='Searchbar_searchBtnLanding__HdOMy']")
await page.waitForTimeout(2000);
// for scrolling by passing x and y cordinates
await page.evaluate(() => window.scrollBy(0, 200))
//Add to Cart
 await page.click("(//button[@type='button'])[1]")
// wait command
await page.waitForTimeout(2000)
//dropdown button
await page.click("(//div[@class='AddToCartDropdown_arrow__pFEjt open-dropdown'])[1]")
await page.waitForTimeout(2000);
//Scroll to particular element and increse the Quantity 
const element = await page.$("//div[normalize-space()='11']"); 
await element.scrollIntoViewIfNeeded();
await element.click()
await page.waitForTimeout(2000);
// again open drop down
await page.click("(//div[@class='AddToCartDropdown_arrow__pFEjt open-dropdown'])[1]")
await page.waitForTimeout(2000);
//remove product from dropdown
await page.click("//div[@class='quantity_num-dropdown__h0OrR']//div[1]")
await page.waitForTimeout(2000);
await page.click("//button[@id='DeleteModal_removeBtn__aYX8e']")
await page.goBack();
await page.waitForTimeout(2000);
});



test.only('test2', async ({ page }) => {
    // Open WebSite    
    await page.goto('https://flexipill-ui-new-staging.vercel.app')
    //click on login buttton
    await page.click("//a[normalize-space()='Login']")
    // For entering Number
    await page.fill("//input[@placeholder='Enter your number']", "1111111111")
    //Continue Button
    await page.click("text='Continue'");
    // another locator for Contnue Button
    //await page.click("//p[@class='MuiTypography-root MuiTypography-body1 platinumrx-1bx7d16']")
    // For Entering OTP
    await page.getByRole('textbox').first().click();
    await page.getByRole('textbox').first().fill('1');
    await page.getByRole('textbox').nth(1).fill('1');
    await page.getByRole('textbox').nth(2).fill('1');
    await page.getByRole('textbox').nth(3).fill('1');
    //Locator for manualy clicking Submit button.
    //await page.click("//p[@class='login-modal_submitText__zQ9_t']")
    // Search Bar for Seaching Medicine
    await page.fill("//input[@placeholder='Search your Medicines']","Thiroace-12.5mcg tab 100's")
    await page.waitForTimeout(2000);
    //Click on Search button in Search Bar
    await page.click("//button[@class='Searchbar_searchBtnLanding__HdOMy']")
    await page.waitForTimeout(2000);
    // for scrolling by passing x and y cordinates
    await page.evaluate(() => window.scrollBy(0, 200))
    //Add to Cart
     await page.click("(//button[@type='button'])[1]")
    // wait command
    await page.waitForTimeout(2000)
    //dropdown button
    await page.click("(//div[@class='AddToCartDropdown_arrow__pFEjt open-dropdown'])[1]")
    await page.waitForTimeout(2000);
    //Scroll to particular element and increse the Quantity 
    const element = await page.$("//div[normalize-space()='20']"); 
    element.scrollIntoViewIfNeeded();
    element.click()
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: '1' }).click();
    await page.waitForTimeout(2000);
    await page.click("text='View all coupons >>'")
    const elementTwo = page.getByText('TestDisc5'); 

    await expect(elementTwo).toBeVisible();
    await elementTwo.scrollIntoViewIfNeeded();
   await page.waitForTimeout(2000);
   await page.click("(//div[@class='coupon-card_coupon-card-apply__28qnu'])[7]")



    await page.waitForTimeout(2000);

    const COD =  page.getByText('Cash on delivery (COD)'); //Cash on delivery (COD)
    await expect(COD).toBeVisible();
    await COD.scrollIntoViewIfNeeded();
    await COD.click()
    await page.waitForTimeout(2000);
     await page.getByText('Place Order').click()
    // await page.waitForTimeout(6000);


    //  const cancelButton = page.locator("//button[normalize-space()='Cancel Order']");
    //  try {
    //    await cancelButton.waitFor({ state: 'visible', timeout: 30000 });
    //    console.log("Cancel Order button is visible.");
    //    await cancelButton.click();
    //  } catch (error) {
    //    console.error("Cancel Order button did not appear within the timeout period.");
    //  }
    await page.waitForTimeout(7000);

     const cancelButton = page.locator("//button[normalize-space()='Cancel Order']");
     await expect(cancelButton).toBeVisible();
   await  cancelButton.scrollIntoViewIfNeeded();
   await cancelButton.click()

//await page.waitForSelector("//button[normalize-space()='Cancel Order']", { timeout: 10000 });


   
    });
    
// });
    
    