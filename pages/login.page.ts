import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';
import { SERVER_URL } from '../config/base-config';

export class LoginPage extends BasePage{
    public PAGE_URL = SERVER_URL + '/quote/login';
    private loginForm: Locator;
    private label: Locator;
    private emailInput: Locator;
    private passwordInput: Locator;
    private rememberMeCheckbox: Locator;
    private forgotYourPasswordBtn: Locator;
    private loginBtn: Locator;
    private loginWithGoogleBtn: Locator;
    private createAnAccountBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.loginForm = this.page.locator('[class="login-form"]');
        this.label = this.page.locator('//h1[.="Log in to Colonial Surety"]');
        this.emailInput = this.page.locator('//*[@formcontrolname="identifier"]/input');
        this.passwordInput = this.page.locator('//*[@formcontrolname="password"]/input');
        this.rememberMeCheckbox = this.page.locator('//colonial-checkbox//span[@class="mark"]');
        this.forgotYourPasswordBtn = this.page.locator('routerlink="/forgot-password"');
        this.loginBtn = this.page.locator('[type="submit"]');
        this.loginWithGoogleBtn = this.page.locator('//app-google-sign-in');
        this.createAnAccountBtn = this.page.locator('//button[.=" Create an account "]');
    }

    async isLoaded() : Promise<boolean> {
        return await this.isElementDisplayed(this.loginForm);
    }

    async inputEmailAndPassword(email: string, password: string): Promise<void> {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
    }

    async clickOnLoginButton(): Promise<void> {
        await this.loginBtn.click();
    }
}