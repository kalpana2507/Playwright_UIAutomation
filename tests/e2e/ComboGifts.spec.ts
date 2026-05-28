import { test, expect } from '@playwright/test';
import { ComboGiftsPage } from '../../pages/ComboGiftsPage';
test('Verify the product title and price on Combo Gifts page', async ({ page }) => {
    const comboGiftsPage = new ComboGiftsPage(page);
    await comboGiftsPage.goto();
    const productTitle = await comboGiftsPage.getProductTitle();    
    const productPrice = await comboGiftsPage.getProductPrice();
    console.log('Product Title:', productTitle);
    console.log('Product Price:', productPrice);

    expect(productTitle).not.toBe('');
    expect(productPrice).not.toBe('');  
});