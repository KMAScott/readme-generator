function generateReadMe(answers) {
    return `
    #${answers.title}

    ## Description

    ${answers.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)

    ## Installation

    ${answers.installation}

    ## Usage

    ${answers.usage}

    ## Credits

    ${answers.credits}
    Contact me at : ${answers.email}

    ## License

    ${answers.license}
    `;
};

module.exports = generateReadMe;