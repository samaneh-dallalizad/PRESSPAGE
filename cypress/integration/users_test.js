describe('Users Test', () => {
    it('Visit Homepage and Users Page', () => {
        cy.visit('http://localhost:3000')
        cy.get('.header > div').should('have.class', 'mx-auto w-1/4 my-10')
        cy.get('a[href*="/users"]').click()
        cy.url().should('include', '/users')
        cy.get('ul').children().should('have.length', 10)
    })
})