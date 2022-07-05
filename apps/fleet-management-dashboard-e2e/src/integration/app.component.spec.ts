describe('fleet-management-dashboard', () => {
  beforeEach(() => cy.visit('/iframe.html'));
  it('should render the component', () => {
    cy.get('testplease-root').should('exist');
  });
});
