describe('please-ui-ecosystem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pleasecardcomponent--primary'));
  it('should render the component', () => {
    cy.get('testplease-please-card').should('exist');
  });
});