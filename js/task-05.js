const input = document.querySelector('#name-input');

const label = document.querySelector('#name-output');

input.addEventListener('input', event => {
  label.textContent = event.currentTarget.value ? `${event.currentTarget.value}` : `Anonymous`;
});
