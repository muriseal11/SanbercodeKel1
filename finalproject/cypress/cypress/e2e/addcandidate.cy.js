describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.orangehrm-header-container > .oxd-button').click();
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('aaaa');
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('ddddd');
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('sssss');
    cy.get('.oxd-select-text-input').click();
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('asddfd@qwerty.com');
    cy.get('.oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('234');
    cy.get('.oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('234365756');
    cy.get('.oxd-button--secondary').click();
  })
})