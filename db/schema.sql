CREATE DATABASE kittens_db;
USE kittens_db;

CREATE TABLE kittens (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(35),
    adopted BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
);