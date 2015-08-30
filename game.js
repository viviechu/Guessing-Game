$(document).ready(function() {
	var answer = Math.floor(Math.random() * 100) + 1;
	var totalGuess = 5; 
	var arr = []; // userHistory
 	$('.hotorcold').hide();
 	$('.table').hide();
 
	$('#MyInput').click(function() {
		$(this).val('');
	});

	$('#MySubmit').click(function() {
		var guess = $('#MyInput').val(); 
		arr.push(guess);

		if ($('.hotorcold p')) {
		   $('.hotorcold p').detach();
		}

		for (var i = 0; i < arr.length - 1; i++) {
			if (arr[i] == guess) {
				$('.hotorcold').append('<p>You Already Guess This Number!<p>');
				arr.pop();
			}
		}

		if(guess == answer) { 	
			$('<img src="youdidit.jpg" width="300px" />').replaceAll('img');
			$('.hotorcold').append('<p>You Did it!<p>');
			$('.hotorcold').show();
			$(this).prop('disabled',true);
		} else if (guess > 100 || guess < 1) {
			$('.hotorcold').append('<p>Only Input number 1-100<p>');
			$('.hotorcold').show();
		} else if (guess < answer && answer - guess <= 5) {
			$('.hotorcold').append('<p>Your Guess is Super Hot Guess Higher<p>');
			$('.hotorcold').show();

			$('.first').append('<td>' + guess + '</td>');
			$('.second').append('<td>Hot</td>');
			$('.table').show();
		} else if (guess < answer && answer - guess <= 10) {
			$('.hotorcold').append('<p>Your Guess is Hot Guess Higher<p>'); // change class name hot-or-cold
			$('.hotorcold').show();

			$('.first').append('<td>' + guess + '</td>');
			$('.second').append('<td>Hot</td>');
			$('.table').show();
		} else if (guess < answer & answer - guess > 10) {
			$('.hotorcold').append('<p>Your Guess is Cold Guess Higher<p>');
			$('.hotorcold').show();

			$('.first').append('<td>' + guess + '</td>');
			$('.second').append('<td>Cold</td>');
			$('.table').show();
		} else if (guess > answer && guess - answer <= 5) {
			$('.hotorcold').append('<p>Your Guess is Super Hot Guess Lower<p>');
			$('.hotorcold').show();

			$('.first').append('<td>' + guess + '</td>');
			$('.second').append('<td>Hot</td>');
			$('.table').show();
		} else if (guess > answer && guess - answer <= 10) {
			$('.hotorcold').append('<p>Your Guess is Hot Guess Lower<p>');
			$('.hotorcold').show();

			$('.first').append('<td>' + guess + '</td>');
			$('.second').append('<td>Hot</td>');
			$('.table').show();
		} else if (guess > answer && guess - answer > 10 ) {
			$('.hotorcold').append('<p>Your Guess is Cold Guess Lower<p>');
			$('.hotorcold').show();

			$('.first').append('<td>' + guess + '</td>');
			$('.second').append('<td>Cold</td>');
			$('.table').show();
		} else {
			$('.hotorcold').append('<p>Choose a Number 1-100<p>');
			$('.hotorcold').show();
		}

		$('.total').html('<p>You have ' + totalGuess + ' Guess Left</p>');
		totalGuess -= 1;
		if (totalGuess === -1){
			$(this).prop('disabled', true)
			$('.hotorcold').replaceWith('<h2>Game Over!</h2>');
		}
	});
	$('#Hint').click(function(){
		if ($('#answer h1')) {
	       $('#answer h1').detach();
	    }
		$('#answer').append('<h1>Try ' + answer + '</h1>');
	});
});
	