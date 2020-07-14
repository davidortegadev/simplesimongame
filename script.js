let count = 0;
let simonsArray = [];
let usersArray = [];

function startSimon() {
	// generate random button
	let randomNumber = Math.floor((Math.random() * 4));
	// activate random button press
	$('#simon' + randomNumber).addClass('simon' + randomNumber + 'active');
	// remove button press class
	setTimeout(function () {
		$('#simon' + randomNumber).removeClass("simon" + randomNumber + "active");
	}, 500);
	// add to simon array
	simonsArray.push(randomNumber);
	console.log(simonsArray)
}

function simonsMove(){

	for (let i=0;i<simonsArray.length;i++){
		setTimeout(function(){
			$('#simon' + simonsArray[i]).addClass('simon' + simonsArray[i] + 'active');
		}, 1000);
		setTimeout(function () {
			$('#simon' + simonsArray[i]).removeClass("simon" + simonsArray[i] + "active");
		}, 1500);
	}
	startSimon();
}

$(document).ready(function(){

});

$('#startButton').click(function(){
	// resets arrays
	simonsArray = [];
	usersArray = [];
	startSimon();
});

// sets up click listeners for buttons + logs button presses to array
function clickListener(){
	for (let i=0;i<=3;i++){
		$('#simon'+i).click(function(){
			usersArray.push(i);
			console.log(usersArray);
			count++;
			if (usersArray[usersArray.length-1] === simonsArray[simonsArray.length-1]) {
				alert('ur rite continue playin');
				//insert continue game function here
				setTimeout(function(){
					simonsMove();
				}, 1000)
			} else {
				// gameOver();
			}
		});
	}
}
clickListener();

function gameOver(){
	// alert('game over, try again');
	simonsArray = [];
}