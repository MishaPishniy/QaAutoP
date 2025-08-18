for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    continue; // Пропускаємо парні числа
  }
  console.log(i);
}

let i = 0;
do {
  i++;
  if (i % 2 === 0) {
    continue; // Пропускаємо парні числа
  }
  console.log(i);
} while (i <5);


//Нескінченний цикл у do...while
let i = 1;
do {
  console.log(i);
  // Забули i++ — цикл нескінченний!
} while (i <= 5);

