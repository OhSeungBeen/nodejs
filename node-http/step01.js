// http모듈 - localhost, port

const http = require('http');

//nodejs는 서버가 아니라 자바스크립트 런타임일 뿐이다.
// http모듈이 서버 역할을 한다..

// 요청이 들어왔을때 콜백함수가 실행된다.
http
  .createServer((req, res) => {
    console.log('요청 들어옴');
    // 클라이언트에 응답
    res.write('<h1>Hello Node!</h1>');
    res.write('<h2>Hello JS!</h2>');
    res.end('<p>Hello Server!</p>');
  })
  //포트 번호 8080 대기
  .listen('8080', () => {
    console.log('8080번 포트에서 서버 대기중입니다.');
  });
