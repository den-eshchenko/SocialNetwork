<?php 
function setAboutMeCurrentUser($data){
    //входные данные из формы
    $fullName = $data['fullName'];
    $aboutMe = $data['aboutMe'];
    $facebook = $data['facebook'];
    $gitHub = $data['gitHub'];
    $instagramm = $data['instagramm'];
    $lookingForAJob = $data['lookingForAJob'];
    $myLink = $data['myLink'];
    $twitter = $data['twitter'];
    $website = $data['website'];
    $youtube = $data['youtube'];

    //проверяю есть ли сессия
    if(file_exists('../../userdata/temp/sess_'. $_SERVER["HTTP_API_KEY"])){
        
        $readCurrentSessionFile = file_get_contents('../../userdata/temp/sess_'. $_SERVER["HTTP_API_KEY"]);// получаю данные сессии текущего пользователя из API-KEY
        $dataPart = str_replace("user|", "", $readCurrentSessionFile); // удаляю лишнее из строки ответа
        $arrDataCurrentSession = unserialize($dataPart);// переобразую данные авторизации в массив

        $users = './users.json';

        $readUsers = file_get_contents('./users.json');
        $arrUsers = json_decode($readUsers, true);

        $arrUsers['items'][$arrDataCurrentSession['id']-1]['aboutMe'] = $aboutMe;
        $arrUsers['items'][$arrDataCurrentSession['id']-1]['lookingForAJob'] = $lookingForAJob;
        $arrUsers['items'][$arrDataCurrentSession['id']-1]['contacts']['facebook'] = $facebook;
        $arrUsers['items'][$arrDataCurrentSession['id']-1]['contacts']['website'] = $website;
        $arrUsers['items'][$arrDataCurrentSession['id']-1]['contacts']['twitter'] = $twitter;
        $arrUsers['items'][$arrDataCurrentSession['id']-1]['contacts']['instagramm'] = $instagramm;
        $arrUsers['items'][$arrDataCurrentSession['id']-1]['contacts']['youtube'] = $youtube;
        $arrUsers['items'][$arrDataCurrentSession['id']-1]['contacts']['gitHub'] = $gitHub;
        $arrUsers['items'][$arrDataCurrentSession['id']-1]['contacts']['myLink'] = $myLink;

        // записываю все изменения из формы в файл
        file_put_contents('./users.json', json_encode($arrUsers, JSON_UNESCAPED_SLASHES));
        
        $response = [
            "message" => "Complite save data for About me",
            "status" => 1,
            "id" => $arrDataCurrentSession['id']
        ];

        echo json_encode($response);
    }
}