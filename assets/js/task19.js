/*
 обработка ошибок

 try{
     // наш код который может выбросить исключение или ошибку

 } catch(e){
     // блок выбрасывает и обрабатывает ошибку/исключение
     // e - объект ошибки 
     //e.name - тип ошибки, e.message - сообщение
 } finally{
    // выполняется всегда вне зависимости от ошибки . гарантия 100%
 }
 //блоки catch finally являються не обязательными 
*/

const myPow = (n) => {
  if (typeof n !== 'number') {
    throw new TypeError('param n mast be a number');
  }
  if (!Number.isSafeInteger(n)) {
    throw new RangeError('param n is not a safe integer');
  }
  return n * n;
};

const testFun = () => {
  let result = null;
  try {
    //result = myPow(4);
    result = myPow('hello');
  } catch {
    result = 'Error for myPow';
  } finally {
    return result;
  }
};

console.log('Result of function = ', testFun());
