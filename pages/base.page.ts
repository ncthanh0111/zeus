import { Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly ELEMENT_DISPLAY_TIMEOUT = 30000;

    constructor(page: Page) {
        this.page = page;
    }

    async waitForElementVisible(elementIdentifier, timeout=this.ELEMENT_DISPLAY_TIMEOUT): Promise<void> {
        if (elementIdentifier instanceof String) {
            await this.page.waitForSelector(elementIdentifier.toString(), {state: "visible", timeout: timeout});
        }
        else {
            await elementIdentifier.waitFor({state: "visible", timeout: timeout});
        }
    }

    async waitForElementDisappear(elementIdentifier, timeout=this.ELEMENT_DISPLAY_TIMEOUT): Promise<void> {
        if (elementIdentifier instanceof String) {
            await this.page.waitForSelector(elementIdentifier.toString(), {state: "hidden", timeout: timeout});
        }
        else {
            await elementIdentifier.waitFor({state: "hidden", timeout: timeout});
        }
    }

    async isElementNotDisplayed(elementIdentifier, timeout=this.ELEMENT_DISPLAY_TIMEOUT): Promise<boolean> {
        try {
            await this.waitForElementDisappear(elementIdentifier, timeout);
        }
        catch(TimeoutError){
            return false;
        }
        return true;
    }

    async isElementDisplayed(elementIdentifier, timeout=this.ELEMENT_DISPLAY_TIMEOUT): Promise<boolean> {
        try {
            await this.waitForElementVisible(elementIdentifier, timeout);
        }
        catch(TimeoutError){
            return false;
        }
        return true;
    }

    async clickOnButtonByName(btnName, timeout=this.ELEMENT_DISPLAY_TIMEOUT): Promise<void> {
        await this.page.locator(`//button[.='${btnName}']`).click({timeout: timeout});
    }

}