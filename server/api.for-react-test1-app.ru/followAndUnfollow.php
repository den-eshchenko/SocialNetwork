<?php

function followAndUnfollow($data){
    if(file_exists('../../userdata/temp/sess_'. $_SERVER["HTTP_API_KEY"])){
        $response = [
            "message" => "Вы авторизованы",
            "status" => 1
        ];
    
        $readCurrentSessionFile = file_get_contents('../../userdata/temp/sess_'. $_SERVER["HTTP_API_KEY"]);// получаю данные сессии текущего пользователя из API-KEY
        $dataPart = str_replace("user|", "", $readCurrentSessionFile); // удаляю лишнее из строки ответа
        $arrDataCurrentSession = unserialize($dataPart);// переобразую данные авторизации в массив

        $id = $data -1; // на кого подписываться или отписываться, -1 т.к при формировании массива их json все идет с 0 - а в запросе я передаю id с единицы 
        // echo $id;
        // var_dump($data);
        // if($arrDataCurrentSession['id'] == 0){
        //     //иду в пвпку 0 пользователя и добавляю в его файл пользователя с id post
        //     $getAllUsers = file_get_contents('./users_data/0/friends/friends.json'); // беру всех пользователей
        //     $decodeToJsonAllUsers = json_decode($getAllUsers, true); // переобразую в json для работы как с массивом     
        //     $decodeToJsonAllUsers['items'][$id]['follower'] = !$decodeToJsonAllUsers['items'][$id]['follower'];
        //     // var_dump($decodeToJsonAllUsers['items'][$id]['follower']);
        //     file_put_contents('./users_data/0/friends/friends.json', json_encode($decodeToJsonAllUsers));
        //     $d = file_get_contents('./users_data/0/friends/friends.json');
        // } 
        if($arrDataCurrentSession['id'] == 1){
            $getAllUsers = file_get_contents('./users_data/1/friends/friends.json'); // беру всех пользователей
            $decodeToJsonAllUsers = json_decode($getAllUsers, true); // переобразую в json для работы как с массивом     
            $decodeToJsonAllUsers['items'][$id]['follower'] = !$decodeToJsonAllUsers['items'][$id]['follower'];
            file_put_contents('./users_data/1/friends/friends.json', json_encode($decodeToJsonAllUsers, JSON_UNESCAPED_SLASHES));
            $d = file_get_contents('./users_data/1/friends/friends.json');
        } 
        if($arrDataCurrentSession['id'] == 2){
            $getAllUsers = file_get_contents('./users_data/2/friends/friends.json'); // беру всех пользователей
            $decodeToJsonAllUsers = json_decode($getAllUsers, true); // переобразую в json для работы как с массивом     
            $decodeToJsonAllUsers['items'][$id]['follower'] = !$decodeToJsonAllUsers['items'][$id]['follower'];
            file_put_contents('./users_data/2/friends/friends.json', json_encode($decodeToJsonAllUsers, JSON_UNESCAPED_SLASHES));
            $d = file_get_contents('./users_data/2/friends/friends.json');
        } 
        if($arrDataCurrentSession['id'] == 3){
            $getAllUsers = file_get_contents('./users_data/3/friends/friends.json'); // беру всех пользователей
            $decodeToJsonAllUsers = json_decode($getAllUsers, true); // переобразую в json для работы как с массивом     
            $decodeToJsonAllUsers['items'][$id]['follower'] = !$decodeToJsonAllUsers['items'][$id]['follower'];
            file_put_contents('./users_data/3/friends/friends.json', json_encode($decodeToJsonAllUsers, JSON_UNESCAPED_SLASHES));
            $d = file_get_contents('./users_data/3/friends/friends.json');
        } 
        if($arrDataCurrentSession['id'] == 4){
            $getAllUsers = file_get_contents('./users_data/4/friends/friends.json'); // беру всех пользователей
            $decodeToJsonAllUsers = json_decode($getAllUsers, true); // переобразую в json для работы как с массивом     
            $decodeToJsonAllUsers['items'][$id]['follower'] = !$decodeToJsonAllUsers['items'][$id]['follower'];
            file_put_contents('./users_data/4/friends/friends.json', json_encode($decodeToJsonAllUsers, JSON_UNESCAPED_SLASHES));
            $d = file_get_contents('./users_data/4/friends/friends.json');
        } 
        if($arrDataCurrentSession['id'] == 5){
            $getAllUsers = file_get_contents('./users_data/5/friends/friends.json'); // беру всех пользователей
            $decodeToJsonAllUsers = json_decode($getAllUsers, true); // переобразую в json для работы как с массивом     
            $decodeToJsonAllUsers['items'][$id]['follower'] = !$decodeToJsonAllUsers['items'][$id]['follower'];
            file_put_contents('./users_data/5/friends/friends.json', json_encode($decodeToJsonAllUsers, JSON_UNESCAPED_SLASHES));
            $d = file_get_contents('./users_data/5/friends/friends.json');
        } 
        if($arrDataCurrentSession['id'] == 6){
            $getAllUsers = file_get_contents('./users_data/6/friends/friends.json'); // беру всех пользователей
            $decodeToJsonAllUsers = json_decode($getAllUsers, true); // переобразую в json для работы как с массивом     
            $decodeToJsonAllUsers['items'][$id]['follower'] = !$decodeToJsonAllUsers['items'][$id]['follower'];
            file_put_contents('./users_data/6/friends/friends.json', json_encode($decodeToJsonAllUsers, JSON_UNESCAPED_SLASHES));
            $d = file_get_contents('./users_data/6/friends/friends.json');
        } 
        if($arrDataCurrentSession['id'] == 7){
            $getAllUsers = file_get_contents('./users_data/7/friends/friends.json'); // беру всех пользователей
            $decodeToJsonAllUsers = json_decode($getAllUsers, true); // переобразую в json для работы как с массивом     
            $decodeToJsonAllUsers['items'][$id]['follower'] = !$decodeToJsonAllUsers['items'][$id]['follower'];
            file_put_contents('./users_data/7/friends/friends.json', json_encode($decodeToJsonAllUsers, JSON_UNESCAPED_SLASHES));
            $d = file_get_contents('./users_data/7/friends/friends.json');
        } 
        if($arrDataCurrentSession['id'] == 8){
            $getAllUsers = file_get_contents('./users_data/8/friends/friends.json'); // беру всех пользователей
            $decodeToJsonAllUsers = json_decode($getAllUsers, true); // переобразую в json для работы как с массивом     
            $decodeToJsonAllUsers['items'][$id]['follower'] = !$decodeToJsonAllUsers['items'][$id]['follower'];
            file_put_contents('./users_data/8/friends/friends.json', json_encode($decodeToJsonAllUsers, JSON_UNESCAPED_SLASHES));
            $d = file_get_contents('./users_data/8/friends/friends.json');
        } 
        if($arrDataCurrentSession['id'] == 9){
            $getAllUsers = file_get_contents('./users_data/9/friends/friends.json'); // беру всех пользователей
            $decodeToJsonAllUsers = json_decode($getAllUsers, true); // переобразую в json для работы как с массивом     
            $decodeToJsonAllUsers['items'][$id]['follower'] = !$decodeToJsonAllUsers['items'][$id]['follower'];
            file_put_contents('./users_data/9/friends/friends.json', json_encode($decodeToJsonAllUsers, JSON_UNESCAPED_SLASHES));
            $d = file_get_contents('./users_data/9/friends/friends.json');
        } 
        if($arrDataCurrentSession['id'] == 10){
            $getAllUsers = file_get_contents('./users_data/10/friends/friends.json'); // беру всех пользователей
            $decodeToJsonAllUsers = json_decode($getAllUsers, true); // переобразую в json для работы как с массивом     
            $decodeToJsonAllUsers['items'][$id]['follower'] = !$decodeToJsonAllUsers['items'][$id]['follower']; // меняю значение массива на противоположное
            file_put_contents('../users_data/10/friends/friends.json', json_encode($decodeToJsonAllUsers, JSON_UNESCAPED_SLASHES));
            $d = file_get_contents('./users_data/10/friends/friends.json');
        } 
        if($arrDataCurrentSession['id'] == 11){
            $getAllUsers = file_get_contents('./users_data/11/friends/friends.json'); // беру всех пользователей
            $decodeToJsonAllUsers = json_decode($getAllUsers, true); // переобразую в json для работы как с массивом     
            $decodeToJsonAllUsers['items'][$id]['follower'] = !$decodeToJsonAllUsers['items'][$id]['follower'];
            file_put_contents('./users_data/11/friends/friends.json', json_encode($decodeToJsonAllUsers, JSON_UNESCAPED_SLASHES));
            $d = file_get_contents('./users_data/11/friends/friends.json');
        } 
        if($arrDataCurrentSession['id'] == 12){
            $getAllUsers = file_get_contents('./users_data/12/friends/friends.json'); // беру всех пользователей
            $decodeToJsonAllUsers = json_decode($getAllUsers, true); // переобразую в json для работы как с массивом     
            $decodeToJsonAllUsers['items'][$id]['follower'] = !$decodeToJsonAllUsers['items'][$id]['follower'];
            file_put_contents('./users_data/12/friends/friends.json', json_encode($decodeToJsonAllUsers, JSON_UNESCAPED_SLASHES));
            $d = file_get_contents('./users_data/12/friends/friends.json');
        }
        if($arrDataCurrentSession['id'] == 13){
            $getAllUsers = file_get_contents('./users_data/13/friends/friends.json'); // беру всех пользователей
            $decodeToJsonAllUsers = json_decode($getAllUsers, true); // переобразую в json для работы как с массивом     
            $decodeToJsonAllUsers['items'][$id]['follower'] = !$decodeToJsonAllUsers['items'][$id]['follower'];
            file_put_contents('./users_data/13/friends/friends.json', json_encode($decodeToJsonAllUsers, JSON_UNESCAPED_SLASHES));
            $d = file_get_contents('./users_data/13/friends/friends.json');
        }
        if($arrDataCurrentSession['id'] == 14){
            $getAllUsers = file_get_contents('./users_data/14/friends/friends.json'); // беру всех пользователей
            $decodeToJsonAllUsers = json_decode($getAllUsers, true); // переобразую в json для работы как с массивом     
            $decodeToJsonAllUsers['items'][$id]['follower'] = !$decodeToJsonAllUsers['items'][$id]['follower'];
            file_put_contents('./users_data/14/friends/friends.json', json_encode($decodeToJsonAllUsers, JSON_UNESCAPED_SLASHES));
            $d = file_get_contents('./users_data/14/friends/friends.json');
        } 
    } else {
        $response = [
            "message" => "Такой сессии авторизации нет, авторизуйтесь заново и используйте новый ключ",
            "status" => 0
    
        ];
    }
    echo json_encode($response);
}

