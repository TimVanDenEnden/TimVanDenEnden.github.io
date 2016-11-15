<?php

	session_start();
	if(!isset($_SESSION['AlreadyLoggedIn'])) {
		header('location: index.php');
	}

	if(isset($_POST['logout'])) {
		session_destroy();
		header('location: index.php');
	}

	$naam = $_SESSION['username'];
	$AccessLvl = $_SESSION['AccessLvl'];
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script   src="https://code.jquery.com/jquery-2.2.4.min.js"  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="   crossorigin="anonymous"></script>
	<script type="text/javascript">
		
		jQuery(document).ready(function(){

			jQuery('.NavMobile').on('click', function(){

				jQuery(this).toggleClass('active');
				jQuery('.NavPc').toggleClass('active');
			});
		});
	</script>
	<title>Store It | T1mINC 2016</title>
</head>
<body>
<header>
	<div class="HeaderContainer">
		<div class="HeaderLeft"><img class="LogoHeader" src="assets/images/T1mINCheader.png" alt="LogoHeader"></div>
		<nav>
			<div class="NavPc">
				<a class="nav" href="logout.php">Logout</a>
			</div>
			<div class="NavMobile">
				<span class="Hamburger"></span>
				<span class="Hamburger2"></span>
			</div>	
		</nav>
	</div>	
</header>
<main>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem saepe, dolores aspernatur est, possimus nesciunt quisquam commodi repellendus sapiente aliquid, nisi distinctio unde sed ullam amet. Id quae consectetur eos.
</main>
<footer>
	CopyRight by T1mINC - 2016
</footer>

</body>
</html>