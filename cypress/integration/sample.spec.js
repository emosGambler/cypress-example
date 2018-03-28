const using = require('jasmine-data-provider');
const data = require('./../fixtures/sample.data').testData;
const timeout = require('./../fixtures/sample.data').timeout;
const commonData = require('./../fixtures/sample.data').commonData;

describe('Google', () => {
    data.forEach(d => {
        describe(`Search with query '${d.query}'`, () => {
        
            before(() => {
                cy.visit('/');
            });

            it('should url be correct', () => {
                cy.contains('type').click();
                expect(cy.url(), 'to.include', commonData.google_url);
            });
    
            it('should query be searched', () => {
                cy.get('input.gsfi').first()
                    .type(`${d.query}`);
                cy.wait(timeout.short);
                cy.get('ul[role="listbox"] > li').first().click();
                
                expect(cy.get('h3 > a'), 'to.have.length', d.number_of_results);
            });
            
            it('should switch to videos tab', () => {
                cy.contains('Filmy').click();
                
                expect(cy.get('a img'), 'to.have.length', d.number_of_videos);
            });
        });
    });
    
    describe('Search with commands', () => {
        
        before(() => {
            cy.searchQuery('cypress io');
        });
        
        it('should use commands for searching query', () => {
            expect(cy.get('h3 > a'), 'to.have.length', 13);
        });
    });
    
    function expect(element, condition, param) {
        element.should(condition.replace('to.', ''), param);
    };
});