import {Page,Locator} from '@playwright/test';

export class InventoryPage {
    private page: Page
    addToCartBtn: Locator;
    cartIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartBtn = page.locator('.btn_inventory');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addItemToCart() {
        await this.addToCartBtn.first().click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}