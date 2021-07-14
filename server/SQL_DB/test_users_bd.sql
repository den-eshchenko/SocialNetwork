-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июл 13 2021 г., 13:22
-- Версия сервера: 5.6.38-log
-- Версия PHP: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `test_users_bd`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `login` varchar(255) DEFAULT NULL,
  `e_mail` varchar(255) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `avatar` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `full_name`, `login`, `e_mail`, `password`, `avatar`) VALUES
(1, 'user1', 'user1', 'user1@test.ru', '202cb962ac59075b964b07152d234b70', NULL),
(2, 'user2', 'user2', 'user2@test.ru', '202cb962ac59075b964b07152d234b70', NULL),
(3, 'user3', 'user3', 'user3@test.ru', '202cb962ac59075b964b07152d234b70', NULL),
(4, 'user4', 'user4', 'user4@test.ru', '202cb962ac59075b964b07152d234b70', NULL),
(5, 'user5', 'user5', 'user5@test.ru', '202cb962ac59075b964b07152d234b70', NULL),
(6, 'user6', 'user6', 'user6@test.ru', '202cb962ac59075b964b07152d234b70', NULL),
(7, 'user7', 'user7', 'user7@test.ru', '202cb962ac59075b964b07152d234b70', NULL),
(8, 'user8', 'user8', 'user8@test.ru', '202cb962ac59075b964b07152d234b70', NULL),
(9, 'user9', 'user9', 'user9@test.ru', '202cb962ac59075b964b07152d234b70', NULL),
(10, 'user10', 'user10', 'user10@test.ru', '202cb962ac59075b964b07152d234b70', NULL),
(11, 'user11', 'user11', 'user11@test.ru', '202cb962ac59075b964b07152d234b70', NULL),
(12, 'user12', 'user12', 'user12@test.ru', '202cb962ac59075b964b07152d234b70', NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
