


$(document).ready(function(){
	$(".what").click(function(){
	$(".overlay").fadeIn(1000);
	});
	gameState = {};
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});
	$('#guessButton').click(function(){
		guesser();
		console.log("test");
});
	$('.new').click(function(){
		newGame();
	});

});

//call newGame when user enters number and presses enter

function newGame() {
	gameState.guessNumber = 0;
	gameState.number = Math.floor(Math.random() * 100) + 1;	
}

function guesser() {
	//jQuery
	var x = gameState.number
	var guess = parseInt($('#userGuess').val());
	var y = Math.abs(x-guess);
	var r = "";
	//switch statement
	if ((guess > 100) || (guess < 1) || (isNaN(guess) == true)) {
		r = "please enter a number between 1 and 100";
	}
	else if (y >= 50) {
		r = "Ice cold";
	}
	else if (y >= 30) {
		r = "cold";
	}
	else if (y >= 20) {
		r = "warm";
	}
	else if (y >= 10) {
		r = "hot";
	}
	else if (y >= 1) {
		r = "very hot";
	}
	else {
		r = "correct!";
	}
	gameState.guessNumber ++;
	//jQuery
	document.getElementById("feedback").innerHTML = r;
	document.getElementById("count").innerHTML = gameState.guessNumber;
	console.log("guess = " + guess);
	console.log("x = " + x);
	console.log("y = " + y);
	console.log("r = " + r);
	//return guessNo;
}