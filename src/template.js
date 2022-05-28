module.exports = templateData => {
    const { title, description, installation, usage, credits, email, license } = templateData;
    return `
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

    ## Credits

    ${credits}
    Contact me at : ${email}

    ## License

    ${license}
    `;
};