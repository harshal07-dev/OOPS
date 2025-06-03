// **define an object with object literal syntax** - best for simple single objects
// scenario: You want to create a simple object with properties and methods, you can use
// object literal syntax.
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2025,
  start: function () {
    console.log(`Starting the ${this.year} ${this.brand} ${this.model} 🚗💨`); //ex-1
  },
};
//short hand
const car2 = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2025,
  start() {
    console.log(
      `Object literal 🔥Starting the ${this.year} ${this.brand} ${this.model} 🚗💨`
    ); //ex-2
  },
};

car.start();
car2.start();

// ** define two objects with Factory function**
// scenario: You want to create multiple car objects with similar properties and methods, i can
// duplicate the code for each car, this can be problem one or more methods in the object, but it's
// not efficient.Instead, use a factory function to create multiple car objects.

function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old` // ex-1
      );
    },
  };
}

const person1 = createPerson("Alice", 30);
const person2 = createPerson("Rohan", 25);

person1.greet();
person2.greet();

// ex-2
function createBook(title, author) {
  return {
    title,
    author,
    describe() {
      console.log(`This book is titled ${this.title} by ${this.author}`);
    },
  };
}

const book1 = createBook("Buy back your time", "Dan Martell");
const book2 = createBook(
  "Culture- the secret recipe of zomato",
  "Deepindar Goyal"
);

book1.describe();
book2.describe();

// ** define an object with Constructor function**
// scenario: You Want to create multiple car objects with similar properties and methods, i can
// duplicate the code for each car, this can be problem one or more methods in the object, but it's
// not efficient.Instead, use a constructor function to create multiple car objects.
// ex-1
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.start = function () {
    console.log(
      `Constructor function🔥 - Starting the ${this.year} ${this.brand} ${this.model} 🚗💨`
    ); //ex-1
  };
}

const car5 = new Car("BMW", "X5", 2023);
const car6 = new Car("Audi", "A4", 2022);
car5.start();
car6.start();

// ex-2
function Rectangle(width, height) {
  (this.width = width),
    (this.height = height),
    (this.getArea = function () {
      console.log(
        `Constructor function🔥 - The area of the rectangle is ${
          this.width * this.height
        }`
      );
    });
}

const rectangle1 = new Rectangle(5, 10);
const rectangle2 = new Rectangle(8, 3);

rectangle1.getArea();
rectangle2.getArea();
