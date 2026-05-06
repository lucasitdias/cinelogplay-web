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
});
