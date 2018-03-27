Cypress.Commands.add('searchQuery', (query) => {
    cy.visit('http://google.pl/');
    cy.get('input.gsfi').first()
        .type(query);
    cy.wait(500);
    cy.get('ul[role="listbox"] > li').first().click();
});