export const sortTable = (table, columnIndex) => {
  const rows = Array.from(table.rows).slice(1);
  const isNumberCell = !isNaN(parseInt(rows[0].cells[columnIndex].textContent));
  rows.sort((a, b) => {
    const previousCell = a.cells[columnIndex].textContent;
    const nextCell = b.cells[columnIndex].textContent;
    return isNumberCell
      ? parseInt(previousCell) - parseInt(nextCell)
      : previousCell.localeCompare(nextCell);
  });
  table.append(...rows);
};
