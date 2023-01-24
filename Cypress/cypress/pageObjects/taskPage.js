const faker = require('faker');

class Tasks {
    get newTaskButton() {
        return cy.get('button[class ="vs-add-new-task vs-c-btn vs-c-btn--themify-secondary vs-c-btn--round vs-c-btn--sm"]')
    }

    get taskInput() {
        return cy.get('.el-textarea__inner')
    }

    get cancelTaksInput() {
        return cy.get('[name="new_item_cancel"] > span')
    }

    get saveTaskInput() {
        return cy.get('[name="new_item_save"] > span')
    }

    addNewTask(){
        this.newTaskButton.click({force:true})
        this.taskInput.type(faker.lorem.sentence(), {force:true})
        this.saveTaskInput.click({force:true})
    }
}

export const tasks = new Tasks();