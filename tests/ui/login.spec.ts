import { test, expect } from '../../fixtures';
import { LoginPage } from '../../pages/LoginPage';
import { logger } from '../../utils/api/logger';
import {TIMEOUTS, TAGS} from '../../constants';

test(`Login using valid credentials ${TAGS.SMOKE}`, async ({ page }) => {
  logger.info("Test Started");
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login({ username: 'standard_user', password: 'secret_sauce' });
  await expect(page).toHaveURL('/inventory.html');
  await page.waitForTimeout(TIMEOUTS.ANIMATION);
  logger.info("Test Completed");
});

test(`Login using fixtures ${TAGS.SMOKE}`, async ({ loginPage }) => {
  logger.info("Test Started");
  await loginPage.login({ username: 'standard_user', password: 'secret_sauce' });
  await expect(loginPage.page).toHaveURL('/inventory.html');
});

test(`Verify logged in page title using fixtures ${TAGS.SMOKE}`, async ({ loggedInPage }) => {
  logger.info("Test Started");
  const title = await loggedInPage.getTitle();
  await expect(loggedInPage.page).toHaveURL('/inventory.html');
  expect(title).toBe('Swag Labs');
});




