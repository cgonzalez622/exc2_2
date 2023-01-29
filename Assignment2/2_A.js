//Create an array objects that represent a question and answer. 

const questions = [
    {question: "What is the color of the sky?", answer: "blue"}, 
    {question: "What is the word when there is more than one mouse?", answer: "mice"},
    {question: "How many lives does a cat have?", answer: "9"}
]
//A random question prompt should appear when the page loads. 

//1. determine how long question set is
const questionLength = questions.length;

//2. choose a pseudo-random number
const questionIndex = Math.floor(Math.random() * questionLength);

//3. Display question with window.prompt

const answer = window.prompt(questions [questionIndex].question);

//Do not check the answer yet. Just fire an alert combining "You answered " and then the response and then add " The correct answer was " and then display the answer property from the object. Use concatenation to string all these strings together.

if (answer === questions[questionIndex].answer) {
    window.alert("you win!");
} 
else { "You answered " + answer + ". The correct answer was " + questions[questionIndex].answer;
}