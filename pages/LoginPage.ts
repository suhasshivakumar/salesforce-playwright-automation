import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(username: string, password: string) {

    // Navigate to Salesforce login page
    await this.page.goto('https://connect-power-1531-dev-ed.scratch.my.salesforce.com');

    await this.page.getByLabel('Username').fill(username);
    await this.page.getByLabel('Password').fill(password);

    await this.page.getByRole('button', { name: 'Log In' }).click();

    // ✅ Wait until Lightning UI loads
    await this.page.waitForURL('**/lightning/**');
  }
}