// alert("Hello World");
"use strict"

let X  = "X";
let O  = "O";
let Blank = "";
let counter = 0;

// there are 8 winning coniditions for a 3x3 box in tic tac toe 
let winningOutcomes = [[0,1,2], [3,4,5],[6,7,8],
				[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let gameOver = false;

function init(){

	for(let i =0; i < 9; i++){
		document.getElementById("" + i).innerText = '';
	}
	counter = 0;
	document.turn = X;
	document.winner = null;
	setMessage("Player " + document.turn + " gets to Start.");
}

function placeMarker(square){
	console.log(counter);
	

	if(document.winner != null){
		setMessage("Player: " + document.winner + " has already won the game!");
		return;
	}

	if (square.innerText == Blank) {
		counter++;
		square.innerText = document.turn;
		switchTurn();
		if(counter == 9 && document.winner==null){
			setMessage("Cat's Game, Player X and O have tied. Play Again?");
		}
	}
	else{
		setMessage("Square has been taken.");
	}
}

function setMessage(msg){
	document.getElementById("message").innerText = msg;
}

function switchTurn(){

	if(checkState(document.turn)){
		setMessage("Player: " + document.turn + " has won the game!");
		document.winner = document.turn;
		return;
	}
	
	if(document.turn == X){
		document.turn = O;
	}
	else{
		document.turn = X;
	}
	setMessage("Player " + document.turn + ": it is your turn.");
}

function compare(one,two,three, marker){
	let same = false;
	if(getMark(one)==marker && getMark(two) == marker && getMark(three) == marker){
		same = true;
	}
	return same;
}

function getMark(id){
	return document.getElementById("" + id).innerText;
}

function checkState(marker){
	 let won = false;

	 for (var i = 0; i < winningOutcomes.length; i++) {
	 	let curr = winningOutcomes[i];
	 	won = compare(curr[0],curr[1],curr[2],marker);
	 	if(won){
	 		break;
	 	}
	 }
	 return won;


}

function newGame(square){

}




