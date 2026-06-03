// Legacy smoke test kept so the old spec file does not break the E2E suite.
// The current admin panel is covered by admin-react.cy.js.

describe("Admin legacy redirect", () => {
  it("redirects /admin to /login when unauthenticated", () => {
    cy.clearLocalStorage();
    cy.visit("/admin");
    cy.url().should("include", "/login");
  });
});
