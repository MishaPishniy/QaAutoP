let x = 42;
x = 'Hello';
console.log(typeof x);
let num = 123;
console.log(num - '5');
console.log('5' - num);
console.log(num - Number('5'));
console.log(Number('abc'));
console.log(Number('5.144'));
console.log(num + 5);
console.log(String(num));
console.log('hello' + String(num) + 'world');
console.log('5' + num + '5');
console.log(typeof num);

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean('HI'));

let name = '1';
if (!name) {
  console.log("Ім'я не введено");
}
console.log("Ім'я  введено");

console.log(+'667' === 5);

console.log(Number.isNaN(+'nfsfs'));
console.log(isNaN('ssfsf'));
console.log(isNaN('123'));

console.log(!!0);
console.log(!!'Hello');

console.log('1' + 1);
console.log('1' - 1);
console.log(5 < 3);
console.log(5 > 3);
console.log(Boolean(5 > 3));
