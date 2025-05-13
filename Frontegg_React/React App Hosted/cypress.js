cy.session(
  email,
  () => {
    cy.visit(Cypress.env('baseUrl')) // Our platform

    // Should redirect to Frontegg hosted login page
    cy.url().should('include', Cypress.env('loginUrl'))

    // Fill in the Frontegg login fields
    cy.get('[data-test-id="input-identifier"]')
      .should('be.visible')
      .type(email)
      .type('{enter}')

    cy.get('[data-test-id="input-password"]')
      .should('be.visible')
      .type(password)
      .type('{enter}')

    // Should redirect back to our platform
    cy.url().should('include', Cypress.env('baseUrl'))

    // Validate that the session cookie is set
    cy.getAllCookies().then(cookies => {
      expect(cookies).to.be.an('array').with.length.greaterThan(0)

      const sessionCookie = cookies.find(({ name }) =>
        name.startsWith('fe_session')
      )

      expect(sessionCookie).to.not.be.undefined
    })
  },
  {
    cacheAcrossSpecs: true,
    validate() {
      // Validate the session cookie exists again
      cy.getAllCookies().then(cookies => {
        expect(cookies).to.be.an('array').with.length.greaterThan(0)

        const sessionCookie = cookies.find(({ name }) =>
          name.startsWith('fe_session')
        )

        expect(sessionCookie).to.not.be.undefined
      })
    },
  }
)