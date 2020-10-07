describe('Demo Test Suite',function()
{
    it('Verify Title Of The Page',function(){
       cy.visit('https://www.Amazon.com/') // navigate to URL
       cy.title().should('eq','Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more') // title verification
       cy.get("#twotabsearchtextbox").type("women's tops") // enter value in search box
       cy.get(".nav-input[value = 'Go']").click() // click on search button
       cy.get('[alt="NILOUFO Womens Casual Shirts Notch V Neck Blouses 3/4 Roll Sleeve Tunic Tops"]').click() // click on image link
       cy.get("#add-to-cart-button").click()
       cy.get("#hlb-view-cart-announce").click()

       cy.get("#sc-subtotal-amount-buybox").contains('$18.99') // validating amount
    })
})