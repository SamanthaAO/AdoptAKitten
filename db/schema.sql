DROP DATABASE kittens_db;

CREATE DATABASE kittens_db;
USE kittens_db;

CREATE TABLE kittens (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(35),
    description VARCHAR(300),
    image VARCHAR(35),
    likes INT DEFAULT 0,
    adopted BOOLEAN DEFAULT FALSE,
    
    PRIMARY KEY (id)
);