//Promise.allSettled([promise1, promise2, ...])

const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(new Error("Помилка"));
const promise3 = Promise.resolve(3);

Promise.allSettled([promise1, promise2, promise3]).then(results => {
  console.log(results);
});