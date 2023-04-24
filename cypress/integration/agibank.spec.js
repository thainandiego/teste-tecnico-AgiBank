describe('Pesquisa no Blog do AGI', () => {
    it('Pesquisa por "educação financeira"', () => {
      cy.visit('https://blogdoagi.com.br/')
      cy.get('.search-field').type('educação financeira')
      cy.get('.search-submit').click()
      cy.url().should('include', '?s=educa%C3%A7%C3%A3o+financeira')
    })
  })
  