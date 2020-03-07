// express - node.js web 어플리케이션 프레임워크

// express 설치
// npm i -g express-generator
// express [프로젝트명]
// cd [프로젝트명]
// expres 핵심파일 ./bin/www
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('connect-flash');
var session = require('express-session');

// app.js에서 미들웨어가 많아지면 코드가 너무길어져 유지보수에 좋지 않다.
// => 라우터로 분리
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// app.set()
// 익스프레스 설정 또는 값 저장하는 메서드
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use()
// 미들웨어 장착
// app.use 안의 req, res로 요청과 응답을 조작할 수 있다. next()를 호출하면 다음 미들웨어로 넘어간다.

// ex) 모든경우의 요청이들어왔을때 동작하는 미들웨어.
app.use((req, res, next) => {
  console.log('첫번째 미들웨어');
  next();
});
app.get((req, res, next) => {
  console.log('두번째 미들웨어');
  next();
});
// 라우팅 미들웨어 - get(), post(), patch, delete()
// ex) 해당url로 get요청이들어왔을때 동작하는 미들웨어
app.get((req, res) => {
  res.send('세번째 미들웨어');
});

// 유용한 미들웨어
// morgan - 요청과 응답 log를 출력해주는 미들웨어
// body-parser - req.on() , req.end() 를 대신해준다.
// express 4.1.6 이상버전에 추가되어 body-parser를 사용하지않아도되고 express를 그대로 사용하면된다.
// cookie-parser - 쿠키 사용 미들웨어
// express.static - 정적파일용 라우터 역할
// express-ssession -세션 사용 미들웨어
// connect-flash 일회성 메세지들을 표시해주는 미들웨어
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret conde'));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: 'secret code',
    cookie: {
      httpOnly: true,
      secure: false
    }
  })
);
app.use(flash());

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 404에러 처리하기
// express에서는 writeHead(404)대신 satus(404)를사용한다.
app.use(function(req, res, next) {
  res.status(404).send('NOT fOUND');
  // express http-errors 패키지사용
  // next(createError(404));
});

// 500에러 처리하기
// (500서버 에러)
app.use(function(err, req, res) {
  console.log(err);
  res.status(500).send('SERVER ERROR');
});

// express 500에러 처리
// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
