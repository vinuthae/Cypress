describe('My First Test', () => {
    it('verify Title-Positive', () => {
    //steps
    cy.visit("https://www.youtube.com/")
    cy.title().should('eq','youtube')
})
    it('verify Title-Positive', () => {

        cy.visit("https://www.youtube.com/")
        cy.title().should('eq','Google')
    
    })
  })
