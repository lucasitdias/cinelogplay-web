// adiciona um comando customizado ao Cypress
// este comando permite reutilizar a navegação para a página inicial
Cypress.Commands.add("visitHome", () => {

  // acessa a rota raiz da aplicação (home)
  cy.visit("/");
});