//npm - node package manager(노드 패키지 관리자)

// 노드패키지 - 다른 사람이 만든 모듈

// 패키지생성 - 해당폴더에서 npm init 명령어 입력

// package.json - 패키지의 설명서

// 패키지다운로드 - npm -install [패키지명]
// 개발환경에서만쓸 패키지다운로드 - npm install -D [패키지명]
// 명령프롬프트에서 명령어로 쓸수있도록 설치 npm i --g [패키지명]

// package-lock.json - 내가다운로드한 패키지가 사용하고있는 패키지들 목록들

// SemVer 버전 - x.x.x 메이저버전.마이너버전.패치버전
// patch 버그수정
// minor 신기능 추가
// major 대규모 변화(고장 확률이 있다)
// ^(minor, patch 업데이트)
// ~(patch 업데이트)
// = 말그대로 부등호의 의미
// ex) "node": ">=10.3.2" 10.3.2버전과 같거나 그이상버전

// npm 명령어
// npm i(install) [패키지명]@x.x.x  - 버전을 직접 입력하여 다운로드
// npm outdated 최신업데이트 정보를 알려준다.
// npm update [패키지명] - 하나의 패키지만 업데이트
// npm update - 모든 패키지 업데이트
// npm rm(remove) [패키지명] - 패키지 삭제
// npm search [패키지명] - 패키지 검색
// npm ls [패키지명] - 패키지 추적
// npm version x.x.x 패키지 버전설정
// npm version [patch || minor || major] - patch || minor || major 한버전씩올리기
