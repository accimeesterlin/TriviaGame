
var answers = ['GA', 'Gatham', 'Stephen', 'red'],
 	data = $('input'),
 	inCorrectAnswer = 0,
 	correctAnswer = 0,
 	emptyAnswer = 0,
 	counter = 30;




function startGame(){
	$('.data').css('display', 'none');
		for(var i = 0; i < data.length; i++){
			if(data[i].checked){

				// Checking if user choice equal correct answer
				if(answers.indexOf(data[i].value) !== -1){
					correctAnswer++;
				}

				else{
					inCorrectAnswer++;
				}
				
			}
		}

		var result = correctAnswer + inCorrectAnswer;

		// Checking if there is any empty
		if(result !== 4){
			emptyAnswer = 4 - result;
		}

		
		$('.correct').html("You have: " + correctAnswer + " correct answers");
		$('.inCorrect').html("You have: " + inCorrectAnswer + " inCorrect answers");
		$('.empty').html( "You have: " + emptyAnswer + " empty answers");
}




$('.start').on('click', function(){

	$('.start').toggleClass('hide');
	$(".data, .done").css('display', 'block');

	$('.done').on('click', function(){
			startGame();

			clearInterval(startCounter);

		}); // end of the done button

	
	// Start counter
	var startCounter = setInterval(function(){

		
		counter--;

		(counter <= 9) ? $('.counter').html("You have " + '00:' + '0' + counter + ' remaining...') : $('.counter').html("You have " + '00:'  + counter + ' remaining...')
		//$('.counter').html("You have " + '00:' + counter + " remaining...");

		if(counter <= 0){
			startGame();
			clearInterval(startCounter);
		}

		console.log(counter);
	}, 1000);

	

	
	

}); // end of the start button








