// @ts-ignore

describe('My First Test', () => {
  it('Visits Localhost', () => {
    cy.visit('localhost:3000');

    cy.contains('h1', 'Welcome to Next.js!');
  })
})