// describe('Navegacion', {browser: 'chrome'}, () => {
// describe('Navegacion', {browser: '!chrome'}, () => {
describe('Navegacion', () => {
	it('Navegar a nuestra primer pagina', () => {
		cy.visit('www.platzi.com')
	})

	it('Recargar pagina', () => {
		cy.visit('www.platzi.com')
		cy.reload()
	})

	it('Recargar pagina de forma forzada', () => {
		cy.visit('www.google.com')
		cy.reload(true)
	})

	it.only('Navegar hacia atras y hacia adelante', () => {
		cy.visit('www.google.com')
		cy.visit(
			'https://www.google.com/search?q=platzi&oq=platzi&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTISCAEQLhhDGMcBGLEDGNEDGIoFMgYIAhBFGDwyBggDEEUYPDIGCAQQRRhBMgYIBRBFGEEyBggGEEUYQTIGCAcQRRg80gEIMTc1OWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8'
		)

		cy.go('back')
		// cy.go(-1)

		cy.go('forward')
		// cy.go(+1)
	})
})
