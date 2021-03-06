'use strict';

// Изменить бэкграунд страницы используя константу которую храним в локал сторежд

const BG_PAGE = 'BG_PAGE';
const COLOR_VALUE = /[0-9].{1,4}/g;

const colorInputs = document.querySelectorAll('label>input[type="range"]');
for (const i of colorInputs) {
  i.oninput = updateColor;
}

function updateColor() {
  let value = 'rgba(';
  colorInputs.forEach(function (range, index, list) {
    if (index == list.length - 1) {
      value = value + range.value + ')';
    } else {
      value = value + range.value + ',';
    }
  });
  console.log(value);
  localStorage.setItem(BG_PAGE, document.body.style.backgroundColor);
  document.body.style.backgroundColor = value;
}

window.onload = function () {
  const value = localStorage.getItem(BG_PAGE);
  document.body.style.backgroundColor = value;
  //заполнить значение ползунков
  const colorValues = value.match(COLOR_VALUE);
  colorValues.forEach(function (value, index) {
    colorValues[index].value = value;
  });
};
