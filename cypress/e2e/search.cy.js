/// <reference types="cypress" />

describe('Funcionalidade Pesquisar', () => {
    const TextName = 'Governo'
    context('Cenários', () => {
        it('Deve pesquisar pelo texto Governo', () => {
            cy.accessPage()
            cy.typeText(TextName)
            cy.searchButton()
            cy.validateSearchReturn()
        });
        it('Deve pesquisar sem inserir nenhum texto', () => {
            cy.accessPage()
            cy.searchButton()
            cy.validateSearchEmpty()
           
        });
        it('Deve apagar o texto digitado na barra de pesquisa', () => {
            cy.accessPage()
            cy.typeText(TextName)
            cy.clearField()
            
        });
    });
});