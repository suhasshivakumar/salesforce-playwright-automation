import { Page } from '@playwright/test';

export class OpportunityPage {
  constructor(private page: Page) {}

  async createOpportunity(name: string, quantity: string) {

    await this.page.goto('/lightning/o/Opportunity/list');

    await this.page.getByRole('button', { name: 'New', exact: true }).click();

    // Opportunity Name
await this.page.locator('input[name="Name"]').fill(name);

// Account Lookup
await this.page.getByPlaceholder('Search Accounts...').click();
await this.page.getByPlaceholder('Search Accounts...').fill('A1');
await this.page.waitForSelector('lightning-base-combobox-item');
await this.page.locator('lightning-base-combobox-item').nth(1).click();

// Close Date
await this.page.locator('input[name="CloseDate"]').fill('12/30/2026');

// Stage
await this.page.getByRole('combobox', { name: 'Stage' }).click();
await this.page.getByRole('option', { name: 'Prospecting' }).click();

// Quantity
await this.page.locator('input[name="Quantity__c"]').click();
await this.page.locator('input[name="Quantity__c"]').fill(quantity);

// Save
await this.page.getByRole('button', { name: 'Save', exact: true }).click();
await this.page.waitForSelector('records-record-layout-item');
  }};