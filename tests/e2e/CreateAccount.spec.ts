import { test, expect } from '@playwright/test';
import { CreateAccountPage } from '../../pages/CreateAccountPage';

test('User should be able  to create account properly', async ({ page }) => {
    const createAccountPage = new CreateAccountPage(page);
    await createAccountPage.goto();
   await createAccountPage.isLoaded();
    await createAccountPage.createAccount(
        "Test",
        "P",
        "testpkapruka@gmail.com",
        "Password123!",
        "Password123!"
    );  
    await expect(createAccountPage.page).toHaveTitle("Kapruka New Account Creation");
    
});