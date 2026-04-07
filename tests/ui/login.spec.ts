import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { Logger } from '../../utils/api/logger';
import {TIMEOUTS, TAGS} from '../../constants';

test(`Login using valid credentials ${TAGS.SMOKE}`, async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.navigate();
  loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL('/inventory.html');
  Logger.info("Test Started");
  Logger.warn('This is a warning message');
  Logger.error('This is an error message');
  await page.waitForTimeout(TIMEOUTS.ANIMATION);
  Logger.info("Test Completed");
});




