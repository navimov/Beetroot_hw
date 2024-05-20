// let openButton = document.getElementById("open");
// let closeButton = document.getElementById("close");
let modalButtons = document.getElementsByClassName("modalBtn");
let modal = document.getElementById("modal");
let modalWrapper = document.getElementById("modal_wrapper");
// openButton.addEventListener("click", () => {
//   modal.style.display = "block";
// });
// closeButton.addEventListener("click", () => {
//   modal.style.display = "none";
// });
// openButton.addEventListener("click", () => {
//   modal.classList.toggle("hidden");
// });
// closeButton.addEventListener("click", () => {
//   modal.classList.toggle("hidden");
// });
// let toggleClass = () => {
//   modal.classList.toggle("hidden");
// };
let toggleClass = (e) => {
  if (e.target.closest(".modalBtn")) {
    modal.classList.toggle("hidden");
    modalWrapper.classList.toggle("modal_open");
  }
};
// openButton.addEventListener("click",toggleClass);
// closeButton.addEventListener("click",toggleClass);
// modalButtons.addEventListener("click", toggleClass);
document.addEventListener("click", toggleClass);
