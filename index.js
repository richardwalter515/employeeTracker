const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rootpassword',
  database: 'employee_management_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  runSearch();
});

const runSearch = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'Add a department',
        'Add a role',
        'Add an employee',
        'View all departments',
        'View all roles',
        'View all employees',
        'Update an employee role',
        'exit',
      ],
    }).then((answer) => {
      switch (answer.action) {
        case 'Add a department':
          addDept();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'View all departments':
          viewDepts();
          break;
        case 'View all roles':
          viewRoles();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Update an employee role':
          updateEmployee();
          break;
        case 'exit':
          connection.end();
          break;
      }
    });
};

const addDept = () => {
  inquirer
    .prompt({
      name: 'deptName',
      type: 'input',
      message: 'What department would you like to add?',
    })
    .then((answer) => {
      connection.query(
        "INSERT INTO department SET ?", {name: answer.deptName,},
        function(err, res) {
          if (err) throw err;
          console.log(`successfully added ${answer.deptName} to database`);
          runSearch();
        });
    });
};

const addRole = () => {
  inquirer
    .prompt([{
      name: 'title',
      type: 'input',
      message: 'What role would you like to add?'
    },
    {
      name: 'salary',
      type: 'input',
      message: 'What is the salary for this role?'
    },
    {
      name: 'department_id',
      type: 'input',
      message: 'What is the department ID for this role?'
    }])
    .then((answer) => {
      const query = "INSERT INTO role SET?"
      connection.query(
        query, {title: answer.title, salary: answer.salary, department_id: answer.department_id}, function(err, res) {
          if (err) throw err;
          console.log(`successfully added ${answer.title} to database`);
          runSearch();
        });
    });  
};

const addEmployee = () => {
  inquirer
    .prompt([{
      name: 'first_name',
      type: 'input',
      message: 'What is the first name?'
    },
    {
      name: 'last_name',
      type: 'input',
      message: 'What is the last name?'
    },
    {
      name: 'role_id',
      type: 'input',
      message: 'What is the ID for their role?'
    },
    {
      name: 'manager_id',
      type: 'input',
      message: 'What is the manager ID for this employee?'
    }])
    .then((answer) => {
      const query = "INSERT INTO employee SET?"
      connection.query(
        query, {first_name: answer.first_name, last_name: answer.last_name, role_id: answer.role_id, manager_id: answer.manager_id}, function(err, res) {
          if (err) throw err;
          console.log(`successfully added ${answer.first_name} to database`);
          runSearch();
        });
    });  
};

const viewDepts = () => {
  const query =
  'SELECT * FROM department';
  connection.query(query, (err, res) => {
  if (err) throw err;
  console.table(res);
  runSearch();
  });
};

const viewRoles = () => {
  const query =
  'SELECT * FROM role';
  connection.query(query, (err, res) => {
  if (err) throw err;
  console.table(res);
  runSearch();
  });
};

const viewAllEmployees = () => {
  const query = "SELECT e.id, e.first_name, e.last_name, e.manager_id, r.title, r.salary, d.name FROM employee AS e INNER JOIN role AS r ON e.role_id = r.id INNER JOIN department AS d ON r.department_id = d.id";
  connection.query(query, (err, res) => {
  if (err) throw err;
  console.table(res);
  runSearch();
  });
};

const updateEmployee = () => {
  inquirer
    .prompt([{
      name: 'emp_id',
      type: 'input',
      message: 'What is the employee ID of the person whose role would you like to update?'
    },
    {
      name: 'new_role',
      type: 'list',
      message: 'What is their new role?',
      choices: [
        'Junior Developer',
        'Developer',
        'Senior Developer',
        'CEO',
        'Vice President',
        'Intern'
      ]
    }])
    .then((answer) => {
      if (answer.new_role === "Junior Developer") {
        const query = `UPDATE employee SET role_id = 1 WHERE id = ${answer.emp_id}`;
        connection.query(query, function(err, res) {
          if (err) throw err;
          console.log(`successfully updated the role for employee # ${answer.emp_id}`);
          runSearch();
        });
      } else if (answer.new_role === "Developer") {
        const query = `UPDATE employee SET role_id = 2 WHERE id = ${answer.emp_id}`;
        connection.query(query, function(err, res) {
          if (err) throw err;
          console.log(`successfully updated the role for employee # ${answer.emp_id}`);
          runSearch();
        });
      } else if (answer.new_role === "Senior Developer") {
        const query = `UPDATE employee SET role_id = 3 WHERE id = ${answer.emp_id}`;
        connection.query(query, function(err, res) {
          if (err) throw err;
          console.log(`successfully updated the role for employee # ${answer.emp_id}`);
          runSearch();
        });
      } else if (answer.new_role === "CEO") {
        const query = `UPDATE employee SET role_id = 4 WHERE id = ${answer.emp_id}`;
        connection.query(query, function(err, res) {
          if (err) throw err;
          console.log(`successfully updated the role for employee # ${answer.emp_id}`);
          runSearch();
        });
      } else if (answer.new_role === "Vice President") {
        const query = `UPDATE employee SET role_id = 5 WHERE id = ${answer.emp_id}`;
        connection.query(query, function(err, res) {
          if (err) throw err;
          console.log(`successfully updated the role for employee # ${answer.emp_id}`);
          runSearch();
        });
      } else if (answer.new_role === "Intern") {
        const query = `UPDATE employee SET role_id = 6 WHERE id = ${answer.emp_id}`;
        connection.query(query, function(err, res) {
          if (err) throw err;
          console.log(`successfully updated the role for employee # ${answer.emp_id}`);
          runSearch();
        });
      }

    });  
};