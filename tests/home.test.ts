import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { assert } from 'console';
import { LoginPage } from '../pages/login.page';

test('Login', async ({ page }) => {
    let homePage = new HomePage(page);

    await homePage.page.goto(homePage.PAGE_URL);
    await assert(homePage.isLoaded());
    await homePage.selectLoginOption('Surety, Court, License & Permit Bonds, Insurance Products');

    let loginPage = new LoginPage(page);
    await assert(loginPage.isLoaded());
});
