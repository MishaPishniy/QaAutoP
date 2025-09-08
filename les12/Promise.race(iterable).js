//Promise.race([promise1, promise2, ...])

const promise1 = new Promise(resolve => setTimeout(() => resolve("Один"), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Два"), 500));

Promise.race([promise1, promise2]).then(result => {
  console.log(result);
});