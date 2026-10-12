import { defineConfig } from "astro/config";

// Project site: https://rickyhemawan.github.io/saji-society/
export default defineConfig({
  site: "https://rickyhemawan.github.io",
  base: "/saji-society",
  outDir: "./docs",
  build: {
    format: "directory",
  },
});
