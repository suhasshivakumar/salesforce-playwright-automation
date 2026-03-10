import { Page } from '@playwright/test';

export class AccountPage {
  constructor(private page: Page) {}

  async createAccount(accountName: string) {

    await this.page.goto('/lightning/o/Account/list');

    await this.page.getByRole('button', { name: 'New', exact: true }).click();

    await this.page.locator('input[name="Name"]').fill(accountName);

    await this.page.getByRole('button', { name: 'Save', exact: true }).click();
  }
}