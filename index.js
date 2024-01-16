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
    name: "live",
    message: "Enter live site link:",
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
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const fileName = path.join(process.cwd(), "README.md");
      const readmeContent = generateMarkdown(answers);
      writeToFile(fileName, readmeContent);
    })
    .catch((err) => console.log(err));
}

// function call to initialize program
init();
