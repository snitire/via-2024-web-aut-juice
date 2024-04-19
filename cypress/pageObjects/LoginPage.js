import { BasePage } from "../pageObjects/basePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("elementSelector");
  }

  static get emailField() {
    return cy.get("#email");
  }

  static get passwordField() {
    return cy.get("#password");
  }

  static get logInBtn() {
    return cy.get("button").contains("Log in");
  }

  static get newUserBtn() {
    return cy.get("a").contains("Not yet a customer?")
  }
}
