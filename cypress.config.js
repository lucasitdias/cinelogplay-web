// importa a função defineConfig do Cypress para configurar o ambiente de testes E2E
import { defineConfig } from "cypress";

// exporta a configuração principal do Cypress
export default defineConfig({

  // configuração dos testes end-to-end (E2E)
  e2e: {

    // define a URL base onde os testes serão executados
    baseUrl: "http://localhost:3000",

    // define o arquivo de suporte que será carregado antes dos testes
    supportFile: "cypress/support/e2e.js"
  }
});