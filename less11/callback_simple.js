function orderPizza(callback) {
  console.log('Замовляю піцу');
  callback('Піца готова!');
}

orderPizza((message) => {
  console.log(message);
});
