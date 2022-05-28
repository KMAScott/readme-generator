const inquirer = require('inquirer');

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
            name: 'desciption',
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
            type: 'input',
            name: 'license',
            message: 'What kind of license should your project have? (Required)',
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please enter the type of license!');
                    return false;
                }
            }
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
        }
    ]);
};

promptUser().then(answers => console.log(answers));

