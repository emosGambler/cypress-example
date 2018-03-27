const using = require('jasmine-data-provider');
const testData = require('./../fixtures/sample.data');

describe('Google', () => {
    console.log('testData: ', testData);
    testData.testData.forEach(data => {
        describe(`Search with query '${data.query}'`, () => {
        
            before(() => {
                cy.visit('/');
            });

            it('should url be correct', () => {
                cy.contains('type').click();
                expect(cy.url(), 'to.include', data.google_url);
            });
    
            it('should query be searched', () => {
                cy.get('input.gsfi').first()
                    .type(`${data.query}`);
                cy.wait(data.short_timeout);
                cy.get('ul[role="listbox"] > li').first().click();
                
                expect(cy.get('h3 > a'), 'to.have.length', data.number_of_results);
            });
            
            it('should switch to videos tab', () => {
                cy.contains('Filmy').click();
                
                expect(cy.get('a img'), 'to.have.length', data.number_of_videos);
            });
        });
    });
    
    describe('Google Search with commands', () => {
        
        before(() => {
            cy.searchQuery('cypress');
        });
        
        it('should use commands for searching query', () => {
            expect(cy.get('h3 > a'), 'to.have.length', 10);
        });
    });
    
    function expect(element, condition, param) {
        element.should(condition.replace('to.', ''), param);
    };
});