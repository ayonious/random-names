describe('Integration Tests', () => {
  it('initial page should be empty', () => {
    cy.visit('http://localhost:8080');
    cy.get('.MuiCard-root').invoke('text').should('contain', '');
  });

  it('After clicking on shuffle, should see a name', () => {
    cy.visit('http://localhost:8080');
    cy.contains('Shuffle').click();
    cy.get('.MuiCard-root').invoke('text').should('match', /\w+/); // word with at least one char
  });

  it('Select other country => click on shuffle, should see a name', () => {
    cy.visit('http://localhost:8080');
    cy.contains('Germany').click();
    cy.contains('Italy').click();

    cy.contains('Italy').click();
    cy.contains('Bangladesh').click();

    cy.contains('Shuffle').click();
    cy.get('.MuiCard-root').invoke('text').should('match', /\w+/); // word with at least one char
  });
});
