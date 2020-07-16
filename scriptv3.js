$(document).ready(function(){
	highScore = 0;

})


//start game function
function startGame(){
	computerArray = [];
	userArray = [];
	count = 1;
	$('#title').text("level: "+parseInt(count));
	computerTurn();
	displayComputerSequence();
	userTurn();
}

//click start functionality
$('#startButton').click(function(){
	startGame()

	//maybe hide start button altogether?
	$('#startButton').text("highest score: " + parseInt(highScore));
})

//computer's turn
function computerTurn(){
	computerArray.push(Math.floor((Math.random()*4)));
	console.log('computer\'s current array is: ');
	console.log(computerArray);
}

//display computer's sequence
function displayComputerSequence(){

	//iterates through computer's array
	for(let i=0;i<computerArray.length;i++) {
		//depresses button with delay based on iteration
		setTimeout(function(){
			$('#simon' + computerArray[i]).addClass('simon' + computerArray[i] + 'active')
		}, i * 500 + 350)
		//unpresses button with delay based on iteration
		setTimeout(function(){
			$('#simon'+computerArray[i]).removeClass('simon'+computerArray[i]+'active');
		}, i * 500 + 750);
	}
}


//user choice
function userTurn(){
	for (let i=0;i<=3;i++){
		$('#simon'+i).click(function() {

			//add choice to user's array
			userArray.push(i);
			console.log('user\'s current array is: ');
			console.log(userArray);

			//remove click listeners after a click is registered
			for (let i=0; i<=3;i++){
				$('#simon'+i).off("click");
			}

			//check if most recent button push was correct
			checkUserChoice();

		})
	}
}

function checkUserChoice(){
	if (userArray[userArray.length-1]===computerArray[userArray.length-1]){
		//check if it's the end of the sequence
		checkSequenceEnd()
	} else {
		//game over script
		if(count>highScore){
			highScore = count;
		}
		$('#title').text("game over");
		$('#startButton').text("press to restart");
	}
}

function checkSequenceEnd(){
	if (userArray.length === computerArray.length){
		//raise level (count) by 1, reset user array, and display new sequence
		count++;
		$('#title').text("level: "+parseInt(count));
		userArray = [];
		computerTurn();
		setTimeout(displayComputerSequence,500)
		userTurn();
	} else {
		//user choice again
		userTurn();
	}
}