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

	it('Click por posicion', () => {
		cy.visit('/buttons')
		cy.once('uncaught:exception', () => false)
		cy.get('button').eq(3).parent().parent().click('topRight')
		cy.get('button').eq(3).parent().parent().click('bottomLeft')
		cy.get('button').eq(3).parent().parent().click(5, 60)
	})

	it('Input type text', () => {
		cy.visit('/automation-practice-form')
		cy.once('uncaught:exception', () => false)
		cy.get('#firstName').type('Oscar')
		cy.get('#lastName').type('Iboy')

		// Limpiar input
		cy.get('#firstName').type('{selectAll}{backspace}')
		cy.get('#firstName').type('Eduardo')

		// Limpiar input 2
		cy.get('#firstName').clear()
		cy.get('#firstName').type('Alejandro')
	})

	it.only('Checkboxes and radio buttons', () => {
		cy.visit('/automation-practice-form')
		cy.once('uncaught:exception', () => false)
		
		//cy.get('#gender-radio-1').click({force: true})
		//cy.get('#gender-radio-1').check({force: true})

		cy.get('label[for="gender-radio-1"]').click()
		cy.get('#gender-radio-1').should('be.checked')

		//cy.get('#hobbies-checkbox-1').click({force: true})
		//cy.get('#hobbies-checkbox-1').check({force: true})
		//cy.get('#hobbies-checkbox-1').uncheck({force: true})

		cy.get('label[for="hobbies-checkbox-1"]').click()
		cy.get('label[for="hobbies-checkbox-3"]').click()

		// assert
		cy.get('#hobbies-checkbox-1').should('be.checked')
		cy.get('#hobbies-checkbox-2').should('not.be.checked')
		cy.get('#hobbies-checkbox-3').should('be.checked')
	})
})
