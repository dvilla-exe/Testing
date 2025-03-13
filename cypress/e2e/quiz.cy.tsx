describe("Tech Quiz End-to-End Tests", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("loads the homepage and starts the quiz", () => {
      cy.contains("Start Quiz").click();
      cy.contains("Question").should("exist");
    });
  
    it("allows answering all questions and shows the final score", () => {
      cy.contains("Start Quiz").click();
      
      for (let i = 0; i < 10; i++) {
        cy.get(".answer-option").first().click();
        cy.get(".next-button").click();
      }
  
      cy.contains("Your final score is").should("exist");
    });
  
    it("allows restarting the quiz", () => {
      cy.contains("Start Quiz").click();
      
      for (let i = 0; i < 10; i++) {
        cy.get(".answer-option").first().click();
        cy.get(".next-button").click();
      }
  
      cy.contains("Restart Quiz").click();
      cy.contains("Start Quiz").should("exist");
    });
  });
  