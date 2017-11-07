'use strict';

const QUESTIONS = [
  {
    question: 'What is the name of Tom Haverfords alcoholic beverage?',
    answers: ['Lemon Sexy', 'Tommy Fresh', 'Snake Juice', 'Cobra Venom' ],
    correctAnswer: 'Snake Juice'
  },
  {
    question: 'What kind of car does Donna drive?',
    answers: ['Jaguar', 'Rolls Royce', 'Mercedes Benz', 'Ferrari'],
    correctAnswer: 'Mercedes Benz'
  },
  {
    question: 'What is Andy Dwyers alter ego?',
    answers: ['Burt Macklin, FBI', 'Randy Handler, CIA', 'Jack Thrifty, DEA', 'Paula Hart, PTA'],
    correctAnswer: 'Bert Macklin, FBI'
  },
  {
    question: 'Where was Leslie Knopp born?',
    answers: ['Eagleton', 'Pawnee', 'Indianapolis', 'Washington D.C.'],
    correctAnswer: 'Eagleton'
  },
  {
    question: 'What is Bens terrible choice of favorite food?',
    answers: ['Mini muffins', 'Calzones', 'Pop-Tarts', 'Hot-Pockets'],
    correctAnswer: 'Calzones'
  },
  {
    question: 'Who is Leslie Knopps teenage nemesis?',
    answers: ['Gary Finklestein', 'Greg Pikitus', 'George Patticus', 'Ginny Weasley'],
    correctAnswer: 'Greg Pikitus'
  }
];

const STORE = {
  questionIndex: 0  //to track where the user is at in the quiz
};


//Template generators
function generateAnswerList(answers) {

}

function generateNextQuestion(currentIndex) {
  let possibleAnswers = QUESTIONS[STORE.questionIndex].answers.map(function(val, index){
    return `<div><input type="radio" name="answers" value="${val}" data-index-attr="${index}" /><span class="possible-answers">${val}</span></div>`;
  })
  possibleAnswers = possibleAnswers.join('');
  let content = `
    <div class="question-container">
      <h2 class="question-title">
        ${QUESTIONS[STORE.questionIndex].question}
      </h2>
      <form id="answers-options">
        ${possibleAnswers}
        <input type="submit">Submit</input>
      </form>
    </div>
  `;
  return content;
}

//Rendering functions
function renderQuestionText() {
  $('.container').html(generateNextQuestion);
  
}

//Event handlers

function handleStartSubmit() {
  $('.start').on('click' , function(event) {
    //console.log('it works');
   let questionIndex = 0;
   generateNextQuestion(questionIndex);

  });
}

function handleAnswerSubmitted() {
  $('.user-controls').on('click', '.submit-answer', () => {
    // Retrive answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}

$(function(){
  handleAnswerSubmitted();
  handleStartSubmit();
  renderQuestionText();
  //$("#testing").html(generateNextQuestion());
});