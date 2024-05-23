let container = document.createElement("div");
let redCircle = document.createElement("div");
let yellowCircle = document.createElement("div");
let greenCircle = document.createElement("div");
redCircle.classList.add("redCircle");
yellowCircle.classList.add("yellowCircle");
greenCircle.classList.add("greenCircle");
container.appendChild(redCircle);
container.appendChild(yellowCircle);
container.appendChild(greenCircle);
container.classList.add("container");
document.body.append(container);
let btn = document.createElement("button");
btn.classList.add("button");
btn.innerText = "next color";
document.body.append(btn);
let lightItems = [redCircle, yellowCircle, greenCircle];
let idx = 0;

let toggleClass = () => {
  if (idx < 3) {
    if (!(idx - 1 < 0)) {
      lightItems[idx].classList.toggle("lightOn");
      lightItems[idx - 1].classList.toggle("lightOn");
    } else {
      lightItems[idx].classList.toggle("lightOn");
      if (lightItems[2].classList.contains("lightOn")) {
        lightItems[2].classList.toggle("lightOn");
      }
    }
    idx++;
  } else {
    idx = 0;
    lightItems[idx].classList.toggle("lightOn");
    lightItems[2].classList.toggle("lightOn");
    idx++;
  }
};
btn.addEventListener("click", toggleClass);
