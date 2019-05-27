var flowers = ["rose", "iris", "hyacinth", "daisy", "daffodil", "buttercup", "orchid", "carnation", "hydrangea", "foxglove", "amaranth", "peony", "lavender", "lily", "lilac", "gardenia", "rhododendron", "chrysanthemum", "snapdragon", "tulip", "marigold", "poinsettia", "violet", "sunflower", "croton"];
var randomWord;


//var userGuess = "n";
var resultWord = [];
var userGuess;
var remainingGuesses = 20;
var letterBank = [];
var userScore = 0;

//initializing result word to underscores
//console.log(resultWord);

//display result word in html
function updateHTML() {
    var resultWordHTML = resultWord.join(" ");
    var letterBankHTML = letterBank.join(" ");
    document.getElementById("currentWord").innerHTML = resultWordHTML;
    document.getElementById("guessCount").innerHTML = remainingGuesses;
    document.getElementById("lettersGuessed").innerHTML = letterBankHTML;
    document.getElementById("winCount").innerHTML = userScore;

}


function gameStart() {
    document.getElementById("gameStartText").innerHTML = "Press Any Letter Key To Get Started!";
    resultWord = [];
    randomWord = flowers[Math.floor(Math.random() * flowers.length)]; //grabs random word from array//
    console.log("selected word ", randomWord);
    remainingGuesses = 12;
    letterBank = [];  //clear letterBank
    for (var i = 0; i < randomWord.length; i++) {
        resultWord[i] = "_";
    }
    updateHTML();
}

gameStart();



document.onkeyup = function keyPressed(event) {
    userGuess = event.key.toLowerCase();
    document.getElementById("gameStartText").innerHTML = "";
    for (var j = 0; j < randomWord.length; j++) {
        if ((randomWord[j] == userGuess) && remainingGuesses >= 1) {
            resultWord[j] = userGuess; 
        } 
    }
    if (randomWord.indexOf(userGuess) === -1) {
        remainingGuesses--;
    }
    if (letterBank.indexOf(userGuess) !== -1) {
        alert("This letter has already been guessed, try again!");
    }
    else {
        letterBank.push(userGuess);
    }


    console.log(resultWord);

    updateHTML();

    if (resultWord.indexOf("_") === -1) {
        setTimeout(function () {
            alert(randomWord + " is correct! Great job!");
            userScore++;
            gameStart();
        }, 200);
    }
    else if (resultWord.indexOf("_") !== -1 && remainingGuesses === 0) {
        alert("Whoops! You've run out of tries. The correct word was " + randomWord + ". Try again?")
        gameStart();
    }
}


