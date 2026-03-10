# Salesforce Playwright Automation Assignment

## Overview

This repository contains a Playwright automation framework for testing Salesforce Lightning applications.

The framework automates Opportunity creation and validation while handling common Salesforce UI automation challenges such as dynamic DOM elements, asynchronous page behavior, loading spinners, and toast messages.

---

# Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)

---

# Project Structure
## Project Structure

```
salesforce-playwright-automation
│
├── pages
│   ├── LoginPage.ts
│   ├── AccountPage.ts
│   └── OpportunityPage.ts
│
├── tests
│   └── opportunity.spec.ts
│
├── utils
│   ├── salesforceUtils.ts
│   ├── waitUtils.ts
│   └── testData.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```


---

# Setup Instructions

### 1 Clone Repository
git clone https://github.com/suhasshivakumar/salesforce-playwright-automation.git

### 2 Navigate to Project
cd salesforce-playwright-automation

### 3 Install Dependencies
npm install


### 4 Configure Environment Variables

Create `.env` file
SF_USERNAME=your_username
SF_PASSWORD=your_password


### 5 Run Tests
npx playwright test


### 6 View Report
npx playwright show-report


---

# Framework Design

The framework follows the **Page Object Model (POM)** design pattern.

Benefits:

- Separation of test logic and UI locators
- Improved maintainability
- Reusable components
- Easier debugging

Folder Responsibilities:

| Folder | Purpose |
|------|------|
| pages | Page object classes representing Salesforce UI |
| tests | Test scenarios |
| utils | Helper utilities and reusable functions |

---

# Handling Salesforce Automation Challenges

Salesforce Lightning introduces several automation challenges.

## Dynamic DOM Elements

Salesforce generates dynamic element IDs.

Solution:
Playwright locators such as `getByRole`, `getByLabel`, and `getByText` are used to avoid unstable selectors.

---

## Asynchronous Lightning UI

Lightning components load asynchronously.

Solution:
Playwright waits such as:
await page.waitForLoadState('networkidle')


are used to ensure elements are loaded before interaction.

---

## Loading Spinners

Salesforce displays loading indicators (`slds-spinner`).

Solution:
Tests wait until the spinner disappears before continuing.

---

## Toast Messages

Salesforce shows toast notifications after record creation.

Example:
Opportunity created successfully

Solution:
The framework validates toast messages to confirm successful operations.

---

# Scenario Implementation

## Scenario 1 – Opportunity Creation and Validation

Steps Automated:

1 Login to Salesforce  
2 Navigate to Opportunity object  
3 Create a new Opportunity  
4 Enter opportunity details  
5 Save the record  
6 Validate Opportunity details  
7 Navigate to related Account  
8 Validate Opportunity is linked to the Account  

---

## Scenario 2 – Read-Only User Access

Objective:

Verify that a user with read-only access can view Opportunities but cannot edit them.

Steps:

1 Create a new user  
2 Assign read-only access to Opportunity  
3 Login as the read-only user  
4 Verify Opportunity is visible  
5 Verify edit functionality is restricted  

Note:

Salesforce Platform license does not allow Opportunity access, therefore a **Salesforce license was used as discussed with the reviewer**.

---

# Salesforce Configuration Persistence

Test data such as opportunity names and account details are maintained in:

utils/testData.ts

Sensitive information such as login credentials is stored in `.env`.

---

# Known Limitations

- MFA authentication is not automated
- Some Lightning UI components require additional selector stabilization
- Parallel execution is not currently configured

---

# Future Improvements

With more time the following enhancements could be implemented:

- CI/CD integration with GitHub Actions
- Parallel test execution
- Advanced reporting dashboards
- API validation alongside UI tests
- Additional Salesforce object coverage

---

# Repository

GitHub Repository:

https://github.com/suhasshivakumar/salesforce-playwright-automation

---

# Conclusion

This project demonstrates a scalable Playwright framework capable of handling Salesforce Lightning UI automation challenges while maintaining clean architecture and reusable test components.






