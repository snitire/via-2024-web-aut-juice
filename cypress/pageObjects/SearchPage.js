import { BasePage } from "../pageObjects/basePage";

export class SearchPage extends BasePage {
  static get url() {
    return "/#/search";
  }

  static get searchResultCards() {
    return cy.get(".ribbon-card");
  }

  static findResultCardByName(productName) {
    return cy.get(".item-name").contains(productName);
  }

  static get openedCard() {
    return cy.get("app-product-details");
  }
}
