describe('Jr Absolute Collagen', () => {
  beforeEach(() => {
    cy.visit('https://jr-absolute-collagen.myshopify.com/')

    // Handle password if needed
    cy.get('body').then($body => {
      if ($body.find('input[type="password"]').length > 0) {
        cy.get('input[type="password"]').type('stahth{enter}')
      }
    })

    // Navigate to the product page (adjust URL as needed)
    cy.visit('https://jr-absolute-collagen.myshopify.com/pages/marine-liquid-collagen-drink-for-women')
  })

  it('shows error message when Add to Cart fails', () => {
    // Intercept the add to cart request and force it to fail
    cy.intercept('POST', '/cart/add.js', {
      statusCode: 500,
      body: 'Internal Server Error'
    }).as('addToCartRequest')

    // Click the trigger button to show the hero product
    cy.get('[data-action="trigger-hero-product"]').first().click()
    cy.get('.product-variant:not(:has(input:disabled))').first().click()
    cy.get('#product-add-form').submit()

    // Wait for the intercepted request
    cy.wait('@addToCartRequest')

    // Check if the error message is displayed
    cy.contains('Failed to add product to cart. Please try again.').should('be.visible')

    // Check if the button text reverts to "Add to Cart"
    cy.get('.button-text-to-change').should('have.text', 'Add to Cart')
  })
})