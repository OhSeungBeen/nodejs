// REST API
// 주소와 자원을 표현하고 http메서드를 사용하는법
// 자원은 명사형이어야 한다등의 규칙이 있다..

// REST API 요청 예시
// GET(메서드)/users(자원)
// DELETE(메서드)/users/5(자원)
// HTTP method - GET, POST, PUT, PATCH, DELETE

// GET www.seungbeen.com/users/4 user 4 가져온다
// POST www.seungbeen.com/users user 등록하다
// PUT www.seungbeen.com/users/1 user 1 전체 수정, 통째로 대체
// PATCH www.seungbeen.com/users/2 user 2 부분 수정
// DELETE www.seungbeen.com/users/5 user 5삭제

function getUser() {
  // 로딩 시 사용자 가져오는 함수
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status === 200) {
      var users = JSON.parse(xhr.responseText);
      var list = document.getElementById('list');
      list.innerHTML = '';
      Object.keys(users).map(function(key) {
        var userDiv = document.createElement('div');
        var span = document.createElement('span');
        span.textContent = users[key];
        var edit = document.createElement('button');
        edit.textContent = '수정';
        edit.addEventListener('click', function() {
          // 수정 버튼 클릭
          var name = prompt('바꿀 이름을 입력하세요');
          if (!name) {
            return alert('이름을 반드시 입력하셔야 합니다');
          }
          var xhr = new XMLHttpRequest();
          xhr.onload = function() {
            if (xhr.status === 200) {
              console.log(xhr.responseText);
              getUser();
            } else {
              console.error(xhr.responseText);
            }
          };
          xhr.open('PUT', '/users/' + key);
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.send(JSON.stringify({ name: name }));
        });
        var remove = document.createElement('button');
        remove.textContent = '삭제';
        remove.addEventListener('click', function() {
          // 삭제 버튼 클릭
          var xhr = new XMLHttpRequest();
          xhr.onload = function() {
            if (xhr.status === 200) {
              console.log(xhr.responseText);
              getUser();
            } else {
              console.error(xhr.responseText);
            }
          };
          xhr.open('DELETE', '/users/' + key);
          xhr.send();
        });
        userDiv.appendChild(span);
        userDiv.appendChild(edit);
        userDiv.appendChild(remove);
        list.appendChild(userDiv);
      });
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open('GET', '/users');
  xhr.send();
}

window.onload = getUser; // 로딩 시 getUser 호출
// 폼 제출
document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var name = e.target.username.value;
  if (!name) {
    return alert('이름을 입력하세요');
  }
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    if (xhr.status === 201) {
      console.log(xhr.responseText);
      getUser();
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open('POST', '/users');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ name: name }));
  e.target.username.value = '';
});
