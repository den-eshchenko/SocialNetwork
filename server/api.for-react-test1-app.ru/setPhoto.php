<?php
function setPhoto($data){
    if(file_exists('../../userdata/temp/sess_'. $_SERVER["HTTP_API_KEY"])){        
        $readCurrentSessionFile = file_get_contents('../../userdata/temp/sess_'. $_SERVER["HTTP_API_KEY"]);// получаю данные сессии текущего пользователя из API-KEY
        $dataPart = str_replace("user|", "", $readCurrentSessionFile); // удаляю лишнее из строки ответа
        $arrDataCurrentSession = unserialize($dataPart);// переобразую данные авторизации в массив
            
        
        if($_FILES['image']['error'] != 4){
            $path = "api.for-react-test1-app.ru/users_data/{$arrDataCurrentSession['id']}/uploads/". $_FILES['image']['name'];
            move_uploaded_file($_FILES['image']['tmp_name'], '../' . $path);
            //и добавить path в файл друзей в img поле 
            // добавить во все папки
            // добавить в users.json
            $readUsersAll = file_get_contents('./users.json');
            $toArrUsers = json_decode($readUsersAll, true);
            $toArrUsers['items'][$arrDataCurrentSession['id']-1]['img'] = "http://api.for-react-test1-app.ru/users_data/{$arrDataCurrentSession['id']}/uploads/{$_FILES['image']['name']}";
            file_put_contents('./users.json', json_encode($toArrUsers, JSON_UNESCAPED_SLASHES));

            for($i = 1; $i <= 14; $i++){
                $readUsersAll = file_get_contents("./users_data/{$i}/friends/friends.json");
                $toArrUsers = json_decode($readUsersAll, true);
                $toArrUsers['items'][$arrDataCurrentSession['id']-1]['img'] = "http://api.for-react-test1-app.ru/users_data/{$arrDataCurrentSession['id']}/uploads/{$_FILES['image']['name']}";
                file_put_contents("./users_data/{$i}/friends/friends.json", json_encode($toArrUsers, JSON_UNESCAPED_SLASHES));
            }
        }

        $response = [
            "message" => "Вы авторизованы, setting photo",
            "photo" => "api.for-react-test1-app.ru/users_data/{$arrDataCurrentSession['id']}/uploads/". $_FILES['image']['name'],
            "status" => 1
        ];
        echo json_encode($response, JSON_UNESCAPED_SLASHES);
    } else {
        $response = [
            "message" => "вы не авторизованы, вы не можете загрузить фото",
            "status" => 0
        ];
        echo json_encode($response);
    }
}
