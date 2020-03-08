## 📂node-basic
### ✏️1일(2020-03-02)

node.js?

- Chrom V8 자바스크립트 엔진으로 웹브라우저 밖에서 자바스크립트를 실행하는 프로그램

REPL ?

- Read, Evaluation, print, roop
- 사용자가 하나이상의 식을 입력하면 읽어서 평가하고 결과를 표시

호출스택 ?

- 자바스크립트 엔진은 하나의 호출스택을 사용
- 먼저들어온 함수블럭 부터 쌓이기시작하고, 나갈때는 마지막에 들어온 함수블럭 부터 빠져나가게된다 (LIFO 구조)

테스트큐와 이벤트 루프 ?

- 태스크 큐는 콜백 함수들이 대기하는 큐(FIFO구조) 형태의 배열이며, 이벤트 루프는 호출 스택이 비워질 때마다 큐에서 콜백 함수를 꺼내와서 실행하는 역할을 한다.

ES6문법 실습

- const와 let
- 템플릿 문자열(백틱,`)
- 객체 리터럴의 변화
- 화살표 함수

### ✏️2일(2020-03-03)

- 비구조화 할당(destructuring)
- rest 문법
- 콜백과 프로미스
- async, await
- 노드 모듈시스템 (exports, require)
- Node 내장객체 - global

### ✏️3일(2020-03-04)

- node내장객체 - console 객체
- Node내장객체 - setTimeout, setInterval, setImmediate, clearTimeout, clearInterval, clearImmediate
- __filename, __dirname, process
- 내장모듈 - os
- 내장모듈 - path
- 내장모듈 - url
- 내장모듈 - querystring
- 내장모듈 - crypo 단방향 암호화(해시)
- 내장모듈 - crypo 양방향 암호화
- 내장모듈 - util(deprecated, promisfiy)
- 내장모듈 - fs (동기,비동기 방식)
- 버퍼와 스트림 - readstream, writestream, pipe, copyFile
- 내장모듈 - fs (acess, mkdir, open, rename,readdir, unlik, rmdir)
- 내장모듈 - event
- 예왜처리 - try catch
## 📂node-http, 📂npm-package
### ✏️4일(2020-03-05)
- http모듈 - localhost, port
- http모듈 - 응답으로 파일 읽어 보내기
- http모듈 - 쿠키 설정하기, req.url
- http모듈 - 라우터 분기 처리와 쿠키
- http모듈 - 메모리 세션 구현해보기
- REST API 구현하기
- cluster로 멀티 프로세싱 하기

npm(node package manager) ?

-  Node.js로 만들어진 pakage(module)을 관리해주는 툴

SemVer 버전 ?

- 버전의 형식은 [Major].[Minor].[Patch] 형식
- 이전 버전과 호환되지 않는 API 변경은 Major 버전 증가
- 이전 버전과 호환되면서 기능의 변경, 추가된 경우는 Minor 버전 증가
- 버그 수정은 Patch 버전 증가
- ^[Major].[Minor].[Patch]  - Minor, Patch 업데이트
- ~[Major].[Minor].[Patch]  - Patch 업데이트
- 부등호[Major].[Minor].[Patch] - 말그대로 부등호를 의미 ex)"node": ">=10.3.2"는 10.3.2버전과 같거나 그이상버전

npm 명령어
- npm i(install) [패키지명]@x.x.x  - 버전을 직접 입력하여 다운로드
- npm outdated 최신업데이트 정보를 알려준다.
- npm update [패키지명] - 하나의 패키지만 업데이트
- npm update - 모든 패키지 업데이트
- npm rm(remove) [패키지명] - 패키지 삭제
- npm search [패키지명] - 패키지 검색
- npm ls [패키지명] - 패키지 추적
- npm version x.x.x - 패키지 버전설정
- npm version [patch || minor || major] - patch || minor || major 한버전씩올리기

npm 패키지 배포하기
- npm adduser - npm 로그인
- npm publish - 배포
- npm info [패키지명] - 배포한 패키지 확인하기
- npm unpublish [패키지명] --force - 배포한 패키지 지우기 (24시간안에 패키지를 삭제해야 가능)

## 📂node-express
### ✏️5일(2020-03-07)
- express 설치 및 구조 이해하기
- 미들웨어 이해하기
- 라우팅 미들웨어
- 404에러, 500에러 처리 미들웨어 
- 템플릿엔진 pug 문법
- 템플릿엔진 ejs 문법

## 📂node-mongoose
### ✏️6일(2020-03-08)
- MongoDB 설치, 프로젝트 세팅(mongoose 설치등)
- Mongoose 스키마 만들기
- Mongoose 쿼리 작성하기
- Mongoose populate() 사용하기
