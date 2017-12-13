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

			resultDiv += '<div>This is an increase of '+increase+'</div>';
			resultDiv += '<div>an increase of '+parseFloat(increasePercentage).toFixed(2)+'%</div>';

		} else if (originalNumber > newNumber){

			var increase = newNumber - originalNumber
			var increasePercentage = increase / originalNumber * 100;

			resultDiv += '<div>This is a decrease of '+increase+'</div>';
			resultDiv += '<div>a decrease of '+parseFloat(increasePercentage).toFixed(2)+'%</div>';

		} else {
			resultDiv += '<div>The two numbers are the same</div>';
			resultDiv += '<div>an increase of 0%</div>';

		}

		$('#result').html(resultDiv);

	});

});
