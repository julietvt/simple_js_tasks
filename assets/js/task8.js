'use strict';

function SayHi1() {
  console.log('Hello');
}

SayHi1();
//-----------------------------------------
function SayHi2(userName) {
  console.log(`Hello, ${userName} !!!`);
}

let user1 = 'Vasya';
let user2 = 'Masha';
let user3 = 'Tom';
SayHi2(user1);
SayHi2(user2);
SayHi2(user3);
let userName = 'Olga';
SayHi2(userName);
//-----------------------------------------
MySum(5, 1);

function MySum(a, b) {
  let sum;
  sum = a + b;
  console.log('Sum:', sum);
}

MySum(-3.14, 0);
//-----------------------------------------
function FunLine(symbolLine, n) {
  let str = '';
  while (n > 0) {
    str += symbolLine;
    n--;
  }
  console.log(str);
}

FunLine('*', 20);

//-----------------------------------------

function MySum2(a, b) {
  let sum;
  sum = a + b;
  return sum;
}

function MySum3(a, b) {
  return a + b;
}

let r1, r2;
r1 = MySum2(2, 2);
r2 = MySum2(100, 5);
let r3 = r1 * r2;
//-----------------------------------------

function SumNumbers(limit1, limit2, step) {
  let sum = 0;
  for (limit1; limit1 <= limit2; limit1 += step) {
    sum += limit1;
  }
  return sum;
}

let resultSumNumber = SumNumbers(20, 35, 8);
console.log(resultSumNumber);
//-----------------------------------------

function SumNumbers2(limit1 = 1, limit2 = 1, step = 1) {
  let sum = 0;
  for (limit1; limit1 <= limit2; limit1 += step) {
    sum += limit1;
  }
  return sum;
}

let low_limit;
let resultSumNumber2 = SumNumbers2(low_limit, 10);
console.log(resultSumNumber2);

//-----------------------------------------

// switch

function FSum(a, b) {
  return a + b;
}
function FSub(a, b) {
  return a - b;
}
function FMult(a, b) {
  return a * b;
}
function FDiv(a, b) {
  return a / b;
}

let number1, number2;
number1 = 5;
number2 = 7;
let op = '+';
console.log('Hello User!!!');
/*
console.log(FSum(number1, number2));
console.log(FSub(number1, number2));
console.log(FMult(number1, number2));
console.log(FDiv(number1, number2));
*/
if (op == '+') {
  console.log(FSum(number1, number2));
} else if (op == '-') {
  console.log(FSub(number1, number2));
} else if (op == '*') {
  console.log(FMult(number1, number2));
} else if (op == '/') {
  console.log(FDiv(number1, number2));
} else {
  console.log('operator is undefined');
}

// 2 вариант switch

switch (op) {
  case '+':
    {
      console.log(FSum(number1, number2));
    }
    break;
  case '-':
    {
      console.log(FSub(number1, number2));
    }
    break;
  case '*':
    {
      console.log(FMult(number1, number2));
    }
    break;
  case '/':
    {
      console.log(FDiv(number1, number2));
    }
    break;
  default:
    {
      console.log('operator is undefined');
    }
    break;
}

// рекурсия

function MyPow2(x, y) {
  if (y == 1) {
    return x;
  } else {
    return x * MyPow2(x, y - 1);
  }
}

// рекурсия сумма чисел от x до y

function MySum10(x, y) {
  if (y == 1) {
    return x;
  } else {
    return x + MySum10(x, y - 1);
  }
}

// 1 тип function declaration
function Fun1(a, b) {
  return a + b;
}
// 2 type: function expression

const sumFunExpression = function (a, b) {
  return a + b;
};

console.log('funExpression:', sumFunExpression(2, 3));

// 3 type: array function (стрелочные функции)
// !!!!! нет this

const sumArrayFun = (a, b) => {
  return a + b;
};

console.log(sumArrayFun(2, 2));

const sumArrayFun2 = (a, b) => a + b;

console.log(sumArrayFun2(2, 2));
