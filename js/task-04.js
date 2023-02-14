let counterValue = 0;

const refs = {
    labelCounter: document.querySelector('#value'),
    buttonDecrement: document.querySelector('[data-action="decrement"]'),
    buttonIncrement: document.querySelector('[data-action="increment"]'),
};

refs.buttonDecrement.addEventListener('click', OnButtonDecrement);
refs.buttonIncrement.addEventListener('click', OnButtonIncrement);

function OnButtonDecrement(event) {
    counterValue -= 1;
    refs.labelCounter.textContent = counterValue;
};

function OnButtonIncrement(event) {
    counterValue += 1;
    refs.labelCounter.textContent = counterValue;
}