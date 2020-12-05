// запросить у пользователя число и возвести его в квадрат

let x;
x = prompt('Введи число');
let res = x * x;
console.log(res);

// среднее арифметическое двух чисел
let x1 = 30.45,
  x2 = 12.872342;
res = (x1 + x2) / 2;
console.log(res);

// площать квадрата
let a = 4;
res = a * a;
console.log(res);

// унарный минус -
let z = 5;
res = -z;
console.log(res);

// инкремент ++
// тоже самое х++ или х=х+1
res = ++a;
console.log(res);

// декремент --
// тоже самое х-- или х=х-1
res = --a;
console.log(res);

let z2 = 10;
console.log(z2);
console.log(z2--);
console.log(z2);
console.log(--z2);
console.log(z2);

// остаток от деления %

/*
1 обьявить переменные 'hello user', 10, 3.1415, true и вывести значение в консоль
2 запросить сумму продаж и вывести итог . за месяц происходит увеличение на 10%
3 запросить пользователя 3-х значное число и вывести последнюю цифру (оператор%)
4 * запросить пользователя 3-х значное число и вывести сумму чисел
*/

/*преопразование типов. число*/
/*
let res;
let newx = prompt('enter some num');



res = +newx + 2;
res = parseInt(newx) + 2;
res = parseFloat(newx) + 2;


let newx2 = parseFloat(prompt('enter some num'));
// int - целочисленное значение
// float - дробное значение
*/

// task1
let str = 'hello user',
  x3 = 10,
  x4 = 3.1415,
  x5 = true;
console.log(str, x3, x4, x5);
console.log('srt=', str, 'x3=', x3, 'x4=', x4, 'x5=', x5);
console.log(`srt=${str} x3=${x3} x4=${x4} x5=${x5}`);

//task2
let sum_sales = parseFloat(prompt('Enter sum of sales'));
res = 1.1 * sum_sales;
console.log(sum_sales);

//task3
let user_value = parseInt(prompt('Enter 3-digits number'));
let n1 = user_value % 10;

//task4
// продолжение 3
let n2 = ((user_value % 100) - n1) / 10;
let n3 = parseInt(user_value / 100);
let sum = n1 + n2 + n3;
console.log(sum);
