describe('please-ui-ecosystem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pleaseprogressbarcomponent--primary'));
  it('should render the component', () => {
    cy.get('testplease-please-progress-bar').should('exist');
  });
});