import { BasePage } from "../pageObjects/basePage";

export class SearchPage extends BasePage {
  static get url() {
    return "/#/search";
  }

  static get searchResultCards() {
    return cy.get(".ribbon-card");
  }

  static findResultCardByName(productName) {
    return cy.get(".item-name").contains(productName).parents(".ribbon-card");
  }

  static get openedCard() {
    return cy.get("app-product-details");
  }

  static closeCard() {
    let closeBtn = cy.get("button").contains("Close");
    closeBtn.click();
  }

  static get reviewPanelHeader() {
    return cy.get("mat-expansion-panel-header");
  }

  static get allReviews() {
    return cy.get(".review-text");
  }

  static get newReviewTextArea() {
    return cy.get("[aria-label='Text field to review a product']");
  }

  static get newReviewSubmitBtn() {
    return cy.get("#submitButton");
  }

  static addProductToBasket(name) {
    let productCard = SearchPage.findResultCardByName(name);
    productCard.find("button[aria-label='Add to Basket']").click();
  }
}
