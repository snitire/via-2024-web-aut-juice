import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
  static get url() {
    return "/#/delivery-method";
  }

  static clickMethod(method) {
    cy.get("mat-cell").contains(method).click();
  }

  static get continueBtn() {
    return cy.get("button").contains("Continue");
  }
}
