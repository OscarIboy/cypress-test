describe('Interactuar con los elementos', () => {
	let texto

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

	it('Checkboxes and radio buttons', () => {
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

	it('Extrayendo informacion', function () {
		cy.visit('/automation-practice-form')
		cy.once('uncaught:exception', () => false)

		// Alias
		cy.get('#firstName').as('nombre')
		cy.get('@nombre').type('Oscar')

		cy.get('@nombre').then(($nombre) => {
			texto = $nombre.val()
			expect($nombre.val()).to.equal('Oscar')
		})

		// Forma correcta, pero el it debe de ser it('descripcion', function(){})
		cy.get('@nombre').invoke('val').should('equal', 'Oscar')
		cy.get('@nombre').invoke('val').as('nombreGlobal')
	})

	it('Compartir informacion', function () {
		cy.visit('/automation-practice-form')
		cy.once('uncaught:exception', () => false)

		cy.get('#lastName').as('nombre2')
		cy.get('@nombre2').type(texto)

		// Forma Correcta
		cy.get('#firstName').type(this.nombreGlobal)
	})

	it('Interactuando con los dropdown(select)', function () {
		cy.visit('https://app.endtest.io/guides/docs/how-to-test-dropdowns/')
		cy.once('uncaught:exception', () => false)

		//cy.get('#pets').select(1)
		cy.get('#pets').select(2).should('have.value', 'rabbit')
		//cy.get('#pets').select('rabbit').should('have.value', 'rabbit')
	})

	it('Interactuando con los dropdown(select) dinamico', function () {
		cy.visit('https://react-select.com/home')
		cy.get('#react-select-6-input').type(' ')

		cy.get('#react-select-6-listbox')
			.children()
			.children()
			.each(($el, index, $list) => {
				if ($el.text() === 'Red') {
					//$el.on('click')
					// $el.click()
					// Forma Correcta
					//cy.wrap($el).click()
				}
			})

		// Otra forma
		cy.get('#react-select-6-option-3').click()
	})

	it('Interactuando con tablas', function () {
		cy.visit('https://www.w3schools.com/html/html_tables.asp')
		cy.get('#customers')
			.find('th')
			.each(($el, index, $list) => {
				cy.log($el.text())
			})

		cy.get('#customers')
			.find('th')
			.first()
			.invoke('text')
			.should('equal', 'Company')

		cy.get('#customers')
			.find('th')
			.eq(1)
			.invoke('text')
			.should('equal', 'Contact')

		cy.get('#customers')
			.find('th')
			.eq(2)
			.invoke('text')
			.should('equal', 'Country')

		cy.get('#customers').find('tr').should('have.length', 7)

		cy.get('#customers')
			.find('tr')
			.eq(1)
			.find('td')
			.eq(1)
			.invoke('text')
			.should('equal', 'Maria Anders')

		// Otra forma de hacerlo
		cy.get('#customers')
			.find('tr')
			.eq(1)
			.find('td')
			.eq(1)
			.then(($el) => {
				const texto = $el.text()
				expect(texto).to.equal('Maria Anders')
			})
	})

	it('Interactuando con date pickers', function () {
		cy.visit('https://material.angular.io/components/datepicker/overview')
		cy.get('datepicker-overview-example')
			.find('label')
			.eq(0)
			.type('08/11/2023')

		cy.get('datepicker-overview-example').find('button').click()
		//cy.get('datepicker-overview-example').find('svg).click()
	})

	it('Interactuando con modals', function () {
		cy.visit('/modal-dialogs')
		cy.once('uncaught:exception', () => false)

		cy.get('#showSmallModal').click()
		cy.get('#closeSmallModal').click()

		cy.get('#showLargeModal').click()
		cy.get('#closeLargeModal').click()
	})

	it('Interactuando con alerts', function () {
		cy.visit('/alerts')
		cy.once('uncaught:exception', () => false)

		// IMPORTANTE
		// const stub = cy.stub()
		// cy.on('window:confirm', stub)
		// cy.get('#confirmButton')
		// 	.click()
		// 	.then(() => {
		// 		expect(stub.getCall(0)).to.be.calledWith(
		// 			'Do you confirm action?'
		// 		)
		// 	})
		// cy.contains('You selected Ok').should('exist')

		// Manera sensilla
		// cy.get('#confirmButton').click()
		// cy.on('windows:confirm', (confirm)=>{
		// 	expect(confirm).to.equal('Do you confirm action?')
		// })
		// cy.contains('You selected Ok').should('exist')

		// Cancel
		cy.get('#confirmButton').click()
		cy.on('window:confirm', (confirm) => {
			expect(confirm).to.equal('Do you confirm action?')
			return false
		})
		cy.contains('You selected Cancel').should('exist')
	})

	it('Interactuando con tooltip', function () {
		cy.visit('/tool-tips')
		cy.once('uncaught:exception', () => false)

		cy.get('#toolTipButton').trigger('mouseover')
		cy.contains('You hovered over the Button').should('exist')
		cy.get('#toolTipButton').trigger('mouseout')
		cy.contains('You hovered over the Button').should('not.exist')
	})

	it.only('Interactuando con drag and drop', function () {
		cy.visit('/dragabble')
		cy.once('uncaught:exception', () => false)

		cy.get('#dragBox')
			.trigger('mousedown', {
				which: 1,
				pageX: 600,
				pageY: 100,
			})
			.trigger('mousemove', { which: 1, PageX: 100, pageY: 600 })
			.trigger('mouseup')
	})
})
