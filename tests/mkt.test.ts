import { test, expect } from '@playwright/test';
import { MKTPage } from '../pages/mkt.page';
import { assert } from 'console';
import { LoginPage } from '../pages/login.page';

test('Navigate Login button and select Frontier', async ({ page }) => {
    let mktPage = new MKTPage(page);

    await mktPage.page.goto(mktPage.PAGE_URL);
    await assert(mktPage.isLoaded());
    await mktPage.selectLoginOption('Surety, Court, License & Permit Bonds, Insurance Products');

    let loginPage = new LoginPage(page);
    await assert(loginPage.isLoaded());
});
