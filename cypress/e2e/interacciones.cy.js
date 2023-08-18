describe('Interactuar con los elementos', () => {
	it('click', () => {
		cy.visit('/buttons')
		cy.once('uncaught:exception', () => false)

		cy.get('button').eq(3).click()
		cy.get('#dynamicClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a dynamic click')
	})

    it('doble click', () => {
		cy.visit('/buttons')
		cy.once('uncaught:exception', () => false)

		cy.get('#doubleClickBtn').dblclick()
		cy.get('#doubleClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a double click')
	})

    it('click derecho', () => {
		cy.visit('/buttons')
		cy.once('uncaught:exception', () => false)

		cy.get('#rightClickBtn').rightclick()
		cy.get('#rightClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a right click')
	})

	it('Forzar click', () => {
		cy.visit('/dynamic-properties')
		cy.once('uncaught:exception', () => false)
		//cy.get('#enableAfter').click({timeout: 0, force:true})
	})

	it.only('Click por posicion', () => {
		cy.visit('/buttons')
		cy.once('uncaught:exception', () => false)
		cy.get('button').eq(3).parent().parent().click('topRight')
		cy.get('button').eq(3).parent().parent().click('bottomLeft')
		cy.get('button').eq(3).parent().parent().click(5, 60)
	})
})
