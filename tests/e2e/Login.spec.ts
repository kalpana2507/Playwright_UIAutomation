import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('User should login successfully', async ({ page }) => {


  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.isLoaded();
  await loginPage.login(
    "testpkapruka@gmail.com",
    'Pune@kappu'
  );

  await expect(page).toHaveURL('https://www.kapruka.com/shops/customerAccounts/accountView.jsp');
});