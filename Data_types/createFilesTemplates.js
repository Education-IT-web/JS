let fs, folderName;
folderName = process.argv[2];
fs = require('fs');
let tempInfo = {
    projectPath: __dirname + '\\' + folderName + '\\',
    templatesList: [
        'index.html',
        'script.js',
        'style.css',
        'README.md',
        'sitemap.xml',
        'Robots.txt'
    ],
    templatesDesc: {
        'index.html': '<!DOCTYPE html> \n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>\n        Document\n    </title>\n</head>\n<body>\n\n\n</body>\n</html>',
        'script.js': '"use strict"\n',
        'style.css': '',
        'README.md': '#   JS\n#### В этом проекте описаны [...] \n\n<hr>\n\n\n<br>\n',
        'sitemap.xml ': "",
        'Robots.txt': ""
    }
}

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
            console.log('Data has been added! in ' + fileName);
        });
    }
}
function clearBodysTemplates() {
    for (let fileName of tempInfo.templatesList) {
        fs.writeFile(tempInfo.projectPath + fileName, "", (err) => {
            if (err) throw err;
            console.log('Data has been refreshed');
        });
    }
}
function checkFolder() {
    try {
        fs.accessSync(folderName, fs.constants.R_OK | fs.constants.W_OK)
        return true;
    } catch (err) {
        console.error("Folder cannot be find!");
        return false;
    }
}
function createFolder() {
    try {
        fs.mkdirSync(folderName, fs.constants.R_OK | fs.constants.W_OK);
        console.log("Folder " + folderName + " created.");
    } catch (err) {
        console.error("Folder cannot be created!")
    }
}

if (!checkFolder()){
    createFolder();
}
createFilesTemplates();
clearBodysTemplates();
addBodysTemplates();
