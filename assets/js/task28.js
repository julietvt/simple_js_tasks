var rect = document.getElementById('rect');

rect.addEventListener('click', handlerFun2);

rect.addEventListener('mouseover', handlerFun2);

rect.addEventListener('mousemove', handlerFun2);

function handlerFun1(event) {
  console.log(event.type);
}

function handlerFun2(e) {
  switch (e.type) {
    case 'click':
      e.target.style.backgroundColor = 'red';
      console.log(e.type);
      break;
    case 'mouseover':
      e.target.style.backgroundColor = 'green';
      console.log(e.type);
      break;
    case 'mousemove':
      e.target.style.backgroundColor = 'orange';
      console.log(e.type);
      break;
    default:
      e.target.style.backgroundColor = 'black';
      console.log(e.type);
      break;
  }
}

/* Event
target: указывает на элемент, на котором было вызвано событие

type: указывает на имя события
*/
