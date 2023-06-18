const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = document.querySelector('#value');
counterValue.textContent = 0;
btnDecrement.addEventListener('click', onDecrement);
btnIncrement.addEventListener('click', onIncrement);
function onDecrement() {
	counterValue.textContent = Number(counterValue.textContent) - 1;
}
function onIncrement() {
	counterValue.textContent = Number(counterValue.textContent) + 1;
}

console.log(counterValue.textContent);
