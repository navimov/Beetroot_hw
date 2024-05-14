//TASK1.Напиши всі можливі варіанти створення функцій.
function declaration
function showMethod() {
  alert(
    `"function functionName(){do something}" This is function declaration method to create function`
  );
}
function expression
let showMessage = function () {
  alert(
    `"let showMessage = function () {do something}" This is function expression method to create function`
  );
};
arrow functions
let arrowFunc = () => 2 * 2;
 anonymous function
(function (a, b) {
  return a + b;
});
//TASK2.Створи функцію, яка буде виводити кількість переданих їй аргументів.
function showNumberParams(name, age, eyeColor) {
  alert(`Функція приймає ${arguments.length} аргумент(и/ів)`);
}
showMethod();
showMessage();
showNumberParams("John", 15, "Brown");

/*TASK3.Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.*/
// // function cnumberCmparison(num1, num2) {
// //   alert(
// //     `Результат порівняння чисел ${num1} і ${num2} рівний ${
// //       num1 < num2 ? -1 : num1 > num2 ? 1 : 0
// //     }`
// //   );
// // }
// // cnumberCmparison(400, 200);

//TASK4.Напиши функцію, яка обчислює факторіал переданого їй числа.
function getFactorial(num) {
  let res = num;
  if (num < 3) {
    res = num;
  } else {
    for (let i = num; i > 2; i--) {
      res *= i - 1;
    }
  }
  alert(`Факторіал числа ${num} рівний ${res}`);
}
getFactorial(4);
// TASK5.Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
let concatNum = (num1, num2, num3) =>
  +alert(
    `Результатом об'єднання цифр ${num1}, ${num2}, ${num3} буде число ${String(
      num1
    )}${String(num2)}${String(num3)}`
  );
concatNum(1, 5, 8);

/*TASK6.Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/
function getSquare(a, b) {
    arguments[1] != undefined
      ?  alert(
        `Площа прямокутника розміром ${arguments[0]} x ${arguments[1]} рівна ${a*b}`
      )
      : alert(`Площа квадрата зі стороною ${arguments[0]} рівна ${Math.pow(arguments[0], 2)}`);

}
getSquare(10, 5);
