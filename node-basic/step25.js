// 버퍼와 스트림 - readstream, writestream
// 데이터를 조각조각 때서 버퍼에 채우고 옮김
// 여러 버퍼를 채우고 전달

const fs = require('fs');

// readstream
// highWaterMark 몇바이트씩 읽을 것인가?
const readStream = fs.createReadStream('./step25_1.txt', { highWaterMark: 16 });
const data = [];

readStream.on('data', chunk => {
  data.push(chunk);
  console.log('data', chunk, chunk.length);
});

// 끝났을때 end 이벤트 발생
// data[]에 찬데이터를 합쳐서 문자열로변환
readStream.on('end', () => {
  console.log('end', Buffer.concat(data).toString());
});

// error 발생했을때 error 이벤트 발생
readStream.on('error', err => {
  console.log('error', err);
});

//writestream
const writeStream = fs.createWriteStream('./step25_2.txt');
writeStream.write('이 글을 씁니다.\n');
writeStream.write('한 번 더 씁니다..\n');
writeStream.end();
