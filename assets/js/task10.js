/*
const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];
const result = words.filter((word) => word.length > 6);
console.log(result);

// 2 var
let i,
  j = 0,
  res = [];
for (i = 0; i < words.length; i++) {
  if (words[i].length > 6) {
    res[j] = words[i];
    j++;
  }
}
console.log(res);

const a = [1, 5, 34, 2, 3, 6, 123, 345, 6, 3, 2, 0, 3, 4];
const result = a.filter();

let array = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

function isPrime(num) {
  if (num <= 1) return false;
  else if (num === 2) return true;
  else {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return true;
  }
}

console.log(array.filter(isPrime)); // [53, 2, 5, 7, 31, 97, 17]
*/

//task1
// Даны два массива. Объедините их и преобразовав в строку.
let a = [2, 5, 3, 4, 6];
let b = [20, 30, 2, 5];
//1
let res1 = a.concat(b).toString();
//2
let res2 = a.join() + ',' + b.join();

// task2
//Создайте массив и отфильтруйте его, удалив все отрицательные и нулевые элементы
let c = [2, -5, 3, 4, 0, 2, -6, 0, 8, -1];

//1
let res3 = [];
let i = 0,
  j = 0;
for (i = 0; i < c.length; i++) {
  if (c[i] > 0) {
    res3[j] = c[i];
    j++;
  }
}
console.log(res3);
//2
const res4 = c.filter((elem) => elem > 0);
console.log(res4);

// task3
let res5 = [];
res5[0] = 0;
res5[1] = 1;
let N = 20;
for (let i = 2; i < N; i++) {
  res5[i] = res5[i - 1] + res5[i - 2];
}

//2
/*
function fibo(n) {
  if (n <= 0) return 0;
  else if (n == 1) return 1;
  else return fibo(n - 1) + fibo(n - 2);
}

let res6 = [];
for (let i = 0; i < 20; i++) {
  res6[i] = fibo(i);
}
*/

// forEach

let arr = [12, 1, 5, 7, 1, 2];

function myPow(base, exp) {
  if (exp == 1) {
    return base;
  }
  return base * myPow(base, exp - 1);
}

function myPowArr(currentValue, index, array) {
  array[index] = myPow(currentValue, 2);
}

arr.forEach(myPowArr);

console.log(arr);

// к каждому элементу добавить 100
function add100(currentValue, index, array) {
  array[index] = currentValue + 100;
}
arr.forEach(add100);
console.log(arr);

// к каждому элементу добавить 100
function add100_2(currentValue, index, array) {
  array[index] += 100;
}
arr.forEach(add100_2);
console.log(arr);

// forEach для обьектов

const users = [
  {
    name: 'user1',
    age: 20,
  },
  {
    name: 'user2',
    age: 17,
  },
  {
    name: 'user3',
    age: 16,
  },
  {
    name: 'user4',
    age: 18,
  },
];

users.forEach(function (elem) {
  elem.isSelected = false;
});

const adultUsers = users.filter((user) => user.age > 18);

const selectedUsers = users.filter((user) => user.isSelected == true);

const isEveryUserAdult = users.every(checkAdult);

function checkAdult(user) {
  return user.age > 18;
}

const isSomeUserAdult = users.some((user) => user.age > 18);

// вывод массива

let myArr = [1, 2, 6, 4, 3, 5, 6];

//1
console.log('--------------------------------');
for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}
//2
console.log('--------------------------------');
for (let elem of myArr) {
  console.log(elem);
}
//3
console.log('--------------------------------');
myArr.forEach((elem) => console.log(elem));
