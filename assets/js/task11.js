/*
// Область видимости
// Замыкание
// Поднятие переменных
console.log(test);

if (true) {
  console.log(test);
  if (true) {
    console.log(test);
    if (true) {
      console.log(test);
      if (true) {
        console.log(test);
        if (true) {
          var test = 10;
          console.log(test);
        }
        console.log(test);
      }
      console.log(test);
    }
    console.log(test);
  }
  console.log(test);
}

console.log(test);

console.log(test2);
//let test2 = 20;
var test2 = 20;
console.log(test2);
test2 += 100;
console.log(test2);
const test3 = 100;
let test4 = 100;
*/

/*
function f() {
  atest = 10;
  console.log(this);
}

f();
*/

/*
for (var i = 0; i < 5; i++) {}
console.log(i);
for (let i = 0; i < 5; i++) {}
console.log(i);
*/
/*
const test = 10;
function myFun() {
  console.log(test);
}
myFun();
*/
function f() {
  let x = 10;
  return function () {
    return x++;
  };
}
console.log('resultFunction');
let resultFunction = f();
console.log(resultFunction());
console.log(resultFunction());
console.log(resultFunction());
console.log(resultFunction());
console.log(resultFunction());
console.log(resultFunction());
console.log(resultFunction());
console.log(resultFunction());
console.log('resultFunction2');
let resultFunction2 = f();
console.log(resultFunction2());
console.log(resultFunction2());
console.log(resultFunction2());

function f2() {
  let x = 10;
  function testFunction() {
    console.log('*');
  }
  return function () {
    testFunction();
    return x++;
  };
}
console.log('resultFunction3');
let resultFunction3 = f2();
console.log(resultFunction3());
console.log(resultFunction3());
console.log(resultFunction3());
console.log('resultFunction4');
let resultFunction4 = f2();
console.log(resultFunction4());
console.log(resultFunction4());
console.log(resultFunction4());
