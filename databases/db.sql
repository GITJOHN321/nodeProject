CREATE TABLE questions (
    id_question INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    body TEXT NOT NULL,
    done BOOLEAN NOT NULL DEFAULT 0,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE answers(
    id_answer INTEGER PRIMARY KEY AUTO_INCREMENT,
    body TEXT NOT NULL,
    done BOOLEAN NOT NULL DEFAULT 0,
    question_id INTEGER NOT NULL,
    FOREIGN KEY (question_id) REFERENCES questions(id_question)
);
CREATE TABLE users(
    id_users INTEGER PRIMARY KEY AUTO_INCREMENT,
    username varchar(40) NOT NULL,
    email varchar (320) NOT NULL, 
    password varchar(255) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);