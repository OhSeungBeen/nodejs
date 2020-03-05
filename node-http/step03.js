// http 모듈 - 쿠키 설정하기, req.url

const http = require('http');

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
  // 쿠키를 헤더에 포함
  // 브라우저에게 성공(200)이라고 알려주고 key와 value를 적어준다.
  res.writeHead(200, { 'set-Cookie': 'mycookie=test' });
  res.end('Hello Cookie');
  // 쿠키를 브라우저로 부터 받을 수 있다.
  console.log(req.headers.cookie);
  // cookie 문자열 파싱함수 사용
  console.log(parseCookies(req.headers.cookie));
  // req.url
  // 사용자가 어떤 주소를 통해서 요청했는지 알아낼수있다.
  console.log(req.url);
});

server.listen('8080', () => {
  console.log('8080번 포트에서 서버 대기중입니다.');
});

server.on('error', error => {
  console.error(error);
});
