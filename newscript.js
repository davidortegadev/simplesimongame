let count = 0;
let computerArray = [];
let userArray = [];

function computerTurn() {
	//random button
	let randomNumber = Math.floor((Math.random() * 4));
	//add to computers sequence
	computerArray.push(randomNumber);
	//press button by adding active class
	$('#simon'+randomNumber).addClass('simon'+randomNumber+'active');
	//remove button press after timeout
	setTimeout(function() {
		$('#simon'+randomNumber).removeClass('simon'+randomNumber+'active');
	}, computerArray.length*500);
	//print computer sequence
	console.log(computerArray)
}

function displayComputerSequence() {

	for (let i=0;i<computerArray.length;i++) {
		setTimeout(function () {
				//button press down
				$('#simon' + computerArray[i]).addClass('simon' + computerArray[i] + 'active');
			}, //timeout is calculated based on length of array so that it plays sequentially
			computerArray.length * 500);
		setTimeout(function() {
			//button press up
			$('#simon'+computerArray[i]).removeClass('simon'+computerArray[i]+'active');
		}, computerArray.length*500+500);
	}
	computerTurn();
}

$(document).ready(function(){

});

//resets arrays on new game start and begins new game
function startGame(){
	computerArray = [];
	userArray = [];
	count = 1;
	$('#title').text("level: "+parseInt(count));
}

$('#startButton').click(function(){
	startGame()
	$('#startButton').text("press to restart");
	displayComputerSequence();
});

function checkSequence(){
	// return userArray[userArray.length - 1] === computerArray[computerArray.length - 1];

	for(let i=0;i<userArray.length;i++){
		if(userArray[i] === computerArray[i]){

		} else {
			return false
		}
	}
	return true
}

function clickListener(){
	for (let i=0;i<=3;i++){
		$('#simon'+i).click(function(){

			userArray.push(i);
			console.log(userArray);

			//runs check function
			if(checkSequence()){
				count++;
				$('#title').text("level: "+parseInt(count));
				displayComputerSequence();
			} else {
				alert('game over')
			}

			// if (userArray[count-1] === computerArray[count-1]){
			// 	alert('correct!');
			// 	userArray = [];
			// 	setTimeout(function(){
			// 		computerTurn();
			// 	}, 1000)
			// } else {
			// 	alert('game over!');
			// 	computerArray = [];
			// 	userArray = [];
			// 	count = 0;
			// }
		})
	}
}
clickListener();