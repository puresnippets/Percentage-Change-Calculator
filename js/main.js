$( document ).ready(function() {
	$('#mainForm').on('submit', function(e) {

		e.preventDefault();
		var data = $(this).serializeArray();

		var values = {};
		$.each($(this).serializeArray(), function(i, field) {
			values[field.name] = field.value;
		});

		var resultDiv = '';
		var newNumber = values.new_number;
		var originalNumber = values.original_number;

		if(newNumber > originalNumber){

			var increase = newNumber - originalNumber
			var increasePercentage = increase / originalNumber * 100;

			resultDiv += '<div><strong>This is an increase of '+parseFloat(increase).toFixed(2)+'</strong></div>';
			resultDiv += '<div><p>Or, as a percentage (rounded to two decimal places):</p><strong>an increase of '+parseFloat(increasePercentage).toFixed(2)+'%</strong></div>';

		} else if (originalNumber > newNumber){

			var decrease = originalNumber - newNumber
			var decreasePercentage = decrease / newNumber * 100;

			resultDiv += '<div><strong>This is a decrease of '+parseFloat(decrease).toFixed(2)+'</strong></div>';
			resultDiv += '<div><p>Or, as a percentage (rounded to two decimal places):</p><strong>a decrease of '+parseFloat(decreasePercentage).toFixed(2)+'%</strong></div>';

		} else {
			resultDiv += '<div><strong>The two numbers are the same</strong></div>';
			resultDiv += '<div><p>Or, as a percentage (rounded to two decimal places):</p><strong>an increase of 0%</strong></div>';

		}

		$('.done').fadeIn();

		$('#result').html(resultDiv);

	});

});
