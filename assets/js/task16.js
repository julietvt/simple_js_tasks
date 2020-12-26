/*
Создайте коллекцию Set с начальными значениями 1,2,3. 
С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.
Добавите еще несколько элементов.
С помощью цикла for-of переберите ее значения и выведите в консоль.
Найдите сумму этих значений.
Удалите элемент 2.
Очистите всю коллекцию.
*/

const set1 = new Set([1, 2, 3]);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);

const newArr = [1, 2, 3];
const set3 = new Set(newArr);

let hasElem3, hasElem4;
hasElem3 = set1.has(3);
hasElem4 = set1.has(4);
console.log(hasElem3, hasElem4);

console.log(set1.has(1));

set1.add(4);
set1.add(5);

for (let elem of set1) {
  console.log(elem);
}

let sum = 0;
for (let elem of set1) {
  sum += elem;
}
console.log(sum);

set1.delete(2);

set1.clear();

/*
Map

Пусть даны 2 массива. Создайте коллекцию Map из этих массивов.
Получите список ключей и значений отдельно.
Получите текущее количество элементов.
Добавьте и удалите элемент
Произведите поиск по ключу
*/

const arr1 = [1, 2, 3, 4];
const arr2 = [7, 8, 9, 10];

let map1 = new Map();
map1.set(arr1, arr2);

// let map2 = new Map([arr1,arr2]);

/*
const z1 = ['first',100], z2 = ['second',200];

const Map200 = new Map([z1,z2]);

Map200

console.log(Map200.keys())

console.log(Map200.values())

map.set('third',300)

Map200.set('third',300)

Map200

Map200.delete('first')

Map200

Map200.get('second')

*/

function mapFromArrays(array1, array2) {
  const map1 = new Map();
  let counter = 0; //index for keys
  for (let i of array1) {
    map1.set(counter, i);
    counter++;
  }
  for (let i of array2) {
    map1.set(counter, i);
    counter++;
  }
  return map1;
}
