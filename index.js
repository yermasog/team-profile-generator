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

//questions for employee
//.then >> ceate Employee object
//type of employee:
//if manager >> create manager object
//else intern >> create intern object 
//write file with objects
const team = [];
const employeeRole = [
    {
        type: "list",
        message: "Which kind of employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "employee",
    },
]

function role() {
    inquirer.prompt(employeeRole)
        .then((response) => {
            let empRole = ""
            switch (response) {
                case "Manager": empRole = "Manager"
                    break;
                case "Engineer": empRole = "Engineer"
                    break;
                case "Intern": empRole = "Intern"
                    break;
                default: "Please choose a role"

                    return empRole

            }
            
        })

}

function newEmployee(role) {
    if (role == "Manager") {
        newManager();
    }
    else if (role == "Engineer") {
        newEngineer();
    }
    else if (role = -"Intern") {
        newIntern();
    }

}

function newManager() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            let manager = new Manager(response.name, response.id, response.email, response.office)
            team.push(manager)
        })
}

const managerQuestions = [
    {
        type: "input",
        message: "Name:",
        name: "name"
    },
    {
        type: "input",
        message: "ID",
        name: "id"
    },
    {
        type: "input",
        message: "Email address:",
        name: "email"
    },
    {
        type: "list",
        message: "Office number:",
        name: "office"
    },
];

function newEngineer() {
    inquirer.prompt(engineerQuestions)
        .then(response => {
            let engineer = new Engineer(response.name, response.id, response.email, response.github)
            team.push(engineer)
        })
}

const engineerQuestions = [
    {
        type: "input",
        message: "Name:",
        name: "engineer name"
    },
    {
        type: "input",
        message: "ID:",
        name: "engineer id"
    },
    {
        type: "input",
        message: "Email address:",
        name: "engineer email"
    },
    {
        type: "input",
        message: "GitHub username",
        name: "github"
    },
];

function newIntern() {
    inquirer.prompt(internQuestions)
        .then(response => {
            let intern = new Intern(response.name, response.id, response.email, response.school)
            team.push(intern)
        })
}

const internQuestions = [
    {
        type: "input",
        message: "Name:",
        name: "intern name"
    },
    {
        type: "input",
        message: "ID:",
        name: "intern id"
    },
    {
        type: "input",
        message: "Email address:",
        name: "intern email"
    },
    {
        type: "input",
        message: "School",
        name: "school"
    },
];

role();
