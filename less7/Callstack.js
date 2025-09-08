function greet() {
  console.log('Привіт');
}

function sayHello() {
  greet(); // Додає greet в стек
}

sayHello(); // Додає sayHello в стек
// Стек: sayHello -> greet
// Після greet стек: sayHello
// Після sayHello стек порожній

let stack = [];
stack.push('Тарілка 1'); // [ 'Тарілка 1' ]
stack.push('Тарілка 2'); // [ 'Тарілка 1', 'Тарілка 2' ]
console.log(stack.pop()); // 'Тарілка 2'
console.log(stack); // [ 'Тарілка 1' ]

function infinite() {
  infinite(); // Нескінченна рекурсія
}
// infinite(); // Помилка: Maximum call stack size exceeded
