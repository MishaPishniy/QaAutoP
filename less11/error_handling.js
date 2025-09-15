async function risky() {
  try {
    await Promise.reject('Помилка');
  } catch (error) {
    console.log('Зловлено:', error);
  }
}
risky();
