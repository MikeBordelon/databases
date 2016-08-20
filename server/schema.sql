CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  message VARCHAR(140),
  roomname VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  /* Describe your table here.*/
  username VARCHAR(20) NOT NULL
);

CREATE TABLE  rooms (
  /* Describe your table here.*/
  name VARCHAR(20) NOT NULL
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

