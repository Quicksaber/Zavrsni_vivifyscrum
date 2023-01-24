import  data  from "../fixtures/data.json"

class Login {
    get emailAdressInput() {
        return cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner')
    }

    get passwordInput() {
        return cy.get('[type="password"]')
    }

    get logInButton() {
        return cy.get('.vs-u-text--left > .vs-c-btn')
    }

    loginToAccount() {
        this.emailAdressInput.type(data.user.email, {force: true})
        this.passwordInput.type(data.user.password, {force: true})
        this.logInButton.click({force: true})
    }

}

export const loginPage = new Login()