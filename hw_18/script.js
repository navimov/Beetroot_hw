////////////////////////////////Level MINIMUM
/*TASK 1 */
// let age;
// while (true) {
//   age = prompt("Введіть свій вік", 0);
//   if (age === null) {
//     alert("Вам необхідно ввести свій вік");
//   } else if (
//     isNaN(+age) ||
//     age.length != String(+age).length ||
//     Math.floor(+age) !== +age
//   ) {
//     alert("Введіть коректні дані");
//   } else {
//     break;
//   }
// }
// if (age < 12) {
//   alert("Дитина");
// } else if (11 < age && age < 18) {
//   alert("Підліток");
// } else if (17 < age && age < 60) {
//   alert("Дорослий");
// } else {
//   alert("Пенсіонер");
// }
/*TASK 2 */
// let num;
// stopLoop: while (true) {
//   num = prompt("Введіть будь яку цифру від 0 до 9", 0);
//   if (num === null) {
//     alert("Введіть цифру від 0 до 9");
//   } else if (isNaN(+num) || num.length > 1) {
//     alert("Некоректний ввід, спробуйте ще раз");
//   } else {
//     switch (+num) {
//       case 0:
//         alert(")");
//         break stopLoop;
//       case 1:
//         alert("!");
//         break stopLoop;
//       case 2:
//         alert("@");
//         break stopLoop;
//       case 3:
//         alert("#");
//         break stopLoop;
//       case 4:
//         alert("$");
//         break stopLoop;
//       case 5:
//         alert("%");
//         break stopLoop;
//       case 6:
//         alert("^");
//         break stopLoop;
//       case 7:
//         alert("&");
//         break stopLoop;
//       case 8:
//         alert("*");
//         break stopLoop;
//       case 9:
//         alert("(");
//         break stopLoop;
//     }
//   }
// }
/*TASK 3 */
let minNum,
  maxNum,
  sum = 0;
exitLoop: while (true) {
  minNum = prompt("Введіть мінімальне ціле число діапазону", 0);
  if (minNum === null) {
    alert("Некоректне введення, спробуйте ще раз");
  } else if (
    isNaN(+minNum) ||
    minNum.length != String(+minNum).length ||
    Math.floor(+minNum) !== +minNum
  ) {
    alert("Некоректне введення, спробуйте ще раз");
  } else {
    while (true) {
      maxNum = prompt("Введіть максимальне ціле число діапазону", 0);
      if (maxNum === null) {
        alert("Некоректне введення, спробуйте ще раз");
      } else if (
        isNaN(+maxNum) ||
        maxNum.length != String(+maxNum).length ||
        Math.floor(+maxNum) !== +maxNum ||
        +minNum >= +maxNum
      ) {
        alert("Некоректне введення, спробуйте ще раз");
      } else {
        for (let i = +minNum; i <= +maxNum; i++) {
          sum += i;
        }
        break exitLoop;
      }
    }
  }
}

alert(sum);
