<?php 
// session_set_cookie_params(/*...*/);
session_start();

// header('Content-Type: application/json;charset=utf-8');
// header('Content-Type: multipart/form-data');
// header('Access-Control-Allow-Headers: X-Requested-With, API-KEY');
header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, DELETE");


require "connect_to_db_users.php";
require "registration.php";
require "autorization.php";
require "getUsers.php";
require "followAndUnfollow.php";
require "getPostCurrentUser.php";
require "logout.php";
require "me.php";
require "getStatus.php";
require "setStatus.php";
require "setPhoto.php";
require "setAboutMeCurrentUser.php";
require "getMusic.php";
require "setLikeTrack.php";

$q = $_GET['q']; // все что после http://api.for-react-test1-app.ru/.......
$params = explode('/', $q); // разбиваю строку на массив элементов - через / 

$type = $params[0]; // первый элемент - например - /users
$id = $params[1]; // второй элемент - например - 0 или 1 или 2  

$postData = file_get_contents('php://input'); // прочитать данные с запроса
$data = json_decode($postData, true); // сделать их как json

if($type === 'getusers'){  
    getUsers(); // вывод пользователей 
}
if($type === 'registration'){
    registration($connection, $data); // регистрация 
}
if($type === 'autorization'){
    autorization($connection, $data); // авторизация 
}
if($type === 'follow-unfollow'){
    followAndUnfollow($data); // авторизация 
}
if($type === 'get-post-current-user'){ // получить посты текущего юзера
    getPostCurrentUser();
}
if($type === 'logout'){
    logout();
}
if($type === 'me'){ // проверка при старте страницы - авторизован я или нет
    me();
}
if($params[0] === 'profile' && $params[1] === 'status' && $params[2] === 'get'){ // получить стутс текущего пользователя
    getStatus($params[3]);
}
if($params[0] === 'profile' && $params[1] === 'status' && $params[2] === 'set'){ // изменить мой статус если я авторизован
    setStatus($data);
}
if($params[0] === 'profile' && $params[1] === 'photo' && $params[2] === 'set'){ 
    setPhoto($data);
}
if($params[0] === 'profile' && $params[1] === 'set' && $params[2] === 'AboutMe'){ 
    setAboutMeCurrentUser($data);
}
if($params[0] === 'music'){ 
    getMusic();
}
if($params[0] === 'likeTrack'){ 
    setLikeTrack($data);
}

