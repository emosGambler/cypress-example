describe('Google Search', () => {
    
    beforeEach(() => {
        cy.visit('http://google.pl/');
    });

    it('should url be correct', () => {
        cy.contains('type').click();
        cy.url()
        .should('include', 'google.pl/');
    });

    it('should query be searched', () => {
        cy.get('input.gsfi').first()
            .type('jckgrj@gmail.com');
    });
});