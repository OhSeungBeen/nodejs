// cluster로 멀티 프로세싱 하기
// node는 싱글스레드 == CPU 코어 하나사용
// 사용되고있지 않는 코어들 사용하는 방법

const http = require('http');
const cluster = require('cluster');
const os = require('os');
//cpu 코어갯수
const numCPUs = os.cpus().length;

// cluster에는 master(관리자) 프로세스와
// work(일꾼) 프로세스가 있습니다.

//관리자인우
if (cluster.isMaster) {
  console.log('마스터 프로세스 아이디', process.pid);
  for (let i = 0; i < numCPUs; i++) {
    // cluster.fork() - work생성
    cluster.fork();
  }
  // worker가 종료된경우 다시생성
  cluster.on('exit', (worker, code, signal) => {
    console.log(worker.process.pid, '워커가 종료되었습니다.');
    cluster.fork();
  });
  //worker인경우
} else {
  http
    .createServer((req, res) => {
      res.end('http server');
      setTimeout(() => {
        process.exit(1);
      }, 1000);
    })
    .listen('8080', () => {});
  console.log(process.pid, '워커 실행');
}
