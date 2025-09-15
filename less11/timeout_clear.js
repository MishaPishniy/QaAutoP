const id = setTimeout(() => console.log('Час минув!'), 3000);
//clearTimeout(id);
const shouldCancel = true;
if (shouldCancel) {
  clearTimeout(id);
}
console.log('Скасовано');
