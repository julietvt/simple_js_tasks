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
  // добавляет элемент
  push(value) {
    if (this._size >= this._maxSize) {
      throw new RangeError('Stack is overflow');
    }
    this[`_${this._size++}`] = value;
    return this._size;
  }
  // удалил и вернут элемент
  pop() {
    if (this.isEmpty) {
      return;
    }
    const value = this[--this._size];
    delete this[this._size];
    return value;
  }
  // возвращает элемент последний
  pick() {
    if (this.isEmpty) {
      return;
    }
    return this[this._size - 1];
  }

  [Symbol.iterator]() {
    return new StackIterator(this);
  }
}

const stack1 = new Stack(10);
stack1.push(5);
stack1.push(-89);
stack1.push({ name: 'test' });
stack1.push(1);
stack1.push(12);

// Задание
// Есть последовательность скобок (),{},[]
// проверить насколько коректная последовательность скобок

function lightCheck(
  str,
  options = {
    brackets: {
      '(': ')',
      '{': '}',
      '[': ']',
    },
  }
) {
  const bracketsStack = [];
  const brackets = options.brackets;

  for (const s of str) {
    if (brackets[s]) {
      bracketsStack.push(s);
      continue;
    }
    if (Object.values(brackets).includes(s)) {
      if (brackets[bracketsStack[bracketsStack.length - 1]] == s) {
        bracketsStack.pop();
      } else {
        return false;
      }
    }
  }
  return bracketsStack.length == 0;
}

// Пусть есть словарик. сделать перевод

const vocabulary = new Map();
vocabulary.set('cat', 'кот');
vocabulary.set('dog', 'собака');
vocabulary.set('squirrel', 'белка');
vocabulary.set('create', 'создать');
vocabulary.set('read', 'читать');
vocabulary.set('update', 'обновить');
vocabulary.set('delete', 'удалить');

const translate = (str) =>
  str
    .split(' ')
    .map((w) => vocabulary.get(w))
    .join(' ');

const str = 'cat dog read squirrel';
console.log(translate(str));

// stack + iterator

class StackIterator {
  constructor(stack) {
    this._stack = stack;
    this._start = 0;
  }
  next() {
    if (this._start >= this._stack.size) {
      return {
        value: undefined,
        done: true,
      };
    }
    return {
      value: this._stack[`_${this._start}`],
      //value: this.stack[this.start],
      done: this._start++ === this._stack.size,
    };
  }
}

const stack2 = new Stack();
for (let i = 0; i < 100; i++) {
  stack2.push(i * (Math.random() * 100));
}
const array2 = [...stack2];

// список

class ListItem {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  addBegin(value) {
    const newHead = new ListItem(value, this.head, null);
    if (this.head) {
      this.head.prev = newHead;
    }
    this.head = newHead;
    if (!this.tail) {
      this.tail = newHead;
    }
    this.size++;
  }
  addEnd(value) {
    const newTail = new ListItem(value, null, this.tail);
    if (this.tail) {
      this.tail.next = newTail;
    }
    this.tail = newTail;
    if (!this.head) {
      this.head = newTail;
    }
    this.size++;
  }
  [Symbol.iterator]() {
    let current = this.head;
    return {
      next() {
        if (current) {
          const value = current.value;
          current = current.next;
          return {
            value: value,
            done: false,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  }
}

const list = new List();
list.addEnd('Tom');
list.addEnd(100);
list.addEnd({ stud: { name: 'John Smith' } });
console.log(list);
