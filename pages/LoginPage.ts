import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { UserCredentials } from '../types';

export class LoginPage extends BasePage {
    username: Locator;
    password: Locator;
    loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async navigate() {
        await super.navigate('/');
    }

    async login(credentials: UserCredentials){
        await this.fillInput(this.username, credentials.username);
        await this.fillInput(this.password, credentials.password);
        await this.clickElement(this.loginButton);  
    }
}