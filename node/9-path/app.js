const path = require('path');

// POSIC(Unix:max, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\mhyfile.html'

console.log(__dirname);
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));

//dirname
console.log(path.dirname(__filename));

//extension
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);

const str = path.format(parsed);
console.log(str);

// isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname));
console.log('isAbsolute?', path.isAbsolute('../'));

// normalize (이상한 경로 알아서 고쳐줌)
console.log(path.normalize('./folder/////////'));

// join
console.log(__dirname + '/' + 'image'); // 윈도우os에서는 맞지않음
console.log(__dirname + path.sep + 'image'); s
console.log(path.join(__dirname, 'image'));