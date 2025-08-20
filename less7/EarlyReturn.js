function checkAge(age) {
  if (age >= 18) {
    if (age < 100) {
      return 'Дорослий';
    } else {
      return 'Занадто старий';
    }
  } else {
    return 'Дитина';
  }
}
console.log(checkAge(101))


function checkAge(age) {
  if (age < 18) return 'Дитина'; // Раннє повернення
  if (age >= 100) return 'Занадто старий'; // Раннє повернення
  return 'Дорослий'; // Основний випадок
}
console.log(checkAge(17))