// function to generate markdown for README
function generateMarkdown(data) {
  const colors = ["blue", "red", "orange", "pink", "purple", "green"];
  const randomBadgeColor = colors[Math.floor(Math.random() * colors.length)];
  const licenseBadge =
    data.license === "None"
      ? "No license was selected"
      : `![License](https://img.shields.io/badge/License-${data.license}-${randomBadgeColor}.svg)`;

  const technologiesBadges =
    data.technologies && data.technologies.length > 0
      ? data.technologies
          .map(
            (tech) =>
              `![${tech}](https://img.shields.io/badge/${encodeURIComponent(
                tech
              )}-${randomBadgeColor}.svg)`
          )
          .join(" ")
      : "No technologies specified";

  return `# ${data.title}

  ${licenseBadge}

## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#Contributing)
4. [Credits](#credits)
5. [License](#license)
6. [Badges](#technologies)
7. [Tests](#tests)
8. [Questions](#questions)

## Installation
${data.installation}

## Usage
Go To: [${data.live}](${data.live}) and view the website.  
${data.usage}

## Contributing
${data.contributing}

## Credits
${data.credits}

## License
${licenseBadge}

## Badges
${technologiesBadges}

## Tests
${data.tests}

## Questions
* GitHub Profile: [${data.username}](https://github.com/${data.username})
* For additional questions, contact me at: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
