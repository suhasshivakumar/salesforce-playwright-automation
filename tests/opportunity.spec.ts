import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { AccountPage } from '../pages/accountPage';
import { OpportunityPage } from '../pages/OpportunityPage';

test('Opportunity creation and validation', async ({ page }) => {

  const login = new LoginPage(page);
  const account = new AccountPage(page);
  const opportunity = new OpportunityPage(page);

  const username = process.env.SF_USERNAME!;
  const password = process.env.SF_PASSWORD!;

  const opportunityName = 'Automation Opp';
  const quantity = '10';

  // Login
  await login.login(username, password);

  // Create Account
  await account.createAccount('A1');

  // Create Opportunity
  await opportunity.createOpportunity(opportunityName, quantity);

  // Step 5 - Validate Opportunity details
  

await expect(page.getByText(opportunityName).first()).toBeVisible();
await expect(page.getByText('10')).toBeVisible();

  // Step 6 - Validate Opportunity in Account
  // Step 6 - Navigate to Account A1

await page.goto('/lightning/o/Account/list');

await page.getByRole('link', { name: 'A1' }).first().click();

await page.getByRole('tab', { name: 'Related' }).click();

await expect(page.getByRole('link', { name: opportunityName })).toBeVisible();
});