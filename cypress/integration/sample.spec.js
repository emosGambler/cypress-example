describe('Google Search', () => {

    const VIDEOS_INDEX = 0;
    
    before(() => {
        cy.visit('http://google.pl/');
    });

    it('should url be correct', () => {
        cy.contains('type').click();
        expect(cy.url(), 'to.include', 'google.pl/');
    });

    it('should query be searched', () => {
        cy.get('input.gsfi').first()
            .type('cypress');
        cy.wait(500);
        cy.get('ul[role="listbox"] > li').first().click();
        
        expect(cy.get('h3 > a'), 'to.have.length', 10);
    });
    
    it('should switch to videos tab', () => {
        cy.get('div[role="navigation"] div[class*="item"] > a').eq(VIDEOS_INDEX).click();
        
        expect(cy.get('a img'), 'to.have.length', 12);
    });

});

function expect(element, condition, param) {
    element.should(condition.replace('to.', ''), param);
};