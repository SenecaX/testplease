describe('please-ui-ecosystem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pleasebuttoncomponent--primary&args=color;text;'));
  it('should render the component', () => {
    cy.get('testplease-please-button').should('exist');
  });
});