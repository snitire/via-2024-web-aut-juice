import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {
  static get url() {
    return "/#/address/select";
  }

  static clickAddress(address) {
    cy.get("mat-cell").contains(address).click();
  }

  static get continueBtn() {
    return cy.get("button").contains("Continue");
  }
}
