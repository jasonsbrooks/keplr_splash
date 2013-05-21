$(document).ready(function() {
	
	
	//Animation on load
	$('#about').hide().delay(500).fadeIn();
	$('#subscribe').hide().delay(1000).fadeIn();
	$('#description').hide().delay(1500).fadeIn();
	
	//Hiding Description sections from view
	$('#description_content').hide();
	$('#hider').hide();
	
	//Hiding alert
	$('#alert').hide();
	
	//View Selection Notes
	$('#viewer').click(function() {
		$('#description_content').show("slide", { direction: "up" }, 500);
		$('#hider').show();
		$(this).hide();
	});
	
	//Hide Selection Notes
	$('#hider').click(function() {
		$('#description_content').hide("slide", { direction: "up" }, 500);
		$(this).hide();
		$('#viewer').delay(500).fadeIn();
	});
	
	//Form Preperation
	$('#email').focus(function() {
		if ( $(this).val() == 'your@emailaddress.com' || $(this).val() == '') {
				$(this).val('');
		}
	});
	
	$('#email').blur(function() {
		if ( $(this).val() == '') {
				$(this).val('your@emailaddress.com');
		}
	});
	
	//Form Submission
	$('#subscribe').submit(function() {
		// update user interface
		var cur_val = $('#email').val();
		
		if ( (cur_val != "your@emailaddress.com") && (cur_val != "") ) {
			$('#alert').fadeIn();
			$('#alert').html('Adding email address...');
			
			// Prepare query string and send AJAX request
			$.ajax({
				url: 'inc/store-address.php',
				data: 'ajax=true&email=' + escape($('#email').val()),
				success: function(msg) {
					if (msg = 'Success! Check your email to confirm sign up.') {
						$('#email').val('your@emailaddress.com');
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