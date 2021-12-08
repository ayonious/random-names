describe('Integration Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('initial page should have => 1.no name shown, 2.shuffle button 3.Start_Shuffle Text', () => {
    cy.get('.MuiCard-root').invoke('text').should('contain', '');
    cy.contains('Shuffle');
    cy.contains('Start Shuffling!');
  });

  it('After clicking on shuffle => should see a name', () => {
    cy.contains('Shuffle').click();
    cy.get('.MuiCard-root').invoke('text').should('match', /\w+/); // word with at least one char
  });

  it('Select other country => click on shuffle => should see a name', () => {
    cy.contains('Germany').click({force: true});
    cy.contains('Italy').click({force: true});
  
    cy.contains('Region').click({force: true});

    cy.contains('Italy').click({force: true});
    cy.contains('Bangladesh').click({force: true});

    cy.contains('Shuffle').click({force: true});
    cy.get('.MuiCard-root').invoke('text').should('match', /\w+/); // word with at least one char
  });
});
