const MOCK_FILMES = [
  {
    id: 1,
    titulo: "Inception",
    ano: 2010,
    genero: "Ficcao Cientifica",
    imagem: "",
    media_avaliacao: "4.5",
    total_avaliacoes: 10,
  },
  {
    id: 2,
    titulo: "Oppenheimer",
    ano: 2023,
    genero: "Drama",
    imagem: "",
    media_avaliacao: "4.8",
    total_avaliacoes: 20,
  },
];

const MOCK_DIRETORES = [
  { id: 1, nome: "Christopher Nolan", nacionalidade: "Britanico", foto: "" },
];

describe("Home Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "**/api/filmes", {
      body: { success: true, data: MOCK_FILMES },
    }).as("getFilmes");
    cy.intercept("GET", "**/api/diretores", {
      body: { success: true, data: MOCK_DIRETORES },
    }).as("getDiretores");
    cy.intercept("GET", "**/api/favoritos", {
      body: { success: true, data: [] },
    }).as("getFavoritos");
    cy.visit("/");
  });

  it("carrega a pagina home", () => {
    cy.contains(/O melhor do cinema/i).should("be.visible");
  });

  it("exibe o titulo principal", () => {
    cy.get("h1").should("be.visible");
  });

  it("exibe link para catalogo de filmes", () => {
    cy.get("a[href='/filmes']").should("be.visible");
  });

  it("exibe link para criar conta quando nao autenticado", () => {
    cy.get("a[href='/cadastro']").contains(/Criar conta/i).should("be.visible");
  });

  it("navega para /filmes ao clicar no link do catalogo", () => {
    cy.get("a[href='/filmes']").first().click();
    cy.url().should("include", "/filmes");
  });

  it("realiza busca pelo formulario do hero", () => {
    cy.get("input[placeholder*='Buscar']").first().type("Inception");
    cy.get("button[type='submit']").first().click();
    cy.url().should("include", "/busca");
    cy.url().should("include", "Inception");
  });
});
