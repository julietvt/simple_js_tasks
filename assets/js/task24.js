// СТРУКТУРЫ ДАННЫХ!!!!!

// линейный поиск

const arr = [14, 234, 65, 23, 8, 2, 645, 3];

const indexOf8 = find(arr, 8);

function find(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      return i;
    }
  }
  return -1;
}

// LIFO
class Stack {
  constructor(maxSize = 10000) {
    this._size = 0;
    this._maxSize = maxSize;
  }

  get size() {
    return this._size;
  }

  get isEmpty() {
    return this._size === 0;
  }
  push(value) {
    if (this._size > this._maxSize) {
      throw new RangeError('Stack is overflow');
    }
    this[this._size++] = value;
    return this._size;
  }
  pop() {
    if (this.isEmpty) {
      return;
    }
    const value = this[--this._size];
    delete this[this._size];
    return value;
  }
  pick() {
    if (this.isEmpty) {
      return;
    }
    return this[this._size - 1];
  }
}

const stack1 = new Stack(10);
stack1.push(5);
stack1.push(-89);
stack1.push({ name: 'test' });
stack1.push(1);
stack1.push(12);
