<?php
function getStatus($idUser){
            $allStatus = './statusUsers.json';
            $statusCurrentUser = './currentUserStatus.json';
        
            copy($allStatus, $statusCurrentUser);
        
            $readCurrentUsersStatus = file_get_contents('./currentUserStatus.json');
            $arrCurrentUserStatus = json_decode($readCurrentUsersStatus, true);
        
            if($idUser == 1){
                    array_splice($arrCurrentUserStatus['items'], 1);
            }
            if($idUser == 2){
                    array_splice($arrCurrentUserStatus['items'], 2);
                    array_splice($arrCurrentUserStatus['items'], 0, 1);
            }
            if($idUser == 3){
                array_splice($arrCurrentUserStatus['items'], 3);
                array_splice($arrCurrentUserStatus['items'], 0, 2);
            }
            if($idUser == 4){
                array_splice($arrCurrentUserStatus['items'], 4);
                array_splice($arrCurrentUserStatus['items'], 0, 3);
            }  
            if($idUser == 5){
                array_splice($arrCurrentUserStatus['items'], 5);
                array_splice($arrCurrentUserStatus['items'], 0, 4);
            }  
            if($idUser == 6){
                array_splice($arrCurrentUserStatus['items'], 6);
                array_splice($arrCurrentUserStatus['items'], 0, 5);
            }  
            if($idUser == 7){
                array_splice($arrCurrentUserStatus['items'], 7);
                array_splice($arrCurrentUserStatus['items'], 0, 6);
            }  
            if($idUser == 8){
                array_splice($arrCurrentUserStatus['items'], 8);
                array_splice($arrCurrentUserStatus['items'], 0, 7);
            }  
            if($idUser == 9){
                array_splice($arrCurrentUserStatus['items'], 9);
                array_splice($arrCurrentUserStatus['items'], 0, 8);
            }  
            if($idUser == 10){
                array_splice($arrCurrentUserStatus['items'], 10);
                array_splice($arrCurrentUserStatus['items'], 0, 9);
            }  
            if($idUser == 11){
                array_splice($arrCurrentUserStatus['items'], 11);
                array_splice($arrCurrentUserStatus['items'], 0, 10);
            }  
            if($idUser == 12){
                array_splice($arrCurrentUserStatus['items'], 12);
                array_splice($arrCurrentUserStatus['items'], 0, 11);
            }  
            if($idUser == 13){
                array_splice($arrCurrentUserStatus['items'], 13);
                array_splice($arrCurrentUserStatus['items'], 0, 12);
            }  
            if($idUser == 14){
                array_splice($arrCurrentUserStatus['items'], 14);
                array_splice($arrCurrentUserStatus['items'], 0, 13);
            }  

            file_put_contents('./currentUserStatus.json', json_encode($arrCurrentUserStatus));
            $dataCurrentUserStatus = file_get_contents('./currentUserStatus.json');
            echo $dataCurrentUserStatus;

        } 
