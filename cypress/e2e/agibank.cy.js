
describe('Teste de pesquisa válida', () => {
  it('O usuário digita educação financeira na pesquisa e é apresentada uma lista de artigos relacionados a essa palavra-chaveP', () => {
    cy.visit('https://blogdoagi.com.br/')
      cy.get('#overlay-open').click()
        cy.get('.mobile-search > .search-form > label > .search-field').click().type('educação financeira{enter}')
          cy.url().should('include', '?s=educa%C3%A7%C3%A3o+financeira')
  })

  describe('Tese de pesquisa e validando resultado', () => {
    it('O usuário digita uma frase valida Emprestimo e é apresentada uma lista de artigos que contenham essa frase', () => {
      cy.visit('https://blogdoagi.com.br/')  
        cy.get('#overlay-open').click()  
          cy.get('.mobile-search > .search-form > label > .search-field').click().type('empréstimo{enter}')  
            cy.url().should('include', 's=empr%C3%A9stimo')
    })

    describe('Teste de pesquisa inválida', () => {
      it.only('Usuário digita um termo 123456789 que não é encontrado em nenhum artigo e recebe uma mensagem informando que não foram encontrados resultados para a pesquisa', () => {
        cy.visit('https://blogdoagi.com.br/')     
          cy.get('#overlay-open').click()       
            cy.get('.mobile-search > .search-form > label > .search-field').type('123456789{enter}')       
              cy.get('.entry-content > p')
      })
    })
    
    describe('Teste de pesquisa vazia', () => {
      it('Usuário clica no botão de pesquisa sem digitar nenhuma palavra e é apresentada uma mensagem informando que é necessário digitar um termo de busca', () => {
        cy.visit('https://blogdoagi.com.br/')
          cy.get('#overlay-open').click()
            cy.get('.mobile-search > .search-form > label > .search-field').type('{enter}')
              cy.get('.archive-title')
      })
    })      

    describe('Teste de pesquisa com caracteres inválidos', () => {
      it('O usuário digita um termo de busca que não é válido caracteres especiais !@#$%¨&*()_+ e recebe uma mensagem informando que o termo de busca é inválido', () => {
        cy.visit('https://blogdoagi.com.br/')
          cy.get('#overlay-open').click()
            cy.get('.mobile-search > .search-form > label > .search-field').click().type('!@#$%¨&*()_+{enter}')
              cy.get('.entry-content > p')
      })
    }) 
  })
})
  
  

