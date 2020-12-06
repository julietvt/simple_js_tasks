let x;
x = parseInt(prompt('Enter number'));

/* 
if (условие){
    // действия по выполнию условию
} 
else{
    // действия по НЕ выполнию условию

}
*/

/*
if (условие1){
    // действия по условию1
}
else if(условие2){
    //действия по условию 2 (условие1 здесь не выполнено)
}
else if(условие3){
    //действия по условию 3 (условие1 и условие2 здесь не выполнено)
}
else{
    // действия иначе (ни одно условие не было выполнено)
}

*/

// прмиер
if (x > 10) {
  console.log('Число больше 10');
  console.log('Число больше 10');
  console.log('Число больше 10');
} else {
  console.log('Число меньше 10');
  console.log('Число меньше 10');
}
//пример
if (x >= 10) {
  console.log('Число больше или равно 10');
} else if (x < 5) {
  console.log('Число меньше 5');
} else {
  console.log('Число от 5 до 10');
}

//операторы для условия
// меньше <
//больше   >
// меньше или равно <=
// больше или равно >=
// равно ==
// не равно !=

// пример
if (x == 10) {
  console.log('x равен 10');
} else {
  console.log('x НЕ равен 10');
}

// пример четное/нечетное число
if (x % 2 == 0) {
  console.log('четное');
} else {
  console.log('нечетное');
}

// Задача 1. начислить 10% от суммы если продажи больше 500$
// Задача 2. покупка: товар1 по сумме 10 грн, товар 2 по сумме 15 грн. начислить скидку 5% если сумма больше 200 грн

//task1
let sum_sales;
sum_sales = parseFloat(prompt('Enter your sale'));
if (sum_sales >= 500) {
  sum_sales = sum_sales * 1.1;
}
console.log(sum_sales);

//task2
let price1 = 10,
  price2 = 15,
  count1,
  count2;
let sale = 0.05;
let sum;
let limit = 200;
count1 = parseInt(prompt('Enter count of product1'));
count2 = parseInt(prompt('Enter count of product2'));
sum = count1 * price1 + count2 * price2;
if (sum >= limit) {
  sum = sum * (1 - sale);
}
console.log(sum);
