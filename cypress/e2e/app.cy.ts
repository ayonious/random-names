/// <reference types="cypress" />

describe('Random Names', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows the greeting and an empty name card', () => {
    cy.contains('Start Shuffling!');
    cy.get('[data-testid="name-card"]').should('have.text', '');
  });

  it('shows a name after shuffling', () => {
    cy.get('[data-testid="shuffle-button"]').click();
    cy.get('[data-testid="name-card"]').invoke('text').should('match', /\w+/);
  });

  it('shows a name from the selected country', () => {
    cy.get('#country-select').type('Paraguay{enter}', { force: true });
    cy.get('[data-testid="shuffle-button"]').click();
    cy.get('[data-testid="name-card"]').should('have.text', 'Agusto');
  });
});
