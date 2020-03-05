// http 모듈 - 응답으로 파일 읽어 보내기

const http = require('http');
const fs = require('fs');

const server = http
  .createServer((req, res) => {
    console.log('요청 들어옴');
    fs.readFile('./step02.html', (err, data) => {
      if (err) {
        throw err;
      }
      // toString()으로 보내지않아도 된다. 바이너리데이터로 보내면 브라우저가 알아서 처리해준다.
      res.end(data);
    });
  })
  .listen('8080', () => {
    console.log('8080번 포트에서 서버 대기중입니다.');
  });

// error 내용을 확인하는 eventListener 추가
server.on('error', error => {
  console.error(error);
});
