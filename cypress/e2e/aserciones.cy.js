describe('Aserciones', () => {
	// before and beforeEach
	beforeEach(() => {
		cy.visit('/automation-practice-form')
		cy.once('uncaught:exception', () => false)
		cy.url().should('include', 'demoqa.com')
	})

	// after and afterEach
	afterEach(() => {
		cy.visit('/')
	})

	it('Asercion', () => {
		cy.get('#firstName')
			.should('be.visible')
			.and('have.attr', 'placeholder', 'First Name')
	})

	it('Asercion 2', () => {
		cy.get('#firstName').then((element) => {
			expect(element).to.be.visible
			expect(element).to.have.attr('placeholder', 'First Name')
		})
	})

	it('Asercion 3', () => {
		cy.url().should('include', 'demoqa.com')

		cy.get('#firstName').then((element) => {
			assert.equal(element.attr('placeholder'), 'First Name')
		})
	})
})
