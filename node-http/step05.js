// 세션 - 메모리 세션 구현해보기

const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

// cookie 문자열 파싱 함수
const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

// 세션 선언
const session = {};
console.log(session);
const server = http.createServer((req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  // 브라우저에게 성공(200)이라고 알려주고 key와 value를 적어준다.
  if (req.url.startsWith('/login')) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // name의 값을 구하기위한 파싱
    const { query } = url.parse(req.url); // ex) /login?name=seungbeenoh
    const { name } = qs.parse(query); // ex ) seungbeenoh
    // 유효시간 현재시간으로부터 5분뒤로 지정
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 5);
    const randomInt = +new Date();
    session[randomInt] = {
      name,
      expires
    };
    // sessionid를 브라우저의 쿠키로 저장
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `sessionId=${randomInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
    });
    res.end(name);
    // 쿠키를 통해 session의 값을 꺼낸다.
  } else if (cookies.sessionId && session[cookies.sessionId].expires > new Date()) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`${session[cookies.sessionId].name}님 안녕하세요`);
  } else {
    fs.readFile('./step04.html', (err, data) => {
      res.end(data);
    });
  }
});

server.listen('8080', () => {
  console.log('8080번 포트에서 서버 대기중입니다.');
});

server.on('error', error => {
  console.error(error);
});
