function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (завжди той самий результат)



let total = 0;
function addToTotal(num) {
  total += num; // Змінює глобальну змінну
  return total;
}

console.log(addToTotal(5)); // 5
console.log(addToTotal(5)); // 10 (результат залежить від стану)