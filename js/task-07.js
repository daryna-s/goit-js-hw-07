const input = document.querySelector('#font-size-control');

const label = document.querySelector('#text');

input.addEventListener(`input`, onInputChange);

function onInputChange(event) {
    label.style.fontSize = event.currentTarget.value + 'px';    
};