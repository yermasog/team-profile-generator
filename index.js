const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/Employee');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern')
const team = require('./src/page-template');
const Manager = require('./lib/Manager');

//questions for employee
        //.then >> ceate Employee object
                //type of employee:
                        //if manager >> create manager object
                                //else intern >> create intern object 
//write file with objects
const managerQuestions = [
        {
            type: "input",
            message: "Manager name?",
            name: "name"
        },
        {
            type: "input",
            message: "Manager ID?",
            name: "id"
        },
        {
            type: "input",
            message: "Manager email address?",
            name: "email"
        },
        {
            type: "input",
            message: "Manager office number?",
            name: "office"
        },
    ];

    inquirer
        .prompt(managerQuestions)
           .then((response) => {
                const manager = new Manager (response.name, response.id, response.email, response.office);
                console.log(manager)
           })
    

    
//     const engineerQuestions = [
//         {
//             type: "input",
//             message: "Engineer name:",
//             name: "engineer name"
//         },
//         {
//             type: "input",
//             message: "Engineer ID:",
//             name: "engineer id"
//         },
//         {
//             type: "input",
//             message: "Engineer email address:",
//             name: "engineer email"
//         },
//         {
//             type: "input",
//             message: "Engineer GitHub username",
//             name: "engineer github"
//         },
//     ];
    
//     const internQuestions = [
//         {
//             type: "input",
//             message: "Intern name:",
//             name: "intern name"
//         },
//         {
//             type: "input",
//             message: "Intern ID:",
//             name: "intern id"
//         },
//         {
//             type: "input",
//             message: "Intern email address:",
//             name: "intern email"
//         },
//         {
//             type: "input",
//             message: "Intern school",
//             name: "intern school"
//         },
//     ];
    
    