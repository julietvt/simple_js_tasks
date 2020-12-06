/*
логические операторы (if)
&& логическое и
|| логическое или
! логическое нет
*/

/*
let x;
x = +prompt();
// делиться 4 и не делиться на 100
if (x % 4 == 0 && x % 100 != 0) {
  alert('yes');
} else {
  alert('no');
}

// делиться 4 или не делиться на 100
if (x % 4 == 0 || x % 100 != 0) {
  alert('yes');
} else {
  alert('no');
}

//задача
// если число четное и больше 100 поделить его на 2, иначе умножить 3
// * если число четное и больше 100 поделить его на 2, если четное но меньше 100 вычесть 20, иначе умножить 3

let user_value;
user_value = +prompt();
if (user_value % 2 == 0 && user_value >= 100) {
  user_value /= 2; // user_value = user_value / 2;
} else {
  user_value *= 3; // user_value = user_value * 3;
}



// 2* 1 var
if (user_value % 2 == 0 && user_value >= 100) {
  user_value /= 2;
} else if (user_value % 2 == 0 && user_value < 100) {
  user_value -= 20;
} else {
  user_value *= 3;
}

// 2* 2 var
if (user_value % 2 == 0) {
  if (user_value >= 100) {
    user_value /= 2;
  } else {
    user_value -= 20;
  }
} else {
  user_value *= 3;
}

//6
let user_year = parseInt(prompt('Enter year:'));
if (user_year % 100 == 0 && user_year % 400 == 0) {
  console.log('visokosniy');
} else if (user_year % 100 == 0) {
  console.log('ne visokosniy');
} else if (user_year % 4 == 0) {
  console.log('visokosniy');
} else {
  console.log('ne visokosniy');
}

// task
// если число x отрицательное y =100
// если число x от 0 до 100   у=200
// если число x больше 100    y=300
let x, y;
x = +prompt();
*/
/*
if(x<0){
    y=100;
}
else if(x>=0 && x<=100){
    y=200;
}
else if(x>100){
    y=300;
}
*/
/*
if (x < 0) {
  y = 100;
} else if (x >= 0 && x <= 100) {
  y = 200;
} else{
  y = 300;
}
*/
/*
if (x < 0) {
  y = 100;
} else if (x > 100) {
  y = 300;
} else {
  y = 200;
}
*/

// тернарные выражения
// (условие) ? да : нет

// 1 var
/*
let accessAllowed;
let age = prompt('Сколько вам лет?');
if (age >= 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
alert(accessAllowed);
*/
// 2 var
let age = prompt('Сколько вам лет?');
let accessAllowed = age > 18 ? true : false;

// если число х отрицательное y=0 иначе у=1
let x, y;
y = x < 0 ? 0 : 1;
