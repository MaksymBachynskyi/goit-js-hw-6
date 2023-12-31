const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onValidation);

function onValidation(event) {
	if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
		inputEl.classList.remove('invalid');
		inputEl.classList.add('valid');
	} else {
		inputEl.classList.add('invalid');
	}
}
