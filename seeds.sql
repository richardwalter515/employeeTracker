INSERT INTO department (name)
VALUES ("Managment"), ("Engineering"), ("Intern");


INSERT INTO role (title, salary, department_id)
VALUES ("Junior Developer", 85000, 2),
("Developer", 100000, 2),
("Senior Developer", 130000, 2),
("CEO", 500000, 1),
("Vice President", 250000, 1),
("Intern", 25000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Richard", "Walter", 2, 5),
("Elizabeth", "Taylor", 2, 5),
("Marilyn", "Monroe", 1, 4),
("Frodo", "Baggins", 1, 4),
("Khloe", "Kardashian", 1, 4),
("George", "Clooney", 6, 3),
("Shania", "Twain", 4, 1),
("Olivia", "Newton-John", 5, 1),
("Margaret", "Thatcher", 3, 1),
("Beyonce", "Knowles", 3, 1),
("Camilla", "Parker-Bowles", 6, 3);