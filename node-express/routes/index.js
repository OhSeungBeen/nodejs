var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 500에러를 테스하기위해 서버를 고장 내보자.
router.get('/error500', function(req, res, next) {
  res.render('index', { title: 'Express' });
  try {
    throw new Error('서버를 고장내주마');
  } catch (error) {
    // next() 할때 error를 파라미터로 전달
    // 다음미들웨어를 다 건너뛰고 에러처리 미들웨어로 이동한다.
    next(error);
  }
});

// pug 파일 응답하기
router.get('/pug/test', function(req, res, next) {
  // views폴더안의 test.pug 파일을 랜더링
  // 두번째파라미터로 변수와 값을 넘겨줄수도 있다.
  res.render('test', {
    title3: 'Hi',
    title4: 'Pug'
  });
});

// pug 파일 응답하기
router.get('/pug/test2', function(req, res, next) {
  // views폴더안의 test.pug 파일을 랜더링
  // 두번째파라미터로 변수와 값을 넘겨줄수도 있다.
  res.render('test2');
});

// ejs 파일 응답하기
// 테스트할때 app.js에서
// view engin  pug => ejs 수정
router.get('/ejs/test', function(req, res, next) {
  res.render('test', { title: 'ejs' });
});

module.exports = router;
