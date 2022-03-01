const fs = require('fs');

const beforeMem = process.memoryUsage().rss;
console.log(beforeMem);
fs.readFile('.\\file.txt', (_, data) => {
    fs.writeFile('.\\file2.txt', data, () => {});

    // calculate
    const afterMem = process.memoryUsage().rss;
    console.log(afterMem);
    const diff = afterMem - beforeMem;
    const consumed = diff / 1024 / 1024;
    console.log(diff);
    console.log(`consumed memory : ${consumed} MB`); // 백틱사용
});
