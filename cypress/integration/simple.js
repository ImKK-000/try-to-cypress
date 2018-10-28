describe('Run simple test', function () {
    it('first test case', function () {
        cy.visit('https://google.com')
          .get('#lst-ib')
          .type('กระเพราไก่ไข่ดาว{enter}')
    })
})