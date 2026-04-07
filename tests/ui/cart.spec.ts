import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test('Add an item to the cart', async ({page}) => {
  // Navigate to the login page
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  await loginPage.navigate();
  await loginPage.login({ username: 'standard_user', password: 'secret_sauce' });
  await expect(page).toHaveURL('/inventory.html');
  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();
});


