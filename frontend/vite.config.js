import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5173,
    host: "localhost",
    open: false,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  preview: {
    port: 4173,
  },
});
