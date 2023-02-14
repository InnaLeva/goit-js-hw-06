const rangeInput = document.querySelector('#font-size-control');
const spanText = document.querySelector('span#text');

rangeInput.addEventListener('input', onInputRangeChange);

function onInputRangeChange(event) {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
}