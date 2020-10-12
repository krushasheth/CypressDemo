describe('Demo Test Suite',function()
{
    it('Verify Title Of The Page',function(){
       cy.visit('https://www.Amazon.com/') // navigate to URL
       cy.title().should('eq','Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more') // title verification
       cy.get("#twotabsearchtextbox").type("women's pants") // enter value in search box
       cy.get(".nav-input[value = 'Go']").click() // click on search button
    })
})