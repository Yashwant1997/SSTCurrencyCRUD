import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage{

    page:Page;
    lookup:Locator;

    constructor(page:Page){
        this.page=page;
        this.lookup=page.getByRole('link', { name: 'Lookups' });
        
    }
    
    async clickLoopups(){
            
        await this.lookup.click();

        // await this.page.pause();
    }
}