import { expect, type Locator, type Page } from '@playwright/test';

import { LoginPage } from './LoginPage';
import {HomePage }  from './HomePage';
import { CurrencyPage } from './CurrencyPage';  


export class PoManager{
    
    page: Page;
    loginPage: LoginPage;
    homePage:HomePage;
    currencyPage: CurrencyPage;

    constructor(page: Page){
        this.page=page;
        this.loginPage= new LoginPage(this.page);
        this.homePage=  new HomePage(this.page);
        this.currencyPage= new CurrencyPage(this.page);
        
    }

    
    getLogin(){
        return this.loginPage;
    }

    getLookup(){
        return this.homePage;
    }

    getCurrency(){
        return this.currencyPage;
    }
    
}
