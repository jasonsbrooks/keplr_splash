<!DOCTYPE html>
<html>
<head>

	<!-- META -->
	<title>TITLE</title>
	<link rel="shortcut icon" href="images/favicon.ico" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="description" content="TITLE" />
	
	<!-- STYLESHEETS -->
	<link rel="stylesheet" type="text/css" href="style/reset.css">
	<link rel="stylesheet" type="text/css" href="style/style.css">
	
	<!--SCRIPTS -->	
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>
	<script src="scripts/code.js"></script>
	
</head>
<body>
	<form id="subscribe" action="<?=$_SERVER['PHP_SELF']; ?>" method="get">
		<input id="email" type="email" name="email" value="your@emailaddress.com" />
		<button type="submit" id="subscribe_submit" class="gradient">SUBMIT</button>
		<span id="alert"><? require_once('inc/store-address.php'); if($_GET['submit']){ echo storeAddress(); } ?></span>
	</form>
</body>
</html>