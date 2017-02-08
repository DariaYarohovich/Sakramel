<?php
	if (isset($_POST["name"])) {
		$name = $_POST['name'];
		$from = $_POST['tel'];
		$to = 'userEmail@gmail.com'; 
		$subject = 'Message from Sakramel';
		
		$body = "From: $name\n  Phone:\n $from";


		if (mail($to, $subject, $body, $from)) {
			$result='<div class="alert alert-success">Thank You! I will be in touch</div>';
		} else {
			$result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
		}
		echo $result;
		header('Location:index.php');
	}
?>