//////////////////
// Setting Vars //
//////////////////
var playerChoice;
var computerChoice;
var randomNumber;
var playerRawChoice;

//////////////////////
//  Player Choosing //
//////////////////////

function playerSelect(){
	playerRawChoice = prompt('Choose "Rock", "Paper", or "Scissors"').toLowerCase() //Prompting if they want Rock Paper or Scissors
	checkPlayer();
}

function checkPlayer(){
	if(playerRawChoice === "rock"){ //If they selected rock, run playerRock
		playerRock();
	} else if(playerRawChoice === "paper"){ //If they selected paper, run playerPaper
		playerPaper();
	} else if(playerRawChoice === "scissors"){ //If they selected scissors, run playerScissors
		playerScissors();
	} else {
		playerSelect();
	}
}

//////////////////
//  Player Rock //
//////////////////

function playerRock(){
	playerChoice = 1;
	compChoice();
}

//////////////////
// Player Paper //
//////////////////

function playerPaper(){
	playerChoice= 2;
	compChoice();
}

/////////////////////
// Player Scissors //
/////////////////////

function playerScissors(){
	playerChoice = 3;
	compChoice();
}

/////////////////////
//  Comp Choosing  //
/////////////////////

function compChoice(){	
	randomNumber = Math.floor(Math.random() * 100); //Choosing a random number between 0-100
	whatComputerGot();
}

//////////////////////////////////////////
// Determining what the computer chose //
/////////////////////////////////////////

function whatComputerGot(){
	if(randomNumber <= 33){ // 0-33 are Rock
		computerChoice = 1;
		compare();
	}
	else if(randomNumber <=66){ //34-66 are Paper
		computerChoice=2;
		compare();
	}
	else if(randomNumber <= 100){ //65-100 are Scissors
		computerChoice=3;
		compare();
	}
}

//////////////////////////////////////////////////
// Comparing computers choice to players choice //
//////////////////////////////////////////////////

function compare(){
	if(playerChoice==computerChoice){ //Tie
		document.getElementById("output").innerHTML = "<strong>Winner:</strong> Tie";
	}
	else if(playerChoice==1 && computerChoice==2){ //Player - Rock Computer - Paper
		document.getElementById("output").innerHTML = "<strong>Winner:</strong> Computer<br><strong>Player:</strong> Rock<br><strong>Computer:</strong> Paper";
	}
	else if(playerChoice==1 && computerChoice==3){ //Player - Rock Computer - scissors
		document.getElementById("output").innerHTML = "<strong>Winner:</strong> Player<br><strong>Player:</strong> Rock<br><strong>Computer:</strong> Scissors";
	}
	else if(playerChoice==2 && computerChoice==1){ //Player - Paper Computer - Rock
		document.getElementById("output").innerHTML = "<strong>Winner:</strong> Player<br><strong>Player:</strong> Paper<br><strong>Computer:</strong> Rock";
	}
	else if(playerChoice==2 && computerChoice==3){  //Player - Paper Computer - Scissors
		document.getElementById("output").innerHTML = "<strong>Winner:</strong> Computer<br><strong>Player:</strong> Paper<br><strong>Computer:</strong> Scissors";
	}
	else if(playerChoice==3 && computerChoice==1){ //Player - Scissors Computer - Rock
		document.getElementById("output").innerHTML = "<strong>Winner:</strong> Computer<br><strong>Player:</strong> Scissors<br><strong>Computer:</strong> Rock"; //Player - Scissors Computer - Rock
	}
	else if(playerChoice==3 && computerChoice==2){ //Player - Scissors Computer - Paper
		document.getElementById("output").innerHTML = "<strong>Winner:</strong> Player<br><strong>Player:</strong> Scissors<br><strong>Computer:</strong> Paper"; //Player - Scissors Computer - Rock
	}
}
