/*

document.getElementById('id1').onclick = function () {
  const button_id2 = document.getElementById('id2');
  button_id2.hidden = true;
};
*/

/*
let slider = document.querySelector('.slider');
let thumb = document.querySelector('.thumb');
thumb.onmousedown = function (event) {
  event.preventDefault();
  let newShiftX = event.clientX - thumb.getBoundingClientRect().left;
  document.addEventListener('mousemove', onMouseMoveAction);
  document.addEventListener('mouseup', onMouseUpAction);

  function onMouseMoveAction(event) {
    // new left position
    let newLeftPosition =
      event.clientX - newShiftX - slider.getBoundingClientRect().left;
    if (newLeftPosition < 0) newLeftPosition = 0;
    let rightPosition = slider.offsetWidth - thumb.offsetWidth;
    if (newLeftPosition > rightPosition) newLeftPosition = rightPosition;
    thumb.style.left = newLeftPosition + 'px';
    console.log('left:', newLeftPosition, 'right:', rightPosition);
  }

  function onMouseUpAction() {
    document.removeEventListener('mouseup', onMouseUpAction);
    document.removeEventListener('mousemove', onMouseMoveAction);
  }
};
*/

// home task
/*
Дан элемент div с id=elem
- Добавьте ему класс www.
- Удалите у него класс www.
- Проверьте наличие у него класса www.
- Добавьте содержимое в элемент (текст)
Реализуйте событие: по нажатию на элемент (см задание 2) пользователь получит сообщение о нажатии
*/

let elem1 = document.getElementById('elem');
elem1.classList.add('www');
elem1.classList.remove('www');
let isContain = elem1.classList.contains('www');
console.log(isContain);
elem1.innerText = 'Hello!';
elem1.addEventListener('click', hello);
function hello(event) {
  alert('Element clicked');
}
