describe('Esperando por elementos', () => {
	
    beforeEach(() => {
        cy.visit('www.platzi.com')
    })
    
    it('Esperar por un tiempo definido', () => {
		cy.wait(5000)
	})

    it('Esperar por un elemento', () => {
		cy.get('.Nav-header-mobileCtas-actions--login > span')//.click()
	})

    it('Esperar por un elemento y hacer una asercion', () => {
		cy.get('.Nav-header-mobileCtas-actions--login > span', {timeout: 5000}).should('be.visible')
	})
})

describe('Esperando por elementos', () => {
	
    beforeEach(() => {
        cy.visit('/')
    })
    
    it.only('Deshabilitar el retry', () => {
		//cy.get('.banner-image', {timeout:5000})
        cy.get('.banner-image', {timeout:0})
	})
})
