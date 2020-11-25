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
        'View employees by department',
        'View employees by roles',
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
        case 'View employees by department':
          viewEmployeesDept();
          break;
        case 'View employees by roles':
          viewEmployeesRole();
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
      message: 'What is the role ID for this employee?'
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