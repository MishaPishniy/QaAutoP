let arr = [1, 2, 3];
arr.forEach(function (num) {
  console.log(num * 2);
}); // 2, 4, 6

let doubled = arr.map((num) => num * 2); // [2, 4, 6]

let evens = arr.filter((num) => num % 2 === 0); // [2]
