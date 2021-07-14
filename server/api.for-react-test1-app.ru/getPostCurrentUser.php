<?php 
function getPostCurrentUser(){
    $selectCurrentUser = $_GET['id'];

    $users = './users.json';
        $currentUser = './current-user.json';

        copy($users, $currentUser);

        $readCurrentUser = file_get_contents('./current-user.json');
        $arrCurrentUser = json_decode($readCurrentUser, true);

        if($selectCurrentUser == 1){
            array_splice($arrCurrentUser['items'], 1);
        }
        if($selectCurrentUser == 2){
            array_splice($arrCurrentUser['items'], 2);
            array_splice($arrCurrentUser['items'], 0, 1);
        }
        if($selectCurrentUser == 3){
            array_splice($arrCurrentUser['items'], 3);
            array_splice($arrCurrentUser['items'], 0, 2);
        }
        if($selectCurrentUser == 4){
            array_splice($arrCurrentUser['items'], 4);
            array_splice($arrCurrentUser['items'], 0, 3);
        }
        if($selectCurrentUser == 5){
            array_splice($arrCurrentUser['items'], 5);
            array_splice($arrCurrentUser['items'], 0, 4);
        }
        if($selectCurrentUser == 6){
            array_splice($arrCurrentUser['items'], 6);
            array_splice($arrCurrentUser['items'], 0, 5);
        }
        if($selectCurrentUser == 7){
            array_splice($arrCurrentUser['items'], 7);
            array_splice($arrCurrentUser['items'], 0, 6);
        }
        if($selectCurrentUser == 8){
            array_splice($arrCurrentUser['items'], 8);
            array_splice($arrCurrentUser['items'], 0, 7);
        }
        if($selectCurrentUser == 9){
            array_splice($arrCurrentUser['items'], 9);
            array_splice($arrCurrentUser['items'], 0, 8);
        }
        if($selectCurrentUser == 10){
            array_splice($arrCurrentUser['items'], 10);
            array_splice($arrCurrentUser['items'], 0, 9);
        }
        if($selectCurrentUser == 11){
            array_splice($arrCurrentUser['items'], 11);
            array_splice($arrCurrentUser['items'], 0, 10);
        }
        if($selectCurrentUser == 12){
            array_splice($arrCurrentUser['items'], 12);
            array_splice($arrCurrentUser['items'], 0, 11);
        }
        if($selectCurrentUser == 13){
            array_splice($arrCurrentUser['items'], 13);
            array_splice($arrCurrentUser['items'], 0, 12);
        }
        if($selectCurrentUser == 14){
            array_splice($arrCurrentUser['items'], 14);
            array_splice($arrCurrentUser['items'], 0, 13);
        }

        file_put_contents('./current-user.json', json_encode($arrCurrentUser, JSON_UNESCAPED_SLASHES));
        $data = file_get_contents('./current-user.json');
        echo $data;
}