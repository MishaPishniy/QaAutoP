let globalVar = 'Я глобальна'; // Глобальна область

function myFunction() {
  let localVar = 'Я локальна'; // Функціональна область
  console.log(globalVar); // Працює, бо глобальна
  console.log(localVar); // Працює тут
}

myFunction();
console.log(globalVar); // Працює
//console.log(localVar); // Помилка! Не доступна поза функцією

function addNumbers(a, b) {
  let sum = a + b; // Локальна змінна
  return sum;
}

console.log(addNumbers(2, 3)); // 5
// console.log(sum); // Помилка! sum не існує поза функцією

let external = 'Зовнішня';

function showExternal() {
  console.log(external); // Працює, бо читає ззовні
  let internal = 'Внутрішня';
}

showExternal();
// console.log(internal); // Помилка! Не доступна ззовні
