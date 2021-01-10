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

// задача
/*
User : name, password, email. вывод имя+почта через :
 
1 Stud : массив оценок. 1функция: вывод всех оценок 2функция: подсчитать средний бал 

super(name, password)

2 Teacher количество часов за год (800 по ум), зарплата. функция: премия если количество часов больше 800
*/

class User {
  constructor(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
  getUserInfo() {
    return `${this.name}  ${this.email}`;
  }
}

class Stud extends User {
  constructor(name, password, email, marks) {
    super(name, password, email);
    this.marks = marks;
  }
  outMarks() {
    console.log(this.marks);
  }
  avMark() {
    let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
    return sum / this.marks.length;
    //return (this.marks.reduce((a,b) => a+b))/this.marks.length);
  }
}

class Teacher extends User {
  constructor(name, password, email, hours, salary) {
    super(name, password, email);
    this.hours = hours || 800;
    this.salary = salary;
  }
  funAddMoney(prize) {
    if (this.hours >= 800) {
      this.salary += prize;
    }
  }
  getSalaryTeacher() {
    console.log(this.salary);
  }
}

const Ivanov = new Stud('Ivan Inanov', 'qwerty', 'iva@mail.com', [
  5,
  4,
  5,
  5,
  4,
  5,
]);
console.log(Ivanov.getUserInfo());
Ivanov.avMark();

const KarsonTeacher = new Teacher(
  'Karsonchik',
  'zxcv',
  'karsov@mail.com',
  1000,
  15000
);
console.log(KarsonTeacher.getUserInfo());
KarsonTeacher.getSalaryTeacher();
KarsonTeacher.funAddMoney(5000);
KarsonTeacher.getSalaryTeacher();
