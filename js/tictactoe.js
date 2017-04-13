// alert("Hello World");

function init(){
	document.turn = "X";
	setMessage("Player " + document.turn + " gets to Start.");
}

function placeMarker(square){
	if (square.innerText == '') {
		square.innerText = document.turn;
		switchTurn();
	}
	else{
		setMessage("Square has been taken.");
	}
}

function setMessage(msg){
	document.getElementById("message").innerText = msg;
}

function switchTurn(){
	if(document.turn == "X"){
		document.turn = "O";
	}
	else{
		document.turn = "X";
	}
	setMessage("Player " + document.turn + ": it is your turn.");
}