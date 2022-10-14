// @ts-ignore

describe('check default page', () => {
  it('looks for a heading', () => {
    cy.visit('localhost:3000');
    cy.contains('h1', 'Welcome to Next.js!');
  })
})