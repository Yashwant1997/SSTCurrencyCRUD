import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  reporter: 'html',
  
  use: {
    
    trace: 'on',
    headless:false,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }

  ],

 
});
