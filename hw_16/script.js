let radius = prompt("Введіть радіус кола");
const PI = 3.14;
alert(`Площа кола з радіусом ${radius} дорівнює ${PI * radius ** 2}`);
/*курс валют*/
const euroToDollar = 1.2;
let dollars = prompt("Введіть суму в доларах");
console.log(
  `За ${dollars} доларів Ви можете придбати ${dollars / euroToDollar} євро`
);
let distance = prompt("Введіть відстань між містами");
let time = prompt("Введіть тривалість подорожі");
alert(`Вам потрібно рухатись зі швидкістю ${distance / time} км/год`);
