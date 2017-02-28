


var questions = [
		{
			question:"Where is the Coding Boot Camp?",
			answers: ['GA', 'NW', 'BW', 'AL'],
			correctAnswer: 'GA'
		},

		{
			question:"What color is the FEA",
			answers: [ 'red', 'blue', 'green', 'dark'],
			correctAnswer: 'red'
		},

		{
			question:"Where does Batman live?",
			answers: ['Atlanta', 'Gotham', 'North Carolina', 'Washing DC'],
			correctAnswer: 'Gotham'
		},

		{
			question:"What is your name?",
			answers: ['Patrick', 'John', 'William', 'Terressa'],
			correctAnswer: 'John'
		}
	];


// Global Variables
var correctAnswer = 0,
 	inCorrectAnswer = 0,
 	emptyAnswer = 0,
 	userChoice = [],
 	notChosen = [],
 	count = 8;





$('.start').on('click', function(){

	$('.container').css('display', 'block');
	$('.start').css('display', 'none');
	var counter = setInterval(function(){

	count--;
	console.log(count);

	var title = $('h3'), // all the h3 4
	 	result = document.forms[0], // all the inputs 16
	 	guess = [];

	 	//console.log(result);


function startChecking(){

		// Grabbing the userChoice and updated to the Global Variable
		for(var i = 0; i < result.length; i++){
			if(result[i].checked){
				userChoice.push(result[i].value);
				
			}
			else{
				notChosen.push(result[i].value);
			}

		}

	questions.map(function(e, index){
		var arr = e.answers; // array of answers
		var correct = e.correctAnswer;
	// Checking correct answer for every array

	//console.log(arr);

	if(arr.length === 4){
			if(userChoice[index] === correct){
				//console.log(userChoice[index]);
				correctAnswer++;
			}
			else if(!userChoice.includes(correct)){
				inCorrectAnswer++;
			}

			else{
				emptyAnswer++;
			}

			
		}

	}); // Looping through

	console.log(notChosen);

	$('.correct').html("You got " + correctAnswer + " answers right");
	$('.inCorrect').html("You got " + inCorrectAnswer + " answers wrong");
	$('.empty').html("You got " + emptyAnswer + " not filled");

	clearInterval(counter)
} // end of startchecking








	questions.map(function(e, index){
		var arr = e.answers; // array of answers

		$(title[index]).html(e.question); // Output the questions to the title in the DOM


	arr.map(function(e){
		guess.push(e);
	});

	}); // end of questions array




	var para = $('p'); // Grabbing every p elements from the DOM

	for(var i = 0; i < result.length; i++){
		$(result[i]).attr('value', guess[i]);
		$(para[i]).html(guess[i]);
	}

$('.done').on('click', function(){
		startChecking();

}); // when the user clicks the button




	if(count <= 0){
		startChecking();
		clearInterval(counter)
		$('form').css("display", 'none');
	}
}, 1000)
});



// Start button that starts the whole game.

// A counter for 30 seconds

// Title of the questions
	// 4 answers
		// You can only provide one answer per question
		// a right one.



// When counter hits 0
	// All Done (message)

	// Output to the DOM
		//the correct answers
		// Incorrect answers:
		// Unanswered:





// There is a done button
	// Hide everything when user hits the DONE button





























































































		// Ouput the results to the DOM