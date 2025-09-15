let num = 76;
if (num <= 59) {
  console.log('Не здав');
} else if (num === 60) {
  console.log('C');
} else if (num > 60 && num < 76) {
  console.log('B');
} else if (num > 75 && num < 91) {
  console.log('A');
} else if (num > 90 && num < 101) {
  console.log('A+');
}
console.log('Pomilka');

switch (true) {
  case num > 75 && num < 91:
    console.log('A');
    break;
  case num <= 59:
    console.log('Не здав');
    break;
  case num === 60:
    console.log('C');
    break;
  case num > 60 && num < 76:
    console.log('B');
    break;
  case num > 90 && num < 101:
    console.log('A+');
    break;

  default:
    console.log('Pomilka');
}
