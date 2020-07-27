const generateQuiz = require('./quizGenerator');

test('generateQuiz', () => {
  const myQs = [
    {
        question: "Who invented JavaScript?",
        choices: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
        },
        answer: "c"
    },
    {
        question: "Which one of these is a JavaScript package manager?",
        choices: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
        },
        answer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        choices: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
        },
        answer: "d"
  }];

  document.body.innerHTML = 
    '<div id="quiz">' +
    '</div>' + 
    '<button id="submit">Submit</button>' +
    'div id="results">';

  const quizContainer = document.getElementById('quiz');
  const submitButton = document.getElementById('submit');

  generateQuiz(myQs, quizContainer, submitButton);
  console.log(quizContainer.innerHTML);
  // expect(quizContainer.childElementCount).toBe(5);
});