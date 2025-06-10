// / building a book class - just a clearer way to write Constructor Functions!
// ex-1
class Book {
  constructor(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.inStock = true;
  }
  getSummary() {
    return `${this.title} by ${this.author}, published in ${this.yearPublished} `;
  }
  toggleAvailability() {
    this.inStock = !this.inStock;
    console.log(
      `${this.title} is now ${this.inStock ? "In Stock " : "Out of Stock"}.`
    );
  }
}
console.log("-------Creating Books------\n");
const BuyBackYourTime = new Book("Buy Back Your Time", "Dan Martel", 2023);
const atomicHabits = new Book("Atomic Habits", "James Clear", 2018);
const deepWork = new Book("Deep Work", "Carl Newport", 2016);

console.log("-----Display the book summaries------\n");
console.log(BuyBackYourTime.getSummary());
console.log(atomicHabits.getSummary());
console.log(deepWork.getSummary());

console.log("\n--- Changing Book Availability ---");
BuyBackYourTime.toggleAvailability();
console.log(
  BuyBackYourTime.getSummary() + " Availability: " + BuyBackYourTime.inStock
);

atomicHabits.toggleAvailability();
atomicHabits.toggleAvailability();
console.log(
  atomicHabits.getSummary() + " Availability: " + atomicHabits.inStock
);

// ex-2
class Gadget {
  constructor(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.isWorking = true;
  }
  getInfo() {
    return `This is a ${this.name} (${this.type}), pricing is just ${this.price}`;
  }
  fix() {
    this.isWorking = !this.isWorking;
    console.log(
      `${this.name} ${
        this.isWorking ? "has been fixed! " : "gadget is not working"
      }.`
    );
  }
}

const gadget1 = new Gadget("MOTO G4", "Mobile Phone", "13,000");
const gadget2 = new Gadget("Macbook Pro M4", "Laptop", "1,64,000");

console.log(gadget1.getInfo());
console.log(gadget2.getInfo(), "\n");

gadget2.fix();

console.log(gadget2.getInfo() + " is working:" + gadget2.isWorking);
