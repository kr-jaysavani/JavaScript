// A JavaScript class is not an object.

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}
// constructor
// it has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties

// create object
// const myCar1 = new Car("Ford", 2014);
// const myCar2 = new Car("Audi", 2019);

// console.log(myCar1.age());  // 10

// class Animal {
//   constructor(legs) {
//       this.legs = legs;
//   }
//   walk() {
//       console.log('walking on ' + this.legs + ' legs');
//   }
// }

// class Bird extends Animal {
//   constructor(legs) {
//       super(legs);
//   }
//   fly() {
//       console.log('flying');
//   }
// }

// let bird = new Bird(2);

// bird.walk();
// bird.fly();

let numbers = [4, 2, 6];
numbers.sort((a, b) => b - a);
console.log(numbers); // [6,4,2]
