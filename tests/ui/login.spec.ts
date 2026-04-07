import { test, expect } from '@playwright/test';
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




