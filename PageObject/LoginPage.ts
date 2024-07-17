import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage{

    page:Page;
    loginInbutton:Locator;
    userName:Locator;
    userPassword:Locator;
    constructor(page:Page){
        this.page=page;
        //
        this.loginInbutton= page.getByRole('button', { name: 'Login' });
        this.userName=page.getByPlaceholder('Username...');
        this.userPassword=page.getByPlaceholder('Password...');
    }
    async goTo(){
        await this.page.goto('https://192.168.109.202:8443/recs-ui/');
    }

    loginCredentials: {userName: string, userPassword: string}= {
        userName :"USER5" ,
        userPassword : "password",
    }

    async validLogin(){
            
            await this.userName.click();
            await this.userName.fill(this.loginCredentials.userName);
            await this.userPassword.click();
            await this.userPassword.fill(this.loginCredentials.userPassword);
            await this.loginInbutton.click();

    }
}