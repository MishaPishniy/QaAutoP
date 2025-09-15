Promise.race([Promise.resolve('Швидкий'), Promise.resolve('Повільний')]).then(
  console.log,
);
