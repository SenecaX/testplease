describe('please-ui-ecosystem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pleasetaskcomponent--primary&args=task;'));
  it('should render the component', () => {
    cy.get('testplease-please-task').should('exist');
  });
});