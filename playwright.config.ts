import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'https://connect-power-1531-dev-ed.scratch.my.salesforce.com',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  retries: 0,
  timeout: 60000
});