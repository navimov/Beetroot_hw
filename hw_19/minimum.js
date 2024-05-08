/*1.Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії)*/
let car = {
  manufacturer: "Nissan",
  model: "X-trail",
  year: "2008",
  midSpeed: "110km",
  fuelBox: "60L",
  fuelAverage: "8.5L",
  drivers: "Nick john",
};
/*Створи наступні методи для роботи з цим об'єктом:
1.Метод, який виводить на екран інформацію про автомобіль.*/
car.showInfo = function showInfo() {
  for (let key in this) {
    console.log(`${key} = ${this[key]}`);
  }
};
//Метод додавання ім’я водія у список
car.addDriver = function addDriver(name) {
  this.drivers += " Tyler";
};
//Метод перевірки водія на наявність його ім’я у списку
car.isAddedDriver = function isAddedDriver(name) {
  return this.drivers.includes(name);
};
/*Метод підрахунку необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. */
car.countTimeFuel = function countTimeFuel(distance) {
  let drivingTime = distance / parseFloat(this.midSpeed);
  let needFuel = (distance / 100) * parseFloat(this.fuelAverage);
  let restTime = 0;
  if (drivingTime / 4 > 1 && drivingTime % 4 != 0) {
    restTime = Math.floor(drivingTime / 4);
  } else if (drivingTime / 4 > 1 && drivingTime % 4 === 0) {
    restTime = drivingTime / 4 - 1;
  }
  console.log(
    `Для подолання відстані ${distance}км потрібно ${
      drivingTime + restTime
    } год та ${needFuel} л. палива.`
  );
};
car.countTimeFuel(1290);
