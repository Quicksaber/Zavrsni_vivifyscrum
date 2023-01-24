class Navigation {
    get homePageButton() {
        return cy.get('.vs-c-site-logo')
    }

    get addNewButton(){
        return cy.get("div[class='vs-c-list__btn el-tooltip vs-c-list-btn--new-workspace']")
    }

    get addNewOrganizationButton(){
        return cy.contains('Add Organization')
    }

    get addNewBoard(){
        return cy.get('.vs-c-btn--primary')
    }

    toCreateOrganizationPage(){
        this.addNewButton.trigger('mouseenter')
        this.addNewOrganizationButton.click({force:true})
    }

    toAddNewBoardPage() {
        this.addNewBoard.click({force:true})
    }

    orgVisibleInSidebar(url) {
        // Org ID
        let pageHref = url.substring(url.lastIndexOf('organizations'))
        cy.get(`a[href="/${pageHref}"]`).should('be.visible') // Koristiti .eq() ??
    }

    boardVisibleInSidebar(id) {
        cy.get(`a[href="/boards/${id}"]`).should('be.visible')
    }
}

export const navigation = new Navigation;