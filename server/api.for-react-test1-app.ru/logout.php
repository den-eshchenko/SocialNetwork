<?php
function logout(){
    $login = $_GET['login'];
    $response = [];

    $response = [
        "message"=> "Вы вышли". " " .$login,
        "status" => 1
    ];

    echo json_encode($response);
}