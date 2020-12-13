'use strict';

// 1. Написать функцию которая выводит числа от limit1 до limit2 в обратном порядке

function Fun1(limit1, limit2) {
  if (limit1 > limit2) {
    let buf;
    buf = limit1;
    limit1 = limit2;
    limit2 = buf;
  }
  while (limit2 >= limit1) {
    console.log(limit2);
    limit2--;
  }
}
console.log('task1');
Fun1(5, 10);

// 2. функцию. вывести число наоборот 1234 -> 4321

function Fun2(num) {
  let str = '',
    res = '';
  str += num;
  console.log(str);
  let i;
  for (i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

console.log('task2');
console.log(Fun2(1234));

// 3. функцию. подсчитать сумму со 2 задания

function Fun3() {
  let res = Fun2('349238409238049823094823094802394');
}

// 4. функцию. подсчитать сумму четных элентов массива

// 5* функцию. 2 массива. вернуть массив общий без повторов

// 6 функцию перевода строки в регистр (CamelCase)
