var generateQuiz = function(myQuestions, document) {

  function _isMultipleChoice(answer) {
    return Array.isArray(answer);
  }

  function buildQuiz(myQuestions, quizContainer){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
        let inputType = "radio";
        if (_isMultipleChoice(currentQuestion.answer)) {
          inputType = "checkbox";
        }
  
        // and for each available answer...
        for (letter in currentQuestion.choices){
          answers.push(
            `<label>
            <input type="${inputType}" name="question${questionNumber}" value="${letter}">
            ${letter}:
            ${currentQuestion.choices[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question">${questionNumber+1}:  ${currentQuestion.question} </div>
          <div class="choices"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }
  
  function getUserAnswers(questionNumber, choiceContainer) {
    const selector = `input[name=question${questionNumber}]:checked`;
    
    const userAnswerNodes = (choiceContainer.querySelectorAll(selector) || {});
    
    let userAnswers = [];
    userAnswerNodes.forEach( (checkbox) => {
      userAnswers.push(checkbox.value);
    });

    return userAnswers;
  }

  function isCorrectAnswer(currentQuestion, questionNumber, choiceContainer) {
    var userAnswers = getUserAnswers(questionNumber, choiceContainer);

    if (_isMultipleChoice(currentQuestion.answer)) {
      return JSON.stringify(userAnswers) === JSON.stringify(currentQuestion.answer);
    }
    // force currentQuestion.answer into an array of one
    return JSON.stringify(userAnswers) === JSON.stringify([currentQuestion.answer]); 
  }

  function colorAnswersGreenAndWrongChoicesRed(currentQuestion, questionNumber, choiceContainer, correctChoice) {
    var userAnswers = getUserAnswers(questionNumber, choiceContainer);
    let answerIndex = 0, userAnswerIndex = 0; // to loop over multiple answers
    let answer = "a"; // start with default
    choiceContainer.querySelectorAll("label").forEach( (label) => {
      if (_isMultipleChoice(currentQuestion.answer)) { 
        answer = currentQuestion.answer[answerIndex];
      }
      else {
        answer = currentQuestion.answer;
      }
      // correct answers - green
      var currentChoice = label.querySelector("input").value;
      if (currentChoice === answer) {
        label.style.color = 'green';
        answerIndex++;
        if (currentChoice === userAnswers[userAnswerIndex]) {
          userAnswerIndex++;
        }
      }
      // wrong answers - red
      else if (currentChoice === userAnswers[userAnswerIndex]) {
        label.style.color = 'red';
        userAnswerIndex++;
      }
    });
  }

  function showResults(event) {

    const resultsContainer = document.getElementById('results');

    // gather answer containers from our quiz
    const choiceContainers = quizContainer.querySelectorAll('.choices');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      let correctChoice = false;

      // if answer is correct
      if (isCorrectAnswer(currentQuestion, questionNumber, choiceContainers[questionNumber])) {
        // add to the number of correct answers
        numCorrect++;
        correctChoice = true;
      }

      colorAnswersGreenAndWrongChoicesRed(currentQuestion, questionNumber, choiceContainers[questionNumber], correctChoice);
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const submitButton = document.getElementById('submit');

  // Kick things off
  buildQuiz(myQuestions, quizContainer);

  // Event listeners
  submitButton.addEventListener('click', showResults);
};

module.exports = generateQuiz;