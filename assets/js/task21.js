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

// проверка принадлежности обьекта классу определенному включая наследование
console.log(Ivanov instanceof Stud);
console.log(Ivanov instanceof User);
console.log(KarsonTeacher instanceof User);
console.log(KarsonTeacher instanceof Stud);
console.log(KarsonTeacher instanceof Teacher);

// !!!!!!!!!!!!!!!!!!
// super нет у стрелочных функций

// static - не для 1 обьекта а для всех обьектов класса
// какието действия и опреции над всеми обьектами класса
// пр. количество студентов
// пр. средний бал в группе студентов
// пр. среднее количество часов по препадам
// пр. общая сумма выплат препадам
// пр студен с максимальным баллом
// пр только отличников вывести
// пр только бюджетников вывести

// ключевое слово static
// статическими могут быть и свойства (поле) и метод

/*
Задание

класс Художник (name,info)
класс Картина (pname, year)

реализовать механизм наследование

подсчитать количество художников в базе (static)
подсчитать количество картин в базе (static)

* подсчитать количество картин у каждого художников
*/
/*

class Artist {
  static countArtist = 0;
  constructor(name, info = 'no info') {
    this.name = name;
    this.info = info;
  }
}

class Picture {
  constructor(name, year = 2021) {
    this.name = name;
    this.year = year;
  }
}
*/

('use strict');
/*    Задание 3. Продумать реализацию классов для вывода картин по конкретному художнику 
и количество работ его (т.е. подпишите, свяжите данные классы друг на друга).
 */
class Artist {
  //Счетчик экземпляров класса
  static #counter = 0;

  constructor(name, period, style) {
    this.name = name;
    this.period = period;
    this.style = style;
    this.arrayOfPaintings = [];
    Artist.#counter++;
  }
  //Метод добавления картин художника
  addPaintingOfArtist(painting) {
    //Проверка передаваемый объект картина или нет
    if (!(painting instanceof Painting)) {
      alert('Input object is not painting!');
      return;
    }
    //Проверка есть ли введенная картина с таким именем массиве
    if (this.arrayOfPaintings.length > 1) {
      if (this.arrayOfPaintings.some((item) => item.name === painting.name)) {
        alert('Input painting already exists in database!');
        return;
      }
    }
    this.arrayOfPaintings.push(painting);
  }

  //Метод вывода картин художника
  showInfoAboutPictures() {
    console.log(`All paintings of ${this.name}:`);
    for (const item of this.arrayOfPaintings) {
      item.getInfoAbout();
    }
  }
  //Метод вывода количества картин художника
  getQuantityOfPicturesOfArtist() {
    console.log(
      `Quantity of paintings of ${this.name}: ${this.arrayOfPaintings.length}`
    );
    return this.arrayOfPaintings.length;
  }
  //Статический метод вывода количества созданных экземпляров класса Художник
  static get getQuantityOfArtists() {
    return Artist.#counter;
  }
  //Вывод информации о художнике
  getInfoAbout() {
    console.log(
      `Painter ${this.name} worked in ${this.period}. Style of pictures - ${this.style}`
    );
  }
}
//Описание класса Картина
class Painting {
  //Счетчик экземпляров класса
  static #counter = 0;
  constructor(title, year, price) {
    this.title = title;
    this.year = year;
    this.price = price;
    Painting.#counter++;
  }
  //Статический метод вывода количества созданных экземпляров класса Картина
  static get getQuantityOfPaintings() {
    return Painting.#counter;
  }
  //Вывод информации о картине
  getInfoAbout() {
    console.log(
      `Picture "${this.title}" painted in ${this.year}. Current price - ${this.price} $`
    );
  }
}

//Создание объектов и вызов их методов
const painter1 = new Artist(
  'Leonardo da Vinci',
  '15-16th century',
  'Renaissance'
);
const pic1 = new Painting('Mona Lisa', '1503-1519', 150_000_000);
const pic2 = new Painting('The Last Supper', '1495-1498', 100_000_000);
painter1.addPaintingOfArtist(pic1);
painter1.addPaintingOfArtist(pic2);
//Закомментированные вызовы методов не добавляют объект в базу,
//поскольку объект есть или не является картиной
//painter1.addPaintingOfArtist(pic2);
//painter1.addPaintingOfArtist("sdfssd");
painter1.showInfoAboutPictures();
painter1.getQuantityOfPicturesOfArtist();
