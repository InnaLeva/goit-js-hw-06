const refs = {
    textInput: document.querySelector('#name-input'),
    textOutput: document.querySelector('#name-output'),
};

refs.textInput.addEventListener('input', maketextOutput);

function maketextOutput(event) {
    refs.textOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        refs.textOutput.textContent = 'Anonymous';
    }
}