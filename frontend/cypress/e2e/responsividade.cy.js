describe("Responsividade", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/filmes", { body: { success: true, data: [] } });
    cy.intercept("GET", "**/api/diretores", {
      body: { success: true, data: [] },
    });
    cy.intercept("GET", "**/api/favoritos", {
      body: { success: true, data: [] },
    });
  });

  it("carrega a home em mobile (375x667)", () => {
    cy.viewport(375, 667);
    cy.visit("/");
    cy.get("header").should("be.visible");
    cy.get(".header-hamburger").should("be.visible");
    cy.get(".header-nav-desktop").should("not.be.visible");
  });

  it("carrega a home em tablet (768x1024)", () => {
    cy.viewport(768, 1024);
    cy.visit("/");
    cy.get("header").should("be.visible");
    cy.get(".header-hamburger").should("be.visible");
    cy.get(".header-nav-desktop").should("not.be.visible");
  });

  it("carrega a home em desktop (1920x1080)", () => {
    cy.viewport(1920, 1080);
    cy.visit("/");
    cy.get(".header-nav-desktop").should("be.visible");
  });

  it("exibe o conteudo principal em mobile", () => {
    cy.viewport(375, 667);
    cy.visit("/");
    cy.get("h1").should("be.visible");
  });

  it("navega para /filmes em mobile", () => {
    cy.viewport(375, 667);
    cy.visit("/");
    cy.get("a[href='/filmes']").first().click();
    cy.url().should("include", "/filmes");
  });
});
