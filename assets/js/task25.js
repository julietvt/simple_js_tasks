/*
Задания
**1. создать класс который выводит массив используя Symbol.iterator

2. создать класс Stud который наследует класс User
(name, surname)  и имеет свойство year-год поступления в вуз. Реализовать getFullName() (наследуется от User)
содержит еще метод getCourse() - вывод курса студента от 1 до 5 и вычисляется как текущий год минус год поступления. Текущий год получить самостоятельно
2* подсчитать количество студентов (через static)

3 Дан массив. Вывести элементы после первого нуля используя оператор '...'

4 добыть 1-цу из массива [7,7,7,1,7,7,7,7,7,7]
4* [1,2,3,[4,5,[6,7,8,9],10,11,12],13,14,15]
добыть 5, 8
добыть [6,7,8,9]
добыть все кроме 1,2,3

*/

class User {
  constructor(name, surname) {
    this._name = name;
    this._surname = surname;
  }
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('User name must be string type');
    }
    this._name = value;
  }
  set surname(value) {
    if (typeof value !== 'string') {
      throw new TypeError('User surname must be string type');
    }
    this._surname = value;
  }
  get name() {
    return this._name;
  }
  get surname() {
    return this._surname;
  }
  getFullName() {
    return `${this._name} +' '+ ${this._surname}`;
  }
}

class Stud extends User {
  static count = 0;
  constructor(name, surname, year) {
    super(name, surname);
    this._year = year;
    Stud.count++;
  }
  set year(value) {
    if (typeof value !== 'number') {
      throw new TypeError('User year must be number type');
    }
    this._year = value;
  }
  get year() {
    return this._year;
  }

  getCourse() {
    const currentYear = new Date().getFullYear();
    const course = currentYear - this._year;
    if (course > 5 && course < 1) {
      throw RangeError('He is not a student ');
    }
    return course;
  }
}

const Ivan = new Student('Ivan', 'Ivanov', 2020);
console.log(Ivan.getFullName());
console.log(Ivan.getCourse());
