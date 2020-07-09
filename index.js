const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util")
const generateMD = require("./utils/generateMarkdown.js")

const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user inquire
const questions = [
    // type project title
    {
        type: "input",
        message: "Title of Project:",
        name: "title",
    },
    // type description
    {
        type: "input",
        message: "Brief description of project:",
        name: "description",
    },
    // type installation instructions
    {
        type: "input",
        message: "Installation instructions:",
        name: "instructions",
    },
    // type usage information
    {
        type: "input",
        message: "Usage information:",
        name: "usageInfo",
    },
    // type contribution guidelines
    {
        type: "input",
        message: "Contribution Guidelines:",
        name: "contGuidelines",
    },
    // type test instructions
    {
        type: "input",
        message: "Test instructions:",
        name: "testInstructions",
    },
    // list license
    {
        type: "list",
        message: "License you want to use:",
        name: "license",
        choices: [
            "MIT",
            "GNU GPLv3",
            "Mozilla Public License",
        ]
    },
    // type github username
    {
        type: "input",
        message: "Github Username:",
        name: "gitHub",
    },
    // type email address
    {
        type: "input",
        message: "Email address:",
        name: "email",
    },
];

// function to write README file using fs
function writeToFile(fileName, data) {
    
    const markdownFile = generateMD(data);

    writeFileAsync(fileName, markdownFile);
    console.log(markdownFile);
}

// function to initialize program
function init() {
    //on call --- 1. prompt questions to user
    // then make file that will be used
    // then write to file data from user
    inquirer.prompt(questions)
    .then(function(responses) {
        writeToFile(`${responses.title}.md`,responses)
    })
}

// function call to initialize program
init();
