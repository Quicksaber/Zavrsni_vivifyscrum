class Navigation {
    get addNewButton(){
        return cy.get("div[class='vs-c-list__btn el-tooltip vs-c-list-btn--new-workspace']")
    }

    get addNewOrganizationButton(){
        return cy.contains('Add Organization')
    }

    createOrganizationPage(){
        this.addNewButton.trigger('mouseenter')
        this.addNewOrganizationButton.click({force:true})
    }
}

export const navigation = new Navigation;