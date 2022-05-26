const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your GitHub Username? (Required)',
            validate: githubUsernameInput => {
                if (githubUsernameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
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
            name: 'dependencies',
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
            name: 'tests',
            message: 'What command should be run to run tests? (Required)',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Please enter the test command!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'useInfo',
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
            name: 'contribute',
            message: 'What does the user need to know about contributing to the repo?',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please enter contribution instructions!');
                    return false;
                }
            }
        }
    ]);
};

promptUser().then(answers => console.log(answers));

