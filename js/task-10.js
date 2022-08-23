
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
controls: document.querySelector(`#controls`),
input: document.querySelector(`input`),
createBtn: document.querySelector(`[data-create]`),
destroyBtn: document.querySelector(`[data-destroy]`),
}
const boxEl = document.querySelector(`#boxes`);


ref.createBtn.addEventListener(`click`, createBoxes);

function createBoxes(amount) {
    const divs = [];
    amount = ref.input.value;

    for (let i = 0; i < amount; i += 1){
        let div = document.createElement('div');
        div.style.backgroundColor = getRandomHexColor();
        div.style.width = `${30 + i * 10}px`;
        div.style.height = `${30 + i * 10}px`;

        divs.push(div);
    };

    boxEl.append(...divs);
};

ref.destroyBtn.addEventListener(`click`, destroyBoxes);

function destroyBoxes() {
    boxEl.innerHTML = "";
    ref.input.value = '';
};