const input = document.querySelector('#font-size-control');
console.log(input);
const textEl = document.querySelector('#text');

input.addEventListener('input', onInputChange);

function onInputChange() {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}