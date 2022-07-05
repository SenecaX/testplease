describe('please-ui-ecosystem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=hellostorybookcomponent--primary'));
  it('should render the component', () => {
    cy.get('testplease-hello-storybook').should('exist');
  });
});