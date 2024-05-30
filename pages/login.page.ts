import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage{
    public PAGE_URL = 'https://quote.colonialsurety.com/quote/login';
    private loginForm: Locator;

    constructor(page: Page) {
        super(page);
        this.loginForm = this.page.locator('[class="login-form"]');
    }

    async isLoaded() : Promise<boolean> {
        return await this.isElementDisplayed(this.loginForm);
    }
}