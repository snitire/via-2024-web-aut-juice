import { BasePage } from "../pageObjects/basePage";

export class RegisterPage extends BasePage {
  static uniqueEmail;

  static get url() {
    return "/#/register";
  }

  static get elementName() {
    return cy.get("elementSelector");
  }

  static get emailField() {
    return cy.get("#emailControl");
  }

  static get passwordField() {
    return cy.get("#passwordControl");
  }
  static get repeatPasswordField() {
    return cy.get("#repeatPasswordControl");
  }

  static get securityQnMenu() {
    return cy.get("[name='securityQuestion']")
  }

  static get securityQnList() {
    return cy.get("[aria-label='Selection list for the security question']")
  }

  static findSecurityQnByName(name) {
    return RegisterPage.securityQnList.contains(name);
  }

  static get securityQnAnswer() {
    return cy.get("#securityAnswerControl");
  }

  static get registerBtn() {
    return cy.get("#registerButton");
  }

  static generateUniqueEmail() {
    let rndInt = Math.floor(Math.random() * 100000) + 1;
    RegisterPage.uniqueEmail = "email_" + rndInt + "@mailing.net";
  }
}
