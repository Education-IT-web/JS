let fs;
let tempInfo = {
    projectPath: __dirname + '\\',
    templatesList: [
        'index.html',
        'script.js',
        'style.css',
        'README.md'
    ],
    templatesDesc: {
        'index.html': '<!DOCTYPE html> \n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>\n        Document\n    </title>\n</head>\n<body>\n\n\n</body>\n</html>',
        'script.js': 'hello js',
        'style.css': 'hello css',
        'README.md': '#   JS\n#### В этом проекте описаны [...] \n\n<hr>\n\n\n<br>\n'
    }
}
fs = require('fs');
function createFilesTemplates() {
    for (let fileName of tempInfo.templatesList) {
        fs.open(tempInfo.projectPath + fileName, 'w', (err) => {
            if (err) throw err;
            console.log('File ' + fileName + ' created');
        });
    }
}

function addBodysTemplates() {
    for (let fileName of tempInfo.templatesList) {
        fs.appendFile(tempInfo.projectPath + fileName, tempInfo.templatesDesc[fileName], (err) => {
            if (err) throw err;
            console.log('Data has been added!');
        });
    }
}

function clearBodysTemplates() {
    for (let fileName of tempInfo.templatesList) {
        fs.writeFile(tempInfo.projectPath + fileName, "", (err) => {
            if (err) throw err;
            console.log('Data has been added!');
        });
    }
}
//createFilesTemplates();
//clearBodysTemplates();
//addBodysTemplates();
