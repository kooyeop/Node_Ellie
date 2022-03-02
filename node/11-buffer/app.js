// Fixed-size chunk of memory
// array of integers, byte of data
// buffer는 데이터를 로형태로 바이트 단위로 처리
const fs = require('fs');

const buf = Buffer.from('Hi');  // 버퍼 만들기
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());    // 문자열로 변환

// 문자열로 변환
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // fast 
buf2[0] = 72;
buf2[1] = 105
console.log(buf2);
console.log(buf3);

console.log(buf2.toString());
console.log(buf3);
buf2.copy(buf3);
console.log(buf3);
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf2, buf2, buf3]);
console.log(newBuf.toString());