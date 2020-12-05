// переменные
/*
let
можем обьявлять и инициализировать сразу или после
переприсваивать любое значение и любого типа
выполнять любые операции
*/

let x;
let y, z;
x = 'hello';
y = 5;
z = true;
let user = 'Vasya';
console.log(x);
x = 'world';
console.log(x);
x = 'Masha';
console.log(x);
x = 100;
console.log(x);
//sum x and y
console.log(x + y);
let sum = x + y;
console.log(sum);
x = 'Hello ';
console.log(x + user);

let _ = 100;
let $ = 10;
let result = _ + $;
console.log(result);

let x1 = 100,
  x2 = 200;
console.log('x1=', x1, ' x2=', x2);
x1 = x2;
console.log('x1=', x1, ' x2=', x2);
let x3 = 'new string';
x1 = x3;
console.log('x1=', x1, ' x2=', x2, ' x3=', x3);
console.log(`x1 = ${x1}`);

/*
ТИПЫ ДАННЫХ
number (x=10, x=3.14)
string ("hello",'hello','Hello world!')
boolean (true, false)
null
undefined
object
*/

/*КОНСТАНТЫ
1 инициализация сразу с обьявлением
2 нельзя переопределять
*/
const MY_COLOR = 'RED';
const PI = 3.14;
console.log(MY_COLOR);
/*
константу переопределить нельзя! будет ошибка
MY_COLOR = 'BLACK';
console.log(MY_COLOR);
*/
/*
константа не проинициализирована. ошибка!
const USER_AGE;
USER_AGE = 20;
console.log(USER_AGE);
*/
const USER_AGE = 20;
console.log(USER_AGE);

// alert() - вывод диал.окно сообщение
// prompt() - диал. окно ввода информации от пользователя

//ввод информации
/*
let user_name;
user_name = prompt('Enter your name');
alert(`Hello, ${user_name} !`);
console.log(`Hello, ${user_name} !`);

let user_num;
user_num = prompt('Enter some number');
console.log(user_num);
*/

/*операторы*/
let z1, z2, res;
z1 = 100;
z2 = 200;
res = z1 + z2;
console.log(res);
res = z1 - z2;
console.log(res);
res = z1 * z2;
console.log(res);
res = z1 / z2;
console.log(res);

res = z1 + 5;
console.log(res);
res = z1 - 5;
console.log(res);
res = z1 * 5;
console.log(res);
res = z1 / 5;
console.log(res);

res = res * 10;
console.log('res=', res);
res = res * 10;
console.log('res=', res);
// сокращенная запись
//res = res + 10; тоже самое что и res += 10;
//res = res - 10; тоже самое что и res -= 10;
//res = res * 10; тоже самое что и res *= 10;
//res = res / 10; тоже самое что и res /= 10;

/*
x = y + 5;

x = x + 5; // x+=5;
*/
