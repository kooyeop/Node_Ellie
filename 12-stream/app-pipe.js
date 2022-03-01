const fs = require('fs');
const zlib = require('zlib');


const readStream = fs.createReadStream('.\\file.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('.\\file4.zip');
const piping = readStream.pipe(zlibStream).pipe(writeStream);
piping.on('finish' , ()=>{
    console.log('done!!');
});

// 서버 만들어보기
const http = require('http');
const server = http.createServer((req, res) => {
    // 파일 읽어서 한번에 보내기
    //fs.readFile('file.txt', (err, data)=> {
    //    res.end(data);

    // 스트림으로 보내기
    const stream = fs.createReadStream('.\\file.txt');
    stream.pipe(res);
});
server.listen(3000);