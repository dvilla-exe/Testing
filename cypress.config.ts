import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  e2e: {
    baseUrl: "http://localhost:3001", // Vite's default dev server port
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});