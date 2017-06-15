	var wins = 0;
	var losses = 0;
	var wrongGuess = [];
	var guessesLeft = 10;
	var userChoice = "";
	var computerChoice = "";
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o',
		'p','q','r','s','t','u','v','w','x','y','z'];

//computer chooses random letter from the alphabet
	function compChooses () {
		var randomIndex = Math.floor(Math.random() * alphabet.length);
		computerChoice = alphabet[randomIndex];
	}

	compChooses(computerChoice);
	console.log("computer: ", computerChoice)
	
//user picks a letter of the alphabet
	document.onkeyup = function(event) {
		userChoice = event.key;
		console.log("user: ", userChoice);

//if they match, alert user wins, increment wins, and reset the game.
	if(userChoice === computerChoice) {
		alert("Good job!");
		wins++;
		wrongGuess.length=0;
		guessesLeft="10";
		compChooses(computerChoice);
			console.log("computer: ", computerChoice);
	}

//if they do not match, alert user and decrease guess count.
	else {
		alert("Nice try...");
		guessesLeft--;

		if(userChoice===wrongGuess) {
				alert("Whoops! You already tried that");
			}

	// if user has guesses left, push choice into var wrongGuess
		if(guessesLeft > 0) {
			wrongGuess.push(" " + userChoice);
		}

	//if user has 0 guesses left, alert user loses, add one to losses, reset the game.
		else if(guessesLeft === 0) {
			alert("You lose! The computer chose: "+"'"+computerChoice+"'. Press enter to try again.");
			losses++;
			wrongGuess.length=0;
			guessesLeft="10";
			compChooses(computerChoice);
				console.log("computer: ", computerChoice);
			}
		}

//tally the score
var html = "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + 
	"<p>Guesses left: " + guessesLeft + "</p>" + "<p>Your guesses so far: " + wrongGuess;

       document.querySelector("#game").innerHTML = html

}