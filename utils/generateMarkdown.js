// function to generate markdown for README
function generateMarkdown(data) {
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

## License

## Badges

## Tests
`;
}

module.exports = generateMarkdown;
