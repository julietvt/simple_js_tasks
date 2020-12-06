/*
// task1
let user_name;
user_name = prompt('Enter your name');
alert(`Hello, ${user_name} !!!`);

//task2
let x, res;
x = parseFloat(prompt('Enter x', 500));
res = x * 30 - 100;
console.log(res);

// task3
let a, b, s;
a = 5;
b = 10;
s = a * b;
console.log(s);

// task5
const current_year = 2020;
const last_year = current_year - 1;
const fut_year = current_year + 1;
console.log('last year: ', last_year);
console.log('future year: ', fut_year);

//task7
// a1*y + a2 = a3;
let a1,a2,a3,y;
a1 = 2;
a2 = 5;
a3 = 20;
y = (a3 - a2) / a1;
console.log('ax + b = c   :', y);

*/

/*
//task8
let h;
h = parseFloat(prompt('Введи значение времени в часах'));
let m = h * 60;
let s = m * 60;
console.log('hours:', h, ' . m=', m, 's=', s);
*/

/*
// task9
const PI = 3.14;
let r, v, s;
r = parseFloat(prompt('r='));
v = (3 / 4) * PI * r ** 3;
s = 4 * PI * r ** 2;
console.log('Обьем шара ', v, 'площадь шара ', s);
*/

/*
//task10
let N, M;
N = parseInt(prompt('Введите количество тетрадей'));
M = parseInt(prompt('Введите количество ручек'));
let priceN = 12,
  priceM = 7;
let total = N * priceN + M * priceM;
console.log(total);
*/

/*
//task14
let answer_user, answer_comp;
answer_user = prompt('2+2=?');
answer_comp = 4;
if (answer_user == answer_comp) {
  alert("You're right!");
} else {
  alert('Bad answer :(');
}
*/

/*
//task15
let a, b;
let answer_user, answer_comp;
a = prompt('Введи первое число');
b = prompt('Введи второе число');
answer_user = prompt('Чему равна их произведение?');
answer_comp = a * b;
if (answer_user == answer_comp) {
  alert(`You're right! It's ${answer_comp}`);
} else {
  alert(`Bad answer :( It,s  ${answer_comp}`);
}
*/

/*
//task4
let sum, countM, pr;
sum = 1000;
countM = 18;
pr = 0.05; // %
pr /= 100; // 0-1
//sum = sum + sum * pr* countM;
//sum = sum * (1 + pr)* countM;
sum *= (1 + pr) * countM;
console.log(sum);
*/

/*
// task6
let year;
year = Number(prompt('Введите год'));
if (year % 4 == 0) {
  console.log('Ваш год ', year, '- высокосный');
} else {
  console.log('Ваш год', year, '- не высокосный');
}
*/

/*
//task11
let N, M;
N = parseInt(prompt('Введите количество тетрадей'));
M = parseInt(prompt('Введите количество ручек'));
let priceN = 12,
  priceM = 7;
let total = N * priceN + M * priceM;
let sale = 2;
console.log('before total=', total);
if (total >= 500) {
  //total = total - (total * sale) / 100;
  // total -= total*sale/100;
  // total = (100-sale)/100 * total;
  total *= (100 - sale) / 100;
}
console.log('after total=', total);
*/

/*
// task13
let N = parseInt(prompt('Введите количество'));
let price = parseInt(prompt('Введите цену'));
let total = N * price;
let sale1 = 2,
  sale2 = 3; // %
let sum1 = 500,
  sum2 = 0;
console.log('before total=', total);
if (total >= sum2) {
  total *= (100 - sale2) / 100;
} else if (total >= sum1) {
  total *= (100 - sale1) / 100;
} else {
  total = total;
}
console.log('after total=', total);
*/

/*

//task12
//12 напишите программу которая по введенному числу прописывает сумму в гривнах и
//   копейках. например, 120.75  вернет строку “120 грн. 75 коп.”

let num = parseFloat(prompt('Enter num:'));
let grn = Math.floor(num);
let kop = Math.floor((num - grn) * 100);

console.log(`${grn} грн. ${kop} коп.`);
*/

//task16
let guessUserNum = parseInt(prompt('Enter your ** number:'));

let edin = guessUserNum % 10;
let des = (guessUserNum - edin) / 10;
// des = parseInt(guessUserNum / 10)
//  des = Math.floor(guessUserNum / 10)
let newDes = (des * 2 + 5) * 5 + 10 + edin;
console.log(newDes - 35);
