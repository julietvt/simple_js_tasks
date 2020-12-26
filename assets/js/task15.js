// String

// написать функцию которая сравнивает длину строк

function fun1(str1, str2) {
  /*
  if(str1.length > str2.length) return 1;
  else if(str1.length < str2.length) return -1;
  else return 0;
  */
  return str1.length > str2.length ? 1 : str1.length < str2.length ? -1 : 0;
}

// разбить на массив сслов

function fun2(str) {
  return str.split(' ');
}

// получить длины слов

function fun3(str) {
  const strArray = str.split(' ');
}
