import { data } from "../fixtures/data.json"
import { loginPage } from "../pageObjects/loginPage"
import { navigation } from "../pageObjects/navigation"
import { organization } from "../pageObjects/createOrganizationPage"

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
        navigation.createOrganizationPage();
        // ↑ ↓ merge??
        organization.createOrganization();
    })
})