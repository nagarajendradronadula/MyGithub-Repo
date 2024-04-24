CREATE database IF NOT EXISTS instagram;

USE instagram;

CREATE TABLE user(
	id INT PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT DEFAULT 0
);

CREATE TABLE post(
	post_id INT PRIMARY KEY,
    content VARCHAR(50),
    user_id INT,
    FOREIGN KEY (user_id) references user(id)
);