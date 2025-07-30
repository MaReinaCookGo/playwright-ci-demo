// @ts-check
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // 🔹 Configura el login global
  // globalSetup: require.resolve("./global-setup.js"),

  // 🔹 Opciones compartidas para todos los tests
  use: {
    trace: "on",
    screenshot: "on",
    video: "retain-on-failure",
    storageState: "storageState.json", // <- muy importante para login
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
