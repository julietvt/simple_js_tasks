/*

document.getElementById('id1').onclick = function () {
  const button_id2 = document.getElementById('id2');
  button_id2.hidden = true;
};
*/
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
