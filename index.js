//packages needed for this application
const inquirer = require("inquirer");

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
        "ISC",
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
