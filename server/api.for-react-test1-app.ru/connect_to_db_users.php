<?php
	$connection = mysqli_connect('127.0.0.1', 'root', '', 'test_users_bd');
	if($connection == false){
		echo 'не удалось подключиться к БД</br>';
		echo mysqli_connect_error();
		exit();
	}