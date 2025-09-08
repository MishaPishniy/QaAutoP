async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("Чекав 1 сек");
}
wait();