<?php
function registration($connection, $data){
    $full_name = $data['full_name'];
    $login = $data['login'];
    $email = $data['email'];
    $pass = $data['password'];
    $pass_confirm = $data['password_confirm'];
    $response = [];

    $check_user = mysqli_query($connection, "SELECT * FROM `users` WHERE `login` = '$login'");
            if(mysqli_num_rows($check_user) > 0){
                $response = [
                    "message" => "Придумайте другой логин - такой есть",
                    "status" => 0,
                    "login" => $login,
                    "full_name" => $full_name,
                    "email" => $email,
                    "pass" => $pass,
                    "post" => $data
                ];
            } else {
                if (!isset($email)) { // filter_var($data["email"], FILTER_VALIDATE_EMAIL) === false 
                    $response = [
                        "message" => "Формат почты не верный",
                        "status" => 0,
                        "full_name" => $full_name,
                        "email" => $email,
                        "pass" => $pass,
                        "post" => $data
                    ];
                } else {
                    if($pass != $pass_confirm){
                        $response = [
                            "message" => "Пароли не совпадают",
                            "status" => 0
                        ];
                    } else {
                        //загрузка картинки на сервер от клиента если она есть
                        // if($_FILES['avatar']['error'] != 4){
                        //     $path = "uploads/" . time() . $_FILES['avatar']['name'];
                        //     if(!move_uploaded_file($_FILES['avatar']['tmp_name'], "../" . $path)){
                        //         $response = [
                        //             "message" => "Ошибка при загрузке картинки",
                        //             "status" => 0
                        //         ];
                        //     } else {
                        //         //добавление пользоватея в базу с аватаром
                        //         $pass = md5($pass);
                        //         if(!mysqli_query($connection, "INSERT INTO `users` (`id`, `full_name`, `login`, `e_mail`, `password`, `avatar`) VALUES (NULL, '$full_name', '$login', '$email', '$pass', '$path')")){
                        //             $response = [
                        //                 "message" => "Пользователь не добавился",
                        //                 "status" => 0
                        //             ];
                        //         } else {
                        //             $response = [
                        //                 "message" => "Вы успешно зарегистрированы",
                        //                 "status" => 1
                        //             ];
                        //         }
                        //     }
                        // } else {
                            // добавление пользоватея в базу если аватара нет
                            $pass = md5($pass);
                            if(!mysqli_query($connection, "INSERT INTO `users` (`id`, `full_name`, `login`, `e_mail`, `password`, `avatar`) VALUES (NULL, '$full_name', '$login', '$email', '$pass', NULL)")){
                                $response = [
                                    "message" => "Пользователь не добавился",
                                    "status" => 0
                                ];
                            } else {
                                $response = [
                                    "message" => "Вы успешно зарегистрированы",
                                    "status" => 1
                                ];
                            }
                        }
                    }
                }
            // }
        echo json_encode($response);
}