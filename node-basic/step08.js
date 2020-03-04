// 프로미스(promise)
// 결과값을 가지고 있지만 .then이나 .catch를 붙이기전까지는 반환하지 않는다.
console.log(Promise);

//promise 정의하기
const pluse = new Promise((resolve, reject) => {
  const a = 1;
  const b = 2;
  if (a + b > 2) {
    resolve(a + b);
  } else {
    reject(a + b);
  }
});

//resolve ==> then , reject ==> catch
pluse
  .then(success => {
    console.log(success);
  })
  .catch(fail => {
    console.log(fail);
  });

// then 이어붙이기
const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
  } else {
    reject('실패');
  }
});
promise
  .then(messege1 => {
    return new Promise((res, rej) => {
      res(messege1);
    });
  })
  .then(messege2 => {
    console.log(messege2);
    return new Promise((res, rej) => {
      rej(messege2);
    });
  })
  .then(messege3 => {
    return new Promise((res, rej) => {
      console.log(messege3);
    });
  })
  .catch(error => {
    console.error('error');
  });

//무조건 성공하거나 실패하는 promise는 줄일수있다.
const successPromise = Promise.resolve('성공');
const fialurePromise = Promise.reject('실패');

//promise 여러개를 모아서 한번에 실행 할 수 있다.
//하나가 실패할경우 모든promise가 catch
Promise.all([promise(), pluse()])
  .then(result => {})
  .catch(err => {});
