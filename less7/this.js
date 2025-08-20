console.log(this);


function showThis() {
  console.log(this);
}

showThis(); // global (об’єкт global у Node.js)


"use strict";

function showThis() {
  console.log(this);
}

showThis(); // undefined


const person = {
  name: "Оля",
  greet: function() {
    console.log("Привіт, я " + this.name);
  }
};

const person2 = {
  name: "Толя",
  greet:person.greet
  }


person.greet(); // Привіт, я Оля
person2.greet()


const person = {
  name: "Іван",
  greet: function() {
    console.log(this.name);
  }
};

const func = person.greet;
func(); // undefined (у строгому режимі) або global.name (у нестрогому)


const func = person.greet.bind(person);
func(); // Іван

function showName() {
  console.log(this.name);
}

const person = { name: "Оля" };
const boundFunc = showName.bind(person);
boundFunc(); // Оля

function introduce(age) {
  console.log("Мене звати " + this.name + ", мені " + age + " років.");
}

const person = { name: "Марія" };
introduce.call(person, 25); // Мене звати Марія, мені 25 років.


const person = {
  name: "Іван",
  greet: function() {
    setTimeout(function() {
      console.log(this.name);
    }, 1000);
  }
};

person.greet(); // undefined (this = global у нестрогому режимі)

const person = {
  name: "Іван",
  greet: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

person.greet(); // Іван

const person = {
  name: "Іван",
  greet: function() {
    setTimeout(function() {
      console.log(this.name);
    }.bind(this), 1000);
  }
};

person.greet(); // Іван





function sayName() {
  console.log(this.name);
}

const person = { name: "Оля" };
const boundFunc = sayName.bind(person);

boundFunc();


function sayName() {
  console.log(this.name);
}

const person = { 
    name: "Оля", 
    sayName
};

person.sayName()


function sayName(ctx) {
  console.log(ctx.name);
}

const person = { name: "Оля" };

const boundFunc = () => sayName(person)
boundFunc();



function drive (){
    console.log(this.brand + "ми їдемо")
}

const car1  = {brand : "Land rover" , drive: drive}
const car2  = { brand : "BMW" , drive: drive}

car1.drive()
car2.drive()