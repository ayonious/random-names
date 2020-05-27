describe('Integration Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('initial page should have => 1.no name shown, 2.shuffle button', () => {
    cy.get('.MuiCard-root').invoke('text').should('contain', '');
    cy.contains('Shuffle');
  });

  it('After clicking on shuffle => should see a name', () => {
    cy.contains('Shuffle').click();
    cy.get('.MuiCard-root').invoke('text').should('match', /\w+/); // word with at least one char
  });

  it('Select other country => click on shuffle => should see a name', () => {
    cy.contains('Germany').click();
    cy.contains('Italy').click();

    cy.contains('Italy').click();
    cy.contains('Bangladesh').click();

    cy.contains('Shuffle').click();
    cy.get('.MuiCard-root').invoke('text').should('match', /\w+/); // word with at least one char
  });
});
