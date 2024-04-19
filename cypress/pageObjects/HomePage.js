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

  static get basketBtn() {
    return cy.get("button").contains("Your Basket");
  }

  static get accountMenuUser() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get accountMenuOrders() {
    return cy.get("button[aria-label='Show Orders and Payment Menu']");
  }

  static get accountMenuSavedAddresses() {
    return cy.get("button[aria-label='Go to saved address page']");
  }

  static get accountMenuPaymentOptions() {
    return cy.get("button[aria-label='Go to saved payment methods page']");
  }

  static get searchIcon() {
    return cy.get("#searchQuery");
  }

  static get searchInput() {
    return HomePage.searchIcon.find("input");
  }

  static searchFor(input) {
    HomePage.searchIcon.click();
    HomePage.searchInput.type(input + "{enter}");
  }

  static get itemsPerPage() {
    return cy.get("mat-select[aria-label='Items per page:']")
  }

  static setItemsPerPageTo(number) {
    cy.get(".mat-option-text").contains(number).click();
  }
}
