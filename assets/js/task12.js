// создать функции
// 1. принимает массив и выводит сумму нечетных элементов
// 2. удалить элемент по указанному индексу

// task1
function Task1(array) {
  let res = 0;
  for (let i = 0; i < array.length; i = i + 2) {
    res += array[i];
  }
  return res;
}
//task2
function Task2(array, index) {
  delete array[index];
  return array;
}
//task2
function Task2_2(array, index) {
  return array.splice(index, 1);
}
//task3
// добавить элемент по индексу
function Task3(array, index, newValue) {
  return array.splice(index, 0, newValue);
}

let a = [2, 7, 0, -9, 4, 6, 0, -4, -2, 8, 1];
console.log(a);

console.log('Task1');
let resTask1 = Task1(a);
console.log(resTask1);

/*
console.log('Task2');
let resTask2 = Task2(a, 3);
console.log(resTask2);
*/
console.log('Task2_2');
let resTask2_2 = Task2_2(a, 3);
console.log(resTask2_2);

console.log('Task3');
let resTask3 = Task3(a, 3, 100);
console.log(resTask3);

//Типы функций
// 1.function definition
/*
function sum(a,b){
    return a+b;
}
*/
// 2. function expression
/*
const sum = function(a,b){
    return a+b;
};
*/
// 3. array-function
/*
const sum = (a,b) => a+b;
или
const sum = (a,b) => {
    return a+b;
};
*/

// Задания

// 1 Вывести только высокостные годы из диапазона start - end
// 2 Вернуть первые N элементов массива
// 3 Вернуть последние N элементов массива
// 4 наути сумму элементов массива (* произведений, сумма квадратов) reduce
// -5 вернуть случайный элемент массива
// -6 развернуть массив наоборот
// 7 переместить элемент массива из одной позиции в другую (без сдвига)

function myFunction1(start, end) {
  let years = [];
  for (let i = start; i <= end; i++) {
    years.push(i);
  }
  let leapYears = [];
  years.forEach(function (y) {
    if (isLeapYear(y)) leapYears.push(y);
  });
  return leapYears;
}

function isLeapYear(year) {
  if (year % 4 == 0 && year % 100 != 0) {
    return true;
  }
  return false;
}

function myFunction2(arr, n) {
  return arr.splice(0, n);
}
function myFunction3(arr, n) {
  return arr.splice(arr.length - n);
}

function myFunction6(arr) {
  return arr.reverse();
}

function myFunction5(arr) {
  let random_index = Math.floor(Math.random() * arr.length);
  let random_element = arr[random_index];
  return random_element;
}

function myFunction7(arr, index1, index2) {
  return arr.splice(index2, 0, arr.splice(index1, 1)[0]);
}

function myFunction4(arr) {
  arr.reduce(reducer1);
}

//функция редьюсер для суммы элементов массива
const reducer1 = (sum, elem) => sum + elem;
//функция редьюсер для произведения элементов массива
const reducer2 = (mult, elem) => mult * elem;
// сумма квадратов
const reducer3 = (result, elem) => result + elem ** 2;

let testArray = [2, 7, 0, -9, 4, 6, 0, -4, -2, 8, 1];
console.log('NEW TASKS');
console.log('testArray:', testArray);

console.log('task2');
const r2 = myFunction2(testArray, 4);
console.log(r2);

console.log('task3');
const r3 = myFunction3(testArray, 4);
console.log(r3);

console.log('task5');
const r5 = myFunction5(testArray);
console.log(r5);

console.log('task6');
const r6 = myFunction6(testArray);
console.log(r6);
