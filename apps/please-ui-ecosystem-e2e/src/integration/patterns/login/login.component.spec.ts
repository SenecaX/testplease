describe('please-ui-ecosystem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=logincomponent--primary'));
  it('should render the component', () => {
    cy.get('testplease-login').should('exist');
  });
});