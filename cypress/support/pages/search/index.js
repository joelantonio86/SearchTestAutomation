class Title {
    validarTitulo() {
        cy.visit('/')
        cy.title().should('eq', 'Blog do Agi')
    }
}
export default new Title();
