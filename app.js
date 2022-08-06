const FileSystem = require('fs');
const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;
const generatePage = require('./src/page-template.js');

FileSystem.writeFile('./index.html', generatePage(name,github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio Complete! Check out index.html to see the output!');
});

// const printProfileData = profileDataArr => {
//     //This...
//     for (let i=0; i< profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('==================');

//     //is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);