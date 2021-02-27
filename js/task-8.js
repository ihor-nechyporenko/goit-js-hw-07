const inputNumberValue = document.querySelector('#controls').firstElementChild;
const renderBtn = document.querySelector('#controls').children[1];
const destroyBtn = document.querySelector('#controls').children[2];
const divBoxesEl = document.querySelector('#boxes');

let amount = 0;

function onInputNumberValueChange(event) {
    amount = +event.currentTarget.value;
    return amount;
}

inputNumberValue.addEventListener('input', onInputNumberValueChange);

renderBtn.addEventListener('click', function() {
    let arr = [];

    for (let i = 0; i < amount; i += 1) {
        arr.push(i);
    }

    const makeBoxesList = (arr => {
        let widtHeight = 30;

        return arr.map(num => {
            const boxEl = document.createElement('div');
            boxEl.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            boxEl.style.width = `${widtHeight}px`;
            boxEl.style.height = `${widtHeight}px`;
            boxEl.style.margin = '5px';
            widtHeight += 10;
        
            return boxEl;
        });
    });
        
    const boxesListEl = document.querySelector('#boxes');
    const boxes = makeBoxesList(arr);
    boxesListEl.append(...boxes);
});

destroyBtn.addEventListener('click', () => {
    divBoxesEl.innerHTML = '';
    inputNumberValue.value = null;
});