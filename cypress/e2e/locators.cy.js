describe('Locators', () => {
	it('Tag', () => {
		cy.visit('/automation-practice-form')
		cy.once('uncaught:exception', () => false)
		cy.get('input')
	})

	it('Atributo', () => {
		cy.visit('/automation-practice-form')
		cy.once('uncaught:exception', () => false)
		cy.get('[placeholder="First Name"]')
	})

	it('Id', () => {
		cy.visit('/automation-practice-form')
		cy.once('uncaught:exception', () => false)
		cy.get('#firstName')
	})

	it('class', () => {
		cy.visit('/automation-practice-form')
		cy.once('uncaught:exception', () => false)
		cy.get('.mr-sm-2.form-control')
	})

	it('contains', () => {
		cy.visit('/automation-practice-form')
		cy.once('uncaught:exception', () => false)
		cy.contains('Reading')
		cy.contains('.header-wrapper', 'Widgets')
	})

    it('parents', () => {
		cy.visit('/automation-practice-form')
		cy.once('uncaught:exception', () => false)

        // Obteniendo el elemento padre
		cy.get('[placeholder="First Name"]').parent()

        // Obteniendo los elementos padres
		cy.get('[placeholder="First Name"]').parents()

        cy.get('[placeholder="First Name"]').parents().find('label')

        // Obteniendo los elementos hijos
        cy.get('form').find('label')
	})
})
