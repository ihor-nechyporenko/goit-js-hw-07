const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange() {
    event.currentTarget.value.length === 0 
        ? nameOutput.textContent = 'незнакомец' 
        : nameOutput.textContent = event.currentTarget.value;
}