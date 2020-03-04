// __filename, __dirname, process

console.log(__filename); // 파일경로
console.log(__dirname); //파일이 있는 폴더 경로

// 데스크탑 프로그램을 node로 만들때 정보를얻고 자원들을 사용하기위해 process를 사용한다.
// console.log(process); 현재 실핼중인 노드 프로그램의 정보
console.log(process.version); // node version
console.log(process.arch); // x64
console.log(process.platform); // win32
console.log(process.pid);
console.log(process.uptime());
console.log(process.cwd()); //node 실행 위치
console.log(process.execPath); // node 설치 위치
// process.exit() node 종료 ex) error가 생겼을때 사용
