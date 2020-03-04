// 내장모듈 - url
// 주소를 자유롭게 다루게 해주는 모듈
// http://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash

const url = require('url');
const myUrl = new URL(
  'http://www.gilbut.co.kr/book/bookList.aspx?sercate1=00132030#anchor'
);
const parseUrl = url.parse(
  'http://www.gilbut.co.kr/book/bookList.aspx?sercate1=00132030#anchor'
);
console.log(myUrl); // whatwg 방식 protocol, username, password, hostname, port, pathname, search, hash 등을 담은객체, search를 처리하기 편하다.
console.log(parseUrl); // 기존방식
console.log(url.format(myUrl));
