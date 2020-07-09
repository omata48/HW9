const fs = require("fs");
const inquirer = require("inquirer");

// professional README.md is generated with 
// the title of your project -- when entered, displayed as title
// sections entitled 
//     Description, -- text input
//     Table of Contents, -- links created (take to corresponding sections of readme)
//     Installation, -- text input (instructions)
//     Usage, -- text input (usage info)
//     License, -- list of options ( badge near top of readme and notice to section license explaining type)
//     Contributing, -- text input (contributing guidelines)
//     Tests, -- text input (test instructions)
//     and Questions -- github username inputed (link to github profile) && email inputed added with "reach out for more information"` 

// array of questions for user inquire
const questions = [
    // type project title
    // type description
    // type installation instructions
    // type usage information
    // type contribution guidelines
    // type test instructions
    // list license
    // type github username
    // type email address
];

// function to write README file using fs
function writeToFile(fileName, data) {
    // title
    // description
    // table of contents
    // installation
    // usage
    // license
    // contributing
    // tests
    // questions
}

// function to initialize program
function init() {
    //on call --- 1. prompt questions to user
    // then make file that will be used
    // then write to file data from user
}

// function call to initialize program
init();
