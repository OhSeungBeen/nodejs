// 내장모듈 - fs (readdir, unlik, rmdir)
// 폴더 내용 확인, 파일 삭제, 폴더 삭제

const fs = require('fs');

// 폴더 내용 확인
fs.readdir('./folder', (err, dir) => {
  if (err) {
    throw err;
  }
  console.log('폴더 내용 확인', dir);
  //파일 삭제
  fs.unlink('./folder/newFile.js', err => {
    if (err) {
      throw err;
    }
    console.log('파일 삭제 성공');
    //폴더 삭제
    fs.rmdir('./folder', err => {
      if (err) {
        throw err;
      }
      console.log('폴더 삭제 성공');
    });
  });
});
