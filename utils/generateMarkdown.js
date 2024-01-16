// function to generate markdown for README
function generateMarkdown(data) {
  const colors = ["blue", "red", "orange", "pink", "purple", "green"];
  const randomBadgeColor = colors[Math.floor(Math.random() * colors.length)];
  const licenseBadge =
    data.license === "None"
      ? "No license was selected"
      : `![License](https://img.shields.io/badge/License-${data.license}-${randomBadgeColor}.svg)`;
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Technologies](#technologies)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Installation

## Usage
Go To: [${data.live}](${data.live}) and view the website.  
${data.installation}
${data.usage}

## Credits
${data.credits}

## License
${licenseBadge}

## Badges

## Tests
`;
}

module.exports = generateMarkdown;
