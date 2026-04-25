import { defineConfig, devices } from '@playwright/test';
 
export default defineConfig({
 
  retries: 0,
 
  workers: 1,
 
  reporter: 'html',
 
  use: {
    video: 'off',
    launchOptions: {
      slowMo: 800,
    },
  },
 
  projects: [
 
    // ✅ Project 1 - IoT Dashboard - only runs iot test file
    {
      name: 'IoT Dashboard Tests',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200',
      },
      testMatch: '**/iot-dashboard-test.spec.ts',
    },
 
    // ✅ Project 2 - Conduit - only runs conduit test file
    {
      name: 'Conduit Tests',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://conduit.bondaracademy.com',
      },
      testMatch: '**/conduit-article-management.spec.ts',
    },
 
  ],
 
});