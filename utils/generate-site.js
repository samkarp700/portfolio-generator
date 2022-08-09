const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('.dist/index.html', fileContent, err => {
            //if error - reject the promise and send error to the promise's catch method
            if (err) {
                reject(err);
                return;
            }

            //if all is well, resolve
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    ok:true,
                    message: 'Style sheet copied!'
                });
        });
    });
};

//this is the same as 
// module.exports = {
//     writeFile: writeFile,
//     copyFile: copyFile
// };
//this
module.exports = {writeFile, copyFile};