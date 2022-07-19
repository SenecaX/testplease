describe('please-ui-ecosystem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pleaseinputcomponent--primary'));
  it('should render the component', () => {
    cy.get('testplease-please-input').should('exist');
  });
});