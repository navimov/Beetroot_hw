////////////////////////////////Level MINIMUM
/*TASK 1 */
let age;
while (true) {
  age = prompt("Введіть свій вік", 0);
  if (age === null) {
    alert("Вам необхідно ввести свій вік");
  } else if (
    isNaN(+age) ||
    age.length != String(+age).length ||
    Math.floor(+age) !== +age
  ) {
    alert("Введіть коректні дані");
  } else {
    break;
  }
}
if (age < 12) {
  alert("Дитина");
} else if (11 < age && age < 18) {
  alert("Підліток");
} else if (17 < age && age < 60) {
  alert("Дорослий");
} else {
  alert("Пенсіонер");
}
/*TASK 2 */
let num;
stopLoop: while (true) {
  num = prompt("Введіть будь яку цифру від 0 до 9", 0);
  if (num === null) {
    alert("Введіть цифру від 0 до 9");
  } else if (isNaN(+num) || num.length > 1) {
    alert("Некоректний ввід, спробуйте ще раз");
  } else {
    switch (+num) {
      case 0:
        alert(")");
        break stopLoop;
      case 1:
        alert("!");
        break stopLoop;
      case 2:
        alert("@");
        break stopLoop;
      case 3:
        alert("#");
        break stopLoop;
      case 4:
        alert("$");
        break stopLoop;
      case 5:
        alert("%");
        break stopLoop;
      case 6:
        alert("^");
        break stopLoop;
      case 7:
        alert("&");
        break stopLoop;
      case 8:
        alert("*");
        break stopLoop;
      case 9:
        alert("(");
        break stopLoop;
    }
  }
}
/*TASK 3 */
let minNum,
  maxNum,
  sum = 0;
exitLoop: while (true) {
  minNum = prompt("Введіть мінімальне ціле число діапазону", 0);
  if (
    minNum === null ||
    isNaN(+minNum) ||
    Math.floor(+minNum) !== +minNum ||
    +minNum < 0
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

alert(`Сума всіх цілих чисел від ${minNum} до ${maxNum} рівна ${sum}`);
/*TASK 4 */
let num1, num2, divisor;
exitPoint: while (true) {
  num1 = prompt("Введіть ціле число більше 0", 0);
  if (
    num1 === null ||
    isNaN(+num1) ||
    num1.length != String(+num1).length ||
    Math.floor(+num1) !== +num1 ||
    +num1 < 1
  ) {
    alert("Некоректне введення, спробуйте ще раз");
  } else {
    while (true) {
      num2 = prompt(
        "Введіть ціле число, яке більше 0 та не дорівнює першому числу",
        0
      );
      if (num2 === null) {
        alert("Некоректне введення, спробуйте ще раз");
      } else if (
        isNaN(+num2) ||
        num2.length != String(+num2).length ||
        Math.floor(+num2) !== +num2 ||
        +num2 <= +num1
      ) {
        alert("Некоректне введення, спробуйте ще раз");
      } else {
        let smaller;
        if (num1 < num2) {
          smaller = num1;
        } else {
          smaller = num2;
        }
        for (let i = smaller; i > 0; i--) {
          if (num1 % i === 0 && num2 % i === 0) {
            divisor = i;
            break exitPoint;
          }
        }
      }
    }
  }
}
alert(
  `Найбільший спільний дільник чисел ${num1} та ${num2} дорівнює ${divisor}`
);
/*TASK 5 */
let numb;
let answer = "1";
finish: while (true) {
  numb = prompt("Введіть ціле число більше 0", 0);
  if (
    numb === null ||
    isNaN(+numb) ||
    numb.length != String(+numb).length ||
    Math.floor(+numb) !== +numb
  ) {
    alert("Некоректне введення, спробуйте ще раз");
  } else {
    for (let i = 2; i <= numb; i++) {
      if (numb % i == 0) {
        answer = answer + ", " + i;
      }
    }
    break finish;
  }
}
alert("Число " + numb + " має наступні дільники: " + answer);
////////////////////////////////Level NORMA
/*TASK 1 */
while (true) {
  let fiveCyberNum = prompt("Введіть п'ятирозрядне число більше 0", 0);
  if (
    fiveCyberNum === null ||
    isNaN(+fiveCyberNum) ||
    fiveCyberNum.length != String(+fiveCyberNum).length ||
    Math.floor(+fiveCyberNum) !== +fiveCyberNum ||
    fiveCyberNum.length != 5
  ) {
    alert("Некоректне введення, спробуйте ще раз");
  } else {
    if (
      fiveCyberNum[0] === fiveCyberNum[4] &&
      fiveCyberNum[1] === fiveCyberNum[3]
    ) {
      alert(`Число ${fiveCyberNum} є паліндромом`);
    } else {
      alert(`Число ${fiveCyberNum} не є паліндромом`);
    }
    break;
  }
}
/*TASK 2 */
stopPrise: while (true) {
  let genPrise = prompt("Введіть загальну суму товарів", 0);
  if (
    genPrise === null ||
    isNaN(+genPrise) ||
    genPrise.length != String(+genPrise).length ||
    Math.floor(+genPrise) !== +genPrise ||
    +genPrise < 0
  ) {
    alert("Некоректне введення, спробуйте ще раз");
  } else {
    if (genPrise < 200) {
      alert(`Загальна сума товарів складає ${genPrise}`);
      break stopPrise;
    } else if (200 <= genPrise && genPrise < 300) {
      alert(
        `Загальна сума товарів зі знижкою 3% складає ${
          genPrise - (genPrise / 100) * 3
        }`
      );
      break stopPrise;
    } else if (300 <= genPrise && genPrise < 500) {
      alert(
        `Загальна сума товарів зі знижкою 5% складає ${
          genPrise - (genPrise / 100) * 5
        }`
      );
      break stopPrise;
    } else {
      alert(
        `Загальна сума товарів зі знижкою 7% складає ${
          genPrise - (genPrise / 100) * 7
        }`
      );
      break stopPrise;
    }
  }
}
/*TASK 3 */
let negativeNums = 0,
  positiveNums = 0,
  zeroNums = 0,
  evenNums = 0,
  currentNum,
  OddNums = 0;
for (let i = 0; i < 10; i++) {
  currentNum = prompt("Введіть число", 0);
  if (currentNum === null || isNaN(+currentNum)) {
    alert("Некоректне введення, спробуйте ще раз");
  } else {
    if (+currentNum < 0) {
      negativeNums++;
    }
    if (+currentNum === 0) {
      zeroNums++;
    }
    if (+currentNum > 0) {
      positiveNums++;
    }
    if (+currentNum % 2 === 0 && +currentNum != 0) {
      evenNums++;
    }
    if (+currentNum % 2 != 0) {
      OddNums++;
    }
  }
}
alert(
  `Користувач ввів ${negativeNums} чисел(ло) менше 0, ${positiveNums} чисел(ло) бульше 0, ${zeroNums} чисел(ло) рівних 0, ${evenNums} парних чисел(ло) та ${OddNums} не парних`
);
/*TASK 4 */
let weekDays = "Понеділок Вівторок Середа Четвер П'ятниця Субота Неділя ";
let isAgree,
  temp = "";
for (let i = 0; i < weekDays.length; i++) {
  if (weekDays[i] != " ") {
    temp += weekDays[i];
  } else {
    if (i === weekDays.length - 1) {
      i = -1;
    }
    isAgree = confirm(`${temp}. Хочеш побачити наступний день?`);
    if (!isAgree) {
      break;
    }
    temp = "";
  }
}
////////////////////////////////Level MAXIMUM
/*TASK1*/
let minNumber = 0,
  maxNumber = 100,
  setNum,
  isGuess = false;

while (true) {
  setNum = prompt(`Введіть ціле число від ${minNumber} до ${maxNumber}`, 0);
  if (
    setNum === null ||
    isNaN(+setNum) ||
    setNum.length != String(+setNum).length ||
    Math.floor(+setNum) !== +setNum ||
    +setNum < 0 ||
    +setNum >= 100
  ) {
    alert("Некоректне введення, спробуйте ще раз");
  } else {
    break;
  }
}
while (!isGuess) {
  if (confirm(`Ваше число більше ${Math.floor((maxNumber + minNumber) / 2)}`)) {
    minNumber = Math.floor((maxNumber + minNumber) / 2) + 1;
  } else {
    if (
      confirm(`Ваше число менше ${Math.floor((maxNumber + minNumber) / 2)}`)
    ) {
      maxNumber = Math.floor((maxNumber + minNumber) / 2) - 1;
    } else {
      alert(`Вітаємо! Ви відгадали задумане число ${setNum}`);
      break;
    }
  }
}
/*TASK2*/
for (let i = 2; i < 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
/*TASK3*/
let year = "",
  date,
  month = "",
  day = "",
  leap;
while (true) {
  let tmpYear;
  tmpYear = prompt(`Введіть рік`, 1);
  if (
    isNaN(tmpYear) ||
    +tmpYear < 1 ||
    tmpYear.length != String(+tmpYear).length ||
    Math.floor(+tmpYear) !== +tmpYear
  ) {
    alert("Не коректний ввід. Введіть рік у вигляді числа більшого за 0.");
  } else {
    year += tmpYear;
    break;
  }
}
leap = !Boolean(year % 4);
while (true) {
  let tmpMonth;
  tmpMonth = prompt(`Введіть місяць числом`, 1);
  if (
    isNaN(tmpMonth) ||
    +tmpMonth < 1 ||
    +tmpMonth > 12 ||
    tmpMonth.length != String(+tmpMonth).length ||
    Math.floor(+tmpMonth) !== +tmpMonth
  ) {
    alert(
      "Не коректний ввід. Введіть місяць у вигляді числа в межах від 1 до 12 включно."
    );
  } else {
    month += tmpMonth;
    break;
  }
}
while (true) {
  let tmpDay;
  tmpDay = prompt(`Введіть день місяця числом`, 1);
  if (
    isNaN(tmpDay) ||
    tmpDay.length != String(+tmpDay).length ||
    Math.floor(+tmpDay) !== +tmpDay ||
    +tmpDay < 1 ||
    +tmpDay > 31
  ) {
    alert("Не коректний ввід. Введіть день у вигляді числа.");
  } else if (
    (+tmpDay > 29 && +month === 2 && leap) ||
    (+tmpDay > 28 && +month === 2 && !leap) ||
    (+tmpDay > 30 &&
      (+month === 4 || +month === 6 || +month === 9 || +month === 11))
  ) {
    alert(
      "Не коректний ввід. Введіть день у вигляді числа. Врахуйте, що місяці можуть мати різну кількість днів"
    );
  } else {
    day = tmpDay;
    break;
  }
}
alert(`Введена Вами дата ${year}.${month}.${day}`);
if (
  +day + 1 > 31 &&
  (+month === 1 ||
    +month === 3 ||
    +month === 5 ||
    +month === 7 ||
    +month === 8 ||
    +month === 10 ||
    +month === 12)
) {
  day = 1;
  +month++;
  if (+month > 12) {
    month = 1;
    +year++;
  }
} else if (
  +day + 1 > 30 &&
  (+month === 4 || +month === 6 || +month === 9 || +month === 11)
) {
  day = 1;
  +month++;
} else if (+day + 1 > 29 && +month === 2 && leap) {
  day = 1;
  +month++;
} else if (+day + 1 > 28 && +month === 2 && !leap) {
  day = 1;
  +month++;
} else {
  +day++;
}
alert(`Наступна дата ${year}.${month}.${day}`);
