import { sortTable } from "./sortTable.js";
import { resize } from "./resize.js";
import { textEdit } from "./textEdit.js";
let table = document.querySelector("table");
table.addEventListener("click", function (event) {
  if (event.target.closest("th")) {
    sortTable(table, event.target.cellIndex);
  }
});

let resizeCorner = document.querySelector(".corner");
resizeCorner.addEventListener("mousedown", resize);

textEdit();
