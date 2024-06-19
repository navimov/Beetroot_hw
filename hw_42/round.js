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
console.log(round.getRadius);
round.setRadius = 20;
console.log(round.getRadius);
console.log(round.getDiametr);
console.log(round.squareRound());
console.log(round.lengthRound());
