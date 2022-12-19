describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')
  
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.oxd-button > .oxd-icon').click();
    cy.get(':nth-child(2) > .oxd-input').type('qa lead');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').click();
    cy.get('.oxd-button--secondary').click();

  })
})