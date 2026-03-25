// const dog = {
//   name: "Doggie",
//   legCount: 4,
//   speaks: "bhow bhow",
// };

// const cat = {
//   name: "Cat",
//   legCount: 4,
//   speaks: "meow",
// };

// console.log(`${dog.name} has ${dog["legCount"]} legs`);
// console.log(`${cat.name} has ${cat["legCount"]} legs`);

class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }

  static myType() {
    console.log("Animal");
  }

  speak() {
    console.log(`Hi there ${this.speaks}`);
  }
}

Animal.myType();
let dog = new Animal("Doggie", 4, "Bhow Bhow");
console.log(dog);
dog.speak();
