import { test, expect } from '../../fixtures';
import { InventoryPage } from '../../pages/InventoryPage';
import { TAGS } from '../../constants';

test(`Add an item to the cart ${TAGS.UI}`, async ({ loggedInPage }) => {
  const title = await loggedInPage.getTitle();
  await expect(loggedInPage.page).toHaveURL('/inventory.html');
  const inventoryPage = new InventoryPage(loggedInPage.page);
  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();
});


test(`Complete a purchase @completePurchase ${TAGS.UI}`, async ({ loggedInPage }) => {
  const inventoryPage = new InventoryPage(loggedInPage.page);
  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();
  await inventoryPage.clickElement(inventoryPage.page.locator('.checkout_button'));
  await inventoryPage.fillInput(inventoryPage.page.locator('#first-name'), 'John');
  await inventoryPage.fillInput(inventoryPage.page.locator('#last-name'), 'Doe');
  await inventoryPage.fillInput(inventoryPage.page.locator('#postal-code'), '12345');
  await inventoryPage.clickElement(inventoryPage.page.locator('#continue'));
  await inventoryPage.clickElement(inventoryPage.page.locator('#finish'));
  const confirmationText = await inventoryPage.getElementText(inventoryPage.page.locator('.complete-header'));
  expect(confirmationText).toBe('Thank you for your order!');
})


test(`Show error when inventory API fails @route ${TAGS.UI}`, async ({ loggedInPage }) => {
  await loggedInPage.page.route('**/inventory*', route => {
    route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ error: 'Internal Server Error' }),
    });
  });
  await loggedInPage.page.pause();
  await loggedInPage.page.reload();
  const isInventoryVisible = await loggedInPage.isElementVisible(loggedInPage.page.locator('.inventory_list'));
  expect(isInventoryVisible).toBe(false);
});




