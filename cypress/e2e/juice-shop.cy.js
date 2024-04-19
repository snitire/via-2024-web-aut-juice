import { BasketPage } from "../pageObjects/BasketPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { RegisterPage } from "../pageObjects/RegisterPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";
import { SearchPage } from "../pageObjects/SearchPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      //HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountBtn.click();
      // Click Login button
      HomePage.loginBtn.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.logInBtn.click();
      // Click Account button
      HomePage.accountBtn.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.accountMenuUser.should(
        "contain.text",
        "demo"
      );
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountBtn.click();
      // Login button
      HomePage.loginBtn.click();
      // Click "Not yet a customer?"
      LoginPage.newUserBtn.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      RegisterPage.generateUniqueEmail();
      RegisterPage.emailField.type(RegisterPage.uniqueEmail);
      // Fill in password field and repeat password field with same password
      let password = "SuperS4fePa55word!";
      RegisterPage.passwordField.type(password);
      RegisterPage.repeatPasswordField.type(password);
      // Click on Security Question menu
      RegisterPage.securityQnMenu.click();
      // Select  "Name of your favorite pet?"
      RegisterPage.findSecurityQnByName("Name of your favorite pet?").click();
      // Fill in answer
      RegisterPage.securityQnAnswer.type("mr lamp");
      // Click Register button
      RegisterPage.registerBtn.click();
      // Set email value to previously created email
      LoginPage.emailField.type(RegisterPage.uniqueEmail);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.logInBtn.click();
      // Click Account button
      HomePage.accountBtn.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.accountMenuUser.should(
        "contain.text",
        RegisterPage.uniqueEmail
      );
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      // Search for Lemon
      HomePage.searchFor("Lemon");
      // Select a product card - Lemon Juice (500ml)
      SearchPage.findResultCardByName("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      SearchPage.openedCard.should(
        "contain.text",
        "Sour but full of vitamins."
      );
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search and validate Lemon - multiple cards", () => {
      // Click on search icon
      // Search for 500ml
      HomePage.searchFor("500ml");
      // Select a product card - Lemon Juice (500ml)
      SearchPage.findResultCardByName("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      SearchPage.openedCard.should(
        "contain.text",
        "Sour but full of vitamins."
      );
    });
   
    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
      // Click on search icon
      // Search for 500ml
      HomePage.searchFor("500ml");
      // Select a product card - Eggfruit Juice (500ml)
      SearchPage.findResultCardByName("Eggfruit Juice (500ml)").click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      SearchPage.openedCard.should(
        "contain.text",
        "Now with even more exotic flavour."
      );
      // Close the card
      SearchPage.closeCard();

      // Select a product card - Lemon Juice (500ml)
      SearchPage.findResultCardByName("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      SearchPage.openedCard.should(
        "contain.text",
        "Sour but full of vitamins."
      );
      // Close the card
      SearchPage.closeCard();

      // Select a product card - Strawberry Juice (500ml)
      SearchPage.findResultCardByName("Strawberry Juice (500ml)").click();
      // Validate that the card (should) contains "Sweet & tasty!"
      SearchPage.openedCard.should(
        "contain.text",
        "Sweet & tasty!"
      );
    });

    // Create scenario - Read a review
    it("Read a review", () => {
      // Click on search icon
      // Search for King
      HomePage.searchFor("King");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      SearchPage.findResultCardByName('OWASP Juice Shop "King of the Hill" Facemask').click();
      // Click expand reviews button/icon (wait for reviews to appear)
      SearchPage.reviewPanelHeader.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      SearchPage.allReviews.should(
        "contain.text",
        "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!"
      )
    });

    // Create scenario - Add a review
    it("Add a review", () => {
      // Click on search icon
      // Search for Raspberry
      HomePage.searchFor("Raspberry");
      // Select a product card - Raspberry Juice (1000ml)
      SearchPage.findResultCardByName("Raspberry Juice (1000ml)").click();
      // Type in review - "Tastes like metal"
      let review = "Tastes like metal";
      cy.wait(250);
      SearchPage.newReviewTextArea.type(review);
      // Click Submit
      SearchPage.newReviewSubmitBtn.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      SearchPage.reviewPanelHeader.click();
      // Validate review -  "Tastes like metal"
      SearchPage.allReviews.should(
        "contain.text",
        review
      )
    });

    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
      // Validate that the default amount of cards is 12
      SearchPage.searchResultCards.should("have.length", 12);
      // Change items per page (at the bottom of page) to 24
      HomePage.itemsPerPage.click();
      HomePage.setItemsPerPageTo(24);
      // Validate that the amount of cards is 24
      SearchPage.searchResultCards.should("have.length", 24);
      // Change items per page (at the bottom of page) to 36
      HomePage.itemsPerPage.click();
      HomePage.setItemsPerPageTo(36);
      // Validate that the amount of cards is 35
      SearchPage.searchResultCards.should("have.length", 35);
    });

    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt", () => {
      // Click on search icon
      // Search for Girlie
      HomePage.searchFor("Girlie");
      // Add to basket "Girlie"
      SearchPage.addProductToBasket("OWASP Juice Shop CTF Girlie-Shirt");
      // Click on "Your Basket" button
      HomePage.basketBtn.click();
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutBtn.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.clickAddress("United Fakedom");
      // Click Continue button
      SelectAddressPage.continueBtn.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.clickMethod("Standard Delivery");
      // Click Continue button
      DeliveryMethodPage.continueBtn.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.clickCardNr(5678);
      // Click Continue button
      PaymentOptionsPage.continueBtn.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.placeOrderBtn.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.confirmationText.should(
        "contain.text",
        "Thank you for your purchase!"
      );
    });

    // Create scenario - Add address
    it("Add address", () => {
      // Click on Account
      HomePage.accountBtn.click();
      // Click on Orders & Payment
      // Click on My saved addresses
      HomePage.accountMenuOrders.click();
      HomePage.accountMenuSavedAddresses.click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.addAddressBtn.click();
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      CreateAddressPage.countryField.type("Bajookieland")
      CreateAddressPage.nameField.type("John Smith")
      CreateAddressPage.mobileNrField.type("22222222")
      CreateAddressPage.zipCodeField.type("BL-1000")
      CreateAddressPage.addressField.type("Real Street 100")
      CreateAddressPage.cityField.type("Bajookietown")
      CreateAddressPage.stateField.type("Bajookiestate")
      // Click Submit button
      CreateAddressPage.submitBtn.click();
      // Validate that previously added address is visible
      let addressRow = SavedAddressesPage.findAddressRowByValue("Bajookieland");
      addressRow.should("contain.text", "John Smith");
      addressRow.should("contain.text", "Real Street 100");
      addressRow.should("contain.text", "Bajookietown");
      addressRow.should("contain.text", "Bajookiestate");
      addressRow.should("contain.text", "BL-1000");
    });

    // Create scenario - Add payment option
    it("Add payment option", () => {
      // Click on Account
      HomePage.accountBtn.click();
      // Click on Orders & Payment
      HomePage.accountMenuOrders.click();
      // Click on My payment options
      HomePage.accountMenuPaymentOptions.click();
      // Create page object - SavedPaymentMethodsPage
      // Click Add new card
      SavedPaymentMethodsPage.addNewCardHeader.click();
      // Fill in Name
      SavedPaymentMethodsPage.nameField.type("John Smith");
      // Fill in Card Number
      SavedPaymentMethodsPage.cardNrField.type("1234567890001111");
      // Set expiry month to 7
      SavedPaymentMethodsPage.selectMonth(7);
      // Set expiry year to 2090
      SavedPaymentMethodsPage.selectYear(2090);
      // Click Submit button
      SavedPaymentMethodsPage.submitBtn.click();
      // Validate that the card shows up in the list
      let newCard = SavedPaymentMethodsPage.findCardNrRow(1111);
      newCard.should("contain.text", "John Smith");
      newCard.should("contain.text", "7/2090");
    });
  });
});
