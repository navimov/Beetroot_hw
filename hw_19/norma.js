//Створити об'єкт, що описує час (години, хвилини, секунди)
function TimeObj(hours, minutes, seconds) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
  //Метод для виведення часу на екран.
  this.showTime = function () {
    alert(
      `Поточний час збережений в об'єкті ${this.hours}:${this.minutes}:${this.seconds}`
    );
  };
  //Метод для зміни часу на передану кількість секунд.
  this.changeSeconds = function (sec) {
    this.seconds += sec;
    if (this.seconds / 60 > 1) {
      this.minutes += Math.floor(this.seconds / 60);
      this.seconds = this.seconds % 60;
      if (this.minutes / 60 > 1) {
        this.minutes = this.minutes % 60;
        this.hours += Math.floor(this.minutes / 60);
      }
    }
    alert(
      `Поточний час збережений в об'єкті після додавання секунд ${this.hours}:${this.minutes}:${this.seconds}`
    );
  };
  //Метод для зміни часу на передану кількість хвилин.
  this.changeMinutes = function (min) {
    this.minutes += min;
    if (this.minutes / 60 > 1) {
      this.hours += Math.floor(this.minutes / 60);
      this.minutes = this.minutes % 60;
      if (this.hours / 24 > 1) {
        this.hours = this.hours % 24;
      }
    }
    alert(
      `Поточний час збережений в об'єкті  після додавання хвилин ${this.hours}:${this.minutes}:${this.seconds}`
    );
  };
  //Метод для зміни часу на передану кількість годин.
  this.changeHours = function (hour) {
    this.hours += hour;
    if (this.hours / 24 > 1) {
      this.hours = this.hours % 24;
    }
    alert(
      `Поточний час збережений в об'єкті  після додавання годин  ${this.hours}:${this.minutes}:${this.seconds}`
    );
  };
}
let timeObj = new TimeObj(10, 45, 54);

timeObj.showTime();

timeObj.changeSeconds(654);

timeObj.changeMinutes(540);

timeObj.changeHours(190);
