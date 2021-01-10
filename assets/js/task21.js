class Animal {
  constructor(name) {
    this.name = name;
  }
  sound() {
    console.log('I speak');
  }
}

class Cat extends Animal {
  constructor(name, speed) {
    //this.name = name; // ОШИБКА!!!!!
    super(name); // вызов конструктора родительского класса
    this.speed = speed; // новое свойство для класса кота
  }
  run() {
    console.log(`Speed of ${this.name} is ${this.speed}`);
  }
  // переопределение метода родительского класса
  sound() {
    console.log(`${this.name} speak`);
  }
}

const animal1 = new Animal('SomeAnimal');

const cat1 = new Cat('Barsik', 8);
cat1.run();
cat1.sound();
