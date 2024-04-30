-- CREATE DATABASE IF NOT EXISTS instagram;

-- USE instagram;

-- CREATE TABLE IF NOT EXISTS user(
-- 	id INT,
--     age INT,
--     name VARCHAR(30),
--     email VARCHAR(50) UNIQUE,
--     followers INT DEFAULT 0,
--     following INT DEFAULT 0,
--     CONSTRAINT CHECK (age >= 13),
--     PRIMARY KEY (id)
-- );

-- INSERT INTO user
-- (id, age, name, email, followers, following)
-- VALUES
-- (1, 14, "adam", "adam@yahoo.in", 123, 145),
-- (2, 15, "bob", "bob123@gmail.com", 200, 200),
-- (3, 16, "casey", "casey@gmail.com", 300, 306),
-- (4, 17, "donald", "donald@gmail.com", 200, 105);

-- INSERT INTO user
-- (id, age, name, email, followers, following)
-- VALUES
-- (5, 14, "eve", "eve@yahoo.in", 400,145),
-- (6, 16,"farah", "farah@gmail.com", 10000, 1000);

-- -- SELECT * FROM user; 
-- -- SELECT * FROM user WHERE followers >= 200;
-- -- SELECT name, age, followers FROM user WHERE age > 15 OR followers > 200;
-- -- SELECT name, email, followers
-- -- FROM user
-- -- WHERE age BETWEEN 15 AND 17;
-- -- WHERE email IN ("donald@gmail.com", "bob123@gmail.com", "abc@gmail.com")
-- -- LIMIT 1;
-- -- SELECT id, name, followers
-- -- FROM user
-- -- ORDER BY followers DESC;
-- -- SELECT max(followers)
-- -- FROM user;
-- -- SELECT age, max(followers)
-- -- FROM user
-- -- GROUP BY age
-- -- HAVING max(followers) >= 200
-- -- ORDER BY age DESC;

-- -- UPDATE user
-- -- SET followers = 600
-- -- WHERE age = 16;

-- -- DELETE FROM user
-- -- WHERE age = 15;

-- -- ALTER TABLE user
-- -- ADD COLUMN city VARCHAR(30) DEFAULT "Delhi";
-- -- ALTER TABLE user
-- -- DROP COLUMN city;
-- -- ALTER TABLE user
-- -- RENAME TO InstaUser;
-- -- ALTER TABLE InstaUser
-- -- RENAME TO user;
-- -- ALTER TABLE user
-- -- CHANGE COLUMN followers subs INT DEFAULT 0;
-- ALTER TABLE user
-- MODIFY subs INT DEFAULT 5;

-- -- SET SQL_SAFE_UPDATES = 0;

-- SELECT * FROM user;

-- CREATE TABLE IF NOT EXISTS post(
-- 	post_id INT PRIMARY KEY,
--     content VARCHAR(50),
--     user_id INT,
--     FOREIGN KEY (user_id) references user(id)
-- );

-- INSERT INTO post
-- (post_id, content, user_id)
-- VALUES
-- (101, "Hello World!", 3),
-- (102, "Bye Bye!", 1),
-- (103, "Hello Delta", 3);

-- SELECT * FROM post;

-- DROP TABLE post;
-- TRUNCATE TABLE user;
-- DROP TABLE user;















CREATE DATABASE IF NOT EXISTS college;
USE college;
CREATE TABLE IF NOT EXISTS teacher(
	id INT PRIMARY KEY,
    name VARCHAR(30),
    subject VARCHAR(20),
    salary INT DEFAULT 25000
);

INSERT INTO teacher
(id,name, subject, salary)
VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

SELECT * FROM teacher;

SELECT * FROM teacher
WHERE salary > 55000;

ALTER TABLE teacher
CHANGE COLUMN salary ctc INT;

SET SQL_SAFE_UPDATES = 0;
UPDATE teacher
SET ctc = ctc + (ctc * 0.25);

ALTER TABLE teacher
ADD COLUMN city VARCHAR(30) DEFAULT "Gurgaon";

ALTER TABLE teacher
DROP COLUMN ctc;


CREATE TABLE student(
	roll_no INT PRIMARY KEY,
    name VARCHAR(50),
    city VARCHAR(50),
    marks INT
);

INSERT INTO student
(roll_no, name, city, marks)
VALUES
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);

SELECT * FROM student;

SELECT * FROM student
WHERE marks > 75;

SELECT city, max(marks)
FROM student
GROUP BY city;
-- another way is
-- SELECT DISTINCT city FROM student; 

SELECT avg(marks) FROM student;

ALTER TABLE student
ADD COLUMN grade VARCHAR(2);

UPDATE student
SET grade = "O"
WHERE marks >= 80;

UPDATE student
SET grade = "A"
WHERE 80 > marks AND marks >= 70;

UPDATE student
SET grade = "B"
WHERE marks > 60 AND marks < 70;