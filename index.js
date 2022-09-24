// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Connect the generateMarkdown script  
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questionsArr = [{
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a title to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter a brief description of your project:',
        name: 'description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to provide a project description!');
                return false;
            }
        }
    },
    
    {
        type: 'input',
        message: 'Enter the installation instructions for your project?',
        name: 'installation',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide the installation instructions for the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Project will be used for?',
        name: 'usage',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        message: 'what is the git repo for the project?',
        name: 'link',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('You need to provide the repo link for the project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Are there any contribution guidelines or not?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use project!');
                return false;
            }
        }
    },
    {
        type: 'list',
        message: 'Select the license you used for this project:',
        name: 'license',
        choices: ['Apache 2.0', 'MIT', 'Apache', 'None' ],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('You must pick a license for the project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'userName',
        message: 'What is your GitHub username?',
        validate: userNameInput => {
            if (userNameInput) {
                return true;
            } else {
                console.log('You must enter your GitHub username!');
                return false;
            }
        }
      },

    {
        type: 'input',
        name: 'clone',
        message: 'What is the link to clone the repo?',
        validate: gitCloneInput => {
            if (gitCloneInput) {
                return true;
            } else {
                console.log('You must enter the link to clone the repo!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email?',
        validate: userEmailInput => {
            if (userEmailInput) {
                return true;
            } else {
                console.log('You must enter your email!');
                return false;
            }
        }
        
    },
    {
        type: 'input',
        name: 'author',
        message: 'What is your name?',
        validate: authorInput => {
            if (authorInput) {
                return true;
            } else {
                console.log('You must enter your name as author of this readme!');
                return false;
            }
        }
        
        
    }

];

// Create a function to initialize app
function init() {
    inquirer
        .prompt(questionsArr)
        .then(data => {
            console.log(data);
            const filename = `${data.title.split(' ').join('')}`;

            writeToFile(filename, data);
        });
};

// Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(`${filename}.md`, generateMarkdown(data), err =>
        err ? console.log(err) : console.log('Success!')
    );
}

// Function call to initialize app
init();