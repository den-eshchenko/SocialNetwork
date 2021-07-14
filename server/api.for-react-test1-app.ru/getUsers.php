<?php
function getUsers(){
    $countElem = $_GET['countElem'];
    $page = $_GET['page'];

    if(isset($countElem) && isset($page)){
        // проверка сессии ...
        if(file_exists('../../userdata/temp/sess_'. $_SERVER["HTTP_API_KEY"])){
            $readCurrentSessionFile = file_get_contents('../../userdata/temp/sess_'. $_SERVER["HTTP_API_KEY"]);// получаю данные сессии текущего пользователя из API-KEY
            $dataPart = str_replace("user|", "", $readCurrentSessionFile); // удаляю лишнее из строки ответа
            $arrDataCurrentSession = unserialize($dataPart);// переобразую данные авторизации в массив
            $response = [
                "message" => "Вы авторизованы, ... получение данных для ". $arrDataCurrentSession['login'],
                "status" => 1
            ];

            $currentUsers = './users_data/'. $arrDataCurrentSession['id'] . '/friends/friends.json';
            $countReturnPageCurrentUsers = './users_data/'. $arrDataCurrentSession['id'] . '/friends/count-return-page-friends.json';
        
            copy($currentUsers, $countReturnPageCurrentUsers); // копирую всех пользователей во временный файл - который меняю
        
            $readCountReturnPageCurrentUsers = file_get_contents('./users_data/'. $arrDataCurrentSession['id'] . '/friends/count-return-page-friends.json');
            $arrCountReturnPageCurrentUsers = json_decode($readCountReturnPageCurrentUsers, true);
        
            if($countElem == 3 && $page == 1){
                    array_splice($arrCountReturnPageCurrentUsers['items'], 3);
            }
            if ($countElem == 3 && $page == 2){
                    array_splice($arrCountReturnPageCurrentUsers['items'], 6);
                    array_splice($arrCountReturnPageCurrentUsers['items'], 0, 3);
            }
            if ($countElem == 3 && $page == 3){
                array_splice($arrCountReturnPageCurrentUsers['items'], 9);
                array_splice($arrCountReturnPageCurrentUsers['items'], 0, 6);
            } 
            if ($countElem == 3 && $page == 4){
                array_splice($arrCountReturnPageCurrentUsers['items'], 12);
                array_splice($arrCountReturnPageCurrentUsers['items'], 0, 9);
            }
            if ($countElem == 3 && $page == 5){
                array_splice($arrCountReturnPageCurrentUsers['items'], 0, 12);
            }

            file_put_contents('./users_data/'. $arrDataCurrentSession['id'] . '/friends/count-return-page-friends.json', json_encode($arrCountReturnPageCurrentUsers));
            $dataCurrentUsers = file_get_contents('./users_data/'. $arrDataCurrentSession['id'] . '/friends/count-return-page-friends.json');
            echo $dataCurrentUsers;

        } 
         else {
             // ключа нет - вы не авторизованы -> вывод просто списка пользователей
             $users = './users.json';
             $countReturnPage = './count-return-page.json';
        
             copy($users, $countReturnPage); // копирую всех пользователей в ./count-return-page.json
        
             $readCountReturnPage = file_get_contents('./count-return-page.json');
             $arrCountReturnPage = json_decode($readCountReturnPage, true);
        
             if($countElem == 3 && $page == 1){
                     array_splice($arrCountReturnPage['items'], 3);
             }
             if($countElem == 3 && $page == 2){
                     array_splice($arrCountReturnPage['items'], 7);
                     array_splice($arrCountReturnPage['items'], 0, 4);
             }
             if($countElem == 3 && $page == 3){
                 array_splice($arrCountReturnPage['items'], 10);
                 array_splice($arrCountReturnPage['items'], 0, 7);
             }
             if($countElem == 3 && $page == 4){
                 array_splice($arrCountReturnPage['items'], 13);
                 array_splice($arrCountReturnPage['items'], 0, 10);
             }
             if($countElem == 3 && $page == 5){
                 array_splice($arrCountReturnPage['items'], 0, 13);
             }

             file_put_contents('./count-return-page.json', json_encode($arrCountReturnPage));
             $data = file_get_contents('./count-return-page.json');
             echo $data;
         }
    }
        //  $readAllUsers = file_get_contents('./users.json'); // выаод всех срузу если не было гет параметров
        //  echo $readAllUsers;
}