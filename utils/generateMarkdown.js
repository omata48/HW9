// function to generate markdown for README
function generateMarkdown(data) {
  const badgeName = data.license.split(' ').join('%20')
  return `# ${data.title}

[license-badge](https://img.shields.io/badge/license-${badgeName}-green) 
  
## Description
  
${data.description}
  
## Table of Contents
  
[Installation](#Installation)  
[Usage](#Usage)  
[License](#License)  
[Contributing](#Contributing)  
[Tests](#Tests)  
[Questions](#Questions)  
  
## Installation 
  
${data.instructions}
  
## Usage
  
${data.usageInfo}
  
## License
  
Licensed under the ${data.license} license.
  
## Contributing
  
${data.contGuidelines}
  
## Tests
  
${data.testInstructions}
  
## Questions
  
My GitHub username is ${data.gitHub}. 
For additional questions feel free to email ${data.email}
    `;
}

module.exports = generateMarkdown;
