import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
  static get url() {
    return "/#/payment/shop";
  }

  static clickCardNr(number) {
    // find row with number
    cy.get("mat-cell").contains("************" + number)
    // get its parent row and find the selection radio btn
    .parent().find("mat-radio-button")
    .click();
  }

  static get continueBtn() {
    return cy.get("button").contains("Continue");
  }
}
