import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" and outDir "docs" let the build be hosted on GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: { outDir: "docs" }
});
