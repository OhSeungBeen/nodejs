#nodejs-study

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
