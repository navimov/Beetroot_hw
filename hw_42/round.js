class Round {
  constructor() {
    this.radius = 10;
  }
  get getRadius() {
    return this.radius;
  }
  set setRadius(r) {
    this.radius = r;
  }
  get getDiametr() {
    return this.radius * 2;
  }
  squareRound() {
    return Math.PI * this.radius ** 2;
  }
  lengthRound() {
    return Math.PI * (this.radius * 2);
  }
}
let round = new Round();
console.log(round);
console.log("Радіус кола рівний " + round.getRadius);
round.setRadius = 20;
console.log("Радіус кола після внесення змін рівний " + round.getRadius);
console.log("Діаметр кола рівний " + round.getDiametr);
console.log("Площа кола рівна " + round.squareRound());
console.log("Довжина кола рівна " + round.lengthRound());
