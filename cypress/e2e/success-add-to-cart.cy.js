describe('Jr Absolute Collagen', () => {
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

  it('should add product to cart when form is submitted', () => {
    cy.get('[data-action="trigger-hero-product"]').first().click()
    cy.get('.product-variant:not(:has(input:disabled))').first().click()
    cy.get('#product-add-form').submit()
    
    // Wait for the button text to change
    cy.get('.button-text-to-change').should('have.text', 'Added to Cart')
    
    // Check for success message
    cy.contains('was successfully added to cart!').should('be.visible')
  })
})
