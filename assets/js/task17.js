// this - на текущий элемент, указатель на самого себя

const objectTest = {
  property1: 'value1',
  property2: 'value2',
  outThisObject: function () {
    console.log(this);
  },
};

objectTest.outThisObject();

console.log(objectTest);

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.priceForUser = function (coef) {
    return this.price + coef;
  };
}

const product1 = new Product('ball', 100);
const product2 = new Product('car', 300);
product1.priceForUser(0.2);

// вложенность объектов

function Move() {}

const cat = {
  methodMode: new Move(),
};
const dog = {
  methodMode: new Move(),
};
const fish = {
  methodMode: new Move(),
};

// прототипное наследование

//функция конструктор
function Person(name1, surname1, age1) {
  this.name = name1;
  this.surname = surname1;
  this.age = age1;
  this.sayHi = function () {
    return `Hi, my name is ${this.name}`;
  };
}

const user1 = new Person('Ivan', 'Ivanov', 20);
const user2 = new Person('Vasya', 'Petrov', 20);

console.log(user1);
console.log(user2);

function Employee(name, surname, age, salary) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.salary = salary;
}
Employee.prototype = new Person();
const employee1 = new Employee('Ivan', 'Ivanov', 20, 1000000);

const employees = [];
for (let i = 0; i < 10; i++) {
  employees.push(new Employee(`Name${i}`, `Surname${i}`, 18 + i, 10000 * i));
}
console.log(employees[0].sayHi());
console.log(employees[1].sayHi());

/* Написать свой массив*/

function MyArray() {
  this.length = 0;
}

MyArray.prototype = {
  push(value) {
    this[this.length++] = value;
  },
};
