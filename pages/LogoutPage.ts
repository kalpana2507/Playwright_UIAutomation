import  {Page, Locator, expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class LogoutPage extends BasePage
{
    readonly logout: Locator;
    constructor(page: Page) {
        super(page);
        this.logout = page.getByText('Logout');
    }
    async isLoaded(): Promise<void>{
        await expect(this.logout).toBeVisible();
    }   
    async logoutUser(): Promise<void>{
        
        await this.logout.waitFor({ state: 'visible' });
        await this.click(this.logout);
    }   

    
}