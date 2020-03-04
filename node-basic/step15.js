// 내장모듈 - os

const os = require('os');
console.log(os);
console.log(os.arch()); // ex) x64
console.log(os.platform()); // ex) win32
console.log(os.type()); // ex) Windows_NT
console.log(os.uptime()); // 운영체제가 시작되고나서 흐른 시간
console.log(os.hostname()); // 컴퓨터 이름
console.log(os.release()); // os버전
console.log(os.homedir()); // os home 디렉토리
console.log(os.tmpdir()); // temp 디렉토리
console.log(os.freemem()); // 사용가능 메모리
console.log(os.totalmem()); // 전체 메모리
console.log(os.cpus()); // cpu 정보
