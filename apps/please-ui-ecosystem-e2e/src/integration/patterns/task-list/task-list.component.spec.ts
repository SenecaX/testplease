describe('please-ui-ecosystem', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tasklistcomponent--primary'));
  it('should render the component', () => {
    cy.get('testplease-task-list').should('exist');
  });
});