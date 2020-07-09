const markdownFile =
`
# ${data.title}

badges 

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
`

console.log(markdownFile);