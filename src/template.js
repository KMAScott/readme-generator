const addScreenshot = screenshot => {
    if (!screenshot) {
        return '';
    }

    return `
![A screenshot of the project](assets/images/${screenshot})
    `;
};

module.exports = templateData => {
    const { title, description, installation, usage, screenshot, credits, email, license } = templateData;
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
Contact me at : ${email}

## License

![license badge](https://img.shields.io/badge/license-${license}-informational)

This repository is covered by the ${license} license.
    `;
};