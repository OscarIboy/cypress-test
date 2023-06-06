describe('Locators', () => {

	it('Tag', () => {
		cy.visit('/automation-practice-form')
        cy.once('uncaught:exception', () => false);
        cy.get('input')
	})

    it('Atributo', () => {
		cy.visit('/automation-practice-form')
        cy.once('uncaught:exception', () => false);
        cy.get('[placeholder="First Name"]')
	})

    it('Id', () => {
        cy.visit('/automation-practice-form')
        cy.once('uncaught:exception', () => false);
        cy.get('#firstName')
    })

    it.only('class', () => {
        cy.visit('/automation-practice-form')
        cy.once('uncaught:exception', () => false);
        cy.get('.mr-sm-2.form-control')
    })

})