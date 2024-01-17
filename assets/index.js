// Importing "fs", "inquire" and "generateMarkdown" file
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// Array of questions to ask user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Type in the description of your project, answer the questions what, why and how?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps require to install your project? List a step by step description?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide example and instructions for usage. Include screenshoots, using the following sintax: ![](./images/screenshot.jpg)",
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use for this project?",
        choices:["MIT License", "Apache License 2.0", "GNU General Public License v3.0", "Mozilla Public License 2.0", "None"],
    },
    {
        type: "input",
        name: "contributing",
        message: "How can developers contribute to your project?",

    },
    {
        type: "input",
        name: "tests",
        message: "please, provide instructions on how to test your project",

    },
    {
        type: "input",
        name: "questions",
        message: "Please, provide guidelines for questions",

    },
    {
        type: "input",
        name: "email",
        message: "Please, enter your email ",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github project link: ",
    },
];

// Function to write Readme file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, function(error){
if(error){
    return console.log(error);
}
console.log("Congratulations, the (Generated)Readme has been successfully created");
   });
}

// function to initialize the app
async function init() {
    console.log("Starting of the Generated Readme.md generator");
    const userAnswers = await inquirer.prompt(questions);
    var readmeData = generateMarkdown(userAnswers);
    writeToFile("(Generated)Readme.md", readmeData);
}

//calling init function
init();