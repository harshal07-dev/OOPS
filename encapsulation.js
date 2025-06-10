class employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.id = Math.floor(Math.random() * 10000); // Random ID for each employee
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }
}


