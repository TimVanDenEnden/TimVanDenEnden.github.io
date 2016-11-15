<!-- <?php
	session_start();
	if(isset($_SESSION['AlreadyLoggedIn'])){
		header('location: protectArea.php');
	}

	if(isset($_POST['login'])){
		include("assets/database.php");

		//inlog gegevens
		$naam = $_POST['username'];
		$wachtwoord = $_POST['password'];

		$sql ="SELECT * FROM `Login` WHERE `UserName` = '$naam' AND `PassWord` = '$wachtwoord' ";
		$query = mysqli_query($con, $sql);
		$result = mysqli_num_rows($query);

		if ($result == 1) {
			echo " welcome";

			$sql2 ="SELECT * FROM `Login` WHERE `UserName` = '$naam' AND `PassWord` = '$wachtwoord' ";
			$query2 = mysqli_query($con, $sql2);
			$AccessLvl = mysqli_fetch_assoc($query2);

			$_SESSION['username'] = $naam;
			$_SESSION['AccessLvl'] = $AccessLvl['Accesslvl'];
			$_SESSION['AlreadyLoggedIn'] = true;

			header('location: protectArea.php');
 		}

		else {
			echo " Access: deny";
		}

	}
?> -->

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Store It | T1mINC 2016</title>
</head>
<body>
<header>
	<div class="HeaderContainer">
		<div class="HeaderLeft"><img class="LogoHeader" src="assets/images/T1mINCheader.png" alt="LogoHeader"></div>
	</div>	
</header>
<main>
	<div class="LoginContainer">
		<h3>Login by: Store It!</h3>
		<hr/>
		<form action='index.php' method='POST'>
			<input class="Login" type="text" name="username" placeholder="UserName" /><br />
			<input class="Login" type="password" name="password" placeholder="PassWord" /><br />
		<hr />
			<input class="LoginSubmit" type="submit" name="login" value="Login" />
		</form>
	</div>
</main>
<footer>
	CopyRight by T1mINC - 2016
</footer>
</body>
</html>