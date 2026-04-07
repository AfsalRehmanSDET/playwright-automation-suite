import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test('Add an item to the cart', async ({page}) => {
  // Navigate to the login page
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  loginPage.navigate();
  loginPage.login('standard_user','secret_sauce');
  await expect(page).toHaveURL('/inventory.html');
  inventoryPage.addItemToCart();
  inventoryPage.goToCart();
});


