DROP DATABASE IF EXISTS employee_management_db;
CREATE database employee_management_db;

USE employee_management_db;

CREATE TABLE employee (
  id int AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id int AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,4) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE department (
  id int AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);
