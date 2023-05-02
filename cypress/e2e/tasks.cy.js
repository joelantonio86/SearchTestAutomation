/// <reference types="cypress" />

describe('tarefas', () => {
    const TextName = 'Governo'

    context('Validar pesquisa', () => {
        it('Deve pesquisar pelo texto Governo', () => {
            cy.createTask()
            cy.textName(TextName)
            cy.searchSubmit()
            cy.get('header h1 span')
                .should('be.visible')
                .should('have.text', TextName)
        });
        it('Deve pesquisar sem inserir nenhum texto', () => {
            cy.createTask()
            cy.searchSubmit()
            cy.get('header h1 span')
                .should('be.hidden')
                .should('have.text', '')
        });
        it('Deve apagar o texto digitado na barra de pesquisa', () => {
            cy.createTask()
            cy.textName(TextName)
            cy.get('.desktop-search > .search-form > label > .search-field')
                .clear()

            cy.get('.desktop-search > .search-form > label > .search-field')
                .should('have.text', '')

        });
    });


});