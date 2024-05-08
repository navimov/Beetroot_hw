/* TASK1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.*/
function isPerfectNumber(number) {
  let res = 0;
  for (let i = 1; i < number; i++) {
    res += number % i === 0 ? i : 0;
  }
  // alert(
  //   `Число ${number} ${number === res ? " є досконалим" : " не є досконалим"}`
  // );
  return number === res ? true : false;
}
isPerfectNumber(6);
/*TASK2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим. */
function showPerfectNums(num1, num2) {
  let result = "";
  for (let i = num1; i <= num2; i++) {
    if (isPerfectNumber(i)) {
      result = result + ", " + String(i);
    }
  }
  if (result) {
    alert(
      `В діапазоні чисел від ${num1} до ${num2} наступні(е) числа(о) є досконалим(и) ${result}`
    );
  } else {
    alert(
      `В діапазоні чисел від ${num1} до ${num2} не має жодного досконалого числа`
    );
  }
  return result;
}
showPerfectNums(1, 8);
