const fs = require('fs');

// 3
// rename(..., callback(error, data))
// try {renameSync(...)} catch(e) {}
// promiss.rename.then().catch(0)

try {
    fs.renameSync('tex.txt', 'file-new.txt');
} catch(error){
    console.error(error);
}

console.log('hello');

fs.rename('file-new.txt', 'file.txt', (error)=> {
    console.log(error);
});
console.log('hello');

fs.promises
    .rename('text.txt','text-new.txt')
    .then(()=>console.log('done'))
    .catch(console.error);

