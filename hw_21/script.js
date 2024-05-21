//////////////////////////////////////////////////minimum level
/*Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. */
function Item(name, quantity, price, isPurchased) {
  (this.name = name),
    (this.quantity = quantity),
    (this.isPurchased = isPurchased),
    (this.price = price),
    Object.defineProperty(this, "sum", {
      get: function () {
        return this.price * this.quantity;
      },
    });
}

let tomatoes = new Item("tomatoes", 2, 45, false);
let potatoes = new Item("potatoes", 3, 17, true);
let carrot = new Item("carrot", 1.5, 21, true);
let milk = new Item("milk", 2, 26.3, false);
let bread = new Item("bread", 1, 22, false);
let sausage = new Item("sausage", 3, 98, false);
let toBuyList = [tomatoes, potatoes, carrot, milk, bread, sausage];
/*TASK1 Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали. */ toBuyList.sort(
  (a, b) => b.isPurchased - a.isPurchased
);
let sortedByPurchase = toBuyList.map((item) => item.name);
console.log(sortedByPurchase);
//TASK2 Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function toBuy(name) {
  let buyProduct = toBuyList.findIndex((item) => item.name === name);
  if (buyProduct !== -1) {
    toBuyList[buyProduct].isPurchased = true;
  }
}
toBuy("bread");
console.log(toBuyList);
//////////////////////////////////////////////////Norma level
//TASK1.Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
////////////Variant 1
function deleteProd(name) {
  let resFilter = toBuyList.filter((item) => item.name !== name);
  return resFilter;
}
toBuyList = deleteProd("tomatoes");
console.log(toBuyList);
//////////////variant 2  зробив просто для цікавості, щоб використати метод splice
let delIdx;
function deleteForFun(name) {
  let resDeleteFun = toBuyList.find((item, idx) => {
    delIdx = idx;
    return item.name == name;
  });
}
deleteForFun("bread");
let resArr = toBuyList.splice(delIdx, 1);
console.log(toBuyList);
/////////*TASK2Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.*/
function addProduct(prodLlist, name, quantity, price, isPurchased) {
  let isExist = prodLlist.findIndex(
    (item) =>
      item.name === name &&
      item.price === price &&
      item.isPurchased === isPurchased
  );
  if (isExist === -1) {
    prodLlist.push(new Item(name, quantity, price, isPurchased));
  } else {
    prodLlist[isExist].quantity += quantity;
  }
}
addProduct(toBuyList, "tomatoes", 5, 45, true);
/////////////////////////////////////////maximum level
//TASK1 Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
let value = toBuyList.reduce((accumulator, item) => accumulator + item.sum, 0);
// console.log(value);
//TASK2 Підрахунок суми всіх (не) придбаних продуктів.
let sumBought = 0;
let sumNotPurchased = 0;
let sumNotBuy = toBuyList.map((item) => {
  if (!item.isPurchased) {
    sumNotPurchased += item.sum;
  } else {
    sumBought += item.sum;
  }
});
console.log(sumBought);
console.log(sumNotPurchased);
/*TASK3 Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)*/
function sortedList(param) {
  if (param === "toRaise") {
    toBuyList.sort((a, b) => a.sum - b.sum);
  } else {
    toBuyList.sort((a, b) => b.sum - a.sum);
  }
}
console.log(toBuyList);
sortedList("toRaise");
