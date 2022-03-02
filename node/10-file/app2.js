const fs = require('fs').promises;

// read a file (버퍼형태)
fs.readFile('file-new.txt')
    .then(data=>console.log(data))
    .catch(console.error);

// utf8
fs.readFile('file-new.txt', 'utf8')
    .then(data=>console.log(data))
    .catch(console.error);


// writing a file
fs.writeFile('file.txt', 'Hello dream coders')
    .catch(console.error);

// append file
fs.appendFile('file.txt','KOO zzz')
    .then(() => {
        fs.copyFile('file.txt','file-copy.txt')
        .catch(console.error);
    })
// folder
fs.mkdir('sub-folder')
    .catch(console.error);

// read 
fs.readdir('.\\')
    .then(console.log)
    .catch(console.error)