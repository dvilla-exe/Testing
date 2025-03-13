import React from "react";
import Quiz from "../../client/src/components/Quiz";
import { mount } from "cypress/react";

describe("Quiz Component", () => {
  beforeEach(() => {
    cy.fixture("questions.json").then((questions) => {
      cy.intercept("GET", "/api/questions", { body: questions }).as("getQuestions");
    });
  });

  it("renders the Quiz component", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start Quiz").should("exist");
  });

  it("starts the quiz when the Start button is clicked", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    cy.contains("Question").should("exist");
  });

  it("allows selecting an answer", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    cy.get(".answer-option").first().click();
    cy.get(".next-button").click();
  });

  it("displays the final score at the end", () => {
    mount(<Quiz />);
    cy.get("button").contains("Start Quiz").click();
    
    // Simulate answering all questions
    for (let i = 0; i < 10; i++) {
      cy.get(".answer-option").first().click();
      cy.get(".next-button").click();
    }

    cy.contains("Your final score is").should("exist");
  });
});
