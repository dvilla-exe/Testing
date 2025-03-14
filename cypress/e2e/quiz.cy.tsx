describe("Tech Quiz End-to-End Tests", () => {
    beforeEach(() => {
      cy.intercept("GET", "/api/questions", { fixture: "questions.json" }).as("getQuestions");
      cy.visit("/");
    });
  
    it("loads the homepage and starts the quiz", () => {
      cy.contains("Start Quiz").click();
      cy.wait("@getQuestions");
      cy.get("h2").should("exist"); // Ensure a question is displayed
    });
  
    it("allows answering all questions and shows the final score", () => {
      cy.contains("Start Quiz").click();
      cy.wait("@getQuestions");
  
      for (let i = 0; i < 10; i++) {
        cy.get("button.btn.btn-primary").eq(1).click(); // Click an answer
      }
  
      cy.contains("Quiz Completed").should("exist");
    });
  
    it("allows restarting the quiz", () => {
      cy.contains("Start Quiz").click();
      cy.wait("@getQuestions");
  
      for (let i = 0; i < 10; i++) {
        cy.get("button.btn.btn-primary").eq(1).click(); // Click an answer
      }
  
      cy.contains("Take New Quiz").click();
      cy.contains("Start Quiz").should("exist");
    });
  });
  