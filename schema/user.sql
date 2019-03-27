CREATE DATABASE `users`;
USE users;

CREATE TABLE `users_list` (
  `id` bigint(60) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL,
  `email` varchar(40) NOT NULL,
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `star_review` integer(10),
  PRIMARY KEY (`id`)
);

INSERT INTO users_list(`user`, `email`, `first_name`, `last_name`)
VALUE(1234, 'test@gmail.com', 'Testy', 'Testers')

CREATE TABLE `todos` (
  `id` integer(40) NOT NULL AUTO_INCREMENT,
  `userId` varchar(60) NOT NULL,
  `description` varchar(300) NOT NULL,
  `title` varchar(40) NOT NULL,
  `startingBid` integer(20) NOT NULL,
  `minStar` integer(20) NOT NULL,
  `expiration` varchar(60) NOT NULL,
  PRIMARY KEY (`id`));
  
  INSERT INTO `todos`(`id`, `description`, `title`, `startingBid`, `minStar`)
VALUES(1234, "only the front lawn", "mow lawn", 10, 3);
