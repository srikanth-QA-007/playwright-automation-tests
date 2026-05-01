import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  retries: 0,
  workers: 1,
  reporter: 'html',
  timeout: 120000,

  use: {
    video: 'on',
    actionTimeout: 30000,
    launchOptions: {
      slowMo: 500,
    },
  },

  projects: [

    // Project 1 - IoT Dashboard
    {
      name: 'IoT Dashboard Tests',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200',
      },
      testMatch: '**/iot-dashboard-test.spec.ts',
    },

    // Project 2 - Conduit
    {
      name: 'Conduit Tests',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://conduit.bondaracademy.com',
      },
      testMatch: '**/conduit-article-management.spec.ts',
    },

    // Project 3 - Page Objects
    {
      name: 'Page Object Tests',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200',
      },
      testMatch: '**/usePageObjects.spec.ts',
    },

  ],

});