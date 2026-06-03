<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

const __dirname = import.meta.dirname;

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    open: false,
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom") || id.includes("react-router")) {
              return "vendor";
            }
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
=======
// Importa a função defineConfig do Vite
import { defineConfig } from "vite";

// Exporta a configuração do Vite
export default defineConfig({
  // Configurações do servidor de desenvolvimento
  server: {
    // Porta usada pelo servidor
    port: 5173,
    // Host definido como localhost
    host: "localhost",
    // Define se deve abrir automaticamente no navegador
    open: false,
  },
  // Configurações de build (compilação)
  build: {
    // Diretório de saída da build
    outDir: "dist",
    // Gera sourcemaps para depuração
    sourcemap: true,
  },
  // Configurações do modo preview (pré-visualização da build)
  preview: {
    // Porta usada pelo servidor de preview
    port: 4173,
  },
>>>>>>> 7add37e5ecd21a1d17887b133e8d9cfcf55131a8
});
