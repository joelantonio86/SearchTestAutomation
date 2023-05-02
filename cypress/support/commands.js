// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const TextName = 'Governo'
Cypress.Commands.add('accessPage', () => {
    cy.visit('/')
    cy.get('#search-open')
        .click({ force: true });
})

Cypress.Commands.add('typeText', (TextName) => {
    cy.get('.desktop-search > .search-form > label > .search-field')
        .type(TextName)
})

Cypress.Commands.add('searchButton', () => {
    cy.get('.desktop-search > .search-form > .search-submit')
        .click();
})

Cypress.Commands.add('validateSearchReturn', () => {
    cy.get('header h1 span')
        .should('be.visible')
        .should('have.text', TextName)
});


Cypress.Commands.add('validateSearchEmpty', () => {
    cy.get('header h1 span')
        .should('be.hidden')
        .should('have.text', '')
});

Cypress.Commands.add('clearField', () => {
    cy.get('.desktop-search > .search-form > label > .search-field')
        .clear()

    cy.get('.desktop-search > .search-form > label > .search-field')
        .should('have.text', '')

});