<?php
function me(){
    if(file_exists('../../userdata/temp/sess_'. $_SERVER["HTTP_API_KEY"])){
        $readCurrentSessionFile = file_get_contents('../../userdata/temp/sess_'. $_SERVER["HTTP_API_KEY"]);// получаю данные сессии текущего пользователя из API-KEY
        $dataPart = str_replace("user|", "", $readCurrentSessionFile); // удаляю лишнее из строки ответа
        $arrDataCurrentSession = unserialize($dataPart);// переобразую данные авторизации в массив
        // var_dump($arrDataCurrentSession);
        $response = [
            "message"=> "Вы авторизованы по API-KEY",
            "status" => 1,
            "login" => $arrDataCurrentSession['login'],
            "user" => $arrDataCurrentSession['id'],
            "logo" => $arrDataCurrentSession['logo']
        ];    
    } else {
        $response = [
            "message"=> "Авторизуйтесь пока вы гость сайта",
            "status" => 0,
            "login" => "guest"
        ];
    }
    echo json_encode($response);
}