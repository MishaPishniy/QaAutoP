//Function Declaration
/* function ім'яФункції(параметр1, параметр2) {
  // Код, який виконує функція
  return результат; // Повертає результат (необов'язково)
} 
  
ім'яФункції(значення1, значення2); - виклик функції
*/

function sayHello(name = 'Guest') {
  console.log('Привіт, ' + name + '!');
}
sayHello();
sayHello('Оля'); // Виклик функції
sayHello('Іван');
/*
function addNumbers(a = 1, b = 1) {
  let sum = a + b;
  return sum; // Повертаємо результат
}

let result = addNumbers(); // Виклик функції
console.log('Сума:', result);

function sumNumber(age, ...number) {
  let total = 0;
  for (let num of number) {
    total += num;
  }
  return total;
}
console.log(sumNumber(1, 2, 3));
console.log(sumNumber(1, 2));

function greet() {
  console.log('Ласкаво просимо до JavaScript!');
}

greet(); // Виклик функції

function isAdult(age) {
  if (age >= 18) {
    return 'Ви повнолітній!';
  } else {
    return 'Ви ще не повнолітній.';
  }
}

console.log(isAdult(20)); // Виклик з віком 20
console.log(isAdult(15)); // Виклик з віком 15

function test() {
  return console.log('Це не виконається');
}
test(); // Привіт!

//Неправильний виклик функції:
function add(a, b) {
  return a + b;
}
console.log(add(5)); // NaN (b = undefined)

sayHello();
//Забули викликати функцію:
function sayHello() {
  console.log('Привіт!');
}
sayHello; // Нічого не станеться
// Привіт!

//  Function Expression
/*
const ім'яЗмінної = function(параметр1, параметр2) {
  // Код функції
  return результат;
};
*/
/*
const sayGoodbye = function (name) {
  return 'До побачення, ' + name + '!';
};

console.log(sayGoodbye('Іван'));

function isEven(number) {
  if (number % 2 === 0) {
    return 'Parne';
  } else {
    return 'Ne parne';
  }
}
let ivivod = isEven(4);
console.log(ivivod);

// Помилка: multiply is not defined
console.log(multiply(4, 5));

const multiply = function (a, b) {
  return a * b;
};

//Іменована Function Expression
const divide = function divideNumbers(a, b) {
  return a / b;
};
console.log(divide(10, 2));

//Виклик Function Expression до визначення:
greet(); // Помилка: greet is not a function
const greet = function () {
  console.log('Привіт!');
};

//Забули return у Function Expression:
const add = function (a, b) {
  a + b; // Помилка: функція нічого не повертає
};
console.log(add(2, 3)); // undefined

//Неправильне розуміння hoisting
console.log(myFunc); // undefined
var myFunc = function () {
  console.log('Це не спрацює до присвоєння!');
};

const myFunc = (parm1, parm2) => {
  //cod
  return parm1 + parm2;
};

const myFunc1 = (a, b) => a + b;
console.log(myFunc1(1, 2));

const myName = (name) => 'Hello' + name + '!';
console.log(myName('Misha'));
*/
