describe('fleet-management-dashboard', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('testplease-nx-welcome').should('exist');
  });
});