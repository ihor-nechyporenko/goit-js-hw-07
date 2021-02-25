const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(input.getAttribute('data-length'))) {
        input.classList.add('valid');
        if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');
        }
    } else {
        input.classList.add('invalid');
        if (input.classList.contains('valid')) {
            input.classList.remove('valid');
        }
    }
}