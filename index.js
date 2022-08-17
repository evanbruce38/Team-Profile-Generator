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
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'What would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'Done building my team!']
        };
    ])
    .then(answers => {
        if (answers.addTeamMember == 'Add an Engineer') {
            addEngineer();
        } else if (answers.addTeamMember == 'Add an Intern') {
            addIntern();
        } else {
            const generatedHTML = generateHTML(employeeArray);
            fs.writeFile('./dist/index/html', generatedHTML, () => {
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
            name: 'engineerName',
            message: 'What is the name of this Engineer?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is this Engineer's ID number?"
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is this Engineer's email adress?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this Engineer's github?"
        }
    ]);
    .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
        employeeArray.push(engineer);
        addTeamMember();
    });
}

function addIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of this Intern?'
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is this Intern's ID number?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is this Intern's email adress?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does this Intern attend?"
        }
    ]);
    .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
        employeeArray.push(intern);
        addTeamMember();
    });
};

addManager();