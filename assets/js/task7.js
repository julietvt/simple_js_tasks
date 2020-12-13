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
