import { defineConfig, devices } from '@playwright/test'

const previewPort = 8765
const baseURL = `http://127.0.0.1:${previewPort}`

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  timeout: 60_000,
  reporter: 'list',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  webServer: {
    command: `npm run preview -- --host 127.0.0.1 --port ${previewPort}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: process.env.CI
    ? [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }]
    : [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        {
          name: 'mobile',
          use: { browserName: 'chromium', ...devices['iPhone 14'] },
        },
        {
          name: 'tablet',
          use: { browserName: 'chromium', ...devices['iPad (gen 7)'] },
        },
      ],
})
