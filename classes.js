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