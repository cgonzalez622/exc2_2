//objects 

//create
const myGameOne = {
    title: "Cooking Mama",
    type: "Wii game",
    numberOfPlayers: "one player", 
    rating: "9 out of 10 would play again",
    shortDescription: "The series is a cooking simulation-styled minigame."
};
console.log(myGameOne);

const myGameTwo = {
    title: "Bananagrams",
    type: "Word game",
    numberOfPlayers: "two to eight players", 
    rating: "6 out of 10...I like playing but I always lose :(",
    shortDescription: "Involves arragining letter tiles in a gird, fist one to use all of their and remaining tiles wins!"
};

console.log(myGameTwo);

const myGameThree = {
    title: "Pokemon Diamond and Pearl",
    type: "Nintendo DS game",
    numberOfPlayers: "one player", 
    rating: "10 out of 10 Legend Status",
    shortDescription: "You play as a pokemon trainer embarking on their journey in ecountering new pokemon and battles."
};

console.log(myGameThree);

//prompt
const pickNumber = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game."); 
console.log("User picks number", pickNumber);

//concat
if (pickNumber === "1") {
    window.alert(" You selected " + myGameOne["title"] + "!" + " A " + myGameOne["type"] + " that needs " + myGameOne["numberOfPlayers"] + ". " + myGameOne["shortDescription"] + " I would give it a " + myGameOne["rating"] + " ! ");
}
if (pickNumber === "2") {
    window.alert(" You selected " + myGameTwo["title"] + "!" + " A " + myGameTwo["type"] + " that needs " + myGameTwo["numberOfPlayers"] + ". " + myGameTwo["shortDescription"] + " I would give it a " + myGameTwo["rating"] + " ! ");
}
if (pickNumber === "3") {
    window.alert(" You selected " + myGameThree["title"] + "!" + " A " + myGameThree["type"] + " that needs " + myGameThree["numberOfPlayers"] + ". " + myGameThree["shortDescription"] + " I would give it a " + myGameThree["rating"] + " ! ");
}
