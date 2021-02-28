const my_pattern = /\W/g;

const inputTaskElem = document.querySelector('input[name="task"]');
const createTaskButtonElement = document.getElementById('createTaskButton');
inputTaskElem.oninput = onInputHandler;
createTaskButtonElement.addEventListener('click', onCreateTaskButtonClick);
let isValid = false;

function onCreateTaskButtonClick(e) {
  const taskInputElem = document.querySelector(
    'input[placeholder="Enter your task"]'
  );
  taskInputElem.value = '';
}

function onInputHandler(e) {
  isValid = my_pattern.test(this.value);
  if (isValid) {
    // this e.target
    this.classList.remove('invalidStyle');
    this.classList.add('validStyle');
  } else {
    this.classList.add('invalidStyle');
    this.classList.remove('validStyle');
  }
}
