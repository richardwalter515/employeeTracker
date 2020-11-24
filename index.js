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
          multiSearch();
          break;
        case 'Add an employee':
          rangeSearch();
          break;
        case 'View employees by department':
          songSearch();
          break;
        case 'View employees by roles':
          songSearch();
          break;
        case 'View all employees':
          songSearch();
          break;
        case 'Update an employee role':
          songSearch();
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
      const query = connection.query(
        "INSERT INTO department SET ?", {name: answer.deptName,},
        function(err, res) {
          if (err) throw err;
          console.log(`successfully added ${answer.deptName} to database`);
          runSearch();
        });
    });
};