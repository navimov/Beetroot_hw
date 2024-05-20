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
let idx = 1;
let toggleClass = () => {
  if (idx < 3) {
    lightItems[idx].classList.toggle("lightOn");
    idx++;
  } else {
    idx = 1;
    lightItems[1].classList.toggle("lightOn");
    lightItems[2].classList.toggle("lightOn");
  }
};
btn.addEventListener("click", toggleClass);
