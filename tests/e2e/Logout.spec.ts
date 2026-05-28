import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { LogoutPage } from '../../pages/LogoutPage';

test('User should logout successfully', async ({ page }) => {


  const loginPage = new LoginPage(page);
  const logoutPage = new LogoutPage(page);
  await loginPage.goto();
  await loginPage.isLoaded();
  await loginPage.login(
    "testpkapruka@gmail.com",
    'Pune@kappu'
  );
    await expect(page).toHaveURL('https://www.kapruka.com/shops/customerAccounts/accountView.jsp');
    await logoutPage.isLoaded();
    await logoutPage.logoutUser();
    await expect(page).toHaveURL('https://www.kapruka.com/shops/customerAccounts/accountLogin.jsp?error=lg');
});