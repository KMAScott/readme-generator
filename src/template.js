const addScreenshot = screenshot => {
    if (!screenshot) {
        return '';
    }

    return `
![A screenshot of the project](assets/images/${screenshot})
    `;
};

module.exports = templateData => {
    const { title, description, installation, usage, screenshot, credits, contributing, tests, github, email, license } = templateData;
    return `
![license badge](https://img.shields.io/badge/license-${license}-informational)

# ${title}

## Description

${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}
${addScreenshot(screenshot)}

## Credits

${credits}

## License

![license badge](https://img.shields.io/badge/license-${license}-informational)

This application is covered by the ${license} license.

## Contributing

${contributing}

## Tests

${tests}

## Questions

If you have any additional questions please contact me at: ${email}

https://github.com/${github}
    `;
};