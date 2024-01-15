// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "Description",
        message: "Type in the description of your project, answer the questions what, why and how?"
    },
    {
        type: "input",
        name: "Installation",
        message: "What are the steps require to install your project? List a step by step description?"
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide example and instructions for usage. Include screenshoots, using the following sintax: ![](./assets/images/screenshot.jpg)",
    },
    {
        type: "list",
        name: "License",
        message: "Which license would you like to use for this project?",
        choices:["MIT License", "Apache License 2.0", "GNU General Public License v3.0", "Mozilla Public License 2.0", "None"],
    },
    {
        type: "input",
        name: "Author",
        message: "Please, enter your name ",
    },
    {
        type: "input",
        name: "Github",
        message: "Please enter your github project link: ",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    try {
        fs.writeFile(fileName, data)
        console.log("Congratulations, the (Generated)Readme.md file has been successfully created!");
    } catch (error) {
        return console.log(error)
    }
}

// TODO: Create a function to initialize app
function init() {
    console.log("Starting of the Generated Readme.md generator");
    const userAnswers = await inquirer.createPrompt(questions);
    var readmeData = generateMarkdown(userAnswers);
    writeToFile("(Generated)Readme.md", readmeData);
}

// Function call to initialize app
init();