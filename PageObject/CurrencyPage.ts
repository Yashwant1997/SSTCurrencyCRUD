import { expect, type Locator, type Page } from '@playwright/test';
import {navigateCurrObject} from '../utils/currencyObj';

export class CurrencyPage{

    page:Page;
    currency:Locator;
    createCurrency:Locator;
    currencyBox:Locator;
    decimalPlaceBox: Locator;
    selectDecimal: Locator;
    redenominationRate:Locator;
    description:Locator;
    selectDecimalOnClick:Locator;
    redenominationCurrency:Locator;
    redenominationCurrencyOnClick:Locator;
    saveBtn:Locator;
    CurrencyNo:Locator;
    saveMsg:Locator;
    quickFilter:Locator;
    currFind:Locator;
    dateCheck:Locator;
    waitLocator:Locator;

    constructor(page:Page){
        this.page=page;
        this.currency= page.locator('a').filter({ hasText: 'CURRENCY' }); 
        this.createCurrency=page.getByRole('button', { name: 'Create Currency' });
        this.currencyBox=page.locator('tlmv-container').getByRole('textbox').first()

        this.decimalPlaceBox=page.locator('tlmv-form-field').filter({ hasText: 'Decimal Places' }).getByRole('textbox');
        this.selectDecimal=page.locator("//*[@ data-locator='decimals-dropdown']//input");
        this.selectDecimalOnClick=page.locator("//tlmv-suggestion-list//span");

        this.redenominationCurrency=page.locator('tlmv-form-field').filter({ hasText: 'Redenomination Currency' }).getByRole('textbox');
        this.redenominationCurrencyOnClick=page.locator("//tlmv-suggestion-list//span");
  
        this.redenominationRate= page.locator('tlmv-form-field').filter({ hasText: 'Redenomination Rate' }).getByRole('textbox');

        this.description=page.locator('textarea');

        this.saveBtn=page.locator("//*[@data-locator='currency-form-button-toolbar' ]//span[contains(text(),'Save')]");

        this.CurrencyNo= page.locator("//*[@data-locator='currency-page-header']//*[@data-locator='tlmvTooltip']//div");
        this.saveMsg= page.getByRole('alert');
        
        
        this.quickFilter=page.locator('tlmrecs-currency-list').getByText('Quick Filter...');
        this.currFind= page.locator("//*[@data-locator='currency-list-quick-filter']//input");

        this.dateCheck=page.locator("//tlmv-list-item-date-field");

        this.waitLocator=page.locator("//*[@data-locator='currency-code-lookup']")
    }
    
    async navigateCurrency(){
        await this.currency.click();
        await this.createCurrency.click();
    }

    // async getCurrencyNum(){
         
    //     const currencyNum= await this.page.locator("//*[@data-locator='currency-page-header']//*[@data-locator='tlmvTooltip']//div").textContent();
    //     console.log(currencyNum);
        
    //     return currencyNum;
    // }
    


    async createCurrencyMethod(currencyDetails: navigateCurrObject){
        await this.currencyBox.click();
        await this.currencyBox.fill(currencyDetails.currency);
        
        await this.decimalPlaceBox.click();
        await this.selectDecimal.pressSequentially(currencyDetails.decimalPlaces.toString());
        await this.selectDecimalOnClick.click();
        

        await this.redenominationCurrency.pressSequentially(currencyDetails.redenominationCurr); //ARS
        await this.redenominationCurrencyOnClick.getByText(currencyDetails.redenominationCurr).click();

        
        await this.redenominationRate.click();
        await this.redenominationRate.fill(currencyDetails.redenominationRate.toString());

        await this.description.click();
        await this.description.fill('Created ');
    


        await this.saveBtn.click();

        const msg:any= await this.saveMsg.textContent();
        console.log(msg);
    
    } 

    async findCurrencyMethod(currencyDetails: navigateCurrObject){
        await this.quickFilter.click();
        await this.currFind.fill(currencyDetails.currency);
        await this.waitLocator.getByText(currencyDetails.currency).waitFor();
        
    }

    async dateCheckMethod(){
        //  //tlmv-list-item-date-field
        const date: string | null= await this.dateCheck.first().textContent();
        console.log(date);

        const currentDate = new Date();
        // Format the date components
        const month = currentDate.toLocaleString('en-US', { month: 'short' }); // Get short month name (e.g., 'Jul')
        const day = currentDate.getDate(); // Get the day of the month (e.g., 10)
        const year = currentDate.getFullYear(); // Get the full year (e.g., 2024)

        // Create the formatted date string
        const formattedDate = `${month} ${day}, ${year}`;

        console.log(formattedDate); // Output: Jul 10, 2024

        if (date?.trim()===formattedDate) {
             console.log("Date matched");
             
        }
        else{
            console.log("Wrong Date");
            
        }
        
    }



    
}