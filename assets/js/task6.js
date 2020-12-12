/*
let array1;
array1 = [10, 20, 30, 40, 50];
array2 = ['hello', 'vasya', 'sun'];
let i, n;
n = 5;
// n=array1.length

// четные for (i = 1; i < n; i = i + 2)
// нечетнеы for (i = 0; i < n; i = i + 2)
for (i = 0; i < n; i++) {
  console.log(array1[i]);
}

let n2 = 3;
for (i = 0; i < n2; i++) {
  console.log(array2[i]);
}

let array3 = [5, 'hello', 3.14, 100, true, 'hello vasya!!!'];
for (i = 0; i < array3.length; i++) {
  console.log(array3[i]);
}

*/

let a = [30, 5, 2, -7, 0, 1, 0, -3, 0, 0, 5, 100, -2, 1];
console.log(a.length);
let i;
for (i = 0; i < a.length; i++) {
  console.log(a[i]);
}
//вывести все отрицальные элементы
console.log('вывести все отрицальные элементы');
for (i = 0; i < a.length; i++) {
  if (a[i] < 0) {
    console.log('Element=', a[i], ' and index=', i);
  }
}
//вывести все нули и их количество
let countOfZeros = 0;
console.log('вывести все нули и их количество');
for (i = 0; i < a.length; i++) {
  if (a[i] == 0) {
    countOfZeros++; //  countOfZeros = countOfZeros + 1
    console.log('index of zero=', i);
  }
}
console.log('Count of zeros is ', countOfZeros);

//вывести четные элементы (по значению!)
console.log('вывести четные элементы (по значению!)');
for (i = 0; i < a.length; i++) {
  if (a[i] % 2 == 0) {
    console.log('Element=', a[i], ' and index=', i);
  }
}
// вывести четные индексы элементов
console.log('вывести четные индексы элементов ');
for (i = 0; i < a.length; i = i + 2) {
  console.log('Element=', a[i], ' and index=', i);
}
// сумма элементов массива
let sum = 0;
console.log('сумма элементов массива');
for (i = 0; i < a.length; i++) {
  sum = sum + a[i];
}
console.log('Sum is ', sum);

// Задача 1. найти сумму отрицательных элементов массива
// Задача 2. заменить все нулевые элементы на 100
// Задача 3. если элемент массива отрицальтельный - умножить его на 2,
// иначе - поделить на 3
// Задача 4. найти максимальную сумму в парах соседних элементов
//2 7 3 9 0 1

//task1
console.log('-------------');
let sumNegElemArray = 0;
for (i = 0; i < a.length; i++) {
  if (a[i] < 0) {
    sumNegElemArray += a[i]; // sumNegElemArray=sumNegElemArray+a[i]
  }
}
console.log('Sum of negative elements of array is ', sumNegElemArray);
//task2
console.log('-------------');
for (i = 0; i < a.length; i++) {
  if (a[i] == 0) {
    a[i] = 100;
    //console.log(a[i]);
  }
}
//task3
console.log('-------------');
for (i = 0; i < a.length; i++) {
  if (a[i] < 0) {
    a[i] = a[i] * 2; // a[i] *= 2;
  } else {
    a[i] = a[i] / 3; // a[i] /= 3;
  }
}
console.log(a);

//task4
console.log('-------------');

// Найти максимальный элемент массива
let maxElem = a[0];
let indexMaxElem = 0;
for (i = 0; i < a.length; i++) {
  if (a[i] > maxElem) {
    maxElem = a[i];
    indexMaxElem = i;
  }
}
console.log('Max of array = ', maxElem, ', index = ', indexMaxElem);

//4 5 9 0 1 4 100
//maxElem=4;
//5 > 4???  maxElem = 5
//9 > 5 ??   maxElem = 9
//0 > 9 >??  maxElem = 9
//1 > 9 ?? maxElem = 9
//4 > 9 ?? maxElem = 9
//100 > 9 ?? maxElem = 100

// Найти минимальный элемент массива
let minElem = a[0];
let indexMinElem = 0;
for (i = 0; i < a.length; i++) {
  if (a[i] < minElem) {
    minElem = a[i];
    indexMinElem = i;
  }
}
console.log('Min of array = ', minElem, ', index = ', indexMinElem);

// task4
// сумма между соседями
let sumNeighbors = [];
for (i = 0; i < a.length - 1; i++) {
  sumNeighbors[i] = a[i] + a[i + 1];
}
//ищем максимальную сумму
let maxNeighbor = sumNeighbors[0];
for (i = 0; i < a.length; i++) {
  if (sumNeighbors[i] > maxNeighbor) {
    maxNeighbor = sumNeighbors[i];
  }
}
console.log('Result: ', maxNeighbor);
//1 var
​let maxSum = 0; 
for (let i = 0; i < array.length-1; i++){ 
    if (array[i] + array[i + 1] > maxSum) { 
        maxSum = array[i] + array[i + 1]; 
    } 
}
//2 var
let a = [1, 0, -4, 7, 0, 4, -8, 9, 0, -3];
let sum = 0;
for (let i = 0; i < a.length-1; i = i + 2) {
  console.log(`Сумма соседних элементов ${a[i] + a[i + 1]}`);
  if (sum < a[i] + a[i + 1]) {
    sum = a[i] + a[i + 1];
  }
}
console.log("Max", sum);