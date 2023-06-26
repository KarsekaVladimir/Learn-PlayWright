import { chromium, PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  timeout: 6000,
  retries: 0,
  use: {
    headless: false,
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 16000,
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'off'
  },

  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' }
    },
    {
      name: 'FireFox',
      use: { browserName: 'firefox' }
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' }
    }
  ]
}

export default config
