<!DOCTYPE html>
<html>
<head>

	<!-- META -->
	<title>Keplr</title>
	<link rel="shortcut icon" href="images/favicon.ico" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="description" content="TITLE" />
	
	<!-- STYLESHEETS -->
	<link rel="stylesheet" type="text/css" href="style/reset.css">
	<link rel="stylesheet" type="text/css" href="style/style.css">
	
	<!--SCRIPTS -->	
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src="http://code.jquery.com/ui/1.10.2/jquery-ui.js"></script>

	<script type="text/javascript" src="//use.typekit.net/vsx3pwj.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

	<script src="scripts/code.js"></script>

	<!--[if gte IE 9]>
	  <style type="text/css">
	    .gradient {
	       filter: none;
	    }
	  </style>
	<![endif]-->
	
</head>
<body>
	<div id="universe">
		<HEADER>
			<object id="keplr_logo" type="image/svg+xml" data="../images/keplr_logo.svg"></object>
		</HEADER>
		<SECTION id="galaxy">
			<p><span class="nm-400">Keplr</span> is a new idea. A new <span class="nm-400">horizon</span>. We want to reimagine the world of scientific collaboration, and the frontiers of collaborator identification. We strive to bring <span class="nm-400">order</span> to the universe of research <span class="nm-400">information</span>.</p>
			<p>Here comes our <span class="nm-400">supernova</span>.</p>
			<p><span class="nm-395">3</span> . . . <span class="nm-405">2</span> . . . <span class="nm-410">1</span> . . .</p>
		</SECTION>
		<form id="subscribe" action="<?=$_SERVER['PHP_SELF']; ?>" method="get">
			<input id="email" type="email" name="email" value="submit your email for news updates" class="nm-730" /><!--
			--><button id="engageHyperJets" type="submit" title="Submit your email"></button>
			<span id="alert"><? require_once('inc/store-address.php'); if($_GET['submit']){ echo storeAddress(); } ?>&mdash;Thank you, rockstar!&mdash;
			</span>
		</form>
	</div>
	<div id="aurora">
		<div id="yellow" class="borealis gradient"></div><!--
		--><div id="orange" class="borealis gradient"></div><!--
		--><div id="red" class="borealis gradient"></div><!--
		--><div id="pink" class="borealis gradient"></div><!--
		--><div id="purple" class="borealis gradient"></div><!--
		--><div id="blue" class="borealis gradient"></div><!--
		--><div id="teal" class="borealis gradient"></div><!--
		--><div id="green" class="borealis gradient"></div>
	</div>
</body>
</html>


