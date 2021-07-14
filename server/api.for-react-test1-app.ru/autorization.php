<?php
function autorization($connection, $data){
    $login = $data['login'];
    $pass = md5($data['password']);
    // $login = 'den4';
    // $pass = md5('123');

    $check_user = mysqli_query($connection, "SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$pass'");
    if(mysqli_num_rows($check_user) > 0){ // проверка есть ли такой пользователь в базе
        $user = mysqli_fetch_assoc($check_user); // переобразование из данных базы в массив
        
        $users = file_get_contents('./users.json');
        $toArrUsers = json_decode($users, true);
        $logo = $toArrUsers['items'][$user['id']-1]['img'];

        $_SESSION['user'] = [ // записываю в текущую сессию пользователя, как авторизованного, после этого придет заголовк как PHPSESSID=asfewf12214124 - его использую как api-key
            'id' => $user['id'],
            'email' => $user['e_mail'],
            'logo' => $logo,
            'login' => $user['login']
        ];
        // setcookie("currentUser", $user['id'], time()+3600, '/');
        $request = [
            "message"=> "Вы успешно авторизованы",
            "status" => 1,
            "user" => [
                "name" => $user["login"],
                "email" => $user["e_mail"],
                'logo' => $logo,
                'id' => $user['id']
            ]
        ];

    } else {
        $request = [
            "message" => "Не верный логин или пароль",
            "status" => 0
    
        ];
    }
    echo json_encode($request, JSON_UNESCAPED_SLASHES);
}