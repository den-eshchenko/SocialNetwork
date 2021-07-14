<?php
function setStatus($data){
    $status = $data['status'];
    // echo $status;
    if(file_exists('../../userdata/temp/sess_'. $_SERVER["HTTP_API_KEY"])){
        $response = [
            "message" => "Вы авторизованы, изменение статуса",
            "status" => 1
        ];
    
        $readCurrentSessionFile = file_get_contents('../../userdata/temp/sess_'. $_SERVER["HTTP_API_KEY"]);// получаю данные сессии текущего пользователя из API-KEY
        $dataPart = str_replace("user|", "", $readCurrentSessionFile); // удаляю лишнее из строки ответа
        $arrDataCurrentSession = unserialize($dataPart);// переобразую данные авторизации в массив
            
        
    
        
        $readUsersStatus = file_get_contents('./statusUsers.json');
        $arrUserStatus = json_decode($readUsersStatus, true);
        

        if($arrDataCurrentSession['id'] == 1){
            $arrUserStatus['items'][0]['status'] = $status;
            file_put_contents('./statusUsers.json', json_encode($arrUserStatus));
            $allStatus = './statusUsers.json';
            $statusCurrentUser = './currentUserStatus.json';
            copy($allStatus, $statusCurrentUser);    
            $readCurrentUsersStatus = file_get_contents('./currentUserStatus.json');
            $arrCurrentUserStatus = json_decode($readCurrentUsersStatus, true);
            array_splice($arrCurrentUserStatus['items'], 1);
        }
        if($arrDataCurrentSession['id'] == 2){
            $arrUserStatus['items'][1]['status'] = $status;
            file_put_contents('./statusUsers.json', json_encode($arrUserStatus));
            $allStatus = './statusUsers.json';
            $statusCurrentUser = './currentUserStatus.json';
            copy($allStatus, $statusCurrentUser);    
            $readCurrentUsersStatus = file_get_contents('./currentUserStatus.json');
            $arrCurrentUserStatus = json_decode($readCurrentUsersStatus, true);
            array_splice($arrCurrentUserStatus['items'], 2);
            array_splice($arrCurrentUserStatus['items'], 0, 1);
        }
        if($arrDataCurrentSession['id'] == 3){
            $arrUserStatus['items'][2]['status'] = $status;
            file_put_contents('./statusUsers.json', json_encode($arrUserStatus));
            $allStatus = './statusUsers.json';
            $statusCurrentUser = './currentUserStatus.json';
            copy($allStatus, $statusCurrentUser);    
            $readCurrentUsersStatus = file_get_contents('./currentUserStatus.json');
            $arrCurrentUserStatus = json_decode($readCurrentUsersStatus, true);
            array_splice($arrCurrentUserStatus['items'], 3);
            array_splice($arrCurrentUserStatus['items'], 0, 2);
        }
        if($arrDataCurrentSession['id'] == 4){
            $arrUserStatus['items'][3]['status'] = $status;
            file_put_contents('./statusUsers.json', json_encode($arrUserStatus));
            $allStatus = './statusUsers.json';
            $statusCurrentUser = './currentUserStatus.json';
            copy($allStatus, $statusCurrentUser);    
            $readCurrentUsersStatus = file_get_contents('./currentUserStatus.json');
            $arrCurrentUserStatus = json_decode($readCurrentUsersStatus, true);
            array_splice($arrCurrentUserStatus['items'], 4);
            array_splice($arrCurrentUserStatus['items'], 0, 3);
        }
        if($arrDataCurrentSession['id'] == 5){
            $arrUserStatus['items'][4]['status'] = $status;
            file_put_contents('./statusUsers.json', json_encode($arrUserStatus));
            $allStatus = './statusUsers.json';
            $statusCurrentUser = './currentUserStatus.json';
            copy($allStatus, $statusCurrentUser);    
            $readCurrentUsersStatus = file_get_contents('./currentUserStatus.json');
            $arrCurrentUserStatus = json_decode($readCurrentUsersStatus, true);
            array_splice($arrCurrentUserStatus['items'], 5);
            array_splice($arrCurrentUserStatus['items'], 0, 4);
        }
        if($arrDataCurrentSession['id'] == 6){
            $arrUserStatus['items'][5]['status'] = $status;
            file_put_contents('./statusUsers.json', json_encode($arrUserStatus));
            $allStatus = './statusUsers.json';
            $statusCurrentUser = './currentUserStatus.json';
            copy($allStatus, $statusCurrentUser);    
            $readCurrentUsersStatus = file_get_contents('./currentUserStatus.json');
            $arrCurrentUserStatus = json_decode($readCurrentUsersStatus, true);
            array_splice($arrCurrentUserStatus['items'], 6);
            array_splice($arrCurrentUserStatus['items'], 0, 5);
        }
        if($arrDataCurrentSession['id'] == 7){
            $arrUserStatus['items'][6]['status'] = $status;
            file_put_contents('./statusUsers.json', json_encode($arrUserStatus));
            $allStatus = './statusUsers.json';
            $statusCurrentUser = './currentUserStatus.json';
            copy($allStatus, $statusCurrentUser);    
            $readCurrentUsersStatus = file_get_contents('./currentUserStatus.json');
            $arrCurrentUserStatus = json_decode($readCurrentUsersStatus, true);
            array_splice($arrCurrentUserStatus['items'], 7);
            array_splice($arrCurrentUserStatus['items'], 0, 6);
        }
        if($arrDataCurrentSession['id'] == 8){
            $arrUserStatus['items'][7]['status'] = $status;
            file_put_contents('./statusUsers.json', json_encode($arrUserStatus));
            $allStatus = './statusUsers.json';
            $statusCurrentUser = './currentUserStatus.json';
            copy($allStatus, $statusCurrentUser);    
            $readCurrentUsersStatus = file_get_contents('./currentUserStatus.json');
            $arrCurrentUserStatus = json_decode($readCurrentUsersStatus, true);
            array_splice($arrCurrentUserStatus['items'], 8);
            array_splice($arrCurrentUserStatus['items'], 0, 7);
        }
        if($arrDataCurrentSession['id'] == 9){
            $arrUserStatus['items'][8]['status'] = $status;
            file_put_contents('./statusUsers.json', json_encode($arrUserStatus));
            $allStatus = './statusUsers.json';
            $statusCurrentUser = './currentUserStatus.json';
            copy($allStatus, $statusCurrentUser);    
            $readCurrentUsersStatus = file_get_contents('./currentUserStatus.json');
            $arrCurrentUserStatus = json_decode($readCurrentUsersStatus, true);
            array_splice($arrCurrentUserStatus['items'], 9);
            array_splice($arrCurrentUserStatus['items'], 0, 8);
        }
        if($arrDataCurrentSession['id'] == 10){
            $arrUserStatus['items'][9]['status'] = $status;
            file_put_contents('./statusUsers.json', json_encode($arrUserStatus));
            $allStatus = './statusUsers.json';
            $statusCurrentUser = './currentUserStatus.json';
            copy($allStatus, $statusCurrentUser);    
            $readCurrentUsersStatus = file_get_contents('./currentUserStatus.json');
            $arrCurrentUserStatus = json_decode($readCurrentUsersStatus, true);
            array_splice($arrCurrentUserStatus['items'], 10);
            array_splice($arrCurrentUserStatus['items'], 0, 9);
        }
        if($arrDataCurrentSession['id'] == 11){
            $arrUserStatus['items'][10]['status'] = $status;
            file_put_contents('./statusUsers.json', json_encode($arrUserStatus));
            $allStatus = './statusUsers.json';
            $statusCurrentUser = './currentUserStatus.json';
            copy($allStatus, $statusCurrentUser);    
            $readCurrentUsersStatus = file_get_contents('./currentUserStatus.json');
            $arrCurrentUserStatus = json_decode($readCurrentUsersStatus, true);
            array_splice($arrCurrentUserStatus['items'], 11);
            array_splice($arrCurrentUserStatus['items'], 0, 10);
        }
        if($arrDataCurrentSession['id'] == 12){
            $arrUserStatus['items'][11]['status'] = $status;
            file_put_contents('./statusUsers.json', json_encode($arrUserStatus));
            $allStatus = './statusUsers.json';
            $statusCurrentUser = './currentUserStatus.json';
            copy($allStatus, $statusCurrentUser);    
            $readCurrentUsersStatus = file_get_contents('./currentUserStatus.json');
            $arrCurrentUserStatus = json_decode($readCurrentUsersStatus, true);
            array_splice($arrCurrentUserStatus['items'], 12);
            array_splice($arrCurrentUserStatus['items'], 0, 11);
        }
        if($arrDataCurrentSession['id'] == 13){
            $arrUserStatus['items'][12]['status'] = $status;
            file_put_contents('./statusUsers.json', json_encode($arrUserStatus));
            $allStatus = './statusUsers.json';
            $statusCurrentUser = './currentUserStatus.json';
            copy($allStatus, $statusCurrentUser);    
            $readCurrentUsersStatus = file_get_contents('./currentUserStatus.json');
            $arrCurrentUserStatus = json_decode($readCurrentUsersStatus, true);
            array_splice($arrCurrentUserStatus['items'], 13);
            array_splice($arrCurrentUserStatus['items'], 0, 12);
        }
        if($arrDataCurrentSession['id'] == 14){
            $arrUserStatus['items'][13]['status'] = $status;
            file_put_contents('./statusUsers.json', json_encode($arrUserStatus));
            $allStatus = './statusUsers.json';
            $statusCurrentUser = './currentUserStatus.json';
            copy($allStatus, $statusCurrentUser);    
            $readCurrentUsersStatus = file_get_contents('./currentUserStatus.json');
            $arrCurrentUserStatus = json_decode($readCurrentUsersStatus, true);
            array_splice($arrCurrentUserStatus['items'], 14);
            array_splice($arrCurrentUserStatus['items'], 0, 13);
        }
        file_put_contents('./currentUserStatus.json', json_encode($arrCurrentUserStatus));
        $dataCurrentUserStatus = file_get_contents('./currentUserStatus.json');
        echo $dataCurrentUserStatus;

    } else {
        $response = [
            "message" => "вы не авторизованы, вы не можете менять стутс",
            "status" => 0
    
        ];
        echo json_encode($response);
    }
}
