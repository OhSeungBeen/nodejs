// 내장모듈 - fs (acess, mkdir, open, rename)
// 폴더 존재확인, 폴더생성, 파일열기, 파일이름 바꾸기

const fs = require('fs');

// acess('파일경로', 권한)
// 권한 F_OK(존재 여부), R_OK(읽기 여부), W_OK(쓰기 여부)
fs.access(
  './folder',
  fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK,
  //하나라도 만족하지않으면 error
  err => {
    if (err) {
      //폴더가 없으면 code가 ENOENT
      if (err.code === 'ENOENT') {
        console.log('폴더 없음');
        // 폴더만들기 mkdir
        fs.mkdir('./folder', err => {
          if (err) {
            throw err;
          }
          console.log('폴더 만들기 성공');
          // 파일을 연다 => 없으면 만든다 W, 읽는다 R
          fs.open('./folder/file.js', 'w', (err, fd) => {
            if (err) {
              throw err;
            }
            console.log('빈 파일 만들기 성공', fd);
            // 파일 이름 바꾸기 rename
            fs.rename('./folder/file.js', './folder/newfile.js', err => {
              if (err) {
                throw err;
              }
              console.log('이름 바꾸기 성공');
            });
          });
        });
      } else {
        throw err;
      }
    } else {
      console.log('이미 폴더 있음');
    }
  }
);
