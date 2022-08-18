const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');
const employeeArray = [];

function addManager() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the name of this team's Manager?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this Manager's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "what is this Manager's email address?"
        },
        {
            type: 'input',
            name:'officeNumber',
            message: "What is this Manager's office number?"
        }
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        employeeArray.push(manager);
        addTeamMember();
    });
};

function addTeamMember() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'What would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'Done building my team!']
        }
    ])
    .then(answers => {
        if (answers.addTeamMember == 'Add an Engineer') {
            addEngineer();
        } else if (answers.addTeamMember == 'Add an Intern') {
            addIntern();
        } else {
            const generatedHTML = generateHTML(employeeArray);
            fs.writeFile('./dist/index.html', generatedHTML, () => {
            console.log('HTML has been succesfully generated!');
            });
        };
    });
};

function addEngineer() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this Engineer?'
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this Engineer's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this Engineer's email adress?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this Engineer's github?"
        }
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employeeArray.push(engineer);
        addTeamMember();
    });
}

function addIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this Intern?'
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this Intern's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this Intern's email adress?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does this Intern attend?"
        }
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeArray.push(intern);
        addTeamMember();
    });
};

addManager();