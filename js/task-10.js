function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const inputEl = document.querySelector('#controls input');
const butonCreateEl = document.querySelector('button[data-create]');
const buttonDeleteEl = document.querySelector('button[data-destroy]');
function createBoxes(amount) {}
