// @ts-ignore

describe('Check Default', () => {
  it('Visits Localhost', () => {
    cy.visit('localhost:3000');

    cy.contains('h1', 'Welcome to Next.js!');
  })
})