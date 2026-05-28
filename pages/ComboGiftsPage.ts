import  {Page, Locator, expect} from '@playwright/test';
//import { BasePage } from './BasePage.js';
export class ComboGiftsPage
{   
    readonly products: Locator;
    readonly page: Page;
    constructor(page: Page) {
      this.products = page.locator('.catalogueV2Repeate > div');
    this.page = page;
 
    }
    async goto(): Promise<void>{
        await this.page.goto('/online/giftset');
    }
async getProductTitle(): Promise<string> {
    const nameLocator = this.page.locator('.catalogueV2heading').first();
    await nameLocator.waitFor({ state: 'visible' ,timeout:20000});
    const name= await nameLocator.textContent();
    return name?.trim() || '';
}
async getProductPrice(): Promise<string> {
    const priceLocator = this.page
    .locator('.catalogueV2converted span:last-child')
    .first();
   
    await priceLocator.waitFor({ state: 'visible' ,timeout:20000});
    const price = await priceLocator.textContent();
    return price?.trim() || ''; 
}
}