/**************************************************/
/******** Kirill Miniaev | Miniaev Design *********/
/** kirill@miniaevdesign.com | miniaevdesign.com **/
/**************************************************/

$(document).ready(function() {
	
	//Animation on load
	// $('header').hide().delay(500).fadeIn();
	// $('#galaxy').hide().delay(1200).fadeIn();
	// $('#subscribe').hide().delay(2000).fadeIn();

	// $('#yellow').hide().delay(2500).fadeIn();
	// $('#orange').hide().delay(2700).fadeIn();
	// $('#red').hide().delay(2900).fadeIn();
	// $('#pink').hide().delay(3100).fadeIn();
	// $('#purple').hide().delay(3300).fadeIn();
	// $('#blue').hide().delay(3500).fadeIn();
	// $('#teal').hide().delay(3700).fadeIn();
	// $('#green').hide().delay(3900).fadeIn();

	
	//Hiding alert
	$('#alert').hide();
	
	//Form Preperation
	$('#email').focus(function() {
		if ( $(this).val() == 'submit your email for news updates' || $(this).val() == '') {
				$(this).val('');
				$(this).switchClass('nm-730', 'nm-750', 0);
		}
	});
	
	$('#email').blur(function() {
		if ( $(this).val() == '') {
				$(this).val('submit your email for news updates');
				$(this).switchClass('nm-750', 'nm-730', 0);
		}
	});
	
	//Form Submission
	$('#subscribe').submit(function() {
		// update user interface
		var cur_val = $('#email').val();
		
		if ( (cur_val != "submit your email for news updates") && (cur_val != "") ) {
			$('#alert').fadeIn();
			$('#alert').html('Adding email address...');
			
			// Prepare query string and send AJAX request
			$.ajax({
				url: 'inc/store-address.php',
				data: 'ajax=true&email=' + escape($('#email').val()),
				success: function(msg) {
					if (msg = 'Success! Check your email to confirm sign up.') {
						$('#email').val('submit your email for news updates');
					}
					$('#alert').html(msg);
					$('#alert').delay(2000).fadeOut();
				}
			});
		
		}
		else {
			$('#alert').fadeIn();
			$('#alert').html('Please type in your email address.');
			$('#alert').delay(2000).fadeOut();
		}
		return false;
	});
	
});