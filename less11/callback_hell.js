setTimeout(() => {
  console.log('Крок 1');
  setTimeout(() => console.log('Крок 2'), 1000);
}, 1000);
