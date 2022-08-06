const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'name', 
            message: 'What is your name? (Required)', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'github', 
            message: 'Enter your GitHub Username. (Required)', 
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        }, 
        {
            type: 'input', 
            name: 'about', 
            message: 'Provide some information about yourself:'
        }, 
        {
            type: 'confirm', 
            name: 'confirmAbout', 
            message: 'Would you like to enter some information about yourself for an "About" section?', 
            default: true
        },
        {
            type: 'input', 
            name: 'about', 
            message: 'Provide some information about yourself:', 
            when: ({ confirmAbout}) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};

const promptProject = portfolioData => {
    console.log(`
    ======================
    Add a New Project
    ======================
    `);

    // if there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects=[];
    }
 
    return inquirer
    .prompt([
        {
            type: 'input', 
            name: 'name',
            message: 'What is the name of your project? (Required)', 
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter your Project Name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description', 
            message: 'Provide a description of the project (Required)', 
            validate: projectDesc => {
                if(projectDesc) {
                    return true;
                } else {
                    console.log('Please provide a description of your project!');
                    return false;
                }
            }
        }, 
        {
            type: 'checkbox', 
            name: 'languages', 
            message: 'What did you build this project with? (check all that apply)', 
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input', 
            name: 'link', 
            message: 'Enter the Github link to your project. (Required)', 
            validate: gitLink => {
                if(gitLink) {
                    return true;
                } else {
                    console.log('Enter the link to your GitHub project');
                    return false; 
                }
            }
        }, 
        {
            type: 'confirm', 
            name: 'feature', 
            message: 'Would you like to feature this project?', 
            default: false
        }, 
        {
            type: 'confirm', 
            name: 'confirmAddProject', 
            message: 'Would you like to enter another project?', 
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
    
};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });

