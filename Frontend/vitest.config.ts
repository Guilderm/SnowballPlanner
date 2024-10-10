import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(), // Enable Vue plugin to handle .vue files in tests
  ],
  test: {
    environment: 'jsdom', // Simulate browser environment for DOM testing
    globals: true, // Allow using global variables like `describe`, `it`, etc., without importing them
    setupFiles: './vitest.setup.ts', // Optional: Add setup file to configure testing environment
    include: ['src/**/*.{test,spec}.{ts,tsx,js}'], // Include test files
    coverage: {
      provider: 'istanbul', // Generate coverage reports using Istanbul
      reporter: ['text', 'json', 'html'], // Output coverage reports in multiple formats
      reportsDirectory: './coverage', // Specify the directory for coverage reports
    },
    testTimeout: 5000, // Set a custom test timeout (default is 5000ms)
  },
});
