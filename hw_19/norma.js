//Створити об'єкт, що описує час (години, хвилини, секунди)
let timeObj = {
  hour: 10,
  minutes: 45,
  seconds: 54,
};
timeObj.showTime = function showTime() {
  alert(
    `Поточний час збережений в об'єкті ${this.hour}:${this.minutes}:${this.seconds}`
  );
};

timeObj.changeSeconds = function changeSeconds(seconds) {
  
};
