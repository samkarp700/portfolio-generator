const inquirer = require('inquirer');
inquirer
    .prompt([
        {
            type: 'input', 
            name: 'name', 
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));
// const FileSystem = require('fs');
// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(name, github);

// FileSystem.writeFile('./index.html', pageHTML, err => {
//     if (err) throw (err);

//     console.log('Portfolio Complete! Check out index.html to see the output!');
// });
