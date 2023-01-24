import { data } from "../fixtures/data.json"
import { loginPage } from "../pageObjects/loginPage"
import { navigation } from "../pageObjects/navigation"
import { organization } from "../pageObjects/createOrganizationPage"
import { boards } from "../pageObjects/boardsPage"
import { tasks } from "../pageObjects/taskPage"

describe('positive task creation flow', () => {
    before(() => {
        cy.visit('')
        // cy.url().should('include', '/login')
    })

    it('login with valid credentials', () => {
        cy.intercept("POST", "https://cypress-api.vivifyscrum-stage.com/api/v2/login").as('loginUser') // URL izvesti u data.json??
        loginPage.loginToAccount();
        cy.wait('@loginUser').then((intercept) => {
            expect(intercept.response.statusCode).to.eql(200)
        })
        cy.url().should('include', '/my-organizations')

    })

    it('create organization', () => {
        cy.intercept("POST", "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations").as('createOrg') // URL izvesti u data.json??
        navigation.toCreateOrganizationPage();
        // ↑ ↓ merge maybe??
        organization.createOrganization();
        cy.wait('@createOrg').then((intercept) => {
            expect(intercept.response.statusCode).to.eql(201)
        })
        cy.url().should('include', '/boards')
        cy.url().then((url) => {
            navigation.orgVisibleInSidebar(url);
          })
    })
    
    it('create board', () => {
        cy.intercept("POST", "https://cypress-api.vivifyscrum-stage.com/api/v2/boards").as('createBoard')
        navigation.toAddNewBoardPage();
        boards.createBoard();
        cy.wait('@createBoard').then((intercept) => {
            expect(intercept.response.statusCode).to.eql(201)
            let boardID = intercept.response.body.id
            cy.url().should('include', `/${boardID}`)
            navigation.boardVisibleInSidebar(boardID)
        })
        
        
    })

    it('create task', () => {
        tasks.newTaskButton.should('not.be.visible')
        cy.intercept("POST", "https://cypress-api.vivifyscrum-stage.com/api/v2/tasks").as('createTask')
        tasks.addNewTask()
        cy.wait('@createTask').then((intercept) => {
            expect(intercept.response.statusCode).to.eql(201)
        })
    })
})