// 내장모듈 - querystring
// url.parse()와 같이사용
const querystring = require('querystring');
const url = require('url');

const parseUrl = url.parse(
  'http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript'
);
console.log(parseUrl);

const query = querystring.parse(parseUrl.query);
console.log(query);
console.log(querystring.stringify(query)); // 다시 문자열로 합침
