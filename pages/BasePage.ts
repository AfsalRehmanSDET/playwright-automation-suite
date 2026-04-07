import {Page,Locator} from '@playwright/test';
import { logger } from '../utils/api/logger';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;  
    }

    async navigate(path: string) {
        logger.info(`Navigating to ${path}`);
        await this.page.goto(path);
    }

    async getTitle(): Promise<string> {
        const title = await this.page.title();
        logger.info(`Page title is: ${title}`);
        return title;
    }

    async clickElement(locator: Locator) {
        logger.info(`Clicking on element: ${locator}`);
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    async fillInput(locator: Locator, value: string) {
        logger.info(`Filling input: ${locator} with value: ${value}`);
        await locator.waitFor({ state: 'visible' });
        await locator.fill(value);
    }

    async getElementText(locator: Locator): Promise<string> {
        logger.info(`Getting text from element: ${locator}`);
        await locator.waitFor({ state: 'visible' });
        const text = await locator.textContent();
        logger.info(`Text retrieved: ${text}`);
        return text || '';
    }

    async waitforPageLoad() {
        await this.page.waitForLoadState('load');
        logger.info(`Page loaded successfully`);
    }

    async isElementVisible(locator: Locator): Promise<boolean> {
        const visible = await locator.isVisible();
        logger.info(`Element visibility: ${visible}`);
        return visible;
    }

    async waitforElement(locator: Locator, timeout: number = 30_000) {
        await locator.waitFor({ state: 'visible', timeout });
        logger.info(`Element is visible`);
    }
}