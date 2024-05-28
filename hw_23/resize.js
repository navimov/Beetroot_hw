export const resize = function () {
  let box = this.parentNode;
  console.log(box);
  const resizing = function (event) {
    box.style.width = event.clientX - box.offsetLeft + "px";
    box.style.height = event.clientY - box.offsetTop + "px";
  };
  document.addEventListener("mousemove", resizing);

  document.addEventListener("mouseup", function () {
    document.removeEventListener("mousemove", resizing);
  });
};
