function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const spanEl = document.querySelector('span.color');
const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('button.change-color');
buttonEl.addEventListener('click', onChangeColor);
function onChangeColor(event) {
	bodyEl.style.backgroundColor = getRandomHexColor();
	spanEl.textContent = bodyEl.style.backgroundColor;
}
