DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  ID INT,
  username VARCHAR(100),
  PRIMARY KEY (ID)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  ID INT,
  messageText VARCHAR(255),
  -- DATE_CREATED DATETIME,
  roomname VARCHAR(100),
  -- USERNAME_ID INT,
  username VARCHAR(100),
  PRIMARY KEY (ID)
  -- FOREIGN KEY (USERNAME_ID) REFERENCES users(ID)
);

/* Create other tables and define schemas for them here! */



-- CREATE TABLE rooms (
--   ID INT,
--   ROOMNAME VARCHAR(100),
--   MESSAGES VARCHAR(255)
-- );



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

