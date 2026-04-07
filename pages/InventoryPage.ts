import {Page,Locator} from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
    addToCartBtn: Locator;
    cartIcon: Locator;

    constructor(page: Page) {
        super(page);
        this.addToCartBtn = page.locator('.btn_inventory');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addItemToCart() {
        await this.clickElement(this.addToCartBtn.first());
    }

    async goToCart() {
        await this.clickElement(this.cartIcon);
    }
}