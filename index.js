const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const employeeArray = [];

function addManager() {
    inquirer
    .createPromptModule([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the name of this team's Manager?"
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is this Manager's ID number?"
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "what is this Manager's email address?"
        },
        {
            type: 'input',
            name:'officeNumber',
            message: "What is this Manager's office number?"
        }
    ]);
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        employeeArray.push(manager);
        addTeamMember();
    });
};

function addTeamMember() {
    inquirer
    .prompt([
        
    ])
}
