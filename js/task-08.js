const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit);
function onSubmit(evnt) {
	evnt.preventDefault();
	const { email, password } = evnt.currentTarget.elements;
	const data = {
		email: email.value,
		password: password.value,
	};
	if (!data.email || !data.password) {
		window.alert('all fields must be field up');
	} else {
		console.log(data);
		evnt.currentTarget.reset();
	}
}
