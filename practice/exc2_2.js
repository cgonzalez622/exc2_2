//objects

//from curly brackets (empty with content)
const myBike = {color: "yellow", wheels: "knobby", suspension: "shocks"};
// Adding additional properties/items to myBike
myBike.seat = "cushy";
//viewing values by key (dot and array noation)
console.log ("wheels", myBike.wheels); //or ("seat", myBike["seat"]);
//Deleting properties
delete myBike.seat;
//merging Objects
const brettsBike = {madeOf: "steel", gears: 12};
console.log("bike", myBike);
const mergedBike = Object.assign(myBike,brettsBike);
console.log(mergedBike);

//Let's make a program: asking a random question
const questions = [
    {question: "red + blue", answer: "purple"},
    {question: "2 + banana", answer: "2_bananana"},
    {question: "adding white", answer: "tint"}
]
//break it down into steps
//1. determine how long question set is
const questionLength = questions.length;

//2. choose a pseudo-random number between 0 and the length of the a

const questionIndex = Math.floor(Math.random() * questionLength); // random between 0 and 2

//3. Display question with window.prompt
const answer = window.prompt(questions[questionIndex].question);
if (answer === questions[questionIndex].answer) {
    window.alert("you win");
}

 