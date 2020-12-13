/*
// Объекты
let user1 = {
  name: 'user1',
  age: 20,
  isMale: true,
  email: 'user1@gmail.com',
  lang: ['ru', 'eng', 'ua'],
};

// delete user1.age;

console.log(user1.name);
console.log(user1['name']);

user1.name = 'John';
console.log(user1);

user1.address = 'NY, av.50, 20';
console.log(user1);

let user2 = {
  fname: 'firstname2',
  sname: 'surname2',
  age: 20,
  isMale: true,
  email: 'user2@gmail.com',
  fullname: function () {
    return this.fname + ' ' + this.sname;
  },
};

let user3 = user2;

let userCard = {
  userName: 'John Smith',
  cardNumber: '1234567812345678',
  cvv: 123,
  rNumber: 'UA12312312312312312312312312312323',
  dataCardM: '01/20',
};

let cat = {
  name: 'Barsik',
  age: 2,
  countLegs: 4,
  countHead: 1,
};
*/
// ---------------------------------------

const user = {
  firstName: 'Vasya',
  lastName: 'Ivanov',
  workExperience: 0,
  isMale: true,
};

console.log(user);
console.log(user.firstName + ' ' + user.lastName);

user.category = 'junior';
console.log(user);

// работаем с циклом
while (user.workExperience < 8) {
  user.workExperience++;
}
console.log(user);
user.category = 'senior';
console.log(user);
//фукнции

const userJack = {
  firstName: 'Jack',
  lastName: 'Sparrow',
  isMale: true,
  sayHello: function () {
    console.log(
      'Hello! My name is ',
      this.firstName + ' ' + this.lastName + '!!!'
    );
  },
  outThisObject: function () {
    console.log(this);
  },
};

userJack.sayHello();

// ----------------------------------
function producer(name, info) {
  this.name = name;
  this.info = info;
}
function toy(name, price, prod) {
  this.name = name;
  this.price = price;
  this.prod = prod;
}

const prod1 = new producer('Funny Toy', 'London');
const toy1 = new toy('ball', 10, prod1);

// ---------------------------------------

const newProd = {
  name: 'new prod',
  info: 'us',
};

const newToy = {
  name: 'new toy',
  info: 'best toy',
  prod: newProd,
};
