// Testing HomePage Component functionality
describe('The user should be able to login and out of the system.', () => {
  it('Login page loads correctly.', () => {
    cy.visit('/HomePage')
  })
  it('Logs in correctly.', () => {
    // Email entered.
    cy.get('#mat-input-0').type('tutor@gmail.com')
    // Password entered.
    cy.get('#mat-input-1').type('Password')
    // Login button clicked.
    cy.get('.center > .mat-focus-indicator').click()
    // Confirms correct user is signed in.
    cy.url().should('eq', 'http://localhost:4200/ModuleSelection/0')
  })
  it('Signs out correctly, preventing display of system components.', () => {
    // Sign out button clicked.
    cy.get('app-header > .mat-toolbar > :nth-child(4) > .mat-focus-indicator > .mat-button-wrapper').click()
    // Confirms user is rerouted back to login page.
    cy.url().should('eq', 'http://localhost:4200/HomePage')
    // URL route manually entered.
    cy.visit('http://localhost:4200/ModuleSelection/0')
    // Confirm user cannot access component content.
    cy.get('.user-redirect').should('be.visible')
    // User clicks to return to login page.
    cy.get('.user-redirect').click()
  })
})

describe('The system should be able to handle alternative login scenarios.', () => {
  it('Error messages are shown prompting for valid credential formats to be entered.', () => {
    // Login button clicked.
    cy.get('.center > .mat-focus-indicator').click()
    // Confirms email required validator message is visible.
    cy.contains('Email required').should('be.visible')
    // Confirms password required validator message is visible.
    cy.contains('Password is required').should('be.visible')
    // Enters invalid email format.
    cy.get('#mat-input-0').type('tutorgmail.com')
    // Confirms validator asking for valid email format is displayed.
    cy.contains('Please enter a valid email').should('be.visible')
    // Setup for next test.
    cy.get('#mat-input-0').clear()
  })
  it('The wrong login credentials are entered', () => {
    // Fake user email entered.
    cy.get('#mat-input-0').type('fakeUser@gmail.com')
    cy.get('#mat-input-1').type('Password')
    // Login button clicked.
    cy.get('.center > .mat-focus-indicator').click()
    // Confirms user not recognised message is displayed.
    cy.get('.mat-simple-snackbar').should('be.visible')
    // Setup for next test.
    cy.get('#mat-input-0').clear()
    cy.get('#mat-input-1').clear()
    // Fake user password entered.
    cy.get('#mat-input-0').type('tutor@gmail.com')
    cy.get('#mat-input-1').type('Password1234567890')
    // Login button clicked.
    cy.get('.center > .mat-focus-indicator').click()
    // Confirms user not recognised message is displayed.
    cy.get('.mat-simple-snackbar').should('be.visible')
    // Setup for next test.
    cy.get('#mat-input-0').clear()
    cy.get('#mat-input-1').clear()
  })
})


// End-to-end testing of functionality available to students.
describe('The student should be able to access the SDLC module and complete a quiz.', () => {
  it('User navigates to the SDLC boards.', () => {
    // Student logs in.
    cy.get('#mat-input-0').type('student1@gmail.com')
    cy.get('#mat-input-1').type('Password')
    // Login button clicked.
    cy.get('.center > .mat-focus-indicator').click()
    // Confirm that the system recognises that a student is signed in.
    cy.url().should('eq', 'http://localhost:4200/ModuleSelection/1')
    // Student clicks the button for the SDLC module.
    cy.get('[style="left: 0px; width: calc((50% - 0.5px) * 1 + 0px); margin-top: 0px; padding-top: calc((18.75% - 0.5px) * 1 + 0px);"] > .mat-grid-tile-content > .module-container > .mat-focus-indicator').click()
    // Confirm user see's boards for the SDLC module.
    cy.url().should('eq', 'http://localhost:4200/BoardSelection/1/SDLC')
  })
  it('User navigates to the quiz selection for SDLC page by selecting the quiz board.', () => {
    // Student clicks the quiz board button.
    cy.get('[style="left: 0px; width: calc((20% - 0.8px) * 1 + 0px); margin-top: 0px; padding-top: calc((20% - 0.8px) * 1 + 0px);"] > .mat-grid-tile-content > .button-container > .mat-focus-indicator').click()
    // Confirm quiz selection page is displayed showing SDLC quiz's.
    cy.url().should('eq', 'http://localhost:4200/QuizSelection/1/SDLC')
    cy.contains('Software Development Life Cycle quiz 1')
  })
  it('User selects a quiz to attempt and exits the quiz once it is displayed.', () => {
    // User clicks quiz button.
    cy.get(':nth-child(1) > .mat-focus-indicator').click()
    // Quiz 1 was selected, confirm quiz page is displayed showing the questions for quiz 1.
    cy.url().should('eq', 'http://localhost:4200/Quiz/1/SDLC/1')
    cy.contains('Post Lecture Quiz 1')
    // Exit quiz.
    cy.get('[aria-label="Exit Quiz"]').click()
    // Confirm quiz selection page is displayed showing SLDC quiz's.
    cy.url().should('eq', 'http://localhost:4200/QuizSelection/1/SDLC')
    cy.contains('Software Development Life Cycle quiz 1')
  })
  // it('User completes and submits a quiz and recieves 0 marks.', () => {
  //   // User clicks quiz button.
  //   cy.get(':nth-child(1) > .mat-focus-indicator').click()
  //   // User selects an answer to question 1.
  //   cy.get('#mat-radio-26 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click()
  //   // // User selects an answer to question 2.
  //   // cy.get('#mat-radio-30 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click()
  //   // // User selects an answer to question 3.
  //   // cy.get('#mat-radio-35 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click()
  //   // // User selects an answer to question 4.
  //   // cy.get('#mat-radio-39 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click()
  //   // User submits quiz.
  //   cy.get('.button-container > .ng-star-inserted').click()
  //   // Confirm quiz results page is displayed showing students score.
  //   cy.url().should('eq', 'http://localhost:4200/Quiz/1/SDLC/1')
  //   cy.contains('Post Lecture Quiz Results')
  //   cy.contains('0 out of 4')
  //   // User clicks exit button.
  //   cy.get('.button-container > .mat-focus-indicator').click()
  //   // Confirm quiz selection page for SDLC module is displayed.
  //   cy.url().should('eq', 'http://localhost:4200/QuizSelection/1/SDLC')
  //   cy.contains('Software Development Life Cycle quiz 1')
  // })
})







describe('The student should be able to access the MI module and complete a quiz.', () => {
  it('User navigates to the MI boards.', () => {
    // temp
    cy.get('app-header > .mat-toolbar > :nth-child(4) > .mat-focus-indicator > .mat-button-wrapper').click()
    cy.get('#mat-input-2').type('student1@gmail.com')
    cy.get('#mat-input-3').type('Password')
    // Login button clicked.
    cy.get('.center > .mat-focus-indicator').click()



    // Student clicks the button for the MI module.
    cy.get('[style="left: calc((50% - 0.5px + 1px) * 1); width: calc((50% - 0.5px) * 1 + 0px); margin-top: 0px; padding-top: calc((18.75% - 0.5px) * 1 + 0px);"] > .mat-grid-tile-content > .module-container > .mat-focus-indicator').click()
    // Confirm user see's boards for the MI module.
    cy.url().should('eq', 'http://localhost:4200/BoardSelection/1/MI')
  })
  it('User navigates to the quiz selection page for MI by selecting the quiz board.', () => {
    // Student clicks the quiz board button.
    cy.get('[style="left: 0px; width: calc((20% - 0.8px) * 1 + 0px); margin-top: 0px; padding-top: calc((20% - 0.8px) * 1 + 0px);"] > .mat-grid-tile-content > .button-container > .mat-focus-indicator').click()
    // Confirm quiz selection page is displayed showing MI quiz's.
    cy.url().should('eq', 'http://localhost:4200/QuizSelection/1/MI')
    cy.contains('Machine Intelligence quiz 1')
  })
  it('User selects a quiz to attempt and exits the quiz once it is displayed.', () => {
    // User clicks quiz button.
    cy.get(':nth-child(1) > .mat-focus-indicator').click()
    // Quiz 1 was selected, confirm quiz page is displayed showing the questions for quiz 1.
    cy.url().should('eq', 'http://localhost:4200/Quiz/1/MI/5')
    cy.contains('Post Lecture Quiz 5')
    // Exit quiz.
    cy.get('[aria-label="Exit Quiz"]').click()
    // Confirm quiz selection page is displayed showing MI quiz's.
    cy.url().should('eq', 'http://localhost:4200/QuizSelection/1/MI')
    cy.contains('Machine Intelligence quiz 1')
  })
  // it('User completes and submits a quiz and recieves 0 marks.', () => {
  //   // User clicks quiz button.
  //   cy.get(':nth-child(1) > .mat-focus-indicator').click()
  //   // User selects an answer to question 1.
  //   cy.get('#mat-radio-47 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click()
  //   // User submits quiz.
  //   cy.get('.button-container > .ng-star-inserted').click()
  //   // Confirm quiz results page is displayed showing students score.
  //   cy.url().should('eq', 'http://localhost:4200/Quiz/1/MI/5')
  //   cy.contains('Post Lecture Quiz Results')
  //   cy.contains('0 out of 4')
  //   // User clicks exit button.
  //   cy.get('.button-container > .mat-focus-indicator').click()
  //   // Confirm quiz selection page for MI module is displayed.
  //   cy.url().should('eq', 'http://localhost:4200/QuizSelection/1/MI')
  //   cy.contains('Machine Intelligence quiz 1')
  //   // Sign out as setup for next test
  //   cy.get('app-header > .mat-toolbar > :nth-child(4) > .mat-focus-indicator > .mat-button-wrapper').click()
  // })
})

// End-to-end testing of functionality available to tutors.
describe('The tutor should be able to access the SDLC module and view results for the quiz they select.', () => {
  it('User navigates to the SDLC boards.', () => {
    cy.get('app-header > .mat-toolbar > :nth-child(4) > .mat-focus-indicator > .mat-button-wrapper').click()
    // Tutor logs in.
    cy.get('#mat-input-4').type('tutor@gmail.com')
    cy.get('#mat-input-5').type('Password')
    // Login button clicked.
    cy.get('.center > .mat-focus-indicator').click()
    // Confirm that the system recognises that a tutor is signed in.
    cy.url().should('eq', 'http://localhost:4200/ModuleSelection/0')
    // Student clicks the button for the SDLC module.
    cy.get('[style="left: 0px; width: calc((50% - 0.5px) * 1 + 0px); margin-top: 0px; padding-top: calc((18.75% - 0.5px) * 1 + 0px);"] > .mat-grid-tile-content > .module-container > .mat-focus-indicator').click()
    // Confirm user see's boards for the SDLC module.
    cy.url().should('eq', 'http://localhost:4200/BoardSelection/0/SDLC')
  })
  it('User navigates to the quiz selection for SDLC page by selecting the quiz board.', () => {
    // Student clicks the quiz board button.
    cy.get('[style="left: 0px; width: calc((20% - 0.8px) * 1 + 0px); margin-top: 0px; padding-top: calc((20% - 0.8px) * 1 + 0px);"] > .mat-grid-tile-content > .button-container > .mat-focus-indicator').click()
    // Confirm quiz selection page is displayed showing SDLC quiz's.
    cy.url().should('eq', 'http://localhost:4200/QuizSelection/0/SDLC')
    cy.contains('Software Development Life Cycle quiz 1')
  })
  it('User selects a quiz to view results and exits the quiz once it is displayed.', () => {
    // User clicks quiz button.
    cy.get(':nth-child(1) > .mat-focus-indicator').click()
    // Quiz 1 was selected, confirm quiz page is displayed showing the questions for quiz 1.
    cy.url().should('eq', 'http://localhost:4200/QuizStatistics/0/SDLC/1')
    cy.contains('Post Lecture Quiz 1 Results')
    // Confirm graph showing results is displayed.
    cy.get('svg').should('be.visible')
    // Exit quiz.
    cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper').click()
    // Confirm quiz selection page is displayed showing SLDC quiz's.
    cy.url().should('eq', 'http://localhost:4200/QuizSelection/0/SDLC')
    cy.contains('Software Development Life Cycle quiz 1')
  })
})

describe('The tutor should be able to access the MI module and view results for the quiz they select.', () => {
  it('User navigates to the MI boards.', () => {
    cy.get('app-header > .mat-toolbar > :nth-child(4) > .mat-focus-indicator > .mat-button-wrapper').click()
    // Tutor logs in.
    cy.get('#mat-input-6').type('tutor@gmail.com')
    cy.get('#mat-input-7').type('Password')
    // Login button clicked.
    cy.get('.center > .mat-focus-indicator').click()




    // Student clicks the button for the MI module.
    cy.get('[style="left: calc((50% - 0.5px + 1px) * 1); width: calc((50% - 0.5px) * 1 + 0px); margin-top: 0px; padding-top: calc((18.75% - 0.5px) * 1 + 0px);"] > .mat-grid-tile-content > .module-container > .mat-focus-indicator').click()
    // Confirm user see's boards for the MI module.
    cy.url().should('eq', 'http://localhost:4200/BoardSelection/0/MI')
  })
  it('User navigates to the quiz selection for MI page by selecting the quiz board.', () => {
    // Student clicks the quiz board button.
    cy.get('[style="left: 0px; width: calc((20% - 0.8px) * 1 + 0px); margin-top: 0px; padding-top: calc((20% - 0.8px) * 1 + 0px);"] > .mat-grid-tile-content > .button-container > .mat-focus-indicator').click()
    // Confirm quiz selection page is displayed showing MI quiz's.
    cy.url().should('eq', 'http://localhost:4200/QuizSelection/0/MI')
    cy.contains('Machine Intelligence quiz 1')
  })
  it('User selects a quiz to view results and exits the quiz once it is displayed.', () => {
    // User clicks quiz button.
    cy.get(':nth-child(1) > .mat-focus-indicator').click()
    // Quiz 1 was selected, confirm quiz page is displayed showing the questions for quiz 1.
    cy.url().should('eq', 'http://localhost:4200/QuizStatistics/0/MI/5')
    cy.contains('Post Lecture Quiz 5 Results')
    // Confirm graph showing results is displayed.
    cy.get('svg').should('be.visible')
    // Exit quiz.
    cy.get('.button-container > .mat-focus-indicator > .mat-button-wrapper').click()
    // Confirm quiz selection page is displayed showing MI quiz's.
    cy.url().should('eq', 'http://localhost:4200/QuizSelection/0/MI')
    cy.contains('Machine Intelligence quiz 1')
  })
})