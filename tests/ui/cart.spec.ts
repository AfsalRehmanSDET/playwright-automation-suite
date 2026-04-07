import { test, expect } from '../../fixtures';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { TAGS } from '../../constants';

test(`Add an item to the cart`, async ({ loggedInPage }) => {
  const title = await loggedInPage.getTitle();
  await expect(loggedInPage.page).toHaveURL('/inventory.html');
  const inventoryPage = new InventoryPage(loggedInPage.page);
  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();
});

test(`Show error when inventory API fails @route ${TAGS.UI}`, async ({ loggedInPage }) => {

  await loggedInPage.page.route('**/inventory*', route => {
    route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ error: 'Internal Server Error' }),
    });
  });
  await loggedInPage.page.pause(); // Wait for the route to be set up
  await loggedInPage.page.reload();
  const isInventoryVisible = await loggedInPage.isElementVisible(loggedInPage.page.locator('.inventory_list'));
  expect(isInventoryVisible).toBe(false);
});




