//ЦИКЛЫ

// цикл for
// for(начальное условие ; конечное условие; шаг) {
// действия для выполнения
//}

// сложить числа от 1 до 100
let sum = 0;
let number;
/*
for (number = 1; number <= 100; number = number + 1) {
  sum = sum + number;
}
*/

/*
for (number = 1; number <= 100; number++) {
  sum += number;
}
console.log('sum 1:100 = ', sum);

// сложить числа от 1 до 100 только четные
for (number = 2; number <= 100; number = number + 2) {
  sum += number;
}
console.log('sum 1:100 четные = ', sum);
// сложить числа от 1 до 100 только нечетные
for (number = 1; number <= 100; number = number + 2) {
  sum += number;
}
console.log('sum 1:100 нечетные = ', sum);

// вывести 10 звезд
let i,
  str = '';
for (i = 1; i <= 10; i++) {
  str = str + '*';
}
console.log(str);
*/

/*
// запросить число и количество нулей для его дополнения. вывести результат
let userNumber = +prompt('Enter integer number');
let countOfZeros = 5;
let i,
  result = '';
let flag_neg = false; // число положительное
if (userNumber < 0) {
  flag_neg = true;
  userNumber = -userNumber;
  result += '-';
}
for (i = 1; i <= 5; i++) {
  result += '0';
}
result += userNumber;

console.log(result);
*/

/*
// таблица умножение на N=5
let N = 5;
let i;
for (i = 1; i <= 10; i++) {
  console.log(`${i} * ${N} = ${i * N}`);
}
*/

// Вычеслить сумму N штук 1/1 + 1/2 + 1/3 + 1/4 ...

// 1 + 1/2 + 1/4 + 1/8 + 1/16 + ...
/*
let i,
  N = 10,
  summa = 1;
for (i = 2; i <= N; i++) {
  console.log(1 / i);
  summa = summa + (1 / (i - 1)) * 2;
}
console.log('Result of task is', summa);
*/
// while

// while(условие){
//    //действия
//}

/*
let i = 1,
  str = '';
while (i <= 10) {
  str = str + '*';
  i++;
}
console.log(str);
*/

/*

// sum 1 - 100
let num = 250,
  s = 0;

while (num <= 100) {
  s = s + num;
  num = num + 1;
}
console.log(s);

// do-while
do {
  s = s + num;
  num = num + 1;
} while (num <= 100);
console.log(s);
*/

// вечные циклы
// for(;;){}
// while(true){}

let userAnswer, compAnswer;
compAnswer = 4;
// 1 var
do {
  userAnswer = +prompt('2+2=?');
} while (userAnswer != compAnswer);

// 2 var
while (userAnswer != compAnswer) {
  userAnswer = +prompt('2+2=?');
}
// 3 var
for (;;) {
  userAnswer = +prompt('2+2=?');
  if (userAnswer == compAnswer) break;
}
