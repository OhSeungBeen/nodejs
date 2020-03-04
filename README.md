# node-basic

## 1일(2020-03-02)

### node.js?

- Chrom V8 자바스크립트 엔진으로 웹브라우저 밖에서 자바스크립트를 실행하는 프로그램

### REPL ?

- Read, Evaluation, print, roop
- 사용자가 하나이상의 식을 입력하면 읽어서 평가하고 결과를 표시

### 호출스택 ?

- 자바스크립트 엔진은 하나의 호출스택을 사용
- 먼저들어온 함수블럭 부터 쌓이기시작하고, 나갈때는 마지막에 들어온 함수블럭 부터 빠져나가게된다 (LIFO 구조)

### 테스트큐와 이벤트 루프 ?

- 태스크 큐는 콜백 함수들이 대기하는 큐(FIFO구조) 형태의 배열이며, 이벤트 루프는 호출 스택이 비워질 때마다 큐에서 콜백 함수를 꺼내와서 실행하는 역할을 한다.

### ES6문법 실습

- const와 let
- 템플릿 문자열(백틱,`)
- 객체 리터럴의 변화
- 화살표 함수

## 2일(2020-03-03)

- 비구조화 할당(destructuring)
- rest 문법
- 콜백과 프로미스
- async, await
- 노드 모듈시스템 (exports, require)
- Node 내장객체 - global

## 3일(2020-03-04)

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
