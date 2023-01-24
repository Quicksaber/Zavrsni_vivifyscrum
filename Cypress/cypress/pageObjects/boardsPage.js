const faker = require('faker');

class Boards {
    get boardTitleInput() {
        return cy.get('.vs-input-border > input')
    }

    // Previous button
    get cancelButton () {
        return cy.get("button[name='prev_btn']")
    }
    // Create button
    get nextButton () {
        return cy.get("button[name='next_btn']")
    }

    get scrumRadioButton() {
        return cy.get(':nth-child(1) > .vs-c-radio > .vs-c-radio-check')
    }

    get kanbanRadioButton() {
        return cy.get(':nth-child(2) > .vs-c-radio > .vs-c-radio-check')
    }

    createBoard() {
        this.nextButton.should('be.disabled')
        this.boardTitleInput.type(faker.company.bsNoun(), {force:true})
        this.nextButton.click()
        this.kanbanRadioButton.click()
        this.nextButton.click().click().click().click()

    }
}

export const boards = new Boards();