//Створити об'єкт, що описує час (години, хвилини, секунди)
let timeObj = {
  hours: 10,
  minutes: 45,
  seconds: 54,
};

//Метод для виведення часу на екран.
timeObj.showTime = function showTime() {
  alert(
    `Поточний час збережений в об'єкті ${this.hours}:${this.minutes}:${this.seconds}`
  );
};
timeObj.showTime();
//Метод для зміни часу на передану кількість секунд.
timeObj.changeSeconds = function changeSeconds(sec) {
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
    `Поточний час збережений в об'єкті ${this.hours}:${this.minutes}:${this.seconds}`
  );
};
timeObj.changeSeconds(654);

//Метод для зміни часу на передану кількість хвилин.
timeObj.changeMinutes = function changeMinutes(min) {
  this.minutes += min;
  if (this.minutes / 60 > 1) {
    this.hours += Math.floor(this.minutes / 60);
    this.minutes = this.minutes % 60;
    if (this.hours / 24 > 1) {
      this.hours = this.hours % 24;
    }
  }
  alert(
    `Поточний час збережений в об'єкті ${this.hours}:${this.minutes}:${this.seconds}`
  );
};
timeObj.changeMinutes(540);
//Метод для зміни часу на передану кількість годин.
timeObj.changeHours = function changeHours(hour) {
  this.hours += hour;
  if (this.hours / 24 > 1) {
    this.hours = this.hours % 24;
  }
  alert(
    `Поточний час збережений в об'єкті ${this.hours}:${this.minutes}:${this.seconds}`
  );
};
timeObj.changeHours(190);
