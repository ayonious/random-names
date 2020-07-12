describe('Visual Testing', () => {
  const SCREENS = [375, 768, 1280];

  it('Responsiveness Testing', () => {
    cy.visit('http://localhost:8080');

    cy.percySnapshot('Home Page is Responsive', {
      widths: SCREENS,
    });
  });
});
