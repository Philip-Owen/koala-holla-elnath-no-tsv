--Create koala table 
CREATE TABLE koala ( 
"id" SERIAL PRIMARY KEY, 
"name" VARCHAR(20),
"gender" VARCHAR(1),
"age" INT, 
"ready_to_transfer" VARCHAR(3),
"notes" VARCHAR (255)
);

INSERT INTO koala (name, gender, age, ready_to_transfer, notes) 
VALUES ( 'Scotty', 'M', 4, 'Yes', 'Born in Guatemala');

INSERT INTO koala (name, gender, age, ready_to_transfer, notes) 
VALUES ( 'Jean', 'F', 5, 'Yes', 'Allergic to lots of lava');

INSERT INTO koala (name, gender, age, ready_to_transfer, notes) 
VALUES ( 'Ororo', 'F', 7, 'No', 'Loves listening to Paula (Abdul)');

INSERT INTO koala (name, gender, age, ready_to_transfer, notes) 
VALUES ( 'Logan', 'M', 15, 'No', 'Loves the sauna');

INSERT INTO koala (name, gender, age, ready_to_transfer, notes) 
VALUES ( 'Charlie', 'M', 9, 'Yes', 'Favorite band is Nirvana');

INSERT INTO koala (name, gender, age, ready_to_transfer, notes) 
VALUES ( 'Betsy', 'F', 4, 'Yes', 'Has a pet Iguana');

SELECT * 
FROM koala;
