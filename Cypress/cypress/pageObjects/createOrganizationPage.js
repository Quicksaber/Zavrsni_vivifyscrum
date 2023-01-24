const faker = require('faker');

class CreateOrg {
    get organizationNameInput(){
        return cy.get("input[placeholder='Enter name...']")
    }
    // Previous button
    get cancelButton () {
        return cy.get("button[name='prev_btn']")
    }
    // Create button
    get nextButton () {
        return cy.get("button[name='next_btn']")
    }

    get uploadLogoPrompt() {
        return cy.get('.el-upload-dragger')
    }

    get uploadButton() {
        return cy.get('.vs-u-text--right > .el-button--success')
    }

    get cancelUploadButton() {
        return cy.get('.el-button--warning')
    }

    get confirmationButton() {
        return cy.get('.vs-c-modal--features-button > .vs-c-btn')
    }
    
    createOrganization() {
        this.nextButton.should('be.disabled')
        this.organizationNameInput.type(faker.company.companyName(), {force:true})
        this.nextButton.click()  //{force: true} ????
        this.uploadLogoPrompt.click()
        cy.get('input[type="file"]').selectFile('cypress/fixtures/avatar.jpg', {force: true})
        this.uploadButton.click({force: true})
        this.nextButton.click({force: true})
        // Vise se ne pojavljuje!?
        // this.confirmationButton.click({force:true})
    }

    
}

export const organization = new CreateOrg();