//TASK1.Напиши всі можливі варіанти створення функцій.
//function declaration
function showMethod() {
  alert(
    `"function functionName(){do something}" This is function declaration method to create function`
  );
}
//function expression
let showMessage = function () {
  alert(
    `"let showMessage = function () {do something}" This is function expression method to create function`
  );
};
//arrow functions
let arrowFunc = () => 2 * 2;
//anonymous function
(function (a, b) {
  return a + b;
});
//TASK2.Створи функцію, яка буде виводити кількість переданих їй аргументів.
function showNumberParams(name, age, eyeColor) {
  return arguments.length;
}
showMethod();
showMessage();
console.log(showNumberParams("John", 15, "Brown"));

/*TASK3.Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні.*/
function numberCmparison(num1, num2) {
  return num1 < num2 ? -1 : num1 > num2 ? 1 : 0;
}
let num1 = +prompt("Введіть перше число");
let num2 = +prompt("Введіть друге число");
console.log("Результат порівняння чисел рівний " + numberCmparison(num1, num2));

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
  return res;
}
//ще один варіант рішення за допомогою рекурсії
function getRecursFactorial(num) {
  let res = num;
  if (num < 3) {
    res = num;
  } else {
    res = num * getRecursFactorial(num - 1);
  }
  return res;
}
let num = +prompt("Введіть число для обчислення факторіалу");
alert(`Факторіал числа ${num} рівний ${getFactorial(num)}`);
alert(`Рекурсивний метод. Факторіал ${num} рівний ${getRecursFactorial(num)}`);
// TASK5.Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
let concatNum = (num1, num2, num3) =>
  String(num1) + String(num2) + String(num3);
console.log(
  "Результат об'єднання цифр 1, 4, 9 буде число " + concatNum(1, 4, 9)
);

/*TASK6.Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.*/
function getSquare(a, b) {
  return b
    ? alert(`Площа прямокутника зі сторонами ${a} i ${b} рівна ${a * b}`)
    : alert(`Площа квадрата зі стороною ${a} рівна ${a * a}`);
}
console.log(getSquare(10, 5));
