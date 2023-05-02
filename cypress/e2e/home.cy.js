/// <reference types="cypress" />

describe('O site deve estar online', () => {
  it('passes', () => {
    cy.visit('/')
    cy.title().should('eq', 'Blog do Agi')
  })
})