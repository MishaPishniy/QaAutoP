/* const ім'я = (параметр1, параметр2) => вираз; // Для одного виразу
const ім'я = (параметр1, параметр2) => { // Для кількох виразів
  // Код
  return результат;
}; */

const person = {
  name: 'Оля',
  greet: function () {
    setTimeout(() => {
      console.log('Привіт, я ' + this.name);
    }, 1000);
  },
};

person.greet();

const person = {
  name: 'Оля',
  greet: () => {
    console.log('Привіт, я ' + this.name);
  },
};

person.greet();

/* function ConstructorName(param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
}*/

function car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const myCar = new car('Bmw', 'x5');
const myCar2 = new car('Bmw', 'x6');
console.log(myCar);
console.log(myCar2);
