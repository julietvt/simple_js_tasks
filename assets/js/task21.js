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

// super может вызывать конструктор родителя и его методы (родителя)
class A {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getPoint() {
    return this.x + ' ' + this.y;
  }
}
class D extends A {
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }
  getPoint() {
    return this.x + ' ' + this.y + ' ' + this.z;
  }
  getPointPatternParent() {
    // вызов метода getPoint у родителя
    return super.getPoint();
  }
}

const p1 = new A(2, 3);

const p2 = new D(4, 5, 6);

p1.getPoint();

p2.getPoint();

p2.getPointPatternParent();
