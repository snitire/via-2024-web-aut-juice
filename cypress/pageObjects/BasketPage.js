import { BasePage } from "../pageObjects/basePage";

export class BasketPage extends BasePage {
  static get url() {
    return "/#/basket";
  }

  static get checkoutBtn() {
    return cy.get("#checkoutButton");
  }
}
