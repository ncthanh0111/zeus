import { test, expect } from '@playwright/test';
import { assert } from 'console';
import { LoginPage } from '../pages/login.page';
import { DEFAULT_PASSWORD, INDIVIDUAL_USERNAME, LOGIN_BUTTON } from '../test-data/global-variables';


test('Login as individual user', async ({ page }) => {
    let loginPage = new LoginPage(page);

    await loginPage.page.goto(loginPage.PAGE_URL);
    await assert(loginPage.isLoaded());
    await loginPage.inputEmailAndPassword(INDIVIDUAL_USERNAME, DEFAULT_PASSWORD);
    await loginPage.clickOnButtonByName(LOGIN_BUTTON);
});