class Employee {
  constructor(name, surname, yearExperience, salary) {
    this.name = name;
    this.surname = surname;
    this.yearExperience = yearExperience;
    this.salary = salary;
  }
}
let jeremy = new Employee("Jeremy", "Nilson", 2, "2000$");
let helen = new Employee("Helen", "Parker", 3, "1800$");
let lasley = new Employee("Lasley", "Kirby", 1, "1000$");
let johny = new Employee("Johnatan", "White", 2, "2200$");
let kally = new Employee("Kally", "Smith", 5, "3500$");
let employeeArr = [jeremy, helen, lasley, johny, kally];
class EmpTable {
  constructor(employeeArr) {
    this.employees = employeeArr;
  }
  getHtml() {
    let employeeTable = document.createElement("table");
    let employeeTableHead = document.createElement("thead");
    let rowTableHead = document.createElement("tr");
    let arrTableHead = ["name", "surname", "yearExperience", "salary"];
    for (let i = 0; i < arrTableHead.length; i++) {
      const cellHead = document.createElement("th");
      const cellHeadText = document.createTextNode(arrTableHead[i]);
      cellHead.appendChild(cellHeadText);
      rowTableHead.appendChild(cellHead);
      cellHead.setAttribute(
        "style",
        "border: 1px solid black; border-collapse: collapse;"
      );
    }
    employeeTableHead.appendChild(rowTableHead);
    employeeTable.appendChild(employeeTableHead);

    let employeeTableBody = document.createElement("tbody");
    this.employees.forEach((employee) => {
      let rowTableItem = document.createElement("tr");
      for (let item in employee) {
        const cell = document.createElement("td");
        const cellContent = document.createTextNode(employee[item]);
        cell.appendChild(cellContent);
        rowTableItem.appendChild(cell);
        cell.setAttribute(
          "style",
          "border: 1px solid black; border-collapse: collapse;"
        );
      }
      employeeTableBody.appendChild(rowTableItem);
    });
    employeeTable.appendChild(employeeTableBody);
    document.body.appendChild(employeeTable);
    employeeTable.setAttribute(
      "style",
      "border: 1px solid black; border-collapse: collapse;"
    );
  }
}
let newTable = new EmpTable(employeeArr);
newTable.getHtml();
