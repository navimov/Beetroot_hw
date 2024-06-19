class Marker {
  constructor() {
    this.color = "red";
    this.inkCount = "5%";
  }
  print(str) {
    let workArr = str.split("");
    let resStr = "";
    let inkAmount = parseFloat(this.inkCount);
    while (inkAmount >= 0.5 && workArr.length > 0) {
      if (workArr[0] !== " ") {
        inkAmount -= 0.5;
      }
      resStr += workArr.shift();
    }
    this.inkCount = inkAmount + "%";
    let markerText = document.querySelector(".marker");
    markerText.textContent = resStr;
    markerText.style.color = this.color;
  }
}
let redMarker = new Marker();
redMarker.print("To be or not to be? That's the question.");

class SuperMarker extends Marker {
  charge(value) {
    while (value < 0 || value > 100) {
      alert("Enter a number bigger 0 and smaller or equal 100");
    }
    let inkAmount = parseFloat(this.inkCount);
    inkAmount += value;
    if (inkAmount > 100) {
      this.inkCount = 100 + "%";
    } else {
      this.inkCount = inkAmount + "%";
    }
  }
}
let rechargableMarker = new SuperMarker();
console.log(
  "Кількість чорнил в маркері до заправки становить " +
    rechargableMarker.inkCount
);
rechargableMarker.charge(20);

console.log(
  "Кількість чорнил в маркері після заправки становить " +
    rechargableMarker.inkCount
);
