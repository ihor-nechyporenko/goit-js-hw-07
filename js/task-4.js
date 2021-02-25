let counterValue = 0;

const incrementBtn = document.querySelector('#counter').lastElementChild;
const decrementBtn = document.querySelector('#counter').firstElementChild;

function increment() {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
}

function decrement() {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
}

incrementBtn.addEventListener('click', increment);

decrementBtn.addEventListener('click', decrement);
    