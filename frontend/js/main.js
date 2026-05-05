console.log("Frontend CinelogPlay iniciado");

// Simples verificação
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML =
      "<h1>CinelogPlay</h1><p>Bem-vindo ao catálogo de filmes</p>";
  }
});
