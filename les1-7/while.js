/* while (умова) {
  // код, який виконується, доки умова істинна
} */

  let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let num = 1;
while (num <= 100) {
  num *= 2;
}
console.log("Число:", num);


//Нескінченний цикл:
while (true) {
  console.log("Це ніколи не зупиниться!");
}


//Пропуск оновлення лічильника:
let i = 1;
while (i <= 5) {
  console.log(i);
  // Забули i++ — цикл буде нескінченним!
}

//Факторіал 5!

let f = 1

for (let i=1; i<=5; i++){
  f *=i
}
console.log(f)