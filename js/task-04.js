let counterValue = 0;
const addClickBtn = document.querySelector("[data-action='increment']");
const removeClickBtn = document.querySelector("[data-action='decrement']");

const increment = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue; 
};


addClickBtn.addEventListener('click', increment);

removeClickBtn.addEventListener('click', decrement);

