export const textEdit = function () {
  const textArea = document.querySelector(".text");
  const editArea = document.querySelector(".edit_area");
  const editingText = function (event) {
    if (event.ctrlKey && event.code === "KeyE") {
      event.preventDefault();
      console.log(event.code);
      textArea.style.display = "none";
      editArea.style.display = "block";
      editArea.value = textArea.innerText;
      editArea.focus();
    }
  };

  const saving = function (event) {
    if (event.ctrlKey && event.code === "KeyS") {
      event.preventDefault();
      textArea.style.display = "block";
      editArea.style.display = "none";
      textArea.innerText = editArea.value;
    }
  };
  document.addEventListener("keydown", saving);
  document.addEventListener("keydown", editingText);
};
