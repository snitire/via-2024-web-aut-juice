import { BasePage } from "./basePage";

export class SavedAddressesPage extends BasePage {
  static get url() {
    return "/#/address/saved";
  }

  static get addAddressBtn() {
    return cy.get("button").contains("Add New Address");
  }

  static findAddressRowByValue(val) {
    return cy.get("mat-cell").contains(val)
    .parent() // parent mat-row
  }
}
