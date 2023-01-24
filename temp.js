


// import { data } from "../fixtures/data.json"
// import { loginPage } from "../pageObjects/loginPage"

describe('positive task creation flow', () => {
    before(() => {
        cy.request('POST', 'https://cypress-api.vivifyscrum-stage.com/api/v2/login', {
            
            "email": "raziel1412@gmail.com",
            "password": "sifra123",
            "g-recaptcha-response": ""
                      
        })
        .its('body').then((req) => {
            window.localStorage.setItem('testToken', req.user.full_name)
        })
    })

    it('visit home url', () => {
        cy.visit('https://cypress.vivifyscrum-stage.com/my-organizations')
        cy.get("//span[@class='el-dropdown-link']").should('exist')

    })
})



// login koji radi*******************

import { data } from "../fixtures/data.json"
import { loginPage } from "../pageObjects/loginPage"
import { navigation } from "../pageObjects/navigation"

describe('positive task creation flow', () => {
    before(() => {
        cy.visit('')
        // cy.url().should('include', '/login')
    })

    it('login with valid credentials', () => {
        cy.intercept("POST", "https://cypress-api.vivifyscrum-stage.com/api/v2/login").as('loginUser')
        loginPage.loginToAccount();
        cy.wait('@loginUser').then((intercept) => {
            expect(intercept.response.statusCode).to.eql(200)
        })
        cy.url().should('include', '/my-organizations')

    })

    it('create organization', () => {
        cy.url().should('include', '/my-organizations')
        navigation.insertOrganization();
    })
})