import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountBtn() {
    return cy.get("button").contains("Account");
  }

  static get loginBtn() {
    return cy.get("button").contains("Login");
  }

  static get accountMenu() {
    return cy.get("[aria-label='Go to user profile']");
  }

  static get searchIcon() {
    return cy.get("#searchQuery");
  }

  static get searchInput() {
    return HomePage.searchIcon.find("input");
  }
}
