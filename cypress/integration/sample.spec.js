describe('Sample test', () => {
    it('does not much', () => {
        cy.visit('http://example.cypress.io');
        cy.contains('type').click();
        cy.url()
            .should('include', '/commands/actions');

        cy.get('.action-email')
            .type('jckgrj@gmail.com')
            .should('have.value', 'jckgrj@gmail.com');
    });
});