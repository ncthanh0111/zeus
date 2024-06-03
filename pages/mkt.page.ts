import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class MKTPage extends BasePage{
    public PAGE_URL = 'https://www.colonialsurety.com/';
    private loginButton: Locator;
    private loginOption: Locator;
    private topNavigator: Locator;

    constructor(page: Page) {
        super(page);
        this.topNavigator = this.page.locator('#top-navigation');
        this.loginButton = this.page.locator('//a[.="Login"]');
        this.loginOption = this.page.locator('div[aria-label="Login Menu"] a');
    }

    async isLoaded() : Promise<boolean> {
        return await this.isElementDisplayed(this.topNavigator);
    }

    async selectLoginOption(loginOption: string): Promise<void> {
        await this.loginButton.click();
        await this.loginOption.filter({hasText: loginOption}).click();
    }
}