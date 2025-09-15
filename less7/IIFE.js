(function (параметри) {
  // Код функції
})(аргументи);

((параметри) => {
  // Код функції
})(аргументи);

(function () {
  console.log('Я виконуюсь одразу!');
})();

(function (name) {
  console.log('Привіт, ' + name + '!');
})('Оля');

(function () {
  let counter = 0;
  console.log(counter); // 0
})();
console.log(typeof counter); // undefined

const counter = (function () {
  let count = 0;
  return {
    increment: function () {
      count++;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
console.log(typeof count); // undefined

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

console.log(add(2, 3));

let total = 0;
function addToTotal(num) {
  total += num; // Змінює глобальну змінну
  return total;
}
console.log(addToTotal(5));
console.log(addToTotal(5));
console.log(addToTotal(1));

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

function sumRange(n) {
  if (n <= 2) return 0;
  return n + sumRange(n - 1);
}
console.log(sumRange(4));
