const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/Employee');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern')
const html = require('./src/page-template');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];
const addEmployee = [
    {
        type: "list",
        message: "What kind of employee would you like to add?",
        choices: ["Engineer", "Intern", "Done adding employees"],
        name: "employee",
    },
]

function addNewEmployee() {
    inquirer
        .prompt(addEmployee)
        .then((response) => {
            switch (response.employee) {
                case "Engineer": newEngineer();
                    break;
                case "Intern": newIntern();
                    break;
                case "Done adding employees": generateTeam(team) ;
                    break;
                default: "Please choose a role"
                
            }
        })
}

function newManager() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            let manager = new Manager(response.name, response.Id, response.email, response.officeNumber)
            team.push(manager);
            addNewEmployee();
            // console.log(manager)
            // console.log(team)
        })
}

const managerQuestions = [
    {
        type: "input",
        message: "Manager Name:",
        name: "name"
    },
    {
        type: "input",
        message: "Manager ID",
        name: "Id"
    },
    {
        type: "input",
        message: "Manager Email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Manager Office number:",
        name: "officeNumber"
    },
];

function newEngineer() {
    inquirer.prompt(engineerQuestions)
        .then(response => {
            let engineer = new Engineer(response.name, response.id, response.email, response.github)
            team.push(engineer);
            addNewEmployee()
            // console.log(engineer)
            // console.log(team)
        })
}

const engineerQuestions = [
    {
        type: "input",
        message: "Engineer Name:",
        name: "name"
    },
    {
        type: "input",
        message: "Engineer ID:",
        name: "Id"
    },
    {
        type: "input",
        message: "Engineer Email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Engineer GitHub username",
        name: "gitHub"
    },
];

function newIntern() {
    inquirer.prompt(internQuestions)
        .then(response => {
            let intern = new Intern(response.name, response.id, response.email, response.school)
            team.push(intern);
            addNewEmployee()
            // console.log(intern)
            // console.log(team)
        })
}

const internQuestions = [
    {
        type: "input",
        message: "Intern Name:",
        name: "name"
    },
    {
        type: "input",
        message: "Intern ID:",
        name: "Id"
    },
    {
        type: "input",
        message: "Intern Email address:",
        name: "email"
    },
    {
        type: "input",
        message: "Intern School:",
        name: "school"
    },
];

function generateTeam() {
    fs.writeFileSync("index.html", html(team), (err) => {
      if (err) {
        console.log(err);
      }
    })
  }

newManager()
