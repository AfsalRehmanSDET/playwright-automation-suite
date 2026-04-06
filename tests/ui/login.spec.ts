import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Login using valid credentials', async ({page}) => {
  // Navigate to the login page
  const loginPage = new LoginPage(page);

  loginPage.navigate();
  loginPage.login('standard_user','secret_sauce');

  await expect(page).toHaveURL('/inventory.html');
});


