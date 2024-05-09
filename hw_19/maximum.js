///////////////////////////////Створи об'єкт, що описує звичайний дріб.
function Fraction(numerator, denominator) {
  this.numerator = numerator;
  this.denominator = denominator;
}
let frac1_2 = new Fraction(-45, 15);
let frac2_3 = new Fraction(18, -4);
///////////////////////////////Створи об'єкт, який має методи роботи з дробом:
let FractionMethods = {
  ///////////////////Скорочення об'єкта-дробу.
  shorting: function short(fraction) {
    let numerator = +fraction.numerator,
      denominator = +fraction.denominator,
      res = "";
    if (Math.abs(numerator) === Math.abs(denominator)) {
      res = numerator / denominator;
      return res;
    } else if (Math.abs(numerator) < Math.abs(denominator)) {
      for (let i = Math.abs(numerator); i > 1; i--) {
        if (Math.abs(numerator) % i === 0 && Math.abs(denominator) % i === 0) {
          numerator = numerator / i;
          denominator = denominator / i;
          if (numerator < 0 && denominator < 0) {
            numerator = Math.abs(numerator);
            denominator = Math.abs(denominator);
          } else if (numerator < 0 || denominator < 0) {
            denominator = Math.abs(denominator);
            numerator = -numerator;
          }
          res = `${numerator}/${denominator}`;
          return res;
        }
      }
    } else {
      for (let i = Math.abs(denominator); i > 1; i--) {
        if (Math.abs(numerator) % i === 0 && Math.abs(denominator) % i === 0) {
          numerator = numerator / i;
          denominator = denominator / i;
          break;
        }
      }
      let intPart;
      if (numerator > 0) {
        intPart = Math.floor(numerator / denominator);
      } else {
        intPart = -Math.ceil(numerator / denominator);
      }

      numerator = Math.abs(numerator) % Math.abs(denominator);
      if (numerator != 0) {
        if (numerator < 0 && denominator < 0) {
          numerator = Math.abs(numerator);
          denominator = Math.abs(denominator);
        } else if (numerator < 0 || denominator < 0) {
          denominator = Math.abs(denominator);
          numerator = Math.abs(numerator);
          intpart = -intPart;
        }
        res = `${intPart}.${numerator}/${denominator}`;
      } else {
        res = intPart;
      }
      return res;
    }
  },
  /////////////////////////////Складання 2-х об'єктів-дробів.
  add: function add(frac1, frac2) {
    let numerator, denominator, temp1_numerator, temp2_numerator;
    if (frac1.numerator < 0 || frac1.denominator < 0) {
      frac1.numerator = -frac1.numerator;
      frac1.denominator = -frac1.denominator;
    }
    if (frac2.numerator < 0 || frac2.denominator < 0) {
      frac2.numerator = -frac2.numerator;
      frac2.denominator = -frac2.denominator;
    }
    denominator = frac1.denominator * frac2.denominator;
    temp1_numerator = frac1.numerator * frac2.denominator;
    temp2_numerator = frac2.numerator * frac1.denominator;
    numerator = temp1_numerator + temp2_numerator;
    let res = {
      numerator: numerator,
      denominator: denominator,
    };
    let fullRes = this.shorting(res);
    return fullRes;
  },
  //////////////////Віднімання 2-х об'єктів-дробів.
  subtraction: function subtr(frac1, frac2) {
    let numerator, denominator, temp1_numerator, temp2_numerator;
    if (frac1.numerator < 0 || frac1.denominator < 0) {
      frac1.numerator = -frac1.numerator;
      frac1.denominator = -frac1.denominator;
    }
    if (frac2.numerator < 0 || frac2.denominator < 0) {
      frac2.numerator = -frac2.numerator;
      frac2.denominator = -frac2.denominator;
    }
    denominator = frac1.denominator * frac2.denominator;
    temp1_numerator = frac1.numerator * frac2.denominator;
    temp2_numerator = frac2.numerator * frac1.denominator;
    numerator = +temp1_numerator - +temp2_numerator;
    let res = {
      numerator: numerator,
      denominator: denominator,
    };
    let fullRes = this.shorting(res);
    return fullRes;
  },
  //////////////////Множення 2-х об'єктів-дробів.
  multiply: function subtr(frac1, frac2) {
    let numerator, denominator;
    if (frac1.numerator < 0 || frac1.denominator < 0) {
      frac1.numerator = -frac1.numerator;
      frac1.denominator = -frac1.denominator;
    }
    if (frac2.numerator < 0 || frac2.denominator < 0) {
      frac2.numerator = -frac2.numerator;
      frac2.denominator = -frac2.denominator;
    }
    denominator = frac1.denominator * frac2.denominator;
    numerator = frac1.numerator * frac2.numerator;
    let res = {
      numerator: numerator,
      denominator: denominator,
    };
    let fullRes = this.shorting(res);
    return fullRes;
  },
  ////////////////Ділення 2-х об'єктів-дробів.
  divide: function subtr(frac1, frac2) {
    let numerator, denominator;
    if (frac1.numerator < 0 || frac1.denominator < 0) {
      frac1.numerator = -frac1.numerator;
      frac1.denominator = -frac1.denominator;
    }
    if (frac2.numerator < 0 || frac2.denominator < 0) {
      frac2.numerator = -frac2.numerator;
      frac2.denominator = -frac2.denominator;
    }
    denominator = frac1.denominator * frac2.numerator;
    numerator = frac1.numerator * frac2.denominator;
    let res = {
      numerator: numerator,
      denominator: denominator,
    };
    let fullRes = this.shorting(res);
    return fullRes;
  },
};

let sum = FractionMethods.add(frac1_2, frac2_3);
let sub = FractionMethods.subtraction(frac1_2, frac2_3);
let mul = FractionMethods.multiply(frac1_2, frac2_3);
let div = FractionMethods.divide(frac1_2, frac2_3);
console.log(
  `Сума дробів ${frac1_2.numerator}/${frac1_2.denominator} та ${frac2_3.numerator}/${frac2_3.denominator} рівна ${sum}`
);
console.log(
  `Різниця дробів ${frac1_2.numerator}/${frac1_2.denominator} та ${frac2_3.numerator}/${frac2_3.denominator} рівна ${sub}`
);
console.log(
  `Результат множення дробів ${frac1_2.numerator}/${frac1_2.denominator} та ${frac2_3.numerator}/${frac2_3.denominator} рівна ${mul}`
);
console.log(
  `Результат ділення дробів ${frac1_2.numerator}/${frac1_2.denominator} та ${frac2_3.numerator}/${frac2_3.denominator} рівна ${div}`
);
