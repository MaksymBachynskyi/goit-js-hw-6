const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');

inputEl.addEventListener('input', onInput);

function onInput(event) {
	if (!event.currentTarget.value) {
		return (spanEl.textContent = 'Anonymous');
	}
	spanEl.textContent = event.currentTarget.value;
}
