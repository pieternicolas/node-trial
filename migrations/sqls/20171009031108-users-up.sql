CREATE TABLE users (
	_id varchar(255) NOT NULL UNIQUE,
	firstName varchar(255),
	lastName varchar(255),
	username varchar(255),
	password varchar(255),
	email varchar(255),
	PRIMARY KEY (_id)
);