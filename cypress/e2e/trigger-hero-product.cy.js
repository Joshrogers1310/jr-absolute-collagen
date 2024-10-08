describe('Subscription Section', () => {
  beforeEach(() => {
    cy.visit('https://jr-absolute-collagen.myshopify.com/')

    // Check if the password input field exists
    cy.get('body').then($body => {
      if ($body.find('input[type="password"]').length > 0) {
        // If password field exists, type the password and press Enter
        cy.get('input[type="password"]').type('stahth{enter}')
      }
    })

    // After handling the password, visit the Marine Liquid Collagen page
    cy.visit('https://jr-absolute-collagen.myshopify.com/pages/marine-liquid-collagen-drink-for-women')
  })
  
  it('should trigger hero product visibility for both buttons', () => {
    // Check first button
    cy.get('[data-action="trigger-hero-product"]').first().click()

    // Check if the heroProduct section is visible
    cy.get('#heroProduct')
      .should('be.visible')
      .and('have.attr', 'aria-hidden', 'false')
      .and('not.have.attr', 'hidden')

    // Check second button
    cy.get('[data-action="trigger-hero-product"]').eq(1).click()

    // Check if the heroProduct section is visible again
    cy.get('#heroProduct')
      .should('be.visible')
      .and('have.attr', 'aria-hidden', 'false')
      .and('not.have.attr', 'hidden')
  })
});
