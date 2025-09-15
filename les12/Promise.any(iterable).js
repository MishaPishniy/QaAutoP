//Promise.any([promise1, promise2, ...])

const promise1 = Promise.reject(new Error('Помилка 1'));
const promise2 = Promise.resolve('Успіх');
const promise3 = Promise.reject(new Error('Помилка 2'));

Promise.any([promise1, promise2, promise3]).then((result) => {
  console.log(result);
});
