function ConstructorName(param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
}


function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const myCar = new Car("Toyota", "Camry");
console.log(myCar); // { brand: "Toyota", model: "Camry" }


function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Оля", 25);
const person2 = new Person("Іван", 30);

console.log(person1); // { name: "Оля", age: 25 }
console.log(person2); // { name: "Іван", age: 30 }


function Book(title) {
  this.title = title;
}

const book = new Book("JavaScript для початківців");
console.log(book.title); // JavaScript для початківців


const book = Book("JavaScript для початківців");
console.log(book); // undefined
console.log(window.title); // JavaScript для початківців (у браузері)


function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.introduce = function() {
    return "Я " + this.name + ", мій бал: " + this.grade;
  };
}

const student = new Student("Марія", 95);
console.log(student.introduce()); // Я Марія, мій бал: 95


const Car = (brand) => {
  this.brand = brand;
};

const myCar = new Car("BMW"); // TypeError: Car is not a constructor