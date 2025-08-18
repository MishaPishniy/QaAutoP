throw new Error("Повідомлення про помилку");


function checkAge(age) {
  if (age < 18) {
    throw new Error("Ви повинні бути старше 18!");
  }
  console.log("Доступ дозволено!");
}
checkAge(15);



/* try {
  // Код, який може викликати помилку
} catch (error) {
  // Код для обробки помилки
} */

  function checkAge(age,name) {
  if (age < 18) {
    throw new Error(`${name} Ви повинні бути старше 18!`);
  }
  console.log("Доступ дозволено!");
}

try {
  checkAge(15,"Mi");
} catch (error) {
  console.log("Помилка:", error.message);
}

/*
try {
  // Код, який може викликати помилку
} catch (error) {
  // Обробка помилки
} finally {
  // Код, який виконається завжди
} */

  try {
  let result = 10 / 0; // Помилка: ділення на нуль
  console.log(result);
} catch (error) {
  console.log("Помилка:", error.message);
} finally {
  console.log("Цей код виконається завжди!");
}


/*
Error: Загальна помилка.
TypeError: Помилка типу даних (наприклад, виклик не функції).
ReferenceError: Звернення до неіснуючої змінної.
RangeError: Значення поза допустимим діапазоном. */


try {
  let num = 10;
  console.log(undefinedVariable); // ReferenceError
} catch (error) {
  console.log("Тип помилки:", error.name); // ReferenceError
  console.log("Повідомлення:", error.message);
}

//Неправильна обробка винятків
throw new Error("Помилка!");
console.log("Цей код не виконається");


//Порожній catch
try {
  throw new Error("Щось пішло не так!");
} catch (error) {
}



