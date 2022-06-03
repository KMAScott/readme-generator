const inquirer = require('inquirer');
const { writeFile } = require('./utils/generate-file.js');
const generateFile = require('./src/template.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a short description of your project. (Required)',
            validate: desciptionInput => {
                if (desciptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the appropriate license for this project:',
            choices: [
                'Apache',
                'GNU',
                'MIT',
                'ISC',
                'Open',
                'Mozilla'
            ]
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies? (Required)',
            validate: dependenciesInput => {
                if (dependenciesInput) {
                    return true;
                } else {
                    console.log('Please enter the dependencies command!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
            validate: userInfoInput => {
                if (userInfoInput) {
                    return true;
                } else {
                    console.log('Please enter use information for the user!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmScreenshot',
            message: 'Would you like to include a screenshot?',
            default: false
        },
        {
            type: 'input',
            name: 'screenshot',
            message: 'Add your screenshot file to /assets/images. Enter the name of the file here.',
            when: ({ confirmScreenshot }) => {
                if (confirmScreenshot) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list them here. If you followed tutorials, include links to those here as well.',
            validate: creditsInput => {
                if (creditsInput) {
                    return true;
                } else {
                    console.log('Please enter information for credits.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to this project.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What does the user need to know about running tests in this repository?'
        }
    ]);
};


promptUser()
    .then(answers => {
        return generateFile(answers);
    })
    .then(templateData => {
        return writeFile(templateData);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });

