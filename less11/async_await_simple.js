async function example() {
  console.log('Початок');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('Кінець');
}
example();
