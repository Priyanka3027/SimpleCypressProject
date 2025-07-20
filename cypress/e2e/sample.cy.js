describe("My First Test", () => {
    it("Visits the Cypress Docs", () => {
        cy.visit("https://docs.cypress.io")
        cy.contains("Getting Started").should("be.visible")
    })
})
