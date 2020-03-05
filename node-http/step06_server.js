// REST API
// 주소와 자원을 표현하고 http메서드를 사용하는법
// 자원은 명사형이어야 한다등의 규칙이 있다..

// REST API 요청 예시
// GET(메서드)/users(자원)
// DELETE(메서드)/users/5(자원)
// HTTP method - GET, POST, PUT, PATCH, DELETE

// GET www.seungbeen.com/users/4 user 4 가져온다
// POST www.seungbeen.com/users user 등록하다
// PUT www.seungbeen.com/users/1 user 1 전체 수정, 통째로 대체
// PATCH www.seungbeen.com/users/2 user 2 부분 수정
// DELETE www.seungbeen.com/users/5 user 5삭제

const http = require('http');
const fs = require('fs');

const users = {};

http
  .createServer((req, res) => {
    if (req.method === 'GET') {
      if (req.url === '/') {
        return fs.readFile('./step06_client.html', (err, data) => {
          if (err) {
            throw err;
          }
          res.end(data);
        });
      }
      if (req.url === '/users') {
        return res.end(JSON.stringify(users));
      }
      return fs.readFile(`.${req.url}`, (err, data) => {
        res.end(data);
      });
    } else if (req.method === 'POST') {
      if (req.url === '/') {
      } else if (req.url === '/users') {
        if (req.url === '/') {
          return;
        }
        if (req.url === '/users') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            console.log('POST 본문(body', body);
            const { name } = JSON.parse(body);
            const id = +new Date();
            users[id] = name;
            res.writeHead(201, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end('사용자 등록 성공');
          });
        }
      }
    } else if (req.method === 'PUT') {
      if (req.url === '/') {
      } else if (req.url.startsWith('/users/')) {
        const key = req.url.split('/')[2];
        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });
        req.on('end', () => {
          users[key] = JSON.parse(body).name;
          return res.end(JSON.stringify(users));
        });
      }
    } else if (req.method === 'DELETE') {
      if (req.url === '/') {
      } else if (req.url.startsWith('/users/')) {
        const id = req.url.split('/')[2];
        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });
        req.on('end', () => {
          delete users[id];
          return res.end(JSON.stringify(users));
        });
      }
    }
  })
  .listen(8005, () => {
    console.log('8005번 포트에서 서버 대기 중입니다.');
  });
