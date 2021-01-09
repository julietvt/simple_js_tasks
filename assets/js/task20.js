// классы
class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello, ${this.name} ${this.surname}`);
  }
  getFullName() {
    // console.log(this);
    return `${this.name} ${this.surname}`;
  }
  isAdult() {
    return this.age >= 18;
  }
}

//создание объекта класса
const user1 = new User('Alex', 'Fox', 20);
//создание объекта класса
const user2 = new User('Sasha', 'Petrov', 16);

// вывод объекта класса
console.log(user1);
// sayHello вызов
user1.sayHello();
// isAdult вызов
console.log(user1.isAdult());

// Задание. Реализовать класс Worker со свойствами: name, surname, rate (ставка за день), days
// класс должен иметь метод getWage() подсчета зарплаты
// * модифицировать класс: сделать все его свойства приватными а для их чтения сделать геттеры
// создайте двух рабочих и найдите сумму их зарплат

class Worker {
  #name = '';
  #surname = '';
  #rate = '';
  #days = '';
  constructor(name, surname, rate, days) {
    this.#name = name;
    this.#surname = surname;
    this.#rate = rate;
    this.#days = days;
  }
  //getters
  get name() {
    return this.#name;
  }
  get days() {
    return this.#days;
  }
  //setters
  set name(newValue) {
    this.#name = newValue;
  }
  set surname(newValue) {
    this.#surname = newValue;
  }

  getSalary() {
    return this.#rate * this.#days;
  }
}

const worker1 = new Worker('name1', 'surname1', 50, 14);

const worker2 = new Worker('name2', 'surname2', 60, 16);

const totalW = worker1.getSalary() + worker2.getSalary();
console.log(totalW);
