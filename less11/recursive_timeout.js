function tick(count = 0) {
  setTimeout(() => {
    console.log(++count);
    if (count < 3) tick(count);
  }, 1000);
}
tick();