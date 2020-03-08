// mongodb 계정생성
// 명령프롬프트에서 mongo
// use admin
// db.createUser({ user: '이름', pwd: '비밀번호', roles: ['root'] })

// express mongodb 연동
const mongoose = require('mongoose');

// 'mongodb://아이디:비밀번호@localhost:포트번호/admin', {dbName: '사용 할 데이터베이스이름'}
// admin데이터베이스에있는 유저로 로그인한다.
module.exports = () => {
  //mongoDB 연결 메서드
  const connect = () => {
    // 배포 상황이아니고 개발상황일때
    // monggose를 디버그모드로 설정
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }
    mongoose.connect(
      'mongodb://root:nodejsbook@localhost:27017/admin',
      {
        dbName: 'nodejs'
      },
      error => {
        if (error) {
          console.log('mongoDB 연결 에러');
        } else {
          console.log('mongoDB 연결 성공');
        }
      }
    );
  };

  //mongoDB 연결
  connect();

  //mongoDB 이벤트 리스너 추가

  //mongoDB 에러 났을때 에러 로깅
  mongoose.connection.on('error', error => {
    consoel.error('mongoDB 연결 에러', error);
  });
  //mongoDB 연결이 끊어졌을때 에러 로깅 , 재연결
  mongoose.connection.on('disconnected', error => {
    console.erro('mongoDB 연결이 끊겼습니다. 연결을 재시도합니다.');
    //mongoDB 연결
    connect();
  });

  // 스키마 불러오기
  require('./user');
  require('./comment');
};
