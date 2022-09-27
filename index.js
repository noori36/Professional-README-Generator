//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      message: "Please enter a one-sentence description of your project:",
      name: "description",
    },
    {
      type: "input",
      message: "Please tell us about your project:",
      name: "about",
    },
    {
      type: "input",
      message: "What are the installation instructions for your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "What is the link to clone the repo?",
      name: "clone",
    },
    {
      type: "list",
      name: "license",
      message: "Please select the license you used for this project.",
      choices: [
        "Mozilla",
        "MIT",
        "Apache",
        "Boost"
      ],
    },
    {
      type: "input",
      message: "Please enter any testing protocols you used for your project?",
      name: "test",
    },
    {
      type: "input",
      name: "author",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "userName",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "userEmail",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "URL",
      message: "What is the URL of the live site?",
    },
    {
      type: "input",
      name: "repo",
      message: "What is the URL of the github repo?",
    },
  ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, generateMarkdown(data), err =>
        err ? console.log(err) : console.log('Success!')
    );

}

// function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data);
        const fileName = "Generated-README.md"
        writeToFile(fileName, data);
    });
    
}

// Function call to initialize app
init();
