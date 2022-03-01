const fs = require('fs');

/* const readStream = fs.createReadStream('.\\file.txt', {
    highWaterMark : 8, // 64k default
    encoding: 'utf-8',
});

readStream.on('data', (chunk) => {
 //   console.log(chunk);
     console.count('data');
})

readStream.on('error', (error) => {
    console.log(error);
}) */
///////////////////////////////////////////////////////////
/* const data = [];
const readStream = fs.createReadStream('.\\file.txt', {
//    highWaterMark : 8, // 64k default
//   encoding: 'utf-8',
});

readStream.on('data', (chunk) => {
 //   console.log(chunk);
    data.push(chunk);
    console.count('data');
})

readStream.on('end', () => {
    console.log(data.join(''));
})
readStream.on('error', (error) => {
    console.log(error);
}) */
/////////////////////////////////////////////////////////////
// 함수가 자기자신을 리턴하므로 다음과 같이 변경 가능함
const data = [];
fs.createReadStream('.\\file.txt', {
//    highWaterMark : 8, // 64k default
//   encoding: 'utf-8',
}).on('data', (chunk) => {
 //   console.log(chunk);
    data.push(chunk);
    console.count('data');
}).on('end', () => {
    console.log(data.join(''));
}).on('error', (error) => {
    console.log(error);
})