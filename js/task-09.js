function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const changeColorButton = document.querySelector('.change-color');
const spanColorValue = document.querySelector('span.color');

changeColorButton.addEventListener('click', onChangeColorButtonClick);

function onChangeColorButtonClick(event) {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColorValue.textContent = color;
}