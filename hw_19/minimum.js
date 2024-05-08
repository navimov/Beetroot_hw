/*1.Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії)*/
function Car(
  manufacturer,
  model,
  year,
  midSpeed,
  fuelBox,
  fuelAverage,
  drivers
) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.year = year;
  this.midSpeed = midSpeed;
  this.fuelBox = fuelBox;
  this.fuelAverage = fuelAverage;
  this.drivers = drivers;
  /*Створи наступні методи для роботи з цим об'єктом:
1.Метод, який виводить на екран інформацію про автомобіль.*/
  this.showInfo = function showInfo() {
    for (let key in this) {
      if (this.hasOwnProperty(key) && typeof this[key] !== "function") {
        console.log(key + ": " + this[key]);
      }
    }
  };
  //Метод додавання ім’я водія у список
  this.addDriver = function addDriver(name) {
    this.drivers += " Tyler";
  };
  //Метод перевірки водія на наявність його ім’я у списку
  this.isAddedDriver = function isAddedDriver(name) {
    return this.drivers.includes(name);
  };
  /*Метод підрахунку необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. */
  this.countTimeFuel = function countTimeFuel(distance) {
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
}
let car = new Car(
  "Nissan",
  "X-trail",
  "2008",
  "110km",
  "60L",
  "8.5L",
  "Nick john"
);
