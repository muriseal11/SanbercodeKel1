describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  })

 
  it('testaddadmin', function() {
 
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('A');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('a');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get(':nth-child(1) > .oxd-main-menu-item').click();
    cy.get('.orangehrm-header-container > .oxd-button').click();
    cy.get('.oxd-autocomplete-text-input > input').clear('a');
    cy.get('.oxd-autocomplete-text-input > input').type('a');
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('L');
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('L1s44');
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear('1');
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('1q2w3e4r');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('1');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('1q2w3e4r');
    cy.get('.oxd-button--secondary').click();
    cy.get('.oxd-button--secondary').click();
  
  });
})