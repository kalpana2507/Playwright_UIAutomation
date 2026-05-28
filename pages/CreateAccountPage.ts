import  {Page, Locator, expect} from '@playwright/test';
import { BasePage } from './BasePage.js';

export class CreateAccountPage extends BasePage
{
    readonly createAccountButton: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly passwordReConfirmInput: Locator; 
    //readonly page: Page; 
   // readonly form: Locator;
    constructor(page: Page) {
        super(page);
        //this.firstNameInput=this.page.getByLabel('First Name')
        //this.firstNameInput =this.page.getByRole('textbox', { name: 'First Name' })
        this.firstNameInput = this.page.locator('input[name="firstName"]');
        this.lastNameInput = this.page.locator('input[name="lastName"]');
        this.emailInput = this.page.locator('input[name="email"]');
        this.passwordInput = this.page.locator('input[name="password"]');
        this.passwordReConfirmInput = this.page.locator('input[name="passwordReConfirm"]');
        this.createAccountButton = this.page.getByRole('button', { name: 'Create Account' });
    }
    async isLoaded(): Promise<void>{
        await expect(this.firstNameInput).toBeVisible({timeout:20000});
        await expect(this.lastNameInput).toBeVisible();
        await expect(this.emailInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.passwordReConfirmInput).toBeVisible();
        await expect(this.createAccountButton).toBeVisible();
    }  
    async goto(): Promise<void>{
        await this.page.goto('/shops/customerAccounts/accountNew.jsp?origination=regular');
    }
    async createAccount(firstName: string, lastName: string, email: string, createpassword: string, confirmpassword:string): Promise<void>
    {
        await this.fill(this.firstNameInput, firstName);
        await this.fill(this.lastNameInput, lastName);
        await this.fill(this.emailInput, email);
        await this.fill(this.passwordInput, createpassword);
        await this.fill(this.passwordReConfirmInput, confirmpassword);
        await this.click(this.createAccountButton); 
    }
      

}