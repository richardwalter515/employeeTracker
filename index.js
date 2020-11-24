const mysql = require('mysql');
const inquirer = require('inquirer');
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
    })
}