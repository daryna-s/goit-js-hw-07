const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', validationInput);

function validationInput(a) {
 const validTargetLength = a.currentTarget.value.length;
    const inputLength = Number(a.currentTarget.dataset.length);
    
    if (validTargetLength === inputLength) {
        a.currentTarget.classList.remove(`invalid`);
        a.currentTarget.classList.add(`valid`);
    } else {
        a.currentTarget.classList.remove(`valid`);
        a.currentTarget.classList.add(`invalid`);
    }
}