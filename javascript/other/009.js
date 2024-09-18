function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const result = new Array(promises.length);
    let succeed = 0;

    promises.forEach((promise, idx) => {
      promise
        .then((res) => {
          result[idx] = res;
          succeed++;

          if (succeed === promises.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

promiseAll([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
  new Promise((resolve, reject) => setTimeout(resolve(4), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => {
      reject('Ooops');
    }, 2000)
  ),
  Promise.resolve(5),
])
  .then((res) => {
    console.log(res); // [1, 2, 3, 4, 5]
  })
  .catch((err) => {
    console.log('---------', 'rejected', '------------');
    console.log(err);
  });
