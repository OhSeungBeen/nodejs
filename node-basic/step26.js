// 버퍼와 스트림 - pipe, copyFile
const fs = require('fs');
// step26_1.txt 의내용을 step26_2로 복사
const readStream = fs.createReadStream('./step26_1.txt');
const writeStream = fs.createWriteStream('./step26_2.txt');
readStream.pipe(writeStream);

// 파일 복사 다른 방법
fs.copyFile('./step26_1.txt', './step26_3.txt', err => {
  console.log(err);
});
