Описание проекта: 
    Реализовано: Авторизация(см. "Описание REST-API: Авторизация"), Регистрация, Получение и изменение данных пользователя(статус, фото...), подписки, маршрутизация(переходы на страцицы пользователей), Player - c бесконечной загрузкой треков - прогрессбаром загрузки, вывод пользователей с пагинацией,

    Прочее: 

Запуски: 
    Зпуск сервера и маршрутизация файлов php, sql: 
        ...\OSPanel\domains\api.for-react-test1-app.ru - сам REST-API - "ну типа rest-api",
        server\SQL_DB\test_users_bd.sql - должна быть создана в корне БД phpmyadmin, как test_users_bd и туда импортировать саму бд - test_users_bd.sql,
        далее запустить OpenServer.

    Запуск Client - UI: 
        npm i,
        npm start

Описание REST-API:
    Регистрация:
    http://api.for-react-test1-app.ru/registration/`, authParams - через БД

    Авторизация:
    ttp://api.for-react-test1-app.ru/autorization/`, authParams - через проверку в БД, после чего создается PHPSESSID - и в него записываются данные пользователя, 
    сам ключ PHPSESSID - в данном проекте придется скопировать из ответа /autorization - в UI, в api.js - 
        instance = axios.create({
        withCredentials: true,
        baseURL: 'http://api.for-react-test1-app.ru/',
        headers: {
            'API-KEY': '51m08clumrscuku02pdmi1e8i4' - сюда!
    после чего с каждым запросом будет уходить API-KEY - и он проверяется на сервере, 

    Получение пользователей:
    http://api.for-react-test1-app.ru/getusers/?countElem=${usersCount}&page=${pageNumber} - 
        {
            "items": [
            {
                "id": 1,
                "img": null,
                "follower": false,
                "fullName": "denis",
                "message": "im a boss 1",
                "person": "male",
                "location": {
                    "city": "Rostov",
                    "country": "Russia"
                },
                "aboutMe": null,
                "contacts": {
                    "facebook": null,
                    "website": null,
                    "twitter": null,
                    "instagramm": null,
                    "youtube": null,
                    "gitHub": null,
                    "myLink": null
                },
                "lookingForAJob": true
            },
            ...,
            ],
            "totalCount": 14,
            "errors": null
        },

    Подписки на юзеров:
    http://api.for-react-test1-app.ru/follow-unfollow/`, userID - подписки, отписки в друзья,

    Получение данных конкретного пользователя:
    http://api.for-react-test1-app.ru/get-post-current-user?id=${userID}

    Выход из аккаунта:
    http://api.for-react-test1-app.ru/logout/?login=${login}

    Проверка авторизации:
    http://api.for-react-test1-app.ru/me - отсылается при первой отрисовке - для проверки авторизации, 

    Получение статуса пользователя:
    http://api.for-react-test1-app.ru/profile/status/get/${userId}
    
    Изменение статуса:
    http://api.for-react-test1-app.ru/profile/status/set`, {status: status}

    Изменение фото:
    http://api.for-react-test1-app.ru/profile/photo/set`, formData

    Изменение информации о пользователе:
    http://api.for-react-test1-app.ru/profile/set/AboutMe/`, values

    Получение музыки:
    http://api.for-react-test1-app.ru/music - 16 треков
        {
            "items": [
                {
                    "id": 1,
                    "path": "http://api.for-react-test1-app.ru/music/files/cotton_candy.mp3",
                    "like": true,
                    "title": "cotton candy",
                    "autor": "YONGBLOD",
                    "img": "http://api.for-react-test1-app.ru/music/img/cotton_candy.jpg",
                    "duration": "2:47"
                }
                ...

    Лайк трека: 
    http://api.for-react-test1-app.ru//likeTrack/`, idTkack 



