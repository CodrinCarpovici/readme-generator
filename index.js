const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter the project description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information:",
  },
  {
    type: "input",
    name: "credits",
    message: "Enter the project credits:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "ISC", "Apache", "GPL", "None"],
  },
  {
    type: "checkbox",
    name: "technologies",
    message: "Select technologies used:",
    choices: [
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Bootstrap",
      "React",
      "Vue",
      "Angular",
    ],
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions:",
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
