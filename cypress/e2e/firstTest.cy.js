describe('Primer Prueba', () => {
	it('Navegar a nuestra primer pagina', () => {
		cy.visit('www.platzi.com')
	})

	it('Navegar a nuestra segunda pagina', () => {
		cy.visit('www.google.com')
	})
})