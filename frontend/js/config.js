// Define a URL base da API, usando variável de ambiente ou localhost como fallback
export const API_BASE_URL =
  process.env.VITE_API_BASE_URL || "http://localhost:3000/api";

// Exporta objeto de configuração da aplicação
export const config = {
  // URL da API
  apiUrl: API_BASE_URL,
  // Tempo limite para requisições
  timeout: 5000,
};
