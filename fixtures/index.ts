import {test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { UserCredentials} from '../types';

type CustomFixtures = {
    loginPage: LoginPage;
    loggedInPage: LoginPage;
};

export const test = base.extend<CustomFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await use(loginPage);
    },
    loggedInPage: async ({ page }, use) => {
        const credentials: UserCredentials = { username: 'standard_user', password: 'secret_sauce' };
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login(credentials);
        await use(loginPage);
    }
});

export { expect } from '@playwright/test';