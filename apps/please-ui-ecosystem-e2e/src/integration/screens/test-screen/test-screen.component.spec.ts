describe('please-ui-ecosystem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testscreencomponent--primary'));
  it('should render the component', () => {
    cy.get('testplease-test-screen').should('exist');
  });
});