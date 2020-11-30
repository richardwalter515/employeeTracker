DROP DATABASE IF EXISTS employee_management_db;
CREATE database employee_management_db;

USE employee_management_db;

CREATE TABLE department (
  id int AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id int AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,4) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee (
  id int AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id int,
  manager_id int NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role (id)
);

