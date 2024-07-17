import { expect, type Locator, type Page,test } from '@playwright/test';
import {PoManager} from '../PageObject/PoManager';
import { navigateCurrObject } from '../utils/currencyObj';


test("TASK SST",async ({ page }) => {
   
    const pomanager=new PoManager(page);

    //1: Login Page

    const loginPage= pomanager.getLogin();
    await loginPage.goTo();
    await loginPage.validLogin();

    //2: HomePage: lookup click
    const homePage=pomanager.getLookup();
    await homePage.clickLoopups();

    //3: Currency Page
        //a: click on currency and click on create currency button
        const currencyPage=pomanager.getCurrency();
        await currencyPage.navigateCurrency();

        const currencyDetails: navigateCurrObject={
            currency: "LOK",
            decimalPlaces: 2,
            redenominationRate: 2.5,
            redenominationCurr:"ARS",
            description:"Currency Created"
        }

        // const num:any= await currencyPage.getCurrencyNum();
        // console.log(num);
        
        // //b: currncy details box:fill currency, decimal places, redenomination currency, redenomination rate and desciption
        await currencyPage.createCurrencyMethod(currencyDetails);
        
        await page.locator('tlmv-inspector i').first().click();
        // const num1: any= await currencyPage.getCurrencyNum();
        // console.log(num1);
        

        // if (num===num1) {
        //     // throw new Error('This is an error message');
        //     console.log("Currency already existed");
            
        // }
        // else{
        //     console.log(" Currency Incremented successfully");
            
        // }

        await currencyPage.findCurrencyMethod(currencyDetails);
        // await page.locator('tlmv-inspector i').first().click();
        
        await currencyPage.dateCheckMethod();

    await page.pause();
  
  });