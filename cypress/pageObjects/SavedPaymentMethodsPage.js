import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/saved-payment-methods";
  }

  static get addNewCardHeader() {
    return cy.get("mat-expansion-panel-header");
  }

  static get nameField() {
    return cy.get("#mat-input-1");
  }

  static get cardNrField() {
    return cy.get("#mat-input-2");
  }

  static get expiryMonthField() {
    return cy.get("#mat-input-3");
  }

  static get expiryYearField() {
    return cy.get("#mat-input-4");
  }

  static selectMonth(month) {
    SavedPaymentMethodsPage.expiryMonthField.select(month.toString());
  }

  static selectYear(year) {
    SavedPaymentMethodsPage.expiryYearField.select(year.toString());
  }

  static get submitBtn() {
    return cy.get("#submitButton");
  }

  static findCardNrRow(number) {
    return cy.get("mat-cell").contains("************" + number).parent();
  }
}
