// 라우터 분기 처리와 쿠키

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

const server = http.createServer((req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  // 브라우저에게 성공(200)이라고 알려주고 key와 value를 적어준다.

  console.log(req.url);
  if (req.url.startsWith('/login')) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    // name의 값을 구하기위한 파싱
    const { query } = url.parse(req.url); // ex) /login?name=seungbeenoh
    const { name } = qs.parse(query); // ex ) seungbeenoh
    // 유효시간 현재시간으로부터 5분뒤로 지정
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 5);
    // 쿠키, 쿠키유효시간, 자바스크립트에서 쿠키접근못하게막음, /경로에서만 유효한쿠키로지정
    // 302 어떤 페이지로 이동할지 정한다.
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; httpOnly; Path=/`
    });
    res.end(name);
  } else if (cookies.name) {
    console.log(cookies.name);
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`${cookies.name}님 안녕하세요`);
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
