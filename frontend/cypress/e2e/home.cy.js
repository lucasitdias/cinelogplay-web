// descreve o conjunto de testes da página Home
describe("Home", () => {

  // define um caso de teste específico
  it("deve carregar filmes", () => {

    // intercepta a requisição GET para /api/filmes e retorna um fixture mockado
    cy.intercept("GET", "/api/filmes", {
      fixture: "filmes.json",
    }).as("getFilmes");

    // acessa a página inicial da aplicação
    cy.visit("/");

    // aguarda a conclusão da requisição interceptada
    cy.wait("@getFilmes");

    // verifica se o texto "Filme Teste" está visível na tela
    cy.contains("Filme Teste").should("be.visible");
  });
});