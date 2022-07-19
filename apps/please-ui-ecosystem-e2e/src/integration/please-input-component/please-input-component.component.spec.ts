describe('please-ui-ecosystem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=PleaseInputComponent--primary'));
  it('should render the component', () => {
    cy.get('testplease-please-input-component').should('exist');
  });
});
